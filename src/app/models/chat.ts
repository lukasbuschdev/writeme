import { chatData } from "../types/types";

export class Chat {
    id: string;
    key: string;
    userIds: string[];
    messageIds: string[];

    constructor(data: chatData) {
        this.id = data.id ?? '';
        this.key = data.key;
        this.userIds = data.userIds;
        this.messageIds = data.messageIds;
    }
}