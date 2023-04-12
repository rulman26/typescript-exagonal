import { UserCreate } from "../../domain/UserCreate";
import { Command } from "../port/in/user-create/command";
import { InPort } from "../port/in/user-create/port";
import { OutPort } from "../port/out/user-create/port";

export class UserCreateService implements InPort {

    constructor(
        private readonly outPort: OutPort,
    ) { }


    async create(command: Command): Promise<boolean> {
        let userCreate = new UserCreate(command.fisrtName, command.lastName)
        return this.outPort.create(userCreate)
    }

}