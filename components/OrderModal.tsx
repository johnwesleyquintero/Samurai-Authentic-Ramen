import React, { useState, useEffect } from 'react';
import { MenuItem } from '../types';
import { X, Plus, Minus, Check, Sword, Flame } from '../icons';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

const EXTRAS = [
  { id: 'chashu', name: 'Extra Chashu', price: 4 },
  { id: 'egg', name: 'Ajitama Egg', price: 2 },
  { id: 'nori', name: 'Nori Sheets', price: 1 },
  { id: 'kaedama', name: 'Kaedama (Noodle Refill)', price: 3 },
  { id: 'spice', name: 'Spicy Bomb', price: 1 },
];

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [step, setStep] = useState<'order' | 'success'>('order');

  useEffect(() => {
    if (isOpen) {
      setStep('order');
      setQuantity(1);
      setSelectedExtras([]);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const basePrice = item.price;
  const extrasPrice = selectedExtras.reduce((total, id) => {
    const extra = EXTRAS.find(e => e.id === id);
    return total + (extra?.price || 0);
  }, 0);
  const totalPrice = (basePrice + extrasPrice) * quantity;

  const handleConfirm = () => {
    // In a real app, this would send data to a backend
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-navy-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Decorative Header Bar */}
        <div className="h-2 bg-gradient-to-r from-red-800 via-navy-800 to-red-800"></div>

        {step === 'order' ? (
          <>
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-white/10 flex justify-between items-start relative bg-navy-950/50">
               {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

              <div className="pr-8">
                <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest mb-1 block">Selected Bowl</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-none">{item.name}</h3>
                <span className="font-jp text-gray-500 text-base md:text-lg">{item.japaneseName}</span>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 md:p-6 scrollbar-hide">
              <div className="flex gap-4 mb-6 md:mb-8">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 md:w-24 md:h-24 object-cover border border-white/20 shadow-lg flex-shrink-0" 
                />
                <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-300 font-serif italic mb-2 leading-relaxed">{item.description}</p>
                    <div className="flex gap-2">
                        {item.spicyLevel > 0 && (
                            <span className="text-[10px] uppercase font-bold text-red-400 border border-red-900/50 bg-red-900/20 px-2 py-0.5 inline-flex items-center gap-1">
                                Spicy <Flame className="w-3 h-3" />
                            </span>
                        )}
                    </div>
                </div>
              </div>

              {/* Customization */}
              <div className="space-y-6">
                
                {/* Quantity */}
                <div className="flex items-center justify-between bg-navy-950 p-4 border border-white/5">
                    <span className="font-bold uppercase tracking-widest text-xs md:text-sm">Quantity</span>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white hover:text-navy-900 transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-xl font-serif font-bold w-6 text-center">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white hover:text-navy-900 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Extras */}
                <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4 border-b border-white/10 pb-2">Enhance Your Bowl</h4>
                    <div className="space-y-3">
                        {EXTRAS.map(extra => (
                            <label key={extra.id} className="flex items-center justify-between cursor-pointer group hover:bg-white/5 p-2 transition-colors rounded">
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border border-white/30 flex items-center justify-center transition-all ${selectedExtras.includes(extra.id) ? 'bg-white border-white' : 'bg-transparent'}`}>
                                        {selectedExtras.includes(extra.id) && <Check className="w-3.5 h-3.5 text-navy-900" />}
                                    </div>
                                    <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">{extra.name}</span>
                                </div>
                                <span className="font-mono text-gray-400 text-sm md:text-base">+${extra.price}</span>
                            </label>
                        ))}
                    </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 bg-navy-950 border-t border-white/10">
                <div className="flex justify-between items-end mb-4 md:mb-6">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-gray-400">Total</span>
                    <span className="text-2xl md:text-3xl font-serif font-bold text-white">${totalPrice}</span>
                </div>
                <button 
                    onClick={handleConfirm}
                    className="w-full py-3 md:py-4 bg-white text-navy-900 font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors clip-cut relative overflow-hidden group text-sm md:text-base"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Confirm Order <Sword className="w-4 h-4" />
                    </span>
                </button>
            </div>
          </>
        ) : (
          <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px] md:min-h-[500px]">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-900/20 border border-green-500/30 flex items-center justify-center mb-6 md:mb-8 animate-fade-in-scale">
                <Check className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
             </div>
             <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Order Received</h3>
             <p className="text-gray-400 font-jp text-lg md:text-xl mb-6">ご注文ありがとうございます</p>
             <p className="text-gray-300 max-w-xs leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
                Your order for <span className="text-white font-bold">{quantity}x {item.name}</span> has been transmitted to the kitchen.
                <br/><br/>
                Please prepare your table number.
             </p>
             <button 
                onClick={onClose}
                className="px-6 md:px-8 py-3 border border-white/30 hover:bg-white hover:text-navy-900 transition-colors uppercase tracking-widest text-[10px] md:text-xs"
             >
                Return to Menu
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;