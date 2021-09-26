/*this allows for the flag to be interacted with*/

const red_flag_left1 = document.getElementById('red_flag_left1');
const black_flag_left1 = document.getElementById('black_flag_left1');
const red_flag_left2 = document.getElementById('red_flag_left2');
const black_flag_left2 = document.getElementById('black_flag_left2');
const red_flag_left3 = document.getElementById('red_flag_left3');
const black_flag_left3 = document.getElementById('black_flag_left3');
const red_flag_right1 = document.getElementById('red_flag_right1');
const black_flag_right1 = document.getElementById('black_flag_right1');
const black_flag_right2 = document.getElementById('black_flag_right2');
const red_flag_right2 = document.getElementById('red_flag_right2');
const black_flag_right3 = document.getElementById('black_flag_right3');
const red_flag_right3 = document.getElementById('red_flag_right3');

black_flag_left1.addEventListener('mouseover', function(){
    black_flag_left1.style.display = 'none';
    red_flag_left1.style.display = 'block';
});
black_flag_left1.addEventListener('mouseout', function(){
    black_flag_left1.style.display = 'block';
    red_flag_left1.style.display = 'none';
});
black_flag_left2.addEventListener('mouseover', function(){
    black_flag_left2.style.display = 'none';
    red_flag_left2.style.display = 'block';
});
black_flag_left2.addEventListener('mouseout', function(){
    black_flag_left2.style.display = 'block';
    red_flag_left2.style.display = 'none';
});
black_flag_left3.addEventListener('mouseover', function(){
    black_flag_left3.style.display = 'none';
    red_flag_left3.style.display = 'block';
});
black_flag_left3.addEventListener('mouseout', function(){
    black_flag_left3.style.display = 'block';
    red_flag_left3.style.display = 'none';
});
black_flag_right1.addEventListener('mouseover', function(){
    black_flag_right1.style.display = 'none';
    red_flag_left1.style.display = 'block';
});
black_flag_right1.addEventListener('mouseout', function(){
    black_flag_right1.style.display = 'block';
    red_flag_right1.style.display = 'none';
});
black_flag_right2.addEventListener('mouseover', function(){
    black_flag_right2.style.display = 'none';
    red_flag_right2.style.display = 'block';
});
black_flag_right2.addEventListener('mouseout', function(){
    black_flag_right2.style.display = 'block';
    red_flag_right2.style.display = 'none';
});
black_flag_right3.addEventListener('mouseover', function(){
    black_flag_right3.style.display = 'none';
    red_flag_right3.style.display = 'block';
});
black_flag_right3.addEventListener('mouseout', function(){
    black_flag_right3.style.display = 'block';
    red_flag_right3.style.display = 'none';
});