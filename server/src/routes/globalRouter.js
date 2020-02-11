import express from 'express';

const globalRouter = express.Router();

globalRouter.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'READA API'
  });
});

export default globalRouter;
