"use client";
import Image from "next/image";
import {
  PartnersContainer,
  PartnersHeader,
  PartnersGrid, 
  PartnerLogo,  
} from "./PartnersSection.styles";
import { SectionTitle, SectionDescription } from "../../styles/Typography";

export default function PartnersSection() {
  return (
    <PartnersContainer>
      <PartnersHeader>
        <SectionTitle>Partners</SectionTitle>
        <SectionDescription>
          These logos represent a part of my journey—brands and teams I've been
          lucky to collaborate with. Every partnership has inspired new ideas
          and pushed my work in exciting directions.
        </SectionDescription>
      </PartnersHeader>

      <PartnersGrid>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_Sonyx200.png"
            alt="Sony Music"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_Europa_playx200.png"
            alt="Europa"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_die dreix200.png"
            alt="Die drei ???"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_ho3rraumx200.png"
            alt="Ho3rraum"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_kovikox200.png"
            alt="Koviko"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_fulldomex200.png"
            alt="Fulldome"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_telefonicax200.png"
            alt="Telefonica"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_1u1x200_1u1x200_1u1x200.png"
            alt="1&1"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_vodafonex200.png"
            alt="Vodafone"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_pyurx200.png"
            alt="PYUR"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_uniweimarx200.png"
            alt="Bauhaus-Universität Weimar"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/tts_Logo_200x200.png"
            alt="TTS"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/BallhausWest_200x200_Blau.png"
            alt="Ballhaus West"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/STC_Logo_200x200-01.png"
            alt="Save the Children"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Vivantes_Logo_200x200_Zeichenfläche 1.png"
            alt="Vivantes"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
      </PartnersGrid>
    </PartnersContainer>
  );
}
