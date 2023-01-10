import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import { handler } from './handler';
import { baseRole, appSyncRole } from './iam';

export const setupDBsource = (appSyncID: pulumi.Input<string>) => {
    /*
    * Create a new Lambda function
    */

    const menuItemResolver = new aws.lambda.CallbackFunction('get-menu-items-fn', {
        runtime: "nodejs18.x",
        callback: handler,
        role: baseRole,
    });

    /*
    * Create a new data source
    */

    const dataSource = new aws.appsync.DataSource('get-menu-items-ds', {
        apiId: appSyncID,
        name: 'getMenuItemsDs',
        type: 'AWS_LAMBDA',
        serviceRoleArn: appSyncRole.arn,
        lambdaConfig: {
            functionArn: menuItemResolver.arn,
        },
    });

    /*
    * Create a new resolver
    */

    const resolver = new aws.appsync.Resolver('get-menu-items-resolver', {
        apiId: appSyncID,
        type: 'Query',
        field: 'getMenuItems',
        dataSource: dataSource.name,
        requestTemplate: `{
            "version": "2017-02-28",
            "operation": "Invoke",
            "payload": $util.toJson($context)
        }`,
        responseTemplate: `$util.toJson($ctx.result)`,
    });
};