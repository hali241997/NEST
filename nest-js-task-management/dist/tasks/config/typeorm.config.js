"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: ['./**/*.entity.js'],
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize
};
//# sourceMappingURL=typeorm.config.js.map