import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGrinds, deleteGrind } from '../../store/grindStore';
import GrindModal from './GrindModal';


export default function DisplayGrind() {
  // const [extended, setExtended] = useState(true);
  const user = useSelector(state => state.session.user)
  const grindSessions = useSelector(state => state.grind)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getAllGrinds())
    })();
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Class</th>
            <th>AP/DP</th>
            <th>Time</th>
            <th>Silver/hour</th>
            <th>Trash/hour</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(grindSessions).map(grind => {
            return (
            <tr>
              <td>{grind.location}</td>
              <td>{grind.char_class}</td>
              <td>{grind.ap} / {grind.dp}</td>
              <td>{grind.time}</td>
              <td>{grind.silver}</td>
              <td>{grind.trash}</td>
              {(user) ? (
                (user.id === grind.user_id) ? (
                  <div>
                    <GrindModal grindId={ grind.id } />
                    <button onClick={() => dispatch(deleteGrind(grind.id))}>Delete</button>
                  </div>
                ) : null ) : null }
            </tr>
            )
          })}
        </tbody>
      </table>
      <GrindModal grindId={ null } />
    </>
  );
};
