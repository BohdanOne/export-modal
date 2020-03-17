export const renderDateInputLabel = schedule => {
  switch (schedule) {
    case 'date':
      return 'Date';
    case 'daily':
      return 'Everyday at';
    case 'weekly':
      return 'Every';
    default:
      return '';
  }
};