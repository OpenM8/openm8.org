import AWS from 'aws-sdk';
import { variables } from './variables';

AWS.config.update({ region: variables.region });

/**
 * Get all menu items from a DynamoDB table
 * Helper functions
 * @param params
 */

export const getMenuItems = async <T>(params: AWS.DynamoDB.DocumentClient.ScanInput): Promise<T[] | null> => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const result = await dynamoDB.scan(params).promise();
    let items: T[] = [];
    if (!result.Items) {
        return null;
    }
    items = [...result.Items] as T[];
    return items;
}

/**
 * Get a single menu item from a DynamoDB table
 * Helper functions
 * @param params
 */

export const getMenuItem = async <T>(params: AWS.DynamoDB.DocumentClient.GetItemInput): Promise<T | null> => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const result = await dynamoDB.get(params).promise();
    if (!result.Item) {
        return null;
    }
    return result.Item as T;
}

/**
* Get count from a query
* Helper functions
* @param params
*/

export const getCount = async (params: AWS.DynamoDB.DocumentClient.QueryInput): Promise<number> => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const result = await dynamoDB.query(params).promise();
    if (!result.Count) {
        return 0;
    }
    return result.Count;
}

export const client = {
    getMenuItems,
    getMenuItem,
    getCount,
};