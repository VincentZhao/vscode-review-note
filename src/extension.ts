import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('review-note.reviewNote', async () => {
		let editor = vscode.window.activeTextEditor;
		if (editor) {
			let selection = editor.selection;
			let folders= vscode.workspace.workspaceFolders
			if(folders) {
				let rootUri = folders[0].uri.path
				let fullUri = editor.document.uri.path
				let relativePath = fullUri.replace(rootUri + "/", "");
				let startLineNo = selection.start.line + 1
				let endLineNo = selection.end.line + 1
				let lineRange = selection.isSingleLine ? startLineNo : (startLineNo + "-" + endLineNo)
				let selectedContent = ""
				for (let i = startLineNo; i <= endLineNo; i++) {
						selectedContent += "> " + editor.document.lineAt(i - 1).text + "\n"
				}

				let reviewNote = `========================================
■${relativePath}
----------------------------------------
●L.${lineRange}
${selectedContent}

----------------------------------------
`
				await vscode.env.clipboard.writeText(reviewNote)
				vscode.window.setStatusBarMessage("Review Note has been set to the clipboard.", 1000)
			}
		}
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
