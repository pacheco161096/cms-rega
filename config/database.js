module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '162.240.36.64'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'regatelecom_cms'),
      user: env('DATABASE_USERNAME', 'regatelecom_rega'),
      password: env('DATABASE_PASSWORD', 'FqT_i4NlqW0S'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: { min: 0, max: 100 }
  },
});
