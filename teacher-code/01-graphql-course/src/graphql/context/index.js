import jwt from 'jsonwebtoken';
import { UsersApi } from '../schema/user/datasources';

const verifyJwtToken = async (token) => {
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const userApi = new UsersApi();
    userApi.initialize({});
    const foundUser = await userApi.getUser(userId);

    if (foundUser.token !== token) return '';
    return userId;
  } catch (e) {
    // console.log(e);
    return '';
  }
};

const authorizeUserWithBearerToken = async (req) => {
  if (!req || !req.headers || !req.headers.authorization) return '';

  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_bearer, token] = authorization.split(' ');
    return await verifyJwtToken(token);
  } catch (e) {
    return '';
  }
};

const cookieParser = (cookiesHeader) => {
  // The final goal is to return an object with key/value reflecting
  // the cookies. So, this functions always returns an object.

  // If we do not receive a string, we won't do anything.
  if (typeof cookiesHeader != 'string') return {};

  const cookies = cookiesHeader.split(/;\s*/);

  // If we have something similar to cookie, we want to add them
  // to the final object
  const parsedCookie = {};
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    parsedCookie[key] = value;
  }

  // The reason I'm using JSON here is to make sure the final
  // object won't have any undefined value.
  return JSON.parse(JSON.stringify(parsedCookie));
};

export const context = async ({ req, res, connection }) => {
  const reqOrConnection = req || connection?.context?.req;
  let loggedUserId = await authorizeUserWithBearerToken(reqOrConnection);

  if (!loggedUserId) {
    if (
      reqOrConnection &&
      reqOrConnection.headers &&
      reqOrConnection.headers.cookie
    ) {
      const { jwtToken } = cookieParser(reqOrConnection.headers.cookie);
      loggedUserId = await verifyJwtToken(jwtToken);
    }
  }

  const theContext = {
    loggedUserId,
    res,
  };

  if (connection) {
    const userApi = new UsersApi();
    userApi.initialize({});

    theContext.dataSources = {
      userApi,
    };
  }

  return theContext;
};
