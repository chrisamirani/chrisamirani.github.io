import React from "react";

export default function SocialButton({ name, link }) {
  return (
    <a className='social-button' href={link} target='_blank' rel='noreferrer'>
      <img src={`/imgs/${name}.svg`} alt={name} title={name} />
    </a>
  );
}
