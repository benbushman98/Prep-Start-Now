//IMPORT JSON WEB TOKEN
const jwt = require('jsonwebtoken');

//SECRET & EXPIRATION
const secret = 'qwerty1234';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    //Token will be sent by req.body OR req.query OR req.headers.auth
    let token = req.body.token || req.query.token || req.headers.authorization;

    
    if (req.headers.authorization) {
      //Separates by a space, returns the last element in the array, trims off the white space at the end
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    //Verify token
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  //RETURNS SIGNED TOKEN, SECRET, & EXP
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
