import React, { useState } from 'react';
import Modal from 'react-modal';

const MyMessage = ({ message }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  if (message.attachments && message.attachments.length > 0) {
    const imageUrl = message.attachments[0].file;

    return (
      <>
        <img
          src={imageUrl}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right', cursor: 'pointer' }}
          onClick={openImageModal}
        />

        {/* Modal to display the enlarged image */}
        <Modal
          isOpen={isImageModalOpen}
          onRequestClose={closeImageModal}
          contentLabel="Enlarged Image"
          className="image-modal"
          overlayClassName="image-modal-overlay"
        >
          <img src={imageUrl} alt="enlarged-message-attachment" className="enlarged-message-image" />
          <div className="download-button-container">
            <a href={imageUrl} download>
              <button className="download-button">Download</button>
            </a>
          </div>
        </Modal>
      </>
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
