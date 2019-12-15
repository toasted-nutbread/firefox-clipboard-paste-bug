Example demonstrating a potential Firefox bug where `document.execCommand('paste')`
doesn't work correctly when running as a web extension background page.

The extension using the `ext1` folder does not work and logs an empty string.
The extension using the `ext2` folder works and logs the text currently in the clipboard.
The only difference is that `ext2` uses an incorrectly terminated `<div>` tag.

Both pages work when they are not being run as the background page,
i.e. open `moz-extension://.../bg.html` manually.
