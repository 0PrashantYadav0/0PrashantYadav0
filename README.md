<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
  <img alt="Pixel-art hills outside Lucknow with a figure on the grass, laptop open" src="assets/banner-light.svg" width="100%">
</picture>

<!-- On a phone the donut sits above the name; on anything wider it floats
     to the right of the intro. The blank source hides whichever copy is
     not in use. -->
<p align="center">
  <picture>
    <source media="(min-width: 601px)" srcset="assets/blank.svg">
    <source media="(prefers-color-scheme: dark)" srcset="assets/donut-dark.svg">
    <img alt="" src="assets/donut-light.svg" width="230">
  </picture>
</p>

<picture>
  <source media="(max-width: 600px)" srcset="assets/blank.svg">
  <source media="(prefers-color-scheme: dark)" srcset="assets/donut-dark.svg">
  <img align="right" alt="A spinning ASCII donut" src="assets/donut-light.svg" width="290">
</picture>

# hi, prashant here 👋

<sub>Lucknow, India · Final year at IIIT Lucknow · Class of 2027</sub>

Software developer. I like building complex systems, instant coffee, and anime.

- Lately that means voice AI that picks up real phone calls, and the Go services that keep it on the line.
- 160+ pull requests merged into other people's projects, most of them into [stdlib-js](https://github.com/stdlib-js/stdlib).
- Graduating in June 2027. Building new software that makes an impact.

<a href="https://prashantyadav.vercel.app"><kbd>&nbsp;prashantyadav.vercel.app&nbsp;</kbd></a>&ensp;<a href="https://prashantyadav.vercel.app/resume.pdf"><kbd>&nbsp;Resume&nbsp;</kbd></a>&ensp;<a href="https://www.linkedin.com/in/prashantyadav097"><kbd>&nbsp;LinkedIn&nbsp;</kbd></a>&ensp;<a href="https://x.com/0prashantyadav0"><kbd>&nbsp;X&nbsp;</kbd></a>&ensp;<a href="mailto:devprashantkyadav@gmail.com"><kbd>&nbsp;Email&nbsp;</kbd></a>

<sub>Questions about my work? <a href="https://prashantyadav.vercel.app">Dev Senpai</a>, the chatbot on my site, has read everything on this page and more.</sub>

<br clear="both">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rule-dark.svg">
  <img alt="" src="assets/rule-light.svg" width="100%">
</picture>

## GitHub

<p align="center"><a href="https://github.com/0PrashantYadav0">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=0PrashantYadav0&hide_border=true&background=00000000&ring=4798f5&fire=4798f5&currStreakNum=e6edf3&sideNums=e6edf3&currStreakLabel=4798f5&sideLabels=929caa&dates=929caa&stroke=3d444d&date_format=j%20M%5B%20Y%5D">
    <img alt="Contribution streak" src="https://streak-stats.demolab.com?user=0PrashantYadav0&hide_border=true&background=00000000&ring=0f5abd&fire=0f5abd&currStreakNum=1f2328&sideNums=1f2328&currStreakLabel=0f5abd&sideLabels=59636e&dates=59636e&stroke=d0d7de&date_format=j%20M%5B%20Y%5D">
  </picture>
</a></p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/0PrashantYadav0/0PrashantYadav0/output/snake.svg">
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/0PrashantYadav0/0PrashantYadav0/output/snake-light.svg" width="100%">
</picture>

<sub>Merged pull requests, by project: <a href="https://github.com/stdlib-js/stdlib/pulls?q=is%3Apr+is%3Amerged+author%3A0PrashantYadav0">stdlib-js</a> · <a href="https://github.com/pulls?q=is%3Apr+is%3Amerged+author%3A0PrashantYadav0+-user%3A0PrashantYadav0">everywhere else</a></sub>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rule-dark.svg">
  <img alt="" src="assets/rule-light.svg" width="100%">
</picture>

## Experience

| Where | What | When |
|---|---|---|
| [Walmart Global Tech](https://walmart.com) | **Software Developer Intern.** AI agent skills over the Model Context Protocol that pull and correlate logs and metrics from OpenObserve, Grafana, and Prometheus; pod-level diagnostics and automated incident reports; a data migration pipeline; cloud cost cuts across internal services. | May 2026 to Jul 2026 |
| [Nugget by Zomato](https://nugget.com) | **Engineering Intern.** Go microservices and SIP telephony behind LLM voice bots, integrating Ozonetel dialers for inbound and outbound calls; multi-tenant ticketing pipelines shipped for Tata1mg and VoloHealth; the backend of a live agent-assist view for call handovers. | Dec 2025 to Feb 2026 |
| [Eternal (Zomato)](https://eternal.com) | **Engineering Intern.** Production voice bots end to end (NLU, TTS, STT, VAD) with ElevenLabs, Gemini, Deepgram, Groq, and OpenAI; a voice-orchestration framework adopted by Zomato Ads; GitOps CI/CD from scratch on AWS EKS and ECS. | Jun 2025 to Sep 2025 |
| [UBIQCURE](http://ubiqcure.com/) | **Software Engineering Intern, Tech Lead.** Four production portals in React, Node.js, and MongoDB; Azure CI/CD with Docker; led a team of six. | Aug 2024 to Nov 2024 |

<sub>B.Tech in Computer Science and Artificial Intelligence, [IIIT Lucknow](https://iiitl.ac.in), 2023 to 2027, GPA 8.6. Full history at [prashantyadav.vercel.app/experience](https://prashantyadav.vercel.app/experience).</sub>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rule-dark.svg">
  <img alt="" src="assets/rule-light.svg" width="100%">
</picture>

## Selected projects

| Project | What it is | Built with |
|---|---|---|
| [raft-kv](https://github.com/0PrashantYadav0/raft-kv) | Distributed key-value store on Raft, built from scratch: leader election, log replication, snapshotting over gRPC. Kill the leader mid-write and a new one takes over in a few hundred milliseconds with nothing lost. | `Go` `Raft` `gRPC` `bbolt` |
| [Limit Order Book](https://github.com/0PrashantYadav0/limit-order-book) | Price-time-priority matching engine with zero dependencies. About 6.97 million orders per second, 68 ns p50 on Apple Silicon. | `C++20` `CMake` |
| [Event-Driven Backtesting Engine](https://github.com/0PrashantYadav0/Event-Driven-Backtesting-Engine) | Backtester that mirrors a live trading system: one FIFO event queue, cost and slippage modelling, walk-forward validation. | `Python` `NumPy` `pandas` |
| [AgentOps Cockpit](https://github.com/0PrashantYadav0/agentops-cockpit) | Observability and auto-triage for AI agents with OpenTelemetry GenAI conventions, SigNoz, per-model token cost, and a copilot that reads the traces and explains what broke. | `Python` `OpenTelemetry` `SigNoz` `Ollama` |
| [QueryPilot](https://github.com/0PrashantYadav0/querypilot) | Ask your telemetry anything: natural language, PromQL, or LogQL into SigNoz Query Builder specs with a live result panel. | `Python` `PromQL` `LogQL` |
| [Mnemos](https://github.com/0PrashantYadav0/Mnemos) | A narrative RPG where every townsperson runs on a typed knowledge graph, remembers what you did, and gossips about it. | `Python` `Cognee` `LLMs` |
| [Dev Senpai](https://github.com/0PrashantYadav0/dev-senpai) | My portfolio and its chatbot: MiniLM embeddings, BM25 with rank fusion and MMR, three LLM providers behind one client with budgets and fallback. [Live.](https://prashantyadav.vercel.app) | `Next.js` `TypeScript` `RAG` |
| [Million RPS Todo API](https://github.com/0PrashantYadav0/million-rps) | Todo API tuned to roughly 500k requests per second with Redis caching and asynchronous Kafka writes. | `Go` `Redis` `Kafka` `Kubernetes` |
| [KubeStore](https://github.com/0prashantyadav0/KubeStore) | Provisions full MedusaJS and WooCommerce stores onto Kind and k3s clusters. | `Go` `Kubernetes` `Helm` |
| [Splitwise over QUIC](https://github.com/0PrashantYadav0/splitwise-quic) | A Splitwise clone that talks to the browser entirely over HTTP/3 and QUIC, with HTMX and SQLite. | `Go` `HTTP/3` `WebTransport` |

<sub>All 39 projects, with filters, at [prashantyadav.vercel.app/projects](https://prashantyadav.vercel.app/projects).</sub>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rule-dark.svg">
  <img alt="" src="assets/rule-light.svg" width="100%">
</picture>

## Open source

**[stdlib-js](https://github.com/stdlib-js/stdlib)**, the standard library for JavaScript. Contributor since May 2024.

- More than 160 merged pull requests across the BLAS, LAPACK, and statistics packages.
- C-level BLAS extensions and WebAssembly implementations that make the numerical code faster.

## Achievements

- Overall winner, GenTech Thales Hackathon. First across all tracks.
- Global top 11, Walmart Sparkathon.
- 2nd in the ML Hackathon and 3rd in the Finance Hackathon, Techkriti, IIT Kanpur.
- 3rd, SuperMove dAppthon, for the De-Fi Scholarship dApp on Aptos.
- Codeforces Specialist, peak rating 1534, global rank 386 in a Division 2 contest.
- CodeChef 4-star, peak rating 1813.
- Coordinator of the Web Wing and senior member of the FOSS Wing at AXIOS, IIIT Lucknow's technical society: 10+ events and open-source workshops for 240+ students.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rule-dark.svg">
  <img alt="" src="assets/rule-light.svg" width="100%">
</picture>

## Skills and technologies

<img src="https://skillicons.dev/icons?i=go,py,ts,js,java,cpp,c,bash,react,nextjs,nodejs,tailwind,postgres,mongodb,redis,kafka,docker,kubernetes,aws,azure,githubactions,prometheus,grafana,linux&perline=12" alt="Go, Python, TypeScript, JavaScript, Java, C++, C, Bash, React, Next.js, Node.js, Tailwind, PostgreSQL, MongoDB, Redis, Kafka, Docker, Kubernetes, AWS, Azure, GitHub Actions, Prometheus, Grafana, Linux">

| | |
|---|---|
| **Languages** | `Go` `Python` `TypeScript` `JavaScript` `Java` `C++` `C` `SQL` `Bash` `WebAssembly` |
| **Backend and APIs** | `Node.js` `Express` `Spring Boot` `Django` `FastAPI` `Flask` `Gin` `Bun` `Hono` `Elysia` `Deno` `REST` `GraphQL` `gRPC` `WebSockets` `Socket.IO` `Server-Sent Events` `HTMX` `JWT auth` |
| **Frontend** | `React` `Next.js` `Tailwind CSS` `Redux` `shadcn/ui` `TanStack Query and Router` `Material UI` `SCSS` `Pixi.js` `Vite` `Framer Motion` `Sanity CMS` |
| **Databases and storage** | `PostgreSQL` `MySQL` `MongoDB` `Redis` `SQLite` `Turso` `Neon` `Supabase` `Firebase` `Appwrite` `Drizzle` `Prisma` `Mongoose` `bbolt` |
| **Distributed systems and networking** | `Raft consensus` `Kafka` `Microservices` `Multi-tenant architecture` `SIP telephony` `HTTP/3 and QUIC` `WebTransport` `Nginx` `Low-latency C++` `Matching engines` |
| **DevOps and cloud** | `Docker` `Kubernetes` `Helm` `Kind and k3s` `GitHub Actions` `ArgoCD` `GitOps` `Jenkins` `Trivy` `SonarQube` `AWS EKS and ECS` `Azure` `Vercel` `Render` `Railway` `Linux` `Infrastructure as Code` |
| **Observability** | `Prometheus` `Grafana` `Loki` `OpenTelemetry` `SigNoz` `OpenObserve` `PromQL and LogQL` |
| **AI and ML** | `LLM integration` `RAG` `LangChain` `Knowledge graphs (Cognee)` `LLM agents and MCP` `Groq` `OpenAI` `Gemini` `Cerebras` `Ollama` `Deepgram` `ElevenLabs` `Voice pipelines (NLU, TTS, STT, VAD)` `Neural networks` `NumPy and pandas` |
| **Web3** | `Move on Aptos` `Smart contracts` `Thirdweb` |
| **Tools and practices** | `Git and GitHub` `Probot automation` `Jira and Agile` `System design` `Competitive programming` `Web scraping (BeautifulSoup)` |

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rule-dark.svg">
  <img alt="" src="assets/rule-light.svg" width="100%">
</picture>

## Want to know more about me?

Write to [devprashantkyadav@gmail.com](mailto:devprashantkyadav@gmail.com), find me on [LinkedIn](https://www.linkedin.com/in/prashantyadav097) or [X](https://x.com/0prashantyadav0), or ask [Dev Senpai](https://prashantyadav.vercel.app) on the site.

<br>

> *Talk is cheap. Show me the code.*
> <sub>Linus Torvalds</sub>

<sub>The banner and the donut are drawn by hand, the same way they are on <a href="https://prashantyadav.vercel.app">prashantyadav.vercel.app</a>: no image assets, just pixels and characters. Made in Lucknow with instant coffee.</sub>
