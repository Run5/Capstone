import React from 'react';
import { useSelector } from 'react-redux';


export default function DisplayGrind({ users, extended }) {
  const user = useSelector(state => state.session.user)
  const grindSessions = useSelector(state => state.grindSessions)

  return (
    <>
      {(extended) ? (
        <table>
          <tr>
            <th>Location</th>
            <th>Class</th>
            <th>AP/DP</th>
            <th>Time</th>
            <th>Silver/hour</th>
            <th>Buffs</th>
            <th>Trash/hour</th>
          </tr>
          {}
        </table>
      ) : (
        <table>
          <tr>
            <th>Location</th>
            <th>Class</th>
            <th>AP/DP</th>
            <th>Time</th>
            <th>Silver/hour</th>
            <th>Buffs</th>
            <th>Trash/hour</th>
          </tr>
        </table>
      )}
    </>
  )
}
