/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** ユーザ認証APIのURL */
  readonly VITE_USER_AUTH_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
