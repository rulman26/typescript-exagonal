import { Command } from "./command";


export interface InPort {
    create(command: Command): Promise<boolean>
}