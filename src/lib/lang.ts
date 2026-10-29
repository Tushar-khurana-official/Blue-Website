export const LANG_KEY = "lang";

/** Runs before paint: marks JS as running (for scroll reveals) and restores the saved language. */
export const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('${LANG_KEY}')==='hi'){d.classList.add('lang-hi');d.lang='hi-IN';}}catch(e){}})();`;
