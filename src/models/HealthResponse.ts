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
 * @interface HealthResponse
 */
export interface HealthResponse {
    /**
     * 
     * @type {string}
     * @memberof HealthResponse
     */
    status: string;
}

/**
 * Check if a given object implements the HealthResponse interface.
 */
export function instanceOfHealthResponse(value: object): value is HealthResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function HealthResponseFromJSON(json: any): HealthResponse {
    return HealthResponseFromJSONTyped(json, false);
}

export function HealthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function HealthResponseToJSON(json: any): HealthResponse {
    return HealthResponseToJSONTyped(json, false);
}

export function HealthResponseToJSONTyped(value?: HealthResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
    };
}

