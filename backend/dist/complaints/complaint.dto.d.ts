import { User } from "src/users/user.schema";
export declare class CreateDto {
    title: string;
    user: User;
    subject: string;
    category: string;
    description: string;
    priority: string;
    desiredOutcome: string;
}
