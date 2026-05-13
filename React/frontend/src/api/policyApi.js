import api from "./axios";

const policyService = {

  getPolicies: () =>
    api.get("policies/"),

  createPolicy: (data) =>
    api.post("policies/", data),

  updatePolicy: (id, data) =>
    api.put(`policies/${id}/`, data),

  deletePolicy: (id) =>
    api.delete(`policies/${id}/`),
};

export default policyService;