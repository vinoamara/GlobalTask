import {React,useState,useEffect } from "react";
import './App.css';

function App() {

  const [userInputs, setUserInputs] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
  });
  const handleChange = e => {
    setUserInputs({
      ...userInputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
      userInputs
    );
  }
  useEffect(() => {
    // storing input name
    localStorage.setItem("userInputs", JSON.stringify(userInputs));
  }, [userInputs]);
  


  return (
    <div className="App">
      <form action="#" method="get">
                    <label for="firstname">
                        First Name :
                    </label>
                    <input
                     type="text"
                     name="Firstname"
                     id="Firstname"
                        
                        value={userInputs.FirstName}
                        onChange={ handleChange
                        }
                        placeholder="Enter First Name"
                        required
                        padding= "8px"
                    />
                    <label for="firstname">
                        Last Name :
                    </label>
                    <input
                        type="text"
                        name="Lastname"
                        id="Lastname"
                        value={userInputs.LastName}
                        onChange={handleChange
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    <label for="Lastname">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        value={userInputs.Email}
                        onChange={handleChange
                        }
                        placeholder="Enter Email"
                        required
                    />
                    <label for="Phone">Phone Number:</label>
  <input type="tel" id="Phone" name="Phone" pattern="[0-9]{10}" value={userInputs.Phone}
                        onChange={handleChange
                        } placeholder="Enter a 10-digit phone number" required></input>
                   
      <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
    </div>
  );
}

export default App;
