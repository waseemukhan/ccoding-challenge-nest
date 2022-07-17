import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(() => {
    service = new UserService(new PrismaService);
    controller = new UserController(service);
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return user list', async () => {
      const result = ['test'];
      jest.spyOn(service, "getAllUser").mockImplementation(() => result);

      expect(await controller.user()).toBe(result);
    });
  });
});
