
    export type RemoteKeys = 'federation_provider\app';
    type PackageType<T> = T extends 'federation_provider\app' ? typeof import('federation_provider\app') :any;