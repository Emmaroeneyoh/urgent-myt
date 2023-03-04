const { trainerModel } = require("../../core/db/trainer.schema");
const { handleError } = require("../../core/utils");

const single_trainer_model = async (data, res) => {
  try {
    const { trainerId } = data;
    const userData = await trainerModel
      .findById({ _id: trainerId })
      .populate({ path: "traineeId", select: "name location phoneNumber" });

    return userData;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const all_trainer_model = async (data, res) => {
  try {
    const userData = await trainerModel
      .find()
      .populate({ path: "traineeId", select: "name location phoneNumber" });

    return userData;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  single_trainer_model, all_trainer_model
};
