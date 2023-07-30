import { Router, Request, Response } from "express";
const router = Router();
import lnurl from "./lnurl";

router.get("/", (req: Request, res: Response): void => {
  res.send("This is the index route");
});

router.use("/lnurl", lnurl);

// 404 route
router.all("*", (req: Request, res: Response): void => {
  const errorMessage = {
    message: "You are hitting a wrong route, find the valid routes below",
    success: false,
  };

  res.status(404).json(errorMessage);
});

export default router;
