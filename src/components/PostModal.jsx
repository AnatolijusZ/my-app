import { useState } from "react";
function Modal({ id, crud }) {
  const [editInput, setEditInput] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [open, setOpen] = useState();

  const controller = (e, i) => {
    if ("title" === i) {
      setTitle(e.target.value);
    }
    if ("body" === i) {
      setBody(e.target.value);
    }
  };

  const editInputHandler = (e) => {
    setEditInput(e.target.value);
  };
  if (id === 0) {
    return null;
  }

  return (
    <>
      <div className="new-post">
        <div>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => controller(e, "title")}
            value={title}
          />
        </div>
      </div>
      <div className="new-post">
        <div>
          <span>Body</span>
          <textarea onChange={(e) => controller(e, "body")} value={body} />
        </div>
      </div>
      <button className="input-button-small" onClick={crud.close}>
        X
      </button>
    </>
  );
}

export default Modal;
