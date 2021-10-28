module.exports = function ({ themes }) {
  const themeVariants = Object.keys(themes);
  const variants = themeVariants.map((theme) => (matcher) => {
    if (!matcher.startsWith(theme + ":") && !matcher.startsWith(theme + "-")) {
      return matcher;
    }
    return {
      matcher: matcher.slice(theme.length + 1),
      selector: (s) => `${themes[theme]} ${s}`,
    };
  });
  return variants;
};