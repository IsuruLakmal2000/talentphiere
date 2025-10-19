import React from "react";
import "./review.css";

type ReviewCardProps = {
  text: string;
  author: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ text, author }) => (
  <article className="review-card" role="listitem">
    <p className="review-text">{text}</p>
    <p className="review-author">— {author}</p>
  </article>
);

export default ReviewCard;
