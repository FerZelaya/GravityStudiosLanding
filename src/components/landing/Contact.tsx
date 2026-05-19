import { useState, type ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { Textarea } from "@/components/ui/textarea";
import { countryDialOptions } from "@/content/contact";
import { submitContactForm } from "@/lib/contact-api";
import { cn } from "@/lib/utils";

const iconWrap =
  "bg-foreground text-background flex size-12 items-center justify-center rounded-full shadow-sm ring-1 ring-border";

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
        import.meta.env.DEV &&
          message?.includes("VITE_FORMSPREE_FORM_ID")
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
      className="dark bg-background text-foreground scroll-mt-24 border-t border-border/60 py-16 sm:py-20 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollRevealGroup className="grid gap-10 md:grid-cols-2 md:gap-4">
          <ScrollReveal staggerItem>
            <ContactChip
              icon={<Phone className="size-5" aria-hidden />}
              label={t("contact.phone.label")}
              value={t("contact.phone.value")}
            />
          </ScrollReveal>
          <ScrollReveal staggerItem>
            <ContactChip
              icon={<Mail className="size-5" aria-hidden />}
              label={t("contact.email.label")}
              value={t("contact.email.value")}
            />
          </ScrollReveal>
        </ScrollRevealGroup>

        <ScrollReveal delay={0.12} className="mt-12 block">
          <Card className="rounded-3xl border-border/80 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {t("contact.form.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <p className="text-muted-foreground py-6 text-center text-sm">
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
                    <Label htmlFor="contact-name">
                      {t("contact.form.fields.name.label")}
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={t("contact.form.fields.name.placeholder")}
                      className="bg-background h-10"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-dial">
                        {t("contact.form.fields.countryCode.label")}
                      </Label>
                      <Select value={dialCode} onValueChange={setDialCode}>
                        <SelectTrigger
                          id="contact-dial"
                          className="w-full bg-background"
                        >
                          <SelectValue
                            placeholder={t(
                              "contact.form.fields.countryCode.placeholder",
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent className="dark">
                          {countryDialOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {t(`contact.countries.${opt.countryKey}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">
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
                        className="bg-background h-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">
                      {t("contact.form.fields.email.label")}
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t("contact.form.fields.email.placeholder")}
                      className="bg-background h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">
                      {t("contact.form.fields.message.label")}
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t("contact.form.fields.message.placeholder")}
                      className="bg-background min-h-[8rem] resize-y"
                    />
                  </div>
                  {submitError ? (
                    <p
                      className="text-destructive text-center text-sm"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  ) : null}
                  <Button
                    type="submit"
                    variant="outline"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-xl border-border hover:bg-muted sm:w-auto sm:self-center"
                  >
                    {isSubmitting
                      ? t("contact.form.submitting")
                      : t("contact.form.submit")}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
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
      <div className={cn(iconWrap)}>{icon}</div>
      <p className="text-muted-foreground mt-3 text-xs font-medium tracking-wide uppercase">
        {label}
      </p>
      <p className="text-foreground mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
