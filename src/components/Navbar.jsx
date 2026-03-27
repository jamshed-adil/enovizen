import { useState, useEffect } from 'react';
import Icon from './Icon';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['Home', 'About Us', 'Services', 'Careers', 'Get Quote', 'Contact Us'];

  const scrollTo = (item) => {
    const id = item.toLowerCase().replace(/\s/g, '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled shadow-xl' : ''}`}
      style={{ background: scrolled ? undefined : 'rgba(15,27,61,0.92)', backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.02em' }}>
            En<span style={{ color: '#06b6d4' }}>o</span>viz<span style={{ color: '#f59e0b' }}>en</span>
          </span>
          <div className="hidden md:block">
            <p className="text-white/50 leading-tight" style={{ fontSize: '0.6rem', maxWidth: '120px' }}>
              Integrated Facility Management Services Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <button key={item} className="nav-link underline-animated" onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(v => !v)}>
          <Icon name={menuOpen ? 'x' : 'menu'} cls="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4" style={{ background: '#0f1b3d' }}>
          {navItems.map(item => (
            <button
              key={item}
              className="text-white/80 text-sm font-medium text-left hover:text-amber-400 transition-colors"
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
