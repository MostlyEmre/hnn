import _ from "lodash";
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
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${match.params.username}.json?print=pretty`);
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  return (
    <div>
      <GoBack />
      <h1>{user.id}</h1>
      <p>Karma: {user.karma}</p>
      {user.submitted ? <p>Submissions: {user.submitted.length}</p> : <p>User doesn't have any submissions. Or there's an error with the hnAPI.</p>}
      <div>
        <h2>Bio</h2>
        {user.about ? <div className="comment" dangerouslySetInnerHTML={{ __html: user.about }} /> : <p>{_.capitalize(user.id)} doesn't have a bio.</p>}
      </div>

      <p>
        Became a member around {xAgo(user.created)}. On {calendarDate(user.created)} to be exact.
      </p>
    </div>
  );
}

export default User;
