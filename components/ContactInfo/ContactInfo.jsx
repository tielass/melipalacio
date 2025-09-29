"use client";
import {
  InfoContainer,
  InfoItem,
  InfoIcon,
  InfoTitle,
  InfoDescription,
} from "./ContactInfo.styles";

export default function ContactInfo() {
  return (
    <InfoContainer>
      <InfoItem>
        <InfoIcon>🕐</InfoIcon>
        <InfoTitle>Response Time</InfoTitle>
        <InfoDescription>
          Usually respond within 4-6 hours during business days. Weekend
          responses within 24 hours.
        </InfoDescription>
      </InfoItem>

      <InfoItem>
        <InfoIcon>📅</InfoIcon>
        <InfoTitle>Current Status</InfoTitle>
        <InfoDescription>
          Available for new projects starting February 2025. Booking for Q2.
        </InfoDescription>
      </InfoItem>

      <InfoItem>
        <InfoIcon>🌍</InfoIcon>
        <InfoTitle>Time Zone</InfoTitle>
        <InfoDescription>
          PST (UTC-8). Flexible with international clients. Remote collaboration
          worldwide.
        </InfoDescription>
      </InfoItem>
    </InfoContainer>
  );
}
