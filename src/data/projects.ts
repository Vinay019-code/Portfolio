export interface ArchitectureStep {
  title: string;
  subtitle: string;
  details: string;
  type: "client" | "network" | "server" | "database" | "processing";
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    flow: ArchitectureStep[];
  };
  engineeringDecisions: {
    title: string;
    description: string;
  }[];
  challenges: string[];
  currentStatus: string;
  links: {
    github: string;
    liveDemo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "chat-application",
    slug: "chat-application",
    number: "01",
    title: "Real-Time Chat Application",
    category: "MERN Stack",
    tagline: "Full-stack messaging application with JWT auth and bidirectional WebSockets",
    shortDescription:
      "Full-stack chat application featuring user authentication, real-time messaging, responsive React interface, protected backend routes, and persistent MongoDB storage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO"],
    features: [
      "User authentication with encrypted credentials and session validation",
      "Real-time bidirectional messaging powered by Socket.IO events",
      "Protected backend routes utilizing custom JWT middleware authorization",
      "Express REST APIs engineered for user lookup and conversation persistence",
      "MongoDB database integration for durable user records and message history",
      "Modular, reusable React components with centralized state management",
    ],
    problem:
      "Traditional HTTP polling creates unnecessary server overhead and introduces latency in conversation flows, while unauthenticated WebSocket endpoints expose chat systems to unauthorized connections.",
    solution:
      "Engineered an event-driven MERN architecture pairing Express REST routes for initial handshake and profile retrieval with persistent Socket.IO connections for zero-latency message delivery, guarded by JWT validation.",
    architecture: {
      overview:
        "Separation of concerns between stateless HTTP REST endpoints for account management and stateful WebSocket channels for low-latency message streaming.",
      flow: [
        {
          title: "Client Application",
          subtitle: "React.js + State Management",
          details: "Modular UI components, message queue state, and active conversation tracking.",
          type: "client",
        },
        {
          title: "Network Boundary",
          subtitle: "HTTP REST & WebSockets",
          details: "Stateless JSON payloads for auth; persistent bi-directional duplex for instant messages.",
          type: "network",
        },
        {
          title: "Backend Service",
          subtitle: "Node.js & Express.js",
          details: "JWT verification middleware, message routing controllers, and connection lifecycle management.",
          type: "server",
        },
        {
          title: "Persistence Layer",
          subtitle: "MongoDB Database",
          details: "Schema-backed documents storing user profiles, chat rooms, and chronological message history.",
          type: "database",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "JWT Middleware Authorization",
        description:
          "Applied route-level middleware to verify bearer tokens before processing requests, preventing unauthenticated access to user chats.",
      },
      {
        title: "Centralized State Synchronization",
        description:
          "Maintained conversation queues and online presence in centralized frontend state to ensure seamless multi-component synchronization.",
      },
      {
        title: "Clean REST & WebSocket Separation",
        description:
          "Isolated synchronous CRUD operations (user signup, room creation) on REST endpoints while delegating event-driven messaging to Socket.IO.",
      },
    ],
    challenges: [
      "Synchronizing real-time incoming messages with persisted chat histories without race conditions or duplicated messages in the feed.",
      "Securing WebSocket connection establishment during the initial handshake with JWT token extraction.",
    ],
    currentStatus: "Completed core full-stack application and testing.",
    links: {
      github: "https://github.com/Vinay019-code",
    },
  },
  {
    id: "meditation-analytics",
    slug: "meditation-analytics",
    number: "02",
    title: "AI Meditation Analytics Application",
    category: "Python / Computer Vision",
    tagline: "Computer vision prototype for session tracking and posture signal telemetry",
    shortDescription:
      "Computer-vision prototype designed for analyzing meditation sessions through smartphone camera input, tracking body posture and extracting respiratory/movement signals.",
    technologies: ["Python", "MediaPipe", "OpenCV", "NumPy", "Matplotlib"],
    features: [
      "MediaPipe pose landmark detection for precise anatomical keypoint tracking",
      "Upper-body and shoulder-based signal extraction for posture and breathing analysis",
      "Signal processing utilizing moving-average smoothing and peak detection algorithms",
      "Real-time experimentation telemetry and inspection visualization with Matplotlib",
      "Camera-based non-invasive monitoring requiring no specialized wearable sensors",
    ],
    problem:
      "Measuring meditation consistency and physical stillness typically requires expensive wearable biosensors or subjective self-reporting, both of which introduce friction.",
    solution:
      "Created a vision-based pipeline using OpenCV and MediaPipe to detect subtle shoulder displacements over time, applying mathematical filters to derive movement trends and respiration rates directly from video.",
    architecture: {
      overview:
        "Frame-by-frame pipeline capturing video input, extracting high-confidence skeletal coordinates, filtering raw noise, and visualizing continuous telemetry.",
      flow: [
        {
          title: "Video Stream Ingestion",
          subtitle: "OpenCV Camera Pipeline",
          details: "Frame capture, color space normalization, and frame-rate synchronization from camera feed.",
          type: "client",
        },
        {
          title: "Skeletal Inference",
          subtitle: "MediaPipe Pose Model",
          details: "Extracts 33 3D landmark points including shoulder, clavicle, and torso coordinates.",
          type: "processing",
        },
        {
          title: "Signal Processing Engine",
          subtitle: "NumPy Vectorized Math",
          details: "Applies moving-average windowing to remove camera jitter, followed by local peak and valley detection.",
          type: "server",
        },
        {
          title: "Telemetry Inspector",
          subtitle: "Matplotlib Visualizer",
          details: "Plots concurrent raw and smoothed signals to evaluate breathing rhythms and posture stability.",
          type: "processing",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Moving-Average Smoothing Window",
        description:
          "Tuned moving-average filtering to isolate subtle periodic breathing expansions from sudden gross body shifts and camera sensor noise.",
      },
      {
        title: "Shoulder Keypoint Displacement Tracking",
        description:
          "Selected bilateral acromion landmarks as the primary feature vector due to their direct anatomical correlation with diaphragmatic breathing.",
      },
      {
        title: "Vectorized Computations with NumPy",
        description:
          "Used NumPy array slices for sliding window operations to maintain responsive computation per processed frame.",
      },
    ],
    challenges: [
      "Filtering out environmental lighting shifts and camera shake from the minute pixel variations caused by breathing movements.",
      "Maintaining accurate landmark tracking when users wear loose clothing or sit at varying angles relative to the camera lens.",
    ],
    currentStatus: "Working prototype with real-time signal inspection.",
    links: {
      github: "https://github.com/Vinay019-code",
    },
  },
  {
    id: "life-admin-os",
    slug: "life-admin-os",
    number: "03",
    title: "AI Life Admin OS",
    category: "Full-Stack AI Application",
    tagline: "Unified productivity platform for emails, bills, subscriptions, and reminders",
    shortDescription:
      "Productivity platform concept for managing personal administration tasks—emails, recurring subscriptions, utility bills, reminders, and documents—via modern dashboard architecture.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Modern responsive dashboard architecture with Next.js and reusable UI modules",
      "Dual-token authentication with short-lived access tokens and secure HttpOnly refresh cookies",
      "Google OAuth 2.0 integration for streamlined, verified user onboarding",
      "Gmail API integration to connect and parse user email workflows into structured tasks",
      "Unified view for organizing subscriptions, bill payments, and vital life-admin deadlines",
      "MongoDB document models structured for user task tracking and notification schedules",
    ],
    problem:
      "Personal administrative overhead (tracking bill due dates, renewing subscriptions, reviewing receipt emails) is scattered across disparate inboxes, spreadsheets, and calendar reminders.",
    solution:
      "Designed a centralized Life Admin operating system with automated Google OAuth and Gmail connectivity, consolidating actionable items into a modern, responsive Next.js workspace.",
    architecture: {
      overview:
        "Full-stack architecture combining a Next.js frontend with an authenticated Express backend communicating with external Google OAuth and Gmail APIs.",
      flow: [
        {
          title: "User Interface",
          subtitle: "Next.js App Router + Tailwind",
          details: "Dynamic life-admin dashboard, status overviews, itemized bills, and interactive action feeds.",
          type: "client",
        },
        {
          title: "Auth & Identity",
          subtitle: "Google OAuth 2.0 & JWT Cookies",
          details: "Access token in memory; HttpOnly refresh token cookie preventing client-side XSS tampering.",
          type: "network",
        },
        {
          title: "Integration Service",
          subtitle: "Gmail API & Express Backend",
          details: "Fetches user-approved email threads to extract transaction summaries, receipts, and dates.",
          type: "server",
        },
        {
          title: "Document Database",
          subtitle: "MongoDB Database",
          details: "Persists extracted tasks, subscription cycles, user preferences, and notification rules.",
          type: "database",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "HttpOnly Refresh Token Cookies",
        description:
          "Stored long-lived refresh tokens in secure HttpOnly cookies while keeping short-lived access tokens in memory for robust defense against XSS.",
      },
      {
        title: "Scoped OAuth Permissions",
        description:
          "Configured minimal Google API scopes to access only metadata and messages required for invoice and subscription parsing.",
      },
      {
        title: "Component-Driven Dashboard Design",
        description:
          "Constructed modular UI widgets with Tailwind CSS allowing quick composition of status cards, bill tables, and timeline feeds.",
      },
    ],
    challenges: [
      "Designing a safe token refresh rotation flow that maintains user sessions without interrupting background email syncing.",
      "Structuring unstructured email payloads into standardized database models for reminders and billing schedules.",
    ],
    currentStatus: "Architecture and core dashboard prototype implemented.",
    links: {
      github: "https://github.com/Vinay019-code",
    },
  },
];
