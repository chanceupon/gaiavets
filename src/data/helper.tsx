import SSRCookie from 'cookie';
import Decimal from 'decimal.js';
import Cookie from 'js-cookie';
import numeral from 'numeral';

export const AUTH_AB_CRYPT = 'nodeverse-access-token';

export function parseSSRCookie(context: any) {
  return SSRCookie.parse(context.req.headers.cookie ?? '');
}

export function getAuthCredentials(context?: any) {
  let authCred;
  if (context) {
    authCred = parseSSRCookie(context)[AUTH_AB_CRYPT];
  } else {
    authCred = Cookie.get(AUTH_AB_CRYPT);
  }
  if (authCred) return authCred;

  return null;
}

export function setCookie(key: string, value: string) {
  Cookie.set(key, value);
}

export function getCookie(key: string) {
  return Cookie.get(key);
}

export function removeCookie(key: string) {
  Cookie.remove(key);
}

export function removeAuthCredentials() {
  Cookie.remove(AUTH_AB_CRYPT);
}

export function setAuthCredentials(token: string) {
  setCookie(AUTH_AB_CRYPT, token);
}

export const fieldValidate = {
  required: {
    required: true,
    message: 'Field is required',
  },
  email: {
    type: 'email',
    required: true,
    message: 'Invalid email',
  },
};

export const formatCurrency = (
  number: number,
  decimals = 4,
  isShorty = true,
  isWithoutComma = false
) => {
  const tail = new Array(decimals).fill('0').join('');

  const num = new Decimal(Number(number));
  const numFixed = num.toFixed(decimals, Decimal.ROUND_DOWN);
  if (String(num) === 'NaN') return numFixed;

  const numFormat = numeral(Number(numFixed));

  if (isNaN(Number(numFixed)) || num.isNaN())
    return numeral(0).format(`0,0.${tail}`);

  if (isShorty) return numFormat.format(`0,0.[${tail}]`);
  if (isWithoutComma) return numFormat.format(`0.${tail}`);

  return numFormat.format(`0,0.${tail}`);
};

export const previewAssetUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN_URL}${url}`;

export const createSlug = (title) => {
  return title
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const formatPhoneNumber = (phone, countryCode = '+65') => {
  const cleanedPhone = phone?.replace(/\s+/g, '');
  return `tel:${countryCode}${cleanedPhone}`;
};
