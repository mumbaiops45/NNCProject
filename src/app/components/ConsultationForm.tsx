// "use client";
// import { useState, CSSProperties } from "react";
// import { sendEmail } from "../lib/vly";

// const TEAL = "#00C9A7";

// // Input styles
// const inp: CSSProperties = {
//   width: "100%",
//   borderRadius: 9,
//   padding: "13px 16px",
//   fontSize: 14,
//   fontFamily: "'Poppins', sans-serif",
//   outline: "none",
//   boxSizing: "border-box",
//   background: "rgba(255,255,255,.05)",
//   border: "1px solid rgba(255,255,255,.12)",
//   color: "#fff",
//   transition: "border-color .2s",
// };

// const errorInputStyle: CSSProperties = {
//   ...inp,
//   border: "1px solid #ff4444",
//   background: "rgba(255,68,68,.05)",
// };

// const errorTextStyle = {
//   color: "#ff4444",
//   fontSize: "11px",
//   marginTop: "4px",
//   fontFamily: "'Poppins', sans-serif",
// };

// const SERVICES = [
//   "CRM Development",
//   "ERP Development",
//   "Web Development",
//   "Mobile App Development",
//   "Marketing Automation",
//   "Salesforce CRM",
//   "Digital Transformation",
//   "SEO & Digital Marketing",
// ];

// // Validation functions
// const validateFirstName = (value: string): { isValid: boolean; error: string } => {
//   if (!value.trim()) return { isValid: false, error: "First name is required" };
//   if (!/^[A-Za-z\s-]+$/.test(value))
//     return { isValid: false, error: "Only alphabetic characters, spaces, and hyphens are allowed" };
//   if (value.trim().length < 2)
//     return { isValid: false, error: "First name must be at least 2 characters" };
//   return { isValid: true, error: "" };
// };

// const validateLastName = (value: string): { isValid: boolean; error: string } => {
//   if (!value.trim()) return { isValid: true, error: "" };
//   if (!/^[A-Za-z\s-]+$/.test(value))
//     return { isValid: false, error: "Only alphabetic characters, spaces, and hyphens are allowed" };
//   if (value.trim().length < 2)
//     return { isValid: false, error: "Last name must be at least 2 characters" };
//   return { isValid: true, error: "" };
// };

// const validatePhone = (value: string, countryCode: string): { isValid: boolean; error: string } => {
//   const cleaned = value.replace(/\D/g, "");
//   if (!cleaned) return { isValid: false, error: "Phone number is required" };

//   let isValid = false;
//   let errorMessage = "";

//   switch (countryCode) {
//     case "+1":
//       if (cleaned.length === 10) isValid = true;
//       else errorMessage = "Phone number must be exactly 10 digits for US/Canada";
//       break;
//     case "+44":
//       if (cleaned.length === 10 || cleaned.length === 11) isValid = true;
//       else errorMessage = "Phone number must be 10-11 digits for UK";
//       break;
//     case "+91":
//       if (cleaned.length === 10) isValid = true;
//       else errorMessage = "Phone number must be exactly 10 digits for India";
//       break;
//     default:
//       if (cleaned.length >= 8 && cleaned.length <= 15) isValid = true;
//       else errorMessage = "Phone number must be 8-15 digits";
//   }

//   return { isValid, error: errorMessage };
// };

// const validateEmail = (value: string): { isValid: boolean; error: string } => {
//   if (!value.trim()) return { isValid: false, error: "Email is required" };
//   const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
//   if (!emailRegex.test(value))
//     return { isValid: false, error: "Please enter a valid email address (e.g., name@example.com)" };
//   if (value.includes(" ")) return { isValid: false, error: "Email cannot contain spaces" };
//   return { isValid: true, error: "" };
// };

// const validateMessage = (value: string): { isValid: boolean; error: string } => {
//   if (!value.trim()) return { isValid: false, error: "Message is required" };
//   if (value.trim().length < 10)
//     return { isValid: false, error: "Message must be at least 10 characters" };
//   if (value.trim().length > 1000)
//     return { isValid: false, error: "Message must be less than 1000 characters" };

//   const alphaRegex = /[a-zA-Z]/;
//   if (!alphaRegex.test(value))
//     return { isValid: false, error: "Please provide a meaningful message with text" };

//   return { isValid: true, error: "" };
// };

// interface FormErrors {
//   fname: string;
//   lname: string;
//   phone: string;
//   email: string;
//   message: string;
// }

// interface ConsultationFormProps {
//   isMobile?: boolean;
//   isSmall?: boolean;
//   isTablet?: boolean;
//   onSuccess?: () => void;
// }

// export default function ConsultationForm({ 
//   isMobile = false, 
//   isSmall = false, 
//   isTablet = false, 
//   onSuccess 
// }: ConsultationFormProps) {
//   const [form, setForm] = useState({
//     fname: "",
//     lname: "",
//     cc: "+1",
//     phone: "",
//     email: "",
//     service: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<FormErrors>({
//     fname: "",
//     lname: "",
//     phone: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const set = (k: string) => (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const value = e.target.value;
//     setForm((f) => ({ ...f, [k]: value }));

//     if (errors[k as keyof FormErrors]) {
//       setErrors((prev) => ({ ...prev, [k]: "" }));
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {
//       fname: "",
//       lname: "",
//       phone: "",
//       email: "",
//       message: "",
//     };

//     const firstNameValidation = validateFirstName(form.fname);
//     if (!firstNameValidation.isValid) newErrors.fname = firstNameValidation.error;

//     const lastNameValidation = validateLastName(form.lname);
//     if (!lastNameValidation.isValid) newErrors.lname = lastNameValidation.error;

//     const phoneValidation = validatePhone(form.phone, form.cc);
//     if (!phoneValidation.isValid) newErrors.phone = phoneValidation.error;

//     const emailValidation = validateEmail(form.email);
//     if (!emailValidation.isValid) newErrors.email = emailValidation.error;

//     const messageValidation = validateMessage(form.message);
//     if (!messageValidation.isValid) newErrors.message = messageValidation.error;

//     setErrors(newErrors);
//     return !Object.values(newErrors).some((error) => error !== "");
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       // Format phone number
//       const formattedPhone = `${form.cc} ${form.phone}`;
      
//       // Send email using Vly
//       const emailResult = await sendEmail({
//         to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourcompany.com',
//         subject: `New Consultation Request from ${form.fname} ${form.lname}`,
//         html: `
//           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//             <h2 style="color: #00C9A7;">New Consultation Request</h2>
            
//             <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
//               <h3>Contact Information:</h3>
//               <p><strong>Name:</strong> ${form.fname} ${form.lname}</p>
//               <p><strong>Email:</strong> ${form.email}</p>
//               <p><strong>Phone:</strong> ${formattedPhone}</p>
//               <p><strong>Service Interest:</strong> ${form.service || 'Not specified'}</p>
//             </div>
            
//             <div style="margin: 20px 0;">
//               <h3>Message:</h3>
//               <p style="white-space: pre-wrap;">${form.message.replace(/\n/g, '<br />')}</p>
//             </div>
            
//             <hr />
//             <p style="color: #666; font-size: 12px;">
//               This request was submitted from the website consultation form.
//               <br />Date: ${new Date().toLocaleString()}
//             </p>
//           </div>
//         `,
//         text: `
// New Consultation Request

// Contact Information:
// -------------------
// Name: ${form.fname} ${form.lname}
// Email: ${form.email}
// Phone: ${formattedPhone}
// Service Interest: ${form.service || 'Not specified'}

// Message:
// --------
// ${form.message}

// ---
// This request was submitted from the website consultation form.
// Date: ${new Date().toLocaleString()}
//         `,
//       });

//       if (emailResult.success) {
//         setSubmitted(true);
//         setForm({
//           fname: "",
//           lname: "",
//           cc: "+1",
//           phone: "",
//           email: "",
//           service: "",
//           message: "",
//         });
//         setErrors({ fname: "", lname: "", phone: "", email: "", message: "" });
//         if (onSuccess) onSuccess();
//       } else {
//         alert("Failed to send message. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setSubmitted(false);
//     setForm({
//       fname: "",
//       lname: "",
//       cc: "+1",
//       phone: "",
//       email: "",
//       service: "",
//       message: "",
//     });
//     setErrors({ fname: "", lname: "", phone: "", email: "", message: "" });
//   };

//   const getFormPadding = () => {
//     if (isMobile) return "14px 13px";
//     if (isSmall) return "20px 18px";
//     if (isTablet) return "28px 24px";
//     return "34px 30px";
//   };

//   const getFieldGap = () => {
//     if (isMobile) return 8;
//     if (isSmall) return 9;
//     return 10;
//   };

//   return (
//     <div
//       className="hero-form-col"
//       style={{
//         background: "rgba(6,20,37,.92)",
//         border: "1px solid rgba(0,201,167,.18)",
//         borderRadius: isMobile ? 12 : 20,
//         padding: getFormPadding(),
//         backdropFilter: "blur(24px)",
//         boxShadow: "0 0 80px rgba(0,201,167,.07)",
//         position: "relative",
//         overflow: "hidden",
//         width: "100%",
//         maxWidth: isMobile || isSmall ? "100%" : isTablet ? "520px" : "430px",
//         margin: "0 auto",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           height: 2,
//           width: "60%",
//           background: "linear-gradient(90deg,transparent,#00C9A7,transparent)",
//           animation: "shimmer 3s linear infinite",
//         }}
//       />

//       <p
//         style={{
//           color: TEAL,
//           fontSize: isMobile ? 9 : 10.5,
//           fontWeight: 700,
//           letterSpacing: "0.13em",
//           textTransform: "uppercase",
//           marginBottom: 3,
//         }}
//       >
//         Free Strategy Consultation
//       </p>
//       <h3
//         style={{
//           fontWeight: 700,
//           fontSize: isMobile ? 16 : 20,
//           marginBottom: 3,
//           color: "#fff",
//         }}
//       >
//         Get a Free Consultation
//       </h3>
//       <p
//         style={{
//           color: "rgba(255,255,255,.38)",
//           fontSize: isMobile ? 10.5 : 12,
//           marginBottom: isMobile ? 10 : 18,
//         }}
//       >
//         Response within 24 hours · No commitment
//       </p>

//       {submitted ? (
//         <div style={{ textAlign: "center", padding: isMobile ? "14px 0" : "36px 0" }}>
//           <div style={{ fontSize: isMobile ? 36 : 50, marginBottom: 10 }}>✅</div>
//           <p
//             style={{
//               color: TEAL,
//               fontSize: isMobile ? 15 : 18,
//               fontWeight: 700,
//               marginBottom: 5,
//             }}
//           >
//             We&apos;ll be in touch!
//           </p>
//           <p style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 11 : 12.5 }}>
//             Expect a reply within 24 business hours.
//           </p>
//           <button
//             onClick={resetForm}
//             className="form-cta"
//             style={{ marginTop: 12, width: "auto", padding: "10px 20px" }}
//           >
//             Send Another
//           </button>
//         </div>
//       ) : (
//         <div style={{ display: "flex", flexDirection: "column", gap: getFieldGap() }}>
//           {/* First & Last Name */}
//           <div
//             className="form-grid-2"
//             style={{
//               display: "grid",
//               gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//               gap: isMobile ? 8 : 10,
//             }}
//           >
//             <div>
//               <input
//                 className="h-inp"
//                 style={errors.fname ? errorInputStyle : inp}
//                 placeholder="First Name *"
//                 value={form.fname}
//                 onChange={set("fname")}
//               />
//               {errors.fname && <div style={errorTextStyle}>{errors.fname}</div>}
//             </div>
//             <div>
//               <input
//                 className="h-inp"
//                 style={errors.lname ? errorInputStyle : inp}
//                 placeholder="Last Name"
//                 value={form.lname}
//                 onChange={set("lname")}
//               />
//               {errors.lname && <div style={errorTextStyle}>{errors.lname}</div>}
//             </div>
//           </div>

//           {/* Phone */}
//           <div
//             className="phone-grid"
//             style={{
//               display: "grid",
//               gridTemplateColumns: isMobile ? "1fr" : "88px 1fr",
//               gap: isMobile ? 8 : 10,
//             }}
//           >
//             <select
//               className="h-inp"
//               style={{ ...inp, padding: "13px 8px" }}
//               value={form.cc}
//               onChange={set("cc")}
//             >
//               <option value="+1">🇨🇦 +1 (US/Canada)</option>
//               <option value="+44">🇬🇧 +44 (UK)</option>
//               <option value="+91">🇮🇳 +91 (India)</option>
//             </select>
//             <div>
//               <input
//                 className="h-inp"
//                 style={errors.phone ? errorInputStyle : inp}
//                 placeholder="Phone Number *"
//                 value={form.phone}
//                 onChange={set("phone")}
//               />
//               {errors.phone && <div style={errorTextStyle}>{errors.phone}</div>}
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               className="h-inp"
//               style={errors.email ? errorInputStyle : inp}
//               type="email"
//               placeholder="Business Email *"
//               value={form.email}
//               onChange={set("email")}
//             />
//             {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
//           </div>

//           {/* Service */}
//           <select
//             className="h-inp"
//             style={{
//               ...inp,
//               color: form.service ? "#fff" : "rgba(255,255,255,.35)",
//             }}
//             value={form.service}
//             onChange={set("service")}
//           >
//             <option value="">Service of Interest (Optional)</option>
//             {SERVICES.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>

//           {/* Message */}
//           <div>
//             <textarea
//               className="h-inp"
//               style={
//                 errors.message
//                   ? errorInputStyle
//                   : { ...inp, resize: "vertical", minHeight: isMobile ? 60 : 76 }
//               }
//               rows={3}
//               placeholder="Tell us about your project… *"
//               value={form.message}
//               onChange={set("message")}
//             />
//             {errors.message && <div style={errorTextStyle}>{errors.message}</div>}
//           </div>

//           {/* Submit Button */}
//           <button 
//             className="form-cta" 
//             onClick={handleSubmit} 
//             disabled={isSubmitting}
//             style={{
//               opacity: isSubmitting ? 0.6 : 1,
//               cursor: isSubmitting ? "not-allowed" : "pointer"
//             }}
//           >
//             {isSubmitting ? "Sending..." : "🚀 Get Free Consultation"}
//           </button>

//           <p
//             style={{
//               textAlign: "center",
//               color: "rgba(255,255,255,.22)",
//               fontSize: isMobile ? 9 : 11,
//               marginTop: 1,
//             }}
//           >
//             🔒 100% Secure · GDPR &amp; PIPEDA Compliant
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, CSSProperties, useEffect } from "react";
import emailjs from "@emailjs/browser";

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY = "oY8s46fogw6l5q1b4";

// Input styles
const inp: CSSProperties = {
  width: "100%",
  borderRadius: 9,
  padding: "13px 16px",
  fontSize: 14,
  fontFamily: "'Poppins', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.12)",
  color: "#fff",
  transition: "border-color .2s",
};

const errorInputStyle: CSSProperties = {
  ...inp,
  border: "1px solid #ff4444",
  background: "rgba(255,68,68,.05)",
};

const errorTextStyle = {
  color: "#ff4444",
  fontSize: "11px",
  marginTop: "4px",
  fontFamily: "'Poppins', sans-serif",
};

const SERVICES = [
  "CRM Development",
  "ERP Development",
  "Web Development",
  "Mobile App Development",
  "Marketing Automation",
  "Salesforce CRM",
  "Digital Transformation",
  "SEO & Digital Marketing",
];

// Validation functions
const validateFirstName = (value: string): { isValid: boolean; error: string } => {
  if (!value.trim()) return { isValid: false, error: "First name is required" };
  if (!/^[A-Za-z\s-]+$/.test(value))
    return { isValid: false, error: "Only alphabetic characters, spaces, and hyphens are allowed" };
  if (value.trim().length < 2)
    return { isValid: false, error: "First name must be at least 2 characters" };
  return { isValid: true, error: "" };
};

const validateLastName = (value: string): { isValid: boolean; error: string } => {
  if (!value.trim()) return { isValid: true, error: "" };
  if (!/^[A-Za-z\s-]+$/.test(value))
    return { isValid: false, error: "Only alphabetic characters, spaces, and hyphens are allowed" };
  if (value.trim().length < 2)
    return { isValid: false, error: "Last name must be at least 2 characters" };
  return { isValid: true, error: "" };
};

const validatePhone = (value: string, countryCode: string): { isValid: boolean; error: string } => {
  const cleaned = value.replace(/\D/g, "");
  if (!cleaned) return { isValid: false, error: "Phone number is required" };

  let isValid = false;
  let errorMessage = "";

  switch (countryCode) {
    case "+1":
      if (cleaned.length === 10) isValid = true;
      else errorMessage = "Phone number must be exactly 10 digits for US/Canada";
      break;
    case "+44":
      if (cleaned.length === 10 || cleaned.length === 11) isValid = true;
      else errorMessage = "Phone number must be 10-11 digits for UK";
      break;
    case "+91":
      if (cleaned.length === 10) isValid = true;
      else errorMessage = "Phone number must be exactly 10 digits for India";
      break;
    default:
      if (cleaned.length >= 8 && cleaned.length <= 15) isValid = true;
      else errorMessage = "Phone number must be 8-15 digits";
  }

  return { isValid, error: errorMessage };
};

const validateEmail = (value: string): { isValid: boolean; error: string } => {
  if (!value.trim()) return { isValid: false, error: "Email is required" };
  const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  if (!emailRegex.test(value))
    return { isValid: false, error: "Please enter a valid email address (e.g., name@example.com)" };
  if (value.includes(" ")) return { isValid: false, error: "Email cannot contain spaces" };
  return { isValid: true, error: "" };
};

const validateMessage = (value: string): { isValid: boolean; error: string } => {
  if (!value.trim()) return { isValid: false, error: "Message is required" };
  if (value.trim().length < 10)
    return { isValid: false, error: "Message must be at least 10 characters" };
  if (value.trim().length > 1000)
    return { isValid: false, error: "Message must be less than 1000 characters" };

  const alphaRegex = /[a-zA-Z]/;
  if (!alphaRegex.test(value))
    return { isValid: false, error: "Please provide a meaningful message with text" };

  return { isValid: true, error: "" };
};

interface FormErrors {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  message: string;
}

interface ConsultationFormProps {
  isMobile?: boolean;
  isSmall?: boolean;
  isTablet?: boolean;
  onSuccess?: () => void;
}

export default function ConsultationForm({ 
  isMobile = false, 
  isSmall = false, 
  isTablet = false, 
  onSuccess 
}: ConsultationFormProps) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    cc: "+1",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const set = (k: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    
    // Filter input for phone field (numbers only)
    if (k === "phone") {
      value = value.replace(/\D/g, "");
    }
    
    setForm((f) => ({ ...f, [k]: value }));

    if (errors[k as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [k]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      fname: "",
      lname: "",
      phone: "",
      email: "",
      message: "",
    };

    const firstNameValidation = validateFirstName(form.fname);
    if (!firstNameValidation.isValid) newErrors.fname = firstNameValidation.error;

    const lastNameValidation = validateLastName(form.lname);
    if (!lastNameValidation.isValid) newErrors.lname = lastNameValidation.error;

    const phoneValidation = validatePhone(form.phone, form.cc);
    if (!phoneValidation.isValid) newErrors.phone = phoneValidation.error;

    const emailValidation = validateEmail(form.email);
    if (!emailValidation.isValid) newErrors.email = emailValidation.error;

    const messageValidation = validateMessage(form.message);
    if (!messageValidation.isValid) newErrors.message = messageValidation.error;

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Format phone number
      const formattedPhone = `${form.cc} ${form.phone}`;
      
      // Build EmailJS template parameters
      const templateParams = {
        first_name: form.fname,
        last_name: form.lname || "—",
        email: form.email,
        phone: formattedPhone,
        service: form.service || "Not specified",
        message: form.message,
        submission_time: new Date().toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        name: `${form.fname} ${form.lname}`.trim(),
        title: `New Consultation Request from ${form.fname} ${form.lname}`,
        reply_to: form.email,
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitted(true);
        setForm({
          fname: "",
          lname: "",
          cc: "+1",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
        setErrors({ fname: "", lname: "", phone: "", email: "", message: "" });
        if (onSuccess) onSuccess();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      fname: "",
      lname: "",
      cc: "+1",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setErrors({ fname: "", lname: "", phone: "", email: "", message: "" });
  };

  const getFormPadding = () => {
    if (isMobile) return "14px 13px";
    if (isSmall) return "20px 18px";
    if (isTablet) return "28px 24px";
    return "34px 30px";
  };

  const getFieldGap = () => {
    if (isMobile) return 8;
    if (isSmall) return 9;
    return 10;
  };

  return (
    <div
      className="hero-form-col"
      style={{
        background: "rgba(6,20,37,.92)",
        border: "1px solid rgba(0,201,167,.18)",
        borderRadius: isMobile ? 12 : 20,
        padding: getFormPadding(),
        backdropFilter: "blur(24px)",
        boxShadow: "0 0 80px rgba(0,201,167,.07)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: isMobile || isSmall ? "100%" : isTablet ? "520px" : "430px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 2,
          width: "60%",
          background: "linear-gradient(90deg,transparent,#00C9A7,transparent)",
          animation: "shimmer 3s linear infinite",
        }}
      />

      <p
        style={{
          color: TEAL,
          fontSize: isMobile ? 9 : 10.5,
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          marginBottom: 3,
        }}
      >
        Free Strategy Consultation
      </p>
      <h3
        style={{
          fontWeight: 700,
          fontSize: isMobile ? 16 : 20,
          marginBottom: 3,
          color: "#fff",
        }}
      >
        Get a Free Consultation
      </h3>
      <p
        style={{
          color: "rgba(255,255,255,.38)",
          fontSize: isMobile ? 10.5 : 12,
          marginBottom: isMobile ? 10 : 18,
        }}
      >
        Response within 24 hours · No commitment
      </p>

      {submitted ? (
        <div style={{ textAlign: "center", padding: isMobile ? "14px 0" : "36px 0" }}>
          <div style={{ fontSize: isMobile ? 36 : 50, marginBottom: 10 }}>✅</div>
          <p
            style={{
              color: TEAL,
              fontSize: isMobile ? 15 : 18,
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            We&apos;ll be in touch!
          </p>
          <p style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 11 : 12.5 }}>
            Expect a reply within 24 business hours.
          </p>
          <button
            onClick={resetForm}
            className="form-cta"
            style={{ marginTop: 12, width: "auto", padding: "10px 20px" }}
          >
            Send Another
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: getFieldGap() }}>
          {/* First & Last Name */}
          <div
            className="form-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 8 : 10,
            }}
          >
            <div>
              <input
                className="h-inp"
                style={errors.fname ? errorInputStyle : inp}
                placeholder="First Name *"
                value={form.fname}
                onChange={set("fname")}
              />
              {errors.fname && <div style={errorTextStyle}>{errors.fname}</div>}
            </div>
            <div>
              <input
                className="h-inp"
                style={errors.lname ? errorInputStyle : inp}
                placeholder="Last Name"
                value={form.lname}
                onChange={set("lname")}
              />
              {errors.lname && <div style={errorTextStyle}>{errors.lname}</div>}
            </div>
          </div>

          {/* Phone */}
          <div
            className="phone-grid"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "88px 1fr",
              gap: isMobile ? 8 : 10,
            }}
          >
            <select
              className="h-inp"
              style={{ ...inp, padding: "13px 8px" }}
              value={form.cc}
              onChange={set("cc")}
            >
              <option value="+1">🇨🇦 +1 (US/Canada)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+91">🇮🇳 +91 (India)</option>
            </select>
            <div>
              <input
                className="h-inp"
                style={errors.phone ? errorInputStyle : inp}
                placeholder="Phone Number *"
                value={form.phone}
                onChange={set("phone")}
              />
              {errors.phone && <div style={errorTextStyle}>{errors.phone}</div>}
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              className="h-inp"
              style={errors.email ? errorInputStyle : inp}
              type="email"
              placeholder="Business Email *"
              value={form.email}
              onChange={set("email")}
            />
            {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
          </div>

          {/* Service */}
          <select
            className="h-inp"
            style={{
              ...inp,
              color: form.service ? "#fff" : "rgba(255,255,255,.35)",
            }}
            value={form.service}
            onChange={set("service")}
          >
            <option value="">Service of Interest (Optional)</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Message */}
          <div>
            <textarea
              className="h-inp"
              style={
                errors.message
                  ? errorInputStyle
                  : { ...inp, resize: "vertical", minHeight: isMobile ? 60 : 76 }
              }
              rows={3}
              placeholder="Tell us about your project… *"
              value={form.message}
              onChange={set("message")}
            />
            {errors.message && <div style={errorTextStyle}>{errors.message}</div>}
          </div>

          {/* Submit Button */}
          <button 
            className="form-cta" 
            onClick={handleSubmit} 
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer"
            }}
          >
            {isSubmitting ? "Sending..." : "🚀 Get Free Consultation"}
          </button>

          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,.22)",
              fontSize: isMobile ? 9 : 11,
              marginTop: 1,
            }}
          >
            🔒 100% Secure · GDPR &amp; PIPEDA Compliant
          </p>
        </div>
      )}
    </div>
  );
}