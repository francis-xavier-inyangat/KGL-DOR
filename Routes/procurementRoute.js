const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('procurement')
});

module.exports = router;