const hash = require('object-hash');

module.exports.hashPassword = (value) => {
    try {
        return hash(value);
    } catch (err) {
        throw err
    }
}