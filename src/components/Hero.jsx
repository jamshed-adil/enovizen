import { useState, useEffect } from 'react';
import Icon from './Icon';

const slides = [
  {
    headline: "Integrated Facility Management Services",
    sub: "Delivering excellence across Andhra Pradesh, Telangana, Karnataka & Tamilnadu with world-class facility solutions."
  },
  {
    headline: "Your Trusted Facility Partner",
    sub: "From soft services to hard services — we handle every aspect of facility management with precision and care."
  },
  {
    headline: "Pan-South India Coverage",
    sub: "Comprehensive support services for corporates, hospitals, institutions, and residential complexes."
  },
];

const stats = [
  { num: '500+', label: 'Projects Delivered', icon: 'tool', color: '#1a56db' },
  { num: '200+', label: 'Expert Professionals', icon: 'users', color: '#10b981' },
  { num: '7+', label: 'Years of Excellence', icon: 'star', color: '#f59e0b' },
  { num: '4', label: 'States Coverage', icon: 'globe', color: '#8b5cf6' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative" style={{ paddingTop: '88px' }}>
      <div className="hero-grid" />
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }} />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #1a56db, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 w-full py-24 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div className="slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)' }}>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="section-tag text-cyan-400">Trusted Since 2015</span>
          </div>
          <h1 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.15, color: '#fff', letterSpacing: '-0.02em' }}>
            {slides[current].headline}
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-lg" style={{ fontWeight: 300 }}>
            {slides[current].sub}
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="btn-cta px-7 py-3.5 rounded-xl text-sm flex items-center gap-2"
              onClick={() => document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' })}>
              Get A Free Quote <Icon name="arrow" cls="w-4 h-4" />
            </button>
            <button className="btn-outline px-7 py-3.5 rounded-xl text-sm"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </button>
          </div>
          {/* Slide dots */}
          <div className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-amber-400' : 'w-3 bg-white/30'}`} />
            ))}
          </div>
        </div>

        {/* Right – stats */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="float-anim rounded-2xl p-6 text-center relative overflow-hidden"
              style={{ animationDelay: `${i * 0.8}s`, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${s.color}22` }}>
                <Icon name={s.icon} cls="w-6 h-6" style={{ color: s.color }} />
              </div>
              <div style={{ fontFamily: 'Sora', fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.num}</div>
              <div className="text-white/60 text-xs mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
