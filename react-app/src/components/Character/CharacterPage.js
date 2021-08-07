import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCharacter, getAllCharacters } from '../../store/characterStore';
import CharacterModal from './CharacterModal';
import './Character.css'

export default function CharacterPage() {
  const user = useSelector(state => state.session.user);
  const characters = useSelector(state => state.character);
  const dispatch = useDispatch();
  const charArr = Object.values(characters);

  useEffect(() => {
    (async () => {
      await dispatch(getAllCharacters())
    })();
  }, [dispatch])

  return (
    <div className='page-container'>
      <img src={'https://s1.pearlcdn.com/NAEU/contents/img/portal/gameinfo/feature_section01_char.jpg'} alt="character" />
      <div className='character-container'>
        <h1 className='character-page-title'>My Characters</h1>
        <div>
          <span>Name</span>
          <span>Class</span>
          <span>AP /DP</span>
          <span></span>
        </div>
        {charArr.map(character => {
          return (
            <div>
              <span>{character.name}</span>
              <span>{character.char_class}</span>
              <span>{character.ap} / {character.dp}</span>
              <div>
                <CharacterModal charId={ character.id } />
                <button onClick={() => dispatch(deleteCharacter(character.id))}>Delete</button>
              </div>
            </div>
          )})}
          {(charArr.length < 3) ? <CharacterModal grindId={ null } /> : null}
        {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>AP/DP</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(characters).map(character => {
            return (
            <tr>
              <td>{character.name}</td>
              <td>{character.char_class}</td>
              <td>{character.ap} / {character.dp}</td>
              {(user) ? (
                (user.id === character.user_id) ? (
                  <div>
                    <CharacterModal charId={ character.id } />
                    <button onClick={() => dispatch(deleteCharacter(character.id))}>Delete</button>
                  </div>
                ) : null ) : null }
            </tr>
            )
          })}
        </tbody>
      </table> */}
      </div>
    </div>
  )
}
