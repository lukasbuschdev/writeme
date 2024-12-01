import { settingsData } from "../types/types";

export class Setting {
    isDarkmode: boolean;
    chatLifetime: string;
    messageLifetime: string;
    language: string;

    constructor(data: settingsData) {
        this.isDarkmode = data.isDarkmode;
        this.chatLifetime = data.chatLifetime;
        this.messageLifetime = data.messageLifetime;
        this.language = data.language;
    }
}