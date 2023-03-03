const handleError = (err) => res => {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
}
  

module.exports = {
    handleError
}