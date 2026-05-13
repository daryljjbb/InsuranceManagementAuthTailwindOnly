import Modal from "../../ui/Modal";

import InvoiceForm from "../../invoices/InvoiceForm";

const AddInvoiceModal = ({
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
          ? `Add Invoice - ${selectedPolicy.policy_number}`
          : "Add Invoice"
      }
    >

      <InvoiceForm
        onSubmit={onSubmit}
      />

    </Modal>
  );
};

export default AddInvoiceModal;