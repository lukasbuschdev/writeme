import { userData, settingsData, suspiciousActivityData } from "../types/types";

export class User {
    id: string;
    name: string;
    password: string;
    mail: string;
    created: Date;
    contactIds: string[];
    blockedContactIds: string[];
    chatIds: string[];
    messageIds: string[];
    isOnline: boolean;
    settings: settingsData;
    suspiciousActivity?: suspiciousActivityData[];
    isSuspended?: boolean;

    constructor(data: userData) {
        this.id = data.id ?? '';
        this.name = data.name;
        this.password = data.password;
        this.mail = data.mail ?? '';
        this.created = data.created;
        this.contactIds = data.contactIds ?? [];
        this.blockedContactIds = data.blockedContactIds ?? [];
        this.chatIds = data.chatIds ?? [];
        this.messageIds = data.messageIds ?? [];
        this.isOnline = data.isOnline ?? false;
        this.settings = data.settings;
        this.suspiciousActivity = data.suspiciousActivity ?? [];
        this.isSuspended = data.isSuspended ?? false;
    }
}