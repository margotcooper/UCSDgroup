var searchTextBoxEl = document.getElementById('searchbox');
var searchOptionsEl = document.getElementById('searchoptions');
var searchBtnEl = document.getElementById('searchbtn');

searchOptionsEl.addEventListener('change', sendToResultsPg);
function sendToResultsPg(e){
    var searchPhrase = searchTextBoxEl.value;
    var searchOption = searchOptionsEl.value;
    if(searchOption !== ''){
        location.replace('search-results.html?q=' + searchPhrase + '&format=' + searchOption);
    }else{
        location.replace('search-results.html?q=' + searchPhrase + '&format=');
    }
}









/* A form with a text input field to capture a search query and an option
select dropdown to capture the format of the search query. The options in
the dropdown should be a list of the possible format values listed in the
[Library of Congress API documentation on requests]
(https://libraryofcongress.github.io/data-exploration/requests.html#format).*/