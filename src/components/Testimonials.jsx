import React from 'react';

export default function Testimonials() {
  const reviews = [
    { name: 'Sarah L.', business: 'Boutique Coffee Co.', text: 'TBATS completely transformed our online presence. Our new website is stunning, and the booking system they integrated increased our sales by 40% in the first month.', stars: 5 },
    { name: 'Mark T.', business: 'Tech Startup Founder', text: 'Working with TBATS was a breeze. They took our complex specifications and turned them into a sleek, fast, and highly professional platform. The editorial design is top-notch.', stars: 5 },
    { name: 'Elena R.', business: 'Real Estate Agency', text: 'I am not a tech person, but TBATS made the process incredibly easy to understand. They delivered on time, and the pricing was exactly as estimated. Highly recommended!', stars: 5 }
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Client Success Stories</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid-3">
          {reviews.map((review, i) => (
            <div key={i} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem', letterSpacing: '4px' }}>
                {'★'.repeat(review.stars)}
              </div>
              <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-secondary)', flex: 1, marginBottom: '2rem' }}>
                "{review.text}"
              </p>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{review.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-silver)' }}>{review.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
