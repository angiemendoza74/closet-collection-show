import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Checkout = () => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    toast.success("¡Pedido realizado con éxito!");
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <ShoppingBag size={48} className="text-muted-foreground mb-6" />
          <h1 className="font-display text-3xl mb-3">Tu carrito está vacío</h1>
          <p className="font-body text-muted-foreground text-sm mb-8">
            Descubre nuestra colección y encuentra tu próxima pieza favorita.
          </p>
          <Link to="/">
            <Button variant="outline" className="font-body text-sm tracking-widest uppercase rounded-none h-11 px-8">
              Ver colección
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-body tracking-wide"
        >
          <ArrowLeft size={16} /> Volver
        </button>

        <h1 className="font-display text-4xl md:text-5xl font-light mb-12">Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Items */}
          <div className="lg:col-span-2 space-y-0 divide-y divide-border">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex gap-6 py-6"
                >
                  <Link to={`/product/${item.product.id}`} className="w-24 h-32 bg-card flex-shrink-0 overflow-hidden">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.product.id}`} className="font-display text-lg hover:underline">
                        {item.product.name}
                      </Link>
                      <p className="font-body text-xs text-muted-foreground mt-1">
                        Talla: {item.size}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-body text-sm">€{item.product.price * item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    className="text-muted-foreground hover:text-foreground transition-colors self-start pt-1"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="border border-border p-8">
              <h2 className="font-display text-2xl mb-6">Resumen</h2>

              <div className="space-y-3 font-body text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>€{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío</span>
                  <span>{total >= 200 ? "Gratis" : "€15"}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-medium text-base">
                  <span>Total</span>
                  <span>€{total >= 200 ? total : total + 15}</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="font-body text-xs tracking-widest uppercase block mb-2">Código promo</label>
                <div className="flex gap-2">
                  <Input className="rounded-none h-10 font-body text-sm" placeholder="Ingresa tu código" />
                  <Button variant="outline" className="rounded-none h-10 font-body text-xs tracking-widest uppercase px-4">
                    Aplicar
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full h-12 font-body text-sm tracking-widest uppercase rounded-none"
                size="lg"
              >
                Finalizar compra
              </Button>

              <p className="font-body text-xs text-muted-foreground mt-4 text-center">
                Envío gratis en pedidos superiores a €200
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
