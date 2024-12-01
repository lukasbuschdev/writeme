import { suspendedUsersData } from "../types/types";

export class SuspendedUsers {
    suspendedUserIds: string[];

    constructor(data: suspendedUsersData) {
        this.suspendedUserIds = data.suspendedUserIds ?? [];
    }
}