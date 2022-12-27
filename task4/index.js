let numbers = document.querySelector(".numbers");
let answer = document.querySelector(".answer h1");
let buttons = document.querySelectorAll(".buttons div");

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
        numbers.innerHTML.length < 15
          ? (numbers.innerHTML += e.target.innerHTML)
          : alert("Rəqəmlərin sayı 15-dən az olmalıdır");
    }
  });
});
