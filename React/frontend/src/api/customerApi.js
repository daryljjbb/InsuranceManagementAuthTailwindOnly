const customerApi = (api) => ({

  getCustomers: (
    search = "",
    page = 1
    ) =>
    api.get(
        `customers/?search=${search}&page=${page}`
    ),

  createCustomer: (data) =>
    api.post("customers/", data),

  updateCustomer: (id, data) =>
    api.put(`customers/${id}/`, data),

  deleteCustomer: (id) =>
    api.delete(`customers/${id}/`),
});

export default customerApi;