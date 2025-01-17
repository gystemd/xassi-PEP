
import axios from 'axios'

describe("test access to 4 attributes resource", () => {
    it("should return 200", async () => {
        let resource = "resource4c";
        let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
            + `CombinedDecision="false" `
            + `ReturnPolicyIdList="true">`
            + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="false">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + "1" + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`;
        request += `</Request>`;
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });
        expect(response.data).toBe(true);
    });
});

describe("test access to 8 attributes resource", () => {
    it("should return 200", async () => {
        let resource = "resource8c";
        let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
            + `CombinedDecision="false" `
            + `ReturnPolicyIdList="true">`
            + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="false">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + "1" + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`;
        request += `</Request>`;
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });
        expect(response.data).toBe(true);
    });
});

describe("test access to 16 attributes resource", () => {
    it("should return 200", async () => {
        let resource = "resource16c";
        let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
            + `CombinedDecision="false" `
            + `ReturnPolicyIdList="true">`
            + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="false">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + "1" + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`;
        request += `</Request>`;
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });
        expect(response.data).toBe(true);
    });

});

// describe("test access to 32 attributes resource", () => {
//     it("should return 200", async () => {
//         let resource = "resource32c";
//         let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
//             + `CombinedDecision="false" `
//             + `ReturnPolicyIdList="true">`
//             + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
//             + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="false">`
//             + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + "1" + `</AttributeValue>`
//             + `</Attribute>`
//             + `</Attributes>`
//             + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
//             + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
//             + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
//             + `</Attribute>`
//             + `</Attributes>`;
//         request += `</Request>`;
//         const response = await axios.post('http://localhost:8080/evaluate', request, {
//             headers: { 'Content-Type': 'application/json' }
//         });
//         expect(response.data).toBe(true);
//     });
// });

// describe("test access to 64 attributes resource", () => {
//     it("should return 200", async () => {
//         let resource = "resource64c";
//         let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
//             + `CombinedDecision="false" `
//             + `ReturnPolicyIdList="true">`
//             + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
//             + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="false">`
//             + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + "1" + `</AttributeValue>`
//             + `</Attribute>`
//             + `</Attributes>`
//             + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
//             + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
//             + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
//             + `</Attribute>`
//             + `</Attributes>`;
//         request += `</Request>`;
//         const response = await axios.post('http://localhost:8080/evaluate', request, {
//             headers: { 'Content-Type': 'application/json' }
//         });
//         expect(response.data).toBe(true);
//     });
// });





