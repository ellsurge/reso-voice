import { User } from "src/users/user.schema"

export class CreateDto{
    title:String;
    user: User;
    subject:string;
    category:string;
    description:string;
    file:string;
    priority:string;
    desiredOutcome:string;
    terms:boolean;

}
