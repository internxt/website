/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        // SERVER SIDE KEYS
        SENDGRID_API_KEY: string
        RECAPTCHA_V3_SK: string
        COINMARKETCAP_API_KEY: string
        STRIPE_PRIVATE_KEY: string
        STRIPE_PRIVATE_KEY_TEST: string
        JWT_DRIVE_SERVER: string
        DRIVE_API_URL: string

        // PUBLIC KEYS
        NEXT_PUBLIC_RECAPTCHA_V3_PK: string
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST: string
        NEXT_PUBLIC_SEGMENT_KEY: string
        NEXT_PUBLIC_SEGMENT_KEY_TEST: string

    }
}