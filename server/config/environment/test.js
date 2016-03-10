'use strict';

// Test specific configuration
// ===========================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/mudserver-test'
    },
    sequelize: {
        uri: 'sqlite://',
        options: {
            logging: false,
            storage: 'test.sqlite',
            define: {
                timestamps: false
            }
        }
    },
    // Seed database on startup
    seedDB: true
};
