const customerApi = (api) => ({

  getCustomers: (search = "") =>
  api.get(
    `customers/?search=${search}`
  ),
  
  createCustomer: (data) =>
    api.post("customers/", data),

  updateCustomer: (id, data) =>
    api.put(`customers/${id}/`, data),

  deleteCustomer: (id) =>
    api.delete(`customers/${id}/`),
});

export default customerApi;