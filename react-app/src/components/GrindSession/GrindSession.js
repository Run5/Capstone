import React from 'react';


export default function GrindSession() {

  return (
    <div>
      <h1>View your grind sessions:</h1>
      <DisplayGrind users={'mine'} extended={false} />
    </div>
  )
}
