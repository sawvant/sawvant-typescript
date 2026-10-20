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
 * @interface DemoErrorError
 */
export interface DemoErrorError {
    /**
     * 
     * @type {string}
     * @memberof DemoErrorError
     */
    code: DemoErrorErrorCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof DemoErrorError
     */
    message: string;
}


/**
 * @export
 */
export const DemoErrorErrorCodeEnum = {
    DemoCodeInvalidJSON: 'INVALID_JSON',
    DemoCodeValidation: 'VALIDATION_ERROR',
    DemoCodeBodyTooLarge: 'BODY_TOO_LARGE',
    DemoCodeLimitExceeded: 'DEMO_LIMIT_EXCEEDED',
    DemoCodeInfeasible: 'INFEASIBLE',
    DemoCodeRateLimited: 'RATE_LIMITED',
    DemoCodeBusy: 'DEMO_BUSY',
    DemoCodeInternal: 'INTERNAL_ERROR'
} as const;
export type DemoErrorErrorCodeEnum = typeof DemoErrorErrorCodeEnum[keyof typeof DemoErrorErrorCodeEnum];


/**
 * Check if a given object implements the DemoErrorError interface.
 */
export function instanceOfDemoErrorError(value: object): value is DemoErrorError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function DemoErrorErrorFromJSON(json: any): DemoErrorError {
    return DemoErrorErrorFromJSONTyped(json, false);
}

export function DemoErrorErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DemoErrorError {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'],
    };
}

export function DemoErrorErrorToJSON(json: any): DemoErrorError {
    return DemoErrorErrorToJSONTyped(json, false);
}

export function DemoErrorErrorToJSONTyped(value?: DemoErrorError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'message': value['message'],
    };
}

