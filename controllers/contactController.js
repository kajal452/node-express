const Contact = require('../models/ContactModel');
// @desc get all contacts
// @route GET /api/contacts
// @access pubic
const asyncHandler = require('express-async-handler');
const index = asyncHandler( async (req, res) => {
    const contacts = await Contact.find({});
    res.status(200).json({data:contacts});
})

// @desc store contact
// @route POST /api/contacts
// @access pubic
const store = asyncHandler( async (req, res) => {
    const {email,name,phone} = req.body;
    if(!email || !name || !phone){
         res.status(400);
         throw new Error('All fields are required');
    }
    const contact = await Contact.create({email,name,phone});
    res.status(201).json({message: 'Contact Created',data:contact});
})

// @desc get single contact
// @route GET /api/contacts/:id
// @access pubic
const show = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json({data:contact});
})

// @desc update contact
// @route PUT /api/contacts/:id
// @access pubic
const update = asyncHandler( async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json({data:contact});
})

// @desc delete contact
// @route DELETE /api/contacts
// @access pubic
const destroy = asyncHandler( async (req, res) => {
   const contact =  await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({data:contact});
})

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}