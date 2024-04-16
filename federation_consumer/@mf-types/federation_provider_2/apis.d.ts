
    export type RemoteKeys = 'federation_provider_2\app';
    type PackageType<T> = T extends 'federation_provider_2\app' ? typeof import('federation_provider_2\app') :any;