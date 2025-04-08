export const formatNumber = (
  value: number,
  options: Intl.NumberFormatOptions,
) => {
  return new Intl.NumberFormat('es-AR', options).format(value);
};

export const formatCurrency = (
  value: number | string,
  currency: string,
  maxDecimals = 2,
  minDecimals = 0,
) => {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: maxDecimals,
    minimumFractionDigits: minDecimals,
  };

  return new Intl.NumberFormat('es-AR', options).format(+value);
};

export const capitalize = (str: string) => {
  // * Transforms ONLY the first letter of the string to capital
  return str.charAt(0).toUpperCase() + str.slice(1);
};
