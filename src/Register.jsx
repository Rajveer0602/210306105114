import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const requestData = {
        "companyName": "goMart",
        "clientID": "1717866c-1d39-4f07-93f0-4cc245f4eb3c",
        "clientSecret": "vvzmIAqRcZxTZkuq",
        "ownerName": "Rahul",
        "ownerEmail": "210306105114@paruluniversity.ac.in",
        "rollNo": "1"
      };

      const res = await axios.post('http://20.244.56.144/test/auth', requestData);


      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleRegister}>Register</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Register;