export const presentation_4 = {
    "holder": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"test-schema.org\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"attribute0\":\"value0\",\"attribute1\":\"value1\",\"attribute2\":\"value2\",\"attribute3\":\"value3\",\"id\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\"},\"issuanceDate\":\"2023-12-06T15:17:36.197Z\",\"issuer\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-12-06T15:17:36.197Z\",\"eip712\":{\"domain\":{\"chainId\":1,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"attribute0\",\"type\":\"string\"},{\"name\":\"attribute1\",\"type\":\"string\"},{\"name\":\"attribute2\",\"type\":\"string\"},{\"name\":\"attribute3\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0xd6334b9651791474ab03bd1316b44c0558c394655de826ca83b9a968a43fe100132a14c65b1adf868c3f429e8d610cedc93d4bbd5a374132d2a03cf315094fc01c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-12-06T15:19:28.653Z",
    "proof": {
        "verificationMethod": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-12-06T15:19:28.653Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0xa45a679642f23e07d3953c3fc944cfa5ae3d617dc62ccd1aaf47ea1080a7483c04e119dd53a71e3cd199d4b2fb00ceb82071f742e4797e2a7b2789cbdf84f0401c",
        "eip712": {
            "domain": {
                "chainId": 1,
                "name": "VerifiablePresentation",
                "version": "1"
            },
            "types": {
                "EIP712Domain": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "type": "string"
                    },
                    {
                        "name": "chainId",
                        "type": "uint256"
                    }
                ],
                "Proof": [
                    {
                        "name": "created",
                        "type": "string"
                    },
                    {
                        "name": "proofPurpose",
                        "type": "string"
                    },
                    {
                        "name": "type",
                        "type": "string"
                    },
                    {
                        "name": "verificationMethod",
                        "type": "string"
                    }
                ],
                "VerifiablePresentation": [
                    {
                        "name": "@context",
                        "type": "string[]"
                    },
                    {
                        "name": "holder",
                        "type": "string"
                    },
                    {
                        "name": "issuanceDate",
                        "type": "string"
                    },
                    {
                        "name": "proof",
                        "type": "Proof"
                    },
                    {
                        "name": "type",
                        "type": "string[]"
                    },
                    {
                        "name": "verifiableCredential",
                        "type": "string[]"
                    }
                ]
            },
            "primaryType": "VerifiablePresentation"
        }
    }
}