import * as aws from '@pulumi/aws';
import { variables } from './variables';

const db = new aws.dynamodb.Table('menu-items-table', {
    attributes: [
        {
            name: 'id',
            type: 'S',
        },
    ],
    hashKey: 'id',
    readCapacity: 1,
    writeCapacity: 1,
});


/**
 * Set table variables
 */
variables.dynamoDBTables['menu-items-table'] = db.name;

export const dynamoID = db.id;
