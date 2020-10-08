/*extends GameObject를 명시하는 순간부터 Hero의 인스턴스는
마치 내 것처럼, GameObject의 모든 변수,함수 사용가능
그래서 상속이라고 한다.*/
class Hero extends GameObject{    
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);//부모를 먼저 초기화
    }
    //아래 메서드는 주인공만의 행동방법이므로, 이 클래스 안에서 정의하면 됨
    tick(){
        this.x=this.x+this.velX; //기존 x위치값에 속도만큼을 더해나간다..
        this.y=this.y+this.velY; //기존 y위치값에 속도만큼을 더해나간다..
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
    
}




