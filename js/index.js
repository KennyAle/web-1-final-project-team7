//slider
const slides = [
  ["Carla is the best! She made me the night's brightest star! She stayed with me the whole wedding ensuring I always looked and felt wonderful!!", "Janny.png"],
  ["Carla Beauty's makeup for my photoshoot was outstanding! Their expertise and attention to detail made me look perfect in every shot. Highly recommend!", "Ingrid.png"],
  ["Carla Beauty's party makeup service was amazing! The makeup lasted all night, keepping me flawless until the end. Thank you, Carla for an unforgettable experience!", "Marcela.png"]
]

document.addEventListener("DOMContentLoaded", function () {
  const testimony = document.getElementById("testimony");
  const testimonyImg = document.getElementById("testimony-img");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;
  let autoSlide

  function slideChange(index) {
    testimony.classList.add('fade-out')
    testimonyImg.classList.add('fade-out')

    setTimeout(() => {
      currentIndex = index
      testimony.innerHTML = slides[currentIndex][0]
      testimonyImg.src = `img/index/${slides[currentIndex][1]}`

      testimony.classList.remove('fade-out')
      testimonyImg.classList.remove('fade-out')
      testimony.classList.add('fade-in')
      testimonyImg.classList.add('fade-in')

      setTimeout(() => {
        testimony.classList.remove('fade-in')
        testimonyImg.classList.remove('fade-in')
      }, 300)
    }, 300)
  }

  function startSlider() {
    autoSlide = setInterval(() => {
      let nextSlide = currentIndex + 1
      if (nextSlide > slides.length - 1) {
        nextSlide = 0
      }
      slideChange(nextSlide)
    }, 2000);
  }

  function stopSlider() {
    clearInterval(autoSlide)
  }

  nextButton.addEventListener("click", () => {
    stopSlider()
    let nextSlide = currentIndex + 1
    if (nextSlide > slides.length - 1) {
      nextSlide = 0
    }
    slideChange(nextSlide)
    startSlider()
  });

  prevButton.addEventListener("click", () => {
    stopSlider()
    let nextSlide = currentIndex - 1
    if (nextSlide < 0) {
      nextSlide = slides.length - 1
    }
    slideChange(nextSlide)
    startSlider()
  });

startSlider()
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
