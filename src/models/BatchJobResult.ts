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
 * @interface BatchJobResult
 */
export interface BatchJobResult {
    /**
     * Position of this job in the request array
     * @type {number}
     * @memberof BatchJobResult
     */
    index: number;
    /**
     * 
     * @type {string}
     * @memberof BatchJobResult
     */
    jobId?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchJobResult
     */
    error?: string;
}

/**
 * Check if a given object implements the BatchJobResult interface.
 */
export function instanceOfBatchJobResult(value: object): value is BatchJobResult {
    if (!('index' in value) || value['index'] === undefined) return false;
    return true;
}

export function BatchJobResultFromJSON(json: any): BatchJobResult {
    return BatchJobResultFromJSONTyped(json, false);
}

export function BatchJobResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchJobResult {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'jobId': json['job_id'] == null ? undefined : json['job_id'],
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function BatchJobResultToJSON(json: any): BatchJobResult {
    return BatchJobResultToJSONTyped(json, false);
}

export function BatchJobResultToJSONTyped(value?: BatchJobResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'index': value['index'],
        'job_id': value['jobId'],
        'error': value['error'],
    };
}

