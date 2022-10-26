let points = document.querySelector(".points");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let rules = document.querySelector(".help");
let rps = document.querySelector(".rps");
let result = document.querySelector(".result");
let count = 0;

let btn = document.createElement("button");
btn.innerHTML = "PLAY AGAIN";
btn.classList.add("btn");

rock.dataset.id = "r";
paper.dataset.id = "p";
scissors.dataset.id = "s";



let nodelistRps = document.querySelectorAll("[data-id]");

nodelistRps.forEach((el) => {
  
  el.addEventListener("click", () => {
    
    nodelistRps.forEach((el) => {
      el.classList.add("displaynone");

      el.classList.remove("animation");
    });

    rps.classList.remove("treangle");

    let random = Math.floor(Math.random() * nodelistRps.length);
    let picker = nodelistRps[random];

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.innerHTML = "You Picked";
    p1.classList.add("notification");

    p2.innerHTML = "House Picked";
    p2.classList.add("notification");
    let res = document.createElement("p");
    res.classList.add("res");

    if (el == picker) {
      let k = el.cloneNode(true);



      k.style.pointerEvents = "none";
      k.classList.toggle("displaynone");
      k.classList.add("house-picked");

      el.prepend(p1);
      k.prepend(p2);
      rps.prepend(k);

      res.innerHTML = "Draw ^_^";
      result.prepend(res);
    } else {
   
      picker.classList.remove("displaynone");
      picker.classList.add("house-picked");

      el.prepend(p1);
      picker.prepend(p2);
      picker.style.pointerEvents = "none";
    }

    el.classList.remove("displaynone");
    el.classList.add("picked");
    el.style.pointerEvents = "none";

    result.append(btn);

    let confrontation = el.dataset.id + picker.dataset.id; 
    switch (confrontation) {
      case "rs":
      case "pr":
      case "sp":
        count++;
        res.innerHTML = "You won -_-";

        result.prepend(res);
        break;
      case "rp":
      case "ps":
      case "sr":
        count--;
        res.innerHTML = "Looser xD";

        result.prepend(res);
        break;
    }

    points.innerHTML = count;


    btn.addEventListener("click", () => {
      result.firstElementChild == res
        ? result.firstElementChild.remove("")
        : -1;
      nodelistRps.forEach((elem) => {

        elem.style.pointerEvents = "";
        elem.classList.remove("displaynone", "picked", "house-picked");
        elem.classList.add("animation");

        nodelistRps[0] != rps.firstElementChild
          ? rps.firstElementChild.remove()
          : -1;

        elem.firstElementChild != elem.lastElementChild
          ? elem.firstElementChild.remove()
          : -1;
      });
      result.firstElementChild == btn
        ? result.firstElementChild.remove("")
        : -1;
      rps.classList.add("treangle");
    });
  });
});

const button = document.querySelector("body");
const instruction = document.querySelector(".help__instruction");
button.addEventListener("click", (e) => {
  let openClose = e.target.closest(".help__btn");
  if (openClose) {
    instruction.classList.toggle("show");
    rps.classList.toggle("hide");
  }
});
