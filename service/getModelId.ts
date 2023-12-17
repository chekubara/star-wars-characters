export const getModelId = (url: string): number => {
  const id = url.split("/").filter(Boolean).pop();
  if (!id) throw new Error("Invalid model url");
  return parseInt(id);
};
