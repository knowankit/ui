import forEach from 'lodash/forEach'

export const i18nToString = (str, props = {}) => {
  forEach(props, (v, k) => {
    str = String(str.replace(`{{${k}}}`, v))
  })

  return str
}
