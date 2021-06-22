import ExercicesAPI from "../../models/Classes/MobilityExercices.js";

const neck = new ExercicesAPI("neck")
const shoulder = new ExercicesAPI("shoulder");
const elbow = new ExercicesAPI("elbow");
const wrist = new ExercicesAPI("wrist");
const rachis = new ExercicesAPI("rachis");
const basin = new ExercicesAPI("basin");
const knee = new ExercicesAPI("knee");
const ankle = new ExercicesAPI("ankle");

export {
    neck,
    shoulder,
    elbow,
    wrist,
    rachis,
    basin,
    knee,
    ankle
};
