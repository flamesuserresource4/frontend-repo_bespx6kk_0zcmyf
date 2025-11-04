import { motion } from 'framer-motion';
import { Palette, Music, Map, Star } from 'lucide-react';

const items = [
  {
    title: 'Batik & Motif Nusantara',
    desc:
      'Motif batik dari berbagai daerah seperti Parang, Kawung, dan Megamendung mencerminkan filosofi dan identitas lokal.',
    tag: 'Motif',
    icon: Palette,
    image:
      'https://images.unsplash.com/photo-1544551763-7ef4200e1521?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gamelan & Angklung',
    desc:
      'Instrumen tradisional yang menggambarkan harmoni dan kebersamaan dalam setiap denting nadanya.',
    tag: 'Musik',
    icon: Music,
    image:
      'https://images.unsplash.com/photo-1543844154-8e3d51a8c49f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Wayang & Cerita Rakyat',
    desc:
      'Wayang kulit dan golek menyimpan kisah kepahlawanan, kebijaksanaan, dan nilai moral yang abadi.',
    tag: 'Warisan',
    icon: Star,
    image:
      'https://images.unsplash.com/photo-1612313086338-fd8c7b1a8d5f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ragam Rumah Adat',
    desc:
      'Arsitektur tradisional seperti Rumah Gadang, Tongkonan, dan Honai menunjukkan kearifan lokal yang unik.',
    tag: 'Arsitektur',
    icon: Map,
    image:
      'https://images.unsplash.com/photo-1579783902641-e3d9fe9d7c6a?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function CultureShowcase() {
  return (
    <section id="sorotan" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Sorotan Budaya</h2>
          <p className="mt-3 text-gray-600">
            Pilihan ragam budaya yang dapat kamu jelajahi. Sentuh kartu untuk animasi interaktif.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, rotate: -0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-800 shadow">
                  <item.icon className="mr-1 h-3.5 w-3.5 text-rose-600" />
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-700">Pelajari lebih lanjut →</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-50/60 to-transparent" />
    </section>
  );
}
