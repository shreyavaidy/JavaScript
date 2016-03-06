function power ( base , exponent ) {
if ( exponent == 0)
return 1;
else
return base * power ( base , exponent - 1) ;
}
console . log ( power (3 , 3) ) ;

function printFarmInventory ( cows , chickens ) {
var cowString = String ( cows );
while ( cowString . length < 3)
cowString = "0" + cowString ;
console . log ( cowString + " Cows ") ;
var chickenString = String ( chickens );
while ( chickenString . length < 3)
chickenString = "0" + chickenString ;
console . log ( chickenString + " Chickens ") ;
}
printFarmInventory (7 , 11) ;