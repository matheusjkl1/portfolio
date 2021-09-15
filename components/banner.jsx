import React from 'react';
import Image from 'next/image';
import profilePic1 from '../images/1.png';

export default function banner() {
  return (
    <div>
      <Image src={profilePic1} />
    </div>
  );
}
