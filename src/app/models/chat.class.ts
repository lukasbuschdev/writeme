import { chatData } from "../types/types";

export class Chat {
    id: number;
    key: string;
    userIds: string[];
    messageIds: string[];

    constructor(data: Omit<chatData, "id">) {
        this.id = Date.now();
        this.key = data.key;
        this.userIds = data.userIds;
        this.messageIds = data.messageIds;
    }
}