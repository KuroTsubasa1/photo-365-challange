import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/opt/365_photo/photo-365-challange/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}