let searchBtn = document.querySelector(".nav-btn");
let searchInp = document.getElementById("search-input");
let courses;
let fetchData = async () => {
  let data = await fetch("http://localhost:3000/courses");
  let course = await data.json();
  courses = await course;
  setViewedCourses(courses);
};
fetchData();

let setViewedCourses = (currentCourses) => {
  let coursesContainer = document.querySelector(".swiper-wrapper");
  coursesContainer.innerHTML = "";

  for (let course of currentCourses) {
    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    let item = document.createElement("div");
    item.classList.add("one-course");
    item.innerHTML = `
          <div class = "course-div">
            <img src = "${course.image}" alt="${course.title}" class="course-img" />
            </div>
            <div class = "course-description">
            <h4 class ="one-course-header">${course.title}</h4>
            <span class = "course-author">${course.author}</span>
            <div class = "data-row">
            <span class = "course-rating"> ${course.rating}</span>
            <span class = "stars">
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star-half-stroke"></i>
            </span>
            <div class = "price-container">
            <span class = "course-price">${course.price}</span><del>${course.price}</del>
            </div>
            </div>
            `;
    slide.appendChild(item);
    coursesContainer.appendChild(slide);
  }
  swiper();
};

let onSearch = (event) => {
  event.preventDefault();
  let inputElement = document.getElementsByTagName("input");
  let searchValue = inputElement[0].value;
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
  if (searchValue.trim().length === 0) {
    setViewedCourses(courses);
    return;
  }

  let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
};

searchBtn.addEventListener("click", onSearch);

function swiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    observer: true,
    observeParents: true,

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
}