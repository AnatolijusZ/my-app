import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import NewPost from "./NewPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [postsUpdatetime, setPostsUpdatetime] = useState(Date.now()); //naudojama tam, kad atnaujinti puslapi po pakeitimu

  useEffect(() => {
    axios.get("http://localhost:3003/posts").then(function (response) {
      setPosts(response.data);
    });
  }, [postsUpdatetime]);

  const doDelete = (id) => {
    axios
      .delete("http://localhost:3003/posts" + id, {})
      .then(function (response) {
        setPostsUpdatetime(Date.now());
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const doAdd = (data) => {
    axios
      .post("http://localhost:3003/posts", data)
      .then(function (response) {
        setPostsUpdatetime(Date.now());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const crud = {
    delete: doDelete,
  };
  const openModal = (id) => {
    setOpen[id];
  };
  const closeModal = () => {
    setClose;
  };
  return (
    <>
      <div className="new-posts-container">
        <NewPost add={doAdd}></NewPost>
      </div>

      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} data={post} crud={crud}></Post>
        ))}
      </div>
    </>
  );
}

export default App;
