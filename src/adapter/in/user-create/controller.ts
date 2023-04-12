import { Command } from "../../../application/port/in/user-create/command";
import { InPort } from "../../../application/port/in/user-create/port";


export class UserCreateController{
    constructor(
        private readonly inPort: InPort,
    ) { }

    run() {
        let command = new Command("Rulman","Ferro Arone")
        this.inPort.create(command)
    }
}