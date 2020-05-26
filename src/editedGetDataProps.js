export const getDataProps = (utils, props) => {
  return utils.client.products
    .search({ query: "" })
    .then((data) => data)
    .catch((e) => console.log(e))
  // Note: A pageSize property can be added to limit the search results
  // For example: .search({ query: "", pageSize: 100 })
}

export const getDataProps = (utils, props) => {
  const { category } = props
  return utils.client.products
    .getByCategoryId({ categoryId: category, sort: "name a-z" })
    .then((data) => data)
    .catch((e) => console.log(e))
}

export const getDataProps = (utils, props) => {
  const { product } = props
  return utils.client.products
    .getById(product)
    .then((productObject) => productObject)
    .catch((e) => console.log(e))
}
