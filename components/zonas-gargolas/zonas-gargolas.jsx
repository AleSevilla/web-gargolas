import { localizaciones } from "@/config/gargolas";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function ZonasGargolas() {
	return localizaciones.map(({ lugar, imagen, nombre, url, gargolas }) => (
		<article key={lugar} className="group relative overflow-hidden rounded-lg">
			<Link href={`/${url}`}>
			<figure className="relative h-full">
				<div className="absolute inset-0 bg-black/40 z-10"></div>
				<Image
					src={`/images/${imagen}`}
					alt={`Vista de ${nombre}`}
					width={465}
					height={475}
					className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
				/>
				<figcaption className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
					<div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border-2 border-white shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
						<h2 className="text-md font-serif text-stone-900 mb-2">{nombre}</h2>
						<div className="flex items-center text-stone-700">
							<MapPin className="w-5 h-5 mr-2" />
							<span className="font-medium">{gargolas} gárgolas</span>
						</div>
					</div>
				</figcaption>
			</figure>
			</Link>
		</article>
	));
}
