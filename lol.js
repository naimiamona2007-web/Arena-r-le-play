window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});

// شريط التنقل
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// تغيير لون شريط التنقل عند التمرير
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// علامات التبويب في قسم القوانين
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // إزالة النشاط من جميع الأزرار والمحتويات
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // إضافة النشاط للزر والمحتوى المحدد
    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// نسخ عنوان السيرفر
const copyBtn = document.querySelector(".copy-btn");
const serverAddress = document.querySelector(".address-box code");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(serverAddress.textContent).then(() => {
    // تغيير الأيقونة مؤقتاً للإشارة إلى النسخ
    const originalIcon = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    copyBtn.style.background = "#4CAF50";

    setTimeout(() => {
      copyBtn.innerHTML = originalIcon;
      copyBtn.style.background = "";
    }, 2000);
  });
});

// تأثيرات التمرير للعناصر
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// مراقبة العناصر لإضافة تأثيرات الظهور
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".about-feature, .feature-card, .gallery-item, .rule-item, .step"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// تأثيرات الجسيمات الخلفية (محاكاة)
function createParticles() {
  const heroBg = document.querySelector(".hero-particles");
  if (!heroBg) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = Math.random() * 5 + 2 + "px";
    particle.style.height = particle.style.width;
    particle.style.background = "rgba(255, 255, 255, 0.3)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      Math.random() * 10 + 10
    }s infinite ease-in-out`;
    particle.style.animationDelay = Math.random() * 5 + "s";
    heroBg.appendChild(particle);
  }
}

// تهيئة تأثيرات الموقع
document.addEventListener("DOMContentLoaded", () => {
  createParticles();

  // إضافة النشاط لرابط الصفحة الحالية
  const currentSection = window.location.hash || "#home";
  const currentLink = document.querySelector(
    `.nav-link[href="${currentSection}"]`
  );
  if (currentLink) {
    currentLink.classList.add("active");
  }

  // تحديث الروابط النشطة أثناء التمرير
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
