import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '@app/_models';
import { Admin } from '@app/_models';
//import { User } from '../_models';

const users: User[] = 
[{ id: 1, username: 'crus', password: 'chapingo', firstName: 'Uach', lastName: 'Uach' },
{ id: 2, username: 'yadi', password: 'yadi', firstName: 'Yari', lastName: 'User' },
{ id: 3, username: 'nuevo', password: '1234', firstName: 'Yari', lastName: 'User' }];

  const admins: Admin[]=
  [{id: 2, username: 'yadi', password: 'chapingo',firstName: 'Uach', lastName:'Uach'}];
//const users = require('../_models/User')
//users.use(cors());

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/admins/authenticate') && method === 'POST':
                    return authenticateAdmin()
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                    case url.endsWith('/admins') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password );
            if (!user) return error('usuario o contraseña incorrectos');
            return ok({
                
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName
                
            })
        }

        function authenticateAdmin(){
            const { username, password } = body;
            const admin = admins.find(x => x.username === username && x.password === password );
            if (!admin) return error('usuario o contraseña incorrectos');
            return ok({
                
                    id: admin.id,
                    username: admin.username,
                    firstName: admin.firstName,
                    lastName: admin.lastName
                
            })

        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
            //return ok (admins);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('crus:chapingo')}`,`Basic ${window.btoa('yadi:yadi')}`,`Basic ${window.btoa('nuevo:1234')}`,`Basic ${window.btoa('yadi:chapingo')}`;
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};