import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto';
import path from 'path';

@Controller({
  version: '1',
  path: 'auth'
})
@ApiTags('auth')

export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() LoginDto: LoginDto) {
    return this.authService.login(LoginDto);
  }
}
