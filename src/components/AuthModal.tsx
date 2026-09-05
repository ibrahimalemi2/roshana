import React, { useState } from 'react';
import { X, Mail, Lock, User, Building, ShieldCheck, ArrowRight, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';
import { RoshnaLogo } from './RoshnaLogo';
import { RoshnaEmblem } from './RoshnaEmblem';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; role: string; email: string }) => void;
}

type AuthMode = 'signin' | 'register' | 'vip';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [firmName, setFirmName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccessMsg, setAuthSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const userName = fullName.trim() || (mode === 'vip' ? 'Architect VIP' : email.split('@')[0] || 'Client');
      const role = mode === 'register' ? 'Trade Specifier' : mode === 'vip' ? 'VIP Atelier Partner' : 'Client';
      
      setAuthSuccessMsg(`Welcome to Roshna Volt, ${userName}`);
      
      setTimeout(() => {
        onLoginSuccess({
          name: userName,
          role,
          email: email || 'vip@roshna-volt.com'
        });
        setAuthSuccessMsg(null);
        onClose();
      }, 1000);
    }, 600);
  };

  const handleQuickDemoLogin = (demoRole: 'architect' | 'specifier') => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const user = demoRole === 'architect' 
        ? { name: 'Julian Vance, AIA', role: 'Principal Architect', email: 'vance@atelier-arch.com' }
        : { name: 'Elena Rostova', role: 'Lead Interior Specifier', email: 'elena@lux-interiors.com' };

      setAuthSuccessMsg(`Logged in as ${user.name}`);
      setTimeout(() => {
        onLoginSuccess(user);
        setAuthSuccessMsg(null);
        onClose();
      }, 800);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A1128]/80 backdrop-blur-md animate-fadeIn select-none">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#0E1838] rounded-3xl shadow-2xl border border-[#E2E8F0] dark:border-[#1E293B] overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        {/* Top Decorative Metallic Gold & Deep Navy Header */}
        <div className="bg-[#0A1128] p-8 text-white relative overflow-hidden border-b border-[#D4AF37]/30">
          {/* Radial gold glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close authentication dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Brand header content */}
          <div className="flex items-center gap-3.5 mb-4">
            <RoshnaEmblem className="w-11 h-11" animate={true} />
            <div>
              <div className="w-36">
                <RoshnaLogo variant="monochrome-white" className="w-full h-auto" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mt-0.5">
                Switch To Quality • روشنا ولت
              </p>
            </div>
          </div>

          <h2 id="auth-modal-title" className="text-xl sm:text-2xl font-serif-heading font-semibold text-white tracking-wide">
            {mode === 'signin' && 'Architectural Atelier Access'}
            {mode === 'register' && 'Trade & Specifier Registration'}
            {mode === 'vip' && 'Exclusive Showroom Pass'}
          </h2>
          <p className="text-xs text-slate-300 font-sans-body mt-1">
            {mode === 'signin' && 'Sign in to access CAD drawings, wholesale project quotes, and bespoke finishes.'}
            {mode === 'register' && 'Register your firm for direct manufacturer pricing and white-glove engineering support.'}
            {mode === 'vip' && 'Instant complimentary access for interior designers, developers, and architects.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0A1128]">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`flex-1 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all border-b-2 text-center cursor-pointer ${
              mode === 'signin'
                ? 'border-[#D4AF37] text-[#0A1128] dark:text-[#D4AF37] font-bold bg-white dark:bg-[#0E1838]'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0A1128] dark:hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all border-b-2 text-center cursor-pointer ${
              mode === 'register'
                ? 'border-[#D4AF37] text-[#0A1128] dark:text-[#D4AF37] font-bold bg-white dark:bg-[#0E1838]'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0A1128] dark:hover:text-white'
            }`}
          >
            Trade Account
          </button>
          <button
            type="button"
            onClick={() => setMode('vip')}
            className={`flex-1 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all border-b-2 text-center flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'vip'
                ? 'border-[#D4AF37] text-[#0A1128] dark:text-[#D4AF37] font-bold bg-white dark:bg-[#0E1838]'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0A1128] dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>VIP Pass</span>
          </button>
        </div>

        {/* Main Form Body */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#0E1838]">
          {authSuccessMsg ? (
            <div className="py-8 flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#F8FAFC] dark:bg-[#0A1128] border border-[#D4AF37] text-[#0A1128] dark:text-white flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0A1128] dark:text-white">{authSuccessMsg}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Authenticating credentials with Roshna Volt Systems...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Conditional Fields for Register / Trade */}
              {mode === 'register' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1128] dark:text-white uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Maya Lin"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] bg-transparent focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#0A1128] dark:text-white placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1128] dark:text-white uppercase tracking-wider mb-1.5">
                      Studio / Firm Name
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={firmName}
                        onChange={(e) => setFirmName(e.target.value)}
                        placeholder="e.g. Lin Architects Milan"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] bg-transparent focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#0A1128] dark:text-white placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-[#0A1128] dark:text-white uppercase tracking-wider mb-1.5">
                  Professional Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={mode === 'vip' ? 'architect@studio.com (optional)' : 'specifier@architecture.com'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] bg-transparent focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#0A1128] dark:text-white placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password (for signin & register) */}
              {mode !== 'vip' && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-[#0A1128] dark:text-white uppercase tracking-wider">
                      Password
                    </label>
                    {mode === 'signin' && (
                      <button
                        type="button"
                        onClick={() => alert('Password reset instructions dispatched.')}
                        className="text-xs text-[#D4AF37] hover:underline font-medium cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] bg-transparent focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#0A1128] dark:text-white placeholder:text-slate-400 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0A1128] dark:hover:text-white cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* VIP Benefits Callout */}
              {mode === 'vip' && (
                <div className="bg-[#F8FAFC] dark:bg-[#0A1128] border border-[#D4AF37]/40 p-3.5 rounded-xl space-y-1 text-xs text-[#0A1128] dark:text-white">
                  <p className="font-semibold flex items-center gap-1.5 text-[#D4AF37]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Instant Atelier VIP Privileges:
                  </p>
                  <p>• Unrestricted access to 2D/3D BIM & Revit hardware models</p>
                  <p>• Direct manufacturer batch discounts (35% - 48% off catalog)</p>
                  <p>• Priority sample courier delivery with custom finishes</p>
                </div>
              )}

              {/* Submit Button (Signature Metallic Gold Gradient) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 btn-gold-gradient text-[#0A1128] font-bold cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>
                      {mode === 'signin' && 'Sign In to Portal'}
                      {mode === 'register' && 'Complete Trade Registration'}
                      {mode === 'vip' && 'Enter as VIP Specifier'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#0A1128]" />
                  </>
                )}
              </button>

              {/* 1-Click Demo Buttons for Fast Evaluation */}
              <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mb-2 font-medium">
                  Instant Preview / Fast Testing Roles:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('architect')}
                    className="py-2 px-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#0A1128] dark:text-white hover:bg-[#F8FAFC] dark:hover:bg-[#0A1128] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-[11px] font-medium transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Demo Architect</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('specifier')}
                    className="py-2 px-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#0A1128] dark:text-white hover:bg-[#F8FAFC] dark:hover:bg-[#0A1128] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-[11px] font-medium transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Demo Specifier</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-8 py-3.5 bg-[#F8FAFC] dark:bg-[#0A1128] border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>© {new Date().getFullYear()} Roshna Volt.</span>
          <span className="text-[#D4AF37] font-semibold">Switch To Quality</span>
        </div>
      </div>
    </div>
  );
};
