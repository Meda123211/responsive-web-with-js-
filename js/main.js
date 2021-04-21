const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const hideVideo = document.getElementById("popup");
const closeBtn = document.getElementById("popup-close");
const Playbtn = document.querySelectorAll(".islands__video-content");

Playbtn.forEach((b) =>
  b.addEventListener("click", () => {
    hideVideo.classList.add("show-popup");
  })
);
function closeVideo() {
  closeBtn.addEventListener("click", () => {
    hideVideo.classList.remove("show-popup");
  });
}
closeVideo();

let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});
var galleryTop = new Swiper(".gallery-top", {
  thumbs: {
    swiper: galleryThumbs,
  },
});
