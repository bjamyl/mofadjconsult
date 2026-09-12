"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { ok: false };

function Field({
  id,
  name,
  label,
  type = "text",
  errors,
  textarea,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  errors?: string[];
  textarea?: boolean;
}) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={id} className="text-step--1 font-medium text-slate">
        {label}
      </label>
      <Comp
        id={id}
        name={name}
        type={textarea ? undefined : type}
        required
        aria-invalid={errors && errors.length > 0 ? true : undefined}
        aria-describedby={errors && errors.length > 0 ? `${id}-error` : undefined}
        className="mt-1 block w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink focus:border-navy focus:outline-none focus:ring-0"
        {...(textarea ? { rows: 5 } : {})}
      />
      {errors && errors.length > 0 && (
        <p id={`${id}-error`} className="mt-1 text-step--1 text-destructive">
          {errors[0]}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="solid" size="brand">
      {pending ? "Sending..." : "Send message"} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}

export function ContactForm({ className = "" }: { className?: string }) {
  const [state, formAction] = useFormState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className={`rounded-brand-md border border-line bg-white p-8 ${className}`}>
      {/* Honeypot: real users never see or fill this. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field id="fullName" name="fullName" label="Full name" errors={state.errors?.fullName} />
        <Field id="email" name="email" label="Email address" type="email" errors={state.errors?.email} />
      </div>

      <div className="mt-6 md:w-1/2">
        <Field id="phoneNumber" name="phoneNumber" label="Phone number" type="tel" errors={state.errors?.phoneNumber} />
      </div>

      <div className="mt-6">
        <Field id="message" name="message" label="Type your message" errors={state.errors?.message} textarea />
      </div>

      <div className="mt-8">
        <SubmitButton />
      </div>
    </form>
  );
}
