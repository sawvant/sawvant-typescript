/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { Placement } from './Placement';
import {
    PlacementFromJSON,
    PlacementFromJSONTyped,
    PlacementToJSON,
    PlacementToJSONTyped,
} from './Placement';

/**
 * 
 * @export
 * @interface Layout
 */
export interface Layout {
    /**
     * 
     * @type {string}
     * @memberof Layout
     */
    sheetId: string;
    /**
     * Number of identical sheets using this layout pattern
     * @type {number}
     * @memberof Layout
     */
    quantity: number;
    /**
     * 
     * @type {Array<Placement>}
     * @memberof Layout
     */
    placements: Array<Placement>;
}

/**
 * Check if a given object implements the Layout interface.
 */
export function instanceOfLayout(value: object): value is Layout {
    if (!('sheetId' in value) || value['sheetId'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('placements' in value) || value['placements'] === undefined) return false;
    return true;
}

export function LayoutFromJSON(json: any): Layout {
    return LayoutFromJSONTyped(json, false);
}

export function LayoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): Layout {
    if (json == null) {
        return json;
    }
    return {
        
        'sheetId': json['sheet_id'],
        'quantity': json['quantity'],
        'placements': ((json['placements'] as Array<any>).map(PlacementFromJSON)),
    };
}

export function LayoutToJSON(json: any): Layout {
    return LayoutToJSONTyped(json, false);
}

export function LayoutToJSONTyped(value?: Layout | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sheet_id': value['sheetId'],
        'quantity': value['quantity'],
        'placements': ((value['placements'] as Array<any>).map(PlacementToJSON)),
    };
}

