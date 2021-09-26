/*this allows for interactivity with the text, allowing for the
color of the appropriate continents to change and highlight them, 
along with creating a link to the 'continent' page*/

const africa_image = document.getElementById("africa_image");
const africa_colored_image = document.getElementById("africa_colored_image");
const antarctica_image = document.getElementById("antarctica_image");
const antarctica_colored_image = document.getElementById("antarctica_colored_image");
const asia_image = document.getElementById("asia_image");
const asia_colored_image = document.getElementById("asia_colored_image");
const australia_image = document.getElementById("australia_image");
const australia_colored_image = document.getElementById("australia_colored_image");
const europe_image = document.getElementById("europe_image");
const europe_colored_image = document.getElementById("europe_colored_image");
const north_america_image = document.getElementById("north_america_image");
const north_america_colored_image = document.getElementById("north_america_colored_image");
const south_america_image = document.getElementById("south_america_colored_image");
const south_america_colored_image = document.getElementById("south_america_colored_image");
const africa_text = document.getElementById("africa_text");
const europe_text = document.getElementById("europe_text");
const south_america_text = document.getElementById("south_america_text");
const australia_text = document.getElementById("australia_text");
const north_america_text = document.getElementById("north_america_text");
const asia_text = document.getElementById("asia_text");
const antarctica_text = document.getElementById("antarctica_text");

antarctica_text.addEventListener('mouseover', function(){
    antarctica_image.style.display = 'none';
    antarctica_colored_image.style.display = 'block';
});
antarctica_text.addEventListener('mouseout', function(){
    antarctica_image.style.display = 'block';
    antarctica_colored_image.style.display = 'none';
});
europe_text.addEventListener('mouseover', function(){
    europe_image.style.display = 'none';
    europe_colored_image.style.display = 'block';
});
europe_text.addEventListener('mouseout', function(){
    europe_image.style.display = 'block';
    europe_colored_image.style.display = 'none';
});
africa_text.addEventListener('mouseover', function(){
    africa_image.style.display = 'none';
    africa_colored_image.style.display = 'block';
});
africa_text.addEventListener('mouseout', function(){
    africa_image.style.display = 'block';
    africa_colored_image.style.display = 'none';
});
asia_text.addEventListener('mouseover', function(){
    asia_image.style.display = 'none';
    asia_colored_image.style.display = 'block';
});
asia_text.addEventListener('mouseout', function(){
    asia_image.style.display = 'block';
    asia_colored_image.style.display = 'none';
});
australia_text.addEventListener('mouseover', function(){
    australia_image.style.display = 'none';
    australia_colored_image.style.display = 'block';
});
australia_text.addEventListener('mouseout', function(){
    australia_image.style.display = 'block';
    australia_colored_image.style.display = 'none';
});
north_america_text.addEventListener('mouseover', function(){
    north_america_image.style.display = 'none';
    north_america_colored_image.style.display = 'block';
});
north_america_text.addEventListener('mouseout', function(){
    north_america_image.style.display = 'block';
    north_america_colored_image.style.display = 'none';
});
south_america_text.addEventListener('mouseover', function(){
    south_america_image.style.display = 'none';
    south_america_colored_image.style.display = 'block';
});
south_america_text.addEventListener('mouseout', function(){
    south_america_image.style.display = 'block';
    south_america_colored_image.style.display = 'none';
});
north_america_text.addEventListener('click', function() {
    document.location.href = 'http://127.0.0.1:5500/page2/index.html';
})