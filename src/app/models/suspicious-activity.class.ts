import { suspiciousActivityData } from "../types/types";

export class SuspiciousActivity {
    id: number;
    searchAttempt: number;
    inputData: string;

    constructor(data: Omit<suspiciousActivityData, "id">) {
        this.id = Date.now();
        this.searchAttempt = data.searchAttempt;
        this.inputData = data.inputData;
    }
}