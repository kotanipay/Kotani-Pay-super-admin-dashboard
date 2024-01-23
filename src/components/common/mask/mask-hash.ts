// mask hash values kjsaNDJ456...

export const maskHashValues = (key?: string) => {
  if (!key) return;
  if (key.length < 10) return key;
  const mask = ".";
  const maskedKey = mask.repeat(3);
  return key?.slice(0, 10) + maskedKey;
};
