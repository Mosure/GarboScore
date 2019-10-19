/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.score = (req, res) => {
    let message = req.query.message || req.body.message || 'Hello World NEW3!';
    res.status(200).send(message);
  };
