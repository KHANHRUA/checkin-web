import { defineNuxtPlugin } from '#app';
import {ElMessage} from "element-plus";

export default defineNuxtPlugin((nuxtApp) => {
    // Thêm $message vào global properties của Vue
    nuxtApp.vueApp.config.globalProperties.$message = (options: {
        message: string;
        type: 'success' | 'error' | 'warning' | 'info';
        duration?: number;
    }) => {
        // Ví dụ: Hiển thị message qua console hoặc có thể thay thế bằng logic Element Plus
        ElMessage({
            ...options
        })
    };
});