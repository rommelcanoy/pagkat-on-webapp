import 'pinia'

declare module 'pinia' {
    export interface PiniaCustomProperties {
        userStore: () => void,
    }
}