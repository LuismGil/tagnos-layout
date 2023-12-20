import { moment } from 'src/util/Moment.js'

export const validationCpf = (value) => {
  if (!value) {
    return true
  }
  value = String(value).replace(/[^\d]+/g, '')
  if (value.length !== 11 || (/^(\d)\1*$/g).test(value)) {
    return false
  }
  let add = 0
  for (let i = 0; i < 9; i++) {
    add += parseInt(value.charAt(i)) * (10 - i)
  }
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }
  if (rev !== parseInt(value.charAt(9))) {
    return false
  }
  add = 0
  for (let i = 0; i < 10; i++) {
    add += parseInt(value.charAt(i)) * (11 - i)
  }
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }
  return rev === parseInt(value.charAt(10))
}

export const validationCnpj = (value) => {
  if (!value) {
    return true
  }
  let cnpj = String(value).replace(/[^\d]+/g, '')

  if (cnpj === '' || cnpj.length !== 14 || /^(.)\1*$/g.test(cnpj)) {
    return false
  }

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  let digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) {
      pos = 9
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

  if (String(resultado) !== digitos.charAt(0)) {
    return false
  }

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

  return String(resultado) === digitos.charAt(1)
}

export const validateNome = (val) => {
  if (!val) {
    return 'Campo Obrigatório.'
  }
  if (val.length > 80) {
    return 'O nome deve conter no máximo 80 dígitos.'
  }
  let nome = val.split(' ')
  let nomeAbreviado = nome.filter(value => {
    if (value.length > 0 && value.length < 2) {
      return 'Não é permitido o uso de nome abreviado'
    }
    return ''
  })
  if (nomeAbreviado.length > 0) {
    return 'Não é permitido o uso de nome abreviado'
  }
  if (val.includes('  ')) {
    return 'O nome digitado contêm mais de um espaço consecultivo'
  }
  if (val.endsWith(' ')) {
    return 'O nome digitado está com espaço no final'
  }
  const regex = /^(([a-zA-Z]|[áéíóúÁÉÍÓÚçÇâêôÂÊÔõãÕÃäöüÄÖÜàÀ])+\s)+([a-zA-Z]|[áéíóúÁÉÍÓÚçÇâêôÂÊÔõãÕÃäöüÄÖÜàÀ])+\.?$/
  if (!regex.test(val)) {
    return 'Nome sem sobrenome'
  }
  if (val.trim()) {
    return !!val
  }
}

export const validateInput = (val, props, required, message) => {
  if (required) {
    message[props] = 'Campo Obrigatório'
  }
  if (typeof validateNome(val) === 'string') {
    if (validateNome(val).includes('Campo Obrigatório')) {
      if (!required) {
        return true
      }
    }
    message[props] = validateNome(val)
    return
  }
  return validateNome(val)
}

export const validateForm = ($this) => {
  return new Promise((resolve, reject) => {
    let formHasErrors = false
    Object.keys($this.$refs).forEach((key) => {
      let validate
      if ($this.$refs[key].$refs.input) {
        validate = $this.$refs[key].$refs.input.validate()
      } else {
        validate = $this.$refs[key].validate()
      }
      if (!formHasErrors) {
        formHasErrors = !validate
      }
    })
    if (!formHasErrors) {
      return resolve()
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return reject()
  })
}

export const validationEmail = (val) => {
  if (!val) {
    return true
  }
  const expr = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
  if (!expr.test(val)) {
    return false
  }
  return true
}

export const validateTelefone = (val) => {
  if (!val) {
    return true
  }
  if (val.length < 16) {
    return false
  }
  return true
}

export const validateDataMenorDataAtual = (val) => {
  const dataAtual = moment(new Date()).format('DD/MM/YYYY')
  if (!val) {
    return true
  }
  if (moment(dataAtual).isSameOrBefore(moment(val))) {
    return false
  }
  return true
}

export const verifyValidTypeFileImage = (file) => {
  return file.type.split('/')[1].match(/jpg|jpeg|png/)
}

export const verifyValidTypeFileVideo = (file) => {
  return file.type.split('/')[1].match(/avi|mp4|mpeg|mwv/)
}

export const verifyValidTypeFileAudio = (file) => {
  return file.type.split('/')[1].match(/mp3|mp4|wav|wma'|ogg/)
}

export const verifyValidaUrl = (url) => {
  if (url) {
    try {
      url = new URL(url)
      return true
    } catch (_) {
      return false
    }
  }
  return true
}

export const validateFormIndividual = (refs) => {
  return new Promise((resolve, reject) => {
    let formHasErrors = false
    Object.keys(refs).forEach((key) => {
      let validate
      if (refs[key].$refs.input) {
        validate = refs[key].$refs.input.validate()
      } else {
        validate = refs[key].validate()
      }
      if (!formHasErrors) {
        formHasErrors = !validate
      }
    })
    if (!formHasErrors) {
      return resolve()
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return reject()
  })
}
