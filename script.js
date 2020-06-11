var numbers [
    0,
    1,
]

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var random = shuffle(numbers);

hrefs = [
   "https://adshark--bloxy-cola.repl.co/",
]

var x = document.getElementById("theHref");   // Get the element with id="demo"
x.style.color = hrefs[numbers];                     // Change the color of the element