/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { FieldError } from './FieldError';
import {
    FieldErrorFromJSON,
    FieldErrorFromJSONTyped,
    FieldErrorToJSON,
    FieldErrorToJSONTyped,
} from './FieldError';
import type { ErrorCode } from './ErrorCode';
import {
    ErrorCodeFromJSON,
    ErrorCodeFromJSONTyped,
    ErrorCodeToJSON,
    ErrorCodeToJSONTyped,
} from './ErrorCode';

/**
 * 
 * @export
 * @interface ApiErrorBody
 */
export interface ApiErrorBody {
    /**
     * 
     * @type {ErrorCode}
     * @memberof ApiErrorBody
     */
    code: ErrorCode;
    /**
     * Human-readable explanation. Do not parse it; use `code` and `details`.
     * @type {string}
     * @memberof ApiErrorBody
     */
    message: string;
    /**
     * 
     * @type {Array<FieldError>}
     * @memberof ApiErrorBody
     */
    details?: Array<FieldError>;
}



/**
 * Check if a given object implements the ApiErrorBody interface.
 */
export function instanceOfApiErrorBody(value: object): value is ApiErrorBody {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function ApiErrorBodyFromJSON(json: any): ApiErrorBody {
    return ApiErrorBodyFromJSONTyped(json, false);
}

export function ApiErrorBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiErrorBody {
    if (json == null) {
        return json;
    }
    return {
        
        'code': ErrorCodeFromJSON(json['code']),
        'message': json['message'],
        'details': json['details'] == null ? undefined : ((json['details'] as Array<any>).map(FieldErrorFromJSON)),
    };
}

export function ApiErrorBodyToJSON(json: any): ApiErrorBody {
    return ApiErrorBodyToJSONTyped(json, false);
}

export function ApiErrorBodyToJSONTyped(value?: ApiErrorBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ErrorCodeToJSON(value['code']),
        'message': value['message'],
        'details': value['details'] == null ? undefined : ((value['details'] as Array<any>).map(FieldErrorToJSON)),
    };
}

