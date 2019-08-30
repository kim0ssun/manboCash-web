import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default props => {
  const [data, setData] = useState('');

  useEffect(() => {
  
    axios.get(`http://issuev3apitest.m2i.kr:9999//serviceapi.asmx/ServiceCouponList?CODE=1230&PASS=manbo&DOCCODE=1230000`)
      .then(res =>{
        console.log(res);
        // setData(res);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <Fragment>
      <h1>Coupon Page</h1>
      <p>{}</p>
    </Fragment>
  )
}
