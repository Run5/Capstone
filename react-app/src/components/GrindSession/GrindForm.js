import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editGrind, postGrindSession } from '../../store/grindStore';

export default function GrindForm({ setShowModal, grindId }) {
  const [errors, setErrors] = useState([]);
  const [location, setLocation] = useState('');
  const [charClass, setCharClass] = useState('');
  const [AP, setAP] = useState('');
  const [DP, setDP] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [silver, setSilver] = useState('');
  const [trash, setTrash] = useState('');
  const grindSessions = useSelector(state => state.grind);
  const dispatch = useDispatch();
  let grind = null;

  const diff = (start, end) => {
    start = start.split(":");
    end = end.split(":");
    const startDate = new Date(0, 0, 0, start[0], start[1], 0);
    const endDate = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / 1000 / 60);

    return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
  }

  const onAdd = async (e) => {
    e.preventDefault();
    const payload = {
      location: location,
      charClass: charClass,
      ap: AP,
      dp: DP,
      time: diff(startTime, endTime),
      silver: silver,
      trash: trash
    }
    const data = await dispatch(postGrindSession(payload));
    if (data) {
      setErrors(data)
    }
    setShowModal(false);
  };

  const onEdit = async (e) => {
    e.preventDefault();
    const payload = {
      id: grindId,
      location: location,
      charClass: charClass,
      ap: AP,
      dp: DP,
      time: diff(startTime, endTime),
      silver: silver,
      trash: trash
    }
    const data = await dispatch(editGrind(payload));
    if (data) {
      setErrors(data)
    }
    setShowModal(false);
  };

  const updateAll = () => {
    setLocation(grind.location)
    setCharClass(grind.char_class)
    setAP(grind.ap)
    setDP(grind.dp)
    setSilver(grind.silver)
    setTrash(grind.trash)
  };

  const updateLocation = (e) => {
    setLocation(e.target.value);
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

  const updateStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const updateEndTime = (e) => {
    setEndTime(e.target.value);
  };

  const updateSilver = (e) => {
    setSilver(e.target.value);
  };

  const updateTrash = (e) => {
    setTrash(e.target.value);
  };

  useEffect(() => {
    if (grindId) {
      grind = grindSessions[`${grindId}`];
      updateAll();
    }
  }, [grindId])

  return (
    <>
      <form onSubmit={(grindId) ? onEdit : onAdd}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>Location</label>
          <input
            type='text'
            name='location'
            onChange={updateLocation}
            value={location}
            required={true}
          ></input>
        </div>
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
        <div>
          <label>Start Time</label>
          <input
            type='time'
            name='startTime'
            onChange={updateStartTime}
            value={startTime}
            required={true}
          ></input>
        </div>
        <div>
          <label>End Time</label>
          <input
            type='time'
            name='endTime'
            onChange={updateEndTime}
            value={endTime}
            required={true}
          ></input>
        </div>
        <div>
          <label>Silver</label>
          <input
            type='number'
            name='silver'
            onChange={updateSilver}
            value={silver}
            required={true}
          ></input>
        </div>
        <div>
          <label>Trash</label>
          <input
            type='number'
            name='trash'
            onChange={updateTrash}
            value={trash}
            required={true}
          ></input>
        </div>
        <button type='submit'>Add my grind</button>
      </form>
    </>
  );
};
