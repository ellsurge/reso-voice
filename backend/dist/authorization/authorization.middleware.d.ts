import { NestMiddleware } from '@nestjs/common';
export declare class AuthorizationMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
