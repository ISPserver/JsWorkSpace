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