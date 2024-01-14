import { IWorkoutModel } from "@/models/IWorkoutModel";
import { StoreAccessController } from "../store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

export const CreateWorkoutController = (props: { isUserNew: boolean }) => {

  const defaultWorkoutData: IWorkoutModel = {
    workoutName: "",
    exerciseData: [
      {
        exerciseName: "",
        sets: 0,
        reps: 0,
      },
    ],
  }

  const increaseNumberOfExercises = (): void => {
    defaultWorkoutData.exerciseData.push({
      exerciseName: "",
      sets: 0,
      reps: 0,
    });
  };

  const increaseNumberOfReps = (index: number): void => {
    defaultWorkoutData.exerciseData[index].reps += 1;
  };

  const decreaseNumberOfReps = (index: number): void => {
    if (defaultWorkoutData.exerciseData[index].reps > 0) {
      defaultWorkoutData.exerciseData[index].reps -= 1;
    }
  };

  const increaseNumberOfSets = (index: number): void => {
    defaultWorkoutData.exerciseData[index].sets += 1;
  };

  const decreaseNumberOfSets = (index: number): void => {
    if (defaultWorkoutData.exerciseData[index].sets > 0) {
      defaultWorkoutData.exerciseData[index].sets -= 1;
    }
  };

  const removeExercise = (index: number): void => {
    if (defaultWorkoutData.exerciseData.length > 0) {
      defaultWorkoutData.exerciseData.splice(index, 1);
    }
  };

  const saveWorkoutData = (): void => {
    StoreAccessController().workoutStore.createWorkout(defaultWorkoutData);
    ModalController().setCreateWorkoutModalValue(false);
  };

  const deleteWorkoutData = (): void => {
    StoreAccessController().workoutStore.deleteSelectedWorkout();
    ModalController().setWorkoutDetailsModalValue(false);
  };

  return {
    defaultWorkoutData,
    increaseNumberOfExercises,
    decreaseNumberOfReps,
    increaseNumberOfReps,
    increaseNumberOfSets,
    decreaseNumberOfSets,
    removeExercise,
    saveWorkoutData,
    deleteWorkoutData,
  };
};