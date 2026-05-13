import Modal from "../../ui/Modal";

import ClaimForm from "../../claims/ClaimForm";

const AddClaimModal = ({
  isOpen,
  onClose,
  onSubmit,
  selectedPolicy,
}) => {

  return (

    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        selectedPolicy
          ? `Add Claim - ${selectedPolicy.policy_number}`
          : "Add Claim"
      }
    >

      <ClaimForm
        onSubmit={onSubmit}
      />

    </Modal>
  );
};

export default AddClaimModal;