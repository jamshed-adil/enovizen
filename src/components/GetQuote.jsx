import { useState } from 'react';
import Icon from './Icon';
import { serviceCategories } from './ServicesStrip';

const GetQuote = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="get-quote" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-tag" style={{ color: '#1a56db' }}>Let's Work Together</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#0f1b3d', marginTop: '8px' }}>
            Get A Free Quote
          </h2>
          <p className="text-gray-500 mt-3">Tell us about your requirements and we'll get back within 24 hours.</p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
          {/* Left info panel */}
          <div className="md:col-span-2 p-10 text-white" style={{ background: 'linear-gradient(135deg,#0f1b3d,#1a2f6b)' }}>
            <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px' }}>Contact Information</h3>
            <p className="text-white/60 text-sm mb-8">Fill out the form and our team will connect you with the right solutions.</p>
            {[
              { icon: 'phone', text: '+91 9876543210' },
              { icon: 'mail', text: 'info@enovizen.com' },
              { icon: 'location', text: 'Hyderabad, Telangana' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(6,182,212,0.2)' }}>
                  <Icon name={c.icon} cls="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-white/80 text-sm">{c.text}</span>
              </div>
            ))}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs mb-3">Follow us on</p>
              <div className="flex gap-3">
                {['F', 'T', 'In'].map(s => (
                  <div key={s} className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:scale-110 transition-transform"
                    style={{ background: 'rgba(255,255,255,0.1)' }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 p-10 bg-white">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[['name', 'Full Name', 'text'], ['email', 'Email Address', 'email']].map(([k, p, t]) => (
                <div key={k}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">{p}</label>
                  <input
                    type={t}
                    required
                    value={form[k]}
                    onChange={e => setForm({ ...form, [k]: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Service Required</label>
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  <option value="">Select...</option>
                  {serviceCategories.map(s => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />
            </div>
            <button type="submit" className="btn-cta w-full py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
              {sent ? '✓ Quote Request Sent!' : <><span>Send Quote Request</span><Icon name="arrow" cls="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
