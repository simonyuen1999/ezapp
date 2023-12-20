import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    console.log("health lambda executed", event);
    
    return {
        body: "OK: return from Lambda health thr Api Gateway",
        statusCode: 200
    }
}
