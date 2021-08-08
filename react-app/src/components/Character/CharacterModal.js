import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import CharacterForm from './CharacterForm';

export default function GrindModal({ charId }) {
  const [showModal, setShowModal] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('New Character')

  useEffect(() => {
    if (charId) setButtonMessage('Edit');
  }, [])

  return (
    <>
      <button className={(charId) ? `edit-button` : `add-button`} onClick={() => setShowModal(true)}>{buttonMessage}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CharacterForm setShowModal={ setShowModal } charId={ charId } />
        </Modal>
      )}
    </>
  );
}
