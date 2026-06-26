import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeSkills, resumeExperience, resumeProjects } from '../data/resumeData';

// Custom regex-based JSON syntax highlighter
function highlightJson(json) {
  if (typeof json !== 'string') {
    json = JSON.stringify(json, null, 2);
  }
  // Escape HTML characters
  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match) {
      let cls = 'text-amber-400'; // numbers
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'text-cyan-400 font-semibold'; // keys
        } else {
          cls = 'text-emerald-400'; // strings
        }
      } else if (/true|false/.test(match)) {
        cls = 'text-purple-400'; // booleans
      } else if (/null/.test(match)) {
        cls = 'text-slate-400'; // null
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

export default function ApiPlayground() {
  const [activeTab, setActiveTab] = useState('gui'); // 'gui' or 'cli'
  const [selectedRoute, setSelectedRoute] = useState('/profile');
  const [method, setMethod] = useState('GET');
  const [loading, setLoading] = useState(false);
  const [latency, setLatency] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [responseBody, setResponseBody] = useState(null);
  
  // CLI State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState([
    { type: 'output', text: 'Welcome to SKK-OS v1.0.0 Interactive Developer Shell.' },
    { type: 'output', text: 'Type "help" to see list of available commands.' },
    { type: 'output', text: '' }
  ]);
  
  const terminalEndRef = useRef(null);

  // Auto-scroll CLI to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [cliHistory]);

  const endpoints = {
    '/profile': {
      status: "success",
      statusCode: 200,
      data: {
        name: "Sourav Kumar Khatai",
        role: "Software Engineer (Apprentice)",
        specialization: "Java Backend, Microservices & Cloud Development",
        experience_level: "Apprentice",
        current_employer: "Nike (SCPT Team)",
        location: "Bengaluru, India",
        uptime: "100%",
        status: "Open to exciting backend/cloud opportunities"
      }
    },
    '/skills': {
      status: "success",
      statusCode: 200,
      data: resumeSkills
    },
    '/projects': {
      status: "success",
      statusCode: 200,
      data: resumeProjects
    },
    '/experience': {
      status: "success",
      statusCode: 200,
      data: resumeExperience
    },
    '/contact': {
      status: "created",
      statusCode: 201,
      message: "HTTP 201: Message payload received. Message queued into transactional mailbox system.",
      timestamp: new Date().toISOString()
    }
  };

  const handleSendRequest = () => {
    setLoading(true);
    setResponseBody(null);
    setResponseStatus(null);
    
    // Simulate real-world network latency (300ms - 800ms)
    const randomLatency = Math.floor(Math.random() * 500) + 200;
    setTimeout(() => {
      const routeData = endpoints[selectedRoute] || { error: "404 Not Found" };
      setLatency(randomLatency);
      setResponseStatus(routeData.statusCode || 200);
      setResponseBody(routeData);
      setLoading(false);
    }, randomLatency);
  };

  const executeCliCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;
    
    const newHistory = [...cliHistory, { type: 'prompt', text: `visitor@skk-portfolio:~$ ${rawCmd}` }];
    const tokens = rawCmd.split(' ');
    const command = tokens[0].toLowerCase();
    const arg = tokens[1];

    switch (command) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  help               - Shows this message
  clear              - Clears the terminal screen
  neofetch           - Displays system configuration profile
  curl [endpoint]    - Performs a REST query (e.g. curl /profile)
  skills             - Pretty prints skills details
  projects           - Pretty prints projects details
  experience         - Pretty prints work timeline`
        });
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      case 'neofetch':
        newHistory.push({
          type: 'output',
          text: `      .---.       
     /     \\      OS: SKK-Portfolio OS 1.0.0
     \\_.._/       Host: React 18.3 + Vite + Tailwind
     .----.       Uptime: 99.98%
    /      \\      Role: Java Backend Apprentice @ Nike
    \\_..___/      Target: Software Engineer Apprentice / Backend
                  Languages: Java, Spring Boot, SQL, AWS`
        });
        break;
      case 'curl':
        if (!arg) {
          newHistory.push({ type: 'error', text: 'Error: Endpoint missing. Usage: curl /profile, curl /skills, curl /projects' });
        } else if (endpoints[arg]) {
          newHistory.push({ type: 'output', html: highlightJson(endpoints[arg]) });
        } else {
          newHistory.push({ type: 'error', text: `Error: 404 Route "${arg}" not found. Try: /profile, /skills, /projects, /experience, /contact` });
        }
        break;
      case 'skills':
        newHistory.push({ type: 'output', html: highlightJson(resumeSkills) });
        break;
      case 'projects':
        newHistory.push({ type: 'output', html: highlightJson(resumeProjects) });
        break;
      case 'experience':
        newHistory.push({ type: 'output', html: highlightJson(resumeExperience) });
        break;
      default:
        newHistory.push({ type: 'error', text: `Command not found: "${command}". Type "help" to see available commands.` });
    }

    setCliHistory(newHistory);
    setCliInput('');
  };

  const handleCliSubmit = (e) => {
    e.preventDefault();
    executeCliCommand(cliInput);
  };

  // Pre-load profile response on mount
  useEffect(() => {
    setResponseStatus(200);
    setLatency(45);
    setResponseBody(endpoints['/profile']);
  }, []);

  return (
    <section
      id="api"
      className="scroll-mt-20 border-t border-slate-200/40 py-20 dark:border-slate-800/40 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Developer Tools"
          title="Interactive API Playground"
          subtitle="Explore the portfolio backend endpoints. Interact using either a modern REST Client GUI or a Unix Command Line Interface."
        />

        <div className="mx-auto max-w-4xl rounded-3xl overflow-hidden glassmorphism shadow-2xl border border-white/10 dark:border-white/5">
          
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between bg-slate-900/60 dark:bg-black/40 px-6 py-4 border-b border-white/5 select-none">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-rose-500/80" />
              <span className="h-3.5 w-3.5 rounded-full bg-amber-500/80" />
              <span className="h-3.5 w-3.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono font-semibold tracking-wider text-slate-400 dark:text-slate-500">
                visitor@skk-portfolio:~
              </span>
            </div>
            
            {/* Mode Tab Switchers */}
            <div className="flex rounded-xl bg-slate-800/40 dark:bg-white/5 p-1 border border-white/5">
              <button
                type="button"
                onClick={() => setActiveTab('gui')}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition duration-300 ${
                  activeTab === 'gui'
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                REST Client
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cli')}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition duration-300 ${
                  activeTab === 'cli'
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                CLI Terminal
              </button>
            </div>
          </div>

          <div className="bg-[#03030f]/90 dark:bg-[#050514]/95 p-6 min-h-[420px] max-h-[500px] overflow-auto relative">
            
            {/* 1. REST CLIENT MODE */}
            {activeTab === 'gui' && (
              <div className="space-y-6">
                
                {/* REST URL Input Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex rounded-xl bg-slate-800/30 dark:bg-white/5 border border-white/10 dark:border-white/5 overflow-hidden flex-1">
                    <select
                      value={method}
                      onChange={(e) => {
                        setMethod(e.target.value);
                        if (e.target.value === 'POST') setSelectedRoute('/contact');
                      }}
                      className="bg-slate-900/60 dark:bg-black/30 border-r border-white/10 px-3.5 py-3 text-xs font-bold font-mono tracking-wider text-brand-400 dark:text-brand-400 focus:outline-none"
                    >
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                    </select>
                    
                    <div className="flex items-center px-3.5 text-slate-500 font-mono text-xs select-none">
                      https://api.souravkhatai.dev/v1
                    </div>
                    
                    <select
                      value={selectedRoute}
                      onChange={(e) => {
                        setSelectedRoute(e.target.value);
                        if (e.target.value === '/contact') setMethod('POST');
                        else setMethod('GET');
                      }}
                      className="bg-transparent text-slate-300 font-mono text-xs py-3 px-2 flex-1 focus:outline-none"
                    >
                      <option value="/profile" disabled={method === 'POST'}>/profile</option>
                      <option value="/skills" disabled={method === 'POST'}>/skills</option>
                      <option value="/projects" disabled={method === 'POST'}>/projects</option>
                      <option value="/experience" disabled={method === 'POST'}>/experience</option>
                      <option value="/contact" disabled={method === 'GET'}>/contact</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendRequest}
                    disabled={loading}
                    className="rounded-xl bg-brand-500 hover:bg-brand-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 tracking-wider uppercase transition flex items-center justify-center gap-2 select-none"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </button>
                </div>

                {/* HTTP Headers Status Card */}
                {responseStatus && (
                  <div className="flex flex-wrap items-center gap-4 bg-slate-900/40 p-3.5 rounded-xl border border-white/5 font-mono text-xs text-slate-400 select-none">
                    <div>
                      Status: <span className={responseStatus >= 200 && responseStatus < 300 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{responseStatus}</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div>
                      Time: <span className="text-amber-400 font-semibold">{latency} ms</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div>
                      Type: <span className="text-cyan-400">application/json</span>
                    </div>
                  </div>
                )}

                {/* Response Code Block */}
                <div className="rounded-xl border border-white/5 bg-[#010107] p-4 overflow-hidden relative">
                  <span className="absolute right-4 top-4 text-[9px] uppercase font-bold tracking-wider text-slate-600 select-none">
                    response body
                  </span>
                  
                  {responseBody ? (
                    <pre 
                      className="font-mono text-xs overflow-auto leading-relaxed max-h-[300px]"
                      dangerouslySetInnerHTML={{ __html: highlightJson(responseBody) }}
                    />
                  ) : (
                    <div className="flex h-36 items-center justify-center text-slate-500 font-mono text-xs select-none">
                      Click "Send Request" to trigger REST call.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. CLI TERMINAL MODE */}
            {activeTab === 'cli' && (
              <div className="flex flex-col h-full font-mono text-xs leading-relaxed">
                <div className="flex-1 space-y-2.5 overflow-auto">
                  {cliHistory.map((item, index) => {
                    if (item.type === 'prompt') {
                      return <div key={index} className="text-slate-400 select-none">{item.text}</div>;
                    }
                    if (item.type === 'error') {
                      return <div key={index} className="text-rose-400">{item.text}</div>;
                    }
                    if (item.html) {
                      return (
                        <pre 
                          key={index} 
                          className="overflow-auto leading-relaxed" 
                          dangerouslySetInnerHTML={{ __html: item.html }}
                        />
                      );
                    }
                    return (
                      <div key={index} className="whitespace-pre-wrap text-emerald-400">
                        {item.text}
                      </div>
                    );
                  })}
                  <div ref={terminalEndRef} />
                </div>

                <form onSubmit={handleCliSubmit} className="mt-4 flex items-center border-t border-white/5 pt-3 select-none">
                  <span className="text-brand-400 font-bold mr-2 select-none">visitor@skk-portfolio:~$</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder='Type "help" and press Enter...'
                    className="bg-transparent flex-1 focus:outline-none text-slate-200"
                    autoFocus
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
