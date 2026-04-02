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
export const GrainDirection = {
    None: 'none',
    Length: 'length',
    Width: 'width',
    FreeSame: 'free_same'
} as const;
export type GrainDirection = typeof GrainDirection[keyof typeof GrainDirection];


export function instanceOfGrainDirection(value: any): boolean {
    for (const key in GrainDirection) {
        if (Object.prototype.hasOwnProperty.call(GrainDirection, key)) {
            if (GrainDirection[key as keyof typeof GrainDirection] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GrainDirectionFromJSON(json: any): GrainDirection {
    return GrainDirectionFromJSONTyped(json, false);
}

export function GrainDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrainDirection {
    return json as GrainDirection;
}

export function GrainDirectionToJSON(value?: GrainDirection | null): any {
    return value as any;
}

export function GrainDirectionToJSONTyped(value: any, ignoreDiscriminator: boolean): GrainDirection {
    return value as GrainDirection;
}

