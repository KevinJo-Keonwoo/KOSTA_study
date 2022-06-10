//o1은 객체임 
//변수를 사용할 때 객채 내의 프로퍼티면 반드시 this. 를 사용해야함
//자바에서는 생략 가능했는데 JS에서는 생략하면 안됨.
var customer = {
    id:'id1',
    name:'조건우',
    info: function(){
        console.log(this.id, this.name);
    }
};

customer.id = 'id9';
customer.info(); //id9, 조건우

var customerArr = [];
// customerArr[0] = customer;

customerArr.push({
    id:'id1',
    name:'조건우',
},{
    id:'id2',
    name:'전승현',
},{
    id:'id3',
    name:'한미래',
}
); //객체 3개를 push 해줌 

console.log(customerArr);
console.log(customerArr[2]);











