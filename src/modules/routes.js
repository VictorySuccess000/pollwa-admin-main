import React from "react";

import MainLayout from "../modules/layout/MainLayout";
import AuthLayout from "../modules/layout/AuthLayout";

const ClientTabs = React.lazy(() => import("./views/ClientsTab/ClientsTab"));
const ClientDetails = React.lazy(() =>
  import("./views/ClientsTab/ClientDetails")
);
const BotTemplate = React.lazy(() =>
  import("./views/BotTemplate/BuildBot/BotTemplate")
);
const BotDesign = React.lazy(() =>
  import("./views/BotDesign/BuildBot/BotDesign")
);
const Tooltip = React.lazy(() => import("./views/Tooltip/Tooltip"));
const CreateTooltip = React.lazy(() =>
  import("./views/Tooltip/BotBuilder/index")
);
const EmailingSystem = React.lazy(() =>
  import("./views/EmailingSystem/BotBuilder/index")
);
const PkgsSubscriptions = React.lazy(() =>
  import("./views/PKgSubscription/PkgsSubscription")
);
const Settings = React.lazy(() => import("./views/Settings/Settings"));
const SignIn = React.lazy(() => import("./views/Auth/Signin"));
const DynamicReply = React.lazy(() =>
  import("./views/BotTemplate/DynamicReply/DynamicReply")
);
const BotBuilder = React.lazy(() =>
  import("./views/BotTemplate/BotBuilder/index")
);
const SentTabs = React.lazy(() =>
  import("./views/EmailingSystem/BotBuilder/index")
);
const DraftsTabs = React.lazy(() =>
  import("./views/EmailingSystem/BotBuilder/Drafts")
);
const TrashTabs = React.lazy(() =>
  import("./views/EmailingSystem/BotBuilder/index")
);

const routes = [
  {
    layout: MainLayout,
    path: "/clients",
    component: ClientTabs,
    title: "Clients",
  },
  {
    layout: MainLayout,
    path: "/clients/:id",
    component: ClientDetails,
  },
  {
    layout: MainLayout,
    path: "/bot-template/emailing-system",
    component: BotBuilder,
  },
  {
    layout: MainLayout,
    path: "/bot-template/dynamic-reply",
    component: DynamicReply,
  },
  {
    layout: MainLayout,
    path: "/bot-template",
    component: BotTemplate,
  },
  {
    layout: MainLayout,
    path: "/bot-design",
    component: BotDesign,
  },
  {
    layout: MainLayout,
    path: "/tooltip-management/create",
    component: CreateTooltip,
  },
  {
    layout: MainLayout,
    path: "/tooltip-management",
    component: Tooltip,
  },

  {
    layout: MainLayout,
    path: "/emailing-system",
    component: EmailingSystem,
  },
  {
    layout: MainLayout,
    path: "/pkgs-subscriptions",
    component: PkgsSubscriptions,
  },
  {
    layout: MainLayout,
    path: "/settings",
    component: Settings,
  },
  {
    layout: AuthLayout,
    path: "/",
    component: SignIn,
  },
  {
    layout: MainLayout,
    path: "/Sent",
    component: SentTabs,
    title: "Sent",
  },
  {
    layout: MainLayout,
    path: "/Drafts",
    component: DraftsTabs,
    title: "Drafts",
  },
  {
    layout: MainLayout,
    path: "/Trash",
    component: TrashTabs,
    title: "Trash",
  },
];

export default routes;
