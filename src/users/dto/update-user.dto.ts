import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';
import { IsString } from 'class-validator';

// Sử dụng PartialType để đánh dấu tất cả các trường là tùy chọn
// và OmitType để loại bỏ trường 'password' khỏi DTO cập nhật
export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password'] as const),
) {
  @IsOptional()
  @IsString()
  abc?: string; // thêm 1 trường khác khi nhận từ client
}
