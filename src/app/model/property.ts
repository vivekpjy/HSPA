import { ipropertyBase } from "./ipopertyBase";

export class Property implements ipropertyBase{
    Id!: number;
    SellRent!: number;
    Name!: string;
    PType?: string;
    BHK?: number;
    FType?: string;
    Price!: number;
    builtArea!: number;
    CarpetArea?: number;
    Address!: string;
    Address2?: string;
    City!: string;
    FloorNo?: string;
    TotalFloor?: string;
    RTM!: number;
    AOP?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: number;
    Maintenance?: number;
    Possession?: string;
    Image?: string;
    Description?: string;
    PostedOn!: string;
    PostedBy!: number;
}