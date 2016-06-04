const CurrentYear = {}

CurrentYear.get = function() {
  return new Date().getFullYear()
}

module.exports = CurrentYear
