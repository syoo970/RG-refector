import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/Button";
import useModal from "@/recoil/hooks/useModal";
import Login from "@/components/Login";
import Modal from "@/components/Modal";

export default {
  title: "Modal/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

export const Default: ComponentStory<typeof Login> = () => {
  const { handleOpen } = useModal();

  return (
    <>
      <Button onClick={() => handleOpen(Login)}>Open Modal</Button>
      <Modal />
    </>
  );
};
