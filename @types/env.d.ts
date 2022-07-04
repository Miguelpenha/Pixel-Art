declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMINIO: string
        URL_MONGO: string
      }
    }
}

export {}