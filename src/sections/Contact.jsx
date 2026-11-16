import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()

const [status, setStatus] = useState('')
const [isSending, setIsSending] = useState(false)
const [showConfirmation, setShowConfirmation] = useState(false)

const handleSubmit = (event) => {
  event.preventDefault()
  setShowConfirmation(true)
}

const sendEmail = async () => {
  setShowConfirmation(false)
  setIsSending(true)
  setStatus('')

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )

    setStatus('success')
    form.current.reset()
  } catch (error) {
    console.error('Email failed:', error)
    setStatus('error')
  } finally {
    setIsSending(false)
  }
}

  return (
    <section
      id="contact"
      className="px-5 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl border-t border-border pt-8">

        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          Get In Touch
        </h2>

        <p className="mt-4 max-w-xl text-muted">
          Interested in collaborating, discussing a project,
          or getting in touch? Please send a message using
          the form below or contact me directly.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="glass-panel flex flex-col justify-between rounded-2xl p-7 md:p-8">

            <div>
              <h3 className="text-xl font-bold text-foreground">
                Let's Talk
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                I’m always open to discussing system analysis,
                quality assurance strategies, workflow optimization,
                or other exciting collaboration opportunities.
              </p>
            </div>

            <div className="mt-8 space-y-4">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </p>

                <a
                  href="mailto:nazrullen446@gmail.com"
                  className="mt-1 font-medium text-foreground transition-colors hover:text-accent"
                >
                  nazrullen446@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Location
                </p>

                <p className="mt-1 font-medium text-foreground">
                  Malang, East Java, Indonesia
                </p>
              </div>

            </div>
          </div>

{showConfirmation && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/25 px-5 backdrop-blur-sm" role="presentation">
    <div role="dialog" aria-modal="true" aria-labelledby="confirm-title" className="glass-panel w-full max-w-md rounded-2xl p-6 shadow-2xl">
      <h3 id="confirm-title" className="text-xl font-semibold text-foreground">
        Confirm Message
      </h3>

      <p className="mt-3 leading-relaxed text-muted">
        Are you sure you want to send this message?
        Please make sure your email and message are correct.
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => setShowConfirmation(false)}
          className="rounded-lg border border-border px-5 py-2.5 font-medium text-foreground transition hover:border-accent hover:text-accent"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={sendEmail}
          disabled={isSending}
          className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Sending...' : 'Yes, Send'}
        </button>
      </div>
    </div>
  </div>
)}

          {/* Contact Form */}
         <form
          ref={form}
          onSubmit={handleSubmit}
          className="glass-panel flex flex-col gap-5 rounded-2xl p-7 md:p-8"
>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="rounded-xl border border-emerald-900/15 bg-white/65 px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-accent focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@domain.com"
                className="rounded-xl border border-emerald-900/15 bg-white/65 px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-accent focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message here..."
                className="resize-y rounded-xl border border-emerald-900/15 bg-white/65 px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-accent focus:outline-none"
                required
              />
            </div>

            {/* Status */}
            {status === 'success' && (
              <p role="status" aria-live="polite" className="text-sm text-accent">
                ✓ Message sent successfully. Thank you for reaching out!
              </p>
            )}

            {status === 'error' && (
              <p role="alert" className="text-sm text-red-600">
                ✕ Something went wrong. Please try again later.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-2 rounded-full bg-accent py-3 font-semibold text-white transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact