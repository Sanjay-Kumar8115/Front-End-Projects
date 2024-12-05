/* This JavaScript code snippet is selecting all elements with the class name "color-box" from the
document and storing them in the constant variable `boxes`. It then adds a click event listener to
each of these elements. When a "color-box" element is clicked, it changes the background color of
the body to the id of the clicked element. */
const boxes = document.querySelectorAll(".color-box");
// console.log(boxes)
// boxes.forEach(box => 
//     { box.addEventListener('click', function() {
//          document.body.style.backgroundColor = box.id; });
//      });

boxes.forEach(function(box){
    
    box.addEventListener('click', function(){
        document.body.style.backgroundColor = box.id; 
        
    });

});

let arr= [10,20,30,40,60];
arr.forEach(function(num){
    console.log(num)
})