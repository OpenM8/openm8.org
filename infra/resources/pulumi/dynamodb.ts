import * as aws from "@pulumi/aws";
import { variables } from '../pulumi/variables';

/**
 * Creates a DynamoDB table with the given properties.
 */

const db = new aws.dynamodb.Table("users", {
    attributes: [{name: "id", type: "S"}],
    hashKey: "id",
    readCapacity: 1,
    writeCapacity: 1,
});

/**
 * Set table variables
 */
variables.dynamoDBTables['user-table'] = db.name;

export const dynamoID = db.id;
