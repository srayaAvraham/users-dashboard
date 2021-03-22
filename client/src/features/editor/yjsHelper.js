import * as Y from "yjs";
import { QuillBinding } from "y-quill";

import { WebrtcProvider } from "y-webrtc";

// A Yjs document holds the shared data
const ydoc = new Y.Doc();
// Define a shared text type on the document
const ytext = ydoc.getText("quill");

// Create an editor-binding which
// "binds" the quill editor to a Y.Text type.
//const binding = new QuillBinding(quill, ytext)

//const provider = new WebrtcProvider('quill-demo-room', ydoc)

// export const start = (quill) => {
const binding = new QuillBinding(quill, ytext);

const provider = new WebrtcProvider("quill-demo-room", ydoc);
// };
