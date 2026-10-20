/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { OptimizeRequest } from './OptimizeRequest';
import {
    OptimizeRequestFromJSON,
    OptimizeRequestFromJSONTyped,
    OptimizeRequestToJSON,
    OptimizeRequestToJSONTyped,
} from './OptimizeRequest';

/**
 * 
 * @export
 * @interface BatchRequest
 */
export interface BatchRequest {
    /**
     * Individual optimization requests. At most 50 with strategy `fast`
     * or 10 with strategy `thorough`.
     * 
     * @type {Array<OptimizeRequest>}
     * @memberof BatchRequest
     */
    jobs: Array<OptimizeRequest>;
}

/**
 * Check if a given object implements the BatchRequest interface.
 */
export function instanceOfBatchRequest(value: object): value is BatchRequest {
    if (!('jobs' in value) || value['jobs'] === undefined) return false;
    return true;
}

export function BatchRequestFromJSON(json: any): BatchRequest {
    return BatchRequestFromJSONTyped(json, false);
}

export function BatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'jobs': ((json['jobs'] as Array<any>).map(OptimizeRequestFromJSON)),
    };
}

export function BatchRequestToJSON(json: any): BatchRequest {
    return BatchRequestToJSONTyped(json, false);
}

export function BatchRequestToJSONTyped(value?: BatchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jobs': ((value['jobs'] as Array<any>).map(OptimizeRequestToJSON)),
    };
}

