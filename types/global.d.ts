
import { ComponentCustomProperties } from 'vue';

declare module 'vue' {
    interface ComponentCustomProperties {
        $message: (options: {
            message: string;
            type: 'success' | 'error' | 'warning' | 'info';
            duration?: number;
        }) => void;
    }
}