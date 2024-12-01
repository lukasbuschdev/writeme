import { messageData } from "../types/types";

export class Message {
    id: number;
    key: string;
    content: string;
    date: Date;

    constructor(data: Omit<messageData, "id" | "date">) {
        this.id = Date.now();
        this.key = data.key;
        this.content = data.content;
        this.date = new Date();
    }
}