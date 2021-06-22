import express from "express";

export const router = express.Router();

// Router for mobility render
export const routerLogic = (zone, instance) => {
    return (
        router.get("/" + zone, instance)
    );
}
