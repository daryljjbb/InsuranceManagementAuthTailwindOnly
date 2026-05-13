import Modal from "../../ui/Modal";

import PolicyForm from "../../policies/PolicyForm";

const AddPolicyModal = ({
  isOpen,
  onClose,
  onSubmit,
}) => {

  return (

    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Policy"
    >

      <PolicyForm
        onSubmit={onSubmit}
      />

    </Modal>
  );
};

export default AddPolicyModal;