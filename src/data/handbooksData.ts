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
    link: '#',
    status: 'Coming Soon',
    isAvailable: false,
    teamSize: '4 members maximum',
    eligibility: '1st & 2nd Year Undergraduates',
    deliverables: [
      'Physical Hardware Prototype Build',
      'Live Arena Performance Testing',
      'Technical Design Defense'
    ],
    description:
      'Hardware design manual for freshmen and sophomore engineering students tasked with building a functional electro-mechanical device from mystery raw materials in a timed sprint.',
    evaluationFocus: 'Arena Demonstration, Structural Integrity, Resource Efficiency'
  },
  {
    id: 'handbook-senior-design',
    challengeId: 'senior-design',
    title: 'Senior Design Handbook',
    challengeName: 'Senior Design',
    week: 2,
    dates: 'November 14-15',
    link: '#',
    status: 'Coming Soon',
    isAvailable: false,
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
    link: '#',
    status: 'Coming Soon',
    isAvailable: false,
    teamSize: '4 members maximum',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      'Comprehensive Feasibility Study',
      'Financial Model & Risk Matrix',
      'Executive Boardroom Pitch'
    ],
    description:
      'Framework for analyzing real-world municipal and industrial engineering dilemmas, formulating realistic business and technical roadmaps, and advising client panels.',
    evaluationFocus: 'Financial Viability, Environmental Impact (SEE), Risk Mitigation'
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
    link: '#',
    status: 'Coming Soon',
    isAvailable: false,
    teamSize: '4 members maximum',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      'Source Code & Unit Test Suite',
      'System Architecture Documentation',
      'Live Code Demonstration & Code Review'
    ],
    description:
      'Software engineering challenge rulebook outlining problem set distribution, API sandbox environments, performance benchmarking, and algorithmic complexity scoring.',
    evaluationFocus: 'Algorithm Correctness, Computational Complexity, Code Cleanliness'
  },
  {
    id: 'handbook-bio-engineering',
    challengeId: 'bio-engineering',
    title: 'Bio-Engineering Handbook',
    challengeName: 'Bio-Engineering',
    week: 2,
    dates: 'November 14-15',
    link: '#',
    status: 'Coming Soon',
    isAvailable: false,
    teamSize: '2 members maximum',
    eligibility: 'All Undergraduate Engineering Years',
    deliverables: [
      'Biomedical Device / Process Model',
      'Health Canada Regulatory Pathway Analysis',
      'Clinical Efficacy Presentation'
    ],
    description:
      'Handbook covering biological and biomedical systems engineering, patient safety constraints, biocompatibility standards, and clinical commercialization models.',
    evaluationFocus: 'Clinical Feasibility, Regulatory Compliance, Biochemical/Biomechanical Rigor'
  }
];
