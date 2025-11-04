import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative pt-16" aria-label="3D Hero">
      <div className="relative h-[600px] w-full overflow-hidden rounded-b-3xl border-b border-black/5">
        <Spline
          scene="https://prod.spline.design/6YVwBEm90LkAMPxC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Jelajahi Keindahan Budaya Indonesia
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
              Dari Sabang sampai Merauke — temui karya, musik, dan warisan budaya Nusantara dalam pengalaman 3D yang hidup.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#sorotan" className="inline-flex items-center rounded-full bg-rose-600 px-5 py-2.5 text-white font-medium shadow hover:bg-rose-700 transition-colors">
                Lihat Sorotan
              </a>
              <a href="#seni" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-gray-800 font-medium hover:bg-gray-50">
                Eksplor Seni
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
