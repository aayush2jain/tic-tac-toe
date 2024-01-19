
let boxes=document.querySelectorAll(".box")
let turn=true;
const winpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
];
boxes.forEach((box) =>{
box.onclick=()=>{
     if(turn==true)
     {
        box.innerHTML="O"
        turn=false
     }
     else if(turn==false)
     {
          box.innerHTML="X"
          turn=true
     }
     
     box.onclick=null
     setTimeout(()=>{
      checkWinner();
     })
}})
const checkWinner=()=>{
  for(let item of winpattern){
    let a1=boxes[item[0]].innerHTML
    let a2=boxes[item[1]].innerHTML
    let a3=boxes[item[2]].innerHTML
    if(a1!=0&&a2!=0&&a3!=0){
      if(a1===a2&&a2===a3){
        alert(`winner is:${a1}`)
         setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>winner is: ${a1}</h1>
       </div>
       <div class="main">
        <a href="index.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
      }
    }
  }
}
