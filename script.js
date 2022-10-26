var loadingId;
function ShowLoading(){
  var container=document.getElementById('loading-bg');
  var barLine=document.getElementById('loading-line');
  var maxWidth=container.clientWidth-10;
  var currentWidth=barLine.clientWidth;
  var currentPossition=0;
  var maxPossition=maxWidth;
  loadingId=setInterval(StartLoading,5);
  var increaseWidth=true;
  var rightDirection=true;
  var endPoint=false;
  
  function StartLoading(){
    if(endPoint)
    {
      if(increaseWidth&&rightDirection){
        increaseWidth=false;
        endPoint=false;
      }
      else if(!increaseWidth&&rightDirection){
        increaseWidth=true;
        rightDirection=false;
        endPoint=false;
      }
      else if(increaseWidth&&!rightDirection){
        increaseWidth=false;
        endPoint=false;
      }
      else{
        increaseWidth=true;
        rightDirection=true;
        endPoint=false;
      }
    }
    else 
    {
      if (increaseWidth&&rightDirection) {
        currentWidth++;
        barLine.style.width=currentWidth+'px';
      }
      else if(!increaseWidth&&rightDirection){
        currentWidth--;
        currentPossition++;
        barLine.style.width=currentWidth+'px';
        barLine.style.left=currentPossition+'px';
      }
      else if(increaseWidth&&!rightDirection){
        currentWidth++;
        currentPossition--;
        barLine.style.width=currentWidth+'px';
        barLine.style.left=currentPossition+'px';
      }
      else{
        currentWidth--;
        barLine.style.width=currentWidth+'px';
      }
      
      
      
      if(currentWidth>=maxWidth || currentPossition>=maxPossition || currentWidth<0 || currentPossition<0){
        endPoint=true;
      }
    }
  }
}

(function(){ShowLoading();})();
