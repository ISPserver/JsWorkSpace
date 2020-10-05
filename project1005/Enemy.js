/*클래스명은 대문자로 시작한다(OOP 개발자들사이의 규칙) */
class Enemy{  
  constructor(src,x,y,width,height,velX,velY){
    //적군의 이미지가 여러개이므로, 매개변수로 받을것.    
    this.x=x;
    this.y=y;
    this.src=src;
    this.width=width;
    this.height=height;    
    this.velX=velX;
    this.velY=velY;

    //태어날때, 이 객체의 속성을 작성하면 됨.
    this.img=document.createElement("img");
    this.img.src=this.src;
    this.img.style.position="absolute";
    this.img.style.left=this.x+"px";
    this.img.style.top=this.y+"px";
    this.img.style.width=this.width+"px";
    this.img.style.height=this.height+"px";
    //화면에 부착
    wrapper.appendChild(this.img);
  }
  //주인공의 물리량 변화
  tick(){
    this.x+=this.velX;
    this.y+=this.velY;
  }
  //화면에 그래픽 처리
  render(){
    this.img.style.left=this.x+"px";
    this.img.style.top=this.y+"px";
  }
}