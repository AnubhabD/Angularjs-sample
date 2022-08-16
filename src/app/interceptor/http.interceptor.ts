import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { catchError, Observable } from 'rxjs';

// import { ApiData } from '../interfaces/api.interface';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey = 'reactiveApi';
    request = request.clone({
      setHeaders: {
        'api-key': apiKey,
      },
    });

    const handleApi = next.handle(request).pipe(
      //   map((res) => {
      //     console.log('Passed through the interceptor in response');
      //     return res;
      //   }),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.error(errorMsg);
        console.error(error, "globalError");
        throw error;
        // throw new Error(`${error.status}:${error.statusText}`);
      })
    );
    return handleApi;
  }
}