import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name?: string): User[] {
       try {
        return this.userService.getUsers(name)
       } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This is a error',
        }, HttpStatus.FORBIDDEN, {
            cause: error
        })
       }
       
    }

    @ApiOkResponse({type: User, description: 'One User'})
    @ApiNotFoundResponse()
    @Get(':id')
    async getUsersById(@Param('id', ParseUUIDPipe) id: string) {
        const user = await this.userService.getUsersById(id)
        if (!user) {
            throw new NotFoundException()
        }

        return user
    }

    @ApiCreatedResponse({type: User})
    @ApiBadRequestResponse()
    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto): User {
        return this.userService.createUser(createUserDto)
    }


}
