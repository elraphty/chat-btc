import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("This is the index route");
});

export default router;
