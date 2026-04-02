/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


/**
 * 
 * @export
 */
export const CutDirection = {
    Default: 'default',
    Rip: 'rip',
    Cross: 'cross'
} as const;
export type CutDirection = typeof CutDirection[keyof typeof CutDirection];


export function instanceOfCutDirection(value: any): boolean {
    for (const key in CutDirection) {
        if (Object.prototype.hasOwnProperty.call(CutDirection, key)) {
            if (CutDirection[key as keyof typeof CutDirection] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CutDirectionFromJSON(json: any): CutDirection {
    return CutDirectionFromJSONTyped(json, false);
}

export function CutDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CutDirection {
    return json as CutDirection;
}

export function CutDirectionToJSON(value?: CutDirection | null): any {
    return value as any;
}

export function CutDirectionToJSONTyped(value: any, ignoreDiscriminator: boolean): CutDirection {
    return value as CutDirection;
}

