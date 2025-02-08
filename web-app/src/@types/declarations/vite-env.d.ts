/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
