// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //Toggle Icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //Toggle Visibility of body
    groupBody.classList.toggle("open");

    //Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    // console.log(otherGroups);
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// Mobile Menu Hamburger Button
// let hamburgerMenu = document.getElementsByClassName("mobile-menu");
// hamburgerMenu.addEventListener("click", setActiveHamMenu());

// function setActiveHamMenu() {
//   let activeClass = document.getElementsByClassName("active");
//   activeClass.className.toggle("active");
// }
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamburgerBtn.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
