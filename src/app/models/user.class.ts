import { userData, settingsData } from "../types/types";
import { SuspiciousActivity } from "./suspicious-activity.class";

export class User {
    id: number;
    name: string;
    password: string;
    mail: string;
    created: Date;
    contactIds: string[];
    blockedContactIds: string[];
    chatIds: string[];
    messageIds: string[];
    isLoggedIn: boolean;
    settings: settingsData;
    suspiciousActivity: SuspiciousActivity[];
    isSuspended: boolean;

    constructor(data: Omit<userData, "id">) {
        this.id = Date.now();
        this.name = data.name;
        this.password = data.password;
        this.mail = data.mail ?? '';
        this.created = data.created;
        this.contactIds = data.contactIds ?? [];
        this.blockedContactIds = data.blockedContactIds ?? [];
        this.chatIds = data.chatIds ?? [];
        this.messageIds = data.messageIds ?? [];
        this.isLoggedIn = data.isLoggedIn ?? false;
        this.settings = data.settings;
        this.suspiciousActivity = data.suspiciousActivity ?? [];
        this.isSuspended = data.isSuspended ?? false;
    }
}