import {

  useEffect,

  useState,

} from "react";

import api
from "../../api/axios";

import DocumentPreview
from "./DocumentPreview";

const ClaimAttachments = ({
  claimId
}) => {

  const [attachments,
    setAttachments] =
      useState([]);

  const fetchAttachments =
    async () => {

    try {

      const response =
        await api.get(
          "claim-attachments/"
        );

      const filtered =

        response.data.filter(

          (attachment) =>

            attachment.claim
            === claimId
        );

      setAttachments(
        filtered
      );

    } catch (error) {

      console.error(error);
    }
  };

  useEffect(() => {

    fetchAttachments();

  }, [claimId]);

  return (

    <DocumentPreview
      attachments={attachments}
    />
  );
};

export default ClaimAttachments;