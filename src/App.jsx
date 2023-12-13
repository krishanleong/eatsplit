import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FriendList from "./FriendList";
import FriendForm from "./FriendForm";
import BillSplit from "./BillSplit";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(118836);
  const [showAddFriends, setShowAddFriends] = useState(false);
  console.log(friends);
  function handleSelect(id) {
    setSelected(id);
  }

  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]); // initialFriends.push(friend);
  }

  function handleSplit(friendId, balance) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === friendId) {
          return {
            ...friend,
            balance: friend.balance + balance,
          };
        }
        return friend;
      })
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          onHandleSelected={handleSelect}
        />
        {showAddFriends && <FriendForm onHandleAddFriend={handleAddFriend} />}
        <button
          className="button"
          onClick={() => setShowAddFriends(!showAddFriends)}
        >
          Add Friend
        </button>
      </div>
      {friends.map((friend) => {
        if (friend.id === selected) {
          return (
            <BillSplit
              friend={friend}
              key={friend.id}
              onHandleSplit={handleSplit}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
