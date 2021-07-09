import React from "react";

export interface PlaidAccount {
    id: string;
    name: string;
    mask: string;
    type: string;
    subtype: string;
    verification_status: string;
}

export interface PlaidInstitution {
    name: string;
    institution_id: string;
}

export interface PlaidLinkError {
    error_type: string;
    error_code: string;
    error_message: string;
    display_message: string;
}

export interface PlaidLinkOnSuccessMetadata {
    institution: null | PlaidInstitution;
    accounts: Array<PlaidAccount>;
    link_session_id: string;
}

export interface PlaidLinkOnExitMetadata {
    institution: null | PlaidInstitution;
    status: null | string;
    link_session_id: string;
    request_id: string
}

export interface PlaidLinkOnEventMetadata {
    error_type: null | string;
    error_code: null | string;
    error_message: null | string;
    exit_status: null | string; 
    institution_id: null | string; 
    institution_search_query: null | string;
    mfa_type: null | string;
    view_name: null | string;
    request_id: null | string;
    link_session_id: null | string;
    timestamp: string;
    selection: string;
}

export type PlaidLinkOnSuccess = (
    public_token: string,
    metadata: PlaidLinkOnSuccessMetadata,
) => void;

export type PlaidLinkOnExit = (
    error: string,
    metadata: PlaidLinkOnExitMetadata,
) => void;

export enum PlaidLinkStableEvent {
    OPEN = 'OPEN',
    EXIT = 'EXIT',
    HANDOFF = 'HANDOFF',
    SELECT_INSTITUTION = 'SELECT_INSTITUTION',
    ERROR = 'ERROR',
    CLOSE_OAUTH = 'CLOSE_OAUTH',
    SEARCH_INSTITUTION = 'SEARCH_INSTITUTION'
}

export type PlaidLinkOnEvent = (
    eventName: PlaidLinkStableEvent | string,
    metadata: PlaidLinkOnExitMetadata
) => void;

export type PlaidLinkOnLoad = () => void;

interface CommonPlaidLinkOptions {
    onSuccess: PlaidLinkOnSuccess;
    onExit?: PlaidLinkOnExit;
    onLoad?: PlaidLinkOnLoad;
    onEvent?: PlaidLinkOnEvent;
} 

export type PlaidLinkOptionsWithLinkToken = CommonPlaidLinkOptions & {
    token: string;
    receivedRedirectUri?: string; 
}

export type PlaidLinkOptions = PlaidLinkOptionsWithLinkToken;

export type PlaidLinkPropTypes = PlaidLinkOptions & {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface Plaid {
    open: () => void;
    exit: (force?: boolean) => void; 
    create: (config: PlaidLinkOptions) => Plaid;
    destroy: () => void;
}

declare global {
    interface Window {
        Plaid: Plaid; 
    }
}