export function ZipcodeValidate(zipcode: any) {
  if (!zipcode || zipcode.length !== 8 || isNaN(zipcode) === true) {
    return false;
  } else {
    return true;
  }
}
