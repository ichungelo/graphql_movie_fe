import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import ReviewItem from "./ReviewItem";

const NEW_REVIEW = gql`
  mutation NewReview($input: NewReview!) {
    newReview(input: $input)
  }
`;

const Reviews = (props) => {
  const [addReview, setAddReview] = useState("");
  const { reviews, movieId } = props;

  const [newReview] = useMutation(NEW_REVIEW, {
    variables: {
      input: {
        movieId: movieId,
        review: addReview,
      },
    },
    onCompleted: ({ newReview }) => {
      alert(newReview);
      window.location.href = `/movie/${movieId}`
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newReview();
        }}
      >
        <div className="mb-5">
          <label className="font-dm">Add new review</label>
          <input
            type={"text"}
            placeholder="write your new reviews"
            value={addReview}
            onChange={(e) => setAddReview(e.target.value)}
            className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-700 w-28 h-10 rounded-full font-dm text-white hover:bg-teal-900 hover:text-xl transition duration-500 ease-in-out"
        >
          Add Review
        </button>
      </form>
      {reviews.map((review, index) => (
        <div key={index}>
          <ReviewItem review={review} movieId={movieId} />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
