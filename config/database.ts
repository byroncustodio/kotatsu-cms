export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'kotatsu_cms'),
      user: env('DATABASE_USERNAME', 'node'),
      password: env('DATABASE_PASSWORD', 'j6@wpb%*S3^9'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
