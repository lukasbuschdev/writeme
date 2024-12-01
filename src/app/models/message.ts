import { messageData } from "../types/types";

export class Message {
    id: string;
    key: string;
    content: string;
    date: Date;

    constructor(data: messageData) {
        this.id = data.id ?? '';
        this.key = data.key;
        this.content = data.content;
        this.date = data.date ?? new Date();
    }
}