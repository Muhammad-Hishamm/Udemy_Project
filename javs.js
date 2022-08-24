let searchBtn = document.querySelector(".nav-btn");
let searchInp = document.getElementById("search-input");
let courses = [];
let fetchData = async () => {
  let data = await fetch("http://localhost:3000/courses");
  let course = await data.json();
  return course;
};

courses = fetchData();
console.log(courses);

// <div class="course-div">
// <img src=${course.image} alt=${course.title}/>
// <div class="course-description">
// <h4>${course.title}</h4>
// <div class="author">${course.author}</div>
// <div class="rating"> ${course.rating}
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fas fa-star-half-alt"></i>
// </div>
// (${course.people})
// <h4>E£${course.price}</h4>
// </div>


let setViewedCourses = (currentCourses) => {
  let coursesContainer = document.querySelector(".swiper-slide");
  coursesContainer.innerHTML = "";
  for (let course of currentCourses) {
    let item = document.createElement("div");
    item.classList.add("one-course");
    item.innerHTML = `
          <div class = "course-div">
            <img src = "${course.image}" alt="${course.title}" class="course-img" />
            <div class = "course-description">
            <h4>${course.title}</h4>
            <span class = "course-author">${course.author}</span>
            <div class = "data-row">
            <span class = "course-rating"> ${course.rating}</span>
            <span class = "stars">
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star"></i>
            <i class = "fa-solid fa-star-half-stroke"></i>
            <\span>
            <div class = "price-container">
            <span class = "course-price">${course.price}</span><del>${course.price}</del>
            </div>
            </div>
            `;

    coursesContainer.appendChild(item);
  }
};

let onSearch = (event) => {
  event.preventDefault();
  let inputElement = document.getElementsByTagName("input");
  let searchValue = inputElement[0].value;
  console.log(searchValue);
  if (searchValue.trim().length === 0) {
    setViewedCourses(courses);
    return;
  }
  let filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchValue)
  );
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
};


searchBtn.addEventListener('click', onSearch);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});