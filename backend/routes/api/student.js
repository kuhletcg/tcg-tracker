const students = require("../../students");
const uuid = require("uuid");

const studentRoutes = (app) => {
  app.get("/api/student", async (req, res) => {
    try {
      await res.status(200).send(students);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.post("/api/student", async (req, res) => {
    const { freecodecamp, blogPost, codewars, blogPost } = req.body.form;
    try {
      const newStudent = await {
        id: uuid.v4(),
        freecodecamp,
        blogPost,
        codewars,
        blogPost,
      };
      students.push(newStudent);
      res.status(201).json(students);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.delete("/api/student/:id", (req, res) => {
    const { id } = req.params;

    try {
      for (let i in students) {
        let index = students.indexOf(students[i]);
        students.splice(index, 1);
      }
      return res.status(200).send(students);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.put("/api/student/:id", (req, res) => {
    const { id } = req.params;
    const { edit } = req.body;
    try {
      for (let i in students) {
        if (students[i].id === id) {
          students[i].codewars = edit;
        }
      }
      return res.status(200).send(students);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
module.exports = { studentRoutes };
