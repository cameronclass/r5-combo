window.addEventListener("DOMContentLoaded",e=>{const t=document.querySelector(".js-hamburger"),o=document.querySelector(".header"),n=document.querySelector("html");t&&t.addEventListener("click",()=>{t.classList.toggle("is-active"),o.classList.toggle("_active"),n.classList.toggle("no-scroll")}),window.addEventListener("scroll",(function(){scrollElementPos=window.scrollY,scrollElementPos>=50?o.classList.add("_fixed"):o.classList.remove("_fixed"),console.log(scrollElementPos)})),new Accordion(".accordion-container");const s=document.querySelector(".js-table-btn"),c=document.querySelector(".eleventh__about"),i=document.querySelector(".eleventh__more"),r=document.querySelector(".eleventh__heading_info_text_1"),a=document.querySelector(".eleventh__heading_info_text_2");s&&s.addEventListener("change",e=>{!0===e.target.checked?(i.classList.remove("d-none"),c.classList.add("d-none"),r.classList.remove("_active"),a.classList.add("_active")):(i.classList.add("d-none"),c.classList.remove("d-none"),r.classList.add("_active"),a.classList.remove("_active"))});const l=document.querySelectorAll(".twenty-four__list_item"),d=document.querySelector(".twenty-four__list"),u=document.querySelectorAll(".twenty-four-hover");function m(){u.forEach(e=>{e.classList.add("img-transparency"),e.classList.remove("img-opacity")}),l.forEach(e=>{e.classList.remove("_active")})}function g(e=0){u[e].classList.add("img-opacity"),u[e].classList.remove("img-transparency"),l[e].classList.add("_active")}m(),g(),d.addEventListener("mouseover",e=>{const t=e.target;t&&t.classList.contains("twenty-four__list_item")&&l.forEach((e,o)=>{t==e&&(m(),g(o))})}),d.addEventListener("click",e=>{const t=e.target;t&&t.classList.contains("twenty-four__list_item")&&l.forEach((e,o)=>{t==e&&(m(),g(o))})});const f=document.querySelectorAll("._anim-items");if(f.length>0){function h(){for(let e=0;e<f.length;e++){const t=f[e],o=t.offsetHeight,n=v(t).top,s=4;let c=window.innerHeight-o/s;o>window.innerHeight&&(c=window.innerHeight-window.innerHeight/s),pageYOffset>n-c&&pageYOffset<n+o?t.classList.add("_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("_active")}}function v(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",h),setTimeout(()=>{h()},300)}let _={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return _.Android()||_.BlackBerry()||_.iOS()||_.Opera()||_.Windows()}};_.any()&&document.documentElement.classList.add("touch"),document.addEventListener("click",(function(e){if("click"===e.type){const t=e.target;if(t.closest("[data-goto]")){const o=t.closest("[data-goto]"),n=o.dataset.goto?o.dataset.goto:"",s=!!o.hasAttribute("data-goto-header"),c=o.dataset.gotoSpeed?o.dataset.gotoSpeed:500,i=o.dataset.gotoTop?parseInt(o.dataset.gotoTop):0,r=document.querySelector(".header"),a=document.querySelector(".js-hamburger"),l=document.querySelector("html");L(n,s,c,i),r.classList.remove("_active"),a.classList.remove("is-active"),l.classList.remove("no-scroll"),e.preventDefault()}}}));let L=(e,t=!1,o=500,n=0)=>{const s=document.querySelector(e);if(s){let e=0,t=s.getBoundingClientRect().top+scrollY;t=e?t-e:t,t=n?t-n:t,window.scrollTo({top:t,behavior:"smooth"})}};const w=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){document.querySelectorAll(".header__item").forEach(t=>{t.classList.toggle("_active-item",t.getAttribute("href").replace("#","")===e.target.id)})}})},{threshold:.4});document.querySelectorAll(".section").forEach(e=>{w.observe(e)})}),AOS.init(),hljs.initHighlightingOnLoad(),window.addEventListener("scroll",()=>{AOS.refresh()});