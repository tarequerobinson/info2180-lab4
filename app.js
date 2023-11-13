

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


    const url = `http://localhost/info2180-lab4/superheroes.php?query=${searchText}`;
    console.log("URL:"+ url);
    const response = await fetch(url);
    const htmlContent = await response.text();

    resultDiv.innerHTML= htmlContent;
    console.log(resultDiv.innerHTML);
    // location. reload()

}




    // const sanitizedSearchText = DOMPurify.sanitize(searchText);
    // console.log(sanitizedSearchText);






    // if (searchText == null){
    // const response = await fetch(url);
    // const htmlContent = await response.text();
    // resultDiv.innerHTML= htmlContent;
    // }
    // else {



    // }
    // alert(htmlContent);



// function sanitizeInput (input){

// return input;


// }




