/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { SheetUsage } from './SheetUsage';
import {
    SheetUsageFromJSON,
    SheetUsageFromJSONTyped,
    SheetUsageToJSON,
    SheetUsageToJSONTyped,
} from './SheetUsage';

/**
 * 
 * @export
 * @interface Summary
 */
export interface Summary {
    /**
     * 
     * @type {number}
     * @memberof Summary
     */
    totalSheets: number;
    /**
     * 
     * @type {number}
     * @memberof Summary
     */
    yieldPercent: number;
    /**
     * 
     * @type {number}
     * @memberof Summary
     */
    wastePercent: number;
    /**
     * mm²
     * @type {number}
     * @memberof Summary
     */
    wasteArea: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Summary
     */
    unplacedParts?: Array<string>;
    /**
     * 
     * @type {Array<SheetUsage>}
     * @memberof Summary
     */
    sheetsUsed: Array<SheetUsage>;
}

/**
 * Check if a given object implements the Summary interface.
 */
export function instanceOfSummary(value: object): value is Summary {
    if (!('totalSheets' in value) || value['totalSheets'] === undefined) return false;
    if (!('yieldPercent' in value) || value['yieldPercent'] === undefined) return false;
    if (!('wastePercent' in value) || value['wastePercent'] === undefined) return false;
    if (!('wasteArea' in value) || value['wasteArea'] === undefined) return false;
    if (!('sheetsUsed' in value) || value['sheetsUsed'] === undefined) return false;
    return true;
}

export function SummaryFromJSON(json: any): Summary {
    return SummaryFromJSONTyped(json, false);
}

export function SummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Summary {
    if (json == null) {
        return json;
    }
    return {
        
        'totalSheets': json['total_sheets'],
        'yieldPercent': json['yield_percent'],
        'wastePercent': json['waste_percent'],
        'wasteArea': json['waste_area'],
        'unplacedParts': json['unplaced_parts'] == null ? undefined : json['unplaced_parts'],
        'sheetsUsed': ((json['sheets_used'] as Array<any>).map(SheetUsageFromJSON)),
    };
}

export function SummaryToJSON(json: any): Summary {
    return SummaryToJSONTyped(json, false);
}

export function SummaryToJSONTyped(value?: Summary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total_sheets': value['totalSheets'],
        'yield_percent': value['yieldPercent'],
        'waste_percent': value['wastePercent'],
        'waste_area': value['wasteArea'],
        'unplaced_parts': value['unplacedParts'],
        'sheets_used': ((value['sheetsUsed'] as Array<any>).map(SheetUsageToJSON)),
    };
}

