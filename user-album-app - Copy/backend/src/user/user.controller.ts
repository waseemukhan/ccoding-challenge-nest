import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){
      this.user();
    }
    /**
     * Get users
     * @returns 
     */
    @Get()
       async user() {
        return await this.userService.getAllUser();
           }
}
