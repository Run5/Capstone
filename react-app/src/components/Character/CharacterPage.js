import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCharacter, getAllCharacters } from '../../store/characterStore';
import CharacterModal from './CharacterModal';
import './Character.css'

export default function CharacterPage() {
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
        <div className='character-header-container'>
          <span className='character-info character-header'>Name</span>
          <span className='character-info character-header'>Class</span>
          <span className='character-info character-header'>AP /DP</span>
          <span className='character-info character-header'></span>
        </div>
        {charArr.map(character => {
          return (
            <div className='character-body-container'>
              <span className='character-info'>{character.name}</span>
              <span className='character-info'>{character.char_class}</span>
              <span className='character-info'>{character.ap} / {character.dp}</span>
              <div className='character-info'>
                <CharacterModal charId={ character.id } />
                <button className='delete-button' onClick={() => dispatch(deleteCharacter(character.id))}>Delete</button>
              </div>
            </div>
          )})}
          {(charArr.length < 3) ? <CharacterModal grindId={ null } /> : null}
      </div>
    </div>
  )
}
