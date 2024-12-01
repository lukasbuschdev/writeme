export type userData = {
    id?: string;
    name: string;
    password: string;
    mail?: string;
    created: Date;
    contactIds?: string[];
    blockedContactIds?: string[];
    chatIds?: string[];
    messageIds?: string[];
    isOnline: boolean;
    settings: settingsData;
    suspiciousActivity: suspiciousActivityData[];
    isSuspended?: boolean;
}

export type settingsData = {
    isDarkmode: boolean;
    chatLifetime: string;
    messageLifetime: string;
    language: string;
}

export type suspiciousActivityData = {
    searchAttempt: number;
    inputData: string;
    attemptDate: Date;
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

export type suspendedUsersData = {
    suspendedUserIds?: string[];
}