export type userData = {
    id: number;
    name: string;
    password: string;
    mail: string;
    created: Date;
    contactIds?: string[];
    blockedContactIds?: string[];
    chatIds?: string[];
    messageIds?: string[];
    isLoggedIn: boolean;
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
    id: number;
    searchAttempt: number;
    inputData: string;
}

export type chatData = {
    id: number;
    key: string;
    userIds: string[];
    messageIds: string[];
}

export type messageData = {
    id: number;
    key: string;
    content: string;
    date: Date;
}

export type suspendedUsersData = {
    suspendedUserIds?: string[];
}