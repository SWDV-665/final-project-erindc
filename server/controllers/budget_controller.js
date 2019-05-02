const express = require('express')
const router = express.Router()
const client = require('../db/db');

router.get('/budget/current', async (req, res) => {
  try {
    const col = client.db('budgetbuddy').collection('budgets');
    let current = await col.findOne({current: true})
    res.json(current ? [current] : null);
  } catch (err) {
    console.error(err)
    res.status(500).json({msg: err});
  }
})

router.post('/budget', async (req, res) => {
  try {
    const col = client.db('budgetbuddy').collection('budgets');
    await col.findOneAndUpdate({current: true}, {$set : {current: false}});
    await col.insertOne({ 
      'paycheckAmount': parseInt(req.body.paycheckAmount), 
      'paycheckDate': req.body.paycheckDate,
      'expenses': req.body.expenses,
      'current': true
    });
    res.status(201).json({msg:'ok'});
  } catch (err) {
    console.error(err)
    res.status(500).json({msg: err});
  }
})

module.exports = router;