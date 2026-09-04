import React, { useState } from 'react';
import { Search, X, Star, ArrowRight, Eye } from 'lucide-react';
import { Product } from '../types';

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
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

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

      <div className="relative bg-[#FFFFFF] dark:bg-[#0F1B3D] w-full max-w-2xl rounded-[28px] overflow-hidden shadow-2xl border border-[#E5E1D8] dark:border-[#1D2B52] z-10 p-6 sm:p-8 space-y-6 transition-colors">
        
        {/* Search input header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] dark:border-[#1D2B52]">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#C5A059]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by switch, socket, finish, or collection..."
              className="w-full bg-transparent text-[#1F2421] dark:text-[#F7F5F0] font-serif-heading text-xl placeholder-neutral-400 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F7F5F0] dark:hover:bg-[#13224A] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-neutral-400 font-sans-body">Popular:</span>
          {['Switches', 'Sockets', 'Trio Suite', 'Modular', 'Dual-Gang', 'Fluted'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3.5 py-1 rounded-full bg-[#F7F5F0] dark:bg-[#0B132B] hover:bg-[#C5A059]/15 text-[#1F2421] dark:text-[#F7F5F0] border border-[#E5E1D8] dark:border-[#1D2B52] transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 text-sm font-sans-body">
              No pieces match "{query}". Try searching for switch, socket, modular, or suite.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="group cursor-pointer p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F1B3D] hover:bg-[#F7F5F0] dark:hover:bg-[#13224A] border border-[#E5E1D8] dark:border-[#1D2B52] hover:border-[#C5A059] dark:hover:border-[#C5A059] flex items-center justify-between transition-all duration-200 shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-[#F7F5F0] dark:bg-[#060B18] border border-[#E5E1D8] dark:border-[#1D2B52]"
                  />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                      {item.collection}
                    </span>
                    <h4 className="font-serif-heading text-lg font-medium text-[#1F2421] dark:text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500 line-clamp-1">{item.material}</p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-3">
                  <span className="font-serif-heading text-base font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                    ${item.price.toLocaleString()}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F7F5F0] dark:bg-[#0B132B] group-hover:bg-[#0B132B] dark:group-hover:bg-[#C5A059] group-hover:text-[#C5A059] dark:group-hover:text-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0] flex items-center justify-center transition-colors border border-[#E5E1D8] dark:border-[#1D2B52]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
