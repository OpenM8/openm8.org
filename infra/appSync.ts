import * as aws from '@pulumi/aws';
import fs from 'fs';
import { resolve } from 'path';
import { setupDBsource } from './source';

const schema = fs.readFileSync(resolve(__dirname, './schema/schema.graphql'), 'utf8');

if (!schema || typeof schema !== 'string' || schema.length === 0) {
    throw new Error('No schema found or schema is not a string');
}

const appSync = new aws.appsync.GraphQLApi('appSync', {
    authenticationType: 'AWS_IAM',
    schema,
});

setupDBsource(appSync.id);

export const appSyncID = appSync.id;
export const graphqlEndpoint = appSync.uris;