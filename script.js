

let values = []; 
// let w =  document.getElementById('rangeValue').innerHTML;

let w;
w = 20;

// To store the state of each bar 
// in order to change the color 
let states = []; 
let width = 1200
let height = 600

function rangeSlide(value){

  w = value;
  
  setup();
   }
   
function setup() { 
    createCanvas(width, height); 
    colorMode(HSB, height);

    // Insert Random values in array 
    values = new Array(floor(width/w+1)); 

    for(let i = 0; i < values.length; i++) { 
        values[i] = float(random(height)+20); 
    states[i] = 2
    if(states[i] == 2){
        fill(255, 173, 153);
    }
    } 
    enable()
} 





// selection sort starts here
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
       enable()  
    return arr; 

} 
// selection sort ends here

// bubble sort starts here
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
enable()
return arr; 
}
// bubble sort ends here

// quick sort starts here
async function quickSort(arr, start, end) { 
    if(start >= end) { 
       
        return; 
    } 
    let index = await partition(arr, start, end); 
    states[index] = 1; 
    
    await Promise.all([quickSort(arr, start, index-1), 
            quickSort(arr, index+1, end)]); 


        
} 
  
async function partition(arr, start, end) { 
   
    for(let i = start; i< end; i++) { 
        states[i] = 1; 
    } 
      
    let pivotIndex = start; 
    let pivotValue = arr[end]; 
    states[pivotIndex] = 0; 
      
    for(let i = start; i < end; i++) { 
        if(arr[i]<pivotValue) { 
            await swap(arr, i, pivotIndex); 
            states[pivotIndex] = 1; 
            pivotIndex++; 
            states[pivotIndex] = 0; 
        } 
    } 
      
    await swap(arr, pivotIndex, end); 
      
        for(let i = start; i < end; i++) { 
            states[i] = 1; 
        } 

    return pivotIndex; 
} 
// quick sort starts here


//  draw function 
function draw() { 
    background(0)

    for(let i = 0; i < values.length; i++) { 
        
        col = color(values[i], height,height);
       
        stroke(255, 204, 0);
        strokeWeight(3);
        fill(col);
        rect(i*w, height - values[i], w, values[i]);
    } 

}




let speed =  document.getElementById('rangeSpeed').innerHTML;
speed = 100;

//  swap function 
async function swap(arr, a, b) { 
    await sleep(speed); 
    let t = arr[a]; 
    arr[a] = arr[b]; 
    arr[b] = t; 
} 

// speed function 
function sleep(speed) { 

    return new Promise(resolve => setTimeout(resolve, speed)); 
} 

// calling selection sort
function selection()
{
    setup();
    disable()
    selectionSort(values, 0, values.length); 
}
// calling bubble sort
function bubble()
{
    setup();
    disable();
    bubbleSort(values, 0, values.length); 
}
// calling insertion sort
function insertion()
{
    setup();
    disable();
    insertionSort(values, 0, values.length); 
}
// calling quick sort
function quick(){
   
    setup();
    disable();
    quickSort(values, 0, values.length); 
  
}

function search(ele) {

    if(event.key === 'Enter') {
            
        eh = ele.value;
}
}

function rangeSpeed(fast){
    

    speed = fast;
   }
   

  
  
function disable(){

    document.getElementById('rangeWidth').disabled = true;
    document.getElementById('rangeWidth').classList.add('red');

    document.getElementById('resetButton').disabled = true;
    document.getElementById('resetButton').classList.add("red");

    document.getElementById('selection').disabled = true;
    document.getElementById('selection').classList.add("redButton");
    document.getElementById('selection').classList.remove("buttons");

    document.getElementById('bubble').disabled = true;
    document.getElementById('bubble').classList.add("redButton");
    document.getElementById('bubble').classList.remove("buttons");

    document.getElementById('insertion').disabled = true;
    document.getElementById('insertion').classList.add("redButton");
    document.getElementById('insertion').classList.remove("buttons");

    document.getElementById('quick').disabled = true;
    document.getElementById('quick').classList.add("redButton");
    document.getElementById('quick').classList.remove("buttons");
}

  
function enable(){
    
    document.getElementById('rangeWidth').disabled = false;
    document.getElementById('rangeWidth').classList.remove('red');

    document.getElementById('resetButton').disabled = false;
    document.getElementById('resetButton').classList.remove("red");

    document.getElementById('selection').disabled = false;
    document.getElementById('selection').classList.remove("redButton");
    document.getElementById('selection').classList.add("buttons");

    document.getElementById('bubble').disabled = false;
    document.getElementById('bubble').classList.remove("redButton");
    document.getElementById('bubble').classList.add("buttons");

    document.getElementById('insertion').disabled = false;
    document.getElementById('insertion').classList.remove("redButton");
    document.getElementById('insertion').classList.add("buttons");

    document.getElementById('quick').disabled = false;
    document.getElementById('quick').classList.remove("redButton");
    document.getElementById('quick').classList.add("buttons");
}

function settingsOpen(){

    document.getElementById('settings').classList.add("hide");
    document.getElementById('info').classList.remove("hide");
    document.getElementById('close').classList.remove("hide");
}
function settingsClose(){
    document.getElementById('settings').classList.remove("hide");
    document.getElementById('info').classList.add("hide");
    document.getElementById('close').classList.add("hide");
}