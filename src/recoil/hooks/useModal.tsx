import { useRecoilState } from "recoil";
import { modalState } from "../modal";

const useModal = () => {
  const [state, setState] = useRecoilState(modalState);

  const handleOpen = (target: React.FC) => {
    setState({
      Target: target,
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      open: false,
      Target: null,
    });
  };

  return {
    state,
    handleOpen,
    handleClose,
  };
};

export default useModal;
