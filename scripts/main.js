const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo_2024-01-24_10-15-36.jpg") {
    myImage.setAttribute("src", "images/photo_2024-01-24_12-03-59.jpg");
  } else {
    myImage.setAttribute("src", "images/photo_2024-01-24_10-15-36.jpg");
  }
};

let photosButton = document.getElementById("photosButton");
let photosContainer = document.getElementById("photosContainer");

photosButton.onclick = () => {
    if (photosContainer.style.display === 'none') {
      photosContainer.style.display = 'block';
  
      if (photosContainer.innerHTML === '') {
        loadPhotos();
      }
    } else {
      photosContainer.style.display = 'none';
    }
  };
  
  function loadPhotos() {
    const photoUrls = [
      'images/photo_2024-01-24_10-17-33.jpg',
      'images/photo_2024-01-24_12-39-14.jpg',
    ];

    photoUrls.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.margin = '10px';
        photosContainer.appendChild(img);
      });
    }

let myButton = document.getElementById("changeUserButton");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Get to know me, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Get to know me, ${storedName}`;
  }
  
myButton.onclick = () => {
    setUserName();
  };
  