import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "demo-layout" | "gallery-layout"
declare module "C:/Users/lharm/Documents/photo-365-challange/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}