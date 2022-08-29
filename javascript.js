let searchBtn     = document.querySelector(".nav-btn");
let pythonbtn     = document.querySelector(".python");
let excelbtn      = document.querySelector(".excel");
let webbtn        = document.querySelector(".web");
let javascriptbtn = document.querySelector(".javascript");
let datascincebtn = document.querySelector(".datascince");
let awsbtn        = document.querySelector(".aws");
let drawingbtn    = document.querySelector(".drawing");
let searchInp     = document.getElementById("search-input");
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

let onpython=(event)=>{
  document.getElementById('headerpython').style.display = "block";
  document.getElementById('subjectpython').style.display = "block";
  document.getElementById('headerexcel').style.display = "none";
  document.getElementById('subjectexcel').style.display = "none";
  document.getElementById('headerjavascript').style.display = "none";
  document.getElementById('subjectjavascript').style.display = "none";
  document.getElementById('headerweb').style.display = "none";
  document.getElementById('subjectweb').style.display = "none";
  document.getElementById('headeraws').style.display = "none";
  document.getElementById('subjectaws').style.display = "none";
  document.getElementById('headerdrawing').style.display = "none";
  document.getElementById('subjectdrawing').style.display = "none";
  document.getElementById('headerdata').style.display = "none";
  document.getElementById('subjectdata').style.display = "none";
  event.preventDefault();
  let searchValue = "python";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
  let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });  
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}
let onexcel=(event)=>{
  document.getElementById('headerpython').style.display = "none";
  document.getElementById('subjectpython').style.display = "none";
  document.getElementById('headerexcel').style.display = "block";
  document.getElementById('subjectexcel').style.display = "block";
  document.getElementById('headerjavascript').style.display = "none";
  document.getElementById('subjectjavascript').style.display = "none";
  document.getElementById('headerweb').style.display = "none";
  document.getElementById('subjectweb').style.display = "none";
  document.getElementById('headeraws').style.display = "none";
  document.getElementById('subjectaws').style.display = "none";
  document.getElementById('headerdrawing').style.display = "none";
  document.getElementById('subjectdrawing').style.display = "none";
  document.getElementById('headerdata').style.display = "none";
  document.getElementById('subjectdata').style.display = "none";
  event.preventDefault();
  let searchValue = "excel";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
    let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}

let onweb=(event)=>{
  document.getElementById('headerpython').style.display = "none";
  document.getElementById('subjectpython').style.display = "none";
  document.getElementById('headerexcel').style.display = "none";
  document.getElementById('subjectexcel').style.display = "none";
  document.getElementById('headerjavascript').style.display = "none";
  document.getElementById('subjectjavascript').style.display = "none";
  document.getElementById('headerweb').style.display = "block";
  document.getElementById('subjectweb').style.display = "block";
  document.getElementById('headeraws').style.display = "none";
  document.getElementById('subjectaws').style.display = "none";
  document.getElementById('headerdrawing').style.display = "none";
  document.getElementById('subjectdrawing').style.display = "none";
  document.getElementById('headerdata').style.display = "none";
  document.getElementById('subjectdata').style.display = "none";
  event.preventDefault();
  let searchValue = "web";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
    let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}
let onjavascript=(event)=>{
  document.getElementById('headerpython').style.display = "none";
  document.getElementById('subjectpython').style.display = "none";
  document.getElementById('headerexcel').style.display = "none";
  document.getElementById('subjectexcel').style.display = "none";
  document.getElementById('headerjavascript').style.display = "block";
  document.getElementById('subjectjavascript').style.display = "block";
  document.getElementById('headerweb').style.display = "none";
  document.getElementById('subjectweb').style.display = "none";
  document.getElementById('headeraws').style.display = "none";
  document.getElementById('subjectaws').style.display = "none";
  document.getElementById('headerdrawing').style.display = "none";
  document.getElementById('subjectdrawing').style.display = "none";
  document.getElementById('headerdata').style.display = "none";
  document.getElementById('subjectdata').style.display = "none";
  event.preventDefault();
  let searchValue = "javascript";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
    let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}
let ondata=(event)=>{
  document.getElementById('headerpython').style.display = "none";
  document.getElementById('subjectpython').style.display = "none";
  document.getElementById('headerexcel').style.display = "none";
  document.getElementById('subjectexcel').style.display = "none";
  document.getElementById('headerjavascript').style.display = "none";
  document.getElementById('subjectjavascript').style.display = "none";
  document.getElementById('headerweb').style.display = "none";
  document.getElementById('subjectweb').style.display = "none";
  document.getElementById('headeraws').style.display = "none";
  document.getElementById('subjectaws').style.display = "none";
  document.getElementById('headerdrawing').style.display = "none";
  document.getElementById('subjectdrawing').style.display = "none";
  document.getElementById('headerdata').style.display = "block";
  document.getElementById('subjectdata').style.display = "block";
  event.preventDefault();
  let searchValue = "data";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
    let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}
let onaws=(event)=>{
  document.getElementById('headerpython').style.display = "none";
  document.getElementById('subjectpython').style.display = "none";
  document.getElementById('headerexcel').style.display = "none";
  document.getElementById('subjectexcel').style.display = "none";
  document.getElementById('headerjavascript').style.display = "none";
  document.getElementById('subjectjavascript').style.display = "none";
  document.getElementById('headerweb').style.display = "none";
  document.getElementById('subjectweb').style.display = "none";
  document.getElementById('headerdrawing').style.display = "none";
  document.getElementById('subjectdrawing').style.display = "none";
  document.getElementById('headerdata').style.display = "none";
  document.getElementById('subjectdata').style.display = "none";
  document.getElementById('headeraws').style.display = "block";
  document.getElementById('subjectaws').style.display = "block";
  event.preventDefault();
  let searchValue = "aws";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
    let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}
let ondrawing=(event)=>{
  document.getElementById('headerpython').style.display = "none";
  document.getElementById('subjectpython').style.display = "none";
  document.getElementById('headerexcel').style.display = "none";
  document.getElementById('subjectexcel').style.display = "none";
  document.getElementById('headerjavascript').style.display = "none";
  document.getElementById('subjectjavascript').style.display = "none";
  document.getElementById('headerweb').style.display = "none";
  document.getElementById('subjectweb').style.display = "none";
  document.getElementById('headeraws').style.display = "none";
  document.getElementById('subjectaws').style.display = "none";
  document.getElementById('headerdata').style.display = "none";
  document.getElementById('subjectdata').style.display = "none";
  document.getElementById('headerdrawing').style.display = "block";
  document.getElementById('subjectdrawing').style.display = "block";
  event.preventDefault();
  let searchValue = "drawing";
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
    let filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchValue);
  });
  console.log(filteredCourses);
  setViewedCourses(filteredCourses);
}
let onSearch = (event) => {
  
  event.preventDefault();
  let inputElement = document.getElementsByTagName("input");
  let searchValue = inputElement[0].value;
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
  if ( searchValue.trim().length === 0) {
    setViewedCourses( courses );
    return ;
  }

  let filteredCourses = courses.filter ( ( course ) => {
    return course.title.toLowerCase().includes( searchValue );
  } );

  console.log ( filteredCourses ) ;
  setViewedCourses ( filteredCourses ) ;
};


searchBtn.addEventListener("click", onSearch);
pythonbtn.addEventListener("click", onpython);
excelbtn.addEventListener("click", onexcel);
webbtn.addEventListener("click", onweb);
javascriptbtn.addEventListener("click", onjavascript);
datascincebtn.addEventListener("click", ondata);
awsbtn.addEventListener("click", onaws);
drawingbtn.addEventListener("click", ondrawing);


function swiper() {
  const swiper = new Swiper(".swiper", {
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