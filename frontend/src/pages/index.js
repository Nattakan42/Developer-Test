import React, { useEffect, useState } from 'react';
import { getValue } from '../../services/serverService'

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const result = await getValue();
        setData(result);
    };
    fetchData();
  }, []);





  return (
        <div className="container pt-3 ">
    <div className="row justify-content-center ">
      <div className="col-sm-12 ">
        <div className="card">
        <div className="bg-success bg-gradient  text-white">
            <h3 className="card-title text-center">Proposition</h3>
            </div>
          <div className="card-body ">
          <div className=" d-flex align-items-center justify-content-center mt-3 fs-4">
            <p >3, 5, 9, 15, X, Y, Z finding X, Y, Z value</p>
        </div>
        <div className=" d-flex align-items-center justify-content-center  fs-4">
          <p  style={{ marginRight: '1rem',fontWeight: 'bold',color:'red'}}>Answer</p>
        {data ? (
          <p>
            3, 5, 9, 15, {data?.valueX}, {data?.valueY}, {data?.valueZ} 
          </p>
        ) : (
          <p className="text-danger">Error fetching data</p>
        )}
        </div>
        <div className="d-flex align-items-center justify-content-center  fs-4">
        {data ? (
          <p>
           X = {data?.valueX}, Y = {data?.valueY} , Z = {data?.valueZ} 
          </p>
        ) : (
          <p ></p>
        )}

        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}