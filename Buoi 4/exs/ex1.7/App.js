import { useEffect, useState } from "react";
import request from "./request";
import "./style.scss";

const App = () => {
  const { getAvatar } = request();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar()
      .then((res) => {
        setAvatar(res[0]);
      })
      .catch((err) => {
        console.log("lỗi", err);
      });
  }, []);

  return (
    <div className="container">
      {!avatar ? null : (
        <>
          <div className="title">Thể loại</div>
          <ul className="list-group">
            {avatar.genres.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
          <hr />
          <div className="title">Tóm tắt</div>
          <div> {avatar.synopsis}</div>
          <hr />
          <div className="title">Năm phát sóng</div>
          <div> {avatar.yearsAired}</div>
          <hr />
        </>
      )}
    </div>
  );
};

export default App;
