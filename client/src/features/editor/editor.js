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

import { quillClient } from "./yjsHelper";

Quill.register("modules/cursors", QuillCursors);

export const Editor = ({ match }) => {
  // console.log(props);
  const user = useSelector(selectUser);

  useEffect(() => {
    let room = quillClient(match.params.id, user, "dsf");
    console.log(room);
  });
  return <div id="editor" style={{ height: "700px" }}></div>;
};
