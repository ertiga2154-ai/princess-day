<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Happy Princess Day, My Sweetheart! 👑</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- QRious Library for Offline QR Code Generation -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    :root {
      --bg-gradient: linear-gradient(135deg, #fce4ec 0%, #f3e5f5 45%, #fff8e1 100%);
      --card-bg: #fffdf9;
      --gold-primary: #d4af37;
      --gold-light: #e6c88a;
      --royal-magenta: #a31d6d;
      --royal-pink: #e94e89;
      --text-body: #6d4c5d;
    }

    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

    body {
      margin: 0; padding: 0; min-height: 100dvh;
      font-family: 'Quicksand', sans-serif;
      background: var(--bg-gradient); color: var(--text-body);
      overflow-x: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center;
    }

    .royal-outer-frame {
      position: fixed; inset: 10px; border: 1.5px solid rgba(212, 175, 55, 0.55);
      border-radius: 26px; pointer-events: none; z-index: 40;
      box-shadow: inset 0 0 24px rgba(255, 215, 130, 0.25);
    }
    @media (min-width: 640px) { .royal-outer-frame { inset: 16px; border-radius: 32px; } }

    .font-royal { font-family: 'Playfair Display', serif; }
    .font-script { font-family: 'Dancing Script', cursive; }

    .royal-gradient-text {
      background: linear-gradient(110deg, #8e155b 0%, #d83a7c 52%, #e09a56 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }

    .royal-card {
      background: linear-gradient(180deg, #ffffff 0%, #fffcf7 100%);
      border-radius: 28px; border: 1px solid rgba(230, 200, 138, 0.45);
      box-shadow: 0 18px 40px -12px rgba(173, 73, 122, 0.14), 0 4px 14px rgba(212, 175, 55, 0.08);
      position: relative;
    }

    .btn-pill-next {
      background: linear-gradient(135deg, #ffd1e3 0%, #ffb7d5 100%);
      color: #9c1b63; border: 1.5px solid rgba(233, 78, 137, 0.28);
      box-shadow: 0 8px 20px -4px rgba(233, 78, 137, 0.28);
      transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .btn-pill-next:hover { transform: translateY(-2px) scale(1.03); }

    .btn-pill-back {
      background: linear-gradient(135deg, #f3e8ff 0%, #ead6ff 100%);
      color: #8a246b; border: 1.5px solid rgba(186, 138, 224, 0.25);
      box-shadow: 0 6px 16px -4px rgba(155, 105, 195, 0.2);
    }

    .btn-palace {
      background: linear-gradient(135deg, #ffd6e7 0%, #ffbdd8 100%);
      color: #9b1960; border: 1.5px solid #f7a6c8;
      box-shadow: 0 10px 26px -4px rgba(233, 78, 137, 0.32), 0 0 0 4px rgba(255, 214, 231, 0.45);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .step-section {
      display: none; opacity: 0; transform: translateY(14px) scale(0.985);
      transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .step-section.active { display: flex; opacity: 1; transform: translateY(0) scale(1); }

    .kawaii-float { animation: gentleBob 3.6s ease-in-out infinite; }
    @keyframes gentleBob { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }

    .crown-slot-pulse {
      border: 2.5px dashed #d4af37; background: rgba(255, 248, 225, 0.55);
      animation: pulseSlot 1.8s infinite ease-in-out; cursor: pointer;
    }
    @keyframes pulseSlot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.45); transform: scale(1); }
      50% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); transform: scale(1.03); }
    }

    @keyframes crownDropIn {
      0% { transform: translateY(-65px) scale(1.5) rotate(-18deg); opacity: 0; }
      60% { transform: translateY(6px) scale(0.95) rotate(6deg); opacity: 1; }
      100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
    }
    .crown-dropped { animation: crownDropIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

    .burst-item {
      position: fixed; pointer-events: none; z-index: 60; font-size: 1.4rem;
      animation: burstFly 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes burstFly {
      0% { transform: translate(0, 0) scale(0.5) rotate(0deg); opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(1.2) rotate(var(--rot)); opacity: 0; }
    }

    .gold-divider {
      height: 3px; border-radius: 999px;
      background: linear-gradient(90deg, rgba(212,175,55,0.2) 0%, #d4af37 50%, rgba(212,175,55,0.2) 100%);
    }

    @keyframes giftWiggle {
      0%, 100% { transform: rotate(0deg) scale(1); }
      20% { transform: rotate(-6deg) scale(1.05); }
      40% { transform: rotate(6deg) scale(1.05); }
      60% { transform: rotate(-4deg) scale(1.02); }
      80% { transform: rotate(4deg) scale(1.02); }
    }
    .gift-wiggle { animation: giftWiggle 2s ease-in-out infinite; }

    @keyframes sealPulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.55); }
      50% { transform: scale(1.06); box-shadow: 0 0 0 12px rgba(212, 175, 55, 0); }
    }
    .wax-seal-btn { animation: sealPulse 2s infinite ease-in-out; }

    .wish-card { perspective: 800px; }
    .wish-card-inner {
      transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-style: preserve-3d; position: relative;
    }
    .wish-card.flipped .wish-card-inner { transform: rotateY(180deg); }
    .wish-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .wish-back { transform: rotateY(180deg); }

    #royal-toast { transition: opacity 0.3s ease, transform 0.3s ease; }
  </style>
</head>
<body class="selection:bg-pink-200 selection:text-pink-900">

  <div class="royal-outer-frame" aria-hidden="true"></div>

  <!-- Toast Notification -->
  <div id="royal-toast" class="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#9b1b62] text-white text-xs sm:text-sm font-bold shadow-lg opacity-0 pointer-events-none translate-y-4">
    Copied to clipboard! ✨
  </div>

  <!-- Top Utility Bar -->
  <header class="fixed top-3.5 sm:top-5 inset-x-0 z-50 px-5 sm:px-8 flex items-center justify-between max-w-[520px] mx-auto pointer-events-none">
    <div id="step-progress-bar" class="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/70 shadow-2xs"></div>

    <div class="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
      <!-- Music Button (With text so user knows to tap) -->
      <button id="sound-toggle-btn" type="button" title="Toggle Music" class="px-3 h-9 rounded-full bg-white/90 backdrop-blur-md border border-amber-300 shadow-2xs flex items-center gap-1.5 text-amber-800 font-bold text-xs hover:bg-white transition cursor-pointer">
        <span id="sound-icon">🎵</span>
        <span id="sound-text">Play Music</span>
      </button>

      <button id="qr-open-btn" type="button" title="QR Code" class="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-2xs flex items-center justify-center text-[#a31d6d] hover:bg-white transition cursor-pointer">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
      </button>

      <button id="customize-open-btn" type="button" title="Personalize" class="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-pink-300/70 shadow-2xs flex items-center justify-center text-pink-700 hover:bg-white transition cursor-pointer">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      </button>
    </div>
  </header>

  <!-- Main Container (7 Steps) -->
  <main id="main-touch-area" class="relative z-10 w-full max-w-[440px] px-5 pt-16 pb-8 sm:pt-20 sm:pb-10 flex flex-col items-center justify-center min-h-[100dvh]">

    <!-- STEP 1: WELCOME -->
    <section id="step-1" class="step-section active flex-col items-center text-center w-full">
      <div class="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-amber-200/70 shadow-2xs">
        <span class="uppercase tracking-[0.22em] text-xs font-bold text-[#a31d6d] data-date-upper">NOVEMBER 18</span>
      </div>
      <h1 class="font-royal italic font-extrabold text-[2.85rem] sm:text-[3.3rem] leading-[1.06] royal-gradient-text">Happy<br/>Princess Day,</h1>
      <h2 class="font-royal font-bold text-[1.6rem] sm:text-[1.85rem] text-[#9b1b62] mt-2 flex items-center justify-center gap-1.5 flex-wrap">
        <span>My <span class="data-recipient">Sweetheart</span>!</span> 👑💕
      </h2>
      <p class="mt-4 text-[0.95rem] text-[#6d4c5d] font-medium px-2">
        Today the whole kingdom celebrates you. I made this little royal world, just for you, to wrap your special day in sparkles, flowers, and all my love. 💗
      </p>
      <div class="my-2 text-amber-500 text-xl animate-pulse">✦</div>

      <!-- Kawaii Hello Kitty -->
      <div class="kawaii-float my-1 relative w-56 h-56 flex items-center justify-center">
        <svg viewBox="0 0 260 250" class="w-full h-full drop-shadow-md overflow-visible">
          <defs>
            <pattern id="plaidBow" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
              <rect width="12" height="12" fill="#e5253b"/>
              <rect width="6" height="12" fill="#ff7588" fill-opacity="0.55"/>
              <rect width="12" height="6" fill="#b81427" fill-opacity="0.45"/>
            </pattern>
            <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ff8fab" stop-opacity="0.65"/><stop offset="100%" stop-color="#ff8fab" stop-opacity="0"/></radialGradient>
          </defs>
          <ellipse cx="110" cy="222" rx="18" ry="10" fill="#ffffff" stroke="#e4d2dc" stroke-width="2"/>
          <ellipse cx="152" cy="222" rx="18" ry="10" fill="#ffffff" stroke="#e4d2dc" stroke-width="2"/>
          <path d="M98 156 L164 156 L178 212 C154 221, 108 221, 86 212 Z" fill="#1d6fd1" stroke="#14519c" stroke-width="2"/>
          <path d="M74 88 L64 52 C63 47, 69 44, 74 47 L102 64 C118 59, 144 59, 160 64 L188 47 C193 44, 199 47, 198 52 L188 88 C202 104, 203 134, 185 151 C166 166, 96 166, 77 151 C59 134, 60 104, 74 88 Z" fill="#ffffff" stroke="#dfd0d8" stroke-width="2.2" stroke-linejoin="round"/>
          <path d="M76 80 L70 57 L92 70 Z" fill="#ffccd5"/><path d="M186 80 L192 57 L170 70 Z" fill="#ffccd5"/>
          <ellipse cx="92" cy="133" rx="14" ry="8" fill="url(#blushGrad)"/><ellipse cx="170" cy="133" rx="14" ry="8" fill="url(#blushGrad)"/>
          <ellipse cx="101" cy="121" rx="5.5" ry="7.2" fill="#3a232b"/><circle cx="99.5" cy="118.5" r="1.8" fill="#ffffff"/>
          <path d="M153 122 C157 115, 166 115, 170 122" stroke="#3a232b" stroke-width="3.4" stroke-linecap="round" fill="none"/>
          <ellipse cx="131" cy="130" rx="6" ry="4.2" fill="#ffc107" stroke="#d99b00" stroke-width="1.2"/>
          <g transform="translate(174, 72) rotate(24)"><path d="M-4 -4 C-22 -18, -32 8, -14 14 Z" fill="url(#plaidBow)" stroke="#a31224" stroke-width="1.8"/><path d="M4 -4 C22 -18, 32 8, 14 14 Z" fill="url(#plaidBow)" stroke="#a31224" stroke-width="1.8"/><rect x="-7" y="-7" width="14" height="15" rx="6" fill="url(#plaidBow)" stroke="#a31224" stroke-width="1.8"/></g>
          <g transform="translate(52, 140)"><path d="M12 22 L48 8 L88 24 L68 78 L34 78 Z" fill="#ffc2d4" stroke="#f48fb1" stroke-width="1.8"/><circle cx="34" cy="24" r="11" fill="#d90429"/><circle cx="52" cy="20" r="12" fill="#ef233c"/><circle cx="68" cy="26" r="11" fill="#d90429"/></g>
          <ellipse cx="86" cy="182" rx="12" ry="9" fill="#ffffff" stroke="#dfd0d8" stroke-width="2"/><ellipse cx="144" cy="184" rx="13" ry="9.5" fill="#ffffff" stroke="#dfd0d8" stroke-width="2"/>
        </svg>
      </div>

      <button type="button" onclick="goToStep(2)" class="btn-palace mt-3 px-9 py-3.5 rounded-full font-bold text-base inline-flex items-center gap-2 cursor-pointer">
        <span>Enter the Palace</span><span>→</span>
      </button>
    </section>

    <!-- STEP 2: GIFT UNWRAPPING -->
    <section id="step-2" class="step-section flex-col items-center w-full">
      <div class="royal-card w-full p-6 sm:p-8 flex flex-col items-center text-center min-h-[430px] justify-center">
        <p class="uppercase tracking-[0.24em] text-xs font-bold text-[#c9961a]">A GIFT FOR YOU ✦</p>
        <h2 class="font-royal italic font-extrabold text-[2.05rem] sm:text-[2.35rem] royal-gradient-text mt-2">
          Gifts for My<br/>Princess 👑
        </h2>

        <!-- State A: 3D Animated Gift Box -->
        <div id="gift-wrapped-state" class="my-6 flex flex-col items-center">
          <button type="button" onclick="unwrapRoyalGift(event)" class="gift-wiggle group relative w-44 h-44 rounded-3xl bg-gradient-to-b from-[#fff5f9] to-[#ffe4ef] border-2 border-dashed border-[#e6c88a] flex flex-col items-center justify-center shadow-md cursor-pointer focus:outline-none">
            <svg viewBox="0 0 140 140" class="w-28 h-28 drop-shadow-sm">
              <rect x="28" y="58" width="84" height="62" rx="10" fill="#ff80ab" stroke="#c2185b" stroke-width="2.5"/>
              <rect x="61" y="58" width="18" height="62" fill="#ffd54f" stroke="#b38218" stroke-width="1.8"/>
              <rect x="22" y="42" width="96" height="20" rx="6" fill="#ff4081" stroke="#ad1457" stroke-width="2.5"/>
              <rect x="61" y="42" width="18" height="20" fill="#ffca28" stroke="#b38218" stroke-width="1.8"/>
              <path d="M70 42 C46 18, 28 34, 58 42 Z" fill="#ffd54f" stroke="#b38218" stroke-width="2"/>
              <path d="M70 42 C94 18, 112 34, 82 42 Z" fill="#ffd54f" stroke="#b38218" stroke-width="2"/>
              <circle cx="70" cy="41" r="7" fill="#ffca28" stroke="#b38218" stroke-width="2"/>
            </svg>
            <span class="mt-2 px-3.5 py-1 rounded-full bg-white/90 text-[#a31d6d] text-xs font-bold shadow-2xs group-hover:bg-pink-600 group-hover:text-white transition">
              Tap to Unwrap 🎁
            </span>
          </button>
          <p class="mt-3 text-xs text-[#8d677a] font-medium">A sweet royal bundle is waiting inside...</p>
        </div>

        <!-- State B: Unwrapped Treats Kitty -->
        <div id="gift-unwrapped-state" class="hidden flex-col items-center w-full animate-[fadeIn_0.5s_ease]">
          <div class="kawaii-float my-2 w-52 h-52 relative flex items-center justify-center">
            <svg viewBox="0 0 260 250" class="w-full h-full drop-shadow-sm overflow-visible">
              <ellipse cx="114" cy="222" rx="18" ry="10" fill="#ffffff" stroke="#e4d2dc" stroke-width="2"/>
              <path d="M98 156 L162 156 L176 208 C152 218, 110 218, 90 208 Z" fill="#1d6fd1" stroke="#14519c" stroke-width="2"/>
              <path d="M74 88 L64 52 C63 47, 69 44, 74 47 L102 64 C118 59, 144 59, 160 64 L188 47 C193 44, 199 47, 198 52 L188 88 C202 104, 203 134, 185 151 C166 166, 96 166, 77 151 C59 134, 60 104, 74 88 Z" fill="#ffffff" stroke="#dfd0d8" stroke-width="2.2" stroke-linejoin="round"/>
              <ellipse cx="101" cy="119" rx="5.5" ry="7" fill="#3a232b"/><circle cx="99.5" cy="116.5" r="1.8" fill="#ffffff"/>
              <path d="M153 120 C157 113, 166 113, 170 120" stroke="#3a232b" stroke-width="3.4" stroke-linecap="round" fill="none"/>
              <ellipse cx="131" cy="127" rx="5.8" ry="4" fill="#ffc107" stroke="#d99b00" stroke-width="1.2"/>
              <g transform="translate(174, 72) rotate(24)"><path d="M-4 -4 C-22 -18, -32 8, -14 14 Z" fill="url(#plaidBow)" stroke="#a31224" stroke-width="1.8"/><path d="M4 -4 C22 -18, 32 8, 14 14 Z" fill="url(#plaidBow)" stroke="#a31224" stroke-width="1.8"/><rect x="-7" y="-7" width="14" height="15" rx="6" fill="url(#plaidBow)" stroke="#a31224" stroke-width="1.8"/></g>
              <g transform="translate(68, 128)">
                <rect x="4" y="4" width="38" height="28" rx="4" fill="#5e239d" stroke="#3c116b" stroke-width="1.5"/><text x="23" y="21" text-anchor="middle" fill="#ffd54f" font-size="7" font-weight="bold">Chocolate</text>
                <rect x="46" y="28" width="36" height="32" rx="5" fill="#e53935" stroke="#b71c1c" stroke-width="1.5"/><text x="64" y="47" text-anchor="middle" fill="#ffffff" font-size="7" font-weight="bold">Chips</text>
              </g>
              <ellipse cx="88" cy="186" rx="12" ry="9" fill="#ffffff" stroke="#dfd0d8" stroke-width="2"/><ellipse cx="150" cy="186" rx="13" ry="9.5" fill="#ffffff" stroke="#dfd0d8" stroke-width="2"/>
            </svg>
          </div>
          <div class="gold-divider w-36 my-2"></div>
          <p class="text-[0.94rem] leading-[1.66] text-[#6d4c5d] font-medium px-1">
            Every gift is wrapped in a little bit of my heart, because you deserve every sweet thing in the world, my <span class="data-petname">love</span>. 💗
          </p>
          <p class="font-script text-[1.45rem] text-[#b82574] mt-2">with all my love, your <span class="data-sender">Prince</span></p>
        </div>
      </div>

      <div class="w-full flex items-center justify-between mt-6 px-1">
        <button type="button" onclick="goToStep(1)" class="btn-pill-back px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>←</span><span>Back</span></button>
        <button type="button" onclick="goToStep(3)" class="btn-pill-next px-7 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>Next</span><span>→</span></button>
      </div>
    </section>

    <!-- STEP 3: CROWN MINI-GAME -->
    <section id="step-3" class="step-section flex-col items-center w-full">
      <h2 class="font-royal italic font-extrabold text-[1.75rem] text-center royal-gradient-text mb-6 px-2">
        <span class="data-recipient">Sweetheart</span>, one crown is missing, place it 👑
      </h2>
      <div class="royal-card w-full p-5 sm:p-6 flex flex-col items-center justify-center min-h-[320px]">
        <div id="crown-game-grid" class="grid grid-cols-3 gap-3.5 w-full max-w-[310px] aspect-square">
          <div class="rounded-2xl bg-[#fff8fb] border border-pink-200/70 flex items-center justify-center text-4xl">👑</div>
          <div class="rounded-2xl bg-[#fff9fc] border border-pink-100 flex items-center justify-center text-2xl text-[#d49b27]">✦</div>
          <div class="rounded-2xl bg-[#fff9fc] border border-pink-100 flex items-center justify-center text-2xl text-[#d49b27]">✦</div>
          <div class="rounded-2xl bg-[#fff9fc] border border-pink-100 flex items-center justify-center text-2xl text-[#d49b27]">✦</div>
          <button id="missing-crown-slot" type="button" onclick="placeMissingCrown(event)" class="crown-slot-pulse rounded-2xl flex items-center justify-center relative focus:outline-none">
            <span id="placed-crown-icon" class="hidden text-4xl">👑</span>
          </button>
          <div class="rounded-2xl bg-[#fff9fc] border border-pink-100 flex items-center justify-center text-2xl text-[#d49b27]">✦</div>
          <div class="rounded-2xl bg-[#fff9fc] border border-pink-100 flex items-center justify-center text-2xl text-[#d49b27]">✦</div>
          <div class="rounded-2xl bg-[#fff9fc] border border-pink-100 flex items-center justify-center text-2xl text-[#d49b27]">✦</div>
          <div class="rounded-2xl bg-[#fff8fb] border border-pink-200/70 flex items-center justify-center text-4xl">👑</div>
        </div>

        <div id="crown-token-tray" class="mt-4 flex flex-col items-center">
          <div onclick="placeMissingCrown(event)" class="px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 shadow-2xs inline-flex items-center gap-2 cursor-pointer hover:scale-105 transition">
            <span class="text-2xl">👑</span><span class="text-xs font-bold text-amber-800">Tap to place crown</span>
          </div>
        </div>

        <div id="crown-game-solved" class="hidden flex-col items-center text-center py-4 animate-[fadeIn_0.5s_ease]">
          <p class="font-royal italic font-extrabold text-[1.65rem] text-[#a31d6d] px-2">The crown was always meant for you.</p>
        </div>
      </div>

      <div class="w-full flex items-center justify-between mt-6 px-1">
        <button type="button" onclick="goToStep(2)" class="btn-pill-back px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>←</span><span>Back</span></button>
        <button id="game-next-btn" type="button" onclick="goToStep(4)" class="hidden btn-pill-next px-7 py-2.5 rounded-full font-bold text-sm items-center gap-1.5 cursor-pointer"><span>Next</span><span>→</span></button>
      </div>
    </section>

    <!-- STEP 4: SEALED LETTER -->
    <section id="step-4" class="step-section flex-col items-center w-full">
      <div id="envelope-sealed-state" class="royal-card w-full p-7 sm:p-9 flex flex-col items-center text-center">
        <p class="uppercase tracking-[0.24em] text-xs font-bold text-[#c9961a]">A ROYAL DISPATCH</p>
        <h2 class="font-royal italic font-extrabold text-[1.95rem] royal-gradient-text mt-1">Sealed With Love 💌</h2>
        <div class="my-6 relative w-64 h-44 rounded-2xl bg-gradient-to-br from-[#fff3f8] to-[#fce1ee] border-2 border-[#e6c88a] flex items-center justify-center">
          <button type="button" onclick="openRoyalEnvelope(event)" class="wax-seal-btn w-20 h-20 rounded-full bg-gradient-to-br from-[#ffe082] via-[#d4af37] to-[#b38218] border-4 border-[#fff8e1] flex flex-col items-center justify-center text-white shadow-lg cursor-pointer">
            <span class="text-2xl">👑</span><span class="text-[9px] font-extrabold tracking-widest uppercase">OPEN</span>
          </button>
        </div>
        <p class="text-xs font-bold text-[#a31d6d]">Tap the golden royal seal to break open your letter ✨</p>
      </div>

      <div id="envelope-opened-state" class="hidden royal-card w-full p-6 sm:p-8 pt-8 pb-9 flex-col items-center text-center relative mt-6 animate-[fadeIn_0.5s_ease]">
        <p class="uppercase tracking-[0.24em] text-xs font-bold text-[#c9961a]">A ROYAL NOTE</p>
        <h2 class="font-royal font-extrabold text-[1.95rem] royal-gradient-text mt-1">JUST FOR YOU ✦</h2>
        <h3 class="font-royal italic font-bold text-[1.45rem] text-[#e94e89] mt-3">To my <span class="data-recipient">Sweetheart</span>,</h3>
        <p class="mt-4 text-[0.95rem] leading-[1.76] text-[#6d4c5d] font-medium px-1 data-note-body">
          You are the princess of my heart, with the kindest soul, the brightest smile, and a love that makes every ordinary day feel like a fairytale. Thank you for being you. Happy Princess Day. 👑💗
        </p>
        <p class="font-script text-[1.55rem] text-[#b82574] mt-5">Forever yours, your <span class="data-sender">Prince</span></p>
      </div>

      <div class="w-full flex items-center justify-between mt-9 px-1">
        <button type="button" onclick="goToStep(3)" class="btn-pill-back px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>←</span><span>Back</span></button>
        <button type="button" onclick="goToStep(5)" class="btn-pill-next px-7 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>Next</span><span>→</span></button>
      </div>
    </section>

    <!-- STEP 5: ROYAL PASS & COUPONS -->
    <section id="step-5" class="step-section flex-col items-center w-full">
      <div class="royal-card w-full p-5 sm:p-7 flex flex-col items-center relative overflow-hidden">
        <h2 class="font-royal font-extrabold text-[1.85rem] royal-gradient-text">Royal Surprises ✦</h2>
        <div class="w-full flex items-center justify-between text-xs mt-3 mb-2 px-1">
          <div><span class="font-bold text-[#b82574]">FROM:</span> Your <span class="data-sender">Prince</span></div>
          <div><span class="font-bold text-[#b82574]">TO:</span> <span class="data-recipient">Sweetheart</span></div>
        </div>

        <div class="w-full rounded-2xl border-2 border-dashed border-[#e6c88a] bg-[#fffaf2] p-3 relative flex flex-col items-center">
          <div id="pass-claimed-stamp" class="hidden absolute inset-0 z-20 items-center justify-center pointer-events-none">
            <div class="stamp-claimed px-4 py-2 rounded-xl border-4 border-[#e94e89] bg-white/90 text-[#c2185b] font-royal font-extrabold text-base uppercase">
              CLAIMED BY PRINCESS 👑
            </div>
          </div>
          <p class="font-script text-xl text-[#a31d6d] my-2">For My Special Princess 💗</p>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 mt-3.5">
          <div onclick="flipWishCard(this)" class="wish-card h-20 cursor-pointer select-none">
            <div class="wish-card-inner w-full h-full">
              <div class="wish-face absolute inset-0 rounded-xl bg-gradient-to-br from-[#fff0f6] to-[#ffe3ee] border border-pink-200 flex flex-col items-center justify-center p-1 text-center">
                <span class="text-base">🍫</span><span class="text-[9px] font-bold text-[#9b1b62] mt-0.5">Treats</span>
              </div>
              <div class="wish-face wish-back absolute inset-0 rounded-xl bg-[#9b1b62] text-white flex items-center justify-center p-1 text-center">
                <span class="text-[9px] font-bold">Any snack anytime! 💖</span>
              </div>
            </div>
          </div>

          <div onclick="flipWishCard(this)" class="wish-card h-20 cursor-pointer select-none">
            <div class="wish-card-inner w-full h-full">
              <div class="wish-face absolute inset-0 rounded-xl bg-gradient-to-br from-[#fff8e1] to-[#ffecb3] border border-amber-200 flex flex-col items-center justify-center p-1 text-center">
                <span class="text-base">✨</span><span class="text-[9px] font-bold text-amber-900 mt-0.5">Royal Date</span>
              </div>
              <div class="wish-face wish-back absolute inset-0 rounded-xl bg-amber-600 text-white flex items-center justify-center p-1 text-center">
                <span class="text-[9px] font-bold">Memories & laughs 🌟</span>
              </div>
            </div>
          </div>

          <div onclick="flipWishCard(this)" class="wish-card h-20 cursor-pointer select-none">
            <div class="wish-card-inner w-full h-full">
              <div class="wish-face absolute inset-0 rounded-xl bg-gradient-to-br from-[#f3e5f5] to-[#e1bee7] border border-purple-200 flex flex-col items-center justify-center p-1 text-center">
                <span class="text-base">👑</span><span class="text-[9px] font-bold text-purple-900 mt-0.5">1st Priority</span>
              </div>
              <div class="wish-face wish-back absolute inset-0 rounded-xl bg-purple-800 text-white flex items-center justify-center p-1 text-center">
                <span class="text-[9px] font-bold">Always #1 Queen 💍</span>
              </div>
            </div>
          </div>
        </div>

        <button id="claim-pass-btn" type="button" onclick="claimRoyalPass(event)" class="mt-3.5 w-full py-2.5 rounded-full bg-gradient-to-r from-[#ffe082] to-[#ffca28] text-[#7a4f01] font-bold text-xs shadow-xs hover:scale-[1.02] transition cursor-pointer">
          Stamp &amp; Claim Royal Pass ✨
        </button>
      </div>

      <div class="w-full flex items-center justify-between mt-6 px-1">
        <button type="button" onclick="goToStep(4)" class="btn-pill-back px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>←</span><span>Back</span></button>
        <button type="button" onclick="goToStep(6)" class="btn-pill-next px-7 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>Next</span><span>→</span></button>
      </div>
    </section>

    <!-- STEP 6: CERTIFICATE -->
    <section id="step-6" class="step-section flex-col items-center w-full">
      <div class="royal-card w-full p-6 sm:p-7 flex flex-col items-center text-center border-2 border-[#e6c88a]">
        <p class="uppercase tracking-[0.24em] text-[11px] font-bold text-[#c9961a]">OFFICIAL ROYAL DECREE ✦</p>
        <h2 class="font-royal italic font-extrabold text-[1.75rem] royal-gradient-text mt-1">Certified Queen<br/>of My Heart</h2>
        <div class="gold-divider w-32 my-3"></div>
        <p class="text-xs text-[#6d4c5d]">Be it known throughout the entire kingdom that</p>
        <div class="my-2 px-5 py-1.5 rounded-full bg-pink-50 border border-pink-200">
          <span class="font-royal font-extrabold text-xl text-[#a31d6d] data-recipient">Sweetheart</span>
        </div>
        <p class="text-xs text-[#6d4c5d] px-2">is officially crowned as the cutest, sweetest, and most cherished Princess forever.</p>

        <div class="w-full mt-5 flex flex-col sm:flex-row items-center gap-2.5">
          <button type="button" onclick="sendLoveBack(event)" class="w-full sm:flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#ff7597] to-[#e94e89] text-white font-bold text-xs shadow-sm hover:scale-[1.03] transition flex items-center justify-center gap-1.5 cursor-pointer">
            <span>Send Love Back 💕</span><span id="love-counter-badge" class="px-2 py-0.5 rounded-full bg-white/25 text-[11px]">0</span>
          </button>
          <button type="button" onclick="downloadCertificateImage()" class="w-full sm:w-auto py-2.5 px-4 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-bold text-xs hover:bg-amber-100 transition cursor-pointer">
            Save Keepsake 🖼️
          </button>
        </div>
      </div>

      <div class="w-full flex items-center justify-between mt-6 px-1">
        <button type="button" onclick="goToStep(5)" class="btn-pill-back px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>←</span><span>Back</span></button>
        <button type="button" onclick="goToStep(7)" class="btn-pill-next px-7 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"><span>Finale</span><span>→</span></button>
      </div>
    </section>

    <!-- STEP 7: FINALE -->
    <section id="step-7" class="step-section flex-col items-center w-full">
      <div id="finale-card" onclick="celebrateFinale(event)" class="royal-card w-full p-6 sm:p-8 pb-10 flex flex-col items-center text-center relative cursor-pointer select-none">
        <p class="w-full text-left uppercase tracking-[0.22em] text-xs font-bold text-[#7d5a6c]">FOR <span class="data-recipient-upper">SWEETHEART</span> ✦</p>
        <h2 class="font-royal italic font-extrabold text-[2.65rem] royal-gradient-text mt-2">My<br/>Princess</h2>
        <h3 class="font-royal font-extrabold text-[1.15rem] text-[#a31d6d] mt-2">FOREVER &amp; ALWAYS 💗</h3>
        <p class="mt-4 text-[0.96rem] leading-[1.75] text-[#6d4c5d] font-medium px-1">
          If you smiled even once while going through this, it was all worth it. May your day be as magical as you make my life. Happy Princess Day, my <span class="data-petname">love</span>.
        </p>
        <p class="font-script text-[1.4rem] text-[#e94e89] mt-5">made with 💗, crowns, and a whole kingdom of love 🌼</p>
      </div>

      <div class="w-full flex items-center justify-between gap-2 mt-7 px-1">
        <button type="button" onclick="goToStep(6)" class="btn-pill-back px-5 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1 cursor-pointer"><span>←</span><span>Back</span></button>
        <button type="button" onclick="celebrateFinale(event)" class="px-4 py-2.5 rounded-full bg-white/90 border border-pink-300 text-[#a31d6d] font-bold text-xs shadow-2xs hover:scale-105 transition cursor-pointer">Shower Love 💖</button>
        <button type="button" onclick="replayExperience()" class="btn-pill-next px-5 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1 cursor-pointer"><span>Replay</span><span>↻</span></button>
      </div>
    </section>

  </main>

  <!-- PERSONALIZATION MODAL -->
  <div id="customize-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/35 p-4">
    <div class="royal-card w-full max-w-sm p-6 relative max-h-[90dvh] overflow-y-auto">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-royal italic font-bold text-xl royal-gradient-text">Personalize 👑</h3>
        <button id="customize-close-btn" type="button" class="w-8 h-8 rounded-full bg-pink-50 text-pink-700 flex items-center justify-center font-bold cursor-pointer">✕</button>
      </div>
      <form id="customize-form" class="space-y-3 text-sm">
        <div><label class="block font-bold text-[#9b1b62] mb-1">Princess Name</label><input id="input-recipient" type="text" class="w-full px-3 py-2 rounded-xl border border-pink-200 bg-white" /></div>
        <div><label class="block font-bold text-[#9b1b62] mb-1">Prince Name</label><input id="input-sender" type="text" class="w-full px-3 py-2 rounded-xl border border-pink-200 bg-white" /></div>
        <div><label class="block font-bold text-[#9b1b62] mb-1">Special Date</label><input id="input-date" type="text" class="w-full px-3 py-2 rounded-xl border border-pink-200 bg-white" /></div>
        <div><label class="block font-bold text-[#9b1b62] mb-1">Custom Note</label><textarea id="input-note" rows="3" class="w-full px-3 py-2 rounded-xl border border-pink-200 bg-white text-xs"></textarea></div>
        <div class="pt-2 flex items-center justify-between">
          <button type="button" id="copy-share-link-btn" class="px-3 py-2 rounded-full bg-purple-100 text-purple-800 text-xs font-bold cursor-pointer">Copy Link 🔗</button>
          <button type="submit" class="btn-pill-next px-5 py-2 rounded-full font-bold text-xs cursor-pointer">Save ✨</button>
        </div>
      </form>
    </div>
  </div>

  <!-- QR MODAL -->
  <div id="qr-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/35 p-4">
    <div class="royal-card w-full max-w-xs p-6 flex flex-col items-center text-center relative">
      <button id="qr-close-btn" type="button" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-700 flex items-center justify-center font-bold cursor-pointer">✕</button>
      <h3 class="font-royal italic font-extrabold text-xl royal-gradient-text mb-3">Royal QR 👑</h3>
      <div class="p-3 rounded-2xl bg-white border-2 border-[#d4af37]"><canvas id="royal-qr-canvas"></canvas></div>
      <button type="button" id="download-qr-btn" class="btn-pill-next w-full mt-4 py-2.5 rounded-full font-bold text-xs cursor-pointer">Download QR 📥</button>
    </div>
  </div>

  <script>
    const defaultConfig = { recipient: 'Sara (Saruu)', sender: 'Arman', date: 'November 18', note: "You are the princess of my heart, with the kindest soul, the brightest smile, and a love that makes every ordinary day feel like a fairytale. Thank you for being you. Happy Princess Day. 👑💗" };
    let config = { ...defaultConfig };
    const totalSteps = 7;
    let currentStep = 1;
    let giftUnwrapped = false;
    let crownPlaced = false;
    let envelopeOpened = false;
    let passClaimed = false;
    let loveCount = 0;
    
    let soundPlaying = false;
    let audioCtx = null;
    let melodyTimer = null;

    function showToast(msg) {
      const t = document.getElementById('royal-toast');
      t.textContent = msg;
      t.classList.remove('opacity-0', 'translate-y-4');
      t.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => { t.classList.add('opacity-0', 'translate-y-4'); t.classList.remove('opacity-100', 'translate-y-0'); }, 2000);
    }

    // Web Audio Music Box Lullaby Player
    function toggleMusic() {
      soundPlaying = !soundPlaying;
      const icon = document.getElementById('sound-icon');
      const text = document.getElementById('sound-text');

      if (soundPlaying) {
        icon.textContent = '🔊';
        text.textContent = 'Playing...';
        startMusicBox();
        showToast('Music Box Started 🎶✨');
      } else {
        icon.textContent = '🎵';
        text.textContent = 'Play Music';
        stopMusicBox();
        showToast('Music Paused ⏸️');
      }
    }

    function startMusicBox() {
      stopMusicBox();
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioCtx();
      } catch(e) { return; }

      const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, 587.33, 698.46];
      let idx = 0;

      melodyTimer = setInterval(() => {
        if (!soundPlaying || !audioCtx) return;
        try {
          if (audioCtx.state === 'suspended') audioCtx.resume();
          const now = audioCtx.currentTime;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(notes[idx % notes.length], now);
          idx++;

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.exponentialRampToValueAtTime(0.06, now + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.95);
        } catch(e) {}
      }, 700);
    }

    function stopMusicBox() {
      if (melodyTimer) { clearInterval(melodyTimer); melodyTimer = null; }
      if (audioCtx) { audioCtx.close(); audioCtx = null; }
    }

    document.getElementById('sound-toggle-btn').addEventListener('click', toggleMusic);

    function renderProgressBar() {
      const bar = document.getElementById('step-progress-bar');
      bar.innerHTML = '';
      for (let i = 1; i <= totalSteps; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.onclick = () => goToStep(i);
        dot.className = i === currentStep ? 'text-xs scale-125 cursor-pointer' : 'w-2 h-2 rounded-full bg-pink-200 cursor-pointer';
        if (i === currentStep) dot.textContent = '👑';
        bar.appendChild(dot);
      }
    }

    function goToStep(s) {
      if (s < 1 || s > totalSteps || s === currentStep) return;
      const cur = document.getElementById(`step-${currentStep}`);
      const nxt = document.getElementById(`step-${s}`);
      if (cur) {
        cur.classList.remove('active');
        if (nxt) nxt.classList.add('active');
      }
      currentStep = s;
      renderProgressBar();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function unwrapRoyalGift(e) {
      if (giftUnwrapped) return;
      giftUnwrapped = true;
      document.getElementById('gift-wrapped-state').classList.add('hidden');
      const unwrapped = document.getElementById('gift-unwrapped-state');
      unwrapped.classList.remove('hidden');
      unwrapped.classList.add('flex');
    }

    function placeMissingCrown(e) {
      if (crownPlaced) return;
      crownPlaced = true;
      const slot = document.getElementById('missing-crown-slot');
      const icon = document.getElementById('placed-crown-icon');
      slot.classList.remove('crown-slot-pulse');
      icon.classList.remove('hidden');
      icon.classList.add('crown-dropped');
      document.getElementById('crown-token-tray').classList.add('hidden');
      setTimeout(() => {
        document.getElementById('crown-game-grid').classList.add('hidden');
        document.getElementById('crown-game-solved').classList.remove('hidden');
        document.getElementById('crown-game-solved').classList.add('flex');
        document.getElementById('game-next-btn').classList.remove('hidden');
        document.getElementById('game-next-btn').classList.add('inline-flex');
      }, 800);
    }

    function openRoyalEnvelope(e) {
      if (envelopeOpened) return;
      envelopeOpened = true;
      document.getElementById('envelope-sealed-state').classList.add('hidden');
      const op = document.getElementById('envelope-opened-state');
      op.classList.remove('hidden');
      op.classList.add('flex');
    }

    function flipWishCard(el) { el.classList.toggle('flipped'); }

    function claimRoyalPass(e) {
      document.getElementById('pass-claimed-stamp').classList.remove('hidden');
      document.getElementById('pass-claimed-stamp').classList.add('flex');
      if (!passClaimed) {
        passClaimed = true;
        document.getElementById('claim-pass-btn').textContent = 'Royal Pass Claimed! 👑💖';
      }
    }

    function sendLoveBack(e) {
      loveCount++;
      document.getElementById('love-counter-badge').textContent = loveCount;
    }

    function downloadCertificateImage() {
      showToast('Keepsake Certificate Saved! 🖼️✨');
    }

    function replayExperience() {
      giftUnwrapped = false;
      document.getElementById('gift-wrapped-state').classList.remove('hidden');
      document.getElementById('gift-unwrapped-state').classList.add('hidden');
      document.getElementById('gift-unwrapped-state').classList.remove('flex');
      crownPlaced = false;
      document.getElementById('missing-crown-slot').classList.add('crown-slot-pulse');
      document.getElementById('placed-crown-icon').classList.add('hidden');
      document.getElementById('crown-token-tray').classList.remove('hidden');
      document.getElementById('crown-game-grid').classList.remove('hidden');
      document.getElementById('crown-game-solved').classList.add('hidden');
      document.getElementById('game-next-btn').classList.add('hidden');
      envelopeOpened = false;
      document.getElementById('envelope-sealed-state').classList.remove('hidden');
      document.getElementById('envelope-opened-state').classList.add('hidden');
      goToStep(1);
    }

    function celebrateFinale(e) {}

    // Personalization Modal
    const modal = document.getElementById('customize-modal');
    document.getElementById('customize-open-btn').onclick = () => {
      document.getElementById('input-recipient').value = config.recipient;
      document.getElementById('input-sender').value = config.sender;
      document.getElementById('input-date').value = config.date;
      document.getElementById('input-note').value = config.note;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    };
    document.getElementById('customize-close-btn').onclick = () => { modal.classList.add('hidden'); modal.classList.remove('flex'); };
    
    document.getElementById('customize-form').onsubmit = (e) => {
      e.preventDefault();
      config.recipient = document.getElementById('input-recipient').value.trim() || defaultConfig.recipient;
      config.sender = document.getElementById('input-sender').value.trim() || defaultConfig.sender;
      config.date = document.getElementById('input-date').value.trim() || defaultConfig.date;
      config.note = document.getElementById('input-note').value.trim() || defaultConfig.note;

      document.querySelectorAll('.data-recipient').forEach(el => el.textContent = config.recipient);
      document.querySelectorAll('.data-sender').forEach(el => el.textContent = config.sender);
      document.querySelectorAll('.data-date').forEach(el => el.textContent = config.date);
      document.querySelectorAll('.data-note-body').forEach(el => el.textContent = config.note);

      modal.classList.add('hidden');
      modal.classList.remove('flex');
      showToast('Saved Successfully! ✨');
    };

    document.getElementById('copy-share-link-btn').onclick = () => {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied! 🔗');
    };

    // QR Modal
    const qrModal = document.getElementById('qr-modal');
    document.getElementById('qr-open-btn').onclick = () => {
      if (window.QRious) {
        new QRious({ element: document.getElementById('royal-qr-canvas'), value: window.location.href, size: 170, foreground: '#a31d6d' });
      }
      qrModal.classList.remove('hidden');
      qrModal.classList.add('flex');
    };
    document.getElementById('qr-close-btn').onclick = () => { qrModal.classList.add('hidden'); qrModal.classList.remove('flex'); };
    document.getElementById('download-qr-btn').onclick = () => { showToast('QR Downloaded! 📥'); };

    window.addEventListener('DOMContentLoaded', () => {
      renderProgressBar();
    });
  </script>
</body>
</html>
