const User = require('../../Models/User');
const Unit = require('../../Models/Unit');

// Get all users
const getAllUsers =  (req, res) => {
    User.find({society_id: req.params.society_id}).then((users) => {
        res.status(200).json({
            users: users,
        });
    }
    ).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
};

// Get a user by id
const getUser =  (req, res) => {
    User.findOne({ _id: req.params.id }).then((user) => {
        res.status(200).json({
            user: user,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
};

// Create a new user
const createUser =  (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        society_ids: [req.body.society_id],
        unit_id: req.body.unit_id,
        id_type: req.body.id_type,
        id_number: req.body.id_number,
        id_image: req.body.id_image,
        gender: req.body.gender,
        dob: req.body.dob,
        ethinicity: req.body.ethinicity,
        yearly_income: req.body.yearly_income,
    });
    user.save().then((result) => {
        res.status(201).json({
            message: "User created successfully",
            user: result,   
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    }
    );
};

// Edit a user by id
const editUser =  (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        society_ids: [req.body.society_id],
        unit_id: req.body.unit_id,
        id_type: req.body.id_type,
        id_number: req.body.id_number,
        id_image: req.body.id_image,
        gender: req.body.gender,
        dob: req.body.dob,
        ethinicity: req.body.ethinicity,
        yearly_income: req.body.yearly_income,
    });
    User.updateOne({ _id: req.params.id}, user).then((result) => {
        res.status(200).json({
            message: "User updated successfully",
            user: result,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
}

// Delete a user by id
const deleteUser =  (req, res) => {
    User.deleteOne({ _id: req.params.id }).then((result) => {
       if (result.n > 0) {
           res.status(200).json({
               message: "User deleted successfully",
           });
       }
         else {
            res.status(401).json({
                message: "Not authorized",
            });
        }
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
}

// Get All Units
const getAllUnits =  (req, res) => {  
    Unit.find({society_id: req.params.society_id}).then((units) => {
        res.status(200).json({
            units: units,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
}

// Get Unit by Id
const getUnit =  (req, res) => {
    Unit.findOne({ _id: req.params.id }).then((unit) => {
        res.status(200).json({
            unit: unit,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
};

// Create a new unit
const createUnit =  (req, res) => {
    const unit = new Unit({
        society_id: req.body.society_id,
        size: {
            area: req.body.size.area,
            unit: req.body.size.unit,
        },
        parkings: req.body.parkings,
        isPetFriendly: req.body.isPetFriendly,
        blueprint: req.body.blueprint,
        rent: [
            {
                value: req.body.rent.value,
                fromDate: req.body.rent.fromDate,
                toDate: req.body.rent.toDate,
            }
        ],
        isRented: req.body.isRented,
        rentedTill: req.body.rentedTill,
        beds: req.body.beds,
        baths: req.body.baths,
        maxCapacity: req.body.maxCapacity,
    });
    unit.save().then((result) => {
        res.status(201).json({
            message: "Unit created successfully",
            unit: result,   
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
}   

// Edit a unit by id
const editUnit =  (req, res) => {
    const unit = new Unit({
        society_id: req.body.society_id,
        size: {
            area: req.body.size.area,
            unit: req.body.size.unit,
        },
        parkings: req.body.parkings,
        isPetFriendly: req.body.isPetFriendly,
        blueprint: req.body.blueprint,
        rent: [
            {
                value: req.body.rent.value,
                fromDate: req.body.rent.fromDate,
                toDate: req.body.rent.toDate,
            }
        ],
        isRented: req.body.isRented,
        rentedTill: req.body.rentedTill,
        beds: req.body.beds,
        baths: req.body.baths,
        maxCapacity: req.body.maxCapacity,
    });
    Unit.updateOne({ _id: req.params.id}, unit).then((result) => {
        res.status(200).json({
            message: "Unit updated successfully",
            unit: result,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
}

// Delete a unit by id
const deleteUnit =  (req, res) => {    
    Unit.deleteOne({ _id: req.params.id }).then((result) => {
        if (result.n > 0) {
            res.status(200).json({
                message: "Unit deleted successfully",
            });
        }
        else {
            res.status(401).json({
                message: "Not authorized",
            });
        }
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
}

module.exports = { getAllUsers, getUser, createUser, editUser, deleteUser, getAllUnits, getUnit, createUnit, editUnit, deleteUnit };
