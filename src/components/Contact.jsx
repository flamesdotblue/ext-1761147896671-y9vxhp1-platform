import React, { useMemo, useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | error

  const validate = useMemo(() => (values) => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!/^\+?[0-9\-\s]{7,15}$/.test(values.phone)) e.phone = 'Enter a valid phone number.';
    if (values.date && new Date(values.date) < new Date(new Date().toDateString())) e.date = 'Choose a date today or later.';
    if (!values.consent) e.consent = 'You must consent to be contacted.';
    return e;
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eMap = validate(form);
    setErrors(eMap);
    if (Object.keys(eMap).length === 0) {
      setStatus('success');
      // Simulate submit. Integrate API here as needed.
      setTimeout(() => setStatus('idle'), 5000);
      setForm({ name: '', email: '', phone: '', date: '', time: '', message: '', consent: false });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Request a Quote or Schedule a Visit</h2>
          <p className="mt-2 text-gray-700">Our team will get back to you within one business day.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  required
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  required
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-900">Preferred date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
                {errors.date && (
                  <p id="date-error" className="mt-1 text-sm text-red-600">{errors.date}</p>
                )}
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-900">Preferred time</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  placeholder="Tell us about the vehicle you’re interested in (optional)"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    required
                  />
                  <span>
                    I agree to be contacted about my inquiry via phone or email. Your information is kept private.
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-1 text-sm text-red-600">{errors.consent}</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
              >
                Submit Request
              </button>
              <div className="mt-3 min-h-[1.5rem]" aria-live="polite" role="status">
                {status === 'success' && (
                  <p className="text-sm font-medium text-green-700">Thank you! We received your request and will contact you shortly.</p>
                )}
                {status === 'error' && Object.keys(errors).length > 0 && (
                  <p className="text-sm font-medium text-red-700">Please fix the highlighted fields and try again.</p>
                )}
              </div>
            </div>
          </form>

          <aside className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Visit Our Showroom</h3>
            <p className="mt-2 text-gray-700">1234 Motorway Blvd, Suite 200, San Francisco, CA</p>
            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-800 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-gray-900">Sales Hours</dt>
                <dd>Mon–Sat: 9:00 AM – 7:00 PM</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Service Hours</dt>
                <dd>Mon–Fri: 8:00 AM – 6:00 PM</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Phone</dt>
                <dd>(415) 555‑0123</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Email</dt>
                <dd>sales@cruiseselect.com</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#inventory"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('inventory');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Browse Inventory
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
