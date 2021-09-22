import React, { useState } from "react";
import "./App.css";
function App() {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);


  const userInfo = async () => {
    setisBtnClick(true);

    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

    setInterval(() => {
      setisDataFetch(true);
    }, 1500);


  };




  return (
    <div className="App">
      <button className="btn" onClick={userInfo}>Get Users</button>
      {
        isBtnClick ? (
          isDataFetch ? (

            <div className="container">
              {
                users.map(({ id, first_name, last_name, avatar, email }) => {
                  return (

                    <div className="card">
                      <div className="image">
                        <img src={avatar}></img>
                      </div>
                      <div>
                        <h2>{first_name} {last_name}</h2>
                        <p>{email}</p>
                      </div>
                    </div>
                  )
                })}
            </div>) : (<div className="loader">LOADING.....</div>)) : (<> </>)
      }
    </div>
  );
}

export default App;
