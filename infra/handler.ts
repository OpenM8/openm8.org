import AWS from 'aws-sdk';
import * as aws from '@pulumi/aws';
import { variables } from './variables';
import { createCallbackResponse } from './utils/response';

export const handler: aws.lambda.Callback<any, unknown> = async (event, context, callback) => {
    console.log('event', JSON.stringify(event, null, 2));
    const response = createCallbackResponse(callback);
};