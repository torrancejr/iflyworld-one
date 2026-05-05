import { ArrowRight } from "lucide-react";
import { feature } from "topojson-client";
import { geoAlbersUsa, geoPath } from "d3-geo";
import type { Feature, MultiPolygon } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";
import nationTopo from "us-atlas/nation-10m.json";

const VIEWBOX_W = 975;
const VIEWBOX_H = 610;

const projection = geoAlbersUsa()
  .scale(1300)
  .translate([VIEWBOX_W / 2, VIEWBOX_H / 2]);

const pathGen = geoPath(projection);

const topology = nationTopo as unknown as Topology<{
  nation: GeometryCollection;
}>;
const nationFeature = feature(
  topology,
  topology.objects.nation,
) as unknown as Feature<MultiPolygon>;

const usPath = pathGen(nationFeature) ?? "";

const cities: { name: string; lng: number; lat: number }[] = [
  { name: "Seattle", lng: -122.33, lat: 47.61 },
  { name: "Portland", lng: -122.68, lat: 45.52 },
  { name: "San Francisco", lng: -122.42, lat: 37.77 },
  { name: "Los Angeles", lng: -118.24, lat: 34.05 },
  { name: "San Diego", lng: -117.16, lat: 32.72 },
  { name: "Las Vegas", lng: -115.14, lat: 36.17 },
  { name: "Phoenix", lng: -112.07, lat: 33.45 },
  { name: "Salt Lake City", lng: -111.89, lat: 40.76 },
  { name: "Denver", lng: -104.99, lat: 39.74 },
  { name: "Austin", lng: -97.74, lat: 30.27 },
  { name: "Dallas", lng: -96.8, lat: 32.78 },
  { name: "Houston", lng: -95.37, lat: 29.76 },
  { name: "Kansas City", lng: -94.58, lat: 39.1 },
  { name: "Minneapolis", lng: -93.27, lat: 44.98 },
  { name: "Chicago", lng: -87.65, lat: 41.88 },
  { name: "Nashville", lng: -86.78, lat: 36.16 },
  { name: "Atlanta", lng: -84.39, lat: 33.75 },
  { name: "Detroit", lng: -83.05, lat: 42.33 },
  { name: "Tampa", lng: -82.46, lat: 27.95 },
  { name: "Orlando", lng: -81.38, lat: 28.54 },
  { name: "Miami", lng: -80.19, lat: 25.76 },
  { name: "Charlotte", lng: -80.84, lat: 35.23 },
  { name: "Washington DC", lng: -77.04, lat: 38.91 },
  { name: "Philadelphia", lng: -75.17, lat: 39.95 },
  { name: "New York", lng: -74.01, lat: 40.71 },
  { name: "Boston", lng: -71.06, lat: 42.36 },
];

const pins = cities
  .map((c) => {
    const xy = projection([c.lng, c.lat]);
    return xy ? { name: c.name, x: xy[0], y: xy[1] } : null;
  })
  .filter((p): p is { name: string; x: number; y: number } => p !== null);

export default function LocationFinder() {
  return (
    <section className="bg-white px-5 py-8 md:max-w-5xl md:mx-auto md:py-16 md:px-8">
      <h2 className="text-center font-display text-xl tracking-wide text-ifly-navy md:text-3xl">
        FIND YOUR NEAREST IFLY
      </h2>
      <p className="mt-2 text-center text-sm text-ifly-gray-text md:text-base">
        Available at 30+ locations nationwide.
      </p>

      <div className="mt-5 w-full">
        <svg
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          className="h-auto w-full md:max-w-3xl md:mx-auto md:block"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Map of iFLY locations across the United States"
        >
          <path
            d={usPath}
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth={1}
            strokeLinejoin="round"
          />
          {pins.map((p) => (
            <g key={p.name} transform={`translate(${p.x} ${p.y})`}>
              <path d="M0 0 L-7 -16 L7 -16 Z" fill="#e60012" />
              <circle cx="0" cy="-22" r="9" fill="#e60012" />
              <circle cx="0" cy="-22" r="3" fill="#ffffff" />
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <a
          href="#locations"
          className="inline-flex items-center gap-1.5 font-display text-sm uppercase tracking-wider text-ifly-cyan md:text-base md:mt-6"
        >
          View All Locations
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
