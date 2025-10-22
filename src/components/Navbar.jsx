import React from 'react';

const links = [
  { id: 'benefits', label: 'Why Us' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#top" onClick={(e) => handleNavClick(e, 'top')} className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold">CS</span>
          <span className="font-semibold tracking-tight">CruiseSelect Autos</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleNavClick(e, l.id)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inventory"
            onClick={(e) => handleNavClick(e, 'inventory')}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Browse Inventory
          </a>
        </div>
      </nav>
    </header>
  );
}
