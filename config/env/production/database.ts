import { ConnectionStringParser } from "connection-string-parser";

const connectionStringParser = new ConnectionStringParser({
  scheme: "mysql",
  hosts: []
});

const connectionString = connectionStringParser.parse(process.env.DATABASE_URL);

export default ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', connectionString.hosts[0].host),
        database: env('DATABASE_NAME', connectionString.scheme),
        user: env('DATABASE_USERNAME', connectionString.username),
        password: env('DATABASE_PASSWORD', connectionString.password),
      },
    },
  });
