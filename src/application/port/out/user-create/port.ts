import { UserCreate } from "../../../../domain/UserCreate";


export interface OutPort {
    create(userCreate: UserCreate): Promise<boolean>
}