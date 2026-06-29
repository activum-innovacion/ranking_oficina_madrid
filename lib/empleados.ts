// Empleados de las oficinas de Madrid de Activum.
// El "slug" es el identificador estable usado en el almacenamiento de votos.
export type Empleado = {
  slug: string;
  nombre: string;
};

export const EMPLEADOS: Empleado[] = [
  { slug: "irene", nombre: "Irene" },
  { slug: "celia", nombre: "Celia" },
  { slug: "maria", nombre: "Maria" },
  { slug: "estefania", nombre: "Estefania" },
  { slug: "ramon", nombre: "Ramon" },
  { slug: "jose", nombre: "Jose" },
  { slug: "carlos", nombre: "Carlos" },
  { slug: "tania", nombre: "Tania" },
  { slug: "ana", nombre: "Ana" },
  { slug: "cristina", nombre: "Cristina" },
  { slug: "flavia", nombre: "Flavia" },
  { slug: "carolina", nombre: "Carolina" },
  { slug: "laura", nombre: "Laura" },
  { slug: "fernando", nombre: "Fernando" },
  { slug: "beatriz", nombre: "BEATRIZ" },
];

export const SLUGS = new Set(EMPLEADOS.map((e) => e.slug));

export function nombrePorSlug(slug: string): string | undefined {
  return EMPLEADOS.find((e) => e.slug === slug)?.nombre;
}
