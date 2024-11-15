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


  // Let's Talk Section 
  function toggleDisabled(inputId, checkboxId) {
    const inputElement = document.getElementById(inputId)
    const checkboxElement = document.getElementById(checkboxId)

    checkboxElement.addEventListener('change', function () {
      inputElement.disabled = checkboxElement.checked
    })
  }

  toggleDisabled('event_date', 'event_date_not_decided');
  toggleDisabled('event_time', 'event_time_not_decided');


  const radioBtn = document.querySelectorAll('.radioText input[type="radio"]')
  const textInputs = document.querySelectorAll('.contactInputs .formInput')

  function hideInputs() {
    textInputs.forEach(input => input.style.display = 'none')
  }

  radioBtn.forEach(radio => {
    radio.addEventListener('change', () => {
      hideInputs()
      const relatedInput = document.getElementById('contact_detail_' + radio.value)
      if (relatedInput) {
        relatedInput.style.display = 'block'
      }
    })
  })
});
