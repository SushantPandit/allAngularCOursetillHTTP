import {
  HttpEventType,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { tap } from "rxjs/operators";
export class AuthInterCeptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next) {
    const modifiedRequest = req.clone({
      headers: req.headers.append("auth", "xyz"),
    });
    return next.handle(modifiedRequest);
  }
}
