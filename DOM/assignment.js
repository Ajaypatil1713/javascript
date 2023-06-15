
const elementH1 = document.querySelector("h1");
console.log(elementH1.innerHTML);

const elementH3 = document.querySelectorAll("li")
console.log(elementH3[1].innerHTML);

const alldivEle = document.querySelectorAll("#advantages");
// console.log(alldivEle);
for (const element of alldivEle) {
    console.log(element.innerHTML);
}
