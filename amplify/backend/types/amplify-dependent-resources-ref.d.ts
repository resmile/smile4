export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "superadminGroupRole": "string",
            "adminGroupRole": "string",
            "sellerGroupRole": "string",
            "buyerGroupRole": "string"
        },
        "smile": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "function": {
        "smilePostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        },
        "smilePreAuthentication": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "storage": {
        "bizLic": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}