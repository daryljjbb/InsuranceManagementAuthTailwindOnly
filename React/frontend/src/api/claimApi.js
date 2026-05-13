import api from "./axios";

const claimService = {

  getClaims: () =>
    api.get("claims/"),

  createClaim: (data) =>
    api.post("claims/", data),

  updateClaim: (id, data) =>
    api.put(`claims/${id}/`, data),

  deleteClaim: (id) =>
    api.delete(`claims/${id}/`),
};

export default claimService;