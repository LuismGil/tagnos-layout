import * as Standard from 'moment'
import 'moment/min/locales'
// eslint-disable-next-line import/namespace
Standard.prototype.weekOfMonth = (m) => {
  return m.week() - moment(m).startOf('month')
    .week() + 1
}
import { groupArrayByProps } from 'src/util/index'

export const formatarData = (value) => Standard().format(value)
export const moment = (value, formato = 'DD/MM/YYYY') => Standard(value, formato)
export const momentDate = Standard
export const betweenDate = function (data, inicio, fim) {
  inicio = moment(inicio).subtract(1, 'day')
  fim = moment(fim).add(1, 'day')
  return moment(data).isBetween(inicio, fim)
}
export const betweenDateTime = function (data, inicio, fim) {
  inicio = moment(inicio, 'DD/MM/YYYY hh:mm:ss').subtract(1, 'day')
  fim = moment(fim, 'DD/MM/YYYY hh:mm:ss').add(1, 'day')
  return moment(data, 'DD/MM/YYYY hh:mm:ss').isBetween(inicio, fim)
}
/**
 * @param input dia mes ano
 * @param format moment format DD/MMM/YYYY'
 * @param callBackOut funcao para formatar os dados de saida
 * @return {*[]}
 */
export const montarCalendario = (input, format, callBackOut) => {
  const daysInMonth = moment(input, format).daysInMonth()
  let arrDays = []
  for (let i = 1; i <= daysInMonth; i++) {
    let current = moment(input, format).date(i)
    if (!callBackOut) {
      let dia = {
        data: current.format('DD/MM/YYYY'),
        dia: Number(current.format('DD')),
        mes: Number(current.format('MM')),
        ano: Number(current.format('YYYY')),
        diaSemana: Number(current.weekday())
      }
      arrDays.push(dia)
    }
    arrDays.push(callBackOut(current))
  }
  return arrDays
}

/**
 * @param input
 * @param format
 * @param callBackOut
 * @returns {*[]}
 */
export const montarCalendarioDetalhado = (input, format, callBackOut) => {
  let m = moment(input, format)
  const decNumDays = m.daysInMonth()
  const result = []
  for (let date = 1; date <= decNumDays; date++) {
    m.set('date', date)
    if (!callBackOut) {
      result.push({
        nomeDiaSemana: m.format('dddd'),
        semanaDoMes: m.weekOfMonth(m),
        data: m.format('DD/MM/YYYY'),
        dia: Number(m.format('DD')),
        mes: Number(m.format('MM')),
        ano: Number(m.format('YYYY')),
        diaSemana: Number(m.weekday())
      })
    }
    result.push(callBackOut(m))
  }
  return result
}

/**
 * @param calendario
 * @param semanaPropName
 * @param diaForaDoMes
 * https://github.com/moment/moment/issues/2934
 */
export const montarSemanasDoCalendario = (calendario, semanaPropName, diaForaDoMes = {}) => {
  let semanas = groupArrayByProps(calendario, [semanaPropName])
  semanas.map((semana, index) => {
    if (index === 0) { // tratar os dias que faltam na primeira semana
      if (semana.length < 7) {
        semana.splice(0, 0, ...Array((7 - semana.length)).fill(diaForaDoMes))
        return semana
      }
    }
    if (index === semanas.length - 1) { // tratar os dias que faltam na ultima semana
      if (semana.length < 7) {
        semana.splice(semana.length, 0, ...Array((7 - semana.length)).fill(diaForaDoMes))
        return semana
      }
    }
    return semana
  })
  return semanas
}

/**
 * @param input
 * @param format
 * @param locale
 * @returns {string}
 */
export const dayOfWeek = function (input, format, locale = 'pt-br') {
  // eslint-disable-next-line import/namespace
  Standard.locale(locale)
  return Standard(input, format).format('dddd')
}

/**
 * @param callback
 * @param locale
 * @returns {*[]|*}
 */
export const getMeses = (callback, locale = 'pt-br') => {
  // eslint-disable-next-line import/namespace
  let nomeMeses = Standard.localeData(locale).months()
  // eslint-disable-next-line import/namespace
  let nomeMesesCurto = Standard.localeData(locale).monthsShort()
  let lista = []
  for (let i = 0; i <= 12; i++) {
    lista.push({ nome: nomeMeses[i], nomeCurto: nomeMesesCurto[i], id: (i + 1) })
  }
  if (callback) {
    return callback(lista)
  }
  return lista
}

export const getLocaleAppData = (locale = 'pt-br') => {
  let lista = []
  // eslint-disable-next-line import/namespace
  let nomeMeses = Standard.localeData(locale).months()
  // eslint-disable-next-line import/namespace
  let nomeMesesCurto = Standard.localeData(locale).monthsShort()
  // eslint-disable-next-line import/namespace
  let dias = Standard.localeData(locale).weekdays()
  // eslint-disable-next-line import/namespace
  let diasCurtos = Standard.localeData(locale).weekdaysShort()
  // eslint-disable-next-line import/namespace
  let getAbbr = Standard.localeData(locale)._abbr
  // Função para manipular o string que indica a quantidade de dias selecionados
  const getLabelDias = () => {
    if (getAbbr === 'pt-br') {
      return 'dias'
    }
    return 'days'
  }

  lista.push({
    monthsShort: nomeMesesCurto,
    months: nomeMeses,
    days: dias,
    daysShort: diasCurtos,
    pluralDay: getLabelDias()
  })

  return lista[0]
}
