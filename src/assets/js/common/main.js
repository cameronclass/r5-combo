window.addEventListener("DOMContentLoaded", (event) => {
  /* Hamburger */
  const hamburger = document.querySelector(".js-hamburger");
  const header = document.querySelector(".header");
  const body = document.querySelector("html");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      header.classList.toggle("_active");
      body.classList.toggle("no-scroll");
    });
  }

  /* Header Scroll Fix */

  window.addEventListener("scroll", function () {
    scrollElementPos = window.scrollY;
    if (scrollElementPos >= 50) {
      header.classList.add("_fixed");
    } else {
      header.classList.remove("_fixed");
    }

    console.log(scrollElementPos);
  });

  /* Accordion */
  new Accordion(".accordion-container");

  const jsTableBtn = document.querySelector(".js-table-btn");
  const eleventhAbout = document.querySelector(".eleventh__about");
  const eleventhMore = document.querySelector(".eleventh__more");
  const eleventh__heading_info_text_1 = document.querySelector(
    ".eleventh__heading_info_text_1"
  );
  const eleventh__heading_info_text_2 = document.querySelector(
    ".eleventh__heading_info_text_2"
  );

  if (jsTableBtn) {
    jsTableBtn.addEventListener("change", (e) => {
      if (e.target.checked === true) {
        eleventhMore.classList.remove("d-none");
        eleventhAbout.classList.add("d-none");

        eleventh__heading_info_text_1.classList.remove("_active");
        eleventh__heading_info_text_2.classList.add("_active");
      } else {
        eleventhMore.classList.add("d-none");
        eleventhAbout.classList.remove("d-none");

        eleventh__heading_info_text_1.classList.add("_active");
        eleventh__heading_info_text_2.classList.remove("_active");
      }
    });
  }

  // == Section 24 = Change opacity during hover =========

  const itemsHover = document.querySelectorAll(".twenty-four__list_item");
  const itemsParent = document.querySelector(".twenty-four__list");
  const itemsOpacity = document.querySelectorAll(".twenty-four-hover");

  function addTransparency() {
    itemsOpacity.forEach((items) => {
      items.classList.add("img-transparency");
      items.classList.remove("img-opacity");
    });
    itemsHover.forEach((items) => {
      items.classList.remove("_active");
    });
  }

  function addOpacity(i = 0) {
    itemsOpacity[i].classList.add("img-opacity");
    itemsOpacity[i].classList.remove("img-transparency");
    itemsHover[i].classList.add("_active");
  }

  addTransparency();
  addOpacity();

  itemsParent.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target && target.classList.contains("twenty-four__list_item")) {
      itemsHover.forEach((items, i) => {
        if (target == items) {
          addTransparency();
          addOpacity(i);
        }
      });
    }
  });

  itemsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("twenty-four__list_item")) {
      itemsHover.forEach((items, i) => {
        if (target == items) {
          addTransparency();
          addOpacity(i);
        }
      });
    }
  });

  // == Animation on vieport =========
  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }

  // == Add class touch if browser is mobile ==============

  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  function addTouchClass() {
    if (isMobile.any()) document.documentElement.classList.add("touch");
  }
  addTouchClass();

  // == Smooth Navigation =============================================
  function pageNavigation() {
    document.addEventListener("click", pageNavigationAction);
    function pageNavigationAction(e) {
      if (e.type === "click") {
        const targetElement = e.target;
        if (targetElement.closest("[data-goto]")) {
          const gotoLink = targetElement.closest("[data-goto]");
          const gotoLinkSelector = gotoLink.dataset.goto
            ? gotoLink.dataset.goto
            : "";
          const noHeader = gotoLink.hasAttribute("data-goto-header")
            ? true
            : false;
          const gotoSpeed = gotoLink.dataset.gotoSpeed
            ? gotoLink.dataset.gotoSpeed
            : 500;
          const offsetTop = gotoLink.dataset.gotoTop
            ? parseInt(gotoLink.dataset.gotoTop)
            : 0;
          const header = document.querySelector(".header");
          const hamburger = document.querySelector(".js-hamburger");
          const body = document.querySelector("html");

          gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
          header.classList.remove("_active");
          hamburger.classList.remove("is-active");
          body.classList.remove("no-scroll");

          e.preventDefault();
        }
      }
    }
  }
  pageNavigation();

  // == Smooth Scrolling =============================================
  let gotoBlock = (
    targetBlock,
    noHeader = false,
    speed = 500,
    offsetTop = 0
  ) => {
    const targetBlockElement = document.querySelector(targetBlock);
    if (targetBlockElement) {
      let headerItemHeight = 0;
      let targetBlockElementPosition =
        targetBlockElement.getBoundingClientRect().top + scrollY;
      targetBlockElementPosition = headerItemHeight
        ? targetBlockElementPosition - headerItemHeight
        : targetBlockElementPosition;
      targetBlockElementPosition = offsetTop
        ? targetBlockElementPosition - offsetTop
        : targetBlockElementPosition;
      window.scrollTo({
        top: targetBlockElementPosition,
        behavior: "smooth",
      });
    }
  };

  // == Highlight active side-bar menu item ==========================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const headerItem = document.querySelectorAll(".header__item");
          headerItem.forEach((link) => {
            link.classList.toggle(
              "_active-item",
              link.getAttribute("href").replace("#", "") === entry.target.id
            );
          });
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

/* Animation */
AOS.init();

hljs.initHighlightingOnLoad();

window.addEventListener("scroll", () => {
  AOS.refresh();
});
