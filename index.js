const classMatcher = (themes, theme) => (matcher) => {
  if (!matcher.startsWith(theme + ":")) {
    return matcher;
  }
  return {
    matcher: matcher.slice(theme.length + 1),
    selector: s => `${themes[theme]} ${s}`
  }
}

// https://github.com/antfu/unocss/blob/main/packages/core/src/utils/helpers.ts#L3
const regex = /^\[(.+?)~?="(.*)"\]$/

const attributeMatcher = (themes, theme) => (matcher, raw) => {
  const match = raw.match(regex);
  if (!match) {
    return matcher;
  }
  const themeName = match[1];
  if (themeName !== theme) {
    return matcher;
  }
  return {
    matcher: match[2],
    selector: s => `${themes[theme]} ${s}`
  }
}

module.exports = function({ themes, attributify = true }) {
  const themeVariants = Object.keys(themes);
  const variants = [];
  themeVariants.forEach(theme => {
    variants.push(classMatcher(themes, theme));
    if (attributify) {
      variants.push(attributeMatcher(themes, theme));
    }
  })
  return variants;
}