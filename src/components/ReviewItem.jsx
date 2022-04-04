import React from "react";
import { gql, useMutation } from "@apollo/client";
import jwtDecode from "jwt-decode";

import deleteIcon from "../assets/images/x.png";
import editIcon from "../assets/images/edit.png";

const DELETE_REVIEW = gql`
  mutation DeleteReview($input: DeleteReview!) {
    deleteReview(input: $input)
  }
`;

const ReviewItem = (props) => {
  const token = localStorage.getItem("TOKEN");
  const decoded = jwtDecode(token);
  const { review, movieId } = props;

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    variables: {
      input: {
        id: review.id,
      },
    },
    onCompleted: ({ deleteReview }) => {
      alert(deleteReview);
      window.location.href = `/movie/${movieId}`;
    },
  });

  return (
    <div>
      <div className="bg-white my-2 p-3 rounded-xl">
        <div className="flex flex-row">
          <p className="basis-3/4 font-dm pb-2">{review.username}</p>
          <div className="basis-1/4 flex flex-row-reverse">
            {decoded.id == review.userId && (
              <>
                <div className="basis-6">
                  <button className="h-6 w-6" onClick={() => deleteReview()}>
                    <img src={deleteIcon} />
                  </button>
                </div>
                <div className="basis-6">
                  <button
                    className="h-6 w-6"
                    onClick={() => {
                      window.location.href = `/movie/${movieId}/review/${review.id}`;
                    }}
                  >
                    <img src={editIcon} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <p className="text-xl px-2">{review.review}</p>
        <p className="text-xs text-right">{review.updatedAt}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
