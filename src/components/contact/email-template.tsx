import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>

    <Tailwind>
      <Body className="bg-slate-50 font-sans">
        <Container className="bg-white mx-auto mb-16 max-w-[600px] py-5">
          <Heading className="text-slate-900 text-2xl font-bold mt-10 mb-5 px-10">
            New Contact Form Submission
          </Heading>

          <Section className="px-10">
            <Text className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-5 mb-2">
              From:
            </Text>
            <Text className="text-slate-900 text-base leading-6 mb-5">
              {name}
            </Text>
          </Section>

          <Section className="px-10">
            <Text className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-5 mb-2">
              Email:
            </Text>
            <Text className="text-slate-900 text-base leading-6 mb-5">
              {email}
            </Text>
          </Section>

          <Hr className="border-slate-200 mx-10 my-5" />

          <Section className="px-10">
            <Text className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-5 mb-2">
              Message:
            </Text>
            <Text className="text-slate-900 text-base leading-7 mb-5 whitespace-pre-wrap">
              {message}
            </Text>
          </Section>

          <Hr className="border-slate-200 mx-10 my-5" />

          <Text className="text-slate-400 text-xs leading-4 px-10 mt-5">
            This message was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
