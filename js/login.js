"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const themeToggleBtn = document.getElementById("btn-toggle-theme");
  const savedTheme = localStorage.getItem("niro_theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      localStorage.setItem("niro_theme", isDark ? "dark" : "light");
      themeToggleBtn.innerHTML = isDark
        ? '<i class="bx bx-sun"></i>'
        : '<i class="bx bx-moon"></i>';
    });
  }

  // Tabs switching
  const tabOtp = document.getElementById("tab-otp");
  const tabPassword = document.getElementById("tab-password");
  const formOtp = document.getElementById("form-otp");
  const formPassword = document.getElementById("form-password");

  tabOtp.addEventListener("click", () => {
    tabOtp.classList.add("active");
    tabPassword.classList.remove("active");
    formOtp.style.display = "flex";
    formPassword.style.display = "none";
  });

  tabPassword.addEventListener("click", () => {
    tabPassword.classList.add("active");
    tabOtp.classList.remove("active");
    formOtp.style.display = "none";
    formPassword.style.display = "flex";
  });

  // OTP State
  const otpStep1 = document.getElementById("otp-step-1");
  const otpStep2 = document.getElementById("otp-step-2");
  const inpMobile = document.getElementById("inp-mobile");
  const btnSendOtp = document.getElementById("btn-send-otp");
  const errorStep1 = document.getElementById("error-step-1");
  const errorStep2 = document.getElementById("error-step-2");
  const inpOtpCode = document.getElementById("inp-otp-code");
  const displayMockCode = document.getElementById("display-mock-code");
  const timerCount = document.getElementById("otp-timer-count");
  const btnResend = document.getElementById("btn-resend");
  const btnChangeMobile = document.getElementById("btn-change-mobile");

  let currentOtp = "1234";
  let countdownTimer = null;
  let remainingSeconds = 120;

  const startCountdown = () => {
    clearInterval(countdownTimer);
    remainingSeconds = 120;
    btnResend.disabled = true;

    countdownTimer = setInterval(() => {
      remainingSeconds--;
      const mins = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
      const secs = String(remainingSeconds % 60).padStart(2, "0");
      timerCount.textContent = `${mins}:${secs}`;

      if (remainingSeconds <= 0) {
        clearInterval(countdownTimer);
        btnResend.disabled = false;
        timerCount.textContent = "۰۰:۰۰";
      }
    }, 1000);
  };

  const generateOtp = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    currentOtp = code;
    if (displayMockCode) displayMockCode.textContent = code;
    return code;
  };

  // Step 1: Send OTP
  btnSendOtp.addEventListener("click", () => {
    errorStep1.textContent = "";
    let mobile = inpMobile.value.trim();

    // Convert Persian digits to English
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    persianDigits.forEach((digit, i) => {
      mobile = mobile.replace(new RegExp(digit, "g"), i);
    });

    const mobileRegex = /^09\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      errorStep1.textContent =
        "لطفاً یک شماره همراه معتبر ۱۱ رقمی وارد نمایید (مثال: 09123456789).";
      return;
    }

    generateOtp();
    otpStep1.style.display = "none";
    otpStep2.style.display = "block";
    inpOtpCode.value = "";
    inpOtpCode.focus();
    startCountdown();
  });

  // Resend OTP
  btnResend.addEventListener("click", () => {
    generateOtp();
    startCountdown();
    errorStep2.textContent = "";
  });

  // Change Mobile button
  btnChangeMobile.addEventListener("click", () => {
    clearInterval(countdownTimer);
    otpStep2.style.display = "none";
    otpStep1.style.display = "block";
    inpMobile.focus();
  });

  // Step 2: Verify OTP
  formOtp.addEventListener("submit", (e) => {
    e.preventDefault();
    errorStep2.textContent = "";
    let enteredCode = inpOtpCode.value.trim();

    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    persianDigits.forEach((digit, i) => {
      enteredCode = enteredCode.replace(new RegExp(digit, "g"), i);
    });

    if (enteredCode !== currentOtp && enteredCode !== "1234") {
      errorStep2.textContent =
        "کد وارد شده صحیح نمی‌باشد. لطفاً مجدداً بررسی فرمایید.";
      return;
    }

    const mobile = inpMobile.value.trim();
    const user = {
      phone: mobile,
      name: `کاربر نیرو موتور (${mobile.slice(-4)})`,
      token: "mock-token-" + Date.now(),
      loggedInAt: new Date().toISOString(),
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("ورود با موفقیت انجام شد. به خانواده بزرگ نیرو موتور خوش آمدید!");
    window.location.href = "index.html";
  });

  // Form 2: Email and password login
  const inpEmail = document.getElementById("inp-email");
  const inpPassword = document.getElementById("inp-password");
  const errorPassword = document.getElementById("error-password");

  formPassword.addEventListener("submit", (e) => {
    e.preventDefault();
    errorPassword.textContent = "";

    const email = inpEmail.value.trim();
    const password = inpPassword.value.trim();

    if (!email) {
      errorPassword.textContent = "لطفاً ایمیل خود را وارد کنید.";
      return;
    }
    if (password.length < 4) {
      errorPassword.textContent = "رمز عبور باید حداقل ۴ کاراکتر باشد.";
      return;
    }

    const user = {
      email: email,
      name: email.split("@")[0],
      token: "mock-token-" + Date.now(),
      loggedInAt: new Date().toISOString(),
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("ورود با موفقیت انجام شد.");
    window.location.href = "index.html";
  });
});
