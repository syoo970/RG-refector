import { Dialog, DialogProps, DialogContent } from "@mui/material";
import useModal from "@/recoil/hooks/useModal";
import Transition from "@/components/Transition";

const Modal = ({ ...props }: Omit<DialogProps, "open">) => {
  const {
    state: { open, Target },
    handleClose,
  } = useModal();

  if (!Target) return null;

  return (
    <Dialog
      TransitionComponent={Transition}
      {...props}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <Target />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
