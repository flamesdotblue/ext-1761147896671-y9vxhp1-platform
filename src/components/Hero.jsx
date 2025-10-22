import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden"
      aria-label="Featured vehicle and value proposition"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow">
            Drive the Difference
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-100/90">
            Discover a wide selection of new and certified pre-owned vehicles with transparent pricing and flexible financing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inventory"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('inventory');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Browse Inventory
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-md border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
