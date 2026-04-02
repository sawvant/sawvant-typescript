/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { OptimizeResult } from './OptimizeResult';
import {
    OptimizeResultFromJSON,
    OptimizeResultFromJSONTyped,
    OptimizeResultToJSON,
    OptimizeResultToJSONTyped,
} from './OptimizeResult';

/**
 * 
 * @export
 * @interface JobResponse
 */
export interface JobResponse {
    /**
     * 
     * @type {string}
     * @memberof JobResponse
     */
    jobId: string;
    /**
     * 
     * @type {string}
     * @memberof JobResponse
     */
    status: JobResponseStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof JobResponse
     */
    progress: number;
    /**
     * 
     * @type {Date}
     * @memberof JobResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof JobResponse
     */
    startedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof JobResponse
     */
    completedAt?: Date;
    /**
     * 
     * @type {OptimizeResult}
     * @memberof JobResponse
     */
    result?: OptimizeResult;
    /**
     * E.g. unplaced part IDs
     * @type {Array<string>}
     * @memberof JobResponse
     */
    warnings?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof JobResponse
     */
    error?: string;
}


/**
 * @export
 */
export const JobResponseStatusEnum = {
    Pending: 'pending',
    Running: 'running',
    Completed: 'completed',
    Failed: 'failed'
} as const;
export type JobResponseStatusEnum = typeof JobResponseStatusEnum[keyof typeof JobResponseStatusEnum];


/**
 * Check if a given object implements the JobResponse interface.
 */
export function instanceOfJobResponse(value: object): value is JobResponse {
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('progress' in value) || value['progress'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function JobResponseFromJSON(json: any): JobResponse {
    return JobResponseFromJSONTyped(json, false);
}

export function JobResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['job_id'],
        'status': json['status'],
        'progress': json['progress'],
        'createdAt': (new Date(json['created_at'])),
        'startedAt': json['started_at'] == null ? undefined : (new Date(json['started_at'])),
        'completedAt': json['completed_at'] == null ? undefined : (new Date(json['completed_at'])),
        'result': json['result'] == null ? undefined : OptimizeResultFromJSON(json['result']),
        'warnings': json['warnings'] == null ? undefined : json['warnings'],
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function JobResponseToJSON(json: any): JobResponse {
    return JobResponseToJSONTyped(json, false);
}

export function JobResponseToJSONTyped(value?: JobResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'job_id': value['jobId'],
        'status': value['status'],
        'progress': value['progress'],
        'created_at': ((value['createdAt']).toISOString()),
        'started_at': value['startedAt'] == null ? undefined : ((value['startedAt']).toISOString()),
        'completed_at': value['completedAt'] == null ? undefined : ((value['completedAt']).toISOString()),
        'result': OptimizeResultToJSON(value['result']),
        'warnings': value['warnings'],
        'error': value['error'],
    };
}

