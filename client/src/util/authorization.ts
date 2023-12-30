export const FMB_ROLE_SUPER = 'FMB_ROLE_SUPER';
export const FMB_ROLE_OPERATIONS = 'FMB_ROLE_OPERATIONS';
export const FMB_ROLE_SUBSCRIBER = 'FMB_ROLE_SUBSCRIBER';
export const FMB_ROLE_CRM_OPERATION = 'FMB_ROLE_CRM_OPERATION';

export const doesUserBelongsToOperation = (roles: string[]): boolean => roles?.includes(FMB_ROLE_OPERATIONS) ?? false;

export const doesUserBelongsToCRMOperation = (roles: string[]): boolean => roles?.includes(FMB_ROLE_CRM_OPERATION) ?? false;

export const isUserSubscriber = (roles: string[]): boolean => roles?.includes(FMB_ROLE_SUBSCRIBER) ?? false;

export const isSuper = (roles: string[]): boolean => roles?.includes(FMB_ROLE_SUPER) ?? false;
