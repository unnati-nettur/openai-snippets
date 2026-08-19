import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register a command that shows an info message when invoked
    let disposable = vscode.commands.registerCommand('openai-snippets-python.showInfo', () => {
        vscode.window.showInformationMessage(
            'OpenAI App Builder Snippets – Python is installed. Python code snippets for app building using OpenAI API are ready to use!'
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
