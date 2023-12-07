import { workoutModel } from "../models/workoutModel.js";

export const allWorkouts = async (req, res) => {
  try {
    const workouts = await workoutModel.find({});
    res.status(200).json({ workouts });
  } catch (err) {
    return res.status(404).json({ error: err.message });
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
  const { title, reps, load, day } = req.body;
  const workout = { title, reps, load, day };

  try {
    const createWorkout = await workoutModel.create(workout);
    res.status(200).json({ createWorkout });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load, day } = req.body;
  const workout = { title, reps, load, day };

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
