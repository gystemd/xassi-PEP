export const presentation_8= {
    "holder": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"test-schema.org\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"attribute0\":\"value0\",\"attribute1\":\"value1\",\"attribute2\":\"value2\",\"attribute3\":\"value3\",\"attribute4\":\"value4\",\"attribute5\":\"value5\",\"attribute6\":\"value6\",\"attribute7\":\"value7\",\"id\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\"},\"issuanceDate\":\"2023-12-06T15:20:47.843Z\",\"issuer\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-12-06T15:20:47.843Z\",\"eip712\":{\"domain\":{\"chainId\":1,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"attribute0\",\"type\":\"string\"},{\"name\":\"attribute1\",\"type\":\"string\"},{\"name\":\"attribute2\",\"type\":\"string\"},{\"name\":\"attribute3\",\"type\":\"string\"},{\"name\":\"attribute4\",\"type\":\"string\"},{\"name\":\"attribute5\",\"type\":\"string\"},{\"name\":\"attribute6\",\"type\":\"string\"},{\"name\":\"attribute7\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x9db518901535a97af2299874f4d0c39f58cc693597c99d19fbd8939347e6a07018d5880a55c207473a92a2200501653da0ec85b88475e7a1a819b642f959d5f41b\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-12-06T15:21:23.225Z",
    "proof": {
        "verificationMethod": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-12-06T15:21:23.225Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0x70cbd10d205ca58ecac56e76195c60c462f751d55cc0ec10efa0d55f97952bbb5c031eff13d009725d3eed5c87daec333734b54f21c14e424a3b9d01a913e34a1b",
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