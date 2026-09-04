import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Truck, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, selectedColor: string, newQty: number) => void;
  onRemoveItem: (productId: string, selectedColor: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal > 300 || cart.length === 0;
  const deliveryCost = isFreeShipping ? 0 : 35;
  const total = subtotal + deliveryCost;

  const handleCheckoutClick = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onCheckout();
      setCheckoutComplete(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F5F0] dark:bg-[#0B132B] shadow-2xl border-l border-[#E5E1D8] dark:border-[#1D2B52] flex flex-col justify-between transition-colors">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E5E1D8] dark:border-[#1D2B52] flex items-center justify-between bg-[#FFFFFF] dark:bg-[#0F1B3D]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h3 className="font-serif-heading text-2xl font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                Your Shopping Bag
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0B132B] text-[#C5A059] font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-[#F7F5F0] dark:hover:bg-[#13224A] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16 text-[#1F2421]/70 dark:text-[#F7F5F0]/70">
                <div className="w-16 h-16 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#E5E1D8] dark:border-[#1D2B52] flex items-center justify-center text-[#C5A059]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-serif-heading text-2xl text-[#1F2421] dark:text-[#F7F5F0]">Your bag is currently empty</p>
                  <p className="text-xs font-sans-body text-neutral-500 dark:text-neutral-400 mt-1 max-w-xs">
                    Explore our curated switches, monolithic sockets, and complete architectural suites.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-3 rounded-full btn-gold-gradient text-xs uppercase font-bold tracking-wider"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <>
                {/* Free White-Glove Indicator */}
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#E5E1D8] dark:border-[#1D2B52] text-xs flex items-center gap-2.5 text-[#1F2421] dark:text-[#F7F5F0]">
                  <Truck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>
                    {isFreeShipping ? (
                      <strong className="text-[#C5A059]">Complimentary White-Glove Shipping unlocked</strong>
                    ) : (
                      `Add $${(300 - subtotal).toLocaleString()} more for complimentary shipping`
                    )}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}`}
                      className="p-4 rounded-2xl bg-white dark:bg-[#0F1B3D] border border-[#E5E1D8] dark:border-[#1D2B52] shadow-xs flex gap-4 items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 rounded-xl object-cover bg-[#F7F5F0] dark:bg-[#060B18] shrink-0 border border-[#E5E1D8] dark:border-[#1D2B52]"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif-heading text-base font-medium text-[#1F2421] dark:text-[#F7F5F0] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                            className="text-neutral-400 hover:text-red-600 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-xs text-[#C5A059] font-medium mt-0.5">
                          {item.selectedColor}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#E5E1D8] dark:border-[#1D2B52] rounded-full bg-[#F7F5F0] dark:bg-[#0B132B]">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.selectedColor, item.quantity - 1)
                              }
                              className="p-1 px-2 text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs px-2 font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.selectedColor, item.quantity + 1)
                              }
                              className="p-1 px-2 text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-serif-heading font-semibold text-sm text-[#1F2421] dark:text-[#F7F5F0]">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E5E1D8] dark:border-[#1D2B52] bg-[#FFFFFF] dark:bg-[#0F1B3D] space-y-4">
              <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 font-sans-body">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1F2421] dark:text-[#F7F5F0]">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>White-Glove Insured Delivery</span>
                  <span className="font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                    {deliveryCost === 0 ? 'Complimentary' : `$${deliveryCost}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E5E1D8] dark:border-[#1D2B52] text-sm font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                  <span>Total Due</span>
                  <span className="font-serif-heading text-lg text-[#C5A059]">${total.toLocaleString()} USD</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutClick}
                disabled={checkoutComplete}
                className={`w-full py-4 px-6 rounded-full text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
                  checkoutComplete
                    ? 'bg-[#0B132B] text-[#C5A059] border border-[#C5A059]'
                    : 'btn-gold-gradient'
                }`}
              >
                {checkoutComplete ? (
                  <>
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Order Reserved Successfully</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Insured Checkout</span>
                    <ArrowRight className="w-4 h-4 text-[#0B132B]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-500 font-sans-body">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
