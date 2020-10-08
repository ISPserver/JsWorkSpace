//두 수 a,b에 대한 절대값을 반환하는 함수!
function getAbs(a,b){
  return Math.abs(a-b);
}
//랜덤 구하는 함수 
function getRandom(n){
  return Math.floor(Math.random()*n);
}

//숫자에 0을 붙인 날짜 처리
//매개변수, 즉 인수로 수를 전달시 함수내에서 알아서 0 붙여줌
//(두자리 한자리 판단마저도 여기에서 알아서 해줌)
function getZeroDate(n){
  if(n<10){
    n="0"+n;
  }
    return n;  
}
//랜덤 구하는 함수||
//ex) 7과 23사이 랜덤값 반환 
//a:7(최소값) b:23(최대값)
function getRandomBetween(min,max){
  return Math.floor(Math.random() * (max-min+1)+ min);  
}

/*-----------------------------------------------
아래의 함수는, 두 물체간 충돌여부를 판단해주는 함수이다.
box1 : 판단 대상 요소1 ex) div 
box2 : 판단 대상 요소2 ex) div
-----------------------------------------------*/
function collisionCheck(box1, box2) {
  //두물체간 충돌 여부 판단 
  var x1=parseInt(box1.style.left);
  var width1=parseInt(box1.style.width);
  var y1=parseInt(box1.style.top);
  var height1=parseInt(box1.style.height);
  
  var x2=parseInt(box2.style.left);
  var width2=parseInt(box2.style.width);
  var y2=parseInt(box2.style.top);
  var height2=parseInt(box2.style.height);
  /*
  조건1)x축 충돌: me의 x축+width1를 더한값은 target의 x2축 이상일 경우
  조건2)y축 충돌: me의 y축+height1를 더한 값이  target의 y2축 이상일 경우
  조건3)me의  y1값은 target의  y2에 height2를 더한값보다 같거나 작아야 함
  조건4)me의  x1값은 target의  x2에 width2를 더한값보다 같거나 작아야 함
  */
  var result = (x1+width1 >= parseInt(box2.style.left))
  && (y1+height1)>=parseInt(box2.style.top) 
  && y1 <=(y2+height2) 
  && x1 <=(x2+width2)  

 return result;
}

/*-----------------------------------------------
해당 월의 총 일수 구하기(마지막 날짜)
yy:년도 mm: 구하고 싶은 월을 의미
주의)js에서 월은 0부터 시작하므로, 10월구하려면 9를 넘겨야함
ex) 10월은 31일 / 11월은 30일
-----------------------------------------------*/
function getLastDate(yy,mm){
  var d = new Date(); //현재 날짜임. 조작이 가해져야 함.
  d.setFullYear(yy);
  d.setMonth(mm+1);//일단 다음달로 넘어감 why? 0을 대입해 이전달 마지막날 구하기위해.
  d.setDate(0);//이전 달의 마지막 날로 돌아감.
  return d.getDate();
}