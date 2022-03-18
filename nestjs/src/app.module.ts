import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CustomersModule } from "./customers/customers.module";
import { LoggerMiddleware } from "./middlewares/logger.middleware";

@Module({
  imports: [CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware) // Nest Middleware or function
            .forRoutes(AppController);
    }
}
