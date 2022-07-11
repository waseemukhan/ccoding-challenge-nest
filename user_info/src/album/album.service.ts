import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumService {
  getAlbum() {
      throw new Error('Method not implemented.');
  }
  constructor(private dbService: PrismaService) {

  }
}
