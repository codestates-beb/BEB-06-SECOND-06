import { Fragment , useState } from "react";
import Signup from "../components/Signup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SiginIn(props) {
    const [ signinOepn , setSigninOepn ] =  useState(false);
    const [ id ,setId ] = useState();
    const [ password ,setPassword ] = useState();

    const onChangeId = (e) => {
      setId(e.target.value);
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value);
    }

    const onOpenSignIn = () => {
      setSigninOepn(true);
    }

    const onCloseSignIn = () => {
      setSigninOepn(false);
    }

    const navigate = useNavigate();

    const onSignIn = () => {

      const signIn = {
        user_id: id,
        password: password,
      };

        // axios.post('http://localhost:8080/user/login', {signIn})
        // .then(function(res){
        //   props.setUserData(res.data);
        //   props.setLogin(true);
        //   alert("로그인 성공!");
        //   navigate("/");
        // }).catch(function (error) {
        //   console.log(error);
        // });

        const data = {
          nickname: "알파카",
          address : "0x60A1764c74eaCa63344D2235Ee5AC1fA0D59Cd9D",
          eth_amount : "1",
          token_bet : "20",
          nft: []
        }

        props.setUserData(data);
        props.setLogin(true);
        navigate("/");
        alert("로그인 성공!");

    }


    return (
      <Fragment>
        <div className="login" >
          <div className="login_box" >
            <div className="login_title" >로그인</div>

            <div className="relative">
              <input className="login_input" placeholder="아이디" onChange={onChangeId} value={id}  ></input>
              <span className="material-symbols-outlined">
                  person
              </span>
            </div>

            <div  className="relative">
              <input className="login_input" placeholder="비밀번호"  onChange={onChangePassword} value={password}  type="password"  ></input>
              <span className="material-symbols-outlined">
              lock
              </span>
            </div>

            <div className="login_button" onClick={onSignIn} >로그인</div>
            <div className="sign_up_page_text" onClick={onOpenSignIn}  > 아이디가 없다면 <span style={{ cursor : "pointer" , color:"#343434" }}  >회원가입</span>  </div>
          </div>
        </div>

      { signinOepn && (
        <Signup  onCloseSignIn = {onCloseSignIn} />
      )}

      </Fragment>
    );
  }
  
  export default SiginIn;
  