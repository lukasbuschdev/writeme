import { suspiciousActivityData } from "../types/types";

export class SuspiciousActivity {
    searchAttempt: number;
    inputData: string;
    attemptDate: number;

    constructor(data: Omit<suspiciousActivityData, "attemptDate">) {
        this.searchAttempt = data.searchAttempt;
        this.inputData = data.inputData;
        this.attemptDate = Date.now();
    }
}