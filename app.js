

const searchButton=document.getElementById("searchbutton");
console.log(searchButton);

searchButton.addEventListener("click", alertFunction);

async function alertFunction () {
    console.log("alert function triggered");
    const response = await fetch("http://localhost/info2180-lab4/superheroes.php");
    const htmlContent = await response.text();

    alert(htmlContent);
}

