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
import type { Layout } from './Layout';
import {
    LayoutFromJSON,
    LayoutFromJSONTyped,
    LayoutToJSON,
    LayoutToJSONTyped,
} from './Layout';
import type { Summary } from './Summary';
import {
    SummaryFromJSON,
    SummaryFromJSONTyped,
    SummaryToJSON,
    SummaryToJSONTyped,
} from './Summary';
import type { Cost } from './Cost';
import {
    CostFromJSON,
    CostFromJSONTyped,
    CostToJSON,
    CostToJSONTyped,
} from './Cost';

/**
 * 
 * @export
 * @interface OptimizeResult
 */
export interface OptimizeResult {
    /**
     * 
     * @type {Array<Layout>}
     * @memberof OptimizeResult
     */
    layouts: Array<Layout>;
    /**
     * 
     * @type {Summary}
     * @memberof OptimizeResult
     */
    summary: Summary;
    /**
     * 
     * @type {Metrics}
     * @memberof OptimizeResult
     */
    metrics?: Metrics;
    /**
     * 
     * @type {Cost}
     * @memberof OptimizeResult
     */
    cost?: Cost;
}

/**
 * Check if a given object implements the OptimizeResult interface.
 */
export function instanceOfOptimizeResult(value: object): value is OptimizeResult {
    if (!('layouts' in value) || value['layouts'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    return true;
}

export function OptimizeResultFromJSON(json: any): OptimizeResult {
    return OptimizeResultFromJSONTyped(json, false);
}

export function OptimizeResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptimizeResult {
    if (json == null) {
        return json;
    }
    return {
        
        'layouts': ((json['layouts'] as Array<any>).map(LayoutFromJSON)),
        'summary': SummaryFromJSON(json['summary']),
        'metrics': json['metrics'] == null ? undefined : MetricsFromJSON(json['metrics']),
        'cost': json['cost'] == null ? undefined : CostFromJSON(json['cost']),
    };
}

export function OptimizeResultToJSON(json: any): OptimizeResult {
    return OptimizeResultToJSONTyped(json, false);
}

export function OptimizeResultToJSONTyped(value?: OptimizeResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'layouts': ((value['layouts'] as Array<any>).map(LayoutToJSON)),
        'summary': SummaryToJSON(value['summary']),
        'metrics': MetricsToJSON(value['metrics']),
        'cost': CostToJSON(value['cost']),
    };
}

