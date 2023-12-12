import Friend from "./Friend";
export default function FriendList({ friends, selected, onHandleSelected }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selected={selected}
            onHandleSelected={onHandleSelected}
          />
        ))}
      </ul>
    </div>
  );
}
