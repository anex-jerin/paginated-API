const paginatedResults = (file) => {
  return (req, res, next) => {
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)
    let start = page - 1
    let pageStart = start * limit
    let pageEnd = limit + pageStart
    const users = file.slice(pageStart,pageEnd )
    res.usersFound = users
    next()
  }
}
module.exports = paginatedResults