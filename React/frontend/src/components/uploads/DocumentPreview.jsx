const DocumentPreview = ({
  attachments
}) => {

  const isImage = (url) => {

    return (
      url.endsWith(".png") ||

      url.endsWith(".jpg") ||

      url.endsWith(".jpeg")
    );
  };

  const isPDF = (url) => {

    return url.endsWith(".pdf");
  };

  return (

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
      "
    >

      {attachments.map(
        (attachment) => (

        <div
          key={attachment.id}
          className="
            border
            rounded-xl
            p-4
            bg-white
          "
        >

          {/* IMAGE PREVIEW */}
          {isImage(
            attachment.file_url
          ) && (

            <img

              src={
                attachment.file_url
              }

              alt="attachment"

              className="
                w-full
                h-48
                object-cover
                rounded-lg
              "
            />
          )}

          {/* PDF PREVIEW */}
          {isPDF(
            attachment.file_url
          ) && (

            <iframe

              src={
                attachment.file_url
              }

              title="PDF"

              className="
                w-full
                h-64
                rounded-lg
              "
            />
          )}

          {/* DOWNLOAD BUTTON */}
          <a

            href={
              attachment.file_url
            }

            target="_blank"

            rel="noreferrer"

            className="
              mt-3
              inline-block
              text-blue-600
              font-medium
            "
          >

            Download File

          </a>

        </div>

      ))}

    </div>
  );
};

export default DocumentPreview;