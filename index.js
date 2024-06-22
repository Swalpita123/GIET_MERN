
const buttons = document.querySelectorAll(".button");// nodelist

function log(e, button) {
  //alert("Swalpita Ray");
    //console.log(e.target.id);
  if (e.target.id === button.id) {
    document.querySelector("body").style.backgroundColor = button.id;
  }
  if (button.id === "grey"){
    alert("Swalpita Ray");
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});
function getRandomColor() {
  var letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

const random = document.querySelector("#random");
random.addEventListener('click', ()=>{
  
  const interval= setInterval(() => {
    setTimeout(() => {
      let color = getRandomColor();
    document.querySelector("body").style.backgroundColor = color;
    },2000);
  },1500);
})

// git add .
// git commit -m "file added"
// git push origin main