import React, { useState } from "react";
import sendEmail from "../functions/sendmail";
import { contact } from "../data/services";

const Field = ({ field, value, onChange }) => {
  const common = { id: field.name, name: field.name, value, onChange, required: field.required };
  let input;
  if (field.type === "textarea") input = <textarea rows={3} {...common} />;
  else if (field.type === "select") input = <select {...common}>{field.options.map((o) => <option key={o}>{o}</option>)}</select>;
  else input = <input type={field.type} min={field.min} {...common} />;
  return (
    <label className={`field ${field.type === "textarea" ? "wide" : ""}`}>
      <span>{field.label}{field.required && " *"}</span>
      {input}
    </label>
  );
};

const initialValues = (fields) =>
  Object.fromEntries(fields.map((f) => [f.name, f.type === "select" ? f.options[0] : f.type === "number" && f.min ? String(f.min) : ""]));

export default function RequestForm({ service, tab }) {
  const [values, setValues] = useState(() => initialValues(tab.fields));
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const message = () =>
    [`${service.title} — ${tab.label}`, ...tab.fields.filter((f) => values[f.name]).map((f) => `${f.label}: ${values[f.name]}`)].join("\n");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatus((await sendEmail(message())) ? "sent" : "failed");
  };

  const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message())}`;

  if (status === "sent") {
    return (
      <div className="form-result success">
        <i className="fa fa-check-circle" />
        <h3>Request sent!</h3>
        <p>Thank you. Our travel manager will contact you shortly.</p>
        <button className="btn btn-outline" onClick={() => { setValues(initialValues(tab.fields)); setStatus("idle"); }}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="request-form" onSubmit={submit}>
      <div className="form-grid">
        {tab.fields.map((f) => <Field key={f.name} field={f} value={values[f.name]} onChange={onChange} />)}
      </div>
      {status === "failed" && (
        <p className="form-error">
          We couldn't send your request online. <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Send it on WhatsApp instead →</a>
        </p>
      )}
      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><i className="fa fa-whatsapp" /> WhatsApp</a>
      </div>
    </form>
  );
}
