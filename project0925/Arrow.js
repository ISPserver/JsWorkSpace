/*아래의 코드 단위는 사물 자체가 아니라, 정차 사물을 대량으로 생산할 수 있는 틀이다!!!
  그리고 전산분야에선 이 틀을 가리켜 클래스라 부른다*/
/*객체지향 프로그래밍 언어
객체지향은? 객체중심적 사고방식으로 접근해야 한다.
*/
  class Arrow{
    //클래스 안에 선언된 변수는, 이 클래스 소속이 되므로 변수명 앞에 자신꺼라는
    //대명사를 붙여야 하며, this라는 이미 정해진 변수를 쓴다.
    //this뒤의 '점'은 소유권을 '주체의' 뜻 
    //ES 2015년에 발표된 js에 의해서, 클래스가 소유한 변수는 constructor()라는 생성자 함수에 넣어둬야함
    // constructor(){}
    //화살 생성
    //클래스안에 선언된, 즉 클래스가 보유한 함수는 해당 사물의 동작방법을
    //결정짓는다 하여 메서드라 한다.method(방법)
    constructor(x,y){
      this.arrow;
      this.stepX=10;
      this.arrow=document.createElement("span");
      this.arrow.innerText="→";
      this.arrow.style.position="absolute";
      this.arrow.style.left=x+"px";
      this.arrow.style.top=y+"px";
      this.arrow.style.color="red";
      this.arrow.style.fontSize="30px";
      
      document.body.appendChild(this.arrow);
    }
    move(){
      this.arrow.style.left=parseInt(this.arrow.style.left)+this.stepX+"px";
    }
  }
