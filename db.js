const Pocketbase = require('pocketbase/cjs');

const pb = new Pocketbase(process.env.POCKETBASE_URL);

module.exports = {
    pb,
}