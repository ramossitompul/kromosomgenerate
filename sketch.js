var bible;

var order = 1;

var ngrams = {};

var begginnings = [];

var button;

function preload(){
    bible = loadStrings('kromosom.txt');
    console.log(bible);
}


function setup() {
    noCanvas();
   for(var j = 0; j < bible.length; j++){
       var txt = bible[j];
    for(var i = 0; i<= txt.length - order; i++){
        var gram = txt.substring(i,i+order);
        if(i == 0){
            begginnings.push(gram);
        }
        if(!ngrams[gram]){
            ngrams[gram] = [];
        }
            ngrams[gram].push(txt.charAt(i+order));            
        }
       }
    button = createButton("Generate");
    button.mousePressed(markovIt);
    console.log(ngrams);   

}
function markovIt(){
    var currentGram = random(begginnings);
    
    var result = currentGram;
    
    for (var i = 0; i < 46; i++){
    var possibilities = ngrams[currentGram];
    
    var next = random(possibilities);
    
    result += next;
        
    var len = result.length;
        
    currentGram = result.substring(len,len-order);
    }
    createP(result);
}


