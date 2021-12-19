import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./ShowReview.css";

const ShowReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://stark-reaches-58520.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="review">
      <div className=" p-5 m-5 ">
        <h1 className="text-center heading-review">Customers Review</h1>
        <div className="row">
          {review.map((rev) => (
            <div class="card-deck col-lg-4 col-md-6 col-12">
              <div class="card mb-4">
                <img class="card-img-top" src={rev.image} />
                <div class="card-body">
                  <h5 class="card-title">Customer: {rev.username}</h5>
                  <p class="card-text">{rev.suggestion}</p>

                  <div>
                    <Rating
                      initialRating={rev.rating}
                      emptySymbol="far fa-star icon-color"
                      fullSymbol="fas fa-star icon-color"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
