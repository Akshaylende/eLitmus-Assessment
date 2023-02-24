module.exports = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'database_name',
    IMAGE_INTERVAL: process.env.IMAGE_INTERVAL || 180000, // 3 minutes in milliseconds
    IMAGE_UPLOAD_PATH: process.env.IMAGE_UPLOAD_PATH || './server/uploads',
    PORT: process.env.PORT || 3000
  };
  