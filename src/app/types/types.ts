export type userData = {
    id?: string;
    name: string;
    password: string;
    mail?: string;
    contactIds?: string[];
    blockedContactIds?: string[];
    chatIds?: string[];
    messageIds?: string[];
    isOnline: boolean;
    settings: settingsData;
}

export type settingsData = {
    isDarkmode: boolean;
    chatLifetime: string;
    messageLifetime: string;
    language: string;
}

export type chatData = {
    id?: string;
    key: string;
    userIds: string[];
    messageIds: string[];
}

export type messageData = {
    id?: string;
    key: string;
    content: string;
    date?: Date;
}