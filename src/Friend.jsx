export default function Friend({ friend, selected, onHandleSelected }) {
  return (
    <li className={friend.id === selected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="green">
          You owe {friend.name} ${friend.balance}.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="red">
          Your friend {friend.name} owes you ${friend.balance}.
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <button className="button" onClick={() => onHandleSelected(friend.id)}>
        Select
      </button>
    </li>
  );
}
