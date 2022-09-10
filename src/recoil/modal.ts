import { atom } from "recoil";

type ModalStateType = {
  open: boolean;
  Target: React.FC | null;
};

export const modalState = atom<ModalStateType>({
  key: "modalState",
  default: {
    open: false,
    Target: null,
  },
});
