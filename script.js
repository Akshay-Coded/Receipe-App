const button = document.querySelector(".search-button");
const search = document.getElementById("user-input");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";




button.addEventListener("click",function(){
    const apiURL = url + search.value;
    if(search.value == ""){
        document.querySelector(".dish-name").textContent = "Invalid Input!";
        return;
    }
    fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let myMeal = data.meals[0];    
        document.getElementById("image").innerHTML = `<img src = ${myMeal.strMealThumb}>`;
        document.querySelector(".dish-name").textContent = myMeal.strMeal;
        document.querySelector(".country").textContent = myMeal.strArea;
        document.querySelector(".making").textContent = myMeal.strInstructions;
    })
    .catch(()=>{
        document.querySelector(".dish-name").textContent = "No dish found! try again";
    })
})