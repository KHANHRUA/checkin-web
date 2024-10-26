// plugins/id-injection.ts
import { defineNuxtPlugin } from '#app';
import { ID_INJECTION_KEY } from 'element-plus';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        prefix: 1, // Bạn có thể chọn giá trị tùy ý cho prefix
        current: 0,
    });
});