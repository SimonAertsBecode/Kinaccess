export default class ExercicesAPI {
    constructor(zone) {
        this.zone = zone;
    }

    mobilityRender = () => {
        return (
        (_, res) => {
            res.send(`this works FOR MOBILITY ${this.zone}`);
        }
        )
    };

    proprioceptionRender = () => {
        return (
        (_, res) => {
            res.send(`this works FOR PROPRIOCEPTION ${this.zone}`);
        }
        )
    };

}
