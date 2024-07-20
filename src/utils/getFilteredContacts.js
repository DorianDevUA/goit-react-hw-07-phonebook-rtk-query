export const getFilteredContactsByName = (
  contactList = [],
  filterValue = '',
) => {
  const normalizedFilter = filterValue.trim().toLowerCase();

  return contactList.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
