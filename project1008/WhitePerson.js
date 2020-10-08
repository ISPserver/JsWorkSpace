/*백인을 정의한다!!
2015 ECMA
*/
class WhitePerson extends Person{
    constructor(){
        super();//부모의 constructor()
        //부모 생성자 호출 이유: 생물학적으로도 당연하다,
        //자식의 초기화보다 우선시해야하는 작업은 부모의 존재 즉, 초기화임
        //상태는 변수로 표현한다. 즉 속성(property)
        this.color="white";        
    }
    //행동은 함수로 표현한다.(즉 메서드 ) 
}