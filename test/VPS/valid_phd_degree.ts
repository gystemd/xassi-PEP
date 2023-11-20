export const presentation = {
    "holder": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://api.npoint.io/92e56cd3a26b31bfcd14\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"degreeField\":\"Computer Science\",\"degreeLevel\":\"PhD\",\"id\":\"did:ethr:0x13881:0x5f572a3A7a950f7a3772652aF288F308FA8fc658\"},\"issuanceDate\":\"2023-11-20T10:43:59.931Z\",\"issuer\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-11-20T10:43:59.931Z\",\"eip712\":{\"domain\":{\"chainId\":80001,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"degreeField\",\"type\":\"string\"},{\"name\":\"degreeLevel\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x0ea78ab95737994c1a31770567817ef03d0610cc4193685afedc573782997fe0495dca03e6ffe2bf4288e38b9515ae41163945c56f01a79be85f5c4096a0421d1c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-11-20T14:18:26.872Z",
    "proof": {
        "verificationMethod": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-11-20T14:18:26.872Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0x760bc55420f73d378a4f716997506ecf72304efd77ca0a06169a51f5675d733b2a135c35c1bca1635f13f277e6e03eb66c9ea715446d67581936745b664997aa1c",
        "eip712": {
            "domain": {
                "chainId": 80001,
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
};