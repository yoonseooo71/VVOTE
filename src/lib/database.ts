import { IpostData } from "../routes/PostWrite";

/**포스트데이터 서버에 전달해서 데이터 베이스에 저장 */
export async function setPostData(postData: IpostData) {
  const res = await fetch(`${process.env.REACT_APP_SERVER_PORT}/posts/write`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!res.ok) throw Error("Insert data failed");
  else return;
}

