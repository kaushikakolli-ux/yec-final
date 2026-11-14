export interface HandbookItem {
  id: string;
  challengeId: string;
  title: string; // e.g. "Innovative Design Handbook"
  challengeName: string; // e.g. "Innovative Design"
  week: 1 | 2;
  dates: string;
  link: string;
  status: 'Available' | 'Official Rulebook' | 'Coming Soon' | 'Cancelled';
  isAvailable?: boolean;
  isCancelled?: boolean;
  teamSize: string;
  eligibility: string;
  deliverables: string[];
  description: string;
  evaluationFocus: string;
  fullRulebookText?: string;
  sections?: {
    title: string;
    content: string;
  }[];
}

export const INNOVATIVE_DESIGN_FULL_TEXT = `Hosted by the Lassonde Engineering Society, York University

2026-2027 Innovative Design
Rulebook

For any questions or concerns please contact yec@lasengsoc.com

1.0 Competition Description and Objective
One of the exciting key aspects of Engineering is to create something that changes the world. Whether it be a new technology, new method of construction, new ways to transfer knowledge or control energy, whatever it is, an engineer finds either the opportunity or the problem and addresses it.
In the Innovative Design competition, participants bring an independent project that they develop outside the competition, including but not limited to capstone projects. Each team presents a professional-level presentation to a panel of judges, which demonstrates the technical, social, environmental, and economic impact of their design. Each design should test the boundaries of current engineering practices, in a justifiable and logical manner. The competitors will be judged on the originality and creativity of their idea, the quality of their presentation, and the tenability of their design process. These designs must be new and innovative and address a void in society.

1.1 Team Composition and Eligibility
Team Size: Must consist of exactly 6 Members
Eligibility: All Competitors must be enrolled in a York Undergraduate Engineering Program. Should the presenting team be a subset of a project team, the remaining members of the project team must sign a letter authorizing the presentation of the project for it to be eligible for the competition. This letter must be submitted with the competition design summary if applicable.

2.0 Competition Details
2.1 Resources
Competitors will be given a presentation station where they can display their projects - any physical and virtual prototypes - such that judges and other attendees can walk around it. Hence an exhibition hall will be provided to allow competitors to set up displays and perform presentations to the judges. This hall will be in a central location and will be open to the public during the competition.

The following equipment will be made available to all competitors during the competition time period:
* A table to display presentations
* Electrical power supply for each team
* Internet source
Teams opting to build a physical prototype must secure their own funding and materials; no financial support or physical resources will be provided by the competition.

2.2 Competition Personnel
The Competition Lead: Responsible for the implementation of the competition.
Competition Director(s): Responsible for supporting the Competition Lead during the implementation of the competition.
Official Timekeeper: Responsible for enforcing time limits during the presentations.
Judges: A minimum of three (3) judges are required to assess the project design, feasibility, innovation, and communication skills of the competitors.

2.3 Competitor Deliverables
Design Summary: Prior to the competition, the team must submit a 1-page Design Summary (12 pt font, 1.15 line spacing, 1” margins). Must include:
* Team name & members
* Design topic and description
* Longevity Justification (durability and low maintenance)
* Citations in IEEE format
File name: [TeamName] - Design Summary Submission - YEC Innovative Design

Presentation Slides: Visuals for the panel presentation (5-minute limit strictly enforced).
File name: [TeamName] - Slidedeck Submission - YEC Innovative Design

3.0 Timeline (November 7-8)
Nov 7:
* 10:00 am - 11:00 am: Check-in & Room Assignment
* 11:00 am - 11:30 am: Opening Ceremonies
* 11:30 am - 2:30 pm: Phase 1 (Ice Breakers & Preliminary Brainstorming)
* 2:30 pm - 4:00 pm: Lunch Break (Domino’s Catering)
* 4:00 pm - 7:00 pm: Phase 2 (Prototyping & Designing)
* 7:00 pm - 8:00 pm: Dinner & Live Raffle Draw

Nov 8:
* 10:00 am - 11:00 am: Check-in
* 11:00 am - 2:00 pm: Phase 2 Continuation & Final Sprint (1:30 pm Hard Upload Deadline)
* 2:00 pm - 3:30 pm: Lunch & Arbalest Rocketry Technical Workshop
* 3:30 pm - 6:30 pm: Sequential Judging Presentations (5-min pitch, 3-min demo, 2-min Q&A)
* 6:30 pm - 7:00 pm: Awards & Closing Remarks

4.0 Challenge
Identify a significant, recurring issue within any domain—such as infrastructure, healthcare, environmental conservation, or public services—and develop an engineering solution that prioritizes durability and minimal upkeep. Competitors are encouraged to explore innovative approaches that ensure their solution remains relevant, cost-effective, and impactful over time, fostering a stable and sustainable future with minimal need for rework. Solutions should take into account social, economic, and environmental (SEE) factors while adhering to ethical engineering standards.

5.0 Evaluation & Scoring
* Project (70 pts): Design Justification (25), SEE Feasibility (25), Technical Feasibility/Innovation (20)
* Presentation (20 pts): Voice, Articulation, Timing (10), Response to Questions (10)
* Written Design Summary (10 pts): Content Quality (5), Presentation Integration (5)
Total: 100 Points

Penalties:
* Plagiarism: Elimination
* Missing Citation: -30 pts
* Incorrect Citation Format: -10 pts
* Late Document Submission: -50 pts
* Absent Team Member: -25 pts
* Formatting Not Adhered: -5 pts`;

export const DEBATE_FULL_TEXT = `Hosted by the Lassonde Engineering Society, York University

2026 Parliamentary Debate
Delegate Handbook 

For questions or concerns, email yec@lasengsoc.com or president@lasengsoc.com

Debate Title & Sample Topics:
Technology and Artificial Intelligence:
* Does artificial intelligence pose a serious danger to society? 
* Should robots or autonomous AI systems be granted legal rights? 
* Should there be strict global regulations for AI development and LLM training data?
* Do camera-equipped drones improve public safety or violate privacy?

Environment and Space:
* Is outer space colonization a moral imperative for humanity?
* Should individuals be taxed directly based on their personal carbon footprint?
* Should every new passenger vehicle sold be strictly electric?

Schedule (November 7-8):
* Saturday, Nov 7: Check-in (10:00 am), Opening Ceremonies (11:00 am), Phase 1 Prep & Brainstorming (11:30 am - 2:30 pm), Lunch (2:30 pm), Phase 2 Designing (4:00 pm - 7:00 pm), Raffle & Dinner (7:00 pm).
* Sunday, Nov 8: Check-in (10:00 am), Phase 2 Continuation (11:00 am - 2:00 pm), Lunch & Arbalest Rocketry Workshop (2:00 pm - 3:30 pm), Presentations & Judging (3:30 pm - 6:30 pm), Awards & Closing (6:30 pm).

Roles and Rules:
* Teams: Two teams per round, each with 2 members (Government vs Opposition). Coin toss determines side selection.
* Resolutions: Assigned by committee, revealed at start of each round with 15 minutes preparation time. Internet research is prohibited during preparation.
* Time Allotted:
  - First speaker of the Government: 5 minutes
  - First speaker of the Opposition: 5 minutes
  - Second speaker of the Government: 5 minutes
  - Second speaker of the Opposition: 5 minutes
  - Rebuttal by first speaker of the Opposition: 2 minutes
  - Rebuttal by first speaker of the Government: 2 minutes
  (15-second grace period; table pounding upon exhaustion of time)

Tournament Format:
* Single Elimination bracket with 45-minute total rounds.
* Points of Information (POI): 15 seconds max; debater must accept at least one POI per speech.
* Points of Procedure: Raised immediately for procedural breaches.
* Heckling: Permitted within reason if brief and witty.

Evaluation & Scoring (60 Points Total):
* Respect for Other Team: 10 pts (5 per member)
* Information Quality & Clarity: 10 pts (5 per member)
* Rebuttal Relevance & Strength: 10 pts (5 per member)
* Use of Facts / Logic: 10 pts (5 per member)
* Organization: 10 pts (5 per member)
* Understanding of Topic: 10 pts (5 per member)
Penalties apply for offensive behavior (-1 to -2 pts), speaking to opponent rather than audience (-0.5 pts), or new arguments in rebuttal (-1 to -2 pts).`;

export const BIO_ENGINEERING_FULL_TEXT = `Hosted by the Lassonde Engineering Society, York University

2026 YEC Bioengineering Rulebook

For any questions or concerns, please contact yec@lasengsoc.com

1.0 Competition Description and Objective
Teams address a bioengineering challenge involving an older adult (Margaret, 72) requiring support with balance-related rehabilitation exercises at home. Teams apply the bioengineering design process to develop an affordable, feasible, and safe solution. Physical prototyping is optional.

1.1 Team Composition and Eligibility
* Team Size: Must consist of exactly 2 competitors.
* Eligibility: All competitors must be York University undergraduate students. Only Engineering students can advance to the provincial level (OEC).

2.0 Deliverables & Rules
* Electronic Report (max 10 pages excluding appendices, IEEE citations): Problem statement, background research, design approach, engineering analysis & calculations, safety/risk assessment, validation plan, and conclusions.
* Presentation Slide Deck & Live Presentation (6 minutes max + Judge Q&A): Visual aid and technical defence covering problem significance, biomedical principles, operating principle, cost estimate, safety considerations, and testing plan.
* Prototype (Optional): Teams may demonstrate designs via CAD models, technical drawings, simulations, calculations, or optional self-funded physical prototypes.
* File Naming Format: "[TeamName] - YEC Bioengineering [Slidedeck/Report] Submission"

3.0 Timeline (Local Toronto Time)
* Phase 1 (Application Submission): Nov 12 – Due 11:50 PM
* Phase 2 (Opening Ceremony & Briefing): Nov 14 – 10:00 AM – 10:30 AM
* Phase 3 (Solution Development): Nov 14, 10:30 AM – Nov 15, 1:30 PM
* Phase 4 (Judging Period): Nov 15 – 2:00 PM – 6:30 PM
* Phase 5 (Post Competition): Nov 15 – 6:30 PM – 7:00 PM

4.0 Design Objectives
1. Support rehabilitation for balance-related exercises
2. Prioritize user safety and foresee fall/failure risks
3. Remain affordable in manufacturing cost
4. Promote accessibility for older adults with reduced mobility
5. Demonstrate technical feasibility with engineering analysis
6. Enable evaluation via a testing and validation plan

5.0 Evaluation & Scoring (100 Points Total)
* Proposed Solution (60 pts): Problem Definition & User Needs (10), Biomedical & Scientific Principles (10), Engineering Design & Feasibility (15), Safety & Risk Assessment (10), Cost & Accessibility (5), Testing & Validation (10)
* Written Report (15 pts): Clarity & Organization (3), Technical Writing (2), Design Justification (5), Completeness & Compliance (5)
* Presentation (20 pts): Clarity & Communication (5), Articulation & Time Management (3), Visual Aids (2), Q&A Technical Defence (10)
* Innovation (5 pts): Originality & Creativity (5)

Penalties: Plagiarism (-50), Insufficient Citation (-20), Document Received After Deadline (-30), Absent Team Member (-25).`;

export const PROGRAMMING_FULL_TEXT = `Hosted by the Lassonde Engineering Society, York University

2026-2027 YEC Programming Rulebook

For any questions or concerns, please contact yec@lasengsoc.com or president@lasengsoc.com

1.0 Competition Description and Objective
Teams use software development and project management skills to build readable software that solves an EV charging scheduling problem for a fictional campus parkade—optimizing for cost, low CO2 emissions, and fairness under building power limits.

1.1 Team Composition and Eligibility
* Team Size: Must consist of exactly 4 Members.
* Eligibility: All competitors must be enrolled in a York Undergraduate Program.

2.0 Deliverables & Rules
* Presentation Slide Deck (PowerPoint or PDF; Google Doc links not accepted): "[TeamName] - SlideDeck - YEC Programming Submission"
* Program Files (Zipped folder or GitHub repo link, produces schedule.csv from input.csv): "[TeamName] - Code - YEC Programming Submission"
* AI-Use Document (Required if AI/GitHub Copilot is used): Lists every prompt and lines of AI-assisted code.
* Hard Submission Deadline: Nov 15 at 1:30 PM (hidden-test output due 1:45 PM).

3.0 Timeline (November 14-15)
* Day 1 (Nov 14, 10:00 AM - 8:00 PM): Check-in (10:00 AM), Opening Ceremonies (11:00 AM), Phase 1 Brainstorming (11:30 AM), Domino's Lunch (2:30 PM), Phase 2 Prototyping & Designing (4:00 PM), Dinner & Raffle (7:00 PM).
* Day 2 (Nov 15, 10:00 AM - 7:00 PM): Check-in (10:00 AM), Phase 2 Final Sprint & 1:30 PM Submission (11:00 AM), Lunch & Arbalest Rocketry Workshop (2:00 PM), Presentations & Judging (3:30 PM - 10 min pitch + Q&A), Closing Remarks (6:30 PM).

4.0 Challenge & Scoring Overview
* Output Contract: schedule.csv with columns car_id, charger_id, hour, kW.
* Combined Score (Lower is Better): electricity cost ($) + CO2 cost ($110/tonne) + unmet-charging penalty ($1.00/kWh).
* Evaluation (100 Marks): Strategy/Algorithm (Hidden-Test Performance /20 + Judges' Assessment /35), Code Quality & Testing (/35), Presentation & Technical Defence (/25).
* Penalties: Late submission (-10 pts per 5 min, max -50), Plagiarism (-50 / elimination), Insufficient Citation (-50), Absent Team Member (-50).`;

export const JUNIOR_DESIGN_FULL_TEXT = `Hosted by the Lassonde Engineering Society, York University

2026 Junior Design Delegate Handbook

For any questions or concerns, email yec@lasengsoc.com or president@lasengsoc.com

1.0 Competition Description and Objective
Teams of Junior Engineering Students design and build a physical prototype to address a technical problem, then deliver an oral and digital presentation demonstrating their design process and solution.

1.1 Team Composition and Eligibility
* Team Size: Must consist of exactly 4 members.
* Eligibility: York University undergraduates who have not yet completed 50% or more of the minimum credits required for their accredited engineering program.

2.0 Deliverables & Rules
* Physical Prototype: Built from competition shop materials (1 free hot glue gun & 1 popsicle stick provided; costs tracked for budget scoring).
* Project Budget: Complete material cost breakdown ranked relatively against other teams.
* Presentation Slide Deck (PPT or PDF, IEEE citations): "[Team Name] - Junior_Design_Presentation.pdf/pptx"
* Strict Rules: No testing prototypes with eggs prior to official demonstration (-25 pts); cracking/breaking team egg early incurs -10 pts (replacement egg costs 700).

3.0 Timeline (November 14-15)
* Day 1 (Nov 14, 10:00 AM - 8:00 PM): Check-in at BRG Eatery (10:00 AM), Opening Ceremonies (11:00 AM), Phase 1 Brainstorming (11:30 AM), Domino's Lunch (2:30 PM), Phase 2 Prototyping & Designing (4:00 PM), Dinner & Raffle (7:00 PM).
* Day 2 (Nov 15, 10:00 AM - 7:00 PM): Check-in (10:00 AM), Phase 2 Final Sprint & 1:30 PM Submission (11:00 AM), Lunch & Arbalest Rocketry Workshop (2:00 PM), Presentations & Judging (3:30 PM - 5 min presentation, 3 min live demo/test, 2 min Q&A), Closing Remarks (6:30 PM).

4.0 Design Challenge
* Task: Design, build, and test a dual-component system (launching mechanism + protective lander) to deliver a raw, large Grade A chicken egg launched from 29 inches height to a target center 80 inches away on a hard landing surface without breaking.
* Target Zones (128" x 32"): Center Zone 72"-88" earns maximum 10 accuracy points.

5.0 Evaluation & Scoring (100 Points Total)
* Design Quality (40 pts): Feasibility (10), Versatility (10), Scalability (10), Creativity (10)
* Testing (30 pts): Intact Egg (8; half for cracked), Price/Budget Rank (7), Launcher Undamaged in Zone (5), Landing Accuracy (10)
* Presentation (30 pts): Voice (5), Articulation & Timing (5), Response to Questions (5), Design Process & Justification (15)

Penalties: Plagiarism (DSQ), Insufficient Citation (-50), Pre-demo Prototype Testing (-25), Late Submission (-10/5min), Absent Team Member (-25), Early Egg Break (-10), School Disclosure (-10).`;

export const CONSULTING_FULL_TEXT = `Hosted by the Lassonde Engineering Society, York University

2026-2027 Consulting Delegate Handbook

For questions or concerns, email yec@lasengsoc.com or president@lasengsoc.com

1.0 Competition Description and Objective
Competitors design a detailed consulting engineering proposal for a large-scale engineering problem and pitch it to the "client" (judges)—balancing originality, technical & economic feasibility, business, environmental, social, and ethical implications.

1.1 Team Composition and Eligibility
* Team Size: 4 competitors per team.
* Eligibility: All four competitors must be enrolled in a York Undergraduate Engineering Program.

2.0 Deliverables & Rules
* One-Page Proposal PDF: "TEAM NAME - PROPOSAL.pdf"
* Presentation Document (PPT, PPTX, or PDF, IEEE citations required): "TEAM NAME - PRESENTATION.ppt/pptx/pdf"
* Submission Deadline: End of Phase 3 (1:30 PM hard submission on Day 2).

3.0 Timeline (November 14-15)
* Day 1 (Nov 14): Orientation & Initiation (10:00 AM - 4:00 PM) and Development (4:00 PM - 8:00 PM). Check-in (10:00 AM), Opening Ceremonies (11:00 AM), Phase 1 Brainstorming (11:30 AM), Domino's Lunch (2:30 PM), Phase 2 Designing (4:00 PM), Dinner & Raffle (7:00 PM).
* Day 2 (Nov 15, 10:00 AM - 7:00 PM): Check-in (10:00 AM), Phase 3 Finalising & 1:30 PM Submission (11:00 AM), Lunch & Arbalest Rocketry Workshop (2:00 PM), Presentation & Judging (3:30 PM), Closing Remarks (6:30 PM).

4.0 Problem Statement (The One – 1 Bloor Street West)
Acting as engineering consultants for Jacobs advising Mizrahi Developments in 2020, propose vertical expansion design solutions to add additional storeys to the approved 85-storey (308.6 m) supertall design within an original $1.4B baseline budget ($583.2M fixed-price construction), given locked-in 32 rock-socketed bedrock caissons and Levels 1–9 podium steel mega-columns.

5.0 Evaluation & Scoring (100 Points Total)
* Solution (50 pts): Problem Statement (5), Design Feasibility (10), Financial Risk (5), Environmental Consideration (15), Social Consideration (10), Risk Analysis (5)
* Report (20 pts): Appearance (5), Style (5), Presentation of Ideas (10)
* Presentation (30 pts): Professionalism (5), Visual Aid (5), Time (5), Presentation of Ideas (15)

Penalties: Plagiarism (-50), Incorrect Citation Format (-10), No Citations (-30), Late Documents (-50), Absent Teammate (-10).`;

export const HANDBOOKS_DATA: HandbookItem[] = [
  {
    id: 'handbook-innovative-design',
    challengeId: 'innovative-design',
    title: 'Innovative Design Handbook',
    challengeName: 'Innovative Design',
    week: 1,
    dates: 'November 7-8',
    link: 'https://docs.google.com/document/d/1ivVa401F6uAUkmCTTLpo6ED5XkZYSbEKKe3FRygw8Xc/edit?usp=sharing',
    status: 'Available',
    isAvailable: true,
    teamSize: '6 members maximum',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      '1-Page Executive Design Summary (IEEE citations)',
      'Digital Presentation Slidedeck',
      'Live Physical/Virtual Prototype Showcase'
    ],
    description:
      'Official rulebook for developing an independent innovative engineering product addressing societal, economic, and environmental needs with durability and minimal upkeep.',
    evaluationFocus:
      '70% Project Feasibility & Innovation, 20% Oral Defense & Q&A, 10% Written Design Summary',
    fullRulebookText: INNOVATIVE_DESIGN_FULL_TEXT
  },
  {
    id: 'handbook-communications',
    challengeId: 'communication',
    title: 'Communications Handbook',
    challengeName: 'Communications',
    week: 1,
    dates: 'November 7-8',
    link: '#',
    status: 'Cancelled',
    isAvailable: false,
    isCancelled: true,
    teamSize: '2 members maximum',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      'Oral Technical Presentation (10 min)',
      'Executive Audience Summary Brief',
      'Judge Cross-Examination & Q&A'
    ],
    description:
      'Official competition guidelines on translating intricate engineering concepts, technical analyses, and socio-economic trade-offs to non-technical stakeholders and regulatory panels.',
    evaluationFocus: 'Clarity, Audience Engagement, Scientific Accuracy & Rhetorical Delivery'
  },
  {
    id: 'handbook-debate',
    challengeId: 'debate',
    title: 'Debate Handbook',
    challengeName: 'Debate',
    week: 1,
    dates: 'November 7-8',
    link: 'https://docs.google.com/document/d/1kO6bhpgMsKv_wPV9Y-D2UDChQuD-I0Uffk_VZm1nRo8/edit?usp=sharing',
    status: 'Available',
    isAvailable: true,
    teamSize: '2 members per team',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      'Government & Opposition Speeches (5 min)',
      'Cross-Rebuttal Speeches (2 min)',
      'Points of Information (POI) & Heckling',
      'Single Elimination Bracket Tournament'
    ],
    description:
      'Official 2026 Parliamentary Debate Delegate Handbook. Outlines team roles, impromptu resolution guidelines (AI & Autonomous Systems, Environment & Space), speaking times, points of procedure, and scoring rubric.',
    evaluationFocus:
      '60 Total Points: Respect (10), Information (10), Rebuttal (10), Facts/Logic (10), Organization (10), Topic Understanding (10)',
    fullRulebookText: DEBATE_FULL_TEXT
  },
  {
    id: 'handbook-junior-design',
    challengeId: 'junior-design',
    title: 'Junior Design Handbook',
    challengeName: 'Junior Design',
    week: 2,
    dates: 'November 14-15',
    link: 'https://docs.google.com/document/d/1_OSsv97Fq9cdCCoV7vWmdxteQXpe3JORZc5G0sjRPyo/edit?usp=sharing',
    status: 'Available',
    isAvailable: true,
    teamSize: '4 members per team',
    eligibility: 'Undergraduates (<50% Engineering Program Credits)',
    deliverables: [
      'Physical Launcher & Protective Lander Prototype',
      'Complete Shop Material Budget Breakdown',
      'PPT / PDF Slide Deck (5-min pitch, 3-min test, 2-min Q&A)'
    ],
    description:
      'Official 2026 Junior Design Delegate Handbook. Teams build a dual-component launching mechanism and protective lander to deliver a raw egg across 80 inches onto a hard surface.',
    evaluationFocus:
      '100 Total Points: Design Quality (40), Live Egg-Drop & Launch Testing (30), Presentation & Justification (30)',
    fullRulebookText: JUNIOR_DESIGN_FULL_TEXT
  },
  {
    id: 'handbook-senior-design',
    challengeId: 'senior-design',
    title: 'Senior Design Handbook',
    challengeName: 'Senior Design',
    week: 2,
    dates: 'November 14-15',
    link: '#',
    status: 'Cancelled',
    isAvailable: false,
    isCancelled: true,
    teamSize: '4 members maximum',
    eligibility: '3rd, 4th & Final Year Undergraduates',
    deliverables: [
      'Complex Multidisciplinary Prototype',
      'Telemetry / Control Software Integration',
      'Engineering Defense Presentation'
    ],
    description:
      'The premier engineering build competition handbook. Details mechanical fabrication, circuit integration, sensor control systems, and harsh arena testing specifications.',
    evaluationFocus: 'System Reliability, Multidisciplinary Engineering, Live Stress Testing'
  },
  {
    id: 'handbook-consulting',
    challengeId: 'consulting',
    title: 'Consulting Handbook',
    challengeName: 'Consulting',
    week: 2,
    dates: 'November 14-15',
    link: 'https://docs.google.com/document/d/183qTvg_OAe4-4-e7g1VYOw9Qj9GAVSpAE9ygnAybIPw/edit?usp=sharing',
    status: 'Available',
    isAvailable: true,
    teamSize: '4 members per team',
    eligibility: 'York Undergraduate Engineering Students',
    deliverables: [
      '1-Page Engineering Proposal (PDF)',
      'Presentation Slide Deck (PPT / PDF, IEEE citations)',
      'Client Pitch & Judge Q&A Defence'
    ],
    description:
      'Official 2026-2027 Consulting Delegate Handbook. Advise Mizrahi Developments on expanding The One (1 Bloor St W) beyond 85 storeys with locked-in caissons and podium mega-columns.',
    evaluationFocus:
      '100 Total Points: Solution & SEE Impact (50), Technical Report (20), Client Presentation (30)',
    fullRulebookText: CONSULTING_FULL_TEXT
  },
  {
    id: 'handbook-re-engineering',
    challengeId: 're-engineering',
    title: 'Re-Engineering Handbook',
    challengeName: 'Re-Engineering',
    week: 2,
    dates: 'November 14-15',
    link: '#',
    status: 'Coming Soon',
    isAvailable: false,
    teamSize: '2 members maximum',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      'Product Teardown & Flaw Identification',
      'Redesigned CAD Schematics',
      'Comparative Performance Report'
    ],
    description:
      'Detailed procedures for dissecting existing market products, analyzing failure modes or manufacturing inefficiencies, and engineering an enhanced, modern solution.',
    evaluationFocus: 'CAD Fidelity, Material Selection, Cost Optimization & Manufacturability'
  },
  {
    id: 'handbook-programming',
    challengeId: 'programming',
    title: 'Programming Handbook',
    challengeName: 'Programming',
    week: 2,
    dates: 'November 14-15',
    link: 'https://docs.google.com/document/d/1WvQ1m6wdNIZw61oyKJaHE9uy4K-uvZqV-wjcPIFUVJw/edit?usp=sharing',
    status: 'Available',
    isAvailable: true,
    teamSize: '4 members per team',
    eligibility: 'York University Undergraduate Students',
    deliverables: [
      'PowerPoint / PDF Slide Deck (10-min pitch + Q&A)',
      'Program Code & schedule.csv Output Contract (Zip / GitHub)',
      'AI-Use Prompt & Code Log (if applicable)'
    ],
    description:
      'Official 2026-2027 YEC Programming Rulebook. Teams build readable software to schedule campus EV charging across cost, CO2 intensity ($110/t), power caps, and fairness priority policies.',
    evaluationFocus:
      'Strategy & Hidden-Test Performance, Code Readability & Efficiency, Presentation & Technical Defence',
    fullRulebookText: PROGRAMMING_FULL_TEXT
  },
  {
    id: 'handbook-bio-engineering',
    challengeId: 'bio-engineering',
    title: 'Bio-Engineering Handbook',
    challengeName: 'Bio-Engineering',
    week: 2,
    dates: 'November 14-15',
    link: 'https://docs.google.com/document/d/1daI9FjXgVuAUOWqNkv1Zhrreasznghrh1-OBnP6AOTA/edit?usp=sharing',
    status: 'Available',
    isAvailable: true,
    teamSize: '2 members per team',
    eligibility: 'York University Undergraduates (Engineering for OEC)',
    deliverables: [
      'Electronic Engineering Report (max 10 pages, IEEE citations)',
      'Presentation Slide Deck & 6-Min Technical Defence',
      'CAD Models, Analysis & Optional Prototype'
    ],
    description:
      'Official 2026 YEC Bioengineering Rulebook. Teams design a low-cost, safe, and accessible biomedical or assistive technology solution supporting older adults with home balance rehabilitation.',
    evaluationFocus:
      '100 Total Points: Proposed Solution (60), Written Report (15), Presentation & Technical Defence (20), Innovation (5)',
    fullRulebookText: BIO_ENGINEERING_FULL_TEXT
  }
];
