declare global {
    namespace NodeJS {
      interface ProcessEnv {
        URL_MONGO: string
      }
    }
}

export {}