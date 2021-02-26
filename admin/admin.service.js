const Role = require("_helpers/role");
const users = require("../models/userschema");

module.exports = {
    promote,
};

async function promote(id) {
    var result = await users.findByIdAndUpdate(id,{"role": Role.Manager});
    return result
};
 