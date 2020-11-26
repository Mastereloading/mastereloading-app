export const setText = (text) => {
  return {
    type: 'SET_TEXT',
    text: text
  }
}

export const defaultText = () => {
  return {
    type: 'DEFAULT_TEXT'
  }
}