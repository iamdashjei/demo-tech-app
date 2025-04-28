export interface Consumer {
    id: number;
    name: string;
    description: string;
    plannerType: string;
    systemSetupId: number | null;
    fund?: any[];
    trigger: string[];
}