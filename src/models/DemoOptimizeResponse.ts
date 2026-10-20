/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { Metrics } from './Metrics';
import {
    MetricsFromJSON,
    MetricsFromJSONTyped,
    MetricsToJSON,
    MetricsToJSONTyped,
} from './Metrics';
import type { DemoLayout } from './DemoLayout';
import {
    DemoLayoutFromJSON,
    DemoLayoutFromJSONTyped,
    DemoLayoutToJSON,
    DemoLayoutToJSONTyped,
} from './DemoLayout';
import type { Summary } from './Summary';
import {
    SummaryFromJSON,
    SummaryFromJSONTyped,
    SummaryToJSON,
    SummaryToJSONTyped,
} from './Summary';

/**
 * 
 * @export
 * @interface DemoOptimizeResponse
 */
export interface DemoOptimizeResponse {
    /**
     * 
     * @type {Array<DemoLayout>}
     * @memberof DemoOptimizeResponse
     */
    layouts: Array<DemoLayout>;
    /**
     * 
     * @type {Summary}
     * @memberof DemoOptimizeResponse
     */
    summary: Summary;
    /**
     * 
     * @type {Metrics}
     * @memberof DemoOptimizeResponse
     */
    metrics: Metrics;
}

/**
 * Check if a given object implements the DemoOptimizeResponse interface.
 */
export function instanceOfDemoOptimizeResponse(value: object): value is DemoOptimizeResponse {
    if (!('layouts' in value) || value['layouts'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('metrics' in value) || value['metrics'] === undefined) return false;
    return true;
}

export function DemoOptimizeResponseFromJSON(json: any): DemoOptimizeResponse {
    return DemoOptimizeResponseFromJSONTyped(json, false);
}

export function DemoOptimizeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DemoOptimizeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'layouts': ((json['layouts'] as Array<any>).map(DemoLayoutFromJSON)),
        'summary': SummaryFromJSON(json['summary']),
        'metrics': MetricsFromJSON(json['metrics']),
    };
}

export function DemoOptimizeResponseToJSON(json: any): DemoOptimizeResponse {
    return DemoOptimizeResponseToJSONTyped(json, false);
}

export function DemoOptimizeResponseToJSONTyped(value?: DemoOptimizeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'layouts': ((value['layouts'] as Array<any>).map(DemoLayoutToJSON)),
        'summary': SummaryToJSON(value['summary']),
        'metrics': MetricsToJSON(value['metrics']),
    };
}

