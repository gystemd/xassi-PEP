import { Application, Request, Response } from "express";
import axios from 'axios'
import { IVerifyPresentationEIP712Args } from "@veramo/credential-eip712";
import { agent } from '../veramo/setup.js';

type attributesList = Record<string, Record<string, { attribute: string, dataType: string, value: string }[]>>;
type resourcesList = Record<string, attributesList>;

const resources: resourcesList =
{
    "research-paper-computer-science": {
        "https://www.npoint.io/docs/b7e2e485241a04f89fdc":
        {
            "#0": [
                {
                    attribute: "credentialSubject.degreeLevel",
                    dataType: "http://www.w3.org/2001/XMLSchema#string",
                    value: "PhD"
                },
                {
                    attribute: "credentialSubject.degreeField",
                    dataType: "http://www.w3.org/2001/XMLSchema#string",
                    value: "Computer Science"
                }
            ]
        }
    }
};


function buildRequest(resource: string, vp: any) {
    const attributes: attributesList = resources[resource];
    console.log(attributes);
    let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
        + `CombinedDecision="false" `
        + `ReturnPolicyIdList="true">`
        + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
        + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
        + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
        + `</Attribute>`
        + `</Attributes>`

    Object.keys(attributes).forEach((categoryKey) => {

        request += `<Attributes Category="` + categoryKey + `">`;
        const category = attributes[categoryKey];
        const keys = Object.keys(category);
        Object.keys(category).forEach((credentialKey) => {

            const credential = category[credentialKey];
            credential.forEach((attributeEntry) => {

                const path = attributeEntry.attribute.split(".");
                const vc = JSON.parse(vp.verifiableCredential[parseInt(credentialKey.replace("#", ""))]);
                let value = vc;
                path.forEach((key: string) => {
                    value = value[key];
                });
                request += `<Attribute AttributeId="` + credentialKey + "." + attributeEntry.attribute
                    + `" IncludeInResult="true" `
                    + `Issuer="` + vc.issuer + `" `
                    + `>`
                    + `<AttributeValue `
                    + `DataType="` + attributeEntry.dataType + `"`
                    + `>`
                    + value + `</AttributeValue>`
                    + `</Attribute>`
            });

        });
        request += `</Attributes>`
    });

    request += `</Request>`;
    return request;
}

export const loadApiEndpoints = (app: Application): void => {
    app.post("/send", async (req: Request, res: Response) => {

        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const resource: string = req.body.resource;
        const args: IVerifyPresentationEIP712Args = {
            presentation: vp
        }

        const result = await agent.verifyPresentation(args);
        if (!result.verified) {
            return res.status(400).send("Invalid VP");
        }

        const request = buildRequest(resource, vp);
        console.log(request);
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });

        return res.status(200).send({ message: "VP verified", authorized: response.data });
    });

};
