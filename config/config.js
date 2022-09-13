require('dotenv').config()
module.exports = {
  development: {
    database: 'new_library',
    dialect: 'postgres'
  },
  test: {
    database: 'new_library_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
