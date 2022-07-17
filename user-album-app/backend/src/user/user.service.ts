import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  // getAllUser() {
  //     return "Hello!!!";
  // }
  constructor(private dbService: PrismaService) {
  }

  async getAllUser()
  {
    return await this.dbService.users.findMany();
  }

}
