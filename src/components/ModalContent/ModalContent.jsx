import { Modal } from "antd";
import { useEffect, useState } from "react";

const ModalContent = ({ children }) => {
  const [open, setOpen] = useState(false);

  // agar modal muncul 2 detik setelah page
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);
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
