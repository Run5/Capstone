import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGrinds } from '../../store/grindStore';
import GrindModal from './GrindModal';


export default function DisplayGrind() {
  // const [extended, setExtended] = useState(true);
  // const user = useSelector(state => state.session.user)
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
            {console.log('GRIND: ', grind)}
            return (
            <tr>
              <td>{grind['location']}</td>
              <td>{grind['char_class']}</td>
              <td>{grind['ap']} / {grind['dp']}</td>
              <td>{grind['time']}</td>
              <td>{grind['silver']}</td>
              <td>{grind['trash']}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <GrindModal />
    </>
    // <>
    //   {console.log('>>>>>>>>>>>>>>>>>>', grindSessions)}
    //   <div className='test'>
    //     {Object.values(grindSessions)?.map(grind => {
    //       return (
    //         <div className='testtwo'>
    //           {console.log('SPAN: ', grind.location)}
    //           <span>{grind.location}</span>
    //           {console.log('SPAN: ', grind.char_class)}
    //           <span>{grind.char_class}</span>
    //           {console.log('SPAN: ', grind.ap, grind.dp)}
    //           <span>{grind.ap} / {grind.dp}</span>
    //           {console.log('SPAN: ', grind.time)}
    //           <span>{grind.time}</span>
    //           {console.log('SPAN: ', grind.silver)}
    //           <span>{grind.silver}</span>
    //           {console.log('SPAN: ', grind.trash)}
    //           <span>{grind.trash}</span>
    //         </div>
    //       )
    //     })}
    //     </div>
    //   <h1>Grind Sessions</h1>
    //   <span>hello</span>
    //   <GrindModal />
    // </>
  );
};
