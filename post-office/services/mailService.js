const { v4: uuidv4 } = require("uuid");
let mailList = [];

const mailService = {
  save: (mail) => {
    mail.id = Math.floor(Math.random() * 900000);
    mailList.push(mail);
  },

  getMailList: () => mailList,

  delete: (id) => {
    mailList = mailList.filter((mail) => {
      if (mail.id !== id) {
        return mail;
      }
    });
  },

  getMail: (id) => {
    return mailList.find((mail) => mail.id === id);
  },
};

module.exports = mailService;
