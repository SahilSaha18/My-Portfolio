
const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid contact details.",
      });
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      message.trim().length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please check your input.",
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: contact,
    });
  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

module.exports = { createContact };
