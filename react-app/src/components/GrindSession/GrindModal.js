// react-app/src/components/GrindSession/GrindModal.js
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import GrindForm from './GrindForm';

export default function GrindModal({ grindId }) {
  const [showModal, setShowModal] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Add Grind Session')

  useEffect(() => {
    if (grindId) setButtonMessage('Edit');
  }, [])

  return (
    <>
      <button onClick={() => setShowModal(true)}>{buttonMessage}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GrindForm setShowModal={ setShowModal } grindId={ grindId } />
        </Modal>
      )}
    </>
  );
}
