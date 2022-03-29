import { dbService, storageService } from "fbInstance";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNweNweet] = useState(nweetObj.text);

  // doc : Return document reference instance
  // this situation, doc returns nweetObj on firebase
  // nweet has speacial path
  const nweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
  console.log(nweetTextRef);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    console.log(ok);
    if (ok) {
      // deleteDoc : Delete the document & photo
      await deleteDoc(nweetTextRef);

      // ref : Return Storage reference
      // deleteObject : Deletes the object at this location.
      await deleteObject(ref(storageService, nweetObj.attachmentUrl));
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();

    // updateDoc : update text of the document
    await updateDoc(nweetTextRef, {
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweNweet(value);
  };
  return (
    <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              onChange={onChange}
              required
              autoFocus
              className="formInput"
            />
            <input type="submit" value="Update Nweet" className="formBtn" />
          </form>
          <button onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img
              alt="img"
              src={nweetObj.attachmentUrl}
              style={{ width: "50px", height: "50px" }}
            />
          )}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>Delete</span>
              <span onClick={toggleEditing}>Edit</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
