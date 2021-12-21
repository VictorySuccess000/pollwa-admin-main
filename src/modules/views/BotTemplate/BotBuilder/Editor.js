import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createLinkPlugin from "draft-js-anchor-plugin";
import Resizer from "react-image-file-resizer";
import {
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  getDefaultKeyBinding,
} from "draft-js";
import { ItalicButton, BoldButton, UnderlineButton } from "draft-js-buttons";
import "draft-js/dist/Draft.css";

import styled from "styled-components";
import "draft-js-static-toolbar-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-anchor-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";
import fileadd from "../../../../images/img/svgs/4-Create bot Action b/file-add-line.svg";
import createEmojiPlugin from "draft-js-emoji-plugin";
import { message } from "antd";

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const linkPlugin = createLinkPlugin();
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;
const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });
const emojiPlugin = createEmojiPlugin();
export default function MedzcoolEditor(props) {
  const ediFocus = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const plugins = [
    staticToolbarPlugin,
    imagePlugin,
    alignmentPlugin,
    linkPlugin,
    emojiPlugin,
  ];

  function myKeyBindingFn(e) {
    const blockType = RichUtils.getCurrentBlockType(editorState);
    if (e.key === "Backspace" && blockType === "atomic") {
      return "delete-me"; // name this whatever you want
    }
    return getDefaultKeyBinding(e);
  }
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (command === "delete-me") {
      return "handled";
    }

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  }

  function addImage() {
    let file;
    const virtualElement = document.createElement("input");

    virtualElement.setAttribute("type", "file");
    virtualElement.setAttribute("accept", "image/*");
    virtualElement.click();

    virtualElement.addEventListener("change", () => {
      file = virtualElement.files[0];
      const formData = new FormData();
      formData.append("media", file);
      console.log(file, "filefilefile");
      const data = JSON.parse(localStorage.getItem("token")) || "";

      const hide = message.loading("Scanning Image..", onclose);
      fetch(`https://pollwa-api.weesoft.store/uploadMediaAlt`, {
        method: "POST",
        headers: {
          authorization: data.token,
        },
        body: formData,
      })
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          message.success("Upload successful");
          hide();
          console.log(e);
          props.setMedia(props.index, e.mediaUrl, "image");
        })
        .catch((err) => {
          hide();
          message.error(err.message);
        });

      try {
        Resizer.imageFileResizer(
          file,
          100,
          100,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            file = uri;
            createImage(uri);
          },
          "base64",
          100,
          100
        );
      } catch (err) {
        console.log(err);
      }
    });
  }

  function createImage(src) {
    // src should be image data or an image URL
    const urlType = "IMAGE";
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      urlType,
      "IMMUTABLE",
      { src }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      " "
    );

    setEditorState(newEditorState);

    setTimeout(() => {
      editorScrollDown();
    }, 1000);
  }

  // const addBlank =()=>{
  //     addEmoji('  ')
  // }
  function giphyfunc() {
    props.giffunc();
  }
  function emofunc() {
    props.emojifunc();
  }
  function onChange(editorState) {
    setEditorState(editorState);
  }

  const editorScrollDown = () => {
    const entityKey = editorState.getCurrentContent().getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      " "
    );
    setEditorState(newEditorState);
    // moveSelectionToEnd(newState)
  };

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    // console.log(type);
    if (type === "unstyled") {
      return "default-block";
    }
  }

  function focusEditor() {
    ediFocus.current?.focus();
  }

  return (
    <>
      <EditorContainer onClick={focusEditor}>
        {!props.gifVisible ? (
          <Editor
            ref={ediFocus}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            plugins={plugins}
            editorClassName="editor-classs"
            blockStyleFn={myBlockStyleFn}
            className="editor"
          />
        ) : (
          <div style={{ height: "5rem" }}></div>
        )}
        <Toolbar>
          {(externalProps) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxHeight: "25px",
              }}
            >
              <div style={{ marginLeft: "0px", display: "flex" }}>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <div
                  className="draftJsToolbar__buttonWrapper__1Dmqh"
                  onClick={() => emofunc()}
                >
                  <button className="draftJsToolbar__button__qi1gf">
                    <i
                      className="far fa-smile"
                      style={{
                        width: "20px",
                        height: "24px",
                        marginTop: "7px",
                        fontSize: "12px",
                      }}
                    />
                  </button>
                </div>
                <div
                  className="draftJsToolbar__buttonWrapper__1Dmqh"
                  onClick={() => {
                    // setAddFile(true)
                    addImage();
                  }}
                >
                  <button className="draftJsToolbar__button__qi1gf">
                    <i
                      className="paperlip"
                      style={{
                        width: "20px",
                        backgroundColor: "transparent",
                        height: "24px",
                        marginTop: "7px",
                        fontSize: "12px",
                      }}
                    >
                      <img
                        src={fileadd}
                        alt=""
                        className="icon"
                        style={{ marginLeft: "4px" }}
                      />
                    </i>
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{ marginLeft: "20px" }}
                onClick={() => giphyfunc()}
              >
                <div
                  className="draftJsToolbar__button__qi1gf"
                  style={{
                    border: "1px solid black",
                    width: "8vw",
                    background: "black",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "0 0 10px 0",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "12px",
                      marginTop: "3px",
                    }}
                  >
                    <i className="fa fa-plus" style={{ marginRight: "5px" }} />
                    Add Sticker
                  </p>
                </div>
              </div>
            </div>
          )}
        </Toolbar>

        {/* <button onClick={addImage}>Add image</button> */}
        <AlignmentTool />
      </EditorContainer>
    </>
  );
}

MedzcoolEditor.propTypes = {
  exportEditorContent: PropTypes.func.isRequired,
};

const EditorContainer = styled.div`
            .DraftEditor-root {
                border: 1px solid lightgray;
            border-radius: 10px 10px 0 0;
            border-bottom:none;
            padding: 15px;
            // margin-bottom: 15px;
            figure {
                margin: 10px 0;
            img {
                max - width: 100%;
      }
    }
            .default-block {
                margin - bottom: 15px;
    }
  }
            `;
