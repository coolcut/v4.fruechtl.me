/*------------------------------------------------------------------
||  Netlify
-------------------------------------------------------------------*/
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

/*------------------------------------------------------------------
||  Lozad
-------------------------------------------------------------------*/
(function () {
  const observer = lozad();
  observer.observe();
})();

