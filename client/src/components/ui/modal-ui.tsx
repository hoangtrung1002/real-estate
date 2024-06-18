import { useAppStore } from "@/store/useAppStore";

const Modal = () => {
  const { contentModal, setShowModal } = useAppStore();
  return (
    <div
      onClick={() => setShowModal(false, null)}
      className="absolute z-[100] w-screen h-screen flex items-center justify-center bg-overlay-50"
    >
      {contentModal}
    </div>
  );
};

export default Modal;
