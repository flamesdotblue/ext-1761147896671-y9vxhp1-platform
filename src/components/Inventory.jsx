import React, { useMemo, useState } from 'react';

const cars = [
  {
    id: 1,
    name: '2023 Tesla Model 3 Performance',
    type: 'Sedan',
    price: 52990,
    mileage: 5200,
    year: 2023,
    fuel: 'Electric',
    image:
      'https://images.unsplash.com/photo-1676856577533-1e8099932f7b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIzJTIwVGVzbGElMjBNb2RlbCUyMDMlMjBQZXJmb3JtYW5jZXxlbnwwfDB8fHwxNzYxMTQ4MzIyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'White Tesla Model 3 parked in a modern setting',
  },
  {
    id: 2,
    name: '2021 BMW X5 xDrive40i',
    type: 'SUV',
    price: 44950,
    mileage: 24000,
    year: 2021,
    fuel: 'Gasoline',
    image:
      'https://images.unsplash.com/photo-1640458594495-ab5c32e5e185?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIxJTIwQk1XJTIwWDUlMjB4RHJpdmU0MGl8ZW58MHwwfHx8MTc2MTE0ODMyMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Black BMW X5 in a city street at dusk',
  },
  {
    id: 3,
    name: '2020 Ford F-150 Lariat',
    type: 'Truck',
    price: 38990,
    mileage: 31000,
    year: 2020,
    fuel: 'Gasoline',
    image:
      'https://images.unsplash.com/photo-1727988358513-2dd5d706ddfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIwJTIwRm9yZCUyMEYtMTUwJTIwTGFyaWF0fGVufDB8MHx8fDE3NjExNDgzMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Blue Ford F-150 truck in the mountains',
  },
  {
    id: 4,
    name: '2019 Audi A5 Coupe',
    type: 'Coupe',
    price: 32990,
    mileage: 28000,
    year: 2019,
    fuel: 'Gasoline',
    image:
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1200&auto=format&fit=crop',
    alt: 'Silver Audi A5 coupe on a coastal road',
  },
  {
    id: 5,
    name: '2022 Toyota RAV4 Hybrid',
    type: 'SUV',
    price: 34990,
    mileage: 12000,
    year: 2022,
    fuel: 'Hybrid',
    image:
      'https://images.unsplash.com/photo-1624824913882-5b8808d48d6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIyJTIwVG95b3RhJTIwUkFWNCUyMEh5YnJpZHxlbnwwfDB8fHwxNzYxMTQ4MzIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'White Toyota RAV4 hybrid in a forest pathway',
  },
  {
    id: 6,
    name: '2021 Chevrolet Camaro 2SS',
    type: 'Coupe',
    price: 41990,
    mileage: 15000,
    year: 2021,
    fuel: 'Gasoline',
    image:
      'https://images.unsplash.com/photo-1735293721001-ba4c1c09256b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIxJTIwQ2hldnJvbGV0JTIwQ2FtYXJvJTIwMlNTfGVufDB8MHx8fDE3NjExNDgzMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Yellow Chevrolet Camaro parked at sunset',
  },
];

export default function Inventory() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [maxPrice, setMaxPrice] = useState('Any');

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      const matchesQuery = c.name.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === 'All' ? true : c.type === type;
      const matchesPrice = maxPrice === 'Any' ? true : c.price <= Number(maxPrice);
      return matchesQuery && matchesType && matchesPrice;
    });
  }, [query, type, maxPrice]);

  return (
    <section id="inventory" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Inventory</h2>
            <p className="mt-2 text-gray-700">Filter and find your perfect match.</p>
          </div>
          <form
            className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            role="search"
            aria-label="Filter inventory"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="inv-search">Search inventory</label>
            <input
              id="inv-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search make or model"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />

            <label className="sr-only" htmlFor="inv-type">Body type</label>
            <select
              id="inv-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option>All</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Truck</option>
              <option>Coupe</option>
            </select>

            <label className="sr-only" htmlFor="inv-price">Max price</label>
            <select
              id="inv-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="Any">Any price</option>
              <option value="25000">Up to $25,000</option>
              <option value="40000">Up to $40,000</option>
              <option value="60000">Up to $60,000</option>
            </select>
          </form>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <article key={c.id} className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
                  <p className="shrink-0 text-right text-blue-700 font-bold">${c.price.toLocaleString()}</p>
                </div>
                <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                  <div>
                    <dt className="sr-only">Body type</dt>
                    <dd>{c.type}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Year</dt>
                    <dd>{c.year}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Mileage</dt>
                    <dd>{c.mileage.toLocaleString()} mi</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Fuel</dt>
                    <dd>{c.fuel}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    aria-label={`Get a quote for ${c.name}`}
                  >
                    Get a Quote
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    aria-label={`View details for ${c.name}`}
                    onClick={() => alert(`${c.name} — Contact us for full details.`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-gray-700" role="status">No vehicles match your filters. Try adjusting your search.</p>
        )}
      </div>
    </section>
  );
}
