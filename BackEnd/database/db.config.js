const prismaClient = require('@prisma/client');
const prisma = new prismaClient({
    log: ["query"],
});

module.exports.prisma = prisma;

