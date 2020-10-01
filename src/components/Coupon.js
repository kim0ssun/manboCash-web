import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState('');

  useEffect(() => {

    axios.get('/bizApi/bizmoney?api_code=0301&custom_auth_code=REAL578e05660eaf4a8b8182a66ff0ea98c9&custom_auth_token=UkyROHokNAPknVoGTsYjEw==&dev_yn=N&user_id=cashmanbo@gmail.com')
      .then(res => {
        console.log("data => " + res.data);
        // setData(res);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <Fragment>
      <h1>Coupon Page</h1>
      <p>Testing......</p>
    </Fragment>
  )
}
