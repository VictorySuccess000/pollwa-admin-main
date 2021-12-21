import React from "react";
import {ReactComponent as BackButton} from "../../../images/icons/back_button.svg";
import {ReactComponent as AdminUser} from "../../../images/icons/5mins_user.svg";
import {ReactComponent as AgentsIcon} from "../../../images/icons/agents.svg";
import {useHistory} from "react-router-dom";

const ClientDetails = () => {

    const history = useHistory()

    const DetailsItem = ({title, description}) => <div>
        <p className="mt-8 text-mountainmist-500 text-base mb-1">{title}</p>
        <p className="text-base text-lg">{description}</p>
    </div>

    const AgentItem = ({title}) => <div className={"border p-4 mb-4 rounded"}>
        <p className="text-base">{title}</p>
    </div>


    return <div className={"ml-8 cursor-pointer"} onClick={e => history.goBack()}>
        <div className="mt-8 flex flex-row flex-wrap content-center">
            <BackButton className="self-center"/> <p className={"text-xl font-normal ml-2"}>Back</p>
        </div>

        <div className={"mr-8 mt-8 grid grid-cols-2 gap-2"}>
            <div>
                <div className="p-4 h-40 mx-4 rounded-xl">
                    <div className="flex flex-row">
                        <div>
                            <AdminUser className="rounded-full w-36 h-36"/>
                        </div>
                        <div className="ml-16">
                            <p className="text-2xl mb-1">Thomas Rolland</p>
                            <p className="text-base font-semibold mb-1 text-pollwa">thomasjames@gmail.com</p>
                            <p className="text-base font-semibold mb-1 text-gray-400">+2349056758995</p>
                        </div>
                    </div>

                    <p className="mt-8 text-mountainmist-500 text-lg">Details</p>

                    <div className="grid grid-cols-2">
                        <DetailsItem title={"Date of Subscription"} description={"30/09/2021"}/>
                        <DetailsItem title={"Days Left"} description={"3 days left"}/>
                        <DetailsItem title={"Subscription Type"} description={"Basic"}/>
                        <DetailsItem title={"Address"} description={"Nairobi, Kenya"}/>
                        <DetailsItem title={"Industry"} description={"Finance"}/>
                        <DetailsItem title={"Company Name"} description={"Geek Inc."}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-4 h-40 mx-4 rounded-xl">
                    <div className="flex flex-row">
                        <div>
                            <AgentsIcon className="rounded-full w-12 h-12"/>
                        </div>
                        <div className="ml-8 self-center">
                            <p className="text-lg self-center">Agents</p>
                        </div>
                    </div>

                    <div className={"mt-8"}>
                        <AgentItem title={"Donda"}/>
                        <AgentItem title={"Donda"}/>
                        <AgentItem title={"Donda"}/>
                        <AgentItem title={"Donda"}/>
                    </div>

                </div>
            </div>
        </div>

    </div>;
};

export default ClientDetails;
