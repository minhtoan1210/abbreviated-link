import http from "@/lib/http";
import { DemoListResType } from "@/schemaValidations/demo.schema";
const demoApiRequest = {
  demo: () => http.get<DemoListResType>("/products"),
};
export default demoApiRequest;
