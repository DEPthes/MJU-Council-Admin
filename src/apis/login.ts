import {api} from ".";

  export async function postLogin(username: string, password: string) {
    try {
      const response = await api.post(
        `http://15.164.152.131:8080/api/v1/users/login`,
        {username: username,
          password: password,},
      );
      const accessToken = response?.data.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        console.log("로그인 성공");
        window.location.replace("/");
        return accessToken
      }
    } catch (error: any) {
      console.error("로그인 뫙뫙:", error.response?.data || error.message);
    }
  }
  

