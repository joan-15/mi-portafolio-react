const QuoteCard = ({ quote }) => (
    <div className="quote-card">
      <p>"{quote.text}"</p>
      <h4>- {quote.author || 'Anónimo'}</h4>
    </div>
  );
  