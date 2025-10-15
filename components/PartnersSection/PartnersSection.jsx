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
            src="/images/client-logos/Logo_Sonyx200_Sonyx200 copy.png"
            alt="Sony Music"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_Europa_playx200 copy.png"
            alt="Europa"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_die dreix200 copy.png"
            alt="Die drei ???"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_ho3rraumx200 copy.png"
            alt="Ho3rraum"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_kovikox200 copy.png"
            alt="Koviko"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_fulldomex200 copy.png"
            alt="Fulldome"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_telefonicax200 copy.png"
            alt="Telefonica"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_1u1x200_1u1x200_1u1x200 copy.png"
            alt="1&1"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Logo_vodafonex200 copy.png"
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
            src="/images/client-logos/Logo_uniweimarx200 copy.png"
            alt="Bauhaus-Universität Weimar"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/tts_Logo_200x200 copy.png"
            alt="TTS"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/BallhausWest_200x200_Blau copy.png"
            alt="Ballhaus West"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/STC_Logo_200x200-01 copy.png"
            alt="Save the Children"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </PartnerLogo>
        <PartnerLogo>
          <Image
            src="/images/client-logos/Vivantes_Logo_200x200_Zeichenfläche 1 copy.png"
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
