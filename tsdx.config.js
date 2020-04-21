const json = require('rollup-plugin-json');
const replace = require('@rollup/plugin-replace');
const commonjs = require('@rollup/plugin-commonjs');
require('dotenv').config();

module.exports = {
    rollup(config) {
        delete config.external;
        config.plugins.push(
            json(),
            replace({
                'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
                'process.env.TEST_ACCOUNT_ID': JSON.stringify(process.env.TEST_ACCOUNT_ID)
            })

        )
        if (config.output.format === 'umd') { }
        else {
            config.plugins.push(
                commonjs({
                    include: /\/node_modules\//
                }
                )
            );
        }
        return config;
    }
};