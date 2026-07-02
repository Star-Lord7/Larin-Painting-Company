(function ($) {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("sticky-top");
    } else {
      $(".navbar").removeClass("sticky-top");
    }
  });

  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 40) {
        $(".company-logo").addClass("logo-hidden");
      } else {
        $(".company-logo").removeClass("logo-hidden");
      }
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });
})(jQuery);

function sendRequest() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const project = document.getElementById("message").value;

  const method = document.querySelector(
    'input[name="contactMethod"]:checked',
  ).value;

  const text = `New Painting Request

My Name: ${name}

My Phone: ${phone}

Service: ${service}

Project:
${project}`;

  if (method === "whatsapp") {
    window.open(
      `https://wa.me/16125942266?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  } else if (method === "email") {
    const subject = "Painting Service Request";

    window.location.href = `mailto:info@larinpainting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  } else if (method === "sms") {
    window.location.href = `sms:+16125942266?body=${encodeURIComponent(text)}`;
  }
}
