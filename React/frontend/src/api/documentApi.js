import api from "./axios";

const documentService = {

  uploadDocument: (formData) =>

    api.post(
      "claim-documents/",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    ),
};

export default documentService;