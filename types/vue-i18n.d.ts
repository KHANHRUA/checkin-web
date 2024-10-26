// types/vue-i18n.d.ts
import 'vue';
import { IVueI18n } from 'vue-i18n';

declare module 'vue/types/vue' {
    interface Vue {
        $t: IVueI18n['t'];
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $t: IVueI18n['t'];
    }
}