import React, { Component } from "react";
import { useSelector } from "react-redux";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const artistId = "1Ffb6ejR6Fe5IamqA5oRUF";

  return accessToken;
};

export default ArtistRoute;
