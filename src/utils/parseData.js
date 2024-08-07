

export const parseDataFirebase = (obj) =>
  Object
    .entries(obj)
    .map(([id, { text, completed, createdAt, changed }]) => ({
      id,
      text,
      completed,
      createdAt,
      changed
    }))
