"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useState, useEffect } from "react";

const T = "#00C9A7";
const P = "#8B5CF6";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// Blog post data with full content
const BLOG_POSTS = {
  "crm-implementation-guide": {
    id: 1,
    category: "CRM",
    color: T,
    title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "CRM implementation strategy meeting with team",
    author: {
      name: "Sarah Chen",
      role: "CRM Solutions Architect",
      bio: "Sarah has led 25+ CRM implementations for businesses across North America and Europe. She specializes in helping mid-market companies select and deploy CRM solutions that drive real business results."
    },
    content: {
      introduction: "Implementing a CRM system is one of the most significant technology investments a growing business can make. Yet, according to industry studies, nearly 30% of CRM implementations fail to deliver the expected ROI. The difference between success and failure often comes down to preparation, people, and process — not the software itself.",
      sections: [
        {
          title: "Phase 1: Requirements Gathering",
          content: "Before evaluating any CRM platform, you need to understand exactly what your business needs. This means interviewing key stakeholders across sales, marketing, customer service, and leadership. Document current workflows, pain points, and desired outcomes. Create user personas and map out customer journeys to identify where CRM can make the biggest impact.\n\nFor Canadian and UK businesses, pay special attention to regional requirements like multi-currency support, language localization, and compliance with local data protection laws. This phase typically takes 2-4 weeks depending on business complexity."
        },
        {
          title: "Phase 2: Platform Selection",
          content: "With requirements documented, you can evaluate whether a custom-built CRM or an off-the-shelf solution makes more sense for your business.\n\n**Custom CRM**: Offers maximum flexibility and can be built exactly to your specifications. Ideal for businesses with unique workflows or those operating in specialized industries. Development typically takes 3-6 months.\n\n**Off-the-shelf (Salesforce, HubSpot, etc.)**: Faster to deploy (1-3 months) with proven functionality. May require customization and can become expensive as you add users and features.\n\n**Hybrid approach**: Start with a platform and extend it with custom development where needed."
        },
        {
          title: "Phase 3: Data Migration",
          content: "Clean, accurate data is the foundation of any successful CRM. This phase involves:\n\n• Auditing existing data sources (spreadsheets, legacy systems, email)\n• Removing duplicates and correcting errors\n• Standardizing formats (phone numbers, addresses, dates)\n• Establishing data governance policies\n• Mapping fields from old systems to new CRM\n• Running test migrations\n\nPlan for at least 2-3 test migrations before the final cutover. Data migration typically takes 2-4 weeks."
        },
        {
          title: "Phase 4: Integration",
          content: "Your CRM shouldn't exist in isolation. Key integrations to consider:\n\n• **Email and Calendar**: Sync communications automatically\n• **Accounting Software**: Connect invoices and payments to customer records\n• **Marketing Automation**: Sync leads and campaign data\n• **Customer Support**: Link support tickets to customer profiles\n• **E-commerce**: Import order history and purchase behavior\n\nMap out data flows between systems and establish synchronization rules. Integration work typically takes 3-6 weeks depending on complexity."
        },
        {
          title: "Phase 5: Training & Adoption",
          content: "The most common reason CRM implementations fail is low user adoption. To drive adoption:\n\n• Develop role-based training programs (sales vs. support vs. management)\n• Identify CRM champions within each team\n• Set clear expectations for usage\n• Track adoption metrics (logins, data entry, report usage)\n• Celebrate wins and share success stories\n• Provide ongoing support and refresher training\n\nPlan for a 30-60-90 day adoption program with regular check-ins."
        }
      ],
      conclusion: "Successful CRM implementation is a journey, not a destination. By following this structured approach and focusing on people and processes as much as technology, growing businesses in Canada and the UK can build CRM systems that scale with them for years to come. Remember that the goal isn't just to implement software—it's to improve how you understand, serve, and grow relationships with your customers.",
      keyTakeaways: [
        "Start with requirements, not software selection",
        "Choose between custom, off-the-shelf, or hybrid based on your unique needs",
        "Clean data is critical—invest time in migration planning",
        "Integrations determine whether CRM becomes a hub or a silo",
        "User adoption makes or breaks implementation success"
      ]
    },
    relatedPosts: [2, 3, 5]
  },
  "erp-vs-crm": {
    id: 2,
    category: "Strategy",
    color: P,
    title: "ERP vs CRM: Which Does Your Business Need First?",
    readTime: "5 min read",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "ERP vs CRM comparison chart on laptop",
    author: {
      name: "Michael Roberts",
      role: "Senior Business Strategist",
      bio: "Michael has advised 100+ businesses on digital transformation strategy, helping them sequence technology investments for maximum ROI and minimum disruption."
    },
    content: {
      introduction: "One of the most common questions we hear from growing businesses is whether to implement CRM or ERP first. The answer depends on your business model, growth stage, and biggest operational pain points. Making the right choice can accelerate growth; choosing wrong can create costly inefficiencies.",
      sections: [
        {
          title: "When to Choose CRM First",
          content: "CRM (Customer Relationship Management) should be your priority if:\n\n• Your sales team lacks visibility into their pipeline\n• Leads are falling through the cracks\n• You have no centralized customer data\n• Marketing can't measure campaign ROI\n• Customer service is reactive instead of proactive\n\nCRM first is typically right for sales-driven organizations, professional services firms, and B2B companies where relationships drive revenue. A CRM helps you understand customer interactions, forecast accurately, and build lasting relationships."
        },
        {
          title: "When to Choose ERP First",
          content: "ERP (Enterprise Resource Planning) should come first if:\n\n• You're struggling with inventory management\n• Financial reporting is manual and error-prone\n• Supply chain visibility is limited\n• You need better cost control across departments\n• Multiple systems don't talk to each other\n\nProduct-based businesses, manufacturers, distributors, and companies with complex operations usually benefit from ERP first. An ERP gives you a single source of truth for operations, finance, and supply chain."
        },
        {
          title: "The Integration Point",
          content: "Most businesses eventually need both systems working together. The key integration point is when customer data needs to flow seamlessly into financial systems—quotes becoming orders, orders becoming invoices, invoices becoming revenue.\n\nSigns you need both:\n\n• Sales makes promises operations can't keep\n• You can't track profitability by customer or project\n• Customer service lacks visibility into order status\n• Financial reporting requires manual data consolidation\n\nWhen this happens, integration becomes critical. Modern platforms can connect CRM and ERP through APIs, creating a unified view of your business."
        },
        {
          title: "A Phased Approach",
          content: "For many growing businesses, a phased approach makes sense:\n\n**Phase 1**: Implement CRM to organize customer data and sales processes\n**Phase 2**: Add basic ERP functionality (invoicing, inventory if needed)\n**Phase 3**: Full ERP implementation with deep integration\n\nThis approach spreads out investment and allows teams to adapt gradually. It also means you're not trying to transform everything at once."
        }
      ],
      conclusion: "There's no one-size-fits-all answer, but by understanding your core business model and biggest pain points, you can make an informed decision about which system to implement first—and plan for the integration that will eventually connect them. The right sequence can accelerate growth; the wrong sequence creates technical debt. When in doubt, start with the area causing the most pain or limiting growth the most.",
      keyTakeaways: [
        "CRM first for sales-driven, relationship-based businesses",
        "ERP first for product-based, operations-heavy businesses",
        "Most companies eventually need both integrated",
        "A phased approach spreads investment and risk",
        "Start with your biggest pain point"
      ]
    },
    relatedPosts: [1, 3, 7]
  },
  "custom-crm-cost": {
    id: 3,
    category: "CRM",
    color: T,
    title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
    readTime: "7 min read",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2065&auto=format&fit=crop",
    imageAlt: "Cost analysis and financial planning for CRM",
    author: {
      name: "David Kumar",
      role: "Technical Director",
      bio: "David has delivered 50+ custom CRM projects across North America and Europe, helping businesses maximize ROI through smart scoping and phased delivery."
    },
    content: {
      introduction: "One of the first questions businesses ask about custom CRM is 'how much will it cost?' The honest answer is that it varies widely based on your requirements, but understanding what drives costs helps you make better decisions and avoid surprises.",
      sections: [
        {
          title: "Cost Drivers",
          content: "The main factors affecting custom CRM development cost:\n\n**1. Number of Users**: More users means more licenses, more complex permission structures, and potentially different interface requirements.\n\n**2. Complexity of Workflows**: Simple contact management is straightforward. Complex approval chains, conditional logic, and multi-step processes require more development time.\n\n**3. Integration Requirements**: Connecting to existing systems (accounting, marketing, support) adds complexity. Each integration typically requires 2-4 weeks of development.\n\n**4. Mobile Access**: Native mobile apps cost significantly more than responsive web interfaces. Consider whether your team truly needs offline access or just mobile-friendly web views.\n\n**5. Data Migration**: Cleaning and migrating data from spreadsheets or legacy systems can be surprisingly time-consuming. Budget for data audit, cleanup, and validation.\n\n**6. Compliance Requirements**: GDPR, PIPEDA, and industry-specific regulations (healthcare, finance) add security and documentation requirements that increase costs.\n\n**7. Reporting and Analytics**: Custom dashboards, real-time reports, and complex data visualizations require additional development."
        },
        {
          title: "Typical Price Ranges (CAD/GBP)",
          content: "For Canadian and UK businesses, custom CRM development typically falls into these ranges:\n\n**Basic CRM (£30,000-£50,000 / $50,000-$85,000 CAD)**\n• Contact management\n• Basic pipeline tracking\n• 1-2 integrations\n• Up to 25 users\n• Standard reporting\n\n**Mid-Market CRM (£50,000-£100,000 / $85,000-$170,000 CAD)**\n• Custom workflows\n• Multiple integrations\n• Advanced reporting\n• Mobile access\n• 25-100 users\n• Training and documentation\n\n**Enterprise CRM (£100,000+ / $170,000+ CAD)**\n• Complex custom functionality\n• Multiple system integrations\n• Custom mobile apps\n• Advanced security features\n• 100+ users\n• Ongoing support and maintenance"
        },
        {
          title: "Hidden Costs to Consider",
          content: "Beyond the initial development, budget for:\n\n• **Hosting**: £100-£1,000+ monthly depending on users and data\n• **Maintenance**: 15-20% of build cost annually for updates and support\n• **Training**: £2,000-£10,000 for materials and sessions\n• **Future Enhancements**: Budget for ongoing improvements\n• **Internal Resources**: Time your team spends on requirements, testing, and adoption"
        },
        {
          title: "How to Scope Cost-Effectively",
          content: "The most cost-effective approach is to start with a well-defined MVP (Minimum Viable Product) that addresses your core needs, then iterate based on user feedback and business growth.\n\n**MVP-first approach**:\n1. Identify the 20% of features that deliver 80% of value\n2. Build and launch quickly (2-4 months)\n3. Gather real user feedback\n4. Plan iterative improvements\n\nThis approach reduces initial investment, delivers value faster, and ensures you're building what users actually need."
        }
      ],
      conclusion: "Custom CRM is a significant investment, but for many businesses, it's the right choice—delivering exactly the functionality you need without paying for features you don't use. By understanding cost drivers and taking an MVP-first approach, you can build a system that scales with your business while managing budget effectively.",
      keyTakeaways: [
        "Costs range from £30k-£150k+ depending on complexity",
        "Main factors: users, workflows, integrations, compliance",
        "Budget 15-20% annually for ongoing support",
        "Start with MVP to reduce risk and initial investment",
        "Get detailed quotes from multiple developers"
      ]
    },
    relatedPosts: [1, 2, 4]
  },
  "gdpr-pipeda-guide": {
    id: 4,
    category: "Compliance",
    color: "#FF6B6B",
    title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
    readTime: "9 min read",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Data protection and GDPR compliance concept",
    author: {
      name: "Emma Watson",
      role: "Data Protection Officer",
      bio: "Emma specializes in data protection for technology companies, advising clients on GDPR, PIPEDA, and emerging privacy regulations worldwide."
    },
    content: {
      introduction: "Data protection regulations are no longer optional considerations—they're fundamental requirements that shape how CRMs must be built. For businesses operating across Canada, the UK, and the USA, understanding the interplay between PIPEDA, GDPR, and emerging US state laws is essential for compliance and customer trust.",
      sections: [
        {
          title: "Understanding the Regulations",
          content: "**GDPR (General Data Protection Regulation)** applies to any business handling EU citizen data, regardless of where the business is located. Key principles: lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality.\n\n**PIPEDA (Personal Information Protection and Electronic Documents Act)** is Canada's federal privacy law. It gives individuals control over how their personal information is collected, used, and disclosed.\n\n**CCPA/CPRA (California)** affects businesses with California customers. Similar to GDPR in many ways but with specific differences in consent requirements and consumer rights."
        },
        {
          title: "Key Requirements Your CRM Must Meet",
          content: "Both GDPR and PIPEDA require your CRM to support:\n\n**Lawful Basis for Processing**: Track why you're processing each individual's data (consent, contract, legitimate interest, etc.)\n\n**Consent Management**: Record when, how, and what consent was given. Make it easy to withdraw consent.\n\n**Data Minimization**: Only collect what you actually need. Design forms and data models accordingly.\n\n**Purpose Limitation**: Data collected for one purpose can't be used for another without additional consent.\n\n**Accuracy**: Provide tools for customers to update their information easily.\n\n**Storage Limitation**: Automatically archive or delete data after defined periods.\n\n**Security**: Encrypt sensitive data, maintain access logs, and support breach detection."
        },
        {
          title: "Data Subject Rights",
          content: "Your CRM must enable you to respond to data subject requests within required timeframes (usually 30 days):\n\n• **Right to Access**: Export all data held about an individual in a portable format\n• **Right to Rectification**: Allow easy correction of inaccurate data\n• **Right to Erasure** ('Right to be Forgotten'): Permanently delete all personal data\n• **Right to Restriction**: Temporarily limit processing while disputes are resolved\n• **Right to Data Portability**: Export data in a machine-readable format\n• **Right to Object**: Stop processing for specific purposes (like marketing)\n\nBuild features that allow you to quickly find, export, and delete customer data across all systems."
        },
        {
          title: "Cross-Border Data Transfer",
          content: "For businesses operating across Canada, UK, and USA, data transfer mechanisms are critical:\n\n**UK and EU**: Transfers require adequacy decisions, standard contractual clauses, or binding corporate rules.\n\n**Canada**: PIPEDA allows transfers but holds businesses responsible for protecting data even when processed by third parties.\n\n**USA**: No federal privacy law yet, but state laws (CCPA, CPA, etc.) create a patchwork of requirements.\n\nYour CRM architecture should account for data residency requirements—keeping EU data in the EU, Canadian data in Canada, etc.—and include appropriate safeguards for international transfers."
        }
      ],
      conclusion: "Building compliance into your CRM from day one is far more efficient than retrofitting it later. Work with legal counsel to understand your specific obligations and ensure your technical architecture supports them. Remember that compliance isn't just about avoiding fines—it's about building trust with customers who increasingly care about how their data is handled.",
      keyTakeaways: [
        "Build for privacy by design, not retrofitted compliance",
        "Support all data subject rights (access, erasure, portability)",
        "Track consent and lawful basis for processing",
        "Consider data residency requirements",
        "Document everything for regulators"
      ]
    },
    relatedPosts: [1, 3, 6]
  },
  "sales-automation": {
    id: 5,
    category: "Automation",
    color: "#10B981",
    title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
    readTime: "6 min read",
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "Sales automation workflow diagram",
    author: {
      name: "James Wilson",
      role: "Marketing Automation Lead",
      bio: "James has built marketing automation systems for B2B and B2C companies across North America, focusing on measurable ROI and genuine customer engagement."
    },
    content: {
      introduction: "Speed-to-lead is critical—research shows following up within 5 minutes increases conversion rates by 9x. But automation shouldn't mean robotic, impersonal communication. The challenge is creating efficiency without sacrificing the human touch that builds relationships and closes deals.",
      sections: [
        {
          title: "Immediate Response Automation",
          content: "Set up automated responses that acknowledge receipt and set expectations. The key is making these feel personal:\n\n**Do**:\n• Use personalization tokens creatively ('Thanks for requesting info about [topic], [first name]')\n• Reference specific form fields or website behavior ('I see you were looking at our enterprise plan')\n• Set clear next steps ('I'll review your requirements and follow up by [time]')\n• Include your photo and a genuine signature\n\n**Don't**:\n• Use generic templates that sound like form letters\n• Pretend to be human ('Thanks for your interest! I'm reviewing your info...' from a bot)\n• Make promises you can't keep about response times"
        },
        {
          title: "Lead Scoring and Routing",
          content: "Not all leads are equal. Automate the process of identifying hot leads and routing them appropriately:\n\n**Lead Scoring Criteria**:\n• Company size and industry fit\n• Engagement level (pages visited, time on site, content downloaded)\n• Budget indicators (pricing page visits, specific feature inquiries)\n• Timeline (mentioned in form or implied by behavior)\n\n**Routing Rules**:\n• Hot leads → Immediate sales rep assignment with notification\n• Warm leads → Add to nurture sequence with sales follow-up in 24-48 hours\n• Cold leads → Long-term nurture with educational content\n\nThis ensures your best leads get human attention quickly while others receive appropriate nurturing."
        },
        {
          title: "Nurture Sequences That Feel Personal",
          content: "For leads not ready to buy, automated nurture sequences keep you top-of-mind. The key is providing genuine value:\n\n**Effective Nurture Content**:\n• Industry insights and trends\n• Case studies relevant to their business type\n• Helpful guides and how-tos\n• Invitations to webinars or events\n• Customer success stories\n\n**Sequence Best Practices**:\n• Space communications appropriately (don't overwhelm)\n• Vary content types (articles, videos, infographics)\n• Track engagement and adjust based on behavior\n• Include clear, low-pressure calls-to-action\n• Make it easy to opt out or change preferences"
        },
        {
          title: "The Human Handoff",
          content: "When a lead is ready for human contact, make the transition seamless:\n\n**Provide context**: Ensure sales reps see all automated interactions before reaching out\n\n**Reference the journey**: 'I noticed you've been reading our guides on [topic]—was there anything specific you'd like to discuss?'\n\n**Add value immediately**: Don't just check in—share something relevant to their interests\n\n**Track the transition**: Monitor which automated touchpoints led to human conversations"
        }
      ],
      conclusion: "The most effective sales automation feels personal because it's triggered by specific behaviors and delivers genuinely useful content. Test and refine continuously to find the right balance for your audience. Remember that automation should enhance human relationships, not replace them.",
      keyTakeaways: [
        "Speed matters—follow up within minutes",
        "Personalize everything, even automated messages",
        "Score and route leads based on behavior",
        "Provide value in nurture sequences, not just sales pitches",
        "Make human handoffs seamless and contextual"
      ]
    },
    relatedPosts: [1, 2, 6]
  },
  "whatsapp-crm-integration": {
    id: 6,
    category: "CRM",
    color: T,
    title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
    readTime: "7 min read",
    date: "February 15, 2025",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "WhatsApp integration on smartphone showing CRM",
    author: {
      name: "Priya Patel",
      role: "Digital Transformation Lead",
      bio: "Priya specializes in digital transformation for customer-facing operations, helping businesses leverage new channels to improve customer experience and operational efficiency."
    },
    content: {
      introduction: "With over 2 billion users worldwide, WhatsApp has become an essential channel for customer communication. In markets like the UK and Canada, where WhatsApp penetration exceeds 80% among adults, integrating WhatsApp with your CRM opens up powerful possibilities for personalized, real-time engagement that meets customers where they already are.",
      sections: [
        {
          title: "Why WhatsApp Integration Matters",
          content: "WhatsApp's dominance in personal communication is now extending to business:\n\n• **High open rates**: 98% of messages are read within 3 minutes\n• **Rich media**: Share images, videos, documents, and location\n• **Two-way communication**: Customers can ask questions and get responses\n• **Familiar experience**: No new apps to download or learn\n• **End-to-end encryption**: Built-in security for sensitive conversations\n\nFor businesses in Canada and the UK, where WhatsApp is the dominant messaging platform, integration with your CRM creates a seamless customer experience across channels."
        },
        {
          title: "Key Use Cases",
          content: "Canadian and UK businesses are using WhatsApp CRM integration for:\n\n**Sales**:\n• Respond to inquiries instantly\n• Share product catalogs and pricing\n• Send quotes and proposals\n• Close deals via WhatsApp Pay where available\n\n**Customer Service**:\n• Provide real-time support\n• Send appointment reminders\n• Share order confirmations and tracking\n• Resolve issues without phone calls\n\n**Marketing**:\n• Broadcast promotions (with consent)\n• Share content and updates\n• Run WhatsApp click-to-chat ads\n• Nurture leads with personalized messages\n\n**Operations**:\n• Internal team communication\n• Supplier coordination\n• Field service updates"
        },
        {
          title: "Technical Implementation",
          content: "WhatsApp Business API requires approval from Meta and has specific requirements:\n\n**Prerequisites**:\n• Verified business with Meta Business Manager\n• Phone number not already registered with WhatsApp\n• Compliance with WhatsApp Business Policy\n• Use of a Business Solution Provider (BSP) for API access\n\n**Integration Options**:\n• **Direct API**: Build your own integration (requires technical resources)\n• **BSP Platform**: Use a provider like Twilio, MessageBird, or Zendesk\n• **CRM Native**: Some CRMs offer built-in WhatsApp integration\n\n**Key Features to Implement**:\n• Two-way message syncing with contact records\n• Message templates for common responses\n• Automated triggers based on CRM events\n• Conversation history visibility\n• Opt-in/opt-out management"
        },
        {
          title: "Best Practices for Success",
          content: "**Get consent first**: WhatsApp has strict anti-spam policies. Always get explicit opt-in before messaging.\n\n**Use templates strategically**: Pre-approved message templates ensure compliance and consistency, but personalize them when possible.\n\n**Set response expectations**: Use away messages and chatbots to manage expectations outside business hours.\n\n**Train your team**: Ensure agents understand WhatsApp etiquette—it's more casual than email but still professional.\n\n**Measure what matters**: Track response times, resolution rates, and customer satisfaction by channel."
        }
      ],
      conclusion: "WhatsApp CRM integration represents a significant opportunity to meet customers where they already spend time. Start with a specific use case (like order notifications or customer support), measure results, and expand based on customer response. The businesses that get this right will build deeper, more convenient relationships with their customers.",
      keyTakeaways: [
        "98% of WhatsApp messages are read within 3 minutes",
        "Use cases span sales, service, marketing, and operations",
        "Implementation requires Meta approval and BSP partnership",
        "Always get explicit opt-in before messaging",
        "Start small with one use case and expand"
      ]
    },
    relatedPosts: [1, 4, 5]
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];
  
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <>
        <Navbar />
        <div style={{ 
          padding: "120px 20px 60px", 
          textAlign: "center", 
          background: N2,
          minHeight: "100vh",
          color: "#fff"
        }}>
          <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Article Not Found</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "30px" }}>
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/blog" style={{
            padding: "12px 30px",
            background: T,
            color: "#000",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
            display: "inline-block"
          }}>
            Back to Blog
          </Link>
        </div>
      </>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>{post.title} | NNC Digital Blog</title>
        <meta name="description" content={post.content.introduction.substring(0, 160)} />
      </Head>

      <Navbar />

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .blog-detail {
          background: ${N2};
          min-height: 100vh;
          padding-top: 70px;
        }

        /* Hero Section - Fixed for mobile */
        .detail-hero {
          position: relative;
          height: clamp(400px, 70vh, 600px);
          width: 100%;
          overflow: hidden;
          margin-top: 0;
          display: flex;
          align-items: flex-end;
        }

        .detail-hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          z-index: 1;
        }

        .detail-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, ${N2} 0%, ${N2}80 50%, transparent 100%);
          z-index: 2;
        }

        .detail-hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: clamp(30px, 6vw, 60px) clamp(20px, 5vw, 48px);
          color: #fff;
          max-width: 1200px;
          margin: 0 auto;
          transform: translateY(0);
        }

        .detail-category {
          display: inline-block;
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
          background: ${post.color}30;
          border: 1px solid ${post.color}60;
          color: #fff;
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .detail-title {
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          max-width: 900px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.5);
          color: #fff;
          word-break: break-word;
        }

        .detail-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          color: #fff;
          font-size: 14px;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(8px);
          padding: 12px 20px;
          border-radius: 50px;
          width: fit-content;
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .detail-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-meta-item span {
          color: ${T};
          font-weight: 600;
        }

        /* Main Content */
        .detail-container {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px);
        }

        /* Author Section */
        .author-section {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 28px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .author-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${post.color}, ${P});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 8px 20px ${post.color}40;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .author-role {
          color: ${T};
          font-size: 14px;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .author-bio {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          line-height: 1.6;
        }

        /* Introduction */
        .detail-introduction {
          font-size: clamp(17px, 2vw, 19px);
          line-height: 1.8;
          color: rgba(255,255,255,0.95);
          margin-bottom: 48px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-weight: 400;
        }

        /* Sections */
        .detail-section {
          margin-bottom: 56px;
        }

        .detail-section h2 {
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: ${post.color};
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .detail-section p {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255,255,255,0.85);
          margin-bottom: 20px;
        }

        .detail-section ul, .detail-section ol {
          margin: 24px 0;
          padding-left: 28px;
          color: rgba(255,255,255,0.85);
        }

        .detail-section li {
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .detail-section strong {
          color: ${T};
        }

        /* Conclusion */
        .detail-conclusion {
          margin: 56px 0;
          padding: 36px;
          background: rgba(0,201,167,0.05);
          border-left: 4px solid ${T};
          border-radius: 16px;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255,255,255,0.95);
          font-style: italic;
        }

        /* Key Takeaways */
        .key-takeaways {
          margin: 56px 0;
          padding: 36px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
        }

        .key-takeaways h3 {
          font-size: 24px;
          font-weight: 700;
          color: ${T};
          margin-bottom: 28px;
        }

        .takeaway-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.6;
        }

        .takeaway-bullet {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${T}20;
          border: 2px solid ${T};
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Share Section */
        .share-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin: 56px 0 32px;
          padding: 28px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .share-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .share-button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .share-button:hover {
          background: ${T};
          border-color: ${T};
          transform: translateY(-3px);
          box-shadow: 0 10px 20px ${T}30;
        }

        .copy-button {
          padding: 10px 24px;
          border-radius: 40px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .copy-button:hover {
          background: rgba(255,255,255,0.1);
        }

        .copy-button.copied {
          background: ${T}30;
          border-color: ${T};
          color: ${T};
        }

        /* Back Button */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 15px;
          margin-bottom: 32px;
          transition: all 0.2s ease;
          padding: 8px 16px;
          background: rgba(255,255,255,0.03);
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .back-button:hover {
          color: ${T};
          gap: 15px;
          background: rgba(255,255,255,0.05);
          border-color: ${T}40;
        }

        /* Mobile Responsive Fixes */
        @media (max-width: 768px) {
          .blog-detail {
            padding-top: 60px;
          }

          .detail-hero {
            height: 450px;
            align-items: flex-end;
          }

          .detail-hero-content {
            padding: 20px;
          }

          .detail-category {
            font-size: 12px;
            padding: 6px 16px;
            margin-bottom: 12px;
          }

          .detail-title {
            font-size: 28px;
            line-height: 1.3;
            margin-bottom: 16px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.6);
          }

          .detail-meta {
            font-size: 13px;
            padding: 10px 16px;
            gap: 16px;
            flex-wrap: wrap;
            width: 100%;
            justify-content: flex-start;
          }

          .detail-meta-item {
            gap: 6px;
          }

          .author-section {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            gap: 16px;
          }
          
          .share-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .share-buttons {
            width: 100%;
            justify-content: center;
          }

          .copy-button {
            width: 100%;
            justify-content: center;
          }

          .detail-conclusion {
            padding: 24px;
            font-size: 16px;
          }

          .key-takeaways {
            padding: 24px;
          }

          .detail-section h2 {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .detail-hero {
            height: 400px;
          }

          .detail-title {
            font-size: 24px;
          }

          .detail-meta {
            flex-direction: column;
            align-items: flex-start;
            border-radius: 20px;
            gap: 10px;
          }

          .detail-meta-item {
            width: 100%;
          }

          .detail-container {
            padding: 30px 16px;
          }

          .detail-introduction {
            font-size: 16px;
            margin-bottom: 32px;
          }

          .detail-section {
            margin-bottom: 40px;
          }
        }
      `}</style>

      <div className="blog-detail">
        {/* Hero Section - Now showing full image with heading */}
        <div className="detail-hero">
          <img 
            src={post.image} 
            alt={post.imageAlt}
            className="detail-hero-image"
          />
          <div className="detail-hero-overlay" />
          <div className="detail-hero-content">
            <span className="detail-category">{post.category}</span>
            <h1 className="detail-title">{post.title}</h1>
            <div className="detail-meta">
              <div className="detail-meta-item">
                <span>📅</span> {post.date}
              </div>
              <div className="detail-meta-item">
                <span>⏱️</span> {post.readTime}
              </div>
              <div className="detail-meta-item">
                <span>👤</span> {post.author.name}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="detail-container">
          {/* Back Button */}
          <Link href="/blog" className="back-button">
            ← Back to all articles
          </Link>

          {/* Author Section */}
          <div className="author-section">
            <div className="author-avatar">
              {post.author.name.charAt(0)}
            </div>
            <div className="author-info">
              <div className="author-name">{post.author.name}</div>
              <div className="author-role">{post.author.role}</div>
              <div className="author-bio">{post.author.bio}</div>
            </div>
          </div>

          {/* Introduction */}
          <div className="detail-introduction">
            {post.content.introduction}
          </div>

          {/* Content Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index} className="detail-section">
              <h2>{section.title}</h2>
              {section.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ))}

          {/* Conclusion */}
          <div className="detail-conclusion">
            {post.content.conclusion}
          </div>

          {/* Key Takeaways */}
          {post.content.keyTakeaways && (
            <div className="key-takeaways">
              <h3>Key Takeaways</h3>
              {post.content.keyTakeaways.map((takeaway, index) => (
                <div key={index} className="takeaway-item">
                  <div className="takeaway-bullet" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          )}

          {/* Share Section */}
          <div className="share-section">
            <div className="share-buttons">
              <button 
                className="share-button"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                aria-label="Share on Twitter"
              >
                𝕏
              </button>
              <button 
                className="share-button"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                aria-label="Share on LinkedIn"
              >
                in
              </button>
              <button 
                className="share-button"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                aria-label="Share on Facebook"
              >
                f
              </button>
            </div>
            <button 
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {copied ? '✓ Copied!' : '🔗 Copy link'}
            </button>
          </div>

          {/* Reading Time Note */}
          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.4)', 
            fontSize: '13px',
            marginTop: '20px' 
          }}>
            {post.readTime} · Published {post.date}
          </p>
        </div>
      </div>
    </>
  );
}