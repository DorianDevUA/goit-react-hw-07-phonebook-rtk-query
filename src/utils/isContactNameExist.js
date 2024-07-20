export const isContactNameExist = (contacts, name) => {
  const normalizedName = name.trim().toLowerCase();

  return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
};
