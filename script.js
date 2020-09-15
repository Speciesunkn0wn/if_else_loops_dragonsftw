var wrapperEle = document.body.querySelector(".wrapper");
var data = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<data.length; i++){
  elementCreate(data[i]);
}

function elementCreate(str){
  var ele = document.createElement("div");
  if(str==="dog"){
  ele.innerHTML=str;
    ele.innerHTML="borf borf";
  }else if(str!=="dog"&&str!=="cat"){
    ele.innerHTML="I am an animal";
  }else{
    ele.innerHTML="I am a cat";
  }
  wrapperEle.appendChild(ele);
}