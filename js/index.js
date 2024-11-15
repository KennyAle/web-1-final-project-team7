//slider
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.getElementById("testimonials");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  const updateTestimonials = () => {
    const width = testimonials.clientWidth;
    testimonials.style.transform = `translateX(-${currentIndex * width}px)`;
  };

  nextButton.addEventListener("click", function () {
    if (currentIndex < testimonials.children.length - 1) {
      currentIndex++;
      updateTestimonials();
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateTestimonials();
    }
  });

  window.addEventListener("resize", updateTestimonials);
});
