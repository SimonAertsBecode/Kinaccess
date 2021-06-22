import * as zoneInstance from "../controllers/objectInstance/zoneInstance.js";
import { router, mobilityRouter } from "../controllers/routerFunction/routerLogic.js";

mobilityRouter(zoneInstance.neck.zone, zoneInstance.neck.mobilityRender());
mobilityRouter(zoneInstance.shoulder.zone, zoneInstance.shoulder.mobilityRender());
mobilityRouter(zoneInstance.elbow.zone, zoneInstance.elbow.mobilityRender()); 
mobilityRouter(zoneInstance.wrist.zone, zoneInstance.wrist.mobilityRender()); 
mobilityRouter(zoneInstance.rachis.zone, zoneInstance.rachis.mobilityRender()); 
mobilityRouter(zoneInstance.basin.zone, zoneInstance.basin.mobilityRender()); 
mobilityRouter(zoneInstance.knee.zone, zoneInstance.knee.mobilityRender()); 
mobilityRouter(zoneInstance.ankle.zone, zoneInstance.ankle.mobilityRender());

export { 
    router as mobilityRouter
}
