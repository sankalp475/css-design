const ulElement = document.querySelector("ul[class='list-item-container']")
// var json2html = require('json-to-html')
const fetchJson = async (handler) => {
    const res = await fetch('project.json')
    const JsonData = await res.json()
    return (handler instanceof Function) ? handler(JsonData) : JsonData
}
let i = 0;
const JsonToHtml = (jsonData) => {
    for (const items of jsonData) {
        const itemElement = document.createElement('li');
        itemElement.className = items.li['@class']
        for (const keys in items.li) {
            if (keys == 'img' || keys == 'p' || keys == 'a') {
                const childElement = document.createElement(keys)
                // console.log(items.li[keys])
                if (!(items.li[keys] instanceof Array)) {
                    // console.log(items.li[keys])
                    for (const attr in items.li[keys]) {
                        (attr != "#text")
                            ? childElement.setAttribute(attr.slice(1), items.li[keys][attr])
                            : childElement.textContent = items.li[keys][attr];
                        itemElement.appendChild(childElement)
                    }
                } else {
                    for (const pArray of items.li.p) {
                        const pElement = document.createElement(keys)
                        // console.log(pArray)
                        for (const attr in pArray) {
                            (attr != "#text")
                                ? pElement.setAttribute(attr.slice(1), pArray[attr])
                                : pElement.textContent = pArray[attr];
                            itemElement.appendChild(pElement);
                        }
                    }
                }
            }
        }
        ulElement.appendChild(itemElement)
    }
}
fetchJson(JsonToHtml)