import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './passport/local.stagegy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule, PassportModule],
})
export class AuthModule {}
