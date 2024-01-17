// const Contact = require('../models/ContactModel');
// @desc get all contacts
// @route GET /api/contacts
// @access pubic
const asyncHandler = require('express-async-handler');
const index = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Contact List'});
})

// @desc store contact
// @route POST /api/contacts
// @access pubic
const store = asyncHandler( async (req, res) => {
    console.log(req.body);
    const {email,password} = req.body;
    if(!email || !password){
         res.status(400);
         throw new Error('All fields are required');
    }
    res.status(201).json({message: 'Contact Created',data:req.body});
})

// @desc get single contact
// @route GET /api/contacts/:id
// @access pubic
const show = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Fetch Contact',data:req.params.id});
})

// @desc update contact
// @route PUT /api/contacts/:id
// @access pubic
const update = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Update Contact',data:req.body});
})

// @desc delete contact
// @route DELETE /api/contacts
// @access pubic
const destroy = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Delete Contact',data:req.params.id});
})

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}