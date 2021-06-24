import React, { useState, useEffect } from "react";
import GoBack from "../components/GoBack";
import { xAgo, calendarDate } from "../helper";
function User({ match }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`http://hn.algolia.com/api/v1/users/${match.params.username}`);
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  return (
    <div>
      <GoBack />
      <h1>{user.username}</h1>
      <p>Total comments: {user.comment_count}</p>
      <div>
        <h2>Bio</h2>
        <p>{user.about ? user.about : "Doesn't have a bio."}</p>
      </div>

      <p>
        Became a member around {xAgo(user.created_at_i)}. On {calendarDate(user.created_at_i)} to be exact.
      </p>
    </div>
  );
}

export default User;
