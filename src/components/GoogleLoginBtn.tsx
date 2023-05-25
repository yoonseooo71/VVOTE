import { styled } from "styled-components"
import { setLoginData, signInWithGoogle } from "../lib/firebase";
import { useAppDispatch } from "../lib/store/store";
import { userLogin } from "../lib/store/loginSlice";
import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = ()=>{
  const navigate = useNavigate(); 
  const dispatch = useAppDispatch() ; 
  const handleLogin = ()=>{
    signInWithGoogle()
      .then(res=>{
        const {user} = res ; 
        console.log(user);
        setLoginData(user);
        dispatch(userLogin());
        navigate("/") ;
      }) 
      .catch(error=>console.error(error))
  }
  return (
    <Wrapper onClick={handleLogin}>
      <GoogleIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABSNJREFUeF7tm1lsTFEYgP9JOo1WU41aGk1HNJHaQhM81C62CfUiIUOC2OrBEg8SsS9BCBGJelBEKNUQD7WltbWiTMSLnQcqmqANlcEodZuM/Jcz7tze5WxzZ2rmPE1mzn/u/3//cv5zZsYVCoVCkMDDlQSQjABnUqClpQXSrl8B5fnjcMIp/jsdks9dNFZ9zz1oKPyYMkN9nZ2dHbUkjWoKtL+sg+8Vl8HIUFaL0pesgNRCD6QMmMAqajlfKgBFUUC5cFZ9YOvxw1IV1S6WdWivNBDSAKC3A6vWRc1oo4VlgBAGEAgEwHVgp5Qw56GHNSN1/Q5IS0vnEQchALHwupmVvNHADaC18lRU85zHnVgo030LmES5AHzZsjZmIW9lHaZDtx37owsgXo3n8T6SYoqAeAx7tWni8DwJE2oA0Sp4pPPjbZZEjKeOAGxjQ77pTLllNBmVxRbXqqNramqCzLprastsB0XUeGoAonmPinadV8zcvWHU4TBqp2UYTwVANPR592dtBGGL7Xp9N9xpyjLeFkBbWxt8Kx7HHfop52sgKyuLW14vSNKDda+3UsCyCCY8ADUH33khsGcYtRdJVRfpz6kfJmGiZQS03+wSfgQthK4Xa1UZ3sOJBJuYljAFQLyvXc0OQnt5FeTk5DApEOvJ5gBelAC8P2WonxEI3lY0fgFowt9IST2Eblfrwe12x9oe5ucbRoBR+FtB6KzeN+0DaAHgAhgJWPg6S9HTO9I4Aizyv0Mk9FkAKQPLmENPK+ArbRWSZxGePDgFlk5MDYvEBYBJu7+z2CA0d26RmwKATQGM0CC3mvmQo7fASQA9M11QufLfBapxBDAACA5vEu73OzUAZdRn4QKYBOBgDZCeApDoNeD/BOBwHxB/NeA/BkDXB/y9CKHpOCp+9odZ4/2QkZFBM91wzrHaX9yyN561w8ev9D9zkgqg6FOxqnjJkDmwbPAcbiNEBLGNTgKQHQHoEe11mN5DGPaHggXhtz3p/aDSu9vx+wC8LvfuY0ufqtWhiHRlvhHSG08oxCINsHac9StUGYQNEA7tOcD0PkCNAINCaGY80eDS+FLH7gTR+/OPKNT5j8UPh/YobAlAnwak4FnhxlQ4OXGrOkVkV6BxKYv3cb2jvmZ12fz8/Ijlra/FX5RARYM/It/tlEMIOE5P3i58SDJ7Fqvx+v5fu64lAAwzX/UGaGx9Y2d3h88RxPGxG4WPyvqFWY1Hef3eTw0AJ9Y01sMm/0FmAERgZ9EamOYZwy1PBPFruvJ7LuqiR+TQ++XL3aY7FNUPJDb7S6G68c9X1TzD65kAi3pP75B/dmuh0Tjqmh9A2aMqNRIzX5+0E4v43Mr7OJEKAH4rO/P2SqYHG03GtPDmj4RJaSNMYeDvDu9/fQr17x6aQsd1Ak+22epjlftEmAqAjFQwA6J9n6XW0EA4s/ib7bZMDQAVPfrsHJQ9PWdL3skJZilhF/rMEUAEROtBNODoIdAaT10D9ErHIwSSEizGcwOI13TA3WbLiOVMhzKmGqCPBNEeQWY68B7GhACgAcFgEBbWbufqFmUBOF24CwoK/h3PWdYVBkAehtFAmhUWBUTmotdn504VarelAUBD8Oxw68N91aZowpBhOPc2aOWxhAegh9PQ0AAnmq8KnSPImljhx+QWwujuhVLvGqSmgFV04Hni0a9Xao///NPb8FTS/pJ7hEE9+qqfeTJ7qWcGHHl5eUxbG0tdcQwAi1JOzk0CSP55OsH/PP0bcekybkRMYOQAAAAASUVORK5CYII="/>
      <Text>구글로 시작하기</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 400px;
  height: 70px;
  background-color: white;
  border-radius: 20px;
  border: 1px #AFAFAF solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const GoogleIcon = styled.img`
  width: 32px;
  height: 32px;
`
const Text = styled.div`
  font-size: 24px;
  color: #AFAFAF ;
  margin-left: 20px;
`
export default GoogleLoginBtn ; 