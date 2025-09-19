import { databases } from "./config";
import { ID } from "appwrite";

const db = {};

const collections = [
  {
    dbId: import.meta.env.VITE_DATABASE_ID,
    id: import.meta.env.VITE_COLLECTION_ID_FORM,
    name: "notes",
  },
];

collections.forEach((col) => {
  db[col.name] = {
    create: (payload, permissions, id = ID.unique()) =>
      databases.createDocument(col.dbId, col.id, id, payload, permissions),
  };
});

export default db;
