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
 * @interface Margins
 */
export interface Margins {
    /**
     * mm trim per side
     * @type {number}
     * @memberof Margins
     */
    top?: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    bottom?: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    left?: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    right?: number;
}

/**
 * Check if a given object implements the Margins interface.
 */
export function instanceOfMargins(value: object): value is Margins {
    return true;
}

export function MarginsFromJSON(json: any): Margins {
    return MarginsFromJSONTyped(json, false);
}

export function MarginsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Margins {
    if (json == null) {
        return json;
    }
    return {
        
        'top': json['top'] == null ? undefined : json['top'],
        'bottom': json['bottom'] == null ? undefined : json['bottom'],
        'left': json['left'] == null ? undefined : json['left'],
        'right': json['right'] == null ? undefined : json['right'],
    };
}

export function MarginsToJSON(json: any): Margins {
    return MarginsToJSONTyped(json, false);
}

export function MarginsToJSONTyped(value?: Margins | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'top': value['top'],
        'bottom': value['bottom'],
        'left': value['left'],
        'right': value['right'],
    };
}

