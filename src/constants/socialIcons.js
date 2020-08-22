import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

/* Social icons and links are seperated out
 * as they can be used in multiple locations */
export default [
  {
    icon: <AiFillGithub />,
    url: "https://github.com",
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://linkedin.com",
  },
  {
    icon: <AiFillTwitterCircle />,
    url: "https://twitter.com",
  },
];
