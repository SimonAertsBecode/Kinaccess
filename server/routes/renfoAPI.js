import * as zoneInstance from "../controllers/objectInstance/zoneInstance.js";
import { reinforcementRouter, router } from "../controllers/routerFunction/routerLogic.js";

reinforcementRouter(zoneInstance.neck.zone, zoneInstance.neck.reinforcementRender());
reinforcementRouter(zoneInstance.shoulder.zone, zoneInstance.shoulder.reinforcementRender());
reinforcementRouter(zoneInstance.elbow.zone, zoneInstance.elbow.reinforcementRender()); 
reinforcementRouter(zoneInstance.wrist.zone, zoneInstance.wrist.reinforcementRender()); 
reinforcementRouter(zoneInstance.rachis.zone, zoneInstance.rachis.reinforcementRender()); 
reinforcementRouter(zoneInstance.basin.zone, zoneInstance.basin.reinforcementRender()); 
reinforcementRouter(zoneInstance.knee.zone, zoneInstance.knee.reinforcementRender()); 
reinforcementRouter(zoneInstance.ankle.zone, zoneInstance.ankle.reinforcementRender());

export { 
    router as reinforcementRouter
}