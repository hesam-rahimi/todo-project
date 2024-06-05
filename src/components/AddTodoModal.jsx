import CustomBtn from "./utils/CustomBtn";
import CustomInput from "./utils/CustomInput";
import ModalContainer from "./utils/ModalContainer";

const AddTodoModal = ({ open, setOpen, darkMode }) => {
  return (
    <ModalContainer title="new todo" open={open} setOpen={setOpen}>
      <div className="flex flex-col !h-4/5 justify-between">
        <CustomInput darkMode={darkMode} placeholder="Input your note..." />
        <div className="flex justify-between items-center">
          <CustomBtn text="CANCEL" className="border-primary border" />
          <CustomBtn text="APPLY" className="bg-primary text-white border-primary border" />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddTodoModal;
