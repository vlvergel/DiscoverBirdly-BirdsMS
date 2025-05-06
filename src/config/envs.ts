import 'dotenv/config';
import * as joi from 'joi';

type IEnvs = {
  PORT: number;
  DATABASE_URL: string;
};

const envsScheme = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsScheme.validate(process.env, {
  abortEarly: true,
});

const env: IEnvs = value;

if (error) {
  throw new Error(`Environment variable error: ${error.message}`);
}

export const envs = {
  port: env.PORT,
  database_url: env.DATABASE_URL,
};
