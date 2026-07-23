(function(){
  var KEY = 'kdc-cookie-consent';
  var GTM_ID = 'GTM-52MHG4B6';

  function loadGTM(){
    if(window.__gtmLoaded) return;
    window.__gtmLoaded = true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);
    var ns = document.createElement('noscript');
    var ifr = document.createElement('iframe');
    ifr.src = 'https://www.googletagmanager.com/ns.html?id='+GTM_ID;
    ifr.height = 0; ifr.width = 0; ifr.style.display = 'none'; ifr.style.visibility = 'hidden';
    ns.appendChild(ifr);
    document.body.appendChild(ns);
  }

  function hideBanner(){
    var b = document.getElementById('cookieBanner');
    if(b) b.remove();
  }

  window.kdcConsent = {
    get: function(){ try{ return localStorage.getItem(KEY); } catch(e){ return null; } },
    accept: function(){
      try{ localStorage.setItem(KEY, 'accepted'); } catch(e){}
      loadGTM();
      if(window.kdcLoadOptional) window.kdcLoadOptional();
      hideBanner();
    },
    reject: function(){
      try{ localStorage.setItem(KEY, 'rejected'); } catch(e){}
      hideBanner();
    }
  };

  function injectBanner(){
    if(document.getElementById('cookieBanner')) return;
    var d = document.createElement('div');
    d.id = 'cookieBanner';
    d.setAttribute('role', 'region');
    d.setAttribute('aria-label', 'Cookie consent');
    d.className = 'fixed bottom-0 inset-x-0 z-[80] text-white px-5 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 shadow-2xl';
    d.style.background = '#0E1A2B';
    d.innerHTML =
      '<p class="text-xs sm:text-sm text-white/85 flex-1">We use cookies for essential site function and, with your consent, for analytics and embedded reviews/video. See our <a href="cookie-policy.html" class="underline">Cookie Policy</a>.</p>' +
      '<div class="flex gap-2 shrink-0">' +
        '<button id="cookieRejectBtn" class="text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">Necessary only</button>' +
        '<button id="cookieAcceptBtn" class="text-xs sm:text-sm font-bold px-4 py-2 rounded-lg" style="background:#167F3D">Accept all</button>' +
      '</div>';
    document.body.appendChild(d);
    document.getElementById('cookieAcceptBtn').addEventListener('click', window.kdcConsent.accept);
    document.getElementById('cookieRejectBtn').addEventListener('click', window.kdcConsent.reject);
  }

  document.addEventListener('DOMContentLoaded', function(){
    var choice = window.kdcConsent.get();
    if(choice === 'accepted'){
      loadGTM();
      if(window.kdcLoadOptional) window.kdcLoadOptional();
    } else if(choice === 'rejected'){
      // respect the earlier choice, stay quiet
    } else {
      injectBanner();
    }
  });
})();
