// mask wallet balance component

export const maskWalletBalance = (
  amount: number | string,
  visible: boolean,
  count: number = 3
) => {
  if (visible) {
    return amount;
  }
  const mask = '*';
  const maskedAmount = mask.repeat(count);
  return maskedAmount;
};

// mask api key AZIYJ*************

export const maskApiKey = (key?: string) => {
  const mask = '*';
  const maskedKey = mask.repeat(8);
  return key?.slice(0, 8) + maskedKey;
};
