import { 
    clearPushListener,
    clearSearchText,
    setSearchFocus,
    showClearTextButton
} from "./searchBar.js";

import {
    buildSearchResults, 
    clearStatsLine, 
    setStatsLine,
    deleteSearchResults
} from "./searchResults.js"

import { 
    getSearchTerm,
    retrieveSearchResults
} from "./dataFunctions.js"

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        initApp();
    };
});


const initApp = () => {
    setSearchFocus();
    const search = document.getElementById("search")
    const form = document.getElementById("searchBar");
    const clear = document.getElementById("clear");
    
    search.addEventListener("input", showClearTextButton)
    clear.addEventListener("click", clearSearchText)
    clear.addEventListener("keydown", clearPushListener)
    
    form.addEventListener("submit", submitTheSearch);
};


const submitTheSearch = (event) => {
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();
}


const processTheSearch = async () => {
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return; 
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);
};