import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Ticket",
    path: "/ticket",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Actions",
    path: "/actions",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Status",
    path: "/status",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Close Ticket",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
