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
 * @interface EdgeCorrection
 */
export interface EdgeCorrection {
    /**
     * mm added for edge banding
     * @type {number}
     * @memberof EdgeCorrection
     */
    top?: number;
    /**
     * 
     * @type {number}
     * @memberof EdgeCorrection
     */
    bottom?: number;
    /**
     * 
     * @type {number}
     * @memberof EdgeCorrection
     */
    left?: number;
    /**
     * 
     * @type {number}
     * @memberof EdgeCorrection
     */
    right?: number;
}

/**
 * Check if a given object implements the EdgeCorrection interface.
 */
export function instanceOfEdgeCorrection(value: object): value is EdgeCorrection {
    return true;
}

export function EdgeCorrectionFromJSON(json: any): EdgeCorrection {
    return EdgeCorrectionFromJSONTyped(json, false);
}

export function EdgeCorrectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EdgeCorrection {
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

export function EdgeCorrectionToJSON(json: any): EdgeCorrection {
    return EdgeCorrectionToJSONTyped(json, false);
}

export function EdgeCorrectionToJSONTyped(value?: EdgeCorrection | null, ignoreDiscriminator: boolean = false): any {
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

