/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { ApiErrorBody } from './ApiErrorBody';
import {
    ApiErrorBodyFromJSON,
    ApiErrorBodyFromJSONTyped,
    ApiErrorBodyToJSON,
    ApiErrorBodyToJSONTyped,
} from './ApiErrorBody';

/**
 * Structured error. Used by `POST /v1/optimize`; the other endpoints still
 * return `Error` and move to this shape later.
 * 
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     * 
     * @type {ApiErrorBody}
     * @memberof ApiError
     */
    error: ApiErrorBody;
}

/**
 * Check if a given object implements the ApiError interface.
 */
export function instanceOfApiError(value: object): value is ApiError {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ApiErrorFromJSON(json: any): ApiError {
    return ApiErrorFromJSONTyped(json, false);
}

export function ApiErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiError {
    if (json == null) {
        return json;
    }
    return {
        
        'error': ApiErrorBodyFromJSON(json['error']),
    };
}

export function ApiErrorToJSON(json: any): ApiError {
    return ApiErrorToJSONTyped(json, false);
}

export function ApiErrorToJSONTyped(value?: ApiError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': ApiErrorBodyToJSON(value['error']),
    };
}

