const getAllUsers = async (req, res) => {
    return res.status(200).json({ message: 'All users' });
};

const getUser = async (req, res) => {
    return res.status(200).json({ message: 'Get User' + req.prams.id });
};

const createUser = async (req, res) => {
    return res.status(200).json({ message: 'Create user' + req.prams.id });
};

const editUser = async (req, res) => {
    return res.status(200).json({ message: 'Edit User' + req.prams.id });
}

const deleteUser = async (req, res) => {
    return res.status(200).json({ message: 'Delete User' + req.prams.id });
}

const getAllUnits = async (req, res) => {  
    return res.status(200).json({ message: 'All Units' });
}

const getUnit = async (req, res) => {
    return res.status(200).json({ message: 'Get Unit' + req.prams.id });
};

const createUnit = async (req, res) => {
    return res.status(200).json({ message: 'Create Unit' + req.prams.id });
}   

const editUnit = async (req, res) => {
    return res.status(200).json({ message: 'Edit Unit' + req.prams.id });
}

const deleteUnit = async (req, res) => {    
    return res.status(200).json({ message: 'Delete Unit' + req.prams.id });
}

module.exports = { getAllUsers, createUser, editUser, deleteUser, getAllUnits, createUnit, editUnit, deleteUnit };
