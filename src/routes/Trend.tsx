import { useState, useEffect} from "react";
import { styled } from "styled-components";
import Post from "../components/Post";
import { getPostData } from "../lib/firebase";
import { DocumentData, Query } from "firebase/firestore";

type IpostList = JSX.Element[] ; 

const Trend = ()=>{
  const [nextQuery,setNextQuery] = useState<null | Query>(null);

  const [postList,setPostList] = useState<IpostList>([]); 

  /**firebase에서 데이터가져와서 페이지네이션 관련작업하는 함수 */
  async function pagination(query:null|Query) {
    const postData = await getPostData(query);
    /**데이터를 가져왔는지 못가져왔는지 검사 */
    if (postData.docSnap !== null && postData.nextThunk !== null) {
      setNextQuery(postData.nextThunk) ;
      postData.docSnap.forEach((doc:DocumentData)=>setPostList((postList)=>[...postList,<Post key={doc.data().id} postData={doc.data()}/>])) ;
    } else {
      console.log("데이터 없음");
    }
  }
  /**다음 데이터 가져올 Query로 pagination 함수실행 */
  function getPagingData() {
    pagination(nextQuery);
  }
  
  useEffect(()=>{
    /**처음 pagination 함수실행 */
    function getFirstPagingData() {
      pagination(null);
    }
    getFirstPagingData();
  },[]);

  return (
    <Wrapper>
      {postList && postList}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
  @media all and (max-width: 1400px){
    width: 1050px;
  }
  @media all and (max-width: 1050px){
    width: 90%;
  }
  
`

export default Trend ; 