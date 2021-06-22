import { router } from "../controllers/routerFunction/routerLogic.js";
import * as zoneInstance from "../controllers/objectInstance/zoneInstance.js";
import { routerLogic } from "../controllers/routerFunction/routerLogic.js";

routerLogic(zoneInstance.neck.zone, zoneInstance.neck.mobilityRender());
routerLogic(zoneInstance.shoulder.zone, zoneInstance.shoulder.mobilityRender());
routerLogic(zoneInstance.elbow.zone, zoneInstance.elbow.mobilityRender()); 
routerLogic(zoneInstance.wrist.zone, zoneInstance.wrist.mobilityRender()); 
routerLogic(zoneInstance.rachis.zone, zoneInstance.rachis.mobilityRender()); 
routerLogic(zoneInstance.basin.zone, zoneInstance.basin.mobilityRender()); 
routerLogic(zoneInstance.knee.zone, zoneInstance.knee.mobilityRender()); 
routerLogic(zoneInstance.ankle.zone, zoneInstance.ankle.mobilityRender());

export default router;
