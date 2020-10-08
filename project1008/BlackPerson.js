/*백인을 정의한다!!
2015 ECMA
*/
class BlackPerson extends Person{
    //this: 나를 가리키는 변수
    //super: 부모를 가리키는 변수(예약어)
    constructor(){
        //this.name="nigro"; 부모가 존재하기도 전에 선언하면 오류남
        super(5,10);//부모의 constructor()
        this.name="nigro";
        //부모 생성자 호출 이유: 생물학적으로도 당연하다,
        //자식의 초기화보다 우선시해야하는 작업은 부모의 존재 즉, 초기화임
        //상태는 변수로 표현한다. 즉 속성(property)
        this.color="black";        
    }
    //행동은 함수로 표현한다.(즉 메서드 ) 
}
