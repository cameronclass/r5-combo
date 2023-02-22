window.addEventListener("DOMContentLoaded", (event) => {
  /* Modal */
  const modalOpen = document.querySelectorAll(".js-modal-open");
  const modalContent = document.querySelectorAll(".js-modal-content");

  if (modalOpen) {
    modalOpen.forEach((element) => {
      let currentBtn = element.dataset.modalBtn;

      element.addEventListener("click", () => {
        modalContent.forEach((element) => {
          let currentModal = element.dataset.modalContent;

          let overlay = element.querySelector(":scope .overlay");
          let modalClose = element.querySelector(":scope .btn-close");
          let modalCloseJs = element.querySelector(":scope .js-btn-close");

          document.documentElement.style.overflowY = "hidden";

          if (overlay)
            overlay.onclick = () => {
              element.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            };

          if (modalClose)
            modalClose.onclick = () => {
              element.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            };

          if (modalCloseJs)
            modalCloseJs.onclick = () => {
              element.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            };

          if (currentBtn == currentModal) {
            element.classList.add("active");
          }

          document.addEventListener("keyup", (event) => {
            modalContent.forEach((item) => {
              if (event.code === "Escape") {
                item.classList.remove("active");
                document.documentElement.style.overflowY = "auto";
              }
            });
          });
        });
      });
    });
  }
});
