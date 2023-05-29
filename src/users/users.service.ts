import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  
    private users: User[] = [];

    async findOne(username: string): Promise<User | undefined> {
      return this.users.find(user => user.username === username);
    }
}
