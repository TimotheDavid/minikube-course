const { PrismaClient } = require('@prisma/client'); 



function main() {
    return new PrismaClient();


}

module.exports = main;