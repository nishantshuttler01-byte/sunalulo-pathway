import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Share2, X, CheckCircle2, Sparkles } from 'lucide-react';

export const MobilePWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    // Check if running in standalone native app mode
    const isStandaloneApp =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    setIsStandalone(isStandaloneApp);

    if (isStandaloneApp) {
      return;
    }

    // Check if device is iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(iosDevice);

    // Check if user dismissed banner previously in localStorage
    const dismissed = localStorage.getItem('sunaulo_pwa_banner_dismissed');
    if (!dismissed) {
      setShowBanner(true);
    }

    // Capture Android PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          setShowBanner(false);
        }
        setDeferredPrompt(null);
      });
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      alert('To install Sunaulo Pathways on your device, use your browser menu and tap "Add to Home Screen".');
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('sunaulo_pwa_banner_dismissed', 'true');
  };

  if (isStandalone || !showBanner) return null;

  return (
    <>
      {/* Mobile Top App Bar Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-4 py-2.5 shadow-md border-b border-blue-800/40 sticky top-0 z-50 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Smartphone className="w-4.5 h-4.5 text-white" />
          </div>
          <div className="truncate">
            <div className="font-bold text-white text-xs flex items-center gap-1.5 truncate">
              <span>Sunaulo Mobile App</span>
              <span className="bg-blue-600/80 text-blue-100 text-[9px] px-1.5 py-0.2 rounded-md font-semibold uppercase">
                iOS & Android
              </span>
            </div>
            <p className="text-[11px] text-slate-300 truncate">
              Install app for instant offline access & AI advisor
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInstallClick}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* iOS Safari Installation Guide Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-serif">
                  Install Sunaulo App on iPhone / iPad
                </h3>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Follow these 2 easy steps in Safari to add Sunaulo Pathways directly to your iPhone Home Screen like a native app:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <div className="text-xs text-slate-700">
                  Tap the <strong className="text-slate-900 flex items-center gap-1 inline-flex"><Share2 className="w-3.5 h-3.5 text-blue-600" /> Share button</strong> in your Safari browser navigation bar.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <div className="text-xs text-slate-700">
                  Scroll down and tap <strong className="text-slate-900">"Add to Home Screen"</strong> <span className="text-slate-500 font-mono text-[11px]">(➕ icon)</span>, then tap <strong>Add</strong>.
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Enjoy 1-tap instant access, offline guidance, and instant AI study advisor!</span>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Got It, Thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
