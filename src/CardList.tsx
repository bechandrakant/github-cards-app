import React from "react";
import Card from "./Card";

export const CardList = (props: { usersInfo: any }) => {
  const userList = props.usersInfo.map((user: { id: any }) => {
    return <Card userData={user} key={user.id} />;
  });

  return <div>{userList}</div>;
};
