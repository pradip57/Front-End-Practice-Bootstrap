const courses = [
  {
    id: 0,
    name: "IT Training",
    duration: "3 months",
    image: "./images/img2.webp",
  },
  {
    id: 1,
    name: "Web Design Training",
    duration: "2.5 months",
    image: "./images/img3.webp",
  },
  {
    id: 2,
    name: "Python Training",
    duration: "2.5 months",
    image: "./images/img4.webp",
  },
  {
    id: 3,
    name: "Ethical Hacking Training",
    duration: "3 months",
    image: "./images/img5.webp",
  },
  {
    id: 4,
    name: "Business Analysis Training",
    duration: "2 months",
    image: "./images/img6.webp",
  },
  {
    id: 5,
    name: "Digital Marketing Training",
    duration: "2.5 months",
    image: "./images/img7.webp",
  },
  {
    id: 6,
    name: "Mern Stack Training",
    duration: "3 months",
    image: "./images/img8.webp",
  },
  {
    id: 7,
    name: "Python & Django Training",
    duration: "2.5 months",
    image: "./images/img9.webp",
  },
  {
    id: 8,
    name: "Flutter Framework Training",
    duration: "2.5 months",
    image: "./images/img10.webp",
  },
];

let htmlPrint = "";
courses.map((course) => {
  htmlPrint += `<div class="col-sm-12 col-md-6 col-lg-3">
    <div class="effect">
      <img class="img img-fluid" src="${course.image}" alt="" />
    </div>
    <div>
      <h6>${course.name}</h6>
      <p>
        <span>Duration:</span>
        <strong>${course.duration}</strong>
      </p>
    </div>
  </div>`;
});

document.getElementById("courses1").innerHTML = htmlPrint;
