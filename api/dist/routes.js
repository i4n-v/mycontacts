"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactController = require("./app/controllers/ContactController");
const CategorieController = require("./app/controllers/CategorieController");
const router = (0, express_1.Router)();
// root
router.get("/", (request, response) => response.send("Hello world"));
// contact
router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);
// categorie
router.get("/categories", CategorieController.index);
router.get("/categories/:id", CategorieController.show);
router.delete("/categories/:id", CategorieController.delete);
router.post("/categories", CategorieController.store);
router.put("/categories/:id", CategorieController.update);
exports.default = router;
