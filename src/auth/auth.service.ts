import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isPasswordValid = await this.usersService.isValidPassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is incorrect');
    }
    return user;
  }
}
