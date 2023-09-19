import { BigHead } from '@bigheads/core';

export const AvatarGeneratorContacts = () => {
  return <BigHead width="70px" height="70px" style={{ marginBottom: 10 }} />;
};

export const AvatarGeneratorUser = () => {
  return (
    <BigHead
      width="50px"
      height="50px"
      accessory="shades"
      body="chest"
      circleColor="blue"
      clothing="tankTop"
      clothingColor="black"
      eyebrows="angry"
      eyes="wink"
      facialHair="mediumBeard"
      graphic="vue"
      hair="short"
      hairColor="black"
      hat="none"
      hatColor="green"
      lashes="false"
      lipColor="purple"
      mask="true"
      faceMask="true"
      mouth="open"
      skinTone="brown"
    />
  );
};
