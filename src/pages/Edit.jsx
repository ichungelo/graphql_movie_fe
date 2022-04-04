import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import background from "../assets/images/background.svg";
import Navbar from "../components/Navbar";

const EDIT_REVIEW = gql`
  mutation EditReview($input: EditReview!) {
    editReview(input: $input)
  }
`;

const Edit = (props) => {
  const reviewId = props.match.params.reviewId;
  const movieId = props.match.params.movieId;

  const history = useHistory();

  const [review, setReview] = useState("");

  const [editReview] = useMutation(EDIT_REVIEW, {
    variables: {
      input: {
        id: reviewId,
        review: review,
      },
    },
    onCompleted: ({ editReview }) => {
      alert(editReview);
      history.replace(`/movie/${movieId}`);
    },
    onError: (error) => {
      alert(error);
      history.replace(`/movie/${movieId}`);
    },
  });

  return (
    <div className="min-h-screen w-screen bg-[#9BC3BF]">
      <Navbar button="Logout" />
      <div className="flex flex-wrap justify-center pt-nav">
        <img className="fixed bottom-0 right-0 z-10" src={background} />
        <div className="z-20 bg-gray-100/90 rounded-xl m-3 p-3 h-96 w-2/3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editReview();
            }}
          >
            <p className="font-dm text-center text-2xl mb-3">Edit Review</p>
            <div className="mb-5">
              <label className="font-dm">Edit</label>
              <input
                type={"text"}
                placeholder="Edit review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-700 w-28 h-10 rounded-full font-dm text-white hover:bg-teal-900 hover:text-xl transition duration-500 ease-in-out"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
