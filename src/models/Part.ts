/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { EdgeCorrection } from './EdgeCorrection';
import {
    EdgeCorrectionFromJSON,
    EdgeCorrectionFromJSONTyped,
    EdgeCorrectionToJSON,
    EdgeCorrectionToJSONTyped,
} from './EdgeCorrection';
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
 * @interface Part
 */
export interface Part {
    /**
     * 
     * @type {string}
     * @memberof Part
     */
    id: string;
    /**
     * Length in mm
     * @type {number}
     * @memberof Part
     */
    length: number;
    /**
     * Width in mm
     * @type {number}
     * @memberof Part
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof Part
     */
    quantity: number;
    /**
     * 
     * @type {GrainDirection}
     * @memberof Part
     */
    grain: GrainDirection;
    /**
     * 
     * @type {EdgeCorrection}
     * @memberof Part
     */
    edgeBanding?: EdgeCorrection;
}



/**
 * Check if a given object implements the Part interface.
 */
export function instanceOfPart(value: object): value is Part {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('length' in value) || value['length'] === undefined) return false;
    if (!('width' in value) || value['width'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('grain' in value) || value['grain'] === undefined) return false;
    return true;
}

export function PartFromJSON(json: any): Part {
    return PartFromJSONTyped(json, false);
}

export function PartFromJSONTyped(json: any, ignoreDiscriminator: boolean): Part {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'length': json['length'],
        'width': json['width'],
        'quantity': json['quantity'],
        'grain': GrainDirectionFromJSON(json['grain']),
        'edgeBanding': json['edge_banding'] == null ? undefined : EdgeCorrectionFromJSON(json['edge_banding']),
    };
}

export function PartToJSON(json: any): Part {
    return PartToJSONTyped(json, false);
}

export function PartToJSONTyped(value?: Part | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'length': value['length'],
        'width': value['width'],
        'quantity': value['quantity'],
        'grain': GrainDirectionToJSON(value['grain']),
        'edge_banding': EdgeCorrectionToJSON(value['edgeBanding']),
    };
}

