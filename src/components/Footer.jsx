export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Nusantara Cultural. Cinta budaya, jaga warisan.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#sorotan" className="hover:text-gray-900">Sorotan</a>
            <a href="#seni" className="hover:text-gray-900">Seni</a>
            <a href="#motif" className="hover:text-gray-900">Motif</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
