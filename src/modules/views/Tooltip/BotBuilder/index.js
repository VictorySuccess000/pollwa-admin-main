import React, { useState } from "react";
import BotHero from "../botHero";
import Edi from "./Editor";
import { useHistory } from "react-router-dom";
import Picker from "emoji-picker-react";
import ReactGiphySearchbox from "react-giphy-searchbox";
// import { ReactComponent as DTrash } from "../../../../images/icons/dtrash.svg";

import Modal from "react-modal";
import "./style.css";

const BotBuilder = () => {
  const [gifVisible, setGifVisible] = useState(false);
  const [selectedGifUrl, setSelectedGifUrl] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [emojivisible, setEmojiVisible] = useState(false);

  const history = useHistory();

  function saveNdProceed() {
    history.push("/emailing-system/view");
  }

  // const showModal = (index, i, value) => {
  //   // this.setState({ visible: true, btnname: value, index, i });
  //   setVisible(true);
  //   setBtnname(value);
  // };
  // const cancelModal = () => {
  //   setVisible(false);
  // };

  const emojiShow = () => {
    setEmojiVisible(!emojivisible);
    setGifVisible(false);
  };

  const Gifdivshow = () => {
    setGifVisible(!gifVisible);
    setEmojiVisible(false);
  };

  return (
    <>
      <div className="h-8"></div>
      <BotHero />
      <div className="mx-32 mt-12 bg-white rounded-xl pb-24 mb-12 ">
        <div className="bg-mountainmist-800 w-full rounded-lg h-16 pt-4 pl-8">
          <p className="text-xl font-normal">Bot Template Builder </p>
        </div>
        <div className=" p-4">
          <input
            className="w-full py-4 border-1 rounded-xl mb-8 px-4"
            placeholder="Tooltip name"
          />

          <div className="w-4/4">
            <div className="">
              <Edi
                giffunc={Gifdivshow}
                gifVisible={gifVisible}
                selectedGifUrl={selectedGifUrl}
                selectedEmoji={selectedEmoji}
                emojifunc={emojiShow}
              />
              {emojivisible && (
                <div
                  style={{
                    position: "absolute",
                    top: -220,
                    left: 0,
                    zIndex: "10",
                  }}
                  className="searchboxWrapper"
                >
                  <Picker
                    disableSearchBar={true}
                    onEmojiClick={(e, i) => {
                      setSelectedEmoji(i.emoji);
                      setEmojiVisible(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="mt-8">
              <div className="float-left">
                <button
                  className="bg-cerise-500 px-12 text-white py-4 rounded-xl"
                  onClick={() => saveNdProceed()}
                >
                  Create Tooltip
                </button>
              </div>
            </div>
          </div>
        </div>
        {gifVisible && (
          <div
            className="absolute"
            style={{ zIndex: "-1", top: "0", left: "50%" }}
          >
            <Modal
              isOpen={gifVisible}
              onRequestClose={Gifdivshow}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
              ariaHideApp={false}
            >
              <div className="searchboxWrapper" style={{ float: "right" }}>
                <ReactGiphySearchbox
                  apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                  onSelect={(item) =>
                    setSelectedGif(item.images.preview_gif.url)
                  }
                  masonryConfig={[
                    { columns: 2, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 },
                  ]}
                />
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
                  onClick={() => {
                    setGifVisible(false);
                    setSelectedGifUrl(selectedGif);
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
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default BotBuilder;
