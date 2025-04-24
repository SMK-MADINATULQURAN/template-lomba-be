import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsEmail, IsInt, IsString, Length, MinLength } from 'class-validator';
import { IsUnique } from 'src/utils/validator/unique.validator';
import { User } from './auth.entity';

export class UserDto {
 
}



