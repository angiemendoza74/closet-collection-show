import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden bg-card aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-xs tracking-widest uppercase text-muted-foreground font-body">
            {product.category}
          </p>
          <h3 className="font-display text-lg font-medium">{product.name}</h3>
          <p className="font-body text-sm text-muted-foreground">
            €{product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
