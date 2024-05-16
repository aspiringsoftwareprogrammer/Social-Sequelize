const { Comment, Like, Post, Profile, User } = require("./index");
const { sequelize } = require('./db/connection.js');
const users = require('./seed/users.json')
const profiles = require('./seed/profiles.json')
const posts = require('./seed/posts.json')
const comments = require('./seed/comments.json')
const likes = require('./seed/likes.json')

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
    })

    // Write your tests here

    test("can create user", async function() {
        await User.bulkCreate(users);
        const foundUser = await User.findOne({ where: { username: "john_doe" } });
        expect(foundUser).toEqual(expect.objectContaining(users[0]));
    });


    test("can create profile", async function() {
        await Profile.bulkCreate(profiles);
        const foundProfile = await Profile.findByPk(1);
        expect(foundProfile).toEqual(expect.objectContaining(profiles[0]));
    });

    test("can create a post", async function() {
        await Post.bulkCreate(posts);
        const foundPost = await Post.findByPk(1);
        expect(foundPost).toEqual(expect.objectContaining(posts[0]));
    });


    test("can create a comment", async function() {
        await  Comment.bulkCreate(comments);
        const foundComment = await Comment.findByPk(1);
        expect(foundComment).toEqual(expect.objectContaining(comments[0]));
    });

    test("can create a like", async function() {
        await  Like.bulkCreate(likes);
        const foundLike = await Like.findByPk(1);
        expect(foundLike).toEqual(expect.objectContaining(likes[0]));
    });

    test("user can have only one profile", async function() {
        await  sequelize.sync({force: true})
        let myUser = await User.create(users[0])
        let myProfile = await Profile.create(profiles[0])

        await myUser.setProfile(myProfile)
        const associatedProfile = await myUser.getProfile();
        expect(associatedProfile instanceof Profile).toBeTruthy()

    });

    test("user can have many likes", async function() {
        await  sequelize.sync({force: true})
        let myUser = await User.create(users[0])
        let myLikes1 = await Like.create(likes[0])
        let myLikes2 = await Like.create(likes[1])

        await myUser.addLike(myLikes1)
        await myUser.addLike(myLikes2)
        const associatedLikes = await myUser.getLikes();
        expect(associatedLikes.length).toBe(2)
        expect(associatedLikes instanceof Like).toBeTruthy

    });

    test("likes can have many users", async function() {
        await  sequelize.sync({force: true})
        let myLike = await Like.create(likes[0])
        let user1 = await User.create(users[0])
        let user2 = await User.create(users[1])

        await myLike.addUser(user1)
        await myLike.addUser(user2)
        const associatedUsers = await myLike.getUsers();
        expect(associatedUsers.length).toBe(2)
        expect(associatedUsers instanceof User).toBeTruthy

    });




})