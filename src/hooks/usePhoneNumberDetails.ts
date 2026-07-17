import { parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export const usePhoneNumberDetails = () => {
  const getNumberDetails = (phoneNumber: string) => {
    const phone = parsePhoneNumber(phoneNumber);

    // console.log(phone, phone?.country);

    const countryCode = phone?.country; // "US", "IN"
    const callingCode = phone?.countryCallingCode; // "1", "91"
    const nationalWithCode = phone?.number; // "+14155552671"
    const onlyNationalNumber = phone?.nationalNumber; // "4155552671"

    const countryName = countryCode
      ? countries.getName(countryCode, "en")
      : null;

    //   debug console
    // console.log(
    //   countryName,
    //   countryCode,
    //   callingCode,
    //   nationalWithCode,
    //   onlyNationalNumber,
    // );

    return {
      countryCode,
      callingCode,
      nationalWithCode,
      onlyNationalNumber,
      countryName,
    };
  };

  return { getNumberDetails };
};
