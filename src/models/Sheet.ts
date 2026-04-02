/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { Margins } from './Margins';
import {
    MarginsFromJSON,
    MarginsFromJSONTyped,
    MarginsToJSON,
    MarginsToJSONTyped,
} from './Margins';
import type { GrainDirection } from './GrainDirection';
import {
    GrainDirectionFromJSON,
    GrainDirectionFromJSONTyped,
    GrainDirectionToJSON,
    GrainDirectionToJSONTyped,
} from './GrainDirection';

/**
 * 
 * @export
 * @interface Sheet
 */
export interface Sheet {
    /**
     * 
     * @type {string}
     * @memberof Sheet
     */
    id: string;
    /**
     * Length in mm
     * @type {number}
     * @memberof Sheet
     */
    length: number;
    /**
     * Width in mm
     * @type {number}
     * @memberof Sheet
     */
    width: number;
    /**
     * 0 = unlimited
     * @type {number}
     * @memberof Sheet
     */
    quantity: number;
    /**
     * 
     * @type {GrainDirection}
     * @memberof Sheet
     */
    grain: GrainDirection;
    /**
     * Offcut sheets are prioritized by the solver
     * @type {boolean}
     * @memberof Sheet
     */
    isOffcut?: boolean;
    /**
     * 
     * @type {Margins}
     * @memberof Sheet
     */
    trimMargins?: Margins;
    /**
     * Optional article/SKU reference for this sheet type
     * @type {string}
     * @memberof Sheet
     */
    articleNumber?: string;
}



/**
 * Check if a given object implements the Sheet interface.
 */
export function instanceOfSheet(value: object): value is Sheet {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('length' in value) || value['length'] === undefined) return false;
    if (!('width' in value) || value['width'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('grain' in value) || value['grain'] === undefined) return false;
    return true;
}

export function SheetFromJSON(json: any): Sheet {
    return SheetFromJSONTyped(json, false);
}

export function SheetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sheet {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'length': json['length'],
        'width': json['width'],
        'quantity': json['quantity'],
        'grain': GrainDirectionFromJSON(json['grain']),
        'isOffcut': json['is_offcut'] == null ? undefined : json['is_offcut'],
        'trimMargins': json['trim_margins'] == null ? undefined : MarginsFromJSON(json['trim_margins']),
        'articleNumber': json['article_number'] == null ? undefined : json['article_number'],
    };
}

export function SheetToJSON(json: any): Sheet {
    return SheetToJSONTyped(json, false);
}

export function SheetToJSONTyped(value?: Sheet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'length': value['length'],
        'width': value['width'],
        'quantity': value['quantity'],
        'grain': GrainDirectionToJSON(value['grain']),
        'is_offcut': value['isOffcut'],
        'trim_margins': MarginsToJSON(value['trimMargins']),
        'article_number': value['articleNumber'],
    };
}

