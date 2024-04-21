import React, { useEffect, useState } from "react";
import { useBeforeUnload } from "react-router-dom";
const Github = () => {
  //   const data = useBeforeUnload();
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/AunHassan")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Github Profile :{Data.followers}</h1>
      <img src={Data.avatar_url} alt="Github Profile" width={300} />
    </div>
  );
};

export default Github;

// export const githubInfoLoader = async () => {
//   const res = await fetch("https://api.github.com/user/AunHassan");
//   return res.json();
// };
