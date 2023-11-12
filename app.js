

const searchButton=document.getElementById("searchbutton");
const resultDiv=document.getElementById("result");

console.log(searchButton);


searchButton.addEventListener("click", resultFunction);

// searchButton.addEventListener("click", alertFunction);

// async function alertFunction () {
//     console.log("alert function triggered");
//     const response = await fetch("http://localhost/info2180-lab4/superheroes.php");
//     const htmlContent = await response.text();

//     alert(htmlContent);
// }

async function resultFunction () {
    console.log("resultFunction triggered");
    const response = await fetch("http://localhost/info2180-lab4/superheroes.php");
    const htmlContent = await response.text();
    resultDiv.innerHTML= htmlContent;
    // alert(htmlContent);
}




