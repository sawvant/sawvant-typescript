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
 * @interface SheetUsage
 */
export interface SheetUsage {
    /**
     * 
     * @type {string}
     * @memberof SheetUsage
     */
    sheetId: string;
    /**
     * Article/SKU reference (from request, if provided)
     * @type {string}
     * @memberof SheetUsage
     */
    articleNumber?: string;
    /**
     * Number of this sheet type consumed
     * @type {number}
     * @memberof SheetUsage
     */
    quantity: number;
    /**
     * Yield percentage for this sheet type
     * @type {number}
     * @memberof SheetUsage
     */
    yieldPercent: number;
}

/**
 * Check if a given object implements the SheetUsage interface.
 */
export function instanceOfSheetUsage(value: object): value is SheetUsage {
    if (!('sheetId' in value) || value['sheetId'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('yieldPercent' in value) || value['yieldPercent'] === undefined) return false;
    return true;
}

export function SheetUsageFromJSON(json: any): SheetUsage {
    return SheetUsageFromJSONTyped(json, false);
}

export function SheetUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SheetUsage {
    if (json == null) {
        return json;
    }
    return {
        
        'sheetId': json['sheet_id'],
        'articleNumber': json['article_number'] == null ? undefined : json['article_number'],
        'quantity': json['quantity'],
        'yieldPercent': json['yield_percent'],
    };
}

export function SheetUsageToJSON(json: any): SheetUsage {
    return SheetUsageToJSONTyped(json, false);
}

export function SheetUsageToJSONTyped(value?: SheetUsage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sheet_id': value['sheetId'],
        'article_number': value['articleNumber'],
        'quantity': value['quantity'],
        'yield_percent': value['yieldPercent'],
    };
}

