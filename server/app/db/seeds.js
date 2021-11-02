import config from "../config.js";
import once from "./connections/once.js";
import storeGoodsData from "./data.js";

// Destructure 'db', then destructure 'name' and 'collection'.
const {
  db: { name, collectionName },
} = config;

// Asynchronous Anonymous IIFE - Immediately Invoked Function Expression
(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collectionName).deleteMany({});
  await conn.db(name).collection(collectionName).insertMany(storeGoodsData);
  conn.close();
})();
