/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly AUTH_URL: string
  readonly API_URL: string
  readonly DATAMART_DATA_ACCESS_URL: string
  readonly VITE_IS_MOCK: 'true' | 'false'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
