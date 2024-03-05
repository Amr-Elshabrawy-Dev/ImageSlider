/* --------- Get Slider Image As Array -------- */
const sliderImage = document.querySelectorAll(".slider-img");

/* ---------- Get Pagination Element ---------- */
const pagination = document.querySelector(".pagination");

/* ----------- Get Number Of Sliders ---------- */
const slideCount = sliderImage.length;

/* ------------- Set Current Slide ------------ */
let currentSlide = 1;

/* --------- Get Slide Number Element --------- */
const slideNumber = document.querySelector(".slide-number");

/* --------- Previous And Next Button --------- */
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

/* - Handle Click On Previous And Next Button - */
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

/* ------- Create Pagination List Element ------ */
const paginationList = document.createElement("ul");
paginationList.setAttribute("id", "pagination-ul");

/* -- Create List Items Based On Slide Count -- */ 
for (let i = 1; i <= slideCount; i++) {
  /* -------- Create The Item Li Element -------- */
  const paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.textContent = i;

  /* -------- Append Items To The Ul List ------- */
  paginationList.appendChild(paginationItem);
}

/* --------- Add Pagination List To Page -------- */
pagination.appendChild(paginationList);

/* ------ Get New Pagination Item Elements ------ */
const paginationNewItem = document.querySelectorAll("#pagination-ul li");

/* --------- Loop Through All Li Item --------- */
for (const element of paginationNewItem) {
  element.addEventListener("click", () => {
    currentSlide = parseInt(element.getAttribute("data-index"));
    theChecker();
  });
}

/* -------- Create The Checker Function ------- */
function theChecker() {
  /* ---------- Set The Slide Number ---------- */
  slideNumber.textContent = `${currentSlide}/${slideCount}`;

  /* -------- remove all active classes --------*/
  removeActiveClass(sliderImage, "active");
  removeActiveClass(paginationNewItem, "active");

  /* ---- Set Active Class On images Slide ---- */
  sliderImage[currentSlide - 1].classList.add("active");

  /* -- Set Active Class On Pagination Items -- */
  paginationNewItem[currentSlide - 1].classList.add("active");

  /* --- Check If Current Slide Is The First -- */
  if (currentSlide === 1) {
    /* - Add Disabled Class On Previous Button -*/
    prevBtn.classList.add("disabled");
  } else {
    /* - Remove Disabled Class From Previous Button -*/
    prevBtn.classList.remove("disabled");
  }

  /* --- Check If Current Slide Is The Last -- */
  if (currentSlide === slideCount) {
    /* - Add Disabled Class On next Button -*/
    nextBtn.classList.add("disabled");
  } else {
    /* - Remove Disabled Class From next Button -*/
    nextBtn.classList.remove("disabled");
  }
}

/*--------- remove all active classes ---------*/
  function removeActiveClass(items, className) {
    for (const item of items) {
      item.classList.remove(className);
    }
  }

/* ------- Trigger The Checker Function ------- */
theChecker();

/* ---------- Previous Slide Function --------- */
function prevSlide() {
  if (!this.classList.contains("disabled")) {
    currentSlide--;
    theChecker();
  }
}

/* ------------ Next Slide Function ----------- */
function nextSlide() {
  if (!this.classList.contains("disabled")) {
    currentSlide++;
    theChecker();
  }
}

/* --------------- Get Date Year -------------- */
const year = new Date().getFullYear();

/* --------- Set Date Year In The Dom --------- */
document.getElementById("year").textContent = year;
