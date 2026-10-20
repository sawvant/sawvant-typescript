/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { DemoErrorError } from './DemoErrorError';
import {
    DemoErrorErrorFromJSON,
    DemoErrorErrorFromJSONTyped,
    DemoErrorErrorToJSON,
    DemoErrorErrorToJSONTyped,
} from './DemoErrorError';

/**
 * 
 * @export
 * @interface DemoError
 */
export interface DemoError {
    /**
     * 
     * @type {DemoErrorError}
     * @memberof DemoError
     */
    error: DemoErrorError;
}

/**
 * Check if a given object implements the DemoError interface.
 */
export function instanceOfDemoError(value: object): value is DemoError {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function DemoErrorFromJSON(json: any): DemoError {
    return DemoErrorFromJSONTyped(json, false);
}

export function DemoErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DemoError {
    if (json == null) {
        return json;
    }
    return {
        
        'error': DemoErrorErrorFromJSON(json['error']),
    };
}

export function DemoErrorToJSON(json: any): DemoError {
    return DemoErrorToJSONTyped(json, false);
}

export function DemoErrorToJSONTyped(value?: DemoError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': DemoErrorErrorToJSON(value['error']),
    };
}

