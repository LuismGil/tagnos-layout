// noinspection NpmUsedModulesInstalled
/* eslint-disable */
// import Vue from 'vue'
import { get, isEmpty, isEqual, set, groupBy, mapValues, isNull } from 'lodash'
import characters from './characters'

/**
 * @param {Array} list
 * @param {String} param
 */
export const groupList = (list, param) => {
  const lista = []
  const group = mapValues(groupBy(list, param))
  Object.keys(group).forEach((key) => {
    lista.push(group[key])
  })
  return lista
}

/**
 * @param arrayList
 * @param props
 * @param returnAs (array || object)
 * @returns {*[]}
 */
export const groupArrayByProps = (arrayList = [], props = [], returnAs = 'array') => {
  const constructGroups = (array, functionKeys) => {
    const groups = {}
    array.forEach(function (arrayItem) {
      const group = JSON.stringify(functionKeys(arrayItem))
      groups[group] = groups[group] || []
      groups[group].push(arrayItem)
    })
    if (returnAs === 'object') {
      return groups
    }
    return Object.keys(groups).map(function (group) {
      return groups[group]
    })
  }
  return constructGroups(arrayList, function (item) {
    return props.map((keyProp) => {
      return prop(item, keyProp)
    })
  })
}
/**
 * @param {Object|Array} structure
 * @param {String} path
 * @param {*} fallback
 * @returns {*} Returns the resolved value
 */
export const prop = (structure, path, fallback = undefined) => {
  return get(structure, path, fallback)
}
/**
 * @param {Object|Array} structure
 * @param {String} path
 * @param {*} value
 * @returns {*}
 */
export const apply = (structure, path, value) => {
  return set(structure, path, value)
}
/**
 * @param {*} element
 * @param {Function} action
 * @returns {*}
 */
export const clone = (element, action = (value) => value) => {
  // Handle the 3 simple types, and null or undefined
  if (element === null || element === undefined || typeof element !== 'object') {
    return action(element)
  }
  // Handle File
  if (element instanceof File) {
    return new File([element], element.name)
  }
  // Handle Date
  if (element instanceof Date) {
    const date = new Date()
    date.setTime(element.getTime())
    return action(date)
  }

  // Handle Array
  if (element instanceof Array) {
    return element.map((item) => clone(item, action))
  }

  // Handle Object
  if (element instanceof Object) {
    const reduce = (accumulate, property) => {
      accumulate[property] = clone(element[property], action)
      return accumulate
    }
    return Object.keys(element)
      .reduce(reduce, {})
  }

  throw new Error('Unable to copy element! Its type isn\'t supported.')
}
/**
 * @param {Vue} $component
 * @param {String} name
 * @returns {*}
 */
export const ref = ($component, name) => {
  const component = $component.$refs[name]
  if (!component) {
    return null
  }
  if (Array.isArray(component) && component[0]) {
    return component[0]
  }
  return component
}
/**
 * @returns {string}
 */
export const uniqueKey = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
/**
 * @param {String} path
 * @param {Boolean} remote
 * @returns {String}
 */
export const statics = (path, remote = false) => {
  if (!remote) {
    return `${process.env.build.PUBLIC_PATH}statics/${path}`
  }
  return `${process.env.storage.URL}/${path}`
}
/**
 * @param {*} value
 * @returns {*}
 */
export const clear = (value) => {
  if (typeof value === 'string') {
    return value.replace(new RegExp(characters, 'g'), '')
  }
  return value
}
/**
 * @param {*} value
 * @returns {*}
 */
export const sanitize = (value) => {
  return clone(value, clear)
}
/**
 * @param {String} name
 * @param {*} component
 */
// export const register = (name, component) => {
//   Vue.component(name, component)
// }
/**
 * @param {Object} value
 * @returns {boolean}
 */
export const empty = (value) => {
  return isEmpty(value)
}
/**
 * @param valueOne
 * @param valueTwo
 * @returns {boolean}
 */
export const equal = (valueOne, valueTwo) => {
  return isEqual(valueOne, valueTwo)
}
/**
 * @param value
 * @returns {Window}
 */
export const openReport = (value) => {
  return window.open(`${window.configuration.serverAPI}${estado}/reports?token=${value}`)
}
/**
 * @param {*} value
 * @returns {boolean}
 */
export const isString = (value) => typeof value === 'string'
/**
 * @param {*} value
 * @returns {boolean}
 */
export const isObject = (value) => typeof value === 'object'
/**
 * @param {*} value
 * @returns {boolean}
 */
export const isNumber = (value) => typeof value === 'number'
/**
 * @param {*} value
 * @returns {boolean}
 */
export const isFunction = (value) => typeof value === 'function'
/**
 * @param {Object} value
 * @param {Object} other
 * @returns {Boolean}
 */
export const equals = (value, other) => {
  return isEqual(value, other)
}
export const isObjectNull = (value) => {
  return isNull(value)
}
/**
 * @param target
 * @param objects
 * @returns {*}
 */
export function mixin (target, ...objects) {
  for (const object of objects) {
    if (typeof object !== 'object') {
      continue
    }
    for (const key of Object.keys(object)) {
      if (typeof object[key] === 'object') {
        target[key] = Array.isArray(object[key]) ? [] : {}
        mixin(target[key], object[key])
        continue
      }
      Object.assign(target, object)
    }
  }
  return target
}
