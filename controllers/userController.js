const Razorpay = require('razorpay');
// const Contact = require('../models/ContactModel');
// @desc get all users
// @route GET /api/users
// @access pubic
const asyncHandler = require('express-async-handler');
const index = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Contact List'});
})

// @desc store user
// @route POST /api/users
// @access pubic
const store = asyncHandler( async (req, res) => {
    const amount = req.body.amount;

    if (!amount) return res.json({ message: 'Please provide amount' })

    // Create a razorpayInstance
    const razorpayInstance = new Razorpay({ 
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
     });

     const paymentOptions = {
        amount: amount * 100,
        currency: 'INR',
        receipt: '#1',
     };

     const razorpayOrder = await razorpayInstance.orders.create(paymentOptions);

     return res.json({ 
        message: 'success', 
        order: razorpayOrder 
    });
})

// @desc get single user
// @route GET /api/users/:id
// @access pubic
const show = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Fetch Contact',data:req.params.id});
})

// @desc update user
// @route PUT /api/users/:id
// @access pubic
const update = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Update Contact',data:req.body});
})

// @desc delete user
// @route DELETE /api/users
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