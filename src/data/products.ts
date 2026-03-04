import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  details: string[];
  sizes: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Blazer Oversized Noir",
    price: 289,
    category: "Outerwear",
    description: "Blazer oversize de corte relajado en lana virgen. Silueta estructurada con hombros marcados y cierre de doble botonadura.",
    details: ["100% lana virgen", "Forro interior de viscosa", "Bolsillos de parche", "Hecho en Italia"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product1,
  },
  {
    id: "2",
    name: "Camiseta Essential Blanca",
    price: 59,
    category: "Tops",
    description: "Camiseta de algodón orgánico con corte relajado. Esencial para cualquier guardarropa contemporáneo.",
    details: ["100% algodón orgánico", "Corte relajado", "Cuello redondo reforzado", "Fabricada en Portugal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product2,
  },
  {
    id: "3",
    name: "Pantalón Wide Leg Navy",
    price: 189,
    category: "Bottoms",
    description: "Pantalón de pierna ancha con pliegues frontales. Confeccionado en lana mezclada con caída impecable.",
    details: ["70% lana, 30% poliéster", "Pliegues frontales", "Cintura alta", "Tintorería recomendada"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product3,
  },
  {
    id: "4",
    name: "Abrigo Camel Clásico",
    price: 459,
    category: "Outerwear",
    description: "Abrigo largo de lana en tono camel. Líneas limpias y elegantes que trascienden temporadas.",
    details: ["80% lana, 20% cashmere", "Largo midi", "Cierre con botones ocultos", "Hecho en Italia"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product4,
  },
  {
    id: "5",
    name: "Zapatos Plataforma Negros",
    price: 225,
    category: "Calzado",
    description: "Zapatos de cuero con suela de plataforma. Acabado pulido con costuras contrastantes.",
    details: ["Cuero vacuno pulido", "Suela de goma", "Plantilla acolchada", "Fabricados en España"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    image: product5,
  },
  {
    id: "6",
    name: "Camisa Lino Sage",
    price: 129,
    category: "Tops",
    description: "Camisa de lino en tono sage green con corte holgado. Perfecta para la transición entre estaciones.",
    details: ["100% lino europeo", "Corte oversize", "Botones de nácar", "Lavable a máquina"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product6,
  },
  {
    id: "7",
    name: "Sweater Chunky Cream",
    price: 179,
    category: "Knitwear",
    description: "Suéter de punto grueso en tono crema. Textura cálida y acogedora con silueta voluminosa.",
    details: ["60% lana merino, 40% alpaca", "Punto acanalado", "Cuello mock", "Limpieza en seco"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product7,
  },
  {
    id: "8",
    name: "Chaqueta Denim Charcoal",
    price: 199,
    category: "Outerwear",
    description: "Chaqueta de denim lavado en tono charcoal. Corte oversized con acabado desgastado artesanal.",
    details: ["100% algodón denim", "Lavado enzimático", "Botones metálicos", "Fabricada en Japón"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product8,
  },
];
