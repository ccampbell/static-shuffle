const crypto = require('crypto');

const max = 1 << 16;

module.exports = function(things = [], seed) {
    const count = things.length;
    if (count > max) {
        throw Error(`Array length must be less than ${max}`);
    }

    const included = {};
    const final = [];

    while (final.length < count) {
        const hash = crypto.createHmac('sha256', '').update(seed);
        seed = hash.digest();

        for (let i = 0; i < seed.length; i += 2) {
            const val = Math.floor((seed.readUInt16LE(i) / max) * count);

            if (!included[val]) {
                final.push(things[val]);
                included[val] = 1;
            }
        }
    }

    return final;
}
