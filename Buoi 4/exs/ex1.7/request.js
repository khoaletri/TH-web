import axios from "axios";

const request = () => {
  const getAvatar = async () => {
    const res = await axios
      .get("https://api.sampleapis.com/avatar/info/");
    return res.data;
  };
  return {
    getAvatar,
  };
};

export default request;
