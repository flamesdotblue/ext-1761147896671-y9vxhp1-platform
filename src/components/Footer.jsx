import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold">CS</span>
              <span className="font-semibold">CruiseSelect Autos</span>
            </div>
            <p className="mt-3 text-sm text-gray-700">Premium car buying made simple. New, used, and certified pre-owned with financing options to fit your life.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gray-500" aria-hidden="true" /> 1234 Motorway Blvd, San Francisco, CA</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gray-500" aria-hidden="true" /> (415) 555‑0123</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gray-500" aria-hidden="true" /> sales@cruiseselect.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigate</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              <li><a className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded" href="#benefits" onClick={(e) => {e.preventDefault(); document.getElementById('benefits')?.scrollIntoView({behavior:'smooth'});}}>Why Us</a></li>
              <li><a className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded" href="#inventory" onClick={(e) => {e.preventDefault(); document.getElementById('inventory')?.scrollIntoView({behavior:'smooth'});}}>Inventory</a></li>
              <li><a className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded" href="#testimonials" onClick={(e) => {e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({behavior:'smooth'});}}>Reviews</a></li>
              <li><a className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded" href="#contact" onClick={(e) => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});}}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Follow</h3>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:text-blue-700 hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <Facebook aria-hidden="true" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:text-blue-700 hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <Twitter aria-hidden="true" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:text-blue-700 hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <Instagram aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CruiseSelect Autos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
