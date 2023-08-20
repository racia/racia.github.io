
function hide(b, c) {
    document.getElementById(b).style.display = "none";
    document.getElementById(c).style.display = "none";
    const msg1 = document.getElementById("msg1");
    msg1.style.opacity = 0;
    const msg2 = document.getElementById("msg2");
    msg2.style.opacity = 0;
}

const pop = [
  {visibility: "hidden", transform: "translate(0%, -150%)", offset:0},
  {transform: "translate(0%, -200%)", offset:1}
];

const pop2 = [
  {visibility: "hidden", transform: "translate(0%, -115%)", offset:0},
  {transform: "translate(0%, -150%)", offset:1}
];

const delay = {
duration: 500,
delay: 50,
fill: "both"
};

function answer(a, b, c, d) {
    hide(b, c);
    if (d) {
    document.getElementById(a).style.display = "block";
    document.getElementById(a).animate(pop2, delay);
    } else {
    document.getElementById(a).style.display = "block";
    document.getElementById(a).animate(pop, delay);
        }
    }

const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');

q1.addEventListener('click',  function(){
   answer('hobby', 'experience', 'research')
});

q2.addEventListener('click',  function(){
   answer('experience', 'hobby', 'research', true)
});

q3.addEventListener('click',  function(){
   answer('research', 'hobby', 'experience', true)
});