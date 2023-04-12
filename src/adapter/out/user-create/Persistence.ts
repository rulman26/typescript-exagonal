import { OutPort } from "../../../application/port/out/user-create/port";
import { UserCreate } from "../../../domain/UserCreate";


export class Persistence implements OutPort{

    async create(userCreate: UserCreate): Promise<boolean> {
        console.log("PERSISTENCIA")
        console.log(userCreate)
        return true
    }

}