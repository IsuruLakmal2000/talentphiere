import React from "react";
import GuideStoryTemplate from "./GuideStoryTemplate";

// Example assets (update paths based on your structure)
import nikLogo from "../../assets/guides/nick.jpg";
import heroImage from "../../assets/guides/nick.jpg";
import workflowImage from "../../assets/guides/nick.jpg";
import slackImage from "../../assets/guides/nick.jpg";
import dashboardImage from "../../assets/guides/nick.jpg";

const NikSharmaPlaybook: React.FC = () => {
  return (
    <GuideStoryTemplate
      title="Nik Sharma’s Unconventional EA+ Playbook"
      authorName="Nik Sharma"
      authorRole="Founder & CEO, Sharma Brands"
      companyLogo={nikLogo}
      heroImage={heroImage}
      intro="Nik Sharma, often dubbed the ‘DTC guy,’ has built a reputation for scaling brands like HOP WTR and Feastables. Behind his sharp execution lies an unconventional partnership with his Executive Assistant — not a traditional EA, but what he calls an EA+. Here’s how this next-level collaboration model keeps his operation lean, fast, and unstoppable."
      sections={[
        {
          heading: "1. The EA+ Mindset: Not Just Admin Work",
          content:
            "In Nik’s system, the EA+ isn’t simply scheduling calls or booking travel. They’re a strategic partner, deeply embedded in the business logic. They manage workflows, gather key data before meetings, and even make operational decisions under Nik’s framework.",
          tips: [
            "Think of your EA as a Chief of Staff in training.",
            "Empower them to own outcomes, not just tasks.",
            "Give full access to dashboards and data sources."
          ],
        },
        {
          heading: "2. Systems Before Speed",
          content:
            "Before delegating, Nik and his EA+ establish crystal-clear Standard Operating Procedures (SOPs). These are living documents, built in Notion and refined weekly. The focus is consistency — not control. The goal: build repeatable systems for recurring tasks.",
          image: slackImage,
          quote:
            "Speed comes from clarity, not chaos. A system that scales is better than a sprint that stalls.",
        },
        {
          heading: "3. Asynchronous Communication & Deep Work",
          content:
            "Nik limits synchronous communication to strategic moments. His EA+ manages a shared Slack channel and organizes communication asynchronously — meaning, no unnecessary meetings. This gives both of them time for focused work.",
          image: workflowImage,
        },
        {
          heading: "4. Dashboard-Driven Decision Making",
          content:
            "Every morning, Nik reviews a single dashboard curated by his EA+. It includes brand KPIs, team updates, and a short summary of what matters most that day. The EA+ maintains the system using tools like Airtable, Notion, and Zapier to automate updates.",
          image: dashboardImage,
          tips: [
            "Start your day with one source of truth.",
            "Automate data pulls using integrations.",
            "Add short insights, not just raw numbers."
          ],
        },
        {
          heading: "5. The Weekly Reset Ritual",
          content:
            "Each Friday, Nik and his EA+ hold a 30-minute review — not to discuss tasks, but to audit systems. They reflect on what worked, what broke, and how to optimize it for next week. This keeps the operation fresh and adaptable.",
          quote:
            "We don’t just run systems — we evolve them. Every week is a new version of how we work.",
        },
      ]}
      summary="Nik Sharma’s EA+ model isn’t about outsourcing — it’s about partnership. By combining trust, automation, and clear systems, he’s created a workflow that amplifies productivity and creativity. The takeaway? The best executives don’t do more — they design better ways to do less."
    />
  );
};

export default NikSharmaPlaybook;
