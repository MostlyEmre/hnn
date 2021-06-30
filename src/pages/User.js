import _ from "lodash";
import React, { useState, useEffect } from "react";
import GoBack from "../components/GoBack";
import Loading from "../components/Loading";
import LastPosts from "../components/LastPosts";
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <GoBack />
      <h1 className="user-title">{user.id}</h1>
      <p className="bio-meta">
        Karma <span>{user.karma}</span>
      </p>
      {user.submitted ? (
        <p className="bio-meta">
          Submissions <span>{user.submitted.length}</span>
        </p>
      ) : null}
      <p>
        Became a member around {xAgo(user.created)}. On {calendarDate(user.created)} to be exact.
      </p>
      <div>
        <h2>Bio</h2>
        {user.about ? <div className="bio-wrapper" dangerouslySetInnerHTML={{ __html: user.about }} /> : <p>{_.capitalize(user.id)} doesn't have a bio.</p>}
      </div>
      <LastPosts user={user.id} />
    </div>
  );
}

export default User;
