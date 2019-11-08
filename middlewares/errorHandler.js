module.exports = (err, req, res, next) => {
  console.log(err.name, "=================", err);
  

  if (err.status) {
    res.status(err.status).json({ message : err.message})
  } else {
    if (err.name === 'ValidationError') {
      res.status(400).json({ message : `email is already used`})
    } else if (err.name === 'JsonWebTokenError') {
      console.log(err.message);
      res.status(401).json({ message : `jwt id invalid`})
    }
  
    else {
      res.status(500).json({ message : `internal server error`})
    }

  }
}

