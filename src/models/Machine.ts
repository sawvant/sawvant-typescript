/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { CutDirection } from './CutDirection';
import {
    CutDirectionFromJSON,
    CutDirectionFromJSONTyped,
    CutDirectionToJSON,
    CutDirectionToJSONTyped,
} from './CutDirection';

/**
 * 
 * @export
 * @interface Machine
 */
export interface Machine {
    /**
     * Kerf width in mm
     * @type {number}
     * @memberof Machine
     */
    bladeThickness: number;
    /**
     * Cut pattern complexity (1-3)
     * @type {number}
     * @memberof Machine
     */
    maxLevels: number;
    /**
     * Maximum stack height in mm for batch cutting
     * @type {number}
     * @memberof Machine
     */
    maxStackHeight?: number;
    /**
     * 
     * @type {CutDirection}
     * @memberof Machine
     */
    cutDirection: CutDirection;
}



/**
 * Check if a given object implements the Machine interface.
 */
export function instanceOfMachine(value: object): value is Machine {
    if (!('bladeThickness' in value) || value['bladeThickness'] === undefined) return false;
    if (!('maxLevels' in value) || value['maxLevels'] === undefined) return false;
    if (!('cutDirection' in value) || value['cutDirection'] === undefined) return false;
    return true;
}

export function MachineFromJSON(json: any): Machine {
    return MachineFromJSONTyped(json, false);
}

export function MachineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Machine {
    if (json == null) {
        return json;
    }
    return {
        
        'bladeThickness': json['blade_thickness'],
        'maxLevels': json['max_levels'],
        'maxStackHeight': json['max_stack_height'] == null ? undefined : json['max_stack_height'],
        'cutDirection': CutDirectionFromJSON(json['cut_direction']),
    };
}

export function MachineToJSON(json: any): Machine {
    return MachineToJSONTyped(json, false);
}

export function MachineToJSONTyped(value?: Machine | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'blade_thickness': value['bladeThickness'],
        'max_levels': value['maxLevels'],
        'max_stack_height': value['maxStackHeight'],
        'cut_direction': CutDirectionToJSON(value['cutDirection']),
    };
}

