import { Router } from "express";

const appointments = [
  { id: 1, brokerId: 1, date: "2021-10-15T07:30:00" },
  { id: 2, brokerId: 3, date: "2021-11-22T14:00:00" },
  { id: 3, brokerId: 3, date: "2021-11-23T11:18:00" },
  { id: 4, brokerId: 4, date: "2021-05-10T15:22:00" },
];

const router = Router();

router.get("/", (req, res) => {
  res.send(appointments);
});

export default router;
