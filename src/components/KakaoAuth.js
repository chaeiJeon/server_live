import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

// import login from "../API/AUTH/login.js";

const Auth = () => {
  const REST_API_KEY = "48d8cb78dea948d30fa7d494009ab18a";
  const REDIRECT_URI = "http://localhost:3000/SERVER/src/init.js";
  const CLIENT_SECRET = "bed6179badab75013d831a38632ea02b";
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();
  const Kakao = window.Kakao;

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET
    });
    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      console.log(res);
      if (!Kakao.isInitialized()) {
        window.Kakao.init(REST_API_KEY);
      }

      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return null;
};
export default Auth;
