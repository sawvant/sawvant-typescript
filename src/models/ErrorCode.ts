/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


/**
 * Stable, machine-readable error code. New codes may be added.
 * @export
 */
export const ErrorCode = {
    InvalidBody: 'INVALID_BODY',
    BodyTooLarge: 'BODY_TOO_LARGE',
    InvalidJson: 'INVALID_JSON',
    InvalidStrategy: 'INVALID_STRATEGY',
    PartsEmpty: 'PARTS_EMPTY',
    SheetsEmpty: 'SHEETS_EMPTY',
    TooManyParts: 'TOO_MANY_PARTS',
    TooManySheets: 'TOO_MANY_SHEETS',
    ValidationFailed: 'VALIDATION_FAILED',
    Infeasible: 'INFEASIBLE',
    InternalError: 'INTERNAL_ERROR',
    ServiceUnavailable: 'SERVICE_UNAVAILABLE'
} as const;
export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode];


export function instanceOfErrorCode(value: any): boolean {
    for (const key in ErrorCode) {
        if (Object.prototype.hasOwnProperty.call(ErrorCode, key)) {
            if (ErrorCode[key as keyof typeof ErrorCode] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ErrorCodeFromJSON(json: any): ErrorCode {
    return ErrorCodeFromJSONTyped(json, false);
}

export function ErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorCode {
    return json as ErrorCode;
}

export function ErrorCodeToJSON(value?: ErrorCode | null): any {
    return value as any;
}

export function ErrorCodeToJSONTyped(value: any, ignoreDiscriminator: boolean): ErrorCode {
    return value as ErrorCode;
}

