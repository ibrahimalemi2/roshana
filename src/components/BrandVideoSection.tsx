import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Layers,
  Wrench,
  Box,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BrandVideoSection: React.FC = () => {
  const { isRtl } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section
      id="video-presentation"
      className="pt-2 sm:pt-4 pb-14 sm:pb-18 bg-[#F8FAFC] dark:bg-[#0A1428] border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 relative overflow-hidden select-none"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 dark:bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow Badge - Luxury Navy & Gold Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1428] text-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              {isRtl ? 'سری معماری D8 روشنا' : 'ROSHNA D8 ARCHITECTURAL SERIES'}
            </span>
          </div>

          {/* Main Title - Perfectly Balanced */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black uppercase text-[#0A1428] dark:text-white tracking-tight leading-tight">
            {isRtl ? (
              'درون بی‌نقص. فرمی خالص و ساده.'
            ) : (
              <>
                <span className="block sm:inline">EXQUISITE IN CORE. </span>
                <span className="block sm:inline">SIMPLE IN FORM.</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
            {isRtl
              ? 'ویدیوی رسمی معرفی و راهنمای نصب سری D8 روشنا ولت با ضخامت فوق باریک ۲.۵ میلی‌متری و مکانیزم فشاری نوآورانه بر روی قوطی‌های استاندارد ۸۶ میلی‌متری.'
              : 'Watch the official product presentation and installation guide for the Roshna Volt D8 Series with an ultra-thin 2.5mm profile and snap-on architectural assembly.'}
          </p>
        </div>

        {/* High-End Video Player Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Sleek architectural framing */}
          <div className="relative rounded-[22px] sm:rounded-[28px] p-1.5 sm:p-2.5 bg-white dark:bg-[#070D1D] shadow-[0_15px_40px_-10px_rgba(10,20,40,0.12)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] border border-slate-200/90 dark:border-[#D4AF37]/30">
            
            {/* Video Screen */}
            <div className="relative aspect-video w-full rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#050814] group shadow-inner">
              <video
                ref={videoRef}
                src="/videos/d8-series-presentation.mp4"
                controls={isPlaying && hasStarted}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Floating Top Bar Badge */}
              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1428]/90 backdrop-blur-md border border-[#D4AF37]/30 text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-200">
                  {isRtl ? 'معرفی سری D8 · کیفیت 1080p' : 'D8 Series · 1080p Ultra HD'}
                </span>
              </div>

              {/* Floating Top Right Controls (Mute / Fullscreen / Restart) */}
              {hasStarted && (
                <div className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-20 flex items-center gap-2">
                  <button
                    onClick={handleMuteToggle}
                    className="w-8 h-8 rounded-full bg-[#0A1428]/80 hover:bg-[#0A1428] backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/10 cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-[#D4AF37]" /> : <Volume2 className="w-4 h-4 text-white" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="w-8 h-8 rounded-full bg-[#0A1428]/80 hover:bg-[#0A1428] backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/10 cursor-pointer"
                    title="Restart Video"
                    aria-label="Restart video"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-white" />
                  </button>

                  <button
                    onClick={handleFullscreen}
                    className="w-8 h-8 rounded-full bg-[#0A1428]/80 hover:bg-[#0A1428] backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/10 cursor-pointer"
                    title="Fullscreen"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              )}

              {/* Custom Play Overlay (Shown when not playing) */}
              {!isPlaying && (
                <div
                  onClick={handlePlayToggle}
                  className="absolute inset-0 z-30 bg-[#0A1428]/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#0A1428]/35"
                >
                  {/* Glowing Pulse Play Button */}
                  <div className="relative flex items-center justify-center mb-4 sm:mb-5">
                    <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#D4AF37]/25 animate-ping" />
                    <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#FFF3D1] to-[#AA7C11] shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-[#0A1428] flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/50">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-[#D4AF37] translate-x-0.5 rtl:-translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Play Prompt Text */}
                  <div className="text-center px-4">
                    <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">
                      {isRtl ? 'مشاهده ویدیوی معرفی و نصب' : 'PLAY PRODUCT & INSTALLATION VIDEO'}
                    </span>
                    <span className="block text-[11px] text-[#D4AF37] font-medium tracking-wider mt-1">
                      {isRtl ? 'مدت زمان: ۰۱:۲۰ دقیقه · کلیک جهت پخش' : 'Duration: 1:20 min · Click to Play'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Callouts: 3 Key Technical Specifications Underneath Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-10 sm:mt-14 max-w-5xl mx-auto">
          {/* Feature Card 1: 2.5mm Ultra Thin */}
          <div className="p-6 rounded-[22px] bg-white dark:bg-[#0E1838] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-xl hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/60 transition-all duration-300 group text-left rtl:text-right">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#050814] border border-blue-200 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#050814] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                {isRtl ? '۲.۵ میلی‌متر' : '2.5mm Thin'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
              {isRtl ? 'ضخامت فوق‌باریک ۲.۵ میلی‌متر' : '2.5mm Ultra Thin Profile'}
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {isRtl
                ? 'فریم باریک و لبه‌های مهندسی‌شده که تقریباً هم‌سطح دیوار قرار گرفته و نمایی مینی‌مال و فوق‌العاده مدرن در فضاهای معماری خلق می‌کند.'
                : 'Ultra-low bezel profile engineered to sit virtually flush against interior walls for an uninterrupted, clean architectural line.'}
            </p>
          </div>

          {/* Feature Card 2: Snap-On Button Installation */}
          <div className="p-6 rounded-[22px] bg-white dark:bg-[#0E1838] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-xl hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/60 transition-all duration-300 group text-left rtl:text-right">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-[#050814] border border-amber-200 dark:border-amber-900/40 text-[#D4AF37] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#050814] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                {isRtl ? 'نصب فشاری' : 'Snap-On'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
              {isRtl ? 'نصب دکمه‌ای فشاری (Snap-On)' : 'Snap-On Button Installation'}
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {isRtl
                ? 'قاب جلویی بدون پیچ و ابزار با یک فشار ساده قفل می‌شود. باز و بستن سریع جهت سیم‌کشی، نقاشی ساختمان و تعویض رنگ بدون آسیب به مکانیزم.'
                : 'Tool-free faceplate snap locks firmly into place in seconds. Enables fast inspection, painter masking protection, and effortless cover replacement.'}
            </p>
          </div>

          {/* Feature Card 3: Standard 86mm Box Fit */}
          <div className="p-6 rounded-[22px] bg-white dark:bg-[#0E1838] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-xl hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/60 transition-all duration-300 group text-left rtl:text-right">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#050814] border border-blue-200 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#050814] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                {isRtl ? '۸۶ میلی‌متر' : '86mm Fit'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
              {isRtl ? 'سازگاری کامل با قوطی ۸۶ میلی‌متر' : 'Standard 86mm Box Fit'}
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {isRtl
                ? 'طراحی جهانی سازگار با تمامی قوطی‌های استاندارد ۸۶×۸۶ میلی‌متری بازار به همراه سوراخ‌های تنظیم تراز و شاسی فولادی تقویت‌شده.'
                : 'Universal fit engineered for all standard 86×86mm electrical wall boxes. Equipped with multi-point leveling slots for permanent flat alignment.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
