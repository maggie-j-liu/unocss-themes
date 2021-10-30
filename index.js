module.exports = function ({ themes }) {
  return (matcher) => {
    const regex = /^(.+?)[:-](.+)$/
    const matches = matcher.match(regex);
    if (!matches || !themes[matches[1]]) {
      return matcher;
    }
    return {
      matcher: matches[2],
      selector: (s) => `${themes[matches[1]]} ${s}`
    }
  }
};
