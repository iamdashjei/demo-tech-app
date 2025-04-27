export interface Consumer {
    name: string;
    description: string;
    plannerType: string;
    systemSetupId: number | null;
    fund?: any[];
    trigger: string;
}