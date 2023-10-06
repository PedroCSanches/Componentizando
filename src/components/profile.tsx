"use client"
import * as React from 'react';

type ProfileProps = {
    name:string
    onChangeName?:() => void
}

const Profile = ({name,onChangeName}:ProfileProps) => {
function click() {
    if(onChangeName)onChangeName()
}

  return (
    <p>
        Bom dia, {name}
        <br />
        <button onClick={click}>ok</button>
    </p>
  )
};

export default Profile;

