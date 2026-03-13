"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ContactPage() {

const [openIndex,setOpenIndex] = useState<number | null>(null);

const toggleFAQ=(i:number)=>{
setOpenIndex(openIndex === i ? null : i);
};

const faqs=[
{
q:"Do you work with businesses outside of India?",
a:"Yes. NNC Digital Solutions works with Canada, USA and UK companies."
},
{
q:"What happens after I submit the contact form?",
a:"Our consultant reviews your submission and responds within 24 business hours."
},
{
q:"Is the initial consultation free?",
a:"Yes. Our first consultation is completely free with no commitment."
},
{
q:"Who is behind NNC Digital Solutions?",
a:"NNC Digital is the international arm of Nakshatra Namaha Creations Pvt Ltd."
}
];

return(

<>
<Navbar/>

{/* HERO */}

<section className="sec-hero text-center">

<div className="sec-content-sm">

<div className="section-badge">
<span className="section-badge__dot"/>
<span className="section-badge__text">Contact</span>
</div>

<h1 className="section-h2">
Let's Build Something <span className="grad-text">Exceptional Together</span>
</h1>

<p className="text-muted">
Whether you have a defined project or just a problem to solve —
we respond within 24 hours with honest advice.
</p>

</div>

</section>


{/* CONTACT + FORM */}

<section className="sec-mid">

<div className="sec-content cf-grid">

{/* CONTACT DETAILS */}

<div className="card p-8">

<h2 className="section-h2">Get in Touch</h2>

<div className="space-y-6 text-muted">

<div>
<p className="teal">Canada</p>
<p>+1 647-XXX-XXXX</p>
</div>

<div>
<p className="teal">USA</p>
<p>+1 631-XXX-XXXX</p>
</div>

<div>
<p className="teal">UK</p>
<p>+44 20-XXXX-XXXX</p>
</div>

<div>
<p className="teal">India HQ</p>
<p>+91 9900566466</p>
</div>

<div>
<p className="teal">Email</p>
<p>hello@nncdigital.com</p>
<p>info@nakshatranamahacreations.com</p>
</div>

</div>

</div>


{/* FORM */}

<div className="card p-8">

<h3 className="text-xl font-semibold mb-6">Share Your Project Idea</h3>

<form className="space-y-4">

<div className="cf-name">

<input className="fi" placeholder="First Name"/>
<input className="fi" placeholder="Last Name"/>

</div>


<div className="phone-row">

<select className="fi fi-dial">
<option>+1</option>
<option>+44</option>
<option>+91</option>
</select>

<input className="fi" placeholder="Phone"/>

</div>


<input className="fi" placeholder="Business Email"/>

<input className="fi" placeholder="Company Name"/>


<select className="fi fi-select">

<option>Service of Interest</option>
<option>CRM Development</option>
<option>ERP Development</option>
<option>Web Development</option>
<option>Mobile App Development</option>

</select>


<textarea
className="fi fi-textarea"
placeholder="Project Description"
/>


<select className="fi fi-select">

<option>Preferred Timeline</option>
<option>Immediately</option>
<option>1-3 Months</option>
<option>3-6 Months</option>

</select>


<button className="btn-teal w-full">
Submit
</button>

<p className="text-dim text-sm text-center">
Response within 24 hours • No commitment required
</p>

</form>

</div>

</div>

</section>


{/* FAQ */}

<section className="sec-grad-n1n2-n1">

<div className="sec-content-sm">

<div className="sec-header">

<h2 className="section-h2">
Before You Reach Out — Common Questions
</h2>

</div>

<div className="space-y-4">

{faqs.map((faq,i)=>(
<div key={i} className="faq-item">

<button
onClick={()=>toggleFAQ(i)}
className="faq-item__q w-full text-left">

<span className="faq-item__text">
{faq.q}
</span>

<span className="faq-item__icon">
{openIndex===i?"−":"+"}
</span>

</button>

{openIndex===i &&(
<div className="faq-item__a">
<p>{faq.a}</p>
</div>
)}

</div>
))}

</div>

</div>

</section>


</>

);
}