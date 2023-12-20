import * as CryptoJS from 'crypto-js/crypto-js'

/**
 * @param {String} word
 * @return {string}
 */
export const encrypt = (word) => {
  let key = CryptoJS.enc.Utf8.parse(process.env.app.ENCRYPT_KEY)
  let input = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(input, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.toString()
}
