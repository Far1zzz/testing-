import { Modal } from "antd";
import { useState } from "react";

const ModalContent = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        {children}
      </div>
      <Modal
        title="TESTING"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <h1>PERCOBAAN</h1>
      </Modal>
    </>
  );
};
export default ModalContent;
