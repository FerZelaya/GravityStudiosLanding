import { useState, type ReactNode } from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Textarea } from "@/components/ui/textarea";
import { countryDialOptions } from "@/content/contact";
import { submitContactForm } from "@/lib/contact-api";

export function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [dialCode, setDialCode] = useState<string>(countryDialOptions[0].value);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContactForm({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        countryCode: dialCode,
        message: String(formData.get("message") ?? ""),
      });
      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : null;
      setSubmitError(
        import.meta.env.DEV && message?.includes("VITE_FORMSPREE_FORM_ID")
          ? message
          : t("contact.form.error"),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[min(90%,700px)] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[110px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("contact.eyebrow")}
            title={t("contact.headline")}
            description={t("contact.subheadline")}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-8 flex justify-center">
          <ContactChip
            icon={<Mail className="size-5" aria-hidden />}
            label={t("contact.email.label")}
            value={t("contact.email.value")}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-10 block sm:mt-12">
          <GlassCard glow className="p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-white">
              {t("contact.form.title")}
            </h3>
            <div className="mt-6">
              {submitted ? (
                <p className="py-6 text-center text-sm text-white/60">
                  {t("contact.form.success")}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input
                    type="hidden"
                    name="countryCode"
                    value={dialCode}
                    readOnly
                  />
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-white/70">
                      {t("contact.form.fields.name.label")}
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={t("contact.form.fields.name.placeholder")}
                      className="h-11 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-dial" className="text-white/70">
                        {t("contact.form.fields.countryCode.label")}
                      </Label>
                      <Select value={dialCode} onValueChange={setDialCode}>
                        <SelectTrigger
                          id="contact-dial"
                          className="w-full border-white/10 bg-white/[0.04] text-white"
                        >
                          <SelectValue
                            placeholder={t(
                              "contact.form.fields.countryCode.placeholder",
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent className="dark border-white/10 bg-[#141414] text-white">
                          {countryDialOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {t(`contact.countries.${opt.countryKey}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone" className="text-white/70">
                        {t("contact.form.fields.phone.label")}
                      </Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        required
                        autoComplete="tel"
                        placeholder={t("contact.form.fields.phone.placeholder")}
                        className="h-11 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-white/70">
                      {t("contact.form.fields.email.label")}
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t("contact.form.fields.email.placeholder")}
                      className="h-11 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-white/70">
                      {t("contact.form.fields.message.label")}
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t("contact.form.fields.message.placeholder")}
                      className="min-h-[8rem] resize-y border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                    />
                  </div>
                  {submitError ? (
                    <p className="text-center text-sm text-red-400" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-full bg-white text-black hover:bg-white/90 sm:w-auto sm:self-center sm:px-8"
                  >
                    {isSubmitting
                      ? t("contact.form.submitting")
                      : t("contact.form.submit")}
                  </Button>
                </form>
              )}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactChip({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white">
        {icon}
      </div>
      <p className="mt-3 text-xs font-medium tracking-wide text-white/45 uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
