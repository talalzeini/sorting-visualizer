// Set Global Variables 

let values = []; 
// let w =  document.getElementById('rangeValue').innerHTML;

let w = 30;



// To store the state of each bar 
// in order to change the color 
let states = []; 
let width = 1200
let height = 600

function setup() { 
    
    // Create Canvas of Size Windows 
    // Width * Windows Height 
    createCanvas(width, height); 


    // Insert Random values in array 
    values = new Array(floor(width/w+1)); 

    for(let i = 0; i < values.length; i++) { 
        values[i] = float(random(height)+20); 
    states[i] = 2
    if(states[i] == 2){
        fill(255, 173, 153);
    }
    } 

    document.getElementById('bubble').disabled = false;
    document.getElementById('selection').disabled = false;
   
    // Call to bubble sort function 
   
} 

// Definition of bubble sort 
async function selectionSort(arr) { 

    var small;
    var i;


    for( i = 0; i < arr.length; i++) { 

        small = i;	
        for(var j = (i+1); j < arr.length; j++) { 
         
            states[i+1] =3;
            states[i] =0;
            states[small] =3;
            if(arr[j] < arr[small]) { 

                states[i+1] =3;
                states[i] =0;
                states[small] =2;
                small = j;

            }
        

        }  
                // Call to swap function 
                await swap(arr, small, i); 
                states[small] =2;
                states[i] = 2;
               
        } 
        document.getElementById('resetButton').disabled = false;
        
    return arr; 

} 
async function bubbleSort(arr) { 

    var k;
    var i;

    for(k = 1; k < arr.length; k++){
        for(i=0; i < arr.length-k-1; i++)
        {
            if(arr[i] > arr[i+1]){
                states[i] = 0;
                states[i+1] = 0;
                await swap(arr, i, i+1); 
                states[i] = 2;
                states[i+1] = 2;
        }
    }
            states[i] = 0;     
} 
document.getElementById('resetButton').disabled = false;
return arr; 
}

async function insertionSort(arr){

    var i;
    var value;
    var index;
    var k;
    for(i = 0; i < arr.length; i++){
        
        
        value = arr[i];
        index = i;
        
        while (index > 0 && arr[index-1] > value){

        arr[index] = arr[index-1];
        index = index-1;
        }
        arr[index] = value;
}
}
 
// Definition of draw function 
function draw() { 
    background(0); 
    
    for(let i = 0; i < values.length; i++) { 
      
        fill(255, 173, 153); // red
        
        if(states[i] == 0) { 
            fill(128, 255, 170); // green
        } 
        else if (states[i] == 1) { 
            
            // Element currently sorting 
            fill("#58FA82"); 
        } 
        else if (states[i] == 2) { 
            
            // Element currently sorting 
           fill(255, 173, 153);
        } 
        else if (states[i] == 3) { 
            
            // Element currently sorting 
           fill(255, 255, 0);
        } 
  
        
    

        else { 
            fill(255, 173, 153); // red
        }  
        rect(i*w, height - values[i], w, values[i]); 
    } 
}
let speed =  document.getElementById('rangeSpeed').innerHTML;
speed = 100;

// Definition of swap function 
async function swap(arr, a, b) { 
   
   
   
    await sleep(100); 
    let t = arr[a]; 
    arr[a] = arr[b]; 
    arr[b] = t; 
} 

// Definition of sleep function 
function sleep(speed) { 

    return new Promise(resolve => setTimeout(resolve, speed)); 
} 


function selection()
{
    document.getElementById('bubble').disabled = true;
    document.getElementById('resetButton').disabled = true;
    document.getElementById('insertion').disabled = true;
    selectionSort(values, 0, values.length); 
}
function bubble()
{
    document.getElementById('selection').disabled = true;
    document.getElementById('resetButton').disabled = true;
    document.getElementById('insertion').disabled = true;
    bubbleSort(values, 0, values.length); 
}
function insertion()
{
    document.getElementById('bubble').disabled = true;
    document.getElementById('selection').disabled = true;
    document.getElementById('resetButton').disabled = true;
    insertionSort(values, 0, values.length); 
}

function search(ele) {

    if(event.key === 'Enter') {
            
        eh = ele.value;
}
}

function rangeSlide(value){


 w = value;
}


function rangeSpeed(fast){
    

    speed = fast;
   }
   

  
  
  //# sourceURL=coffeescript