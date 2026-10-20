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
 * @interface DemoLayout
 */
export interface DemoLayout {
    /**
     * 
     * @type {string}
     * @memberof DemoLayout
     */
    sheetId: string;
    /**
     * Number of identical sheets using this layout pattern
     * @type {number}
     * @memberof DemoLayout
     */
    quantity: number;
    /**
     * 
     * @type {Array<Placement>}
     * @memberof DemoLayout
     */
    placements: Array<Placement>;
    /**
     * Cutting plan of this layout as a standalone SVG document
     * @type {string}
     * @memberof DemoLayout
     */
    svg: string;
}

/**
 * Check if a given object implements the DemoLayout interface.
 */
export function instanceOfDemoLayout(value: object): value is DemoLayout {
    if (!('sheetId' in value) || value['sheetId'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('placements' in value) || value['placements'] === undefined) return false;
    if (!('svg' in value) || value['svg'] === undefined) return false;
    return true;
}

export function DemoLayoutFromJSON(json: any): DemoLayout {
    return DemoLayoutFromJSONTyped(json, false);
}

export function DemoLayoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DemoLayout {
    if (json == null) {
        return json;
    }
    return {
        
        'sheetId': json['sheet_id'],
        'quantity': json['quantity'],
        'placements': ((json['placements'] as Array<any>).map(PlacementFromJSON)),
        'svg': json['svg'],
    };
}

export function DemoLayoutToJSON(json: any): DemoLayout {
    return DemoLayoutToJSONTyped(json, false);
}

export function DemoLayoutToJSONTyped(value?: DemoLayout | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sheet_id': value['sheetId'],
        'quantity': value['quantity'],
        'placements': ((value['placements'] as Array<any>).map(PlacementToJSON)),
        'svg': value['svg'],
    };
}

