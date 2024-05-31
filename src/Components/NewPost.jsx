import React from "react";
import userPhoto from "../assets/images/user.png";
import UploadPhoto from "../UI/UploadPhoto";
import { useState } from "react";
import { getUser } from "../UserContext/UserContext";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Radio, Stack, RadioGroup } from "@chakra-ui/react";

const NewPost = ({ reload, setReload }) => {
  const { user } = getUser();
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [textData, setTextData] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFile(file);
      setImagePreview(imageUrl);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", textData);
    formData.append("author", user.id);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/forum/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        setPostSuccess(true);
        setTextData("");
        setReload(!reload);
        setPostSuccess(false);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error uploading file");
    }
  };

  return (
    <div className="m-auto flex w-full rounded-2xl border-2 px-4 py-4 gap-3">
      {postSuccess &&
        toast({
          title: "Post created.",
          description: "We've created your Post for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })}
      <img
        src={userPhoto}
        className="h-16 rounded-lg bg-gradient-to-b from-slate-500 to-gray-50"
        alt="user avatar"
      />
      <div
        onClick={onOpen}
        className=" cursor-pointer w-full rounded-full border-2 h-16 bg-[#EDEDED] font-poppins text-gray-400 flex items-center px-6"
      >
        What's in your Mind ?{" "}
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font-poppins font-light">
            What's in you mind ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="m-auto w-full rounded-2xl border-2 px-4 py-4">
              <div className="flex gap-2 items-center">
                <img
                  src={userPhoto}
                  className="h-16 rounded-lg bg-gradient-to-b from-slate-500 to-gray-50"
                  alt="user avatar"
                />
                <h3 className=" font-Monda text-xl">{user.username}</h3>
              </div>

              <textarea
                onClick={onOpen}
                onChange={(e) => {
                  setTextData(e.target.value);
                  console.log(textData);
                }}
                value={textData}
                className=" h-64 w-full resize-none p-2 font-poppins text-slate-500 focus:outline-none"
                placeholder="What's in your Mind ? "
              ></textarea>
              <div className="relative flex gap-2">
                <button
                  onClick={handleSubmit}
                  className="h-12 w-24 rounded-md border-none bg-primary font-poppins font-medium text-white transition-colors duration-300 hover:bg-orange-400"
                >
                  Post it!
                </button>
                <div>
                  <div className="flex items-center">
                    <div
                      className="cursor-pointer w-14"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      <UploadPhoto />
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              {file && (
                <div className=" border-2 border-primary border-dashed rounded-md w-[30%] mt-2 text-sm text-gray-600">
                  <img src={imagePreview} alt="" />
                  {file.name}
                </div>
              )}
            </div>
            <div className="mx-4 my-2 flex gap-4">
              <p className=" font-montserrat text-lg">
                Tell Us more about your Post :
              </p>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio size="lg" colorScheme="red" value="1">
                    Hotels
                  </Radio>
                  <Radio size="lg" colorScheme="red" value="2">
                    Restaurants
                  </Radio>
                  <Radio size="lg" colorScheme="red" value="1">
                    Attractions
                  </Radio>
                  <Radio size="lg" colorScheme="red" value="1">
                    Experiences
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="h-12 w-24 rounded-md border-none bg-primary font-poppins font-medium text-white transition-colors duration-300 hover:bg-orange-400"
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default NewPost;
