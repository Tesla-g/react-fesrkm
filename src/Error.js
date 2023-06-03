//this will show the error when the routing page is not found
import React from 'react';
import { useRouteError } from 'react-router-dom';
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="Errorpage">
      <h1>{err.status} </h1>
      <h2>
        Page {err.statusText} {err.data}
      </h2>
    </div>
  );
};

export default Error;
