import { Fragment, React, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

function RoundOf2(props) {

  // 배팅금액 첫번째 텍스트 박스
  const [betFirst, setBetFirst] = useState('0')
  // 배팅금액 두번째 텍스트 박스
  const [betSecond, setBetSecond] = useState('0')
  // redux로 현재 로그인 된 유저 정보를 가져온다. 
  const userData = useSelector( (state) => state.userData.userData );

  const setBetValueFirst = (e) => {
    setBetFirst(e.target.value);
  }
  const setBetValueSecond = (e) => {
    setBetSecond(e.target.value);
  }

  const vote_first = () => {  // 1번에 투표
    const data = {
      user_id: userData.user_id,
      choice: '1'
    }
    axios.post('http://localhost:8080/user/vote', data)
    .then(function(res){
      alert("투표 완료! 20 토큰이 부여되었습니다.")
    }).catch(function (error) {
      alert("투표는 한번만 가능합니다");
    });
  }

  const vote_second = () => {  // 2번에 투표
    const data = {
      user_id: userData.user_id,
      choice: '2'
    }
    axios.post('http://localhost:8080/user/vote', data)
    .then(function(res){
      alert("투표 완료! 20 토큰이 부여되었습니다.")
    }).catch(function (error) {
      alert("투표는 한번만 가능합니다");
    });
  }

  const bet_first = () => {
    const data = {
      user_id: userData.user_id,
      token_bet: betFirst,
      choice: '1'
    }
    axios.post('http://localhost:8080/user/bet', data)
    .then(function(res){
      alert("배팅완료")
    }).catch(function (error) {
      alert(error.response.data);
    });
  }

  const bet_second = () => {
    const data = {
      user_id: userData.user_id,
      token_bet: betSecond,
      choice: '2'
    }
    axios.post('http://localhost:8080/user/bet', data)
    .then(function(res){
      alert("배팅완료. \n마감전까지 동일한 팀에 배팅 가능합니다.")
    }).catch(function (error) {
      alert(error.response.data);
    });
  }

    return (
      
      <Fragment >
         { props.tournament == 2 && (
            <div className={"league_box" +  (props.tournament == 2 ? " on" : "" )   } >

              <div className="final_img_box" >
                <div className="final_img" ></div>
                <div>
                  <div className="league_button" onClick={vote_first} >투표하기</div>
                  <input  className="bet_input" onChange={setBetValueFirst} />
                  <div className="league_button" onClick={bet_first}>배팅하기</div>
                </div>
              </div>

              <div className="vs_text final" >VS</div>

              <div className="final_img_box" >
                 <div className="final_img f2" ></div>
                 <div>
                  <div className="league_button" onClick={vote_second}>투표하기</div>
                  <input  className="bet_input" onChange={setBetValueSecond}/>
                  <div className="league_button" onClick={bet_second}>배팅하기</div>
                </div>
              </div>
              

              
            </div>
         )}
      </Fragment>
    );
  }
  
  export default RoundOf2;
  