"use client";
import {
  InfoContainer,
  InfoItem,
  InfoIcon,
  InfoTitle,
  InfoDescription,
  InfoItemContainer,
} from "./ContactInfo.styles";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <InfoContainer>
      <InfoItem>
        <InfoItemContainer>
          <InfoIcon>
            <Image
              src="/images/svgs/time.svg"
              alt="Response time"
              width={22}
              height={22}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </InfoIcon>
          <InfoTitle>Response Time</InfoTitle>
        </InfoItemContainer>
        <InfoDescription>
          Usually respond within 4-6 hours during business days. Weekend responses within 24 hours.
        </InfoDescription>
      </InfoItem>

      <InfoItem>
        <InfoItemContainer>
          <InfoIcon>
            <Image
              src="/images/svgs/flag.svg"
              alt="Current status"
              width={22}
              height={22}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </InfoIcon>
          <InfoTitle>Current Status</InfoTitle>
        </InfoItemContainer>
        <InfoDescription>Available for new projects.</InfoDescription>
      </InfoItem>

      <InfoItem>
        <InfoItemContainer>
          <InfoIcon>
            <Image
              src="/images/svgs/calendar.svg"
              alt="Time zone"
              width={22}
              height={22}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </InfoIcon>
          <InfoTitle>Time Zone</InfoTitle>
        </InfoItemContainer>
        <InfoDescription>
          Berlin time zone (CET/CEST). Flexible with international clients. Remote collaboration
          worldwide.
        </InfoDescription>
      </InfoItem>
    </InfoContainer>
  );
}
