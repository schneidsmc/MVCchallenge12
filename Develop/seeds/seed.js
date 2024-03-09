// const users, posts, and comments
const seedUsers = require('./user-seeds')
const seedPosts = require('./post-seeds')
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection')
// seed all function

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')

    await seedUsers()
    console.log('\n----- USERS SEEDED -----\n')

    await seedPosts()
    console.log('\n----- POSTS SEEDED -----\n')

    await seedComments()
    console.log('\n----- COMMENTS SEEDED -----\n')

    process.exit(0)
};

seedAll();