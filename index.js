module.exports = function({ themes }) {
  const themeVariants = Object.keys(themes);
  const variants = themeVariants.map(theme => {
    return {
      match: s => s.startsWith(theme + ":") ? s.slice(theme.length + 1) : null,
      selector: s => `${themes[theme]} ${s}`
    }
  })
  return variants;
}