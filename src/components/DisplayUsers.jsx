import React, { Fragment } from "react";
import ListView from "./ListView";
import GridView from "./GridView";

import { users } from "../data/userList";

const DisplayUsers = ({ isListView }) => {
  return isListView ? <ListView users={users} /> : <GridView users={users} />;
};

export default DisplayUsers;
