/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { BatchJobResult } from './BatchJobResult';
import {
    BatchJobResultFromJSON,
    BatchJobResultFromJSONTyped,
    BatchJobResultToJSON,
    BatchJobResultToJSONTyped,
} from './BatchJobResult';

/**
 * 
 * @export
 * @interface BatchAccepted
 */
export interface BatchAccepted {
    /**
     * 
     * @type {string}
     * @memberof BatchAccepted
     */
    batchId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BatchAccepted
     */
    jobIds: Array<string>;
    /**
     * Number of jobs in the request
     * @type {number}
     * @memberof BatchAccepted
     */
    total: number;
    /**
     * Number of jobs successfully enqueued
     * @type {number}
     * @memberof BatchAccepted
     */
    created: number;
    /**
     * Present only when one or more jobs failed to enqueue
     * @type {Array<BatchJobResult>}
     * @memberof BatchAccepted
     */
    results?: Array<BatchJobResult>;
}

/**
 * Check if a given object implements the BatchAccepted interface.
 */
export function instanceOfBatchAccepted(value: object): value is BatchAccepted {
    if (!('batchId' in value) || value['batchId'] === undefined) return false;
    if (!('jobIds' in value) || value['jobIds'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    return true;
}

export function BatchAcceptedFromJSON(json: any): BatchAccepted {
    return BatchAcceptedFromJSONTyped(json, false);
}

export function BatchAcceptedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAccepted {
    if (json == null) {
        return json;
    }
    return {
        
        'batchId': json['batch_id'],
        'jobIds': json['job_ids'],
        'total': json['total'],
        'created': json['created'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(BatchJobResultFromJSON)),
    };
}

export function BatchAcceptedToJSON(json: any): BatchAccepted {
    return BatchAcceptedToJSONTyped(json, false);
}

export function BatchAcceptedToJSONTyped(value?: BatchAccepted | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'batch_id': value['batchId'],
        'job_ids': value['jobIds'],
        'total': value['total'],
        'created': value['created'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(BatchJobResultToJSON)),
    };
}

