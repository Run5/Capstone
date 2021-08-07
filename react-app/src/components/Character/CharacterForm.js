import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editCharacter, postCharacter } from '../../store/characterStore';

export default function GrindForm({ setShowModal, charId }) {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [charClass, setCharClass] = useState('');
  const [AP, setAP] = useState('');
  const [DP, setDP] = useState('');
  const characters = useSelector(state => state.character);
  const dispatch = useDispatch();
  let char = null;


  const onAdd = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      charClass: charClass,
      ap: AP,
      dp: DP,
    }
    const data = await dispatch(postCharacter(payload));
    if (data) {
      setErrors(data)
    }
    setShowModal(false);
  };

  const onEdit = async (e) => {
    e.preventDefault();
    const payload = {
      id: charId,
      name: name,
      charClass: charClass,
      ap: AP,
      dp: DP,
    }
    const data = await dispatch(editCharacter(payload));
    if (data) {
      setErrors(data)
    }
    setShowModal(false);
  };

  const updateAll = () => {
    setName(char.name)
    setCharClass(char.char_class)
    setAP(char.ap)
    setDP(char.dp)
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateCharClass = (e) => {
    setCharClass(e.target.value);
  };

  const updateAP = (e) => {
    setAP(e.target.value);
  };

  const updateDP = (e) => {
    setDP(e.target.value);
  };

  useEffect(() => {
    if (charId) {
      char = characters[`${charId}`];
      updateAll();
    }
  }, [charId])

  return (
    <>
      <form onSubmit={(charId) ? onEdit : onAdd}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        {(charId) ? <label>{name}</label> : (
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            onChange={updateName}
            value={name}
            required={true}
          ></input>
        </div>
        )}
        <div>
          <label>Class</label>
          <input
            type='text'
            name='class'
            onChange={updateCharClass}
            value={charClass}
          ></input>
        </div>
        <div>
          <label>AP</label>
          <input
            type='number'
            name='AP'
            onChange={updateAP}
            value={AP}
          ></input>
        </div>
        <div>
          <label>DP</label>
          <input
            type='number'
            name='DP'
            onChange={updateDP}
            value={DP}
          ></input>
        </div>
        {(charId) ?
          <button type='submit'>Update Character</button>
        :
          <button type='submit'>Add Character</button>
        }
      </form>
    </>
  );
};
