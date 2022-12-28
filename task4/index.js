let numbers = document.querySelector(".numbers");
let answer = document.querySelector(".answer h1");
let buttons = document.querySelectorAll(".buttons div");
let minuse = document.querySelector(".minuse");


let text = "";

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "C":
        numbers.innerHTML = "";
        answer.innerHTML = "0";
        break;
      case "=":
        try {
          answer.innerHTML = eval(numbers.innerHTML);
          numbers.innerHTML = answer.innerHTML;
        } catch {
          answer.innerHTML = `<p class='wrong'>Xahiş olunur düzgün yazın!</p>`;
          numbers.innerHTML = "";
          setTimeout(() => {
            answer.innerHTML = 0;
          }, 1000);
        }
        break;
      case "←":
        numbers.innerHTML = numbers.innerHTML.slice(0, -1);
        break;

      default:
        if (numbers.innerHTML.length < 15) {
          text += e.target.innerHTML;
          if (
            !(
              text.includes("****") ||
              text.includes("//") ||
              text.includes("++") ||
              text.includes("%%") ||
              text.includes("--")
            )
          ) {
            numbers.innerHTML += e.target.innerHTML;
          } else {
            if (e.target.className == "operations") {
              alert("Yalnız bir dəfə istifadə edə bilərsiniz");
              text=''
            } else {
              numbers.innerHTML += e.target.innerHTML;
            }
          }
        } else {
          alert("Rəqəmlərin sayı 15-dən az olmalıdır");
        }
    }
  });
});
