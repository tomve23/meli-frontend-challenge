const CONDITION_NAMES: { [key: string]: string } = {
  new: "Nuevo",
  used: "Usado",
  refurbished: "Reacondicionado",
};

export const getProductCondition = (product: any) => {
  if (product.condition_text) {
    return product.condition_text;
  }

  const itemCondition = product.attributes?.find(
    (attribute: any) => attribute.id === "ITEM_CONDITION"
  );

  if (itemCondition) {
    return itemCondition.value_name;
  }

  if (product.condition) {
    return CONDITION_NAMES[product.condition] || product.condition;
  }

  return "";
};
