import React from 'react'

const TestofSlice = () => {

//  let arr = ["a" , "b" , "c" , "d" , "e"];

//  let newArr = arr.slice(0 , 3);
//  console.log("newArr" , newArr);
// console.log("arr" , arr);


  let arr = ["a" , "b" , "c" , "d" , "e"];
  
  let newarr = arr.splice(3, "A", "B", "C");
  
  const Person = new Map ([
    ["name" , "sujit"] ,
    ["age"  , 23 ]
  ])

  let add = "";
  Person.forEach(function (value  , key) {
    add = add + "  "  + key + "  "  + value
  })
console.log("add" , add);
<h3>{add}</h3>



//   bind
const person = {
    name : "Alis",
    greet : function(arg , arg1){
        console.log("hello" , this.name ,   {arg} , {arg1});
    }
}

 const bindfunction = {
    name : "sachin"
 }

 const bindtwo = {
    name : "sevag"
 }
 const bindedfun = person.greet.bind(bindfunction  , "sachin" , "sevag");
 <h1>{bindedfun() }</h1>
 
  return (
    <div>
        TtestofSlice
<p>{newarr}</p>
<p>{arr}</p>
    
   
    </div>
  )
}

export default TestofSlice;