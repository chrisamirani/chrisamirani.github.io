import React from "react";
import "./toolbar.css";
import ToolbarButton from "./ToolbarButton";
import SocialButton from "./SocialButton";
const toolbarItems = [
  {
    label: "About",
    icon: "/icons/person.svg",
    onPress: () => document.getElementById("about").scrollIntoView(),
  },
  {
    label: "Experience",
    icon: "/icons/experience.svg",
    onPress: () => document.getElementById("experience").scrollIntoView(),
  },
  {
    label: "Projects",
    icon: "/icons/bug.svg",
    onPress: (e) => document.getElementById("projects").scrollIntoView(),
  },
];

const social = [
  {
    name: "github",
    link: "https://github.com/chrisamirani",
  },
  {
    name: "email",
    link: "mailto:chrisamirani@yahoo.com",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCGnSj4wBUX4tXEmC6UXtFhA",
  },
];
export default function Toolbar() {
  return (
    <div className='toolbar'>
      <div style={{ width: 100 }}></div>
      {toolbarItems.map((item, index) => (
        <ToolbarButton
          key={index}
          label={item.label}
          icon={item.icon}
          onPress={item.onPress}
        />
      ))}
      {social.map((item, index) => (
        <SocialButton key={index} name={item.name} link={item.link} />
      ))}
    </div>
  );
}
