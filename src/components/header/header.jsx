import logo from "../../assets/logo.svg";
import dot from "../../assets/Oval.svg";
import Dashboard from "../dashboard";
import burger from "../../assets/icon-hamburger.svg";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex justify-between ">
        <div className="m-[5%] 2xl:m-[3%]">
          <img src={logo} alt="" />
        </div>
        <div
          className="w-[40rem] h-[30rem] bg-[#EDF2F6] rounded-bl-[3.75rem]
     max-sm:w-[11.71875rem] max-sm:h-[25.5625rem] ">
          <div className="md:hidden p-[5%] text-right ">
            <Button onClick={onOpen}>
              <img src={burger} alt="" />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent width="23rem" marginTop="7.5rem">
                <ModalCloseButton />
                <ModalBody>
                  <div
                    className="text-[1.125rem] text-[#242942] font-[700] font-barlow 
        tracking-[0.075rem] space-y-5 text-center mt-8">
                    <div className="">PRODUCT</div>
                    <div>FEATURES</div>
                    <div>PRICING</div>
                    <hr />
                    <div
                      className="
                    opacity:[0.5]">
                      LOGIN
                    </div>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
          <div
            className="flex text-[0.9375rem] text-[#242942] font-[700] font-barlow 
        tracking-[0.0625rem]  gap-10  xl:my-[11.5%] mr-[10%] justify-end 
        lg:my-[8.5%] md:my-[7%] max-sm:hidden">
            <div className="">PRODUCT</div>
            <div>FEATURES</div>
            <div>PRICING</div>
            <div className=" my-auto ">
              <img src={dot} alt="" />
            </div>
            <div>LOGIN</div>
          </div>
        </div>
      </div>
      <Dashboard />
    </>
  );
};

export default Header;
