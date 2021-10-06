import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import NewPost from "./NewPost";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/posts")
      .then(function (response) {
        console.log(response.data);
        setPosts(response.data);
      });
  }, []);

  const doDelete = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id, {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const doAdd = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const crud = {
    delete: doDelete,
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
