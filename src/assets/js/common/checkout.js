
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

          if (currentBtn == currentModal) {
            element.classList.add("active");
          }

          document.addEventListener('keyup', (event) => {
            modalContent.forEach((item) => {
            if (event.code === 'Escape') {
              item.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            }
          });
          });
        });
      });
      
    });
  }




    // == Custom cursor ==========
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("button, a")) {
      cursor.classList.add("_over");
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("button, a")) {
      cursor.classList.remove("_over");
    }
  });

  document.addEventListener("mousedown", function (e) {
    if (e.target.closest("button, a")) {
      cursor.classList.add("click");
      cursor.classList.remove("_over");
      setTimeout(function () {
        cursor.classList.remove("click");
        cursor.classList.add("_over");
      }, 500);
    }
  });


  // == Add class touch if browser is mobile ==============

  let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

  function addTouchClass() {
  	if (isMobile.any()) document.documentElement.classList.add('touch');
  }
  addTouchClass();



  // == Input Mask  ==============
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  
    });
});

