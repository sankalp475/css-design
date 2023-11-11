const container = document.querySelector("div.data-container")

const fetchJson = async (handler) => {
    const res = await fetch('project.json')
    const JsonData = await res.json()
    return (handler instanceof Function) ? handler(JsonData) : JsonData
}
// let i = 0;
const JsonToHtml = (jsonData) => {
    for (const obj of jsonData) {
        let itemElement = document.createElement(Object.keys(obj))
        for (const keys in obj.div) {
            if (keys == '@class' || keys == '@data-card-number') {
                itemElement.setAttribute(keys.slice(1), obj.div[keys])
            }
            if (keys == 'p' || keys == 'div') {
                if (!(obj.div[keys] instanceof Array)) {
                    let keyTags = document.createElement(keys);
                    for (const subKeys in obj.div[keys]) {
                        if (subKeys == '@id') keyTags.setAttribute(subKeys.slice(1), obj.div[keys][subKeys]);
                        keyTags.textContent = obj.div[keys][subKeys]
                    }
                    itemElement.appendChild(keyTags)
                } else {
                    for (const subKeys of obj.div[keys]) {
                        let subKeyTags = document.createElement(keys);
                        for (const keys in subKeys) {
                            if (keys == '@class') {
                                subKeyTags.className = subKeys[keys]
                            } else {
                                let innerSubtag = document.createElement(keys)
                                for (const attr in subKeys[keys]) {
                                    if (attr == '@class' || attr == '@src' || attr == '@alt') {
                                        innerSubtag.setAttribute(attr.slice(1), subKeys[keys][attr])
                                    } else {
                                        if (!(subKeys[keys][attr] instanceof Array)) innerSubtag.textContent = subKeys[keys][attr]; else
                                            // console.log("40: <-", innerSubtag, attr,)
                                            for (const keyValue of subKeys[keys][attr]) {
                                                let newTag = document.createElement(attr);
                                                // if()
                                                if (keyValue['@class'] != undefined) {
                                                    newTag.className = keyValue['@class'];
                                                    newTag.textContent = keyValue['#text']
                                                } else {
                                                    newTag.setAttribute('href', keyValue['@href']);
                                                    newTag.textContent = keyValue['#text']
                                                }
                                                innerSubtag.appendChild(newTag)
                                            }
                                    }
                                }
                                subKeyTags.appendChild(innerSubtag)
                            }
                        }
                        itemElement.appendChild(subKeyTags)
                    }
                }
            }
        }
        console.log(itemElement)
        container.appendChild(itemElement)
    }
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