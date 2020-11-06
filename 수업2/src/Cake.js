//Cake 클래스형 컴포넌트
// <h1>케이크가격 :</h1>
//,<h2>할인가격
//버튼누르면 할인가격 나오도록 30%할인
import React from'react' ;

class Cake extends React.Component{

state = {
    price:10000,
    discountPrice: 0,
};

discount = () => {
    console.log('할인하기');
    this.setState(current => ({
        discountPrice: current.price *0.7,
    }));
}

render(){
    return(
        <div>
            <h1>치즈케이크 가격은 {this.state.price}입니다</h1>
            <h2>30% 할인가격은{this.state.discountPrice}입니다</h2>
            <button onClick={this.discount}>30%할인</button>
        </div>
    );
}
}