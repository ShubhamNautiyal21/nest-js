import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Interceptor incoming");

    return next.handle().pipe(
      map((data) => {
        // Modify the response payload before sending it out
        return {
          ...data,
          appVersion: "v1.0.1", // ✅ Add custom data
        };
      }),
    );
  }
}
