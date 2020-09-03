import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import styled from "styled-components";
import { requestArtist, receiveArtist, artistError } from "../../actions";
import { convert } from "../../helpers/util";

//BMTH ID = 1Ffb6ejR6Fe5IamqA5oRUF

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const artistId = useParams().id;
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.currentArtist);

  React.useEffect(() => {
    if (accessToken) return dispatch(requestArtist());
    fetchArtistProfile(accessToken, artistId)
      .then((data) => dispatch(receiveArtist(data)))
      .catch((error) => dispatch(artistError()));
  }, [accessToken]);

  //so big note to self, fetching API information will always be a pain,and conditional rendering is your only wait out to display the information you need.

  return artist ? (
    <ArtistDiv>
      <img src={artist.profile.images[1].url} alt="bandAvatar" />
      <h1>{artist.profile.name}</h1>
      <h2>{convert(artist.profile.followers.total)} followers</h2>
      <Tags>
        <First>{artist.profile.genres[0]} </First>
        <Second>{artist.profile.genres[1]}</Second>
      </Tags>
    </ArtistDiv>
  ) : (
    <div>nope</div>
  );
};

const ArtistDiv = styled.div`
  background-color: #0b0f14;
  color: white;
  text-align: center;
  height: 100vh;
  position: relative;
  justify-content: center;
  img {
    border-radius: 100%;
    padding-top: 50px;
  }
  h1 {
    transform: translate(0%, -145%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  }
  h2 {
    transform: translate(0%, -125%);
  }
`;

const First = styled.span`
  background: #191414;
  border-radius: 5px;
  transform: translate(-10%, 0%);
`;

const Second = styled.span`
  background: #191414;
  border-radius: 5px;
  transform: translate(10%, 0%);
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  span {
    padding: 25px;
  }
`;

export default ArtistRoute;
