import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react";

import background from "../assets/images/background.svg";
import Detail from "../components/Detail";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";

const DETAIL_MOVIE = gql`
  mutation DetailMovie($input: PrimaryID!) {
    detailMovie(input: $input) {
      id
      title
      year
      poster
      overview
      reviews {
        id
        userId
        username
        review
        updatedAt
      }
    }
  }
`;

const MovieDetail = (props) => {
  const movieId = props.match.params.id;
  const [detailMovie, { data }] = useMutation(DETAIL_MOVIE, {
    variables: {
      input: {
        id: movieId,
      },
    },
  });

  useEffect(() => {
    detailMovie();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#9BC3BF]">
      <Navbar button="Logout" />
      <div className="flex flex-wrap justify-center pt-nav">
        <img className="fixed bottom-0 right-0 z-10" src={background} />
        <div className="z-20 bg-gray-100/90 rounded-xl m-3 h-96 w-2/3">
          {data && <Detail movie={data.detailMovie} />}
        </div>
        <div className="z-20 bg-gray-100/90 rounded-xl m-3 p-3 w-2/3">
          {data && <Reviews movieId={data.detailMovie.id} reviews={data.detailMovie.reviews} />}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
