
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = document.getElementById('numbers')
var arraySize = 11;


function selectionSort(array, arraySize){
    // adding + 1 to to index of i when going through all the array is finished
    for(i = 0; i < arraySize-1; i++){
        var counter = 0;
        var i;
        var j;
        var small;
        var temp;
        small = i;
        // showing changes
        while (counter < arraySize-1){
        
            number.innerText += "   ";
            number.innerText += ( ' ' +  array[counter++] ) ;

    
        }
        number.innerHTML += "<br><br>";
                    // j is always ahead of i by 1 index
                    for(j=i+1; j < arraySize; j++){
                            
                            // Comparing value of j and value of small
                            if(array[j] < array[small])
                                // small takes the index of j
                                small = j;
                          
                            }
                            // switching value of i and value of small
                            temp = array[i];
                            array[i] = array[small];
                            array[small] = temp;


                    }   
number.disabled = true;
                }

function Start(){


    var size = 10;
    var  myArray = [size];
    for(var number=0; number<size; number++){ 
            myArray[number] = Math.floor(Math.random() * 100) + 1 
    }
    selectionSort(myArray, size);
}