// const ulElement = document.querySelector("ul[class='list-item-container']")
// // var json2html = require('json-to-html')
// const fetchJson = async (handler) => {
//     const res = await fetch('project.json')
//     const JsonData = await res.json()
//     return (handler instanceof Function) ? handler(JsonData) : JsonData
// }
// let i = 0;
// const JsonToHtml = (jsonData) => {
    
// }
// fetchJson(JsonToHtml)

window.onload = () => {
    window.onscroll = (e) => {
        console.log(document.body.scrollTop)
    }
}