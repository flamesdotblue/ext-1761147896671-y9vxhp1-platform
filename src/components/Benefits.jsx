import React from 'react';
import { Car, Wallet, ShieldCheck, Wrench } from 'lucide-react';

const items = [
  {
    title: 'Wide Selection',
    desc: 'Shop sedans, SUVs, trucks, and sports cars from top brands in one place.',
    Icon: Car,
  },
  {
    title: 'Flexible Financing',
    desc: 'Competitive rates, fast approvals, and plans built around your budget.',
    Icon: Wallet,
  },
  {
    title: 'Certified Pre‑Owned',
    desc: 'Thorough 150‑point inspections, extended warranties, and full vehicle history.',
    Icon: ShieldCheck,
  },
  {
    title: 'Service & Support',
    desc: 'On‑site maintenance with OEM parts and experienced technicians.',
    Icon: Wrench,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose CruiseSelect</h2>
          <p className="mt-3 text-gray-700">
            Designed for confidence and convenience from your first search to the final handshake.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
