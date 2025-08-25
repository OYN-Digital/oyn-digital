export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
      NODE_ENV: "test" | "dev" | "prod";
    }
  }
}
