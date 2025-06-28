export interface Service {
    slug: string;
    title: string;
    banner: string;
    detailImage:string;
    intro: string;
    points: { title: string; desc: string }[];
    features: { icon: string; title: string; desc: string }[];
    useCases: { title: string; desc: string }[];
}

export const services: Service[] = [
   // edtech data
    {
        slug: "edtech",
        title: "Empowering Education with Tech",
        banner: "/images/services/edtech/edtech-banner.avif",
        detailImage: "/images/services/edtech/skills.jpeg", // 👈 ADD THIS LINE
        intro:
            "At OM Educom, our EdTech solutions harness state-of-the‑art technology to revolutionize learning experiences. Our interactive platforms and custom-built LMS empower institutions and trainers to provide engaging, adaptive, and scalable education.",
        points: [
            { title: "Custom LMS", desc: "White‑label platforms built for your brand and pedagogical style." },
            { title: "Interactive Modules", desc: "Videos, quizzes, gamification, and VR/AR-ready content." },
            { title: "Multi-platform Apps", desc: "Seamlessly accessible via web, mobile, and tablets." },
            { title: "NEP-aligned Courses", desc: "Curricula mapped to NEP 2020 and global benchmarks." },
            { title: "Analytics Dashboard", desc: "Real-time performance tracking for students & trainers." },
        ],
        features: [
            {
                icon: "/images/services/edtech/gamifiedLearning.avif",
                title: "Gamified Learning",
                desc: "Boost engagement with points, badges, leaderboards & interactive storytelling.",
            },
            {
                icon: "/images/services/edtech/cloud.jpeg",
                title: "Cloud-Native & Secure",
                desc: "Scalable, secure & reliable hosting backed by regular backups and SSL-enabled sessions.",
            },
            {
                icon: "/images/services/edtech/skills.jpeg",
                title: "NEP 2020 Compliant",
                desc: "Courses structured to meet modern pedagogy, critical thinking, and skill-building practices.",
            },
        ],
        useCases: [
            {
                title: "Digitize classrooms with interactive live sessions, automated assessments & attendance tracking.",
                desc: "Transform traditional classrooms into engaging, technology-driven learning environments. Leverage live video sessions, real-time doubt resolution, and AI-assisted assessment tools to ensure deeper understanding. Integrated attendance systems and performance tracking help educators focus on personalized mentoring and academic progress.",
            },
            {
                title: "Empower corporate L&D with certifications, progress insights & compliance training.",
                desc: "Streamline learning and development across enterprises with customizable training modules. Automate employee onboarding, skill upgrades, and regulatory compliance. Real-time dashboards, learning paths, and certification systems ensure HR teams can track individual growth and organizational capability-building effectively.",
            },
            {
                title: "Support NGOs and remote learners via offline & multilingual content.",
                desc: "Bridge the digital divide with learning platforms that support offline access, multilingual support, and low-bandwidth environments. Ideal for NGOs working in rural or underserved regions, the solution ensures equitable education through localized content, downloadable modules, and inclusive tools that work without constant internet access.",
            },
            {
                title: "Collaborate with governments for scalable solutions in e-learning initiatives.",
                desc: "Partner with government bodies to power national or state-wide digital education initiatives. Provide scalable, white-labeled LMS platforms tailored for public institutions, NEP-aligned content, and teacher training modules. Ensure accessibility, transparency, and measurable outcomes in government-led digital learning programs.",
            },
        ],
          
    },


// agriculture data

    {
        slug: "agriculture",
        title: "Advancing Agriculture with Modern Solutions",
        banner: "/images/services/agriculture/agri-banner.jpeg",
        detailImage: "/images/services/agriculture/irrigation.jpg",
        intro:
            "OM Educom is committed to revolutionizing agriculture by integrating advanced technologies, sustainable practices, and expert guidance. We support farmers, agripreneurs, and institutions through modern equipment, quality supplies, and end-to-end advisory.",
        points: [
            {
                title: "Modern Farming Techniques",
                desc: "Precision farming, hydroponics, drip systems, and greenhouse setup.",
            },
            {
                title: "Agri Inputs Supply",
                desc: "Certified seeds, fertilizers, pesticides, and smart equipment.",
            },
            {
                title: "Farm Advisory Services",
                desc: "Crop planning, disease management, and productivity boosts.",
            },
            {
                title: "Training Programs",
                desc: "Rural innovation workshops—online and offline.",
            },
            {
                title: "Govt. Scheme Access",
                desc: "Help with PM-Kisan, crop insurance, and subsidy integration.",
            },
        ],
        features: [
            {
                icon: "/images/services/agriculture/irrigation.jpg",
                title: "Precision Irrigation",
                desc: "Drip & sprinkler systems for optimized water usage.",
            },
            {
                icon: "/images/services/agriculture/certified-seed.jpg",
                title: "Certified Seeds",
                desc: "High-yield, disease-resistant seeds sourced ethically.",
            },
            {
                icon: "/images/services/agriculture/agri-trainning.jpg",
                title: "Agri Training",
                desc: "Hands-on training for farmers and rural entrepreneurs.",
            },
        ],
        useCases: [
            {
                title: "Small Farmers: Support with subsidies, crop planning, and drip system installation.",
                desc: "We provide end-to-end guidance to small and marginal farmers—helping them access government subsidies, choose the right crops, and install efficient irrigation systems to boost yields sustainably.",
            },
            {
                title: "Agri Ventures: Setup of greenhouse, mechanization, and agri-export support.",
                desc: "Our team aids agri-entrepreneurs in setting up controlled-environment farms (greenhouses/polyhouses), automating operations, and accessing export markets through compliance, packaging, and logistics support.",
            },
            {
                title: "Educational Institutes: Demo farms, hydroponic kits, and hands-on agri-tech training.",
                desc: "We collaborate with colleges and training centers to establish demonstration farms and hydroponic labs, providing students with experiential learning in precision farming and sustainable agriculture.",
            },
            {
                title: "Farmer Groups: FPO coordination, shared resources, and cooperative funding.",
                desc: "We facilitate the formation and strengthening of Farmer Producer Organizations (FPOs), enabling bulk input purchases, shared equipment access, and cooperative financing to scale their operations profitably.",
            },
        ],
          
      },

      //Biztech data

    {
        slug: "biztech",
        title: "Smart Tech to Power Your Business",
        banner: "/images/services/biztech/biztech-banner.jpeg",
        detailImage: "/images/services/biztech/real-time-analytics.jpeg",
        intro:
            "OM Educom's BizTech services empower companies to automate, analyze, and accelerate operations. From real-time insights to modular ERP, we help organizations digitally transform and grow with confidence.",
        points: [
            {
                title: "Interactive Dashboards",
                desc: "For KPIs, sales, and workforce data.",
            },
            {
                title: "Unified ERP & CRM",
                desc: "Seamless integration of business processes and customer data.",
            },
            {
                title: "Automation Workflows",
                desc: "Intelligent process mapping using AI and RPA.",
            },
            {
                title: "Cloud or On-Premise",
                desc: "Deploy securely where your business needs it.",
            },
        ],
        features: [
            {
                icon: "/images/services/biztech/real-time-analytics.jpeg",
                title: "Live Analytics",
                desc: "Visualize key business metrics in real-time with automated dashboards.",
            },
            {
                icon: "/images/services/biztech/erp.jpg",
                title: "Modular ERP",
                desc: "Adaptable modules for sales, HR, finance, and warehouse control.",
            },
            {
                icon: "/images/services/biztech/process-automation.jpg",
                title: "Workflow Automation",
                desc: "Eliminate bottlenecks with intelligent task and process automation.",
            },
        ],
        useCases: [
            {
                title: "Enable real-time analytics for retail & e-commerce to track inventory, sales, and customer engagement.",
                desc: "We help retail and e-commerce businesses integrate live dashboards that monitor sales trends, inventory levels, and customer behavior—enabling agile decision-making and personalized marketing.",
            },
            {
                title: "Streamline manufacturing with automated ERP systems for production, maintenance, and resource planning.",
                desc: "Manufacturers benefit from modular ERP setups that unify production scheduling, equipment maintenance, and supply chain tracking to reduce downtime and improve efficiency.",
            },
            {
                title: "Empower consulting firms to manage projects, client interactions, and performance with CRM tools.",
                desc: "Consulting agencies can track project milestones, manage client communications, and automate reports—all from a unified platform tailored to boost client satisfaction and internal productivity.",
            },
            {
                title: "Modernize healthcare operations through digital patient records, appointment scheduling, and compliance workflows.",
                desc: "Hospitals and clinics can digitize their backend with secure patient records, AI-powered appointment systems, and seamless compliance tracking, ensuring operational excellence and better care delivery.",
            },
        ],
          
      },

      //BuisnessAutomation

    {
        slug: "businessAutomation",
        title: "Automating Businesses with Intelligence",
        banner: "/images/services/buisnessAutomation/automation-banner.jpg",
        detailImage: "/images/services/buisnessAutomation/AiMl.jpg",
        intro:
            "At OM Educom, our Business Automation solutions harness cutting-edge technologies to streamline operations, reduce manual tasks, and improve productivity. From intelligent software to fully automated workflows, we empower businesses with smart systems.",
        points: [
            {
                title: "AI-Powered Solutions",
                desc: "Chatbots, recommendation engines, and fraud detection using machine learning.",
            },
            {
                title: "Workflow Automation",
                desc: "Automate HR, finance, and ops with bots and triggers.",
            },
            {
                title: "Custom Software Development",
                desc: "Web and mobile apps tailored to your business model.",
            },
            {
                title: "Integration Services",
                desc: "Connect CRM, ERP, and databases with real-time syncing.",
            },
            {
                title: "Data-Driven Decisions",
                desc: "Analytics dashboards and predictive systems for insights.",
            },
        ],
        features: [
            {
                icon: "/images/services/buisnessAutomation/AiMl.jpg",
                title: "AI & Machine Learning",
                desc: "Deploy predictive models and smart systems to reduce costs and human error.",
            },
            {
                icon: "/images/services/buisnessAutomation/bots.jpeg",
                title: "Workflow Bots",
                desc: "Automate tasks like data entry, approvals, and reporting with zero-code tools.",
            },
            {
                icon: "/images/services/buisnessAutomation/customApp.jpg",
                title: "Custom Applications",
                desc: "From admin panels to customer portals, get solutions built just for you.",
            },
        ],
        useCases: [
            {
                title: "Retail & E-commerce: Automate inventory updates, customer support, and billing across channels.",
                desc: "We help retail brands and online stores automate key operations like stock management, multi-channel billing, and personalized support using AI-powered tools—enhancing customer satisfaction and operational agility.",
            },
            {
                title: "Finance & Accounting: Reconcile invoices, track expenses, and generate financial reports automatically.",
                desc: "Our automation tools enable real-time expense tracking, smart invoice reconciliation, and auto-generated compliance reports—eliminating manual errors and saving finance teams hours of work.",
            },
            {
                title: "HR & Recruitment: From onboarding to performance tracking, automate the employee lifecycle.",
                desc: "Streamline hiring, employee onboarding, leave management, and performance reviews with intelligent workflows that reduce paperwork and improve HR efficiency across the employee journey.",
            },
            {
                title: "Customer Service: Integrate chatbots and AI-driven response systems to improve resolution time.",
                desc: "Deploy conversational AI and ticketing bots to handle customer queries, route issues smartly, and deliver fast, round-the-clock support—reducing wait times and improving customer loyalty.",
            },
        ],
          
      },

      //BuisnessManagement
    {
        slug: "businessManagement",
        title: "Business Management & Strategy",
        banner: "/images/services/businessManagement/business-management.jpg",
        detailImage: "/images/services/businessManagement/consulting.jpg",
        intro:
            "At OM Educom, our strategic business solutions empower organizations to evolve, adapt, and lead. From growth consulting to leadership development, we support startups, enterprises, NGOs, and institutions at every stage of their journey.",
        points: [
            {
                title: "Strategic Advisory",
                desc: "Align your business for sustainable long-term growth.",
            },
            {
                title: "Market Analysis",
                desc: "Leverage insights to identify gaps, risks, and new opportunities.",
            },
            {
                title: "Organizational Development",
                desc: "Strengthen internal systems and team productivity.",
            },
            {
                title: "Leadership Consulting",
                desc: "Nurture visionary leaders and foster innovation.",
            },
            {
                title: "Change Management",
                desc: "Implement transitions with clarity and impact.",
            },
        ],
        features: [
            {
                icon: "/images/services/businessManagement/consulting.jpg",
                title: "Strategic Consulting",
                desc: "Develop goal-oriented roadmaps for sustainable growth and competitiveness.",
            },
            {
                icon: "/images/services/businessManagement/market-entry-plan.jpg",
                title: "Market Entry Planning",
                desc: "Define go-to-market strategies with competitor and demand insights.",
            },
            {
                icon: "/images/services/businessManagement/leadership-training.jpg",
                title: "Leadership Training",
                desc: "Strengthen leadership skills for innovation, agility, and accountability.",
            },
        ],
        useCases: [
            {
                title: "Enable startups and MSMEs to establish clear roadmaps, pitch confidently to investors, and streamline operations.",
                desc: "We help early-stage businesses define their vision, structure lean operations, and create compelling pitch decks—ensuring readiness for growth, funding, and market expansion.",
            },
            {
                title: "Drive enterprise-wide transformation through KPI-driven strategies, leadership development, and agile systems.",
                desc: "Our consultants work with enterprises to build data-backed strategies, upskill leadership teams, and implement scalable frameworks for sustained competitive advantage.",
            },
            {
                title: "Support public sector & NGOs in optimizing workflows, crafting impactful policies, and building cross-sector collaborations.",
                desc: "We assist non-profits and government bodies in enhancing operational efficiency, monitoring outcomes, and co-creating policies that align with social goals and compliance.",
            },
            {
                title: "Assist educational institutions in structuring governance, faculty development, and strategic institutional expansion.",
                desc: "We offer planning and advisory services to schools and colleges for capacity building, faculty training, accreditation readiness, and long-term institutional positioning.",
            },
        ],
          
      },

      //coalFields
    {
        slug: "coalfields",
        title: "Coal Field Operations & Consultancy",
        banner: "/images/services/coalFields/coal.jpg",
        detailImage: "/images/services/coalFields/rail&road-trans.png",
        intro:
            "OM Educom provides comprehensive coal field solutions including extraction planning, transportation logistics, and safety compliance. Our team ensures that coal operations are optimized, environmentally conscious, and fully compliant with regulatory frameworks.",
        points: [
            {
                title: "Coal Extraction & Processing",
                desc: "Consultation on open-pit and underground mining techniques, with focus on yield optimization and cost-efficiency.",
            },
            {
                title: "Transport & Logistics",
                desc: "Infrastructure planning for coal handling via road, rail, and conveyor systems. Coordination of bulk movement with safety protocols.",
            },
            {
                title: "Environmental Compliance",
                desc: "Pollution control, dust suppression, water table impact analysis, and eco-restoration planning.",
            },
            {
                title: "Safety Standards",
                desc: "Worker safety training, equipment certification, emergency response planning, and audit-ready SOPs.",
            },
            {
                title: "Regulatory Clearances",
                desc: "Assistance with mining leases, forest clearance, and statutory documentation.",
            },
        ],
        features: [
            {
                icon: "/images/services/coalFields/efficient -extraction.png",
                title: "Efficient Extraction",
                desc: "Maximized coal recovery using advanced geological mapping and blasting plans.",
            },
            {
                icon: "/images/services/coalFields/rail&road-trans.png",
                title: "Rail & Road Transport",
                desc: "Integrated coal movement strategies with rail siding and loading automation.",
            },
            {
                icon: "/images/services/coalFields/safety-check.jpeg",
                title: "Certified Safety Compliance",
                desc: "In-depth safety checks and worker training to meet DGMS & MOEF norms.",
            },
        ],
        useCases: [
            {
                title: "New Mining Projects: Support for initial feasibility, site planning, and regulatory approvals.",
                desc: "We assist mining companies with geological surveys, cost-benefit analysis, and project planning while ensuring alignment with local and national regulations for smooth project kickoff.",
            },
            {
                title: "Coal Transportation Network: Design and optimization of haulage systems and infrastructure.",
                desc: "Our logistics experts create integrated transport plans including rail sidings, road connectivity, and conveyor networks to ensure efficient, cost-effective, and timely coal movement.",
            },
            {
                title: "Safety Overhaul: Implementation of new safety SOPs and compliance systems at existing sites.",
                desc: "We audit existing mining operations, recommend improvements, and implement safety protocols, training modules, and response systems that meet DGMS, MOEF, and international standards.",
            },
            {
                title: "Environmental Audits: Periodic audits and mitigation plans for ecological impact reduction.",
                desc: "From dust and noise control to water table protection and reclamation planning, we offer detailed assessments and implement sustainability measures to reduce mining’s ecological footprint.",
            },
        ],
          
    },
      
    //Construction
    {
        slug: "construction",
        title: "Construction & Infrastructure",
        banner: "/images/services/construction.jpg",
        detailImage: "/images/services/construction/expert-engineering.jpeg",
        intro:
            "At OM Educom, we offer full-spectrum construction solutions for residential, commercial, industrial, and public infrastructure projects. From blueprint to buildout, our team ensures precision, quality, and timely delivery.",
        points: [
            {
                title: "Residential Projects",
                desc: "Villas, apartments, and townships with modern amenities.",
            },
            {
                title: "Commercial Builds",
                desc: "Office complexes, malls, retail outlets, and hotels.",
            },
            {
                title: "Industrial Construction",
                desc: "Warehouses, plants, logistics hubs, and utility structures.",
            },
            {
                title: "Infrastructure",
                desc: "Roads, bridges, water systems, and civic parks.",
            },
            {
                title: "Turnkey Execution",
                desc: "Complete project handling including materials, labour, and timelines.",
            },
        ],
        features: [
            {
                icon: "/images/services/construction/trunkey-solution.jpeg",
                title: "Turnkey Solutions",
                desc: "From design to delivery — all under one roof with a single point of responsibility.",
            },
            {
                icon: "/images/services/construction/expert-engineering.jpeg",
                title: "Expert Engineering",
                desc: "Led by certified engineers, architects, and site managers ensuring structural safety.",
            },
            {
                icon: "/images/services/construction/on-time.jpeg",
                title: "On-Time Delivery",
                desc: "Time-bound planning and execution, aligned with your project goals.",
            },
        ],
        useCases: [
            {
                title: "Real Estate Projects: Townships and housing societies designed with modern amenities and sustainability.",
                desc: "We design and execute residential projects including villas, apartments, and gated communities with smart planning, green building practices, and integrated lifestyle features.",
            },
            {
                title: "Smart Infrastructure: Green-certified public spaces, walkways, parks, and urban civic projects.",
                desc: "Our civic infrastructure solutions focus on sustainable design, accessibility, and modern urban planning to enhance community living and public utility.",
            },
            {
                title: "Government Tenders: Roads, flyovers, sewage systems executed under compliance and documentation.",
                desc: "We manage large-scale infrastructure projects through proper bid participation, compliance with statutory bodies, and seamless coordination with government agencies.",
            },
            {
                title: "Corporate Offices: IT campuses and commercial workspaces with HVAC, fire safety, and modular design.",
                desc: "From site analysis to fit-out, we build secure and efficient business spaces equipped with modern amenities and regulatory standards in fire safety, networking, and energy efficiency.",
            },
        ],
          
    },

    //emergencyServices
    {
        slug: "emergencyServices",
        title: "Emergency Preparedness & Response",
        banner: "/images/services/emergencyServices/emergency-banner.jpeg",
        detailImage: "/images/services/emergencyServices/rapid-response.jpg",
        intro:
            "Our Emergency Services division focuses on providing critical planning, resources, and training required to prepare for and respond to disasters effectively. From supply of emergency kits to simulation drills, we equip organizations and governments to act swiftly in times of crisis.",
        points: [
            {
                title: "Disaster Management Planning",
                desc: "Customized response plans for floods, earthquakes, industrial hazards, and pandemics.",
            },
            {
                title: "Rescue Equipment Supply",
                desc: "High-grade medical, fire safety, and rescue tools for field deployment.",
            },
            {
                title: "Simulation & Mock Drills",
                desc: "Emergency preparedness training for organizations and frontline teams.",
            },
            {
                title: "Incident Command System Setup",
                desc: "Frameworks for multi-agency coordination during emergencies.",
            },
            {
                title: "24/7 Emergency Response Consultancy",
                desc: "Rapid advisory support during active incidents.",
            },
        ],
        features: [
            {
                icon: "/images/services/emergencyServices/rapid-response.jpg",
                title: "Rapid Response Plans",
                desc: "Tailored action plans based on risk zone classification and vulnerability mapping.",
            },
            {
                icon: "/images/services/emergencyServices/emergency-kit.jpg",
                title: "Essential Equipment Kits",
                desc: "Supply of fire extinguishers, life jackets, first aid kits, oxygen masks, etc.",
            },
            {
                icon: "/images/services/emergencyServices/community-awareness.jpg",
                title: "Capacity Building",
                desc: "On-site emergency training, table-top exercises, and community awareness drives.",
            },
        ],
        useCases: [
            {
                title: "Government Disaster Teams: Development of national and state-level disaster response protocols and infrastructure readiness.",
                desc: "We assist in creating structured disaster response systems, multi-agency coordination protocols, and pre-positioned equipment hubs to ensure rapid mobilization during natural or industrial emergencies.",
            },
            {
                title: "Corporate Industrial Safety: Ensure factory safety and compliance by integrating emergency planning with SOPs.",
                desc: "Our experts help industries design factory-specific emergency action plans, conduct mock drills, and implement safety audits to align with fire, chemical, and structural safety standards.",
            },
            {
                title: "Hospitals & Schools: Train staff and students for emergency evacuation, triage, and communication drills.",
                desc: "We conduct institution-specific drills and provide kits to ensure children, teachers, and hospital staff can respond calmly and effectively to any emergency situation.",
            },
            {
                title: "Public Events & Gatherings: Crowd control planning, first responder stations, and real-time surveillance integration.",
                desc: "From religious gatherings to sports events, we support organizers with contingency plans, medical stations, and evacuation strategies ensuring public safety in large gatherings.",
            },
        ],

    },
    //engineeringAndArchitectureConsultancy
    {
        slug: "engineeringAndArchitectureConsultancy",
        title: "Engineering & Architectural Consultancy",
        banner: "/images/services/engineering.jpg",
        detailImage: "/images/services/engineering/engineering.jpg",
        intro:
            "At OM Educom, we provide end-to-end consultancy services for civil, mechanical, and electrical engineering along with architectural design and project execution. Our team ensures precision, sustainability, and innovation across all phases.",
        points: [
            {
                title: "Civil Engineering",
                desc: "Structural analysis, site supervision, and construction planning.",
            },
            {
                title: "MEP Engineering",
                desc: "HVAC, fire safety, lighting, and plumbing design services.",
            },
            {
                title: "Architectural Planning",
                desc: "Smart and efficient designs for residential, commercial, and public spaces.",
            },
            {
                title: "Feasibility Studies",
                desc: "Site surveys, budgeting, and environmental analysis.",
            },
            {
                title: "Project Management",
                desc: "From blueprint to handover with time and quality assurance.",
            },
        ],
        features: [
            {
                icon: "/images/services/engineering/3d.jpg",
                title: "3D Modeling & Visualization",
                desc: "Architectural walkthroughs and high-resolution renders for better planning.",
            },
            {
                icon: "/images/services/engineering/engineering.jpg",
                title: "Multidisciplinary Engineering",
                desc: "Seamless integration of structural, electrical, mechanical, and plumbing services.",
            },
            {
                icon: "/images/services/engineering/execution.png",
                title: "Turnkey Execution",
                desc: "Design, procurement, implementation, and delivery under one roof.",
            },
        ],
        useCases: [
            {
                title: "Government Infrastructure: Public buildings, roads, and utilities built under full regulatory compliance.",
                desc: "We assist government bodies in planning and executing large-scale infrastructure projects, ensuring adherence to safety norms, environmental guidelines, and efficient project delivery through expert engineering supervision.",
            },
            {
                title: "Real Estate Developers: Residential and commercial projects managed from concept to completion.",
                desc: "We offer complete consultancy—from conceptual planning and architectural design to construction drawings and site execution—for builders and real estate groups aiming for on-time, high-quality project delivery.",
            },
            {
                title: "Industrial Plants: Support for layout design, machinery foundations, and technical installations.",
                desc: "Our engineers provide structural planning, load analysis, and utility integration services to industries setting up manufacturing units, warehouses, or specialized production plants.",
            },
            {
                title: "Smart Cities: Urban infrastructure designed for technology-enabled, sustainable living.",
                desc: "We contribute to smart city development with eco-friendly architectural solutions, IoT-ready infrastructure planning, and futuristic utility designs that integrate mobility, safety, and sustainability.",
            },
        ],
          
    },
    //finTech
    {
        slug: "fintech",
        title: "Innovative FinTech for the Digital Economy",
        banner: "/images/services/fintech.jpg",
        detailImage: "/images/services/fintech/realTime.jpg",
        intro:
            "OM Educom empowers financial institutions, startups, and enterprises with secure and scalable FinTech solutions. From mobile banking to real-time analytics, our tools transform how businesses manage and move money.",
        points: [
            {
                title: "Custom Platforms",
                desc: "Wallets, ledgers, and mobile-first banking solutions.",
            },
            {
                title: "Payment Integrations",
                desc: "UPI, cards, and wallet integrations with ease.",
            },
            {
                title: "RegTech Compliance",
                desc: "Secure KYC, AML, and auditing modules.",
            },
            {
                title: "Customer Analytics",
                desc: "Risk insights, transaction patterns, and fraud alerts.",
            },
            {
                title: "Blockchain Capabilities",
                desc: "Smart contracts, tokenization & decentralization support.",
            },
        ],
        features: [
            {
                icon: "/images/services/fintech/secure.webp",
                title: "Secure Architecture",
                desc: "Built with multi-layer encryption and real-time threat monitoring.",
            },
            {
                icon: "/images/services/fintech/realTime.jpg",
                title: "Data-Driven Insights",
                desc: "Real-time behavioral analytics and risk prediction models.",
            },
            {
                icon: "/images/services/fintech/multi-payment.jpeg",
                title: "Multi-Payment Gateways",
                desc: "Integrates UPI, cards, wallets, and net banking seamlessly.",
            },
        ],
        useCases: [
            {
                title: "Digital Banks & Wallets: Launch mobile-first financial services with end-to-end security and compliance.",
                desc: "We help fintech startups and traditional banks design intuitive user interfaces, secure authentication flows, and real-time account management systems to engage modern consumers.",
            },
            {
                title: "NBFCs & Lending: Automate credit scoring, disbursal, and repayments with real-time analytics.",
                desc: "Our lending platforms use behavior-based risk models, API-based KYC, and automated workflows to streamline disbursement, collections, and customer onboarding for NBFCs and microfinance institutions.",
            },
            {
                title: "Payment Gateways: Integrate UPI, cards, and wallet payments effortlessly across platforms.",
                desc: "We enable businesses to accept and manage digital payments through unified dashboards, auto-reconciliation tools, and robust APIs supporting scalable transaction volumes.",
            },
            {
                title: "InsurTech Platforms: Enable digital policy issuance, claims automation, and fraud detection.",
                desc: "Our team builds tools that simplify policy underwriting, automate claim processing, and detect suspicious activities using AI models for health, travel, and general insurance providers.",
            },
        ],
          
    },

    //fireSafety
    {
        slug: "fireSafety",
        title: "Comprehensive Fire Safety Solutions",
        banner: "/images/services/fireSafety/fireSafety-banner.jpeg",
        detailImage: "/images/services/fireSafety/Fire-safety-training.jpg",
        intro:
            "We provide end-to-end fire safety solutions for commercial, residential, and industrial establishments. From consultation and system design to implementation and training, our services ensure your premises meet all safety standards and are well-prepared in emergencies.",
        points: [
            {
                title: "Fire Detection Systems",
                desc: "Installation of advanced smoke, gas, and heat detectors integrated with alarms.",
            },
            {
                title: "Suppression Systems",
                desc: "Design and deployment of sprinklers, CO₂, FM-200, and clean agent systems.",
            },
            {
                title: "Risk Assessment",
                desc: "Detailed on-site audits, hazard identification, and mitigation planning.",
            },
            {
                title: "Compliance Services",
                desc: "Fire safety certifications, legal documentation, and periodic inspections.",
            },
            {
                title: "Emergency Response Training",
                desc: "On-site drills, evacuation plans, and staff safety workshops.",
            },
        ],
        features: [
            {
                icon: "/images/services/fireSafety/24-7-Monitoring.jpg",
                title: "24/7 Monitoring",
                desc: "Intelligent alarm systems and monitoring stations to respond instantly to threats.",
            },
            {
                icon: "/images/services/fireSafety/regulatory-compliance.jpeg",
                title: "Regulatory Compliance",
                desc: "Ensure adherence to local and national safety codes with our certified services.",
            },
            {
                icon: "/images/services/fireSafety/Fire-safety-training.jpg",
                title: "Staff Training",
                desc: "Practical evacuation drills and emergency readiness programs for your team.",
            },
        ],
        useCases: [
            {
                title: "Commercial Complexes: Fire detection, evacuation drills, and equipment installation for malls, offices, and co-working spaces.",
                desc: "We implement multi-zone alarm systems, sprinkler networks, and conduct safety training sessions to ensure readiness and compliance for high-footfall commercial environments.",
            },
            {
                title: "Factories & Warehouses: Specialized solutions for high-risk environments including chemical and manufacturing units.",
                desc: "Our team conducts risk analysis for hazardous materials, installs gas-based suppression systems, and sets up emergency SOPs with real-time alerting mechanisms.",
            },
            {
                title: "Hospitals & Institutions: Zero-downtime suppression systems and smoke evacuation planning for sensitive areas.",
                desc: "We deploy FM-200 and clean agent systems that protect critical medical and IT infrastructure without interrupting ongoing operations, along with strategic smoke extraction setups.",
            },
            {
                title: "Residential Societies: Cost-effective protection systems, AMC services, and awareness programs for gated communities.",
                desc: "From central fire panels and hose reels to resident workshops and annual audits, we help housing societies stay secure and aware with minimal overhead.",
            },
        ],          
    },
    //foodAndConfectionery
    {
        slug: "foodAndConfectionery",
        title: "Foods & Confectionery Solutions",
        banner: "/images/services/foods/food-bannner.jpeg",
        detailImage: "/images/services/foods/recipes.jpeg",
        intro:
            "We empower food businesses—from startups to established brands—with tailored solutions in product innovation, packaging design, and regulatory compliance. Our approach combines creativity with food safety expertise to help clients deliver delicious, market-ready products.",
        points: [
            {
                title: "Product Development",
                desc: "End-to-end recipe formulation, flavor enhancement, and shelf-life testing.",
            },
            {
                title: "Packaging Design",
                desc: "Custom eco-friendly packaging with brand identity and food-grade materials.",
            },
            {
                title: "Regulatory Compliance",
                desc: "FSSAI approval, labeling audits, and export-ready certifications.",
            },
            {
                title: "Cold Chain Logistics",
                desc: "Safe storage, transport, and inventory control for perishable items.",
            },
            {
                title: "Retail Readiness",
                desc: "Barcoding, POS integration, and branding for online/offline distribution.",
            },
        ],
        features: [
            {
                icon: "/images/services/foods/recipes.jpeg",
                title: "Innovative Recipes",
                desc: "From fusion sweets to healthy snacks we create taste-driven, health conscious food lines.",
            },
            {
                icon: "/images/services/foods/packaging.jpeg",
                title: "Custom Packaging",
                desc: "Brand-consistent, safe, and sustainable packaging with eye catching designs.",
            },
            {
                icon: "/images/services/foods/FSSAI.png",
                title: "FSSAI & Global Compliance",
                desc: "Advisory and documentation for domestic and international food safety regulations.",
            },
        ],
        useCases: [
            {
                title: "Artisan Confectionery Brands: We help local bakers and sweet makers build a national presence with scalable recipes and packaging design.",
                desc: "From traditional sweets to modern fusion confections, we assist in refining formulations, enhancing shelf life, and developing packaging that captures cultural aesthetics while ensuring freshness and compliance.",
            },
            {
                title: "Packaged Food Startups: From nutrition bars to instant mixes, we offer end-to-end development from ideation to market launch.",
                desc: "We collaborate with food entrepreneurs to co-create recipes, conduct sensory testing, and ensure regulatory approvals—delivering complete go-to-market strategy for both D2C and retail channels.",
            },
            {
                title: "Export-Ready Producers: Advisory on compliance, labeling, and certification for international food markets.",
                desc: "We guide brands through global food standards (FDA, HACCP, ISO), support packaging redesigns for destination markets, and manage FSSAI/FDA/USDA documentation for seamless exports.",
            },
            {
                title: "Cold Chain Retailers: Custom solutions for preserving freshness during transit using temperature-controlled logistics.",
                desc: "We provide expertise on cold storage infrastructure, route planning for perishable distribution, and IoT-based tracking to maintain quality from production to final shelf.",
            },
        ],
          
    },

    //generalOrderSupply
    {
        slug: "generalOrderSupply",
        title: "General Order Supply & Procurement Services",
        banner: "/images/services/generalSupply/general-supply.jpeg",
        detailImage: "/images/services/generalSupply/high-order.jpg",
        intro:
            "OM Educom ensures smooth, compliant, and timely procurement solutions for government, institutions, and enterprises. We manage sourcing, logistics, and delivery across a wide range of categories and regions.",
        points: [
            {
                title: "Government Procurement",
                desc: "DGS&D/GeM-registered with documentation and compliance.",
            },
            {
                title: "Bulk Order Management",
                desc: "Warehousing, tracking, and dispatch for large quantities.",
            },
            {
                title: "End-to-End Logistics",
                desc: "From vendor selection to last-mile delivery.",
            },
            {
                title: "Multi-Category Fulfillment",
                desc: "Electronics, furniture, medical equipment, defense gear, and more.",
            },
            {
                title: "Vendor Management",
                desc: "Vetted suppliers, consistent quality, and SLA adherence.",
            },
        ],
        features: [
            {
                icon: "/images/services/generalSupply/supply-management.jpg",
                title: "Procurement and supply chain management",
                desc: "From cities to remote sites with live tracking and delivery proof.",
            },
            {
                icon: "/images/services/generalSupply/high-order.jpg",
                title: "High-Volume Orders",
                desc: "Capability to fulfill large-scale tenders within tight timelines.",
            },
            {
                icon: "/images/services/generalSupply/compliance.jpg",
                title: "Compliance Ready",
                desc: "Aligned with e-tendering norms, GST, PAN, MSME, and ISO requirements.",
            },
        ],
        useCases: [
            {
                title: "Public Sector Orders: Tender-based procurement for ministries, PSUs, and rural schemes with complete documentation.",
                desc: "We manage the entire lifecycle of public procurement—from responding to RFPs to ensuring timely delivery and post-supply support—adhering strictly to GeM, DGS&D, and other government protocols.",
            },
            {
                title: "Hospital & Medical Supply: PPE kits, patient beds, monitors, and consumables supplied to hospitals and care centers.",
                desc: "Our network ensures timely availability of certified medical supplies with priority handling, custom packaging, and traceable logistics to meet critical health infrastructure needs.",
            },
            {
                title: "Education Sector Supply: Desks, smart boards, lab equipment, and IT systems delivered to educational institutions.",
                desc: "From rural schools to universities, we enable centralized ordering, consolidated warehousing, and secure delivery of learning infrastructure across geographies.",
            },
            {
                title: "Defense & Security: Field supplies, protective gear, and surveillance equipment for armed forces and agencies.",
                desc: "We work with defense procurement officers to supply mission-critical items with strict quality checks, multi-point delivery coordination, and tamper-proof packaging.",
            },
        ],
          
    },
    //greenFuelsAndEnergy
    {
        slug: "greenFuelsAndEnergy",
        title: "Green Fuels & Clean Energy",
        banner: "/images/services/greenFuel/banner.jpg",
        detailImage: "/images/services/greenFuel/energy-optimization.jpeg",
        intro:
            "OM Educom offers sustainable and scalable solutions in renewable energy. From solar and wind infrastructure to biofuel consulting, we help clients transition to a greener, more efficient energy model.",
        points: [
            {
                title: "Solar & Wind Installations",
                desc: "Turnkey EPC services for rooftop and large-scale projects.",
            },
            {
                title: "Biofuel Projects",
                desc: "Setup and advisory for biodiesel, bioethanol, and biomass-based systems.",
            },
            {
                title: "Energy Audits",
                desc: "Analysis and optimization of energy usage in commercial and industrial setups.",
            },
            {
                title: "Carbon Footprint Assessments",
                desc: "Reporting and certification for sustainability goals.",
            },
            {
                title: "Smart Grid & IoT Integration",
                desc: "Monitoring and automation for renewable energy systems.",
            },
        ],
        features: [
            {
                icon: "/images/services/greenFuel/solar-energy.jpg",
                title: "Solar EPC Solutions",
                desc: "Design and deployment of solar energy systems from panel to grid.",
            },
            {
                icon: "/images/services/greenFuel/bioFuel.jpg",
                title: "Biofuel Expertise",
                desc: "End-to-end consultancy for setting up sustainable biofuel operations.",
            },
            {
                icon: "/images/services/greenFuel/energy-optimization.jpeg",
                title: "Energy Optimization",
                desc: "Reduce consumption and carbon output with smart monitoring tools.",
            },
        ],
        useCases: [
            {
                title: "Commercial Buildings: Install rooftop solar and manage power through smart metering.",
                desc: "Empower offices, malls, and institutions with clean energy by integrating solar systems, real-time energy dashboards, and IoT-based consumption control for reduced operational costs.",
            },
            {
                title: "Industrial Zones: Conduct energy audits and reduce electricity bills through efficient systems.",
                desc: "Our team evaluates power-intensive operations, recommends energy-saving measures, and implements automation and optimization for long-term savings and regulatory compliance.",
            },
            {
                title: "Rural Electrification: Deploy microgrids and solar kits in remote villages and tribal areas.",
                desc: "Facilitate access to electricity in off-grid regions through solar street lighting, battery backups, and decentralized clean energy systems that uplift rural livelihoods.",
            },
            {
                title: "Government Projects: Support green mission targets with certified renewable projects and audits.",
                desc: "Collaborate with state and national bodies on MNRE and ESG mandates by deploying solar farms, biofuel initiatives, and carbon reduction programs with full documentation and reporting.",
            },
        ],
          
    },

    //Hospitality
    {
        slug: "hospitality",
        title: "Hospitality Management & Consulting",
        banner: "/images/services/hospitality/hospitality-banner.png",
        detailImage: "/images/services/hospitality/guest-centric-app.jpg",
        intro:
            "OM Educom provides specialized services for the hospitality sector, covering operational consulting, training, and end-to-end facility management. We help hospitality businesses improve guest satisfaction, streamline operations, and enhance brand value.",
        points: [
            {
                title: "Hotel Management Consulting",
                desc: "Strategic planning, revenue management, and guest experience design.",
            },
            {
                title: "Staff Training & SOPs",
                desc: "Front desk etiquette, housekeeping, food & beverage service, and guest interaction protocols.",
            },
            {
                title: "Facility Management",
                desc: "Layout planning, interior setup, and routine facility upkeep for seamless operations.",
            },
            {
                title: "Pre-Opening Support",
                desc: "Branding, vendor tie-ups, equipment sourcing, and digital presence setup.",
            },
            {
                title: "Audit & Quality Control",
                desc: "Mystery audits, feedback system setup, and compliance with hospitality standards.",
            },
        ],
        features: [
            {
                icon: "/images/services/hospitality/guest-centric-app.jpg",
                title: "Guest-Centric Approach",
                desc: "Design operations and SOPs to deliver delightful and consistent guest experiences.",
            },
            {
                icon: "/images/services/hospitality/man-power.jpg",
                title: "Skilled Manpower",
                desc: "Trained staff with hospitality etiquette and multilingual communication skills.",
            },
            {
                icon: "/images/services/hospitality/facility-care.jpg",
                title: "Full Facility Care",
                desc: "From kitchen hygiene to HVAC and sanitation everything is maintained proactively.",
            },
        ],
        useCases: [
            {
                title: "Hotels & Resorts: End-to-end consulting from property launch to full operational SOPs and customer experience audits.",
                desc: "We assist in launching and managing hospitality establishments by setting up processes, training staff, designing guest journeys, and performing routine audits to ensure consistent service quality.",
            },
            {
                title: "Cafés & Restaurants: From kitchen design and menu engineering to staff grooming and service workflows.",
                desc: "Whether launching a new dining venture or improving existing service, we offer tailored solutions for ambiance setup, staff behavior training, kitchen logistics, and hygiene compliance.",
            },
            {
                title: "Event Venues: Help optimize event spaces with sound, seating, and crowd management solutions.",
                desc: "We help event venues operate efficiently with layout planning, crowd control strategy, security coordination, audio-visual integration, and vendor management support.",
            },
            {
                title: "Healthcare Hospitality: Setup and manage front desk and patient care operations for hospitals and wellness centers.",
                desc: "Elevate the patient experience by streamlining registration, visitor handling, facility maintenance, and round-the-clock concierge-style services in healthcare institutions.",
            },
        ],
          
    },

    //itSupplyAndServices
    {
        slug: "itSupplyAndServices",
        title: "IT Supply & Services",
        banner: "/images/services/itSupply/itsupply-banner.jpeg",
        detailImage: "/images/services/itSupply/security.jpg",
        intro:
            "OM Educom’s IT Supply and Services division delivers comprehensive technology procurement, deployment, and maintenance solutions for businesses, institutions, and government bodies.",
        points: [
            {
                title: "Hardware Procurement",
                desc: "Desktops, laptops, printers, servers, routers, firewalls, and more.",
            },
            {
                title: "Software Licensing",
                desc: "Genuine OS, productivity suites, antivirus, ERP software, and cloud licenses.",
            },
            {
                title: "IT Infrastructure",
                desc: "Structured cabling, server rooms, LAN/WAN networks, Wi-Fi setup.",
            },
            {
                title: "Cloud & Virtualization",
                desc: "Deployment of AWS, Azure, GCP, virtual desktops, and backup services.",
            },
            {
                title: "Cybersecurity",
                desc: "Endpoint protection, firewall configuration, penetration testing, and audits.",
            },
        ],
        features: [
            {
                icon: "/images/services/itSupply/quick-turnaround.png",
                title: "Quick Turnaround",
                desc: "Rapid sourcing, configuration, and delivery with minimal downtime.",
            },
            {
                icon: "/images/services/itSupply/tech-support.jpeg",
                title: "Tech Support",
                desc: "Onsite and remote troubleshooting, AMC, and preventive maintenance.",
            },
            {
                icon: "/images/services/itSupply/security.jpg",
                title: "Enterprise Security",
                desc: "Layered protection against cyber threats and data breaches.",
            },
        ],
        useCases: [
            {
                title: "Educational Institutions: Smart classrooms, lab equipment, software labs, and centralized administration IT.",
                desc: "We enable schools, colleges, and universities to modernize their education ecosystem with smart boards, licensed software, secure networks, and server-based data management solutions.",
            },
            {
                title: "Corporate Offices: Full-fledged IT setup from desktops to virtual meeting rooms with VPNs and VoIP.",
                desc: "From procurement of endpoint devices to the creation of secure digital workspaces, we provide scalable IT solutions that support hybrid work, data privacy, and productivity tools.",
            },
            {
                title: "Healthcare Facilities: Secure medical records systems, diagnostic software, and telemedicine infrastructure.",
                desc: "We help hospitals and clinics set up secure and compliant IT environments for storing health data, enabling virtual consultations, and integrating diagnostic systems with backend infrastructure.",
            },
            {
                title: "Government Departments: e-Governance systems, hardware provisioning, and cloud migration for public sector units.",
                desc: "Our team supports digital transformation in the public sector by offering compliant IT procurement, cloud architecture, cybersecurity protocols, and support for digital citizen services.",
            },
        ],
          
    },
    //liquorTrade

    {
        slug: "liquorTrade",
        title: "Liquor Trade Compliance & Distribution",
        banner: "/images/services/liquorTrade/liquor-banner.jpg",
        detailImage: "/images/services/liquorTrade/cold-chain.jpg",
        intro:
            "OM Educom empowers liquor businesses to operate with full regulatory compliance, efficient logistics, and effective retail strategy. From licensing to smart inventory, we bring deep expertise to the alcohol distribution domain.",
        points: [
            {
                title: "Licensing & Legal Setup",
                desc: "Assistance with all licensing tiers—production, wholesale, retail.",
            },
            {
                title: "Retail Setup",
                desc: "Store planning, branding, and POS integration tailored to liquor outlets.",
            },
            {
                title: "Distribution Strategy",
                desc: "Region-wise logistics, distributor onboarding, cold-chain support.",
            },
            {
                title: "Inventory Intelligence",
                desc: "Real-time tracking, restocking alerts, and forecasting analytics.",
            },
            {
                title: "Excise Compliance",
                desc: "Staff training, documentation support, and audit readiness.",
            },
        ],
        features: [
            {
                icon: "/images/services/liquorTrade/Licenses.webp",
                title: "Regulatory Licensing",
                desc: "Get help with all approvals, renewals, and legal structure setup.",
            },
            {
                icon: "/images/services/liquorTrade/cold-chain.jpg",
                title: "Cold-Chain Logistics",
                desc: "Transport alcohol under controlled conditions with compliance support.",
            },
            {
                icon: "/images/services/liquorTrade/smart-inventory.jpg",
                title: "Smart Inventory",
                desc: "Automated reorder alerts, theft detection, and real-time tracking.",
            },
        ],
        useCases: [
            {
                title: "Retail Setup: From outlet design and compliance to customer experience planning.",
                desc: "We help entrepreneurs launch liquor retail outlets with support for licensing, interior planning, branding, and technology integration like POS and CCTV compliance.",
            },
            {
                title: "Excise Audit Prep: Comprehensive documentation and compliance readiness training.",
                desc: "Our team assists in preparing for excise inspections by ensuring all licenses, sales logs, and staff training meet state regulatory standards.",
            },
            {
                title: "Distributor Network: Optimize supply chains with region-wise distribution mapping.",
                desc: "We develop logistics blueprints and distributor onboarding strategies to streamline stock movement and maintain legal and cold-chain compliance.",
            },
            {
                title: "Alcohol Delivery: Legally guided support for launching app-based liquor delivery.",
                desc: "We offer end-to-end consulting for alcohol e-commerce—covering licensing, delivery app integration, rider training, and state-specific legal constraints.",
            },
        ],
          
    },

    //mining
    {
        slug: "mining",
        title: "Comprehensive Mining Solutions",
        banner: "/images/services/mining/mining-banner.jpeg",
        detailImage: "/images/services/mining/geological-expert.webp",
        intro:
            "OM Educom offers end-to-end mining consultancy and support, from geological studies to supply of specialized equipment and ensuring all environmental guidelines are followed. Our goal is to provide responsible and efficient mining services.",
        points: [
            {
                title: "Exploration & Feasibility",
                desc: "Geological surveys, sampling, and technical feasibility assessments.",
            },
            {
                title: "Equipment Sourcing",
                desc: "Procurement and supply of mining machinery and safety gear.",
            },
            {
                title: "Compliance & Licensing",
                desc: "Support with mining licenses, permits, and environmental clearances.",
            },
            {
                title: "Site Management",
                desc: "Monitoring and supervising site operations for safety and efficiency.",
            },
            {
                title: "Green Mining",
                desc: "Eco-friendly practices and technologies for sustainable resource extraction.",
            },
        ],
        features: [
            {
                icon: "/images/services/mining/geological-expert.webp",
                title: "Geological Expertise",
                desc: "Detailed site evaluation using modern geophysical tools.",
            },
            {
                icon: "/images/services/mining/advanceEquip.jpg",
                title: "Advanced Equipment",
                desc: "Supply of drills, excavators, and mining safety gear.",
            },
            {
                icon: "/images/services/mining/sustainable-mining.jpg",
                title: "Sustainable Mining",
                desc: "Eco-conscious practices and reduced environmental impact.",
            },
        ],
        useCases: [
            {
                title: "Coal & Mineral Extraction",
                desc: "Support for identifying mineable resources, preparing mining plans, and navigating the approval process including geological surveys and environmental impact assessments.",
            },
            {
                title: "Mine Site Setup",
                desc: "Development of essential infrastructure such as access roads, worker facilities, safety zones, storage yards, and on-site power systems to enable smooth operations.",
            },
            {
                title: "Safety & Compliance Audits",
                desc: "Conduct regular inspections and audits to maintain adherence to safety regulations and statutory mining standards, ensuring DGMS and MOEF compliance.",
            },
            {
                title: "Environmental Restoration",
                desc: "Plan and execute land rehabilitation post-mining with reforestation, water table protection, and eco-restoration aligned with environmental clearance conditions.",
            },
        ],
          
    },
    //realEstate
    {
        slug: "realEstate",
        title: "Comprehensive Real Estate Solutions",
        banner: "/images/services/realEstate/real-estate-banner.jpg",
        detailImage: "/images/services/realEstate/real-estate-project-execution.jpg",
        intro:
            "OM Educom provides end-to-end real estate services—from property development to legal compliance. We support residential, commercial, and industrial real estate projects with advisory, valuation, and project management capabilities.",
        points: [
            {
                title: "Property Development",
                desc: "Planning, design, construction, and turnkey execution of real estate projects.",
            },
            {
                title: "Asset Management",
                desc: "Ongoing maintenance, leasing support, and ROI optimization.",
            },
            {
                title: "Valuation Services",
                desc: "Accurate asset valuation for sales, investments, and compliance.",
            },
            {
                title: "Legal & Regulatory",
                desc: "End-to-end assistance with documentation, approvals, and RERA compliance.",
            },
            {
                title: "Investment Advisory",
                desc: "Market analysis and ROI forecasting for investors and institutions.",
            },
        ],
        features: [
            {
                icon: "/images/services/realEstate/real-estate-project-execution.jpg",
                title: "Turnkey Project Execution",
                desc: "From layout planning to handover – complete construction & management.",
            },
            {
                icon: "/images/services/realEstate/valuation&Advisory.jpg",
                title: "Valuation & Advisory",
                desc: "Reliable pricing models and market insights for buyers & sellers.",
            },
            {
                icon: "/images/services/realEstate/legalcompilance.jpg",
                title: "Legal Compliance",
                desc: "Support for land titles, RERA, local municipal clearances, and due diligence.",
            },
        ],
        useCases: [
            {
                title: "Residential Development",
                desc: "End-to-end planning and execution of residential projects including apartments, townships, and gated communities with focus on amenities, compliance, and timely delivery.",
            },
            {
                title: "Commercial Real Estate",
                desc: "Design and development of malls, retail spaces, and office complexes with smart layouts and long-term scalability aligned with market demand.",
            },
            {
                title: "Industrial Parks",
                desc: "Setup of logistics hubs, factories, and warehousing facilities with zoning approvals, utilities planning, and road connectivity.",
            },
            {
                title: "Real Estate Investment Advisory",
                desc: "Tailored consultation for investors and NRIs including market trend analysis, asset selection, and risk-adjusted ROI strategies.",
            },
        ],
          
    },

    // telecommunication
    {
        slug: "telecommunication",
        title: "Cutting-Edge Telecommunication Solutions",
        banner: "/images/services/telecommunication/telecom-banner.jpg",
        detailImage: "/images/services/telecommunication/high-speed.jpg",
        intro:
            "OM Educom delivers robust telecommunication services that power the digital backbone of smart cities, enterprises, and rural networks. From 5G tower installation to IoT-enabled infrastructure, we build reliable, scalable, and future-ready telecom systems.",
        points: [
            {
                title: "Network Planning & Installation",
                desc: "Design and deployment of fiber optics, broadband, and wireless networks.",
            },
            {
                title: "IoT Integration",
                desc: "Smart devices and sensors for home automation, agriculture, and industrial use cases.",
            },
            {
                title: "Tower Infrastructure",
                desc: "End-to-end support for cellular towers including site acquisition, erection, and testing.",
            },
            {
                title: "Maintenance & Troubleshooting",
                desc: "24/7 SLA-based support for performance monitoring and issue resolution.",
            },
            {
                title: "Rural & Remote Connectivity",
                desc: "Projects for last-mile access, satellite link setups, and VSAT systems.",
            },
        ],
        features: [
            {
                icon: "/images/services/telecommunication/high-speed.jpg",
                title: "High-Speed Connectivity",
                desc: "Fiber, 5G, and LTE deployment for urban and rural networks.",
            },
            {
                icon: "/images/services/telecommunication/smart-device.jpg",
                title: "IoT & Smart Devices",
                desc: "Solutions for smart cities, buildings, homes, and agriculture.",
            },
            {
                icon: "/images/services/telecommunication/tech-support.jpeg",
                title: "24x7 Technical Support",
                desc: "Remote and on-site support for minimal downtime.",
            },
        ],
        useCases: [
            {
                title: "Smart Cities",
                desc: "Development of telecom infrastructure including fiber optics, smart poles, public Wi-Fi, and surveillance systems for connected urban environments.",
            },
            {
                title: "Rural Connectivity",
                desc: "Deployment of VSAT systems, satellite links, and wireless broadband to provide last-mile connectivity in underserved and remote areas.",
            },
            {
                title: "Industrial IoT",
                desc: "Enabling real-time data exchange, automation, and remote equipment control through interconnected smart sensors and industrial devices.",
            },
            {
                title: "Education & Health",
                desc: "Establishing tele-education and telemedicine networks to extend digital access to schools, colleges, clinics, and rural health centers.",
            },
        ],
          
    },

    //trading
    {
    slug: "trading",
    title: "Global Trading & Import-Export Services",
    banner: "/images/services/trading/import-export-banner.jpg",
        detailImage: "/images/services/trading/global-reach.jpg",
    intro:
    "OM Educom's Trading division specializes in seamless import-export operations, commodity trade facilitation, and international logistics. Our services ensure compliance with all relevant documentation, legal protocols, and trade regulations for smooth global operations.",
    points: [
        {
            title: "Import-Export Services",
            desc: "Support in global procurement, customs clearance, and shipment handling.",
        },
        {
            title: "Commodity Trading",
            desc: "Buying and selling of essential goods including agricultural, industrial, and consumer commodities.",
        },
        {
            title: "Trade Documentation",
            desc: "Preparation of invoices, certificates of origin, bill of lading, and export-import licenses.",
        },
        {
            title: "Market Research",
            desc: "Identifying demand and sourcing opportunities across global markets.",
        },
        {
            title: "Regulatory Compliance",
            desc: "Adherence to international trade laws and customs duties.",
        },
    ],
    features: [
        {
            icon: "/images/services/trading/global-reach.jpg",
            title: "Global Reach",
            desc: "Trade across continents with our wide logistics and distribution network.",
        },
        {
            icon: "/images/services/trading/full-compliance.jpg",
            title: "Full Compliance",
            desc: "Meet international legal, tax, and certification requirements hassle-free.",
        },
        {
            icon: "/images/services/trading/commodity-expertise.jpg",
            title: "Commodity Expertise",
            desc: "Deep insights into global commodity trends and trading strategies.",
        },
    ],
        useCases: [
            {
                title: "Import-Export Startups",
                desc: "We assist new businesses in launching and managing import-export operations with full compliance and global logistics support.",
            },
            {
                title: "Bulk Commodity Trade",
                desc: "Facilitation of high-volume trade for agricultural, industrial, and essential goods across domestic and international markets.",
            },
            {
                title: "Manufacturer Distribution",
                desc: "Helping local manufacturers expand their reach by connecting them with international buyers and streamlining export logistics.",
            },
            {
                title: "Compliance Support",
                desc: "Advisory and documentation assistance to ensure businesses meet customs, taxation, and international trade regulations.",
            },
        ],
      
},

    //waterAndLandManagement
    {
        slug: "waterAndLandManagement",
        title: "Sustainable Water & Land Management",
        banner: "/images/services/land&watermanagement/water&land-banner.jpeg",
        detailImage: "/images/services/land&watermanagement/smart-irrigation.jpg",
        intro:
            "Our Water and Land Management services are designed to promote sustainable resource use, prevent degradation, and ensure optimal land and water utilization. We work closely with communities, businesses, and governments to create eco-conscious solutions that support agriculture, urban planning, and conservation.",
        points: [
            {
                title: "Irrigation & Watershed Development",
                desc: "Design and implementation of micro-irrigation, drip systems, and community watershed projects.",
            },
            {
                title: "Land Surveying & GIS Mapping",
                desc: "High-precision tools for terrain analysis, zoning, and development planning.",
            },
            {
                title: "Soil & Water Testing",
                desc: "Scientific assessments to guide agricultural or construction suitability and sustainability.",
            },
            {
                title: "Environmental Impact Assessments",
                desc: "Detailed EIA reports and strategies for eco-compliance and clearance.",
            },
            {
                title: "Rehabilitation & Conservation",
                desc: "Projects for degraded land restoration, rainwater harvesting, and afforestation.",
            },
        ],
        features: [
            {
                icon: "/images/services/land&watermanagement/smart-irrigation.jpg",
                title: "Smart Irrigation",
                desc: "Efficient water use for agriculture using IoT-based drip and sprinkler systems.",
            },
            {
                icon: "/images/services/land&watermanagement/gis.jpg",
                title: "GIS-Based Mapping",
                desc: "Accurate land data using satellite imagery and drone surveying.",
            },
            {
                icon: "/images/services/land&watermanagement/eco-restoration.jpg",
                title: "Eco Restoration",
                desc: "Rainwater harvesting, green cover enhancement, and erosion control systems.",
            },
        ],
        useCases: [
            {
                title: "Agricultural Villages",
                desc: "Modernize irrigation practices and prevent soil degradation through scientifically designed layouts and watershed development.",
            },
            {
                title: "Smart Cities & Urban Planning",
                desc: "Assist planning authorities with zoning, stormwater management, and land classification using GIS and EIA tools.",
            },
            {
                title: "Infrastructure Projects",
                desc: "Conduct feasibility and impact assessments for roads, dams, utilities, and public infrastructure developments.",
            },
            {
                title: "Eco-Zones & Forests",
                desc: "Support biodiversity management, afforestation, and land rehabilitation through community-based conservation efforts.",
            },
        ],
          
    }
  
];
  