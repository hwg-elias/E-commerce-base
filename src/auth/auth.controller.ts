import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dtos/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { Role } from './enums/role.enum';
import { JwtAuthGuard } from './strategies/guards/jwt.guard';
import { RolesGuard } from './strategies/guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { LocalAuthGuard } from './strategies/guards/local.guard';
import { LoginUserDTO } from 'src/user/dtos/login-user.dto';
import { UserType } from 'src/user/types/user.type';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  async register(@Body('user') createUserDTO: CreateUserDTO) {
    const user = await this.userService.addUser(createUserDTO);
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body('user') loginUserDTO: LoginUserDTO) {
    return await this.authService.login(loginUserDTO);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('/user')
  getProfile(@Request() req): Promise<UserType> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/admin')
  getDashboard(@Request() req): Promise<UserType> {
    return req.user;
  }
}
