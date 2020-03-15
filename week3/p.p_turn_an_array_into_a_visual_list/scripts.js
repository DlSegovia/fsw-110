const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']


for (let i = 0; i < names.length; i++) {

    var newH1 = document.createElement("h1")
    newH1.textContent = names[i]
    document.body.append(newH1)
}
var h1Elements = document.getElementsByTagName("h1");

for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "Purple";
}