$(document).ready(function () {
  // 1elemen1: animasi pas hover button contactme sama viewwork
  $(".btn-primary").hover(
    function () {
      $(this).animate({ letterSpacing: "+=4px" }, 300);
    },
    function () {
      $(this).animate({ letterSpacing: "2px" }, 300);
    }
  );
  $(".btn-secondary").hover(
    function () {
      $(this).animate({ letterSpacing: "+=4px" }, 300);
    },
    function () {
      $(this).animate({ letterSpacing: "2px" }, 300);
    }
  );

  // elemen2: animasi pas hover navbar
  $("nav ul li a").hover(
    function () {
    
      $(this).css("border-bottom", "2px solid #9b9b9b");
    },
    function () {
      $(this).css("border-bottom", "1px solid transparent");
    }
  );

  // elemen3: smooth scroll pas klik navbar
  $("nav ul li a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 60,
      },
      900
    );
  });

  // elemet4: animasi pas hover card di projetds
  $(".project-card").hover(
    function () {
      $(this).animate({ padding: "2.5rem" }, 200);
      $(this).css("box-shadow", "0 0 20px rgba(77, 235, 212, 0.2)");
    },
    function () {
      $(this).animate({ padding: "2rem" }, 200);
      $(this).css("box-shadow", "0 0 10px rgba(77, 235, 212, 0.05)");
    }
  );

  // element5: animasi pas hover icon sosmed
  $(".socials a").hover(
    function () {
      $(this).animate({ top: "-4px" }, 150);
    },
    function () {
      $(this).animate({ top: "0px" }, 150);
    }
  );
  $(".socials a").css("position", "relative");
});
