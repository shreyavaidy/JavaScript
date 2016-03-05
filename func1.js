//Nested functions JS
console.log("nested functions");

var landscape = function() {
    var result = "";
    var flat = function(size){
        for(var c=0; c< size; c++)
            result +="_";
        };
        
    var mountain = function(size){
        result +="/";    
        for (var c=0; c<size; c++)
            result +="'";
        result +="\\";
        };
    flat(2);
    mountain(1);
    flat(6);
    mountain(2);
    flat(2);
    console.log("\n");
    mountain(2);
    flat(8);
    mountain(1);
    return result;
    };
    
    console.log(landscape());
    
    
        
        
            
    
