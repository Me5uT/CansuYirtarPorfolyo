import React from "react";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ExtensionIcon from "@mui/icons-material/Extension";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const ServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "VideoChatIcon":
      return <VideoChatIcon />;
    case "QuestionAnswerIcon":
      return <QuestionAnswerIcon />;
    case "ExtensionIcon":
      return <ExtensionIcon />;
    case "ChildCareIcon":
      return <ChildCareIcon />;
    case "PsychologyIcon":
      return <PsychologyIcon />;
    default:
      return <VideoChatIcon />;
  }
};
