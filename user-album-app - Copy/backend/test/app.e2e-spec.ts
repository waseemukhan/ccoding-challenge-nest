import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let service: UserService;

  beforeEach(async () => {

    const UserServiceProvider = {
      provide: UserService,
      useFactory: () => ({
        getAllUser: jest.fn(() => []),
      })
    }

    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserServiceProvider],
      imports: [AppModule],
    }).compile();

    service = moduleFixture.get<UserService>(UserService);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('UserService - should be defined', () => {
    expect(service).toBeDefined();
  });

});
