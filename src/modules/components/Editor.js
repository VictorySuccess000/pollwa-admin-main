import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// import VideoButton from "./VideoButton";

import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createToolbarPlugin, { Separator } from "draft-js-static-toolbar-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createLinkPlugin from "draft-js-anchor-plugin";
import Resizer from 'react-image-file-resizer'
// import axios from "../../api/axios";
// import createVideoPlugin from "draft-js-video-plugin";
// import createLinkifyPlugin from "draft-js-linkify-plugin";

import Immutable from "immutable";

import {
    convertFromRaw,
    convertToRaw,
    EditorState,
    RichUtils,
    AtomicBlockUtils,
    getDefaultKeyBinding,
    DefaultDraftBlockRenderMap,
    Modifier,
    SelectionState,
    ContentState,
    EditorBlock,
} from "draft-js";
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
} from "draft-js-buttons";
import "draft-js/dist/Draft.css";

import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import "draft-js-static-toolbar-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-anchor-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";
// import { Button } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileadd from "../../images/img/svgs/4-Create bot Action b/file-add-line.svg";
import createEmojiPlugin from "draft-js-emoji-plugin";
// import EmojiPicker from "emoji-picker-react";
// import { prop } from "dom7";
// import Modal from "antd/lib/modal/Modal";
// import { setIn } from "formik";
// import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
// import "draft-js-video-plugin/lib/plugin.css";
// import "draft-js-linkify-plugin/lib/plugin.css";

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const linkPlugin = createLinkPlugin();
// const linkifyPlugin = createLinkifyPlugin();
// const videoPlugin = createVideoPlugin();
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;
const decorator = composeDecorators(
    alignmentPlugin.decorator,
    focusPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;


export default function MedzcoolEditor(props) {
    const { content, exportEditorContent, user, giffunc, emojifunc, selectedEmoji } = props;

    // useEffect(()=>{
    //     setDefaultEditorContent(props.question)
        
    // },[])

    

    const [userId, setUserId] = useState();

    const ediFocus = useRef()
    const ediFocus2 = useRef()
    useEffect(() => {
        if (user) {
            setUserId(user.id);
        } else {
            setUserId(null);
        }
    }, [user]);

    useEffect(()=>{
        createImage(props.selectedGifUrl)
        // EditorState.moveSelectionToEnd(editorState)
    }, [props.selectedGifUrl])

    useEffect(()=>{
        addEmoji(props.selectedEmoji)
    }, [props.selectedEmoji])

    useEffect(()=>{
        setDefaultEditorContent(props.question)
        
    },[props.index])

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

  

    const setDefaultEditorContent = (text) => {
        const contentState = ContentState.createFromText(text);
        const editorStat = EditorState.push(editorState, contentState);
        setEditorState(editorStat)
    }

    const[addFile, setAddFile] = useState(false)

    const plugins = [
        staticToolbarPlugin,
        imagePlugin,
        // focusPlugin,
        alignmentPlugin,
        linkPlugin,
        emojiPlugin,
        // videoPlugin,
        // linkifyPlugin,
    ];

    function myKeyBindingFn(e) {
        const blockType = RichUtils.getCurrentBlockType(editorState);
        if (e.key === "Backspace" && blockType == "atomic") {
            return "delete-me"; // name this whatever you want
        }
        return getDefaultKeyBinding(e);
    }
    const moveSelectionToEnd = (editorState) => {
        const content = editorState.getCurrentContent();
        const blockMap = content.getBlockMap();
      
        const key = blockMap.last().getKey();
        const length = blockMap.last().getLength();
      
        // On Chrome and Safari, calling focus on contenteditable focuses the
        // cursor at the first character. This is something you don't expect when
        // you're clicking on an input element but not directly on a character.
        // Put the cursor back where it was before the blur.
        const selection = new SelectionState({
          anchorKey: key,
          anchorOffset: length,
          focusKey: key,
          focusOffset: length,
        });
        const newState = EditorState.forceSelection(editorState, selection);
        setEditorState(newState)
      };

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
        const imgTypes = /image\//;
        const virtualElement = document.createElement("input");

        virtualElement.setAttribute("type", "file");
        virtualElement.setAttribute("accept", "image/*");
        virtualElement.click();

        

        // user opened (selected) files on the popup----proceed further to handle it / upload
        virtualElement.addEventListener("change", () => {
            file = virtualElement.files[0];
            const formData = new FormData()
            formData.append('media', file)
            console.log(file,'filefilefile')
            const data = JSON.parse(localStorage.getItem('token')) || '';

            
            const hide = message.loading("Scanning Image..", onclose);
            fetch(`https://pollwa-api.weesoft.store/uploadMediaAlt`, {
                method: 'POST',
                headers: {
                    authorization: data.token,
                },
                body: formData
            }).then(e=>{
                return e.json()
            }).then(e=>{
                message.success('Upload successful')
                hide()
                console.log(e)
                props.setMedia(props.index, e.mediaUrl, 'image')
            }).catch(err=>{
                hide()
                message.error(err.message)
            })


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
                    file=uri;
                    createImage(uri)
                    
                  },
                  "base64",
                  100,
                  100
                );
              } catch (err) {
                console.log(err);
              }
            // const fileReader = new FileReader();

            // if (file.size > 8388608) {
            //     console.log("FILE TOO BIG");
            //     alert("This file is too large");
            //     return null;
            // }

            // fileReader.onerror = (e) => {
            //     console.log(
            //         `Unable to proceed with the file requested. Error: ${e.detail}`
            //     );
            // };

            // // user submits an image successfully
            // fileReader.onload = (e) => {
            //     console.log(e)
            //     if (imgTypes.test(file.type)) {
            //         // console.log("success", fileReader.result);

            //         // fetch(`https://pollwa-api.weesoft.store/uploadMediaAlt`, {
            //         //     method: 'POST',
            //         //     headers: {
            //         //         authorization: data.token,
            //         //     },
            //         //     body: JSON.stringify({
            //         //         media: fileReader.result
            //         //     })
            //         // }).then(e=>{
            //         //     return e.json()
            //         // }).then(e=>{
            //         //     console.log(e)
            //         // })

            //         // axios.post(`/uploadMediaAlt`, 
                            
                        
            //         //         {
            //         //             media: fileReader.result
            //         //         },
            //         //         {
            //         //             'Authorization': data.token
            //         //         },

            //         //     )
            //         //     .then((response) => {
            //         //         console.log(response,'imafge response')
            //         //     })
            //         //     .catch((err) => {
            //         //         console.log(err)
            //         //         // message.error("Chatbot loading failed!");
            //         //     });

            //         // fetch(`https://api.medzcool.com/image/upload/`, {
            //         //     method: "post",
            //         //     headers: {
            //         //         "Content-type": "application/json",
            //         //     },
            //         //     body: JSON.stringify({
            //         //         photo: fileReader.result,
            //         //         filename: file.name,
            //         //         fileType: file.type,
            //         //         userId: userId,
            //         //     }),
            //         // })
            //         //     .then((response) => {
            //         //         // console.log(response);
            //         //         return response.json();
            //         //     })
            //         //     .then((result) => {
            //         //         if (result.error) {
            //         //             console.log(result.error);
            //         //             throw result;
            //         //         }
            //         //         console.log(result);
            //         //         // createImage(result.imageURL);
            //         //         props.setMedia(props.index, result.imageURL, 'image')
            //         //         return result;
            //         //     });
            //     } else {
            //         // can handle some modal/popup/tooltip alerting user of wrong file type
            //         console.error("The file type requested is not an image type!");
            //         return false;
            //     }
            // };
            // finally, begin loading the image and fire the event handlers
            // fileReader.readAsDataURL(file);
        });
    }

    function createImage(src) {
        // src should be image data or an image URL
        const urlType = "IMAGE";
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            urlType,
            "IMMUTABLE",
            {src}
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
            editorState,
            entityKey,
            " "
        );
        

        
        setEditorState(newEditorState);
        
        
        setTimeout(() => {
            editorScrollDown()
        }, 1000);
        

    }

    const addBlank =()=>{
        addEmoji('  ')
    }
    function giphyfunc() {
        props.giffunc();
    }
    function emofunc() {
        props.emojifunc();
    }
    function onChange(editorState) {
        setEditorState(editorState);
        const contentState = editorState.getCurrentContent()
        const jsonContent = JSON.stringify(convertToRaw(contentState));
        

        const planeText = convertToRaw(contentState).blocks[0].text
        
        // exportEditorContent(jsonContent);
        // console.log(jsonContent);
        props.setNodeQuestion(props.index, planeText)
        // EditorState.moveSelectionToEnd(editorState)
        // console.log(jsonContent);
    }

    const addEmoji = (emoji)=> {
        const contentState = editorState.getCurrentContent();
        const selection = editorState.getSelection()
        contentState.addEntity('ashraf')
        const contentStateWithEntity = contentState.createEntity(
            'MENTION',
            "IMMUTABLE",
            {"text":'apple',"value":'apple',"url":'apple'}
        )
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = Modifier.insertText(
            contentState,
            selection,
            emoji,
            null,
            entityKey,
        );

        const final = EditorState.push(editorState, newEditorState)
        // const c=final.getCurrentContent()
        
      
        // EditorState.moveSelectionToEnd(editorState)
        //     EditorState.moveFocusToEnd(editorState)
        //     EditorState.forceSelection(editorState, editorState.getCurrentContent().getSelectionAfter())
        
            
        setEditorState(final);
        // setEditorState(mover);

        // addBlank()
        
    }

    const editorScrollDown = () => {
        const entityKey = editorState.getCurrentContent().getLastCreatedEntityKey()
        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
            editorState,
            entityKey,
            " "
        );
        setEditorState(newEditorState)
        // moveSelectionToEnd(newState)
    }

    const blockRenderMap = Immutable.Map({
        unstyled: {
            element: "section",
        },
    });

    // Include 'paragraph' as a valid block and updated the unstyled element but
    // keep support for other draft default block types
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(
        blockRenderMap
    );

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

            {/* <button onClick={()=> setEditorContent('ashraf')}>gggg</button> */}
            
            <EditorContainer onClick={focusEditor}>
                {
                    !props.gifVisible?
                    <Editor
                        ref={ediFocus}
                        editorState={editorState}
                        onChange={onChange}
                        handleKeyCommand={handleKeyCommand}
                        keyBindingFn={myKeyBindingFn}
                        plugins={plugins}
                        // blockRenderMap={extendedBlockRenderMap}
                        editorClassName="editor-classs"
                        blockStyleFn={myBlockStyleFn}
                        
                        // ref={ediFocus}
                        
                        className="editor"
                        // defaultBlockRenderMap={'some text'}
                    />:<div style={{height:'5rem'}}></div>
                }
                <EmojiSuggestions />
                {/* <EmojiSelect /> */}
                <Toolbar>
                    {(externalProps) => (
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", maxHeight: "25px" }}>
                            <div style={{ marginLeft: "0px",display: "flex" }}>
                                <BoldButton {...externalProps} />
                                <ItalicButton {...externalProps} />
                                <UnderlineButton {...externalProps} />
                                <div className="draftJsToolbar__buttonWrapper__1Dmqh" onClick={() => emofunc()}>
                                    <button className="draftJsToolbar__button__qi1gf">
                                    <FontAwesomeIcon icon={["far", "smile"]} className="far fa-smile" style={{ width: "20px", height: "24px", marginTop: "7px", fontSize: "12px" }} />
                                        {/* <i className="far fa-smile" style={{ width: "20px", height: "24px", marginTop: "7px", fontSize: "12px" }} /> */}
                                    </button>
                                </div>
                                <div className="draftJsToolbar__buttonWrapper__1Dmqh" onClick={() => {
                                    // setAddFile(true)
                                    addImage()
                                    }}>
                                    <button className="draftJsToolbar__button__qi1gf">
                                        <i className="paperlip" style={{ width: "20px", backgroundColor: 'transparent', height: "24px", marginTop: "7px", fontSize: "12px" }}>
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
                            <div className="" style={{ marginLeft: "20px" }} onClick={() => giphyfunc()}>
                                <div className="draftJsToolbar__button__qi1gf" style={{
                                    border: "1px solid black", width: "8vw", background: "black", cursor: "pointer",
                                    display: "flex", justifyContent: "center", borderRadius: "0 0 10px 0"
                                }}>
                                    <p style={{ color: "white", fontSize: "12px", marginTop: "3px" }}><i className="fa fa-plus" style={{ marginRight: "5px" }} />Add Sticker</p>
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
const ImageButton = styled.button`
            background: #fbfbfb;
            color: #888;
            font-size: 8px;
            border: 0;
            padding-top: 5px;
            vertical-align: bottom;
            height: 34px;
            width: 36px;
            outline: 0;
            &:hover {
                background: black;
            outline: 0;
  }
            `;