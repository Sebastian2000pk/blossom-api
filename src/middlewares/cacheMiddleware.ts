import crypto from "crypto";
import { client, connectRedis } from "../cache/index";

export const cacheMiddleware = async (req, res, next) => {
  const { query, variables } = req.body;
  const cacheKey = generateCacheKey(query, variables);
  try {
    await connectRedis();
    const data = await client.get(cacheKey);
    if (data) {
      const parsedData = JSON.parse(data);
      const par = JSON.parse(parsedData)
      return res.json(par);
    }

    next();
  } catch (err) {
    next(err);
  }
};

const generateCacheKey = (query, variables) => {
  const keyString = JSON.stringify({ query, variables });
  return crypto.createHash("sha256").update(keyString).digest("hex");
};

export const cacheStoreMiddleware = async (req, res, next) => {
  const { query, variables } = req.body;
  const cacheKey = generateCacheKey(query, variables);
  const originalSend = res.send.bind(res);

  res.send = async function (body) {
    try {
      await connectRedis();
      await client.set(cacheKey, JSON.stringify(body));
      originalSend(body);
    } catch (err) {
      next(err);
    }
  };

  next();
};
