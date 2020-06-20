
let values = []; 
let w;
w = 20;

var milliseconds = 0, seconds = 0, minutes = 0;
var timer;

var stopWatchElement = document.querySelector('.stopwatch');

function startWatch(){
    if(!timer){
    timer = setInterval(run, 10);
    document.getElementById('sw').classList.add('greenStopWatch');
    document.getElementById('sw').classList.remove('redStopWatch');
    document.getElementById('swIcon').classList.add('greenStopWatch');
    document.getElementById('swIcon').classList.remove('redStopWatch');
    }
}
function run(){
    stopWatchElement.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" +  (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    milliseconds++;
    if(milliseconds== 100){
        milliseconds = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
}
function pauseWatch(){
    clearInterval(timer);
    timer = false;
    document.getElementById('sw').classList.remove('greenStopWatch');
    document.getElementById('sw').classList.add('redStopWatch');
    document.getElementById('swIcon').classList.remove('greenStopWatch');
    document.getElementById('swIcon').classList.add('redStopWatch');
}
function stopWatch(){
    clearInterval(timer);
    timer = false;
    milliseconds = 0, seconds = 0, minutes = 0;
    stopWatchElement.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" +  (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    
}



// To store the state of each bar 
// in order to change the color 
let states = []; 
let width = 1200
let height = 600

// if($(window).width() >= 320 && $(window).width() <= 420){
//     w = 12;
//     width = 350;
//     height = 175;
//     console.log('width >= 10000');
//   }

if($(window).width() >= 0 && $(window).width() <= 1200){
    document.getElementById('body').classList.add('hide');
    window.alert("This website isn't available yet for mobile devices.");
  }



function rangeSlide(value){

  w = value;
  
  setup();
   }
   
function setup() { 
    stopWatch()
    createCanvas(width, height); 
   
    colorMode(HSB, height);
  


    // Insert Random values in array 
    values = new Array(floor(width/w)); 

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

    startWatch()
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
        pauseWatch()
       enable()  
    return arr; 

} 
// selection sort ends here

// bubble sort starts here
async function bubbleSort(arr) { 

    startWatch()
    var k;
    var i;

    for(k = 1; k < arr.length; k++){
        for(i=0; i < arr.length-k-1; i++)
        {
            if(arr[i] > arr[i+1]){
                states[i] = 0;
                states[i+1] = 0;
                await swap(arr, i, i+1); 
                
        }
    }
            states[i] = 0;     
} 
pauseWatch()
enable()
return arr; 
}

async function insertionSort (arr){

    startWatch()
    var i, value, index;
    for(i = 0; i < arr.length-1; i++){
      await sleep(speed);
      value = arr[i];
      index = i;
      while(index > 0 && arr[index-1] > value){
        arr[index] = arr[index-1];
        index = index-1;
      }
      arr[index] = value;
    }
    pauseWatch()
    enable()
    return arr;
}
















// bubble sort ends here
// quick sort starts here

// async function quickSort(arr, start, end) { 

    
//     if(start >= end) { 
       
//         return; 
//     } 
//     let index = await partition(arr, start, end); 
//     states[index] = 1; 
    
//     await Promise.all([quickSort(arr, start, index-1), 
//             quickSort(arr, index+1, end)]); 


        
// } 
  
// async function partition(arr, start, end) { 
   
//     for(let i = start; i< end; i++) { 
//         states[i] = 1; 
//     } 
      
//     let pivotIndex = start; 
//     let pivotValue = arr[end]; 
//     states[pivotIndex] = 0; 
      
//     for(let i = start; i < end; i++) { 
//         if(arr[i]<pivotValue) { 
//             await swap(arr, i, pivotIndex); 
//             states[pivotIndex] = 1; 
//             pivotIndex++; 
//             states[pivotIndex] = 0; 
//         } 
//     } 
      
//     await swap(arr, pivotIndex, end); 
      
//         for(let i = start; i < end; i++) { 
//             states[i] = 1; 
//         } 

//     return pivotIndex; 
// } 
// quick sort starts here


//  draw function 
function draw() { 
    background(0); 
    
    for(let i = 0; i < values.length-1; i++) { 
        
        let col = color(values[i], height,height);
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
function insertion(){
     setup();
     disable();
     insertionSort(values, 0, values.length); 
}

// calling quick sort
// function quick(){
   
//     setup();
//     disable();
//     quickSort(values, 0, values.length); 
  
// }

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

    // document.getElementById('insertion').disabled = true;
    // document.getElementById('insertion').classList.add("redButton");
    // document.getElementById('insertion').classList.remove("buttons");

    // document.getElementById('quick').disabled = true;
    // document.getElementById('quick').classList.add("redButton");
    // document.getElementById('quick').classList.remove("buttons");
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

    // document.getElementById('insertion').disabled = false;
    // document.getElementById('insertion').classList.remove("redButton");
    // document.getElementById('insertion').classList.add("buttons");

    // document.getElementById('quick').disabled = false;
    // document.getElementById('quick').classList.remove("redButton");
    // document.getElementById('quick').classList.add("buttons");
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


function rotateButton(){
    document.getElementById('defaultCanvas0').classList.add("canvasRotation");
    document.getElementById('syncIcon').classList.add("hide");
    document.getElementById('syncIcon2').classList.remove("hide");
}
function rotateBack(){
    document.getElementById('defaultCanvas0').classList.remove("canvasRotation");
    document.getElementById('syncIcon2').classList.add("hide");
    document.getElementById('syncIcon').classList.remove("hide");
}





