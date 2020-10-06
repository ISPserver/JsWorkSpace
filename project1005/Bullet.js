class Bullet{
  //총알이 태어날때 부여할 속성들을 생성자에서 처리한다.
  constructor(src,x,y,width,height,velX,velY){
    this.img;
    this.src=src;
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.velX=velX;
    this.velY=velY;

    this.img=document.createElement("img");
    this.img.src=this.src; //폭탄,총알,등등 웨폰이 여러가지가 있으므로 변수로 처리
    this.img.style.position="absolute";
    this.img.style.left=this.x+"px";
    this.img.style.top=this.y+"px";
    this.img.style.width=this.width+"px";
    this.img.style.height=this.height+"px";
    wrapper.appendChild(this.img);//화면에 부착!
  }
  tick(){ //총알의 물리량 변화
    this.y+=this.velY;

    //총알이 한걸음 한걸음 진행할때마다 배열에 존재하는 모든 적군대상
    //충돌했는지 여부 판단
    //적군배열에서 요소삭제 splice(index,갯수), 화면에서도 삭제(removeChild)    
    for(var i=0; i<2; i++){
      for(var j=0; j<enemyArray.length; j++){
        var result = collisionCheck(this.img, enemyArray[j].img);
        if(result){
          var img = enemyArray[j].img;
          wrapper.removeChild(img);
          var indexEnemy = enemyArray.indexOf(enemyArray[j].img); //현재 총알의 인스턴스가 배열의 몇번쨰에 들어있는지
          enemyArray.splice(indexEnemy,indexEnemy+1);

          //총알배열에서 요소삭제 splice(index,갯수), 화면에서도 삭제(removeChild)        
          wrapper.removeChild(this.img);
          var index = bulletArray.indexOf(this); //현재 총알의 인스턴스가 배열의 몇번쨰에 들어있는지
          bulletArray.splice(index,index+1);
        }
      }
    }
  }

  render(){
    this.img.style.top=this.y+"px";
  }
}