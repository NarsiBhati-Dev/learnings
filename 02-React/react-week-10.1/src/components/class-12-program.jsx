import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Class12Program() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Clock Started ");
    setTimeout(() => {
      navigate("/");
    }, 8000);
  }, []);
  return <>Class12Program page</>;
}
