import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const { isRtl, t } = useLanguage();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? products
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase()) ||
        p.collection.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-12 overflow-y-auto bg-black/60 backdrop-blur-xs animate-fadeIn select-none">
      {/* Backdrop close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div 
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative bg-white dark:bg-[#0E1838] w-full max-w-2xl rounded-[28px] overflow-hidden shadow-2xl border border-[#E2E8F0] dark:border-[#1E293B] z-10 p-6 sm:p-8 space-y-6 transition-colors text-left rtl:text-right"
      >
        {/* Search input header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] dark:border-[#1E293B]">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isRtl ? "جستجوی سویچ، ساکت یا مواد ساخت..." : "Search switches, sockets, materials..."}
              autoFocus
              className="w-full bg-transparent text-sm sm:text-base text-[#0A1128] dark:text-white placeholder-slate-400 focus:outline-none"
            />
          </div>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-[#0A1128] dark:hover:text-white mr-3 rtl:mr-0 rtl:ml-3 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F8FAFC] dark:hover:bg-[#14224D] text-slate-400 hover:text-[#0A1128] dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 rtl:pr-0 rtl:pl-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 font-sans-body">
              <p className="text-sm">{isRtl ? "هیچ محصولی با این کلمه یافت نشد." : "No architectural hardware matches your search."}</p>
            </div>
          ) : (
            filtered.map((item) => {
              const localizedItem = t.showcase.products?.find((p) => p.id === item.id);
              const itemName = localizedItem?.name || item.name;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#F8FAFC] dark:hover:bg-[#0A1128] transition-all cursor-pointer border border-transparent hover:border-[#D4AF37]/40"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={itemName}
                      className="w-16 h-16 rounded-xl object-cover bg-[#F8FAFC] dark:bg-[#050814] border border-[#E2E8F0] dark:border-[#1E293B]"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                        {item.category.toLowerCase().includes('switch')
                          ? (isRtl ? 'سویچ' : 'Switch')
                          : (isRtl ? 'ساکت برق' : 'Power Socket')}
                      </span>
                      <h4 className="font-serif-heading text-lg font-medium text-[#0A1128] dark:text-white group-hover:text-[#D4AF37] transition-colors">
                        {itemName}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.material}</p>
                    </div>
                  </div>

                  <div className="text-right rtl:text-left flex items-center gap-3">
                    <span className="font-serif-heading text-base font-semibold text-[#0A1128] dark:text-white">
                      {item.price === 90.01 ? '90.01' : item.price.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F8FAFC] dark:bg-[#0A1128] group-hover:bg-[#0A1128] dark:group-hover:bg-[#D4AF37] group-hover:text-[#D4AF37] dark:group-hover:text-[#0A1128] text-[#0A1128] dark:text-white flex items-center justify-center transition-colors border border-[#E2E8F0] dark:border-[#1E293B]">
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
