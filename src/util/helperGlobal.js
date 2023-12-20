import FileService from 'src/services/FileService'
import { BASE_URL } from 'src/service/standard.js'

export const downloadFoto = (key) => {
  return key ? `${BASE_URL}${FileService.resource}/files?key=${key}` : null
}

/**
 * @param {String} b64Data
 * @param {String} contentType
 * @param {Number} sliceSize
 * @returns {Blob}
 */
export const base64toBlob = (b64Data, contentType = 'application/octet-stream', sliceSize = 1024) => {
  const byteCharacters = atob(b64Data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: contentType })
}

/**
 * @param fileName
 */
const createElementToDownload = function (fileName, blob) {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  link.click()
}

/**
 * @param {Object} response
 * @param convertToBlob
 */
export const downloadFile = function (response, convertToBlob = true) {
  createElementToDownload(
    `${response.fileName}.${response.fileType}`,
    convertToBlob ? base64toBlob(response.file) : response.file
  )
}
/**
 * @param {String}
 */
export const formatTooltip = function (labelSemFormato) {
  const label = labelSemFormato.split(' ')
  for (let i = 0; i < label.length; i++) {
    label[i] = label[i].charAt(0).toUpperCase() + label[i].slice(1)
  }
  const labelFormatada = label.join(' ')
  return labelFormatada
}
