#!/bin/bash

# Check if AWS CLI is installed
if ! command -v aws &>/dev/null; then
    echo "AWS CLI is not installed. Please install it and try again."
    exit 1
fi

# Set your desired AWS profile
AWS_PROFILE="vam-personal"

# Set your Serverless stage and region
STAGE="prerelease"
REGION="ap-south-1"

# Export AWS_PROFILE and AWS_REGION environment variables
export AWS_PROFILE=${AWS_PROFILE}
export AWS_REGION=${REGION}

# Run serverless deploy command
echo "Deploying the service using Serverless Framework..."
serverless deploy --stage ${STAGE} --region ${REGION}

# Unset environment variables
unset AWS_PROFILE
unset AWS_REGION

echo "Deployment completed."
