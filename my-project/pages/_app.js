import '../styles/globals.css'
import React, { useState, useEffect } from "react";
import Home from "./index";
import DashCaseManager from "./components/DashCaseManager";
import LogoutAlert from "./components/LogoutAlert";
import DashProducer from "./components/DashProducer";


function MyApp({ Component, pageProps }) {
  const caseManagerUser = {
    username: "Case Manager",
    password: "test123"
  }
  const producerUser = {
    username: "Producer",
    password: "test123"
  }
  const [user, setUser] = useState({username:"", password:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.username == caseManagerUser.username && details.password == caseManagerUser.password){
      console.log("Logged in as Case Manager");
      setUser({
        username: details.username,
        password: details.password
      })
    } else if(details.username == producerUser.username && details.password == producerUser.password){
      console.log("Logged in as Producer");
      setUser({
        username: details.username,
        password: details.password
      })
    } else{
      console.log("Details do not match");
      setError("Nutzername oder Passwort falsch")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      username: "",
      password: ""
    });
    setError("");
  }

  useEffect(() => {
    document.title = "Dashboard für medizinische 3D-Print-Produkte und Herstellungsprozesse"
  }, []);

  {/*
    return(
      <div className="App">
        {(user.username != "") ? (
            <DashCaseManager Logout={Logout}/>
        ):(
            <Home Login={Login} error={error}/>
        )}
      </div>
  );
}
  */}
  return(
      <div className="App">
        {(user.username == "Case Manager") ? (
            <DashCaseManager Logout={Logout}/>
        ):((user.username == "Producer") ? (
            <DashProducer Logout={Logout}/>
        ) : (
            <Home Login={Login} error={error}/>
        )
        )}
      </div>
  );
}

export default MyApp;
