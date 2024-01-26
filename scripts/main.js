const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/first.jpg") {
    myImage.setAttribute("src", "images/third.jpg");
  } else {
    myImage.setAttribute("src", "images/first.jpg");
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
      'images/second.jpg',
      'images/fourth.jpg',
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
  