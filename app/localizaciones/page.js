import { ZonasGargolas } from "@/components/zonas-gargolas/zonas-gargolas";




export default function ZonasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 py-20 px-4">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-stone-100 mb-8">
          Gárgolas de Sevilla
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ZonasGargolas />
        </section>
      </main>
    </div>
  );
}

