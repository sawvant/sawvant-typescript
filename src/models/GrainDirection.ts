/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


/**
 * Which axis the grain runs along. On a part it is relative to the part's own length and width; on a sheet it is relative to the sheet's. A part may only be placed so that its grain ends up parallel to the sheet's. A sheet that omits the field is treated as having its grain along its length, so `length` and `width` on a part constrain rotation even when the sheet says nothing. Use `none` on the part for material without a grain, or `free_same` to let the solver choose one orientation and apply it to every instance of that part.
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

