let a =20//Global variable-accessed everywhere

function add(b) {
   console.log(a+b);
   let c =30;//local variable-accessible in the scope defined
   console.log(a+b+c);
   d=6// if it doesnt have a let is considerd global or mayb written below console 

}
add(20);
console.log({a});
let c= 50;
console.log({c});
console.log({d});

function greet() {
    let hello = "hey";//loccal to greet and global to talk
    function talk() {
        let greetings = "hello there";
        console.log(`${hello} ${greetings}`);
        
    }
    talk()
  
}
 greet()

 
