export const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errorMessage = result.error.errors.map((err) => err.message);
      const error = errorMessage.json(", ");
      return res.status(400).json({ message: error });
    }

    next();
  };
};
