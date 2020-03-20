var newUl = document.createElement("ul")
newUl.id = "myList"
document.body.append(newUl)
document.querySelector("#myList").className += " border"
const list = ["hair_color blond", "skin_color fair", "eye_color blue"]
for (let i = 0; i < list.length; i++) {
    var newLi = document.createElement("li")
    newLi.textContent = list[i]

    var myList = document.getElementById("myList")
    newLi.style.fontSize = "20px";
    newLi.style.fontWeight = "lighter";
    newLi.style.fontFamily = "sans-serif";
    newLi.style.color = "cornflowerblue";
    myList.append(newLi)
}

// var newLi = document.createElement("li")
// newLi.textContent = "skin_color fair"
// var myList = document.getElementById("my-list")
// myList.append(newLi)


// var newLi = document.createElement("li")
// newLi.textContent = "eye_color blue"
// var myList = document.getElementById("my-list")
// myList.append(newLi)