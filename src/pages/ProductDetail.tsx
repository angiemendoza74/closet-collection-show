import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-24 container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Producto no encontrado.</p>
      </div>
    );
  }

  const handleAdd = () => {
    if (!selectedSize) {
      toast.error("Selecciona una talla");
      return;
    }
    addItem(product, selectedSize);
    setAdded(true);
    toast.success("Añadido al carrito");
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-body tracking-wide"
        >
          <ArrowLeft size={16} /> Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card aspect-[3/4] overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground font-body mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-4">
              {product.name}
            </h1>
            <p className="font-body text-2xl mb-8">€{product.price}</p>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <p className="font-body text-xs tracking-widest uppercase mb-3">Talla</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-10 px-3 border text-sm font-body transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleAdd}
              className="w-full h-12 font-body text-sm tracking-widest uppercase rounded-none"
              size="lg"
            >
              {added ? (
                <span className="flex items-center gap-2"><Check size={16} /> Añadido</span>
              ) : (
                "Añadir al carrito"
              )}
            </Button>

            <div className="mt-12 border-t border-border pt-8">
              <p className="font-body text-xs tracking-widest uppercase mb-4">Detalles</p>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground">
                    — {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
