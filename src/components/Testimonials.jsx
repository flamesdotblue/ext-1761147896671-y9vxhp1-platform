import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ava M.',
    quote:
      'Easiest car buying experience I have ever had. Transparent pricing and they beat my bank rate!',
    rating: 5,
  },
  {
    name: 'Liam S.',
    quote:
      'Huge selection and the team helped me find the perfect SUV for my family. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Noah R.',
    quote:
      'The certified pre-owned program gave me total peace of mind. My Audi feels brand new.',
    rating: 4,
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < count ? 'h-4 w-4 text-yellow-500' : 'h-4 w-4 text-gray-300'}
          aria-hidden="true"
          fill={i < count ? 'currentColor' : 'none'}
        />)
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Customers Say</h2>
          <p className="mt-2 text-gray-700">Real reviews from recent buyers.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <Stars count={r.rating} />
              <blockquote className="mt-3 text-gray-800">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-900">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
