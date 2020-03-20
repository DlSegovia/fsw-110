const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']


for (let i = 0; i < names.length; i++) {

    var newH1 = document.createElement("h1")
    newH1.textContent = names[i]
    newH1.style.color = "Purple";
    document.body.append(newH1)
}