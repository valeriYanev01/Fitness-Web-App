import mongoose from "mongoose";

import WorkoutModel from "../models/workoutModel.js";

export const getAllWorkouts = async (req, res) => {
  const workouts = await WorkoutModel.find({});

  res.status(200).json({ workouts });
};

export const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  const _id = id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid URL" });
  }

  try {
    const workout = await WorkoutModel.findById(_id);
    res.status(200).json(workout);
  } catch (err) {
    return res.status(404).json({ message: "Workout not found" });
  }
};

export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  if (!title || !reps || !load) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const workout = await WorkoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    return res.status(400).json({ message: "Unable to create workout" });
  }
};

export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await WorkoutModel.findByIdAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ message: "Workout not found" });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  const _id = id;

  try {
    const workout = await WorkoutModel.findByIdAndDelete({ _id });
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ message: "Workout not found" });
  }
};
