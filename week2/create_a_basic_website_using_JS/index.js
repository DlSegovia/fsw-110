var newH1 = document.createElement("h1")
newH1.textContent = "My favorit character in Star Wars"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "Name: Luke Skywalker",
    document.body.append(newP)

var newP = document.createElement("p")
newP.textContent = "Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so. Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay! Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator."
document.body.append(newP)

var newUl = document.createElement("ul")
newUl.id = "my-list"
document.body.append(newUl)

var newLi = document.createElement("li")
newLi.textContent = "hair_color blond"
var myList = document.getElementById("my-list")
myList.append(newLi)


var newLi = document.createElement("li")
newLi.textContent = "skin_color fair"
var myList = document.getElementById("my-list")
myList.append(newLi)


var newLi = document.createElement("li")
newLi.textContent = "eye_color blue"
var myList = document.getElementById("my-list")
myList.append(newLi)

var newFooter = document.createElement("footer")
newFooter.textContent = "By Daniel Segovia"
document.body.append(newFooter)