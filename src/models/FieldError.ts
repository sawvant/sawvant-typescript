/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FieldError
 */
export interface FieldError {
    /**
     * JSON path of the field, e.g. `parts[2].width` or `machine.max_levels`.
     * For `INVALID_JSON` the path has no array index (`parts.width`).
     * 
     * @type {string}
     * @memberof FieldError
     */
    field: string;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    reason: string;
}

/**
 * Check if a given object implements the FieldError interface.
 */
export function instanceOfFieldError(value: object): value is FieldError {
    if (!('field' in value) || value['field'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function FieldErrorFromJSON(json: any): FieldError {
    return FieldErrorFromJSONTyped(json, false);
}

export function FieldErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldError {
    if (json == null) {
        return json;
    }
    return {
        
        'field': json['field'],
        'reason': json['reason'],
    };
}

export function FieldErrorToJSON(json: any): FieldError {
    return FieldErrorToJSONTyped(json, false);
}

export function FieldErrorToJSONTyped(value?: FieldError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'field': value['field'],
        'reason': value['reason'],
    };
}

