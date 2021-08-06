// react-app/src/components/GrindSession/GrindModal.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import GrindForm from './GrindForm';

export default function GrindModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Grind Session</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GrindForm setShowModal={ setShowModal } />
        </Modal>
      )}
    </>
  );
}
