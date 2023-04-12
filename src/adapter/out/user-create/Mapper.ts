import { UserCreate } from "../../../domain/UserCreate";
import { UserEntity } from "./UserEntity";

export class Mapper{
    constructor() {
    }

    static entityToDomain(entity : UserEntity): UserCreate{
        let userCreate = new UserCreate(entity.fisrtName, entity.lastName)
        return userCreate
    }

    static domainToEntity(userCreate : UserCreate): UserEntity{
        let userEntity = new UserEntity(1,userCreate.fisrtName, userCreate.lastName)
        return userEntity
    }
}