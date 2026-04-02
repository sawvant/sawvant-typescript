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
 * @interface Cost
 */
export interface Cost {
    /**
     * 
     * @type {number}
     * @memberof Cost
     */
    setupCost: number;
    /**
     * 
     * @type {number}
     * @memberof Cost
     */
    cuttingCost: number;
    /**
     * 
     * @type {number}
     * @memberof Cost
     */
    stackingCost: number;
    /**
     * 
     * @type {number}
     * @memberof Cost
     */
    rotationCost: number;
    /**
     * 
     * @type {number}
     * @memberof Cost
     */
    cycleCost: number;
    /**
     * 
     * @type {number}
     * @memberof Cost
     */
    totalCost: number;
}

/**
 * Check if a given object implements the Cost interface.
 */
export function instanceOfCost(value: object): value is Cost {
    if (!('setupCost' in value) || value['setupCost'] === undefined) return false;
    if (!('cuttingCost' in value) || value['cuttingCost'] === undefined) return false;
    if (!('stackingCost' in value) || value['stackingCost'] === undefined) return false;
    if (!('rotationCost' in value) || value['rotationCost'] === undefined) return false;
    if (!('cycleCost' in value) || value['cycleCost'] === undefined) return false;
    if (!('totalCost' in value) || value['totalCost'] === undefined) return false;
    return true;
}

export function CostFromJSON(json: any): Cost {
    return CostFromJSONTyped(json, false);
}

export function CostFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cost {
    if (json == null) {
        return json;
    }
    return {
        
        'setupCost': json['setup_cost'],
        'cuttingCost': json['cutting_cost'],
        'stackingCost': json['stacking_cost'],
        'rotationCost': json['rotation_cost'],
        'cycleCost': json['cycle_cost'],
        'totalCost': json['total_cost'],
    };
}

export function CostToJSON(json: any): Cost {
    return CostToJSONTyped(json, false);
}

export function CostToJSONTyped(value?: Cost | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'setup_cost': value['setupCost'],
        'cutting_cost': value['cuttingCost'],
        'stacking_cost': value['stackingCost'],
        'rotation_cost': value['rotationCost'],
        'cycle_cost': value['cycleCost'],
        'total_cost': value['totalCost'],
    };
}

