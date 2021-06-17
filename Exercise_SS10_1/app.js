let form = document.getElementById("myForm");
let ul = document.getElementById("myList");
let count = 0;
form.onsubmit = function(event) {
    event.preventDefault();
    const title = form.title.value;
    // Creat Element
    const newLi = document.createElement("li");
    const newBtn1 = document.createElement("button");
    const newBtn2 = document.createElement("button");
    const btnCheck = document.createElement("button");
    const iconChecked = document.createElement("i");
    // Add classList
    newLi.classList.add("li_list");
    newBtn1.classList.add("btn_li_1");
    newBtn2.classList.add("btn_li_2");
    btnCheck.classList.add("checked");
    iconChecked.classList.add("fas");
    iconChecked.classList.add("fa-check");
    // Assign Title
    newBtn1.innerHTML = title;
    newBtn2.innerHTML = "X";
    form.title.value = "";
    // Add Element
    newLi.appendChild(btnCheck);
    ul.appendChild(newLi);
    newLi.appendChild(newBtn1);
    newLi.appendChild(newBtn2);
    // Event Click
    newBtn1.onclick = function() {
        newBtn1.style.textDecoration = "line-through";
        btnCheck.appendChild(iconChecked);
    }
    newBtn2.onclick = function() {
        newLi.remove();
    }
    // Bc Color for li tags
    count += 1;
    console.log(count);
    for (let i=0; i < 1000; i++){
        if (count%2==0){
                newLi.style.backgroundColor = "Beige";
                newBtn1.style.backgroundColor = "Beige";
                newBtn2.style.backgroundColor = "Beige";
                btnCheck.style.backgroundColor = "Beige";
                iconChecked.style.backgroundColor = "Beige";
        }
        if (count%2!==0){
                newLi.style.backgroundColor = "Bisque";
                newBtn1.style.backgroundColor = "Bisque";
                newBtn2.style.backgroundColor = "Bisque";
                btnCheck.style.backgroundColor = "Bisque";
                iconChecked.style.backgroundColor = "Bisque";
         }
    }
}



