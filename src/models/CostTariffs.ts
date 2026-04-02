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
 * @interface CostTariffs
 */
export interface CostTariffs {
    /**
     * Fixed cost per job
     * @type {number}
     * @memberof CostTariffs
     */
    setupCost?: number;
    /**
     * Cost per meter of cut length
     * @type {number}
     * @memberof CostTariffs
     */
    costPerMeter?: number;
    /**
     * 
     * @type {number}
     * @memberof CostTariffs
     */
    costPerRotation?: number;
    /**
     * 
     * @type {number}
     * @memberof CostTariffs
     */
    costPerStack?: number;
    /**
     * 
     * @type {number}
     * @memberof CostTariffs
     */
    costPerCycle?: number;
}

/**
 * Check if a given object implements the CostTariffs interface.
 */
export function instanceOfCostTariffs(value: object): value is CostTariffs {
    return true;
}

export function CostTariffsFromJSON(json: any): CostTariffs {
    return CostTariffsFromJSONTyped(json, false);
}

export function CostTariffsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CostTariffs {
    if (json == null) {
        return json;
    }
    return {
        
        'setupCost': json['setup_cost'] == null ? undefined : json['setup_cost'],
        'costPerMeter': json['cost_per_meter'] == null ? undefined : json['cost_per_meter'],
        'costPerRotation': json['cost_per_rotation'] == null ? undefined : json['cost_per_rotation'],
        'costPerStack': json['cost_per_stack'] == null ? undefined : json['cost_per_stack'],
        'costPerCycle': json['cost_per_cycle'] == null ? undefined : json['cost_per_cycle'],
    };
}

export function CostTariffsToJSON(json: any): CostTariffs {
    return CostTariffsToJSONTyped(json, false);
}

export function CostTariffsToJSONTyped(value?: CostTariffs | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'setup_cost': value['setupCost'],
        'cost_per_meter': value['costPerMeter'],
        'cost_per_rotation': value['costPerRotation'],
        'cost_per_stack': value['costPerStack'],
        'cost_per_cycle': value['costPerCycle'],
    };
}

