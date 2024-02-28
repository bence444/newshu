import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from 'env/environment';

export const newsApiInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: { Authorization: environment.apiKey }
  });

  return next(req);
};
