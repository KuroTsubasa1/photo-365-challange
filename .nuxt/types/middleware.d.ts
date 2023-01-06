import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "authenticated"
declare module "C:/Users/lharm/Documents/photo-365-challange/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}