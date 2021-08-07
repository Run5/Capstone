import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MyProfile() {

  return (
    <>
      <h1>This Is My Profile</h1>
      <p>
        fdas fsdf fdfgfd gsd fgdf gdsf gsd fgdf gs fdgjw hjk kasdk kkdfsf kk kdf
        fsdfj oijrg rgr grg

        dfgs agfdga sdfgs dfg
        sdfgsdfgs dfgsd fgdf gaewsz xrd ctfv yg buhn ijmokd ercf tvygb hunj imko,rde cftvg ybhunj imk
        fsdf ug sybd fhinj omk,lpef sef sef sef
      </p>
      <NavLink to='/characters' exact={true} activeClassName='active'>View Characters</NavLink>
    </>
  )
}
