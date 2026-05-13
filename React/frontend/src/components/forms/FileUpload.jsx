import { useState } from "react";

import Button from "../ui/Button";

import documentService from "../../api/documentApi";

const FileUpload = ({ claimId }) => {

  const [file, setFile] =
    useState(null);

  const handleUpload = async () => {

    if (!file) return;

    const formData = new FormData();

    formData.append(
      "claim",
      claimId
    );

    formData.append(
      "file",
      file
    );

    try {

      await documentService.uploadDocument(
        formData
      );

      alert("Uploaded!");

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div className="space-y-4">

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <Button onClick={handleUpload}>
        Upload Document
      </Button>

    </div>
  );
};

export default FileUpload;