import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import CultureShowcase from './components/CultureShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <CultureShowcase />

        <section id="seni" className="py-20 bg-amber-50/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Seni Pertunjukan</h2>
                <p className="mt-3 text-gray-700">
                  Tari Saman, Kecak, dan Reog Ponorogo menampilkan energi dan kekompakan. Setiap gerak memiliki makna, setiap ritme menyatukan.
                </p>
                <div className="mt-6">
                  <a href="#sorotan" className="inline-flex items-center rounded-full bg-rose-600 px-5 py-2.5 text-white font-medium shadow hover:bg-rose-700 transition-colors">Jelajahi Sorotan</a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1564466809058-bf4114d55396?q=80&w=1600&auto=format&fit=crop"
                  alt="Tari tradisional Indonesia"
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="motif" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="relative order-last md:order-first overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=1600&auto=format&fit=crop"
                  alt="Kain batik Indonesia"
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Motif & Warna</h2>
                <p className="mt-3 text-gray-700">
                  Setiap motif batik menuturkan kisah: Parang melambangkan keteguhan, Kawung mencerminkan kesucian, Megamendung menandakan ketenangan.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-gray-800 font-medium hover:bg-gray-50">Pelajari Filsafat</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
