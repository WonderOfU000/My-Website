function showSection(sectionId) {
  // Hide the landing screen and show the main content
  document.getElementById("landing-screen").style.display = "none";
  document.getElementById("navbar").classList.remove("d-none");
  document.querySelector("header").classList.remove("d-none");
  document.querySelector("main").classList.remove("d-none");
  document.querySelector("footer").classList.remove("d-none");

  // Show the selected section
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
      setTimeout(() => {
        section.classList.add("active");
      }, 50);
    } else {
      section.classList.remove("active");
      setTimeout(() => {
        section.style.display = "none";
      }, 500);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
