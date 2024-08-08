const Discount = require('../models/discountModel');

exports.createDiscount = async (req, res) => {
    try {
        const discount = new Discount(req.body);
        await discount.save();
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.find();
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.applyDiscount = async (req, res) => {
    try {
        const { code, target } = req.body;
        const discount = await Discount.findOne({ code, target });
        if (discount) {
            res.status(200).json(discount);
        } else {
            res.status(404).json({ message: 'Discount not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
