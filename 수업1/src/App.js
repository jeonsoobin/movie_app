import React from 'react';
import Macaron from './Macaron';
import propTypes from 'prop-types';

//function Food(props){  //자식컴포넌트
//  return (
//    <h1>I Like {props.propsName}</h1>
//   );
//}

// function Food(props){  //구조분해할당
//    const {propsName} = props;
//    return (
//        <h1>I Like {propsName}</h1>
//  );
// }

//function Food({propsName})  {  //구조분해할당
 // return (
 //    <h1>I Like {propsName}</h1>
 // );
//}

function Food({propsname, propsid, propsimage}){
  return(
    <div>
      <h1> cake No. {propsid}</h1>
      <h2>  {propsname}</h2>
      <img src={propsimage} alt={propsname} />
    </div>
  );
}

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];

const cakes = [
  {
    id:1,
    name:  'cake1',
    image: 'https://m.bakingmon.com/web/product/big/201906/1646f9e0006d3882dda12b58b4ba71aa.jpg',
  },
  {
    id:2,
    name:  'cake2',
    image: 'https://m.tlj.co.kr:8008/data/product/2019-4-4_event(35).jpg',
  },
  {
    id:3,
    name:  'cake3',
    image: 'https://cdn.imweb.me/thumbnail/20200420/5620dbccc8168.jpg',
  },
];

function App() { //부모컴포넌트
  return( 
   <>
       <div> 안녕하세요!! </div>
       <Macaron />
       {cakes.map(cake => ( 
                                                       <Food 
                                                              propsid={cake.id}
                                                              propsname={cake.name}
                                                              propsimage={cake.image}
                                                         />
                                                 ))}
   </>
  );
}

// class App extends React.Component {
 //  render() {
 //    return (
//      <div>안녕하세여!!</div>
 //      <Macaron />
 //      <Coffee />
  //     </>
 //    );
 //  }
// }

Food.propTypes = {
  propsid: PropTypes.number.isRequired,
  propsname: PropTypes.string.isRequired,
  propsimage: PropTypes.string
}

export default App; /*App 이라는 이름으로 내보내기 */
