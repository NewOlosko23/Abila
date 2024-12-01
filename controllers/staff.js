const Staff = require("../models/Staff");

// Add a new staff member
exports.addStaff = async (req, res) => {
    try {
        const { name, role, paymentType, contactDetails } = req.body;

        const newStaff = new Staff({ name, role, paymentType, contactDetails });
        const savedStaff = await newStaff.save();

        res.status(201).json({ message: "Staff member added successfully", data: savedStaff });
    } catch (error) {
        res.status(500).json({ message: "Error adding staff member", error: error.message });
    }
};

// Release a staff member
exports.releaseStaff = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStaff = await Staff.findByIdAndDelete(id);

        if (!deletedStaff) {
            return res.status(404).json({ message: "Staff member not found" });
        }

        res.status(200).json({ message: "Staff member released successfully", data: deletedStaff });
    } catch (error) {
        res.status(500).json({ message: "Error releasing staff member", error: error.message });
    }
};

// View all staff members
exports.getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.status(200).json({ data: staff });
    } catch (error) {
        res.status(500).json({ message: "Error fetching staff members", error: error.message });
    }
};
