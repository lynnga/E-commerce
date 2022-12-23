const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
Tag.findAll({
  include:[{
    model:Product,
    through: ProductTag
  }]
})
.then(data => res.status(200).json(data))
.catch(err => {
  console.log(err);
  res.status(500).json(err)
})
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include:[Product],
  })
  .then((data) => res.json(data))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  // // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((data) => res.status(200).json(data))
  .catch((err) => {
    console.log;
    res.status(400).json(err);
  });
// create a new cateqgory
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  // update a tag's name by its `id` value
})
.then((data) => res.status(200).json(data))
.catch((err) => {
  console.log(err);
  res.status(400).json(err);
});
});


router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  
  .then((data) => res.status(200).json(data))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});






  // delete on tag by its `id` value


module.exports = router;
