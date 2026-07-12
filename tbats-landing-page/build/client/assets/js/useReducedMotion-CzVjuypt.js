import{useEffect as c,useState as o}from"react";function u(){const[r,t]=o(!1);return c(()=>{if(typeof window>"u")return;const e=window.matchMedia("(prefers-reduced-motion: reduce)");t(e.matches);const n=d=>{t(d.matches)};return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}},[]),r}export{u as t};

//# sourceMappingURL=useReducedMotion-CzVjuypt.js.map