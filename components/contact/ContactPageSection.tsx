"use client";

import { createClient } from "@supabase/supabase-js";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Engagement",
  "Anniversary",
  "Baby Shower",
  "Other",
];

export default function ContactPageSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  const supabase = useMemo(
    () =>
      createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.NEXT_PUBLIC_SUPABASE_ANON || ""
      ),
    []
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event_type: "",
    date: "",
    message: "",
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.event_type || !formData.date || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("contact").insert([formData]);
      if (error) throw error;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", event_type: "", date: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 2500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hello, I'm interested in event services. Name: ${formData.name}, Event: ${formData.event_type}`;
    window.open(`https://wa.me/917021927602?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section ref={ref as any} className="bg-[#fbf5e9] py-14 sm:py-16 mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease }}
          className="text-center font-serif text-5xl font-semibold text-[#8B2E2E] sm:text-6xl"
        >
          Contact The Bliss Events
        </motion.h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Left form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <h2 className="text-xl font-semibold text-[#241a16]">
              Let’s Start Planning Your Perfect Event ✨
            </h2>
            <p className="mt-2 text-sm text-[#241a16]/60">
              We’d love to hear from you. Please fill out this form.
            </p>

            <div className="mt-6 rounded-2xl bg-white/40 p-5 ring-1 ring-black/10 backdrop-blur sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name">
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                    placeholder="John Smith"
                  />
                </Field>

                <Field label="Email">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                    placeholder="you@company.com"
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Phone number">
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                    placeholder="+91 98765 43210"
                  />
                </Field>

                <Field label="Event type">
                  <select
                    value={formData.event_type}
                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                  >
                    <option value="">Select an event type</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Event date">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message">
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                    placeholder="Hello, I'm interested in event management services by The Bliss Events..."
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="h-11 rounded-full bg-[#7D1511] text-sm font-medium text-white hover:bg-[#65100d] transition disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit inquiry"}
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="h-11 rounded-full border-2 border-green-500 bg-white text-sm font-medium text-green-600 hover:bg-green-50 transition"
                >
                  WhatsApp Us
                </button>
              </div>

              {submitStatus === "success" && (
                <p className="mt-3 text-center text-sm text-green-600">✓ Form submitted successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-3 text-center text-sm text-red-600">✗ Please fill all required fields</p>
              )}
            </div>
          </motion.div>

          {/* Right info cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease, delay: 0.12 }}
            className="lg:col-span-6"
          >
            <h2 className="text-xl font-semibold text-[#241a16]">We’d love to hear from you</h2>
            <p className="mt-2 text-sm text-[#241a16]/60">
              Need something cleared up? Here are our most frequently asked questions.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" value="Theblissevents1985@gmail.com" sub="Our friendly team is here to help." />
              <InfoCard icon={<Phone className="h-5 w-5" />} title="Phone" value="+91 7021927602" sub="Mon–sat from 8am to 5pm." />
              <InfoCard icon={<MapPin className="h-5 w-5" />} title="Location" value="Nagpur, MH India" sub="Come say hello at our place." />
              <InfoCard icon={<Clock className="h-5 w-5" />} title="Working hours" value="Mon–sat from 8am to 5pm." sub="Sunday : Appointment Only." />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-[#241a16]/70">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl bg-white/35 p-5 ring-1 ring-black/10 backdrop-blur">
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1 ring-black/10 text-[#7D1511]">
        {icon}
      </div>
      <div className="text-sm font-semibold text-[#241a16]">{title}</div>
      <div className="mt-1 text-sm text-[#6a22ff]">{value}</div>
      <div className="mt-2 text-xs text-[#241a16]/60">{sub}</div>
    </div>
  );
}
