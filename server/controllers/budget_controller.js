const express = require('express')
const router = express.Router()
const client = require('../server');

router.post('/budget', async (req, res) => {
  try {
    const col = client.db('budgetbuddy').collection('budgets');

    await col.insertOne({ 
      'paycheckAmount': req.body.paycheckAmount, 
      'paycheckDate': req.body.paycheckDate,
      'expenses': req.body.expenses
    });

    res.json({msg: 'success'});

  } catch (err) {
    console.error(err)
    res.status(500).json({msg: err});
  }
})

module.exports = router;