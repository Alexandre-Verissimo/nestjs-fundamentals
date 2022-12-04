import { ApiProperty } from "@nestjs/swagger"
import { IsAlphanumeric, MaxLength, IsNumber } from "class-validator"

export class CreateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(20)
    name: string

    @ApiProperty({required: false})
    @IsNumber()
    age?: number
}