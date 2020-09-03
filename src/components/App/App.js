import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute/ArtistRoute";
import {
  receiveAccessToken,
  receiveAccessTokenError,
  requestAccessToken,
} from "./../../actions";
import { useDispatch } from "react-redux";

const DEFAULT_ARTIST_ID = "1Ffb6ejR6Fe5IamqA5oRUF";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveAccessToken(data.access_token));
      })
      .catch((error) => {
        console.log(error);
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/artists/:id">
          <ArtistRoute />
        </Route>
        <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
      </Switch>
    </Router>
  );
};

export default App;
