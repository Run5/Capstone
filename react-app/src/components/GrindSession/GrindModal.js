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
      <button className={(grindId) ? `edit-grind-button` : `add-grind-button`} onClick={() => setShowModal(true)}>{buttonMessage}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GrindForm setShowModal={ setShowModal } grindId={ grindId } />
        </Modal>
      )}
    </>
  );
}
