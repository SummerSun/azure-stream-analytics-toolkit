'use strict';
import * as vscode from "vscode";
import { Base } from './base';
let request = require('request');

export class StreamAnalytics extends Base {
    private _client;
    constructor (context: vscode.ExtensionContext) {
        let outputChannel = vscode.window.createOutputChannel('Azure Stream Analytics ToolKit');
        super(outputChannel);
    }

    public retrieveJobs() {
        let subscriptionId = '635ef93c-1741-4d0e-a502-b62218102f51';
       var options = {
           url: `https://management.azure.com/subscriptions/${subscriptionId}/providers/Microsoft.StreamAnalytics/streamingjobs?api-version=2015-10-01`,
           headers: {
               'Authorization':''
            }
       };
       request.get(options, (error, response, body) => {
           if (!error && response.statusCode == 200) {
               this._outputChannel.show();
               var info = JSON.parse(body);
               this.output('response:' + info);
           }
       });
    }
    public startJobs() {

    }
    public monitorJobs() {

    }
    public stopJobs() {

    }
    public deleteJobs() {

    }

    private sendRequest(url: string) {

    }
}