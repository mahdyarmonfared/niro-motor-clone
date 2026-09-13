"use strict";

// ══════════════════════════════════════
// 1. PRODUCTS DATASET (Niro Motor Portfolio)
// ══════════════════════════════════════
const productsData = [
  {
    id: "apache200",
    name: "تی وی اس - آپاچی Apache 200",
    brand: "TVS",
    category: "استریت",
    price: "۵۰۶,۶۰۰,۰۰۰ تومان",
    numericPrice: 506600000,
    img: "assets/img/apache200.webp",
    badge: "پرفروش",
    isBestSeller: true,
    available: true,
    engine: "198cc",
    speed: "110 کیلومتر بر ساعت",
    transmission: "۵ دنده دستی",
    brakes: "ABS دو کاناله",
    power: "20.5 اسب بخار",
    fuelSystem: "انژکتوری EFI",
    fuelCapacity: "12 لیتر",
    cooling: "روغن خنک",
    installmentEligible: true,
    description:
      "محبوب‌ترین موتورسیکلت خیابانی با شتاب عالی، پایداری بالا در ترمزگیری با سیستم ضدقفل ABS و طراحی اسپرت و خشن.",
  },
  {
    id: "na180",
    name: "گلکسی NA180 (ABS)",
    brand: "Galaxy",
    category: "استریت",
    price: "۳۹۸,۹۰۰,۰۰۰ تومان",
    numericPrice: 398900000,
    img: "assets/img/na180.webp",
    badge: "اقساطی",
    isBestSeller: true,
    available: true,
    engine: "183cc",
    speed: "112 کیلومتر بر ساعت",
    transmission: "۶ دنده گیربکس",
    brakes: "ABS تک کاناله",
    power: "18 اسب بخار",
    fuelSystem: "انژکتوری EFI",
    fuelCapacity: "11 لیتر",
    cooling: "آب خنک (رادیاتور دار)",
    installmentEligible: true,
    description:
      "موتورسیکلت مدرن شهری با سیستم خنک‌کننده مایع، شاسی مستحکم، ترمز مطمئن و سواری بسیار نرم و ارگونومیک.",
  },
  {
    id: "ntorq125",
    name: "تی وی اس NTORQ 125",
    brand: "TVS",
    category: "اسکوتر",
    price: "۳۴۹,۲۰۰,۰۰۰ تومان",
    numericPrice: 349200000,
    img: "assets/img/ntorq125.webp",
    badge: "ویژه",
    isBestSeller: true,
    available: true,
    engine: "124.8cc",
    speed: "95 کیلومتر بر ساعت",
    transmission: "اتوماتیک CVT",
    brakes: "دیسک جلو / کاسه‌ای عقب",
    power: "9.4 اسب بخار",
    fuelSystem: "انژکتوری هوشمند",
    fuelCapacity: "5.8 لیتر",
    cooling: "هوا خنک",
    installmentEligible: true,
    description:
      "یکی از پرفروش‌ترین اسکوترهای اسپرت بازار ایران با استهلاک پایین، شتاب اولیه فوق‌العاده و فضای جادار زیر زین.",
  },
  {
    id: "mt15",
    name: "یاماها MT-15",
    brand: "Yamaha",
    category: "استریت",
    price: "۶۴۵,۰۰۰,۰۰۰ تومان",
    numericPrice: 645000000,
    img: "assets/img/mt15.webp",
    badge: "جدید",
    isBestSeller: true,
    available: true,
    engine: "155cc VVA",
    speed: "130 کیلومتر بر ساعت",
    transmission: "۶ دنده با اسیست و اسلیپر کلاچ",
    brakes: "ABS دو کاناله دیسکی",
    power: "19.3 اسب بخار",
    fuelSystem: "انژکتوری دقیق FI",
    fuelCapacity: "10 لیتر",
    cooling: "مایع خنک",
    installmentEligible: true,
    description:
      "شاهکار استریت ژاپنی از خانواده MT با زبان طراحی Dark Side of Japan، مجهز به فناوری سوپاپ متغیر VVA و شتاب کم‌نظیر.",
  },
  {
    id: "rockz125",
    name: "تی وی اس ROCKZ 125",
    brand: "TVS",
    category: "اسکوتر",
    price: "۳۳۱,۰۰۰,۰۰۰ تومان",
    numericPrice: 331000000,
    img: "assets/img/rockz125.webp",
    badge: "اقساطی",
    isBestSeller: false,
    available: true,
    engine: "125cc",
    speed: "90 کیلومتر بر ساعت",
    transmission: "نیمه اتوماتیک کلاچ اتوماتیک",
    brakes: "دیسکی جلو / کاسه‌ای عقب",
    power: "9.8 اسب بخار",
    fuelSystem: "انژکتوری",
    fuelCapacity: "4 لیتر",
    cooling: "هوا خنک",
    installmentEligible: true,
    description:
      "موتورسیکلت کاب شهری کم‌مصرف، خوش‌دست و بادوام با هزینه نگهداری اندک، مناسب ترددهای روزمره شهری و ترافیک سنگین.",
  },
  {
    id: "parvaaz250",
    name: "پرواز - احسان سحر ۲۵۰",
    brand: "NIROOMOTOR",
    category: "استریت",
    price: "ناموجود",
    numericPrice: 0,
    img: "assets/img/parvaaz-250.webp",
    badge: "ناموجود",
    isBestSeller: false,
    available: false,
    engine: "196cc",
    speed: "105 کیلومتر بر ساعت",
    transmission: "۵ دنده دستی",
    brakes: "دیسکی دو طرفه",
    power: "16 اسب بخار",
    fuelSystem: "انژکتوری",
    fuelCapacity: "14 لیتر",
    cooling: "روغن خنک",
    installmentEligible: false,
    description:
      "موتورسیکلت پرقدرت با بدنه مستحکم و باک حجیم، مناسب کسانی که به دنبال موتور شهری مقاوم با توان مناسب هستند.",
  },
  {
    id: "ehsan150",
    name: "احسان تریل EH150",
    brand: "NIROOMOTOR",
    category: "تریل",
    price: "۲۹۵,۰۰۰,۰۰۰ تومان",
    numericPrice: 295000000,
    img: "assets/img/ehsan-eh150.webp",
    badge: "اقساطی",
    isBestSeller: false,
    available: true,
    engine: "149cc",
    speed: "95 کیلومتر بر ساعت",
    transmission: "۵ دنده دستی",
    brakes: "دیسکی جلو / کاسه‌ای عقب",
    power: "11 اسب بخار",
    fuelSystem: "انژکتوری",
    fuelCapacity: "8.5 لیتر",
    cooling: "هوا خنک",
    installmentEligible: true,
    description:
      "موتورسیکلت دومنظوره تریل آفرودی و شهری، با کمک‌فنرهای تقویت‌شده تلسکوپی مناسب راه‌های کوهستانی و دست‌اندازهای شهری.",
  },
  {
    id: "ehsanrd135",
    name: "احسان - پرواز RD 135",
    brand: "NIROOMOTOR",
    category: "استریت",
    price: "۲۲۸,۰۰۰,۰۰۰ تومان",
    numericPrice: 228000000,
    img: "assets/img/ehsan-rd135.webp",
    badge: "اقتصادی",
    isBestSeller: false,
    available: true,
    engine: "135cc",
    speed: "90 کیلومتر بر ساعت",
    transmission: "۴ دنده دستی",
    brakes: "کاسه‌ای تقویت‌شده",
    power: "9 اسب بخار",
    fuelSystem: "انژکتوری",
    fuelCapacity: "9 لیتر",
    cooling: "هوا خنک",
    installmentEligible: true,
    description:
      "اقتصادی‌ترین و محبوب‌ترین موتورسیکلت کار و تردد روزمره، قطعات یدکی بسیار در دسترس و مصرف سوخت فوق‌العاده پایین.",
  },
];

// ══════════════════════════════════════
// 2. STATE MANAGEMENT
// ══════════════════════════════════════
const state = {
  currentBrand: "all",
  currentCategory: "all",
  inStockOnly: false,
  sortBy: "default",
  searchQuery: "",
  visibleCount: 6,
  wishlist: JSON.parse(localStorage.getItem("niro_wishlist") || "[]"),
  compareList: JSON.parse(localStorage.getItem("niro_compare") || "[]"),
  theme: localStorage.getItem("niro_theme") || "light",
  currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),
};

// Format Persian Currency
const formatPrice = (num) => {
  if (!num || num === 0) return "ناموجود";
  return num.toLocaleString("fa-IR") + " تومان";
};

// ══════════════════════════════════════
// 3. THEME TOGGLE (DARK / LIGHT)
// ══════════════════════════════════════
const initTheme = () => {
  const themeToggleBtn = document.getElementById("btn-toggle-theme");
  const body = document.body;

  if (state.theme === "dark") {
    body.classList.add("dark-theme");
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
  } else {
    body.classList.remove("dark-theme");
    if (themeToggleBtn)
      themeToggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-theme");
      state.theme = isDark ? "dark" : "light";
      localStorage.setItem("niro_theme", state.theme);
      themeToggleBtn.innerHTML = isDark
        ? '<i class="bx bx-sun"></i>'
        : '<i class="bx bx-moon"></i>';
    });
  }
};

// ══════════════════════════════════════
// 4. USER AUTH STATE IN HEADER
// ══════════════════════════════════════
const renderHeaderUser = () => {
  const actionsContainer = document.querySelector(".header-actions");
  const loginBtn = document.getElementById("btn-header-login");
  const existingUserProfile = actionsContainer.querySelector(".user-logged-in");
  if (existingUserProfile) existingUserProfile.remove();

  if (state.currentUser) {
    if (loginBtn) loginBtn.style.display = "none";

    const userChip = document.createElement("div");
    userChip.className = "user-logged-in";
    const displayName =
      state.currentUser.name ||
      state.currentUser.phone ||
      state.currentUser.email ||
      "کاربر گرامی";
    userChip.innerHTML = `
      <button class="btn-user-profile" id="btn-user-menu">
        <i class="bx bx-user-circle"></i>
        <span>${displayName}</span>
        <i class="bx bx-chevron-down"></i>
      </button>
      <div class="user-dropdown" id="user-dropdown-menu">
        <a href="#" id="menu-my-orders"><i class="bx bx-package"></i> پیگیری سفارشات</a>
        <a href="#" id="menu-my-installments"><i class="bx bx-calculator"></i> استعلام اقساط</a>
        <a href="#" id="menu-warranty"><i class="bx bx-shield-quarter"></i> کارت گارانتی</a>
        <button class="btn-logout" id="btn-logout-action"><i class="bx bx-log-out"></i> خروج از حساب</button>
      </div>
    `;
    actionsContainer.appendChild(userChip);

    const menuBtn = userChip.querySelector("#btn-user-menu");
    const dropdown = userChip.querySelector("#user-dropdown-menu");

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
    });

    userChip
      .querySelector("#btn-logout-action")
      .addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        state.currentUser = null;
        renderHeaderUser();
        alert("از حساب کاربری خارج شدید.");
      });
  } else {
    if (loginBtn) loginBtn.style.display = "flex";
  }
};

// ══════════════════════════════════════
// 5. HERO SLIDER ENGINE
// ══════════════════════════════════════
const initHeroSlider = () => {
  const heroSlideEls = document.querySelectorAll(".hero-slide");
  const heroPrevBtn = document.querySelector(".hero-prev");
  const heroNextBtn = document.querySelector(".hero-next");
  const heroTrack = document.querySelector(".hero-track");
  if (!heroSlideEls.length) return;

  // Render hero dots
  let dotsContainer = document.querySelector(".hero-dots");
  if (!dotsContainer) {
    dotsContainer = document.createElement("div");
    dotsContainer.className = "hero-dots";
    heroTrack.appendChild(dotsContainer);
  }
  dotsContainer.innerHTML = "";
  heroSlideEls.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `dot ${idx === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  let heroIndex = 0;
  let heroAutoPlay = null;

  const updateSlideDisplay = () => {
    heroSlideEls.forEach((slide, idx) => {
      slide.classList.toggle("show", idx === heroIndex);
    });
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === heroIndex);
    });
  };

  const goToSlide = (idx) => {
    heroIndex = (idx + heroSlideEls.length) % heroSlideEls.length;
    updateSlideDisplay();
    resetAutoPlay();
  };

  const heroGoNext = () => goToSlide(heroIndex + 1);
  const heroGoPrev = () => goToSlide(heroIndex - 1);

  const resetAutoPlay = () => {
    clearInterval(heroAutoPlay);
    heroAutoPlay = setInterval(heroGoNext, 5000);
  };

  if (heroNextBtn) heroNextBtn.addEventListener("click", heroGoNext);
  if (heroPrevBtn) heroPrevBtn.addEventListener("click", heroGoPrev);

  // Touch Swipe for mobile
  let touchStartX = 0;
  heroTrack.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  heroTrack.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) heroGoPrev();
      if (touchEndX - touchStartX > 50) heroGoNext();
    },
    { passive: true },
  );

  resetAutoPlay();
};

// ══════════════════════════════════════
// 6. BEST SELLER SLIDER
// ══════════════════════════════════════
const initBestSellersSlider = () => {
  const slidesContainer = document.getElementById("best-seller-slides");
  const prevBtn = document.getElementById("best-seller-prev");
  const nextBtn = document.getElementById("best-seller-next");
  if (!slidesContainer) return;

  const bestSellers = productsData.filter((p) => p.isBestSeller);
  slidesContainer.innerHTML = bestSellers
    .map(
      (product) => `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
      <h3 class="product-name">${product.name}</h3>
      <span class="product-price ${!product.available ? "unavailable" : ""}">${product.price}</span>
      <button class="btn-detail" onclick="openProductQuickView('${product.id}')">مشاهده محصول</button>
    </div>
  `,
    )
    .join("");

  let currentTranslate = 0;
  const slideWidth = 320;

  const slideNext = () => {
    const maxTranslate =
      (bestSellers.length - 1) * slideWidth - slidesContainer.clientWidth;
    if (Math.abs(currentTranslate) < maxTranslate) {
      currentTranslate -= slideWidth;
    } else {
      currentTranslate = 0;
    }
    slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
  };

  const slidePrev = () => {
    if (currentTranslate < 0) {
      currentTranslate += slideWidth;
    } else {
      currentTranslate = -(
        (bestSellers.length - 1) * slideWidth -
        slidesContainer.clientWidth
      );
    }
    slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
  };

  if (nextBtn) nextBtn.addEventListener("click", slideNext);
  if (prevBtn) prevBtn.addEventListener("click", slidePrev);
};

// ══════════════════════════════════════
// 7. PRODUCT CATALOG & FILTER SYSTEM
// ══════════════════════════════════════
const renderProductsGrid = () => {
  const gridEl = document.querySelector(".products-grid");
  const showMoreBtnWrap = document.querySelector(".show-more-wrap");
  const filterCountEl = document.querySelector(".filter-count-badge");
  if (!gridEl) return;

  let filtered = productsData.filter((p) => {
    // Brand filter
    if (
      state.currentBrand !== "all" &&
      p.brand.toLowerCase() !== state.currentBrand.toLowerCase()
    ) {
      return false;
    }
    // Category filter
    if (state.currentCategory !== "all" && p.category !== state.currentCategory) {
      return false;
    }
    // Stock filter
    if (state.inStockOnly && !p.available) {
      return false;
    }
    return true;
  });

  // Sorting
  if (state.sortBy === "price-asc") {
    filtered.sort(
      (a, b) =>
        (a.numericPrice || 9999999999) - (b.numericPrice || 9999999999),
    );
  } else if (state.sortBy === "price-desc") {
    filtered.sort((a, b) => (b.numericPrice || 0) - (a.numericPrice || 0));
  } else if (state.sortBy === "engine") {
    filtered.sort(
      (a, b) => parseInt(b.engine || "0") - parseInt(a.engine || "0"),
    );
  }

  if (filterCountEl) {
    filterCountEl.textContent = `نمایش ${filtered.length} موتورسیکلت`;
  }

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div class="no-products-found">
        <i class="bx bx-search-alt"></i>
        <p>موتورسیکلتی با این مشخصات یافت نشد.</p>
        <button onclick="resetFilters()">مشاهده همه محصولات</button>
      </div>
    `;
    if (showMoreBtnWrap) showMoreBtnWrap.style.display = "none";
    return;
  }

  const visibleItems = filtered.slice(0, state.visibleCount);

  gridEl.innerHTML = visibleItems
    .map((product) => {
      const isFav = state.wishlist.includes(product.id);
      const isComparing = state.compareList.includes(product.id);
      let badgeHtml = "";
      if (product.badge === "اقساطی") {
        badgeHtml = '<span class="badge badge-installment">طرح اقساطی</span>';
      } else if (product.badge === "پرفروش") {
        badgeHtml = '<span class="badge badge-special">پرفروش</span>';
      } else if (product.badge === "جدید") {
        badgeHtml = '<span class="badge badge-new">جدید</span>';
      } else if (!product.available) {
        badgeHtml = '<span class="badge badge-out">ناموجود</span>';
      }

      return `
      <div class="prod-item" data-id="${product.id}">
        <div class="prod-actions-overlay">
          <button class="${isFav ? "active-fav" : ""}" title="افزودن به علاقه‌مندی‌ها" onclick="toggleWishlist('${product.id}', event)">
            <i class="bx ${isFav ? "bxs-heart" : "bx-heart"}"></i>
          </button>
          <button title="مقایسه فنی" onclick="toggleCompare('${product.id}', event)">
            <i class="bx ${isComparing ? "bx-check-double" : "bx-git-compare"}"></i>
          </button>
          <button title="مشاهده مشخصات کامل" onclick="openProductQuickView('${product.id}', event)">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>

        <div class="prod-tags">
          <span class="prod-brand">${product.brand}</span>
          <div class="badges-wrap">${badgeHtml}</div>
        </div>

        <div class="img-wrapper" onclick="openProductQuickView('${product.id}')">
          <img src="${product.img}" alt="${product.name}" loading="lazy" />
        </div>

        <h3 class="prod-title" onclick="openProductQuickView('${product.id}')">${product.name}</h3>

        <div class="prod-price-row">
          <div>
            <span class="prod-price ${!product.available ? "unavailable" : ""}">${product.price}</span>
          </div>
          ${
            product.installmentEligible
              ? `<button class="btn-quick-calc" onclick="openInstallmentModalFor('${product.id}', event)">
                  <i class="bx bx-calculator"></i> محاسبه قسط
                </button>`
              : ""
          }
        </div>

        <div class="prod-specs" onclick="openProductQuickView('${product.id}')">
          <div class="spec-item"><span class="spec-label">موتور</span><span class="spec-value">${product.engine}</span></div>
          <div class="spec-item"><span class="spec-label">سرعت</span><span class="spec-value">${product.speed}</span></div>
          <div class="spec-item"><span class="spec-label">ترمز</span><span class="spec-value">${product.brakes}</span></div>
          <div class="spec-item"><span class="spec-label">کلاس</span><span class="spec-value">${product.category}</span></div>
        </div>

        <button class="btn-view-details" onclick="openProductQuickView('${product.id}')">
          <i class="bx bx-info-circle"></i> جزئیات و خرید
        </button>
      </div>
    `;
    })
    .join("");

  // Show more button control
  if (showMoreBtnWrap) {
    if (visibleItems.length < filtered.length) {
      showMoreBtnWrap.style.display = "flex";
    } else {
      showMoreBtnWrap.style.display = "none";
    }
  }
};

window.resetFilters = () => {
  state.currentBrand = "all";
  state.currentCategory = "all";
  state.inStockOnly = false;
  state.sortBy = "default";
  state.visibleCount = 6;

  document.querySelectorAll(".brand-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.brand === "all");
  });
  document.querySelectorAll(".cat-pill").forEach((p) => {
    p.classList.toggle("active", p.dataset.category === "all");
  });
  const stockCheck = document.getElementById("filter-stock");
  if (stockCheck) stockCheck.checked = false;
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "default";

  renderProductsGrid();
};

const initProductFilters = () => {
  // Brand tabs
  document.querySelectorAll(".brand-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".brand-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      state.currentBrand = tab.dataset.brand;
      state.visibleCount = 6;
      renderProductsGrid();
    });
  });

  // Category pills
  document.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document
        .querySelectorAll(".cat-pill")
        .forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      state.currentCategory = pill.dataset.category;
      state.visibleCount = 6;
      renderProductsGrid();
    });
  });

  // Stock checkbox
  const stockCheck = document.getElementById("filter-stock");
  if (stockCheck) {
    stockCheck.addEventListener("change", (e) => {
      state.inStockOnly = e.target.checked;
      state.visibleCount = 6;
      renderProductsGrid();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProductsGrid();
    });
  }

  // Show more button
  const showMoreBtn = document.getElementById("btn-load-more");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      state.visibleCount += 3;
      renderProductsGrid();
    });
  }

  // Click on Brand cards in "برند ها" section
  document.querySelectorAll(".brand-card").forEach((card) => {
    card.addEventListener("click", () => {
      const brand = card.dataset.brand;
      if (brand) {
        state.currentBrand = brand;
        document.querySelectorAll(".brand-tab").forEach((t) => {
          t.classList.toggle(
            "active",
            t.dataset.brand.toLowerCase() === brand.toLowerCase(),
          );
        });
        renderProductsGrid();
        const section = document.getElementById("products-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Click on Category cards in "دسته بندی ها" section
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      if (cat) {
        state.currentCategory = cat;
        document.querySelectorAll(".cat-pill").forEach((p) => {
          p.classList.toggle("active", p.dataset.category === cat);
        });
        renderProductsGrid();
        const section = document.getElementById("products-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

// ══════════════════════════════════════
// 8. LIVE SEARCH WITH INSTANT RESULTS
// ══════════════════════════════════════
const initLiveSearch = () => {
  const headerSearchEl = document.querySelector(".header-search");
  const searchPanelEl = document.querySelector(".search-panel");
  const searchOverlayEl = document.querySelector(".search-overlay");
  const searchPanelCloseEl = document.querySelector(".search-panel-close");
  const searchInputEl = document.querySelector(".search-panel-input input");
  const clearBtn = document.querySelector(".clear-search-btn");
  const resultsContainer = document.getElementById("search-results-container");

  const openSearch = () => {
    searchPanelEl.classList.add("open");
    searchOverlayEl.classList.add("open");
    searchInputEl.focus();
    renderSearchResults(searchInputEl.value.trim());
  };

  const closeSearch = () => {
    searchPanelEl.classList.remove("open");
    searchOverlayEl.classList.remove("open");
  };

  headerSearchEl.addEventListener("click", openSearch);
  searchPanelCloseEl.addEventListener("click", closeSearch);
  searchOverlayEl.addEventListener("click", closeSearch);

  // Keyboard shortcut Ctrl+K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") {
      closeSearch();
      closeAllModals();
    }
  });

  const renderSearchResults = (query) => {
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = `
        <div class="search-result-empty">
          <i class="bx bx-search" style="font-size: 2rem; color: #cbd5e1; display: block; margin-bottom: 8px;"></i>
          برای شروع جستجو، نام مدل (مانند آپاچی، گلکسی، یاماها) یا حجم موتور را تایپ کنید.
        </div>
      `;
      return;
    }

    const q = query.toLowerCase();
    const matches = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.engine.toLowerCase().includes(q),
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-result-empty">
          نتیجه‌ای برای <strong>"${query}"</strong> یافت نشد.
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches
      .map(
        (product) => `
      <div class="search-result-item" onclick="openProductQuickView('${product.id}'); document.querySelector('.search-panel').classList.remove('open'); document.querySelector('.search-overlay').classList.remove('open');">
        <div class="res-info">
          <img src="${product.img}" alt="${product.name}" />
          <div class="res-texts">
            <span class="res-title">${product.name}</span>
            <div class="res-sub">
              <span>برند: ${product.brand}</span>
              <span>•</span>
              <span>کلاس: ${product.category}</span>
              <span>•</span>
              <span>موتور: ${product.engine}</span>
            </div>
          </div>
        </div>
        <div class="res-price">${product.price}</div>
      </div>
    `,
      )
      .join("");
  };

  let debounceTimer = null;
  searchInputEl.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderSearchResults(e.target.value.trim());
    }, 150);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInputEl.value = "";
      renderSearchResults("");
      searchInputEl.focus();
    });
  }
};

// ══════════════════════════════════════
// 9. PRODUCT QUICK VIEW MODAL
// ══════════════════════════════════════
window.openProductQuickView = (productId, event) => {
  if (event) event.stopPropagation();
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("modal-quickview");
  const modalBody = modal.querySelector(".modal-body");

  const isFav = state.wishlist.includes(product.id);
  const isComparing = state.compareList.includes(product.id);

  modalBody.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-gallery">
        <img src="${product.img}" alt="${product.name}" />
        <span class="gallery-brand">برند سازنده: ${product.brand}</span>
      </div>

      <div class="quickview-details">
        <h3 class="qv-title">${product.name}</h3>

        <div class="qv-badges">
          <span class="badge ${product.available ? "badge-installment" : "badge-out"}">${product.available ? "موجود در انبار" : "ناموجود"}</span>
          <span class="badge badge-new">کلاس: ${product.category}</span>
          ${product.badge ? `<span class="badge badge-special">${product.badge}</span>` : ""}
        </div>

        <div class="qv-price-box">
          <span>قیمت روز موتورسیکلت:</span>
          <span class="qv-price">${product.price}</span>
        </div>

        <p style="font-size: 0.85rem; color: #555; line-height: 1.8;">${product.description}</p>

        <div class="qv-specs-table">
          <div class="qv-spec-item"><span class="k">حجم سیلندر</span><span class="v">${product.engine}</span></div>
          <div class="qv-spec-item"><span class="k">توان خروجی</span><span class="v">${product.power}</span></div>
          <div class="qv-spec-item"><span class="k">جعبه دنده</span><span class="v">${product.transmission}</span></div>
          <div class="qv-spec-item"><span class="k">سیستم ترمز</span><span class="v">${product.brakes}</span></div>
          <div class="qv-spec-item"><span class="k">سوخت‌رسانی</span><span class="v">${product.fuelSystem}</span></div>
          <div class="qv-spec-item"><span class="k">ظرفیت باک</span><span class="v">${product.fuelCapacity}</span></div>
          <div class="qv-spec-item"><span class="k">حداکثر سرعت</span><span class="v">${product.speed}</span></div>
          <div class="qv-spec-item"><span class="k">سیستم خنک‌کننده</span><span class="v">${product.cooling}</span></div>
        </div>

        <div class="qv-actions">
          ${
            product.installmentEligible
              ? `<button class="btn-calc-plan" onclick="closeAllModals(); openInstallmentModalFor('${product.id}')">
                  <i class="bx bx-calculator"></i> محاسبه طرح اقساطی
                </button>`
              : ""
          }
          <button class="btn-compare-add" onclick="toggleCompare('${product.id}')">
            <i class="bx ${isComparing ? "bx-check-double" : "bx-git-compare"}"></i>
            ${isComparing ? "در لیست مقایسه" : "افزودن به مقایسه"}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
};

// ══════════════════════════════════════
// 10. INSTALLMENT CALCULATOR LOGIC
// ══════════════════════════════════════
window.openInstallmentModalFor = (productId, event) => {
  if (event) event.stopPropagation();
  const modal = document.getElementById("modal-calculator");
  const bikeSelect = document.getElementById("calc-bike-select");

  if (bikeSelect) {
    bikeSelect.innerHTML = productsData
      .filter((p) => p.installmentEligible && p.numericPrice > 0)
      .map(
        (p) =>
          `<option value="${p.id}" ${p.id === productId ? "selected" : ""}>${p.name} - ${p.price}</option>`,
      )
      .join("");
  }

  updateInstallmentCalculation();
  modal.classList.add("open");
};

const initInstallmentCalculator = () => {
  const bikeSelect = document.getElementById("calc-bike-select");
  const downPaymentSlider = document.getElementById("calc-down-slider");
  const downPaymentDisplay = document.getElementById("calc-down-display");
  const monthButtons = document.querySelectorAll(".month-btn");
  const presetButtons = document.querySelectorAll(".preset-btn");

  let selectedMonths = 12;
  let downPaymentPercent = 40;

  presetButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      presetButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      downPaymentPercent = parseInt(btn.dataset.percent);
      if (downPaymentSlider) downPaymentSlider.value = downPaymentPercent;
      updateInstallmentCalculation();
    });
  });

  if (downPaymentSlider) {
    downPaymentSlider.addEventListener("input", (e) => {
      downPaymentPercent = parseInt(e.target.value);
      presetButtons.forEach((b) => {
        b.classList.toggle(
          "active",
          parseInt(b.dataset.percent) === downPaymentPercent,
        );
      });
      updateInstallmentCalculation();
    });
  }

  monthButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      monthButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedMonths = parseInt(btn.dataset.months);
      updateInstallmentCalculation();
    });
  });

  if (bikeSelect) {
    bikeSelect.addEventListener("change", updateInstallmentCalculation);
  }

  window.updateInstallmentCalculation = () => {
    const bikeId = bikeSelect ? bikeSelect.value : productsData[0].id;
    const bike = productsData.find((p) => p.id === bikeId) || productsData[0];
    const totalPrice = bike.numericPrice || 400000000;

    const downPaymentAmount = Math.round(
      (totalPrice * downPaymentPercent) / 100,
    );
    const loanAmount = totalPrice - downPaymentAmount;

    // Monthly interest rate ~2.2%
    const monthlyRate = 0.022;
    const totalInterest = Math.round(loanAmount * monthlyRate * selectedMonths);
    const totalLoanWithInterest = loanAmount + totalInterest;
    const monthlyInstallment = Math.round(
      totalLoanWithInterest / selectedMonths,
    );
    const grandTotal = downPaymentAmount + totalLoanWithInterest;

    if (downPaymentDisplay) {
      downPaymentDisplay.textContent = `${downPaymentPercent}٪ (${formatPrice(downPaymentAmount)})`;
    }

    const nameEl = document.getElementById("calc-res-bike-name");
    const totalEl = document.getElementById("calc-res-total-price");
    const downEl = document.getElementById("calc-res-down-amount");
    const monthsEl = document.getElementById("calc-res-months");
    const monthlyEl = document.getElementById("calc-res-monthly-pay");
    const grandEl = document.getElementById("calc-res-grand-total");

    if (nameEl) nameEl.textContent = bike.name;
    if (totalEl) totalEl.textContent = formatPrice(totalPrice);
    if (downEl) downEl.textContent = formatPrice(downPaymentAmount);
    if (monthsEl) monthsEl.textContent = `${selectedMonths} ماهه`;
    if (monthlyEl) monthlyEl.textContent = formatPrice(monthlyInstallment);
    if (grandEl) grandEl.textContent = formatPrice(grandTotal);
  };
};

// ══════════════════════════════════════
// 11. MOTORCYCLE COMPARISON TOOL
// ══════════════════════════════════════
window.toggleCompare = (productId, event) => {
  if (event) event.stopPropagation();
  const idx = state.compareList.indexOf(productId);
  if (idx !== -1) {
    state.compareList.splice(idx, 1);
  } else {
    if (state.compareList.length >= 3) {
      alert("حداکثر ۳ موتورسیکلت را می‌توانید همزمان مقایسه فرمایید.");
      return;
    }
    state.compareList.push(productId);
  }
  localStorage.setItem("niro_compare", JSON.stringify(state.compareList));
  updateCompareBadges();
  renderProductsGrid();
};

const updateCompareBadges = () => {
  document.querySelectorAll(".compare-counter").forEach((badge) => {
    badge.textContent = state.compareList.length;
    badge.style.display = state.compareList.length > 0 ? "flex" : "none";
  });
};

const openCompareModal = () => {
  const modal = document.getElementById("modal-compare");
  const container = document.getElementById("compare-content-container");
  if (!modal || !container) return;

  if (state.compareList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #888;">
        <i class="bx bx-git-compare" style="font-size: 3rem; color: #cbd5e1; display: block; margin-bottom: 12px;"></i>
        موتورسیکلتی برای مقایسه انتخاب نشده است. از روی کارت محصولات روی آیکون مقایسه کلیک کنید.
      </div>
    `;
  } else {
    const bikes = state.compareList
      .map((id) => productsData.find((p) => p.id === id))
      .filter(Boolean);

    container.innerHTML = `
      <div class="compare-container">
        <div class="compare-table-wrapper">
          <table class="compare-table">
            <thead>
              <tr>
                <th>مشخصه فنی</th>
                ${bikes
                  .map(
                    (b) => `
                  <th class="bike-head">
                    <button class="btn-remove-col" onclick="toggleCompare('${b.id}'); openCompareModal();" title="حذف">&times;</button>
                    <img src="${b.img}" alt="${b.name}" />
                    <div class="bike-head-name">${b.name}</div>
                    <div class="bike-head-price">${b.price}</div>
                  </th>
                `,
                  )
                  .join("")}
              </tr>
            </thead>
            <tbody>
              <tr><th>برند</th>${bikes.map((b) => `<td>${b.brand}</td>`).join("")}</tr>
              <tr><th>کلاس</th>${bikes.map((b) => `<td>${b.category}</td>`).join("")}</tr>
              <tr><th>حجم موتور</th>${bikes.map((b) => `<td>${b.engine}</td>`).join("")}</tr>
              <tr><th>قدرت موتور</th>${bikes.map((b) => `<td>${b.power}</td>`).join("")}</tr>
              <tr><th>گیربکس</th>${bikes.map((b) => `<td>${b.transmission}</td>`).join("")}</tr>
              <tr><th>سیستم ترمز</th>${bikes.map((b) => `<td>${b.brakes}</td>`).join("")}</tr>
              <tr><th>حداکثر سرعت</th>${bikes.map((b) => `<td>${b.speed}</td>`).join("")}</tr>
              <tr><th>سیستم سوخت</th>${bikes.map((b) => `<td>${b.fuelSystem}</td>`).join("")}</tr>
              <tr><th>حجم باک</th>${bikes.map((b) => `<td>${b.fuelCapacity}</td>`).join("")}</tr>
              <tr><th>سیستم خنک‌کننده</th>${bikes.map((b) => `<td>${b.cooling}</td>`).join("")}</tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  modal.classList.add("open");
};

// ══════════════════════════════════════
// 12. WISHLIST / FAVORITES
// ══════════════════════════════════════
window.toggleWishlist = (productId, event) => {
  if (event) event.stopPropagation();
  const idx = state.wishlist.indexOf(productId);
  if (idx !== -1) {
    state.wishlist.splice(idx, 1);
  } else {
    state.wishlist.push(productId);
  }
  localStorage.setItem("niro_wishlist", JSON.stringify(state.wishlist));
  updateWishlistBadges();
  renderProductsGrid();
};

const updateWishlistBadges = () => {
  document.querySelectorAll(".wishlist-counter").forEach((badge) => {
    badge.textContent = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? "flex" : "none";
  });
};

const openWishlistModal = () => {
  const modal = document.getElementById("modal-wishlist");
  const body = modal.querySelector(".modal-body");
  if (!modal || !body) return;

  if (state.wishlist.length === 0) {
    body.innerHTML = `
      <div class="wishlist-empty">
        <i class="bx bx-heart"></i>
        <p>لیست علاقه‌مندی‌های شما خالی است.</p>
      </div>
    `;
  } else {
    const bikes = state.wishlist
      .map((id) => productsData.find((p) => p.id === id))
      .filter(Boolean);
    body.innerHTML = `
      <div class="wishlist-items-list">
        ${bikes
          .map(
            (b) => `
          <div class="wishlist-row">
            <div class="item-left" onclick="closeAllModals(); openProductQuickView('${b.id}')" style="cursor: pointer;">
              <img src="${b.img}" alt="${b.name}" />
              <div>
                <div class="item-name">${b.name}</div>
                <div style="font-size: 0.78rem; color: #888;">${b.category} • ${b.engine}</div>
              </div>
            </div>
            <div class="item-right">
              <span class="item-price">${b.price}</span>
              <button class="btn-del-fav" onclick="toggleWishlist('${b.id}'); openWishlistModal();" title="حذف"><i class="bx bx-trash"></i></button>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  }

  modal.classList.add("open");
};

// ══════════════════════════════════════
// 13. BRANCH LOCATOR DATA & MODAL
// ══════════════════════════════════════
const branchesData = [
  {
    city: "tehran",
    name: "شعبه مرکزی شهید بهشتی",
    address:
      "تهران، خیابان بهشتی، قبل از چهارراه سهروردی، نبش کوچه لیلا، پلاک ۶۹",
    phone: "۰۲۱-۴۷۷۶۲",
    type: "مرکزی و نمایشگاه",
  },
  {
    city: "tehran",
    name: "نمایندگی هلال احمر (میدان رازی)",
    address: "تهران، میدان رازی (گمرک)، خیابان هلال احمر، پلاک ۱۱۸",
    phone: "۰۲۱-۵۵۴۱۸۰۹۰",
    type: "فروش و خدمات",
  },
  {
    city: "tehran",
    name: "نمایندگی شریعتی",
    address: "تهران، خیابان دکتر شریعتی، بالاتر از پل رومی، پلاک ۱۸۲۰",
    phone: "۰۲۱-۲۲۰۰۵۵۱۱",
    type: "نمایشگاه تخصصی یاماها",
  },
  {
    city: "isfahan",
    name: "نمایندگی اصفهان (چهارباغ)",
    address: "اصفهان، خیابان چهارباغ بالا، نبش کوچه هدایتی، مجتمع نیرو موتور",
    phone: "۰۳۱-۳۶۶۱۴۴۸۸",
    type: "فروش و خدمات پس از فروش",
  },
  {
    city: "shiraz",
    name: "نمایندگی شیراز",
    address: "شیراز، بلوار امیرکبیر، روبروی شرکت نفت، پلاک ۲۳۰",
    phone: "۰۷۱-۳۸۳۰۱۱۲۲",
    type: "فروش و خدمات سریع",
  },
  {
    city: "mashhad",
    name: "نمایندگی مشهد مقدس",
    address: "مشهد، بلوار شهید قرنی، نبش قرنی ۲۴، ساختمان نیرو موتور",
    phone: "۰۵۱-۳۷۲۶۹۰۹۰",
    type: "مرکز خدمات و قطعات",
  },
  {
    city: "tabriz",
    name: "نمایندگی تبریز",
    address: "تبریز، خیابان آزادی، بعد از چهارراه لاله، پلاک ۴۱۰",
    phone: "۰۴۱-۳۴۷۸۱۱۵۵",
    type: "فروش و تحویل فوری",
  },
];

const renderBranches = (city = "all") => {
  const container = document.getElementById("branches-list-container");
  if (!container) return;

  const filtered =
    city === "all"
      ? branchesData
      : branchesData.filter((b) => b.city === city);

  container.innerHTML = filtered
    .map(
      (b) => `
    <div class="branch-card-item">
      <h4>${b.name}</h4>
      <p><i class="bx bx-map"></i> ${b.address}</p>
      <div class="branch-meta">
        <span class="badge-type">${b.type}</span>
        <a href="tel:${b.phone.replace(/[^0-9]/g, "")}" class="phone-link"><i class="bx bx-phone"></i> ${b.phone}</a>
      </div>
    </div>
  `,
    )
    .join("");
};

const initBranchLocator = () => {
  document.querySelectorAll(".branch-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".branch-tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderBranches(btn.dataset.city);
    });
  });
};

// ══════════════════════════════════════
// 14. MODALS MANAGEMENT
// ══════════════════════════════════════
window.closeAllModals = () => {
  document.querySelectorAll(".modal-backdrop").forEach((m) => {
    m.classList.remove("open");
  });
};

const initModals = () => {
  // Close buttons
  document.querySelectorAll(".modal-close-btn").forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  // Click outside to close
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeAllModals();
    });
  });

  // Nav links to modals
  const navBranches = document.getElementById("nav-branches");
  if (navBranches) {
    navBranches.addEventListener("click", () => {
      renderBranches("all");
      document.getElementById("modal-branches").classList.add("open");
    });
  }

  const navServices = document.getElementById("nav-services");
  if (navServices) {
    navServices.addEventListener("click", () => {
      document.getElementById("modal-warranty").classList.add("open");
    });
  }

  const navEmergency = document.querySelectorAll(".btn-open-emergency");
  navEmergency.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("modal-emergency").classList.add("open");
    });
  });

  const navCalculator = document.getElementById("nav-calculator");
  if (navCalculator) {
    navCalculator.addEventListener("click", () => {
      openInstallmentModalFor(productsData[0].id);
    });
  }

  // Quick access banners
  const quickBanners = document.querySelectorAll(".quick-card");
  if (quickBanners[0]) {
    quickBanners[0].addEventListener("click", () => {
      document
        .getElementById("products-section")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
  if (quickBanners[1]) {
    quickBanners[1].addEventListener("click", () => {
      renderBranches("all");
      document.getElementById("modal-branches").classList.add("open");
    });
  }
  if (quickBanners[2]) {
    quickBanners[2].addEventListener("click", () => {
      document.getElementById("modal-appointment").classList.add("open");
    });
  }

  // Installment banner click
  const installmentBanner = document.querySelector(".installment-plan");
  if (installmentBanner) {
    installmentBanner.style.cursor = "pointer";
    installmentBanner.addEventListener("click", () => {
      openInstallmentModalFor(productsData[0].id);
    });
  }

  // Wishlist & Compare modal triggers
  const btnWishlist = document.getElementById("btn-open-wishlist");
  if (btnWishlist) btnWishlist.addEventListener("click", openWishlistModal);

  const btnCompare = document.getElementById("btn-open-compare");
  if (btnCompare) btnCompare.addEventListener("click", openCompareModal);
};

// ══════════════════════════════════════
// 15. MOBILE DRAWER & RESPONSIVE
// ══════════════════════════════════════
const initMobileDrawer = () => {
  const openBtn = document.getElementById("btn-open-drawer");
  const closeBtn = document.getElementById("btn-close-drawer");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("drawer-backdrop");

  const openDrawer = () => {
    drawer.classList.add("open");
    backdrop.classList.add("open");
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  };

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  // Accordion inside mobile drawer
  const accordionToggle = document.getElementById("drawer-cat-toggle");
  const accordionContent = document.getElementById("drawer-cat-accordion");
  if (accordionToggle && accordionContent) {
    accordionToggle.addEventListener("click", () => {
      accordionContent.classList.toggle("open");
    });
  }
};

// ══════════════════════════════════════
// 16. SEO ACCORDION SPOILER
// ══════════════════════════════════════
const initSeoSpoiler = () => {
  const toggleBtn = document.getElementById("btn-toggle-seo");
  const content = document.getElementById("seo-expandable-content");
  if (!toggleBtn || !content) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = content.classList.toggle("expanded");
    toggleBtn.classList.toggle("open", isExpanded);
    toggleBtn.querySelector("span").textContent = isExpanded
      ? "بستن راهنمای خرید"
      : "مشاهده بیشتر راهنمای خرید";
  });
};

// ══════════════════════════════════════
// 17. GO TO TOP & FLOATING ACTIONS
// ══════════════════════════════════════
const initScrollEffects = () => {
  const goToTopBtn = document.querySelector(".go-to-top");
  if (!goToTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        goToTopBtn.classList.add("show");
      } else {
        goToTopBtn.classList.remove("show");
      }
    },
    { passive: true },
  );

  goToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

// ══════════════════════════════════════
// INITIALIZE APPLICATION
// ══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeaderUser();
  initHeroSlider();
  initBestSellersSlider();
  renderProductsGrid();
  initProductFilters();
  initLiveSearch();
  initInstallmentCalculator();
  updateCompareBadges();
  updateWishlistBadges();
  initBranchLocator();
  initModals();
  initMobileDrawer();
  initSeoSpoiler();
  initScrollEffects();
});
