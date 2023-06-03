//this will show the error when the routing page is not found
import React from 'react';
const Error = () => {
  const err = useRouteError();
  return (
    <div className="Errorpage">
      <h1>{err.staus} </h1>
      <h2>{err.statusText}</h2>
    </div>
  );
};
