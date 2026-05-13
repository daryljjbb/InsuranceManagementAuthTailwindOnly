const DocumentCard = ({ doc }) => {

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
          === claim.id
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

}, []);

  return (

    <div
      className="
        border
        rounded-xl
        p-4
        flex
        justify-between
        items-center
      "
    >

      <div>

        <p className="font-medium">
          Document
        </p>

        <p className="text-sm text-gray-500">
          Uploaded File
        </p>

      </div>

      <a
        href={doc.file}
        target="_blank"
        rel="noreferrer"
        className="
          text-blue-600
          hover:underline
        "
      >
        View
      </a>

    </div>
  );
};

export default DocumentCard;