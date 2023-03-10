declare global {
  import { DatabaseType } from "typeorm";

  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      TYPEORM_CONNECTION: DatabaseType;
      TYPEORM_HOST: string;
      TYPEORM_USERNAME: string;
      TYPEORM_PASSWORD: string;
      TYPEORM_DATABASE: string;
      TYPEORM_PORT: number;
      TYPEORM_SYNCHRONIZE: boolean;
      TYPEORM_ENTITIES: string;
      TYPEORM_MIGRATIONS: string;
      TYPEORM_MIGRATIONS_DIR: string;
      TYPEORM_SEEDING_SEEDS: string;
      JWT_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
