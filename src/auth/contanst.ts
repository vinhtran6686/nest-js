import { ConfigService } from '@nestjs/config';

export const jwtConstants = (configService: ConfigService) => ({
  secret: configService.get<string>('JWT_ACCESS_TOKEN'),
  expiresIn: configService.get<string>('JWT_ACCESS_EXPIRES_IN'),
});
