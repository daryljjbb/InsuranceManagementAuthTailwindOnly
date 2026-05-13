import { useState }
from "react";

import api
from "../../api/axios";

import Button
from "../ui/Button";

const FileUpload = ({
  claimId
}) => {

  const [file, setFile] =
    useState(null);

  const uploadFile =
    async () => {

    if (!file) return;

    const formData =
      new FormData();

    formData.append(
      "claim",
      claimId
    );

    formData.append(
      "file",
      file
    );

    try {

      await api.post(

        "claim-attachments/",

        formData,

        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert(
        "File uploaded!"
      );

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div className="space-y-3">

      <input
        type="file"
        onChange={(e) =>

          setFile(
            e.target.files[0]
          )
        }
      />

      <Button
        onClick={uploadFile}
      >
        Upload File
      </Button>

    </div>
  );
};

export default FileUpload;