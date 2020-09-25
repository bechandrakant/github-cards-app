import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Input } from "./Input";
import { CardList } from "./CardList";

function App() {
  const [usersInfo, setUsersInfo] = useState<any[]>([]);
  const getUser = (userName: string) => {
    axios
      .get("https://api.github.com/users/" + userName)
      .then((res) => {
        setUsersInfo([...usersInfo, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Input submitUser={getUser} />
      <CardList usersInfo={usersInfo} />
    </div>
  );
}

export default App;
