import React, {useState} from "react";
import BotHero from "../BotTemplate/botHero";
import Edi from "../../components/Editor"

const CreateTooltip = (props) => {
    const[Gifdivshow, setGifDivShow] = useState(true)
    const[endMessage, setEndMessage] = useState({})    
    const[gifvisible, setGifvisible] = useState(false)
    const[selectedGifUrl, setSelectedGifUrl] = useState("")
    const[selectedEmoji, setSelectedEmoji] = useState("")
    const[emojishow, setEmojishow] = useState(false)
    

  return (
    <>
      <div className=" bg-alabaster-500 	">
        <div className="h-8"></div>
        <BotHero />
        <div className="mx-32 mt-12 bg-mountainmist-900 rounded-xl ">
          <div className="bg-mountainmist-800 w-full rounded-lg h-16 pt-4 pl-8">
            <p className="text-xl font-normal">
              Please fill in the fields below
            </p>
            
          </div>
          <div className="bg-white pl-4 pr-4 pt-4 pb-8">
          <p>1. Type Here Your Message Or Question</p>
            {/* <BotMessageBox b2text="connect" /> */}
            {/* <Edi giffunc={this.Gifdivshow} question={''} index={this.props.index} setNodeQuestion={(i, e)=>this.setState({endMessage: e})} gifVisible={this.state.gifvisible} selectedGifUrl={this.state.selectedGifUrl} selectedEmoji={this.state.selectedEmoji} emojifunc={this.emojishow} /> */}
            <Edi giffunc={Gifdivshow} question={''} index={props.index} setNodeQuestion={(i, e)=>setEndMessage({endMessage: e})} gifVisible={gifvisible} selectedGifUrl={selectedGifUrl} selectedEmoji={selectedEmoji} emojifunc={emojishow} />
          </div>

        </div>
      </div>
    </>
  );
};

export default CreateTooltip;
