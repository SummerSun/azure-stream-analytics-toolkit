'use strict';
import * as vscode from "vscode";

export class Base {
    protected _outputChannel: vscode.OutputChannel;

    constructor(outputChannel: vscode.OutputChannel) {
        this._outputChannel = outputChannel;
    }

    protected output(message: string): void {
        this._outputChannel.append(message);
    }
    protected outputLine(message: string): void {
        this._outputChannel.appendLine(message);
    }
}