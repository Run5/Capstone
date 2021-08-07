import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAllGrinds, deleteGrind } from '../../store/grindStore';
import GrindModal from './GrindModal';


export default function DisplayGrind() {
  const { location } = useParams();
  const user = useSelector(state => state.session.user)
  const grindSessions = useSelector(state => state.grind)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getAllGrinds(location))
    })();
  }, [dispatch, location]);

  return (
    <>
      <div>
        <NavLink to='/grind-sessions/OrcCamp' exact={true} activeClassName='active'>Orc Camp</NavLink>
        <NavLink to='/grind-sessions/CastleRuins' exact={true} activeClassName='active'>Castle Ruins</NavLink>
        <NavLink to='/grind-sessions/BloodyMonastery' exact={true} activeClassName='active'>Bloody Monastery</NavLink>
        <NavLink to='/grind-sessions/StarsEnd' exact={true} activeClassName='active'>Star's End</NavLink>
        <NavLink to='/grind-sessions/HystriaRuins' exact={true} activeClassName='active'>Hystria Ruins</NavLink>
        <NavLink to='/grind-sessions/SwampFoganHabitat' exact={true} activeClassName='active'>Swamp Fogan Habitat</NavLink>
        <NavLink to='/grind-sessions/SwampNagaHabitat' exact={true} activeClassName='active'>Swamp Naga Habitat</NavLink>
        <NavLink to='/grind-sessions/CryptofRestingThoughts' exact={true} activeClassName='active'>Crypt of Resting Thoughts</NavLink>
        <NavLink to='/grind-sessions/BiraghiDen' exact={true} activeClassName='active'>Biraghi Den</NavLink>
        <NavLink to='/grind-sessions/AshForest' exact={true} activeClassName='active'>Ash Forest</NavLink>
        <NavLink to='/grind-sessions/SycraiaAbyssalRuins' exact={true} activeClassName='active'>Sycraia Abyssal Ruins</NavLink>
        <NavLink to='/grind-sessions/AakmanTemple' exact={true} activeClassName='active'>Aakman Temple</NavLink>
        <NavLink to='/grind-sessions/ThornwoodForest' exact={true} activeClassName='active'>Thornwood Forest</NavLink>
        <NavLink to='/grind-sessions/KratugaAncientRuins' exact={true} activeClassName='active'>Kratuga Ancient Ruins</NavLink>
        <NavLink to='/grind-sessions/AltarImpHabitat' exact={true} activeClassName='active'>Altar Imp Habitat</NavLink>
        <NavLink to='/grind-sessions/Tunkata' exact={true} activeClassName='active'>Tunkata</NavLink>
        <NavLink to='/grind-sessions/OlunsValley' exact={true} activeClassName='active'>Olun's Valley</NavLink>
        <NavLink to='/grind-sessions/PadixIsland' exact={true} activeClassName='active'>Padix Island</NavLink>
        <NavLink to='/grind-sessions/AbandonedMonastery' exact={true} activeClassName='active'>Abandoned Monastery</NavLink>
      </div>
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
