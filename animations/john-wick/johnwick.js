
document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;
    const johnwick = document.getElementById('johnwick');

    console.log(keyName);
    console.log(johnwick.className);

    if(keyName=="ArrowLeft") {
      johnwick.className = baseClasses + " left";
    }
  }
);
