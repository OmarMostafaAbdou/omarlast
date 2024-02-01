import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set(
      'authorization',
      `Bearer ${this.auth.Getfromlocalstorage()?.token}`
    );
    const authReq = req.clone({ headers });
    console.log(req);
    console.log(authReq);

    return next.handle(authReq);
  }
}
