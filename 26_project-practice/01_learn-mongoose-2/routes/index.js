const express = require('express');
const { User, Room, Chat, Group, Timer, Todo, Notice, mongoose } = require('../schemas/viper');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const createDummyData = async () => {
      // User 컬렉션에 더미 데이터 추가
      const users = await User.create([
        {
          user_category_name: 'Category 1',
          nick_name: 'User1',
          email: 'user1@example.com',
          provider: 'Provider1',
          sns_id: '123456',
          groups: [],
          rooms: [],
          chat_online: true,
          token: 'token1',
          pending_groups: [],
        },
        {
          user_category_name: 'Category 2',
          nick_name: 'User2',
          email: 'user2@example.com',
          provider: 'Provider2',
          sns_id: '7891011',
          groups: [],
          rooms: [],
          chat_online: false,
          token: 'token2',
          pending_groups: [],
        },
        {
          user_category_name: 'Category 3',
          nick_name: 'User3',
          email: 'user3@example.com',
          provider: 'Provider3',
          sns_id: '12131415',
          groups: [],
          rooms: [],
          chat_online: true,
          token: 'token3',
          pending_groups: [],
        },
      ]);

      // Group 컬렉션에 더미 데이터 추가
      const groups = await Group.create([
        {
          group_name: 'Study Group 1',
          group_category: 'Study',
          group_description: 'A study group for various subjects',
          group_password: 'password123',
          group_maximum_member: 10,
          daily_goal_time: '2 hours',
          members: [users[0]._id],
          join_requests: [],
        },
        {
          group_name: 'Book Club',
          group_category: 'Reading',
          group_description: 'A book club for book enthusiasts',
          group_password: 'bookworm',
          group_maximum_member: 15,
          daily_goal_time: '1 hour',
          members: [users[1]._id],
          join_requests: [],
        },
        {
          group_name: 'Fitness Group',
          group_category: 'Fitness',
          group_description: 'A fitness group for health enthusiasts',
          group_password: 'fitlife',
          group_maximum_member: 20,
          daily_goal_time: '30 minutes',
          members: [users[2]._id],
          join_requests: [],
        },
      ]);

      // Room 컬렉션에 더미 데이터 추가
      const rooms = await Room.create([
        {
          members: [users[0]._id, users[1]._id],
        },
        {
          members: [users[1]._id, users[2]._id],
        },
        {
          members: [users[2]._id],
        },
      ]);

      // Chat 컬렉션에 더미 데이터 추가
      const chats = await Chat.create([
        {
          sendAt: new Date(),
          user_id: users[0]._id,
          room_id: rooms[0]._id,
        },
        {
          sendAt: new Date(),
          user_id: users[1]._id,
          room_id: rooms[0]._id,
        },
        {
          sendAt: new Date(),
          user_id: users[2]._id,
          room_id: rooms[1]._id,
        },
      ]);

      // Timer 컬렉션에 더미 데이터 추가
      const timers = await Timer.create([
        {
          user_id: users[0]._id,
          daily: {
            date: '2023-01-01',
            data: [
              { title: 'Math', timer: 3600 },
              { title: 'Science', timer: 2700 },
            ],
          },
        },
        {
          user_id: users[1]._id,
          daily: {
            date: '2023-01-01',
            data: [{ title: 'Reading', timer: 1800 }],
          },
        },
        {
          user_id: users[2]._id,
          daily: {
            date: '2023-01-01',
            data: [{ title: 'Exercise', timer: 1500 }],
          },
        },
      ]);

      // Todo 컬렉션에 더미 데이터 추가
      const todos = await Todo.create([
        {
          user_id: users[0]._id,
          title: 'Complete homework',
          content: 'Finish math and science assignments',
          start_time: new Date(),
          end_time: new Date(),
          done: false,
        },
        {
          user_id: users[1]._id,
          title: 'Read a new book',
          content: 'Start reading "The Great Gatsby"',
          start_time: new Date(),
          end_time: new Date(),
          done: false,
        },
        {
          user_id: users[2]._id,
          title: 'Workout',
          content: 'Go for a 30-minute run',
          start_time: new Date(),
          end_time: new Date(),
          done: false,
        },
      ]);

      // Notice 컬렉션에 더미 데이터 추가
      const notices = await Notice.create([
        {
          title: 'Important Announcement',
          content: 'Please be advised of an upcoming maintenance schedule.',
        },
        {
          title: 'New Feature Update',
          content: 'Explore our latest features and enhancements.',
        },
        {
          title: 'Holiday Closure',
          content: 'Our offices will be closed for the upcoming holiday.',
        },
      ]);
    };
    createDummyData();

    res.send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.get('/group', async (req, res, next) => {
  try {
    const group = new Group({
      // _id: new mongoose.Types.ObjectId(),
      group_name: '그룹A',
      group_category: '공부',
      members: [new User({ user_category_name: 'zz' }), new User({ user_category_name: 'zz' }), new User({ user_category_name: 'zz' })],
    });
    group.save();

    const groups = await Group.find({});
    res.send({ groups });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
