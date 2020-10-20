const express = require("express");
const router = express.Router();
const Author = require("../models/Author");
const Cookbook = require("../models/Cookbook");
const mongoose = require("../db/connection");

// Write the route to list all authors

router.get("/", async (req, res) => {
  const author = await Author.find({});
  res.json({ status: 200, data: author });
});

// Write the route to get authors by firstname
router.get("/:firstName", async (req, res) => {
  console.log("req.param first name", req.params);
  const author = await Author.find({ firstName: req.params.firstName });
  res.json({ status: 200, data: author });
});

// Write the route to create an author:
router.post("/", async (req, res) => {
  console.log("req.body", req.body);
  const author = await Author.create(req.body);
  res.json({ status: 200, data: author });
});

// Write the route to update an author
router.put("/:authorId/updateBooks/:bookId", async (req, res) => {
  // console.log('req.body',req.body)
  const cookbook = await Cookbook.findByIdAndUpdate(
    req.params.bookId,
    req.body,
    { new: true }
  );
  console.log("lemme see dat cookbook", cookbook);
  const author = await Author.findByIdAndUpdate(req.params.authorId, {
    data: cookbook,
    new: true,
  });
  res.json({ status: 200, msg: "cookbook via author updated", data: author });
});

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

// router.delete('/:authorName/deleteBooks/:bookId', async (req, res) => {
//     // console.log('req.body',req.body)
//     const cookbook = await Cookbook.findByIdAndDelete(req.params.bookId)
//     const authorNameArr = req.params.authorName.split(' ')
//     const author = await Author.findOneAndUpdate({ $or:[{firstName: authorNameArr[0], lastName: authorNameArr[1]}], data: cookbook,new:true})
//     res.json({status: 200, msg:'cookbook via author updated',data: author})
// })
// router.delete("/:authorName/deleteBooks/:bookId", async (req, res) => {
//   // console.log('req.body',req.body)
//   const updateAuthor = async () => {
//     const authorNameArr = req.params.authorName.split(" ");
//     const author = await Author.findOneAndUpdate({
//       $or: [{ firstName: authorNameArr[0], lastName: authorNameArr[1] }],
//       data: cookbook,
//       new: true,
//     });
//      res.json({ status: 200, msg: "cookbook via author updated", data: author })
//   };
//   const cookbook = await Cookbook.findByIdAndDelete( () => {
//     req.params.bookId, updateAuthor();
//   });

//  ;
// });

module.exports = router;
