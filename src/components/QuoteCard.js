import React from 'react';

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <small>- {author}</small>
    </div>
  );
};

export default QuoteCard;
