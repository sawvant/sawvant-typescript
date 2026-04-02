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
 * @interface OptimizeAccepted
 */
export interface OptimizeAccepted {
    /**
     * 
     * @type {string}
     * @memberof OptimizeAccepted
     */
    jobId: string;
    /**
     * 
     * @type {string}
     * @memberof OptimizeAccepted
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof OptimizeAccepted
     */
    pollUrl: string;
    /**
     * 
     * @type {string}
     * @memberof OptimizeAccepted
     */
    streamUrl: string;
}

/**
 * Check if a given object implements the OptimizeAccepted interface.
 */
export function instanceOfOptimizeAccepted(value: object): value is OptimizeAccepted {
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('pollUrl' in value) || value['pollUrl'] === undefined) return false;
    if (!('streamUrl' in value) || value['streamUrl'] === undefined) return false;
    return true;
}

export function OptimizeAcceptedFromJSON(json: any): OptimizeAccepted {
    return OptimizeAcceptedFromJSONTyped(json, false);
}

export function OptimizeAcceptedFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptimizeAccepted {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['job_id'],
        'status': json['status'],
        'pollUrl': json['poll_url'],
        'streamUrl': json['stream_url'],
    };
}

export function OptimizeAcceptedToJSON(json: any): OptimizeAccepted {
    return OptimizeAcceptedToJSONTyped(json, false);
}

export function OptimizeAcceptedToJSONTyped(value?: OptimizeAccepted | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'job_id': value['jobId'],
        'status': value['status'],
        'poll_url': value['pollUrl'],
        'stream_url': value['streamUrl'],
    };
}

