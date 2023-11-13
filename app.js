

const searchButton=document.getElementById("searchbutton");
const resultDiv=document.getElementById("result");
const searchField = document.getElementById("searchField");
console.log(searchButton);
console.log(searchField);

const searchText = searchField.value;
console.log(searchText);





searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission    
    resultFunction();
});
// searchButton.addEventListener("click", alertFunction);

// async function alertFunction () {
//     console.log("alert function triggered");
//     const response = await fetch("http://localhost/info2180-lab4/superheroes.php");
//     const htmlContent = await response.text();

//     alert(htmlContent);
// }

async function resultFunction () {
    console.log("resultFunction triggered");
    // location. reload()
    resultDiv.innerHTML= "";


    const url = `http://localhost/info2180-lab4/superheroes.php?query=${sanitize(searchText)}`;
    console.log("URL:"+ url);
    const response = await fetch(url);
    const htmlContent = await response.text();

    resultDiv.innerHTML= htmlContent;
    console.log(resultDiv.innerHTML);
    // location. reload()

}

function sanitize(userInput) {
 
    // Sanitize the user input using the replace method
    const sanitizedInput = replaceSpecialCharacters(userInput);

    console.log("sanitize function triggered");
    console.log(sanitizedInput);

    return sanitizedInput ;

}

function replaceSpecialCharacters(input) {

    console.log("replaceSpecialCharacters function triggered")

    // Define a regular expression to match characters with special meanings in HTML
    const regex = /[&<>"'/]/g;

    // Replace the matched characters with their corresponding HTML entities
    const replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    return input.replace(regex, match => replacements[match]);
}
