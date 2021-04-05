import Quill from "quill";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import QuillCursors from "quill-cursors";

import { WebrtcProvider } from "y-webrtc";

Quill.register("modules/cursors", QuillCursors);

export function quillClient(id, user, text) {
  let quill = new Quill("#editor", {
    modules: {
      cursors: true,
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["image", "code-block"],
      ],
    },
    placeholder: "Compose an epic...",
    theme: "snow", // or 'bubble'
  });
  // A Yjs document holds the shared data
  const ydoc = new Y.Doc();
  // Define a shared text type on the document
  const ytext = ydoc.getText("quill");

  // Create an editor-binding which
  // "binds" the quill editor to a Y.Text type.

  const provider = new WebrtcProvider(id, ydoc);
  provider.awareness.setLocalStateField("user", {
    name: user.username,
    color: "red",
  });
  const binding = new QuillBinding(ytext, quill, provider.awareness);
  quill.setText("dsfgsdgsdgsgdsgdsfvdg");
  return provider;
}
