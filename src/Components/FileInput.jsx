import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadPhoto from "../UI/UploadPhoto";

const FileInput = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
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
      {fileName && <div className="mt-2 text-sm text-gray-600">{fileName}</div>}
    </div>
  );
};

export default FileInput;
