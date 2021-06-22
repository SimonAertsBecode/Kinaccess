import { router } from "../controllers/routerFunction/routerLogic.js";
import * as zoneInstance from "../controllers/objectInstance/zoneInstance.js";
import { routerLogic } from "../controllers/routerFunction/routerLogic.js";

routerLogic(zoneInstance.neck.zone, zoneInstance.neck.proprioceptionRender());
routerLogic(zoneInstance.shoulder.zone, zoneInstance.shoulder.proprioceptionRender());
routerLogic(zoneInstance.elbow.zone, zoneInstance.elbow.proprioceptionRender()); 
routerLogic(zoneInstance.wrist.zone, zoneInstance.wrist.proprioceptionRender()); 
routerLogic(zoneInstance.rachis.zone, zoneInstance.rachis.proprioceptionRender()); 
routerLogic(zoneInstance.basin.zone, zoneInstance.basin.proprioceptionRender()); 
routerLogic(zoneInstance.knee.zone, zoneInstance.knee.proprioceptionRender()); 
routerLogic(zoneInstance.ankle.zone, zoneInstance.ankle.proprioceptionRender());

export default router;