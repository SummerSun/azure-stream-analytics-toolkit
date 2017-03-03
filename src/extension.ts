'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {StreamAnalytics} from './streamAnalytics';

export function activate(context: vscode.ExtensionContext) {
    let streamAnalytics = new StreamAnalytics(context);

    let jobs = vscode.commands.registerCommand('streamanalytics.jobs', () => {
        streamAnalytics.retrieveJobs();
    });
    let startJobs = vscode.commands.registerCommand('streamanalytics.jobs.start', ()=>{
        streamAnalytics.startJobs();
    });
    let monitorJobs = vscode.commands.registerCommand('streamanalytics.jobs.monitor', ()=>{
        streamAnalytics.monitorJobs();
    });
    let stopJobs = vscode.commands.registerCommand('streamanalytics.jobs.stop', ()=>{
        streamAnalytics.stopJobs();
    });
    let deleteJobs = vscode.commands.registerCommand('streamanalytics.jobs.delete', ()=>{
        streamAnalytics.deleteJobs();
    });

    context.subscriptions.push(jobs);
    context.subscriptions.push(startJobs);
    context.subscriptions.push(monitorJobs);
    context.subscriptions.push(stopJobs);
    context.subscriptions.push(deleteJobs);
}

// this method is called when your extension is deactivated
export function deactivate() {
}