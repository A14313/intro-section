document.addEventListener("click",(t=>{const e=t.target.matches("[data-dropdown-button]");if(!e&&null!=t.target.closest("[data-dropdown]"))return;let a;e&&(a=t.target.closest("[data-dropdown]"),a.classList.toggle("active")),document.querySelectorAll("[data-dropdown].active").forEach((t=>{t!==a&&t.classList.remove("active")}))}));
//# sourceMappingURL=index.ea01cb8d.js.map
