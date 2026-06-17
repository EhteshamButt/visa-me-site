"use client";
import Script from "next/script";

export default function LeadMagnetForm() {
  return (
    <>
      {/* Exact same Kit script as the original visa-me-site */}
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />

      {/*
        Form structure matches the original index.html exactly:
        - Same data-sv-form, data-uid, data-format, data-version
        - Same class names Kit needs
        - Success div is OUTSIDE the form with id = data-uid (Kit requires this)
      */}
      <form
        action="https://app.kit.com/forms/9481764/subscriptions"
        method="post"
        data-sv-form="9481764"
        data-uid="3808d012a8"
        data-format="inline"
        data-version="5"
        className="kit-inline-form formkit-form"
        min-width="400 500 600 700 800"
      >
        <div className="input-group">
          <input
            className="formkit-input"
            type="email"
            name="email_address"
            placeholder="Your email address"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            data-element="submit"
            className="formkit-submit"
          >
            <div className="formkit-spinner">
              <div /><div /><div />
            </div>
            <span>Send Me The Free Guide</span>
          </button>
        </div>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        />
      </form>

      {/* SUCCESS div — id must match data-uid="3808d012a8" so Kit shows it on success */}
      <div
        id="3808d012a8"
        className="formkit-alert formkit-alert-success"
        data-element="success"
        data-group="alert"
      >
        Thank you for signing up.
      </div>

      <p style={{
        fontSize: 11, color: "var(--ink-muted)",
        textAlign: "center", marginTop: 14, lineHeight: 1.4,
      }}>
        No spam. Unsubscribe anytime. We never sell your email.
      </p>

      <style>{`
        .kit-inline-form .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .kit-inline-form .formkit-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--line);
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          background: var(--cream);
          outline: none;
          box-sizing: border-box;
          color: var(--ink);
        }
        .kit-inline-form .formkit-input:focus {
          border-color: var(--navy);
        }
        .kit-inline-form .formkit-submit {
          position: relative;
          background: var(--navy);
          color: white;
          border: none;
          padding: 14px 22px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .kit-inline-form .formkit-submit:hover {
          background: var(--navy-light);
        }
        .kit-inline-form .formkit-spinner {
          display: none;
          gap: 3px;
          align-items: center;
        }
        .kit-inline-form[data-active] .formkit-spinner {
          display: flex;
        }
        .kit-inline-form .formkit-spinner > div {
          width: 4px; height: 4px;
          background: white;
          border-radius: 50%;
          animation: kit-bounce 1.4s ease-in-out infinite both;
        }
        .kit-inline-form .formkit-spinner > div:nth-child(2) { animation-delay: 0.16s; }
        .kit-inline-form .formkit-spinner > div:nth-child(3) { animation-delay: 0.32s; }
        @keyframes kit-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .kit-inline-form .formkit-alert-error {
          list-style: none;
          padding: 10px 14px;
          margin-top: 8px;
          background: rgba(176,65,62,0.08);
          border-left: 3px solid var(--red);
          border-radius: 4px;
          font-size: 13px;
          color: var(--red);
        }
        .kit-inline-form .formkit-alert-error:empty { display: none; }
        /* Success div styling */
        #3808d012a8.formkit-alert-success {
          display: none;
          margin-top: 12px;
          padding: 16px 18px;
          background: rgba(45,106,79,0.08);
          border: 2px solid var(--green);
          border-radius: 10px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: var(--green);
        }
      `}</style>
    </>
  );
}
