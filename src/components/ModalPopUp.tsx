import React from 'react';
import { Modal } from 'antd';

const ModalPopUp = () => {
  const [visible, setVisible] = React.useState(true);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Are you sure you want to delete this user');

  const handleOk = () => {
    setModalText('User deleting...');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="Delete"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalPopUp;