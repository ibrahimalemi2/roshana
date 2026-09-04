import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Truck, Check } from 'lucide-react';
import { CartItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, selectedColor: string, newQty: number) => void;
  onRemoveItem: (productId: string, selectedColor: string) => void;
  onCheckout: () => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.348-1.665a11.838 11.838 0 005.65 1.439h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.483-8.413z" />
  </svg>
);

// Optional: Store's dedicated Afghanistan WhatsApp number (digits only, e.g. 93700123456).
// If left empty, WhatsApp opens with the pre-filled message so the customer can pick any contact.
export const AFGHANISTAN_STORE_WHATSAPP = '';

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const { t, isRtl } = useLanguage();
  const [isConnectingWhatsApp, setIsConnectingWhatsApp] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal > 300 || cart.length === 0;
  const deliveryCost = isFreeShipping ? 0 : 35;
  const total = subtotal + deliveryCost;

  // Generate clean, formatted WhatsApp order message
  const generateWhatsAppMessage = () => {
    if (isRtl) {
      let msg = `سلام و احترام، من می‌خواهم این سفارش را از وب‌سایت روشنا ولت ثبت کنم:\n\n`;
      msg += `📦 اقلام سفارش:\n`;
      cart.forEach((item, index) => {
        msg += `${index + 1}. ${item.product.name}\n`;
        msg += `   • رنگ/فینیش: ${item.selectedColor}\n`;
        msg += `   • تعداد: ${item.quantity} عدد\n`;
        msg += `   • قیمت واحد: ${item.product.price.toLocaleString()} افغانی\n`;
        msg += `   • مجموع: ${(item.product.price * item.quantity).toLocaleString()} افغانی\n\n`;
      });
      msg += `-------------------------\n`;
      msg += `جمع اقلام: ${subtotal.toLocaleString()} افغانی\n`;
      msg += `هزینه ارسال با پیک: ${deliveryCost === 0 ? 'رایگان' : `${deliveryCost.toLocaleString()} افغانی`}\n`;
      msg += `مبلغ قابل پرداخت: ${total.toLocaleString()} افغانی\n\n`;
      msg += `لطفاً جهت هماهنگی پرداخت (نقدی / حواله صرافی) و ارسال در افغانستان راهنمایی بفرمایید. با تشکر!`;
      return encodeURIComponent(msg);
    } else {
      let msg = `Hello Roshna Volt, I would like to place an order from your website:\n\n`;
      msg += `📦 Order Items:\n`;
      cart.forEach((item, index) => {
        msg += `${index + 1}. ${item.product.name}\n`;
        msg += `   • Color: ${item.selectedColor}\n`;
        msg += `   • Quantity: ${item.quantity}\n`;
        msg += `   • Unit Price: ${item.product.price.toLocaleString()} AFN\n`;
        msg += `   • Total: ${(item.product.price * item.quantity).toLocaleString()} AFN\n\n`;
      });
      msg += `-------------------------\n`;
      msg += `Subtotal: ${subtotal.toLocaleString()} AFN\n`;
      msg += `Courier Delivery: ${deliveryCost === 0 ? 'Complimentary' : `${deliveryCost.toLocaleString()} AFN`}\n`;
      msg += `Total Due: ${total.toLocaleString()} AFN\n\n`;
      msg += `Please guide me regarding payment (cash on delivery / hawala) and courier delivery in Afghanistan. Thank you!`;
      return encodeURIComponent(msg);
    }
  };

  const whatsappUrl = AFGHANISTAN_STORE_WHATSAPP
    ? `https://wa.me/${AFGHANISTAN_STORE_WHATSAPP}?text=${generateWhatsAppMessage()}`
    : `https://wa.me/?text=${generateWhatsAppMessage()}`;

  const handleWhatsAppCheckout = () => {
    setIsConnectingWhatsApp(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onCheckout();
      setIsConnectingWhatsApp(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn select-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div 
        dir={isRtl ? 'rtl' : 'ltr'}
        className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10"
      >
        <div className="w-screen max-w-md bg-[#F7F5F0] dark:bg-[#0B132B] shadow-2xl border-l rtl:border-l-0 rtl:border-r border-[#E5E1D8] dark:border-[#1D2B52] flex flex-col justify-between transition-colors">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E5E1D8] dark:border-[#1D2B52] flex items-center justify-between bg-[#FFFFFF] dark:bg-[#0F1B3D]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h3 className="font-serif-heading text-2xl font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                {t.cart.title}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0B132B] text-[#C5A059] font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-[#F7F5F0] dark:hover:bg-[#13224A] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5 text-left rtl:text-right">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16 text-[#1F2421]/70 dark:text-[#F7F5F0]/70">
                <div className="w-16 h-16 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#E5E1D8] dark:border-[#1D2B52] flex items-center justify-center text-[#C5A059]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-serif-heading text-2xl text-[#1F2421] dark:text-[#F7F5F0]">
                    {t.cart.emptyTitle}
                  </p>
                  <p className="text-xs font-sans-body text-neutral-500 dark:text-neutral-400 mt-1 max-w-xs">
                    {t.cart.emptySubtitle}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-3 rounded-full btn-gold-gradient text-xs uppercase font-bold tracking-wider cursor-pointer"
                >
                  {t.cart.exploreBtn}
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Indicator */}
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#E5E1D8] dark:border-[#1D2B52] text-xs flex items-center gap-2.5 text-[#1F2421] dark:text-[#F7F5F0]">
                  <Truck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>
                    {isFreeShipping ? (
                      <strong className="text-[#C5A059]">{t.cart.freeShippingNotice}</strong>
                    ) : (
                      `${t.cart.addMoreNoticePrefix}${(300 - subtotal).toLocaleString()}${t.cart.addMoreNoticeSuffix}`
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
                            className="text-neutral-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
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
                              className="p-1 px-2 text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] transition-colors cursor-pointer"
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
                              className="p-1 px-2 text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-serif-heading font-semibold text-sm text-[#1F2421] dark:text-[#F7F5F0]">
                            {(item.product.price * item.quantity).toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cart Footer with WhatsApp Order Button */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E5E1D8] dark:border-[#1D2B52] bg-[#FFFFFF] dark:bg-[#0F1B3D] space-y-4 text-left rtl:text-right">
              <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 font-sans-body">
                <div className="flex justify-between">
                  <span>{t.cart.subtotal}</span>
                  <span className="font-medium text-[#1F2421] dark:text-[#F7F5F0]">{subtotal.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.cart.delivery}</span>
                  <span className="font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                    {deliveryCost === 0 ? t.cart.complimentary : `${deliveryCost.toLocaleString()} ${isRtl ? 'افغانی' : 'AFN'}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E5E1D8] dark:border-[#1D2B52] text-sm font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                  <span>{t.cart.totalDue}</span>
                  <span className="font-serif-heading text-lg text-[#C5A059]">{total.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}</span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                onClick={handleWhatsAppCheckout}
                disabled={isConnectingWhatsApp}
                className="w-full py-4 px-6 rounded-full text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md cursor-pointer bg-[#25D366] hover:bg-[#20ba59] text-[#0B132B] hover:shadow-lg hover:shadow-[#25D366]/25 group"
              >
                {isConnectingWhatsApp ? (
                  <>
                    <Check className="w-4 h-4 text-[#0B132B]" />
                    <span>{t.cart.whatsappOrderSuccess}</span>
                  </>
                ) : (
                  <>
                    <WhatsAppIcon className="w-4.5 h-4.5 fill-[#0B132B] group-hover:scale-110 transition-transform" />
                    <span>{t.cart.whatsappOrderBtn} — {total.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}</span>
                  </>
                )}
              </button>

              {/* Afghanistan Payment & Delivery Note */}
              <div className="text-center pt-1">
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans-body leading-tight">
                  💬 {t.cart.dealNotice}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
