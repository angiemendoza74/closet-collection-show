import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const Header = () => {
  const { itemCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold tracking-wide">
          ATELIER
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Colección</Link>
        </nav>
        <Link to="/checkout" className="relative p-2 hover:text-muted-foreground transition-colors">
          <ShoppingBag size={20} />
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-foreground text-background text-[10px] flex items-center justify-center font-body font-medium"
            >
              {itemCount}
            </motion.span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
