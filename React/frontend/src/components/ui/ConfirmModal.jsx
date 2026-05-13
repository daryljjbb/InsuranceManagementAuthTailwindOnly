import Modal from "./Modal";

import Button from "./Button";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure?",
}) => {



  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >

      <div className="space-y-6">

        <p className="text-gray-600">
          {message}
        </p>

        <div className="flex justify-end gap-3">

          <Button
            variant="warning"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Confirm Delete
          </Button>

        </div>

      </div>

    </Modal>
  );
};

export default ConfirmModal;