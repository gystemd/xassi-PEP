export const presentation_16 = {
    "holder": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"test-schema.org\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"attribute0\":\"value0\",\"attribute1\":\"value1\",\"attribute10\":\"value10\",\"attribute11\":\"value11\",\"attribute12\":\"value12\",\"attribute13\":\"value13\",\"attribute14\":\"value14\",\"attribute15\":\"value15\",\"attribute2\":\"value2\",\"attribute3\":\"value3\",\"attribute4\":\"value4\",\"attribute5\":\"value5\",\"attribute6\":\"value6\",\"attribute7\":\"value7\",\"attribute8\":\"value8\",\"attribute9\":\"value9\",\"id\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\"},\"issuanceDate\":\"2023-12-06T15:22:38.398Z\",\"issuer\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-12-06T15:22:38.398Z\",\"eip712\":{\"domain\":{\"chainId\":1,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"attribute0\",\"type\":\"string\"},{\"name\":\"attribute1\",\"type\":\"string\"},{\"name\":\"attribute10\",\"type\":\"string\"},{\"name\":\"attribute11\",\"type\":\"string\"},{\"name\":\"attribute12\",\"type\":\"string\"},{\"name\":\"attribute13\",\"type\":\"string\"},{\"name\":\"attribute14\",\"type\":\"string\"},{\"name\":\"attribute15\",\"type\":\"string\"},{\"name\":\"attribute2\",\"type\":\"string\"},{\"name\":\"attribute3\",\"type\":\"string\"},{\"name\":\"attribute4\",\"type\":\"string\"},{\"name\":\"attribute5\",\"type\":\"string\"},{\"name\":\"attribute6\",\"type\":\"string\"},{\"name\":\"attribute7\",\"type\":\"string\"},{\"name\":\"attribute8\",\"type\":\"string\"},{\"name\":\"attribute9\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x2ca95265bf62b11b6cda0f66fece6f8f6f8ca0e0d7b9ff4b72db16ce403da5252855bff57963b8fd7193095be6a86c605036334999fc814a30456776d95503da1c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-12-06T15:23:22.129Z",
    "proof": {
        "verificationMethod": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-12-06T15:23:22.129Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0x11fd5fc465ebea738eb4da0c0c68abf73d1ffd06a82b0b75250c38aa0e2dd7fc48ad06b56667804a141d46d05fa7fe778ecb489ab395e7a139e5dba955d03f241c",
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