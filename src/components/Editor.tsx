"use client"; // this registers <Editor> as a Client Component
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";
import "@blocknote/core/style.css";

const doc = new Y.Doc();
const provider = new YPartyKitProvider(
  "blocknote-dev.yousefed.partykit.dev",
  // use a unique name as a "room" for your application:
  "block-party-revolution",
  doc
);

// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    collaboration: {
      // The Yjs Provider responsible for transporting updates:
      provider,
      // Where to store BlockNote data in the Y.Doc:
      fragment: doc.getXmlFragment("document-store"),
      // Information (name and color) for this user:
      user: {
        name: "My Username",
        color: "#ff0000",
      },
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}