import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const productTypes = ["Key Case", "Phone Case", "Charm / Lanyard", "Something Else"];
const leatherOptions = [
  "Himalayan Crocodile",
  "Glazed Alligator",
  "Natural Python",
  "Ostrich & Exotics",
  "French Calf",
  "Hair-On Hide",
  "Help Me Choose",
];

interface Preview {
  id: string;
  url: string;
  name: string;
}

const reassurance = [
  "Free, no-obligation quote within 24 hours",
  "Send photos of your car & key — we match everything",
  "Hand-built and shipped worldwide, fully insured",
];

export default function Commission() {
  const [productType, setProductType] = useState("Key Case");
  const [leather, setLeather] = useState("Himalayan Crocodile");
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    marque: "",
    keyModel: "",
    colour: "",
    stitch: "",
    personalisation: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const next: Preview[] = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({
        id: `${f.name}-${f.size}-${Math.random().toString(36).slice(2, 7)}`,
        url: URL.createObjectURL(f),
        name: f.name,
      }));
    setPreviews((p) => [...p, ...next]);
  };

  const removePreview = (id: string) =>
    setPreviews((p) => {
      const target = p.find((x) => x.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return p.filter((x) => x.id !== id);
    });

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const valid = form.name.trim().length > 1 && emailValid;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) {
      document.getElementById("commission")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // No backend wired yet — this is where you POST to your email/CRM endpoint.
    setSubmitted(true);
  };

  return (
    <section id="commission" className="relative bg-coal py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto grid max-w-site gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        {/* Left rail */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">Commission</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] text-bone">
              Begin your
              <br />
              <span className="italic text-gold-gradient">bespoke piece.</span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-[14px] font-300 leading-relaxed text-bone/60">
              Tell us about your car and how you'd like it dressed. The more you
              share — photos especially — the more precisely we can quote and craft.
            </p>
          </Reveal>

          <Reveal delay={130}>
            <ul className="mt-10 space-y-4">
              {reassurance.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 text-gold">✦</span>
                  <span className="font-sans text-[13px] font-300 leading-relaxed text-bone/70">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 border-t border-white/8 pt-7">
              <span className="text-[10px] uppercase tracking-luxe text-smoke">
                Prefer to chat?
              </span>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[13px] text-bone/70">
                <a href="#" className="transition-colors hover:text-gold">
                  WhatsApp
                </a>
                <a href="#" className="transition-colors hover:text-gold">
                  Instagram @leecue.atelier
                </a>
                <a href="#" className="transition-colors hover:text-gold">
                  hello@leecue-atelier.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form / success */}
        <Reveal delay={80}>
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center border border-gold/30 bg-ink/40 px-8 py-20 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/50 text-3xl text-gold">
                ✦
              </span>
              <h3 className="mt-7 font-serif text-3xl text-bone">
                Your commission is received.
              </h3>
              <p className="mt-4 max-w-md font-sans text-[14px] font-300 leading-relaxed text-bone/60">
                Thank you, {form.name.split(" ")[0] || "friend"}. The atelier will
                review your {productType.toLowerCase()} request
                {previews.length > 0
                  ? ` and your ${previews.length} reference photo${previews.length > 1 ? "s" : ""}`
                  : ""}{" "}
                and reply within 24 hours with a quote and timeline.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setTouched(false);
                }}
                className="btn-gold mt-9"
              >
                <span>Start Another</span>
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="border border-white/8 bg-ink/40 p-7 sm:p-10"
            >
              {/* Product type */}
              <FieldLabel index="01" label="What shall we make?" />
              <div className="mb-8 mt-4 flex flex-wrap gap-3">
                {productTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setProductType(t)}
                    className={`border px-5 py-2.5 font-sans text-[11px] uppercase tracking-wide2 transition-all duration-300 ${
                      productType === t
                        ? "border-gold bg-gold text-ink"
                        : "border-white/12 text-bone/60 hover:border-gold/50 hover:text-bone"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Marque / model */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Marque & model"
                  placeholder="e.g. Ferrari 488 / SF90"
                  value={form.marque}
                  onChange={update("marque")}
                />
                <Field
                  label="Your key or device"
                  placeholder="e.g. 3-button smart key"
                  value={form.keyModel}
                  onChange={update("keyModel")}
                />
              </div>

              {/* Leather */}
              <div className="mt-8">
                <FieldLabel index="02" label="Choose your leather" />
                <div className="mb-2 mt-4 flex flex-wrap gap-3">
                  {leatherOptions.map((l) => (
                    <button
                      type="button"
                      key={l}
                      onClick={() => setLeather(l)}
                      className={`border px-4 py-2 font-sans text-[11px] uppercase tracking-wide2 transition-all duration-300 ${
                        leather === l
                          ? "border-gold bg-gold text-ink"
                          : "border-white/12 text-bone/55 hover:border-gold/50 hover:text-bone"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personalisation row */}
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <Field
                  label="Colour"
                  placeholder="Match my paint…"
                  value={form.colour}
                  onChange={update("colour")}
                />
                <Field
                  label="Stitch / edge"
                  placeholder="Contrast canary"
                  value={form.stitch}
                  onChange={update("stitch")}
                />
                <Field
                  label="Name / initials"
                  placeholder="Foil or embroidered"
                  value={form.personalisation}
                  onChange={update("personalisation")}
                />
              </div>

              {/* Upload */}
              <div className="mt-8">
                <FieldLabel index="03" label="Share photos of your car & key" />
                <label
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={onDrop}
                  className={`mt-4 flex cursor-pointer flex-col items-center justify-center border border-dashed px-6 py-10 text-center transition-all duration-300 ${
                    dragging
                      ? "border-gold bg-gold/5"
                      : "border-white/15 hover:border-gold/50 hover:bg-white/[0.02]"
                  }`}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => addFiles(e.target.files)}
                  />
                  <span className="text-2xl text-gold/70">⤓</span>
                  <span className="mt-3 font-sans text-[13px] text-bone/70">
                    Drag & drop images here, or{" "}
                    <span className="text-gold underline underline-offset-4">browse</span>
                  </span>
                  <span className="mt-1 font-sans text-[11px] text-smoke">
                    Your car, your key, an inspiration shot — anything helps.
                  </span>
                </label>

                {previews.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {previews.map((p) => (
                      <div
                        key={p.id}
                        className="group relative aspect-square overflow-hidden border border-white/10"
                      >
                        <img
                          src={p.url}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePreview(p.id)}
                          aria-label={`Remove ${p.name}`}
                          className="absolute right-1 top-1 grid h-6 w-6 place-items-center bg-ink/80 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="mt-9 border-t border-white/8 pt-8">
                <FieldLabel index="04" label="Where shall we reach you?" />
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    error={touched && form.name.trim().length <= 1 ? "Please tell us your name" : ""}
                  />
                  <Field
                    label="Email"
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={update("email")}
                    error={touched && !emailValid ? "Enter a valid email" : ""}
                  />
                  <Field
                    label="Phone / WhatsApp"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                  <Field
                    label="Country"
                    placeholder="For shipping"
                    value={form.country}
                    onChange={update("country")}
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-[10px] uppercase tracking-wide2 text-smoke">
                    Anything else?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={3}
                    placeholder="Tell us the story, the occasion, the dream…"
                    className="w-full resize-none border border-white/12 bg-transparent px-4 py-3 font-sans text-[14px] text-bone placeholder:text-smoke/60 transition-colors duration-300 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn-solid mt-8 w-full sm:w-auto">
                <span>Send My Commission Request</span>
              </button>
              {touched && !valid && (
                <p className="mt-3 font-sans text-[12px] text-oxblood">
                  Please add your name and a valid email so we can reply.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function FieldLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-sm text-gold/60">{index}</span>
      <span className="font-sans text-[13px] uppercase tracking-wide2 text-bone/80">
        {label}
      </span>
    </div>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}

function Field({ label, value, onChange, placeholder, type = "text", required, error }: FieldProps) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-smoke">
        {label}
        {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border bg-transparent px-4 py-3 font-sans text-[14px] text-bone placeholder:text-smoke/60 transition-colors duration-300 focus:outline-none ${
          error ? "border-oxblood focus:border-oxblood" : "border-white/12 focus:border-gold"
        }`}
      />
      {error && <p className="mt-1.5 font-sans text-[11px] text-oxblood/90">{error}</p>}
    </div>
  );
}
