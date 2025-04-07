const formatPhoneNumber = (value) => {
  if (!value) return '';

  const cleaned = value.replace(/[^\d+]/g, '');
  const digits = cleaned.replace(/\+/g, '').slice(0, 11);

  let phoneNumber = cleaned.startsWith('+') ? '+' : '';

  if (digits.length > 0) {
    phoneNumber += phoneNumber.startsWith('+') ? '7' : '+7';
  }
  if (digits.length > 1) {
    phoneNumber += ` (${digits.slice(1, 4)}`;
  }
  if (digits.length > 4) {
    phoneNumber += `) ${digits.slice(4, 7)}`;
  }
  if (digits.length > 7) {
    phoneNumber += `-${digits.slice(7, 9)}`;
  }
  if (digits.length > 9) {
    phoneNumber += `-${digits.slice(9, 11)}`;
  }

  return phoneNumber;
};

export default formatPhoneNumber;
