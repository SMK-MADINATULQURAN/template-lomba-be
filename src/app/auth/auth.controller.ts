import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard, JwtGuardRefreshToken } from '../../config/jwt-guard.config';

import {
  MessagePattern,
  Payload,
  Ctx,
  KafkaContext,
} from '@nestjs/microservices';

UseGuards
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(){
    return "ok"
  }
 
}
