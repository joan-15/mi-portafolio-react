import React from 'react';
import QuoteCard from '../components/QuoteCard';

const quotes = [
  { quote: 'Art is not what you see, but what you make others see.', author: 'Edgar Degas' },
  { quote: 'The purpose of art is washing the dust of daily life off our souls.', author: 'Pablo Picasso' },
];

const Home = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to My Art Portfolio</h1>
      {quotes.map((q, index) => (
        <QuoteCard key={index} quote={q.quote} author={q.author} />
      ))}
    </div>
  );
};

export default Home;
