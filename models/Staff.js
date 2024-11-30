const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        paymentType: {
            type: String,
            enum: ["salary", "hourly", "commission"],
            required: true,
        },
        contactDetails: {
            phone: {
                type: String,
                required: true,
                validate: {
                    validator: function (v) {
                        return /^\+?\d{10,15}$/.test(v); // Validates phone number format
                    },
                    message: (props) => `${props.value} is not a valid phone number!`,
                },
            },
            email: {
                type: String,
                required: false,
                validate: {
                    validator: function (v) {
                        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); // Validates email format
                    },
                    message: (props) => `${props.value} is not a valid email address!`,
                },
            },
        },
        status: {
            type: String,
            enum: ["active", "inactive", "on leave"], // Staff status
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
