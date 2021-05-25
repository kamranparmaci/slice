import React, { useEffect, useRef, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState();

  let unsubscribe = useRef(null);

  useEffect(() => {
    unsubscribe.current = window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "393897742632-71spov5hisrsifhho35f07ogs1cko3fk.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          onAuthChange();
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
        });
    });
    return () => {
      unsubscribe.current = null;
    };
  });

  const onAuthChange = () => {
    setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderedAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          className="btn text-warning border border-warning d-inline-flex"
          onClick={onSignOutClick}
        >
          <img
            alt="Google Icon"
            className="w-25 h-25 pt-1 pr-1"
            src="https://img.icons8.com/carbon-copy/20/000000/google-logo.png"
          />{" "}
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn text-warning border border-warning d-inline-flex"
          onClick={onSignInClick}
        >
          <img
            alt="Google Icon"
            className="w-25 h-25 pt-1 pr-1"
            src="https://img.icons8.com/carbon-copy/20/000000/google-logo.png"
          />{" "}
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderedAuthButton()}</div>;
};

export default GoogleAuth;
