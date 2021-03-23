import Quill from "quill";
import { useEffect } from "react";
import QuillCursors from "quill-cursors";
// import Snow from "quill/themes/snow";
// import { start } from "./yjsHelper";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";

import { WebrtcProvider } from "y-webrtc";
import { useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
// import Toolbar from "quill/modules/toolbar";
// // import Snow from 'quill/themes/snow'; //snow works, but need to import and register formats, and replace icons...

// import Bold from "quill/formats/bold";
// import Italic from "quill/formats/italic";
// import Header from "quill/formats/header";
// import Underline from "quill/formats/underline";
// import Link from "quill/formats/link";
// import List, { ListItem } from "quill/formats/list";

// import Icons from "quill/ui/icons";

Quill.register("modules/cursors", QuillCursors);

export const Editor = (props) => {
  console.log(props);
  const user = useSelector(selectUser);

  useEffect(() => {
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
    // // A Yjs document holds the shared data
    const ydoc = new Y.Doc();
    // // Define a shared text type on the document
    const ytext = ydoc.getText("quill");

    const provider = new WebrtcProvider("quill-demo-room", ydoc);

    provider.awareness.setLocalStateField("user", {
      name: user.username,
      color: "red",
    });
    const binding = new QuillBinding(ytext, quill, provider.awareness);
    console.log(provider);
  });
  return <div id="editor" style={{ height: "700px" }}></div>;
};
