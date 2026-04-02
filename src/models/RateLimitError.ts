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
 * @interface RateLimitError
 */
export interface RateLimitError {
    /**
     * 
     * @type {string}
     * @memberof RateLimitError
     */
    error: string;
    /**
     * Request limit for this tier and strategy (24h sliding window)
     * @type {number}
     * @memberof RateLimitError
     */
    limit: number;
    /**
     * Remaining requests in the current window
     * @type {number}
     * @memberof RateLimitError
     */
    remaining: number;
    /**
     * Which strategy quota was exceeded
     * @type {string}
     * @memberof RateLimitError
     */
    strategy: RateLimitErrorStrategyEnum;
}


/**
 * @export
 */
export const RateLimitErrorStrategyEnum = {
    Fast: 'fast',
    Thorough: 'thorough'
} as const;
export type RateLimitErrorStrategyEnum = typeof RateLimitErrorStrategyEnum[keyof typeof RateLimitErrorStrategyEnum];


/**
 * Check if a given object implements the RateLimitError interface.
 */
export function instanceOfRateLimitError(value: object): value is RateLimitError {
    if (!('error' in value) || value['error'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('remaining' in value) || value['remaining'] === undefined) return false;
    if (!('strategy' in value) || value['strategy'] === undefined) return false;
    return true;
}

export function RateLimitErrorFromJSON(json: any): RateLimitError {
    return RateLimitErrorFromJSONTyped(json, false);
}

export function RateLimitErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateLimitError {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'],
        'limit': json['limit'],
        'remaining': json['remaining'],
        'strategy': json['strategy'],
    };
}

export function RateLimitErrorToJSON(json: any): RateLimitError {
    return RateLimitErrorToJSONTyped(json, false);
}

export function RateLimitErrorToJSONTyped(value?: RateLimitError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
        'limit': value['limit'],
        'remaining': value['remaining'],
        'strategy': value['strategy'],
    };
}

