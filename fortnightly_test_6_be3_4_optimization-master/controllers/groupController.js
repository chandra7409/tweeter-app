const Group = require("../models").group;
const { GROUP_MEMBER_LIMIT } = require("../config/group.config");

const createGroup = async (req, res, next) => {
  try {
    let usersList = req.body.users;
    let groupId = req.body.groupId;
    if (usersList.length > GROUP_MEMBER_LIMIT) {
      res.status(200).json({
        message: `too many members! plese try again with fewer members`,
      });
    } else {
      usersList.forEach((user, idx) => {
        Group.create({ userId: user.userId, groupId: groupId });
      });

      res.status(200).json({ message: `group created successfully` });
    }
  } catch (err) {
    res.status(500).json({ message: `internal server error: ${err.message}` });
  }
};

module.exports = {
  createGroup,
};
