const ulElement = document.querySelector("ul[class='list-item-container']")
// var json2html = require('json-to-html')
const fetchJson = async (handler) => {
    const res = await fetch('project.json')
    const JsonData = await res.json()
    return (handler instanceof Function) ? handler(JsonData) : JsonData
}
let i = 0;
const JsonToHtml = (jsonData) => {
    console.log(jsonData)
}
fetchJson(JsonToHtml)

window.onload = () => {
    window.onscroll = (e) => {
        let current = window.scrollY;
        // console.log(current)
        let text = document.querySelector('h1[class="htitle"]');
        if (current > 50 || current > 50) {
            text.style.fontSize = `3.51rem`;
        } else {
            text.style.fontSize = "5.5rem";
        }
    }
}