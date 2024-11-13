import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "src/common/database/abstract.repository";
import {  User, UserSchema } from "./user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractEntity } from "src/common/database/abstract.entity";

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
    protected readonly logger = new Logger( UsersRepository.name );
    
    protected readonly loggerContext: string = UsersRepository.name;
    protected readonly modelName: string = AbstractEntity.name;
    protected readonly modelSchema: any = UserSchema;
    protected readonly collectionName: string = 'users';

    constructor(@InjectModel(User.name) userModel: Model<User>) {
        super(userModel);
    }
}