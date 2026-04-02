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
 * @interface Metrics
 */
export interface Metrics {
    /**
     * Total cut length in mm
     * @type {number}
     * @memberof Metrics
     */
    totalCutLength: number;
    /**
     * 
     * @type {number}
     * @memberof Metrics
     */
    totalCuts: number;
    /**
     * 
     * @type {number}
     * @memberof Metrics
     */
    totalRotations: number;
    /**
     * 
     * @type {number}
     * @memberof Metrics
     */
    totalStacks: number;
    /**
     * 
     * @type {number}
     * @memberof Metrics
     */
    cutCycles: number;
}

/**
 * Check if a given object implements the Metrics interface.
 */
export function instanceOfMetrics(value: object): value is Metrics {
    if (!('totalCutLength' in value) || value['totalCutLength'] === undefined) return false;
    if (!('totalCuts' in value) || value['totalCuts'] === undefined) return false;
    if (!('totalRotations' in value) || value['totalRotations'] === undefined) return false;
    if (!('totalStacks' in value) || value['totalStacks'] === undefined) return false;
    if (!('cutCycles' in value) || value['cutCycles'] === undefined) return false;
    return true;
}

export function MetricsFromJSON(json: any): Metrics {
    return MetricsFromJSONTyped(json, false);
}

export function MetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Metrics {
    if (json == null) {
        return json;
    }
    return {
        
        'totalCutLength': json['total_cut_length'],
        'totalCuts': json['total_cuts'],
        'totalRotations': json['total_rotations'],
        'totalStacks': json['total_stacks'],
        'cutCycles': json['cut_cycles'],
    };
}

export function MetricsToJSON(json: any): Metrics {
    return MetricsToJSONTyped(json, false);
}

export function MetricsToJSONTyped(value?: Metrics | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total_cut_length': value['totalCutLength'],
        'total_cuts': value['totalCuts'],
        'total_rotations': value['totalRotations'],
        'total_stacks': value['totalStacks'],
        'cut_cycles': value['cutCycles'],
    };
}

