const express = require("express");
const router = express.Router();
const mailService = require("../services/mailService");

router.post("/", (req, res) => {
  const mail = req.body;
  mailService.save(mail);
  res.json({ mail: mail });
});

router.get("/", (req, res) => {
  res.json({ mails: mailService.getMailList() });
});

router.delete("/del/:id", (req, res) => {
  mailService.delete(parseFloat(req.params.id));
  res.json({ mails: mailService.getMailList() });
});

router.get("/:id", (req, res) => {
  const mail = mailService.getMail(parseFloat(req.params.id));
  if (mail !== undefined) {
    res.json(mail);
  } else {
    res.status(404).send("No Such Message");
  }
});

module.exports = router;
