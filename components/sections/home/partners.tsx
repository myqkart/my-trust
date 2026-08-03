import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { PartnerLogos } from "@/components/common/partner-logos";
import { FadeIn, SlideUp } from "@/components/animations";
import { partnersInfo } from "@/data/demo";

export function HomePartners() {
  return (
    <Section background="white" spacing="md">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Partners"
          title="Growing with trusted collaborators"
          description="Hospitals, foundations, clubs, and CSR teams help us extend care further."
        />
      </SlideUp>
      <FadeIn className="mt-10" delay={0.1}>
        <PartnerLogos partners={partnersInfo.map((name) => ({ name }))} />
      </FadeIn>
    </Section>
  );
}
