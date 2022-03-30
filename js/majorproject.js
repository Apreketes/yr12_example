var apikey = '61a3fa6c34abfc7f972efbfd';
var url = 'https://apreketes-68e3.restdb.io/rest/recipes';
/* --- Functions --- */
function getRecipes(url,apikey){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
            
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i=0; i<response.length; i++){
            //console.log(response[i].Name);
            
            var recipeItem = '<div class="recipe" id="' + response[i]._id + '">' + "<span class= 'recipeName' >" + response[i].recipename +"</span>" + "<span class= 'recipeTimeOfDay' >" + response[i].recipetimeofday + "</span>" + "</div>";
            $("#login").append(recipeItem);
           
        }
    });
}

getRecipes(url,apikey);

/*document.getElementById("back").classList.add("hidden");
document.getElementById("recipes").classList.add("hidden");*/


document.getElementById('nav--bar').addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('link--a')) {
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
});

//

$('#btnSubmit').click(function(){
    console.log('submitted');
    //var tempItem = {Name: $('#Name').val(),AnimalType: $('#AnimalType').val(),Description: $('#Description').val(), ImgURL: $('#ImgURL').val() };
    // document.getElementById("mealButtons").style.visibility = "visible";
    // document.getElementById("button").style.visibility = "hidden";

    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("mealButtons").classList.remove("hidden");
})



$('#dinner-btn').click(function(){
    document.getElementById("mealButtons").classList.add("hidden");
    document.getElementById("recipes").classList.remove("hidden");
    console.log('hello');
    document.getElementById("recipes").innerHTML = 'https://www.taste.com.au/recipes/chicken-caesar-veggie-wraps/7voSwi5x?r=recipes/lunchrecipes&c=0fa1cf4f-809b-4ee7-88a0-72da8e8543a4/Lunch%20recipes';
    document.getElementById("back").classList.remove("hidden");
})



$('#breakfast-btn').click(function(){
    document.getElementById("mealButtons").classList.add("hidden");
    document.getElementById("recipes").classList.remove("hidden");
    console.log('hello');
    document.getElementById("recipes").innerHTML = 'https://www.cookinglight.com/recipes/avocado-toast-recipe';
    document.getElementById("back").classList.remove("hidden");
})



$('#lunch-btn').click(function(){
    document.getElementById("mealButtons").classList.add("hidden");
    document.getElementById("recipes").classList.remove("hidden");
    console.log('hello');
    document.getElementById("recipes").innerHTML = 'https://www.bbcgoodfood.com/recipes/chicken-pasta-bake';
    document.getElementById("back").classList.remove("hidden");
})




$('#back').click(function(){
    document.getElementById("back").classList.add("hidden");
    document.getElementById("recipes").classList.add("hidden");
    document.getElementById("mealButtons").classList.remove("hidden");

})
