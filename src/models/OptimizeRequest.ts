/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { CostTariffs } from './CostTariffs';
import {
    CostTariffsFromJSON,
    CostTariffsFromJSONTyped,
    CostTariffsToJSON,
    CostTariffsToJSONTyped,
} from './CostTariffs';
import type { Part } from './Part';
import {
    PartFromJSON,
    PartFromJSONTyped,
    PartToJSON,
    PartToJSONTyped,
} from './Part';
import type { Sheet } from './Sheet';
import {
    SheetFromJSON,
    SheetFromJSONTyped,
    SheetToJSON,
    SheetToJSONTyped,
} from './Sheet';
import type { Machine } from './Machine';
import {
    MachineFromJSON,
    MachineFromJSONTyped,
    MachineToJSON,
    MachineToJSONTyped,
} from './Machine';

/**
 * 
 * @export
 * @interface OptimizeRequest
 */
export interface OptimizeRequest {
    /**
     * 
     * @type {Array<Part>}
     * @memberof OptimizeRequest
     */
    parts: Array<Part>;
    /**
     * 
     * @type {Array<Sheet>}
     * @memberof OptimizeRequest
     */
    sheets: Array<Sheet>;
    /**
     * 
     * @type {Machine}
     * @memberof OptimizeRequest
     */
    machine: Machine;
    /**
     * Solve strategy. "fast" runs all greedy solvers concurrently.
     * "thorough" adds Gilmore-Gomory column generation for optimal patterns.
     * Each strategy has its own rate limit quota.
     * 
     * @type {string}
     * @memberof OptimizeRequest
     */
    strategy?: OptimizeRequestStrategyEnum;
    /**
     * 
     * @type {CostTariffs}
     * @memberof OptimizeRequest
     */
    costTariffs?: CostTariffs;
}


/**
 * @export
 */
export const OptimizeRequestStrategyEnum = {
    Fast: 'fast',
    Thorough: 'thorough'
} as const;
export type OptimizeRequestStrategyEnum = typeof OptimizeRequestStrategyEnum[keyof typeof OptimizeRequestStrategyEnum];


/**
 * Check if a given object implements the OptimizeRequest interface.
 */
export function instanceOfOptimizeRequest(value: object): value is OptimizeRequest {
    if (!('parts' in value) || value['parts'] === undefined) return false;
    if (!('sheets' in value) || value['sheets'] === undefined) return false;
    if (!('machine' in value) || value['machine'] === undefined) return false;
    return true;
}

export function OptimizeRequestFromJSON(json: any): OptimizeRequest {
    return OptimizeRequestFromJSONTyped(json, false);
}

export function OptimizeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptimizeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'parts': ((json['parts'] as Array<any>).map(PartFromJSON)),
        'sheets': ((json['sheets'] as Array<any>).map(SheetFromJSON)),
        'machine': MachineFromJSON(json['machine']),
        'strategy': json['strategy'] == null ? undefined : json['strategy'],
        'costTariffs': json['cost_tariffs'] == null ? undefined : CostTariffsFromJSON(json['cost_tariffs']),
    };
}

export function OptimizeRequestToJSON(json: any): OptimizeRequest {
    return OptimizeRequestToJSONTyped(json, false);
}

export function OptimizeRequestToJSONTyped(value?: OptimizeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'parts': ((value['parts'] as Array<any>).map(PartToJSON)),
        'sheets': ((value['sheets'] as Array<any>).map(SheetToJSON)),
        'machine': MachineToJSON(value['machine']),
        'strategy': value['strategy'],
        'cost_tariffs': CostTariffsToJSON(value['costTariffs']),
    };
}

