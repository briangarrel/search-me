export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result)
        const resultContents = document.createElement("div")
        resultContents.classList.add("resultsContent")
        if (result.img) {
            const resultImage = createResultImage(result)
            resultContents.append(resultImage)
        }
        const resultText = createResultText(result)
        resultContents.append(resultText)
        resultItem.append(resultContents)
        const searchResults = document.getElementById("searchResults")
        searchResults.append(resultItem)
    })
}

const createResultItem = (result) => {
    const resultItem = document.createElement("div")
    const resultTitle = document.createElement("div")
    const link = document.createElement("a")

    resultItem.classList.add("resultItem")
    resultTitle.classList.add("resultTitle")

    link.href = `https://en.wikipedia.org/?curid=${result.id}`
    link.textContent = result.title
    link.target = "_blank"

    resultTitle.append(link)
    resultItem.append(resultTitle)

    return resultItem
}

const createResultImage = (result) => {
    const resultImage = document.createElement("div")
    const img = document.createElement("img") 

    resultImage.classList.add("resultImage")

    img.src = result.img
    img.alt = result.title

    resultImage.append(img)

    return resultImage
}

const createResultText = (result) => {
    const resultText = document.createElement("div")
    const resultDescription = document.createElement("p")

    resultText.classList.add("resultText")
    resultDescription.classList.add("resultDescription")

    resultDescription.textContent = result.text

    resultText.append(resultDescription)

    return resultText
}

export const clearStatsLine = () => {
    document.getElementById("stats").textContent = "";
} 

export const setStatsLine = (numberOfResults) => {
    const statLine = document.getElementById("stats")
    if (numberOfResults) {
        statLine.textContent = `Displaying ${numberOfResults} results.`
    } else {
        statLine.textContent = "Sorry, no results."
    }
}

export const deleteSearchResults = () => {
    const parentElement = document.getElementById("searchResults")
    let child = parentElement.lastElementChild
    while (child) {
        parentElement.removeChild(child)
        child = parentElement.lastElementChild
    }
}