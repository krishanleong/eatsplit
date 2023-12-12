import { useState } from "react";
export default function FriendForm({ onHandleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      name,
      image,
      balance: 0,
      id: Math.floor(Math.random() * 10000 + 1),
    };
    console.log(newFriend);
    onHandleAddFriend(newFriend);
    setName("");
    setImage("");
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeImage(e) {
    setImage(e.target.value);
  }

  return (
    <div>
      <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="friendname">Friend Name</label>
        <input
          type="text"
          name="friendname"
          id="friendname"
          value={name}
          onChange={handleChangeName}
        ></input>
        <label htmlFor="imageurl">Image URL</label>
        <input
          type="text"
          name="imageurl"
          id="imageurl"
          value={image}
          onChange={handleChangeImage}
        ></input>
        <button className="button">Add</button>
      </form>
    </div>
  );
}
