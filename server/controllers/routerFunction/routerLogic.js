import express from "express";

export const router = express.Router();

// Router for mobility render
export const mobilityRouter = (zone, instance) => {
    return (
        router.get("/mobility/" + zone, instance)
    );
}

export const proprioceptionRouter = (zone, instance) => {
    return (
        router.get("/proprio/" + zone, instance)
    );
}

export const reinforcementRouter = (zone, instance) => {
    return (
        router.get("/renfo/" + zone, instance)
    );
}