import * as zoneInstance from "../controllers/objectInstance/zoneInstance.js";
import { proprioceptionRouter, router } from "../controllers/routerFunction/routerLogic.js";

proprioceptionRouter(zoneInstance.neck.zone, zoneInstance.neck.proprioceptionRender());
proprioceptionRouter(zoneInstance.shoulder.zone, zoneInstance.shoulder.proprioceptionRender());
proprioceptionRouter(zoneInstance.elbow.zone, zoneInstance.elbow.proprioceptionRender()); 
proprioceptionRouter(zoneInstance.wrist.zone, zoneInstance.wrist.proprioceptionRender()); 
proprioceptionRouter(zoneInstance.rachis.zone, zoneInstance.rachis.proprioceptionRender()); 
proprioceptionRouter(zoneInstance.basin.zone, zoneInstance.basin.proprioceptionRender()); 
proprioceptionRouter(zoneInstance.knee.zone, zoneInstance.knee.proprioceptionRender()); 
proprioceptionRouter(zoneInstance.ankle.zone, zoneInstance.ankle.proprioceptionRender());

export { 
    router as proprioRouter
}