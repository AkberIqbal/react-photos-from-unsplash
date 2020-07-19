import axios from "axios";

const apiHandler = async passedSearchKey => {
  const apiURL =
    "https://api.unsplash.com/search/photos?client_id=VpuPw91mgxkzHe1Jcx4GXHWz-XZLi4oujTcsS3BBy7E&page=1&query=" + passedSearchKey;
  const response = await axios(apiURL);
  return response;
};

export default apiHandler;
