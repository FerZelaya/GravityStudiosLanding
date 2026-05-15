import { useState, type ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  contactDetails,
  contactForm,
  countryDialOptions,
} from '@/content/contact'
import { cn } from '@/lib/utils'

const iconWrap =
  'bg-foreground text-background flex size-12 items-center justify-center rounded-full shadow-sm ring-1 ring-border'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [dialCode, setDialCode] = useState<string>(countryDialOptions[0].value)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 bg-muted/25 py-20 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          <ContactChip
            icon={<MapPin className="size-5" aria-hidden />}
            label={contactDetails.location.label}
            value={contactDetails.location.value}
          />
          <ContactChip
            icon={<Phone className="size-5" aria-hidden />}
            label={contactDetails.phone.label}
            value={contactDetails.phone.value}
          />
          <ContactChip
            icon={<Mail className="size-5" aria-hidden />}
            label={contactDetails.email.label}
            value={contactDetails.email.value}
          />
        </div>

        <Card className="mt-12 rounded-3xl border-border/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{contactForm.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="text-muted-foreground py-6 text-center text-sm">
                {contactForm.success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="countryCode" value={dialCode} readOnly />
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{contactForm.fields.name.label}</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={contactForm.fields.name.placeholder}
                    className="bg-background h-10"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-dial">{contactForm.fields.countryCode.label}</Label>
                    <Select value={dialCode} onValueChange={setDialCode}>
                      <SelectTrigger id="contact-dial" className="w-full bg-background">
                        <SelectValue placeholder={contactForm.fields.countryCode.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {countryDialOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">{contactForm.fields.phone.label}</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      placeholder={contactForm.fields.phone.placeholder}
                      className="bg-background h-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">{contactForm.fields.email.label}</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={contactForm.fields.email.placeholder}
                    className="bg-background h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">{contactForm.fields.message.label}</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder={contactForm.fields.message.placeholder}
                    className="bg-background min-h-[8rem] resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  className="h-11 w-full rounded-xl border-border hover:bg-muted sm:w-auto sm:self-center"
                >
                  {contactForm.submit}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function ContactChip({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={cn(iconWrap)}>{icon}</div>
      <p className="text-muted-foreground mt-3 text-xs font-medium tracking-wide uppercase">
        {label}
      </p>
      <p className="text-foreground mt-1 text-sm font-medium">{value}</p>
    </div>
  )
}
