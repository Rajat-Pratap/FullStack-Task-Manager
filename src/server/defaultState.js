const md5 = require("md5");

const defaultState = {
  session: {
    authenticated: false,
  },
  users: [
    {
      id: "U1",
      name: "dev",
      passwordHash: md5("rajat2009"),
    },
    {
      id: "U2",
      name: "raj",
      passwordHash: md5("rajat2009"),
    },
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Refactor tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Compile with Es6",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
    {
      name: "Update component snapshots",
      id: "T4",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Good Work!!",
    },
  ],
};

module.exports = defaultState;
