/*달력을 구성하는 하나의 칸(셀)을 정의*/
class Cell{
  constructor(container, width, height, text){
    this.div= document.createElement("div");
    this.width=width;
    this.height=height;
    this.container=container;
    this.text=text; //박스안에 작성할 내용(다이어리)
    //텍스트 출력
    this.div.innerHTML="<h4>"+this.text+"</h4>";
    this.div.style.textAlign="center";
    //스타일 적용
    this.div.style.width=this.width+"px";
    this.div.style.height=this.height+"px";
    this.div.style.background="yellow";
    this.div.style.border="1px solid orange";
    this.div.style.boxSizing="border-box";
    this.div.style.float="left";
    

    this.container.appendChild(this.div);
  }
}