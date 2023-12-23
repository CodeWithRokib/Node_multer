import User from "../models/userModel.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      message: "Data get Successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "User not Found",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body, image: req.file.path });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Successfully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "User not created",
      error,
    });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const image = req.file ? req.file.filename : null;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...req.body, image },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).send({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Not Updated",
      error,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "User getById successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).send({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
