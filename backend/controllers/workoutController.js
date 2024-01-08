import { workoutModel } from "../models/workoutModel.js";

export const allWorkouts = async (req, res) => {
  const { date } = req.query;
  const user_id = req.user._id;

  try {
    const findAllWorkouts = await workoutModel.find({ user_id });

    let workouts = findAllWorkouts.filter((workout) => {
      const workoutDay = new Date(workout.createdAt.getTime());

      const workoutDate = new Date(
        workoutDay.getFullYear(),
        workoutDay.getMonth(),
        workoutDay.getDate()
      ).toDateString();

      const calendarChosenDate = new Date(date).toDateString();

      return workoutDate == calendarChosenDate;
    });

    res.status(200).json({ workouts });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const singleWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await workoutModel.findById({ _id: id });
    res.status(200).json({ workout });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const user_id = req.user._id;
    const createWorkout = await workoutModel.create({ title, reps, load, user_id });
    res.status(200).json({ createWorkout });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;
  const workout = { title, reps, load };

  try {
    const update = await workoutModel.findByIdAndUpdate({ _id: id }, workout);
    res.status(200).json({ update });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await workoutModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ workout });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
