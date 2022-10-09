const body =document.querySelector("body");
//div1
const div=document.createElement("div");
div.className="container";
body.append(div);

//input value
const inputdata=document.createElement("input");
inputdata.className="ipdata";
inputdata.type="text";
inputdata.placeholder="type your goal";
div.append(inputdata);

// button
const butt=document.createElement("button");
butt.textContent="next";
butt.className="btn";
div.append(butt);

//div2
const div2=document.createElement("div");
div2.id="change";
body.appendChild(div2);

const changes=document.getElementById("change")


 butt.addEventListener('click',()=>{
  changes.innerHTML=`<h3>${inputdata.value}</h3>`
 
 })
