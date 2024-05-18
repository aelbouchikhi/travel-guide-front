import React from "react";
import userPhoto from "../assets/images/user.png";
import UploadPhoto from "../UI/UploadPhoto";
import { useState } from "react";
import { getUser } from "../UserContext/UserContext";
import axios from "axios";

const NewPost = () => {
  const { user } = getUser();
  const [file, setFile] = useState(null);
  const [textData, setTextData] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
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
        alert("File uploaded successfully");
        setTextData("");
      }
    } catch (error) {
      console.error(error.message);
      alert("Error uploading file");
    }
  };

  return (
    <div className="m-auto flex h-32 w-full rounded-2xl border-2 px-4 py-4">
      <img
        src={userPhoto}
        className="h-16 rounded-lg bg-gradient-to-b from-slate-500 to-gray-50"
        alt="user avatar"
      />
      <textarea
        onChange={(e) => {
          setTextData(e.target.value);
          console.log(textData);
        }}
        value={textData}
        className="h-32 w-full resize-none p-2 font-poppins text-slate-500 focus:outline-none"
        placeholder="Anything you want..."
      ></textarea>
      <div className="relative flex flex-col gap-2">
        <button
          onClick={handleSubmit}
          className="h-12 w-24 rounded-md border-none bg-orange-500 font-poppins font-medium text-white transition-colors duration-300 hover:bg-orange-300"
        >
          Post it!
        </button>
        <div>
          <div>
            <div
              className="cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <UploadPhoto />
            </div>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            {file && (
              <div className="mt-2 text-sm text-gray-600">{file.name}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPost;
