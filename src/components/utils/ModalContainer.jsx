import { createPortal } from "react-dom";

const modalPortal = document.getElementById("modal-portal");

const ModalContainer = ({ title, children, open, setOpen }) => {
  return createPortal(
    open && (
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center" onClick={() => setOpen(false)}>
        <div
          onClick={(event) => event.stopPropagation()}
          className="bg-white dark:bg-secondary dark:border dark:border-white mx-2 p-5 rounded-2xl w-[500px] h-[300px]"
        >
          {title && <h2 className="text-center text-3xl mb-3 dark:text-white capitalize">{title}</h2>}
          {children}
        </div>
      </div>
    ),
    modalPortal
  );
};

export default ModalContainer;
