const config = {
    app: {
        port: 4444,
        host: 'http://sandbox.aavgo.com',
        adminHost: 'http://localhost:4444/'
    },
    database: {
        db: 'smp',
        username: 'postgres',
        password: 'GuestlineDb123#$',
        host: `192.168.43.242`, //'192.168.43.128',
        port: 5432
    },
};

module.exports = config;