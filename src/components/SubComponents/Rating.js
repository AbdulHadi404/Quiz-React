import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutlined } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const ratings = (difficulty) => {
  let arr = new Array(5);
  var filled = <FontAwesomeIcon icon={starFilled} />;
  var outline = <FontAwesomeIcon icon={starOutlined} />;
  switch (difficulty) {
    case 'easy':
      return arr.fill(filled, 0, 1).fill(outline, 1, 5);
    case 'medium':
      return arr.fill(filled, 0, 2).fill(outline, 2, 5);
    case 'hard':
      return arr.fill(filled, 0, 3).fill(outline, 3, 5);
    default:
      return null;
  }
};
export default ratings;
