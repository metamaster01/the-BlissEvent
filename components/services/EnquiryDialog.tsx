"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";
import { X, MessageCircle } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  eventType: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function EnquiryDialog({ open, onClose, eventType }: Props) {
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
    phone: "",
    event_type: eventType,
    date: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      setSubmitStatus("idle");
      setFormData((p) => ({ ...p, event_type: eventType }));
    }
  }, [eventType, open]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.event_type || !formData.date || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("contact").insert([formData]);
      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        event_type: eventType,
        date: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 2500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hello, I'm interested in: ${formData.event_type}. Name: ${formData.name || "—"} Phone: ${formData.phone || "—"}`;
    window.open(`https://wa.me/917021927602?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
            className="
              fixed left-1/2 top-1/2 z-[70] w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2
              rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-black/10 sm:p-7
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-serif italic text-sm text-[#a14b3b]">Enquiry</p>
                <h3 className="mt-1 text-xl font-semibold text-[#241a16] sm:text-2xl">
                  Enquiry now
                </h3>
                <p className="mt-1 text-sm text-[#241a16]/70">
                  We’ll contact you back quickly.
                </p>
              </div>

              <button
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full bg-black/5 hover:bg-black/10 transition"
              >
                <X className="h-5 w-5 text-[#241a16]" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                    placeholder="John Smith"
                  />
                </Field>

                <Field label="Phone">
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                    placeholder="+91..."
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Event type">
                  <input
                    value={formData.event_type}
                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                  />
                </Field>

                <Field label="Event date">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                  />
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 outline-none focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20"
                  placeholder="Tell us what you need..."
                />
              </Field>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="
                    h-12 rounded-full bg-[#8B2E2E] text-white font-medium
                    hover:bg-[#7D1F1F] transition
                    disabled:opacity-60
                  "
                >
                  {isSubmitting ? "Submitting..." : "Submit inquiry"}
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="
                    h-12 rounded-full border-2 border-green-500 text-green-600 font-medium
                    hover:bg-green-50 transition
                    flex items-center justify-center gap-2
                  "
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </button>
              </div>

              {submitStatus === "success" && (
                <p className="text-green-600 text-sm text-center">✓ Form submitted successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm text-center">✗ Please fill all required fields</p>
              )}

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
    </div>
  );
}
