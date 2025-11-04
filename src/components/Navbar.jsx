import { useState } from 'react';
import { Menu, X, Star, Map, Music, Palette } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: 'Sorotan', href: '#sorotan', icon: Star },
    { label: 'Peta Budaya', href: '#peta', icon: Map },
    { label: 'Seni & Musik', href: '#seni', icon: Music },
    { label: 'Motif & Warna', href: '#motif', icon: Palette },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-600 via-red-600 to-rose-600 bg-clip-text text-transparent">Nusantara</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">Cultural</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-rose-700 transition-colors">
                <Icon className="h-4 w-4 text-gray-400 group-hover:text-rose-600 transition-colors" />
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-3">
            <div className="flex flex-col gap-2">
              {navItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-4 w-4 text-gray-400" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
