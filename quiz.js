const quiz = [
  {
    chapter: "Chapter 1 Quiz",
    id: 1,
    question: "Howard Aiken and Grace Hopper designed the Mark series of computers used by the U.S. Navy for ballistic and gunnery calculations.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "Howard Aiken and Grace Hopper worked on the Mark series of computers."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 2,
    question: "________ property is work that is the result of someone's creativity and knowledge.",
    answers: ["Public", "Personal", "Collective", "Intellectual"],
    correct: 3,
    explanation: "Intellectual property is work created from someone's creativity and knowledge."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 3,
    question: "A robot which moves and acts much like a human is a(n) ________.",
    answers: ["empathetic agent", "embodied agent", "intelligent personal assistant", "embedded operator"],
    correct: 1,
    explanation: "An embodied agent moves and acts much like a human."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 4,
    question: "________ behavior is NOT conforming to a set of approved standards of behavior.",
    answers: ["Dogmatic", "Legal", "Unethical", "Moral"],
    correct: 2,
    explanation: "Unethical behavior does not conform to approved standards of behavior."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 5,
    question: "________ tools enable people to connect and exchange ideas.",
    answers: ["Social media", "Affective computing", "Digital forensics", "Debugging"],
    correct: 0,
    explanation: "Social media tools help people connect and exchange ideas."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 6,
    question: "In medicine, 3D printing allows more stylish and less expensive designs for ________.",
    answers: ["prosthetic limbs", "medicines", "patient simulators", "clothing"],
    correct: 0,
    explanation: "3D printing can create prosthetic limbs at lower cost with better design options."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 7,
    question: "________ is joining together as a group to use a specific product more efficiently.",
    answers: ["Collaborative consumption", "Crowdfunding", "Social networking", "Crowdsourcing"],
    correct: 0,
    explanation: "Collaborative consumption means sharing access to products or services as a group."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 8,
    question: "The Next Einstein Initiative and the ________ Institute for Mathematical Sciences bring bright young learners and the best lecturers in the world together.",
    answers: ["Austrian", "Canadian", "African", "Computer"],
    correct: 2,
    explanation: "The African Institute for Mathematical Sciences is connected with the Next Einstein Initiative."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 9,
    question: "Apple introduced the microprocessor chip in 1971.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "Intel introduced the microprocessor chip in 1971, not Apple."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 10,
    question: "________ provides the instructions that tell a computer what to do.",
    answers: ["Spam", "Hardware", "Data mining", "Software"],
    correct: 3,
    explanation: "Software gives the computer instructions."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 11,
    question: "Which of the following is not a main area of research in artificial intelligence?",
    answers: ["Cloud computing", "Natural language processing", "Perception", "Problem solving"],
    correct: 0,
    explanation: "Cloud computing is not one of the main AI research areas listed."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 12,
    question: "________ replaces perceived reality with a different world.",
    answers: ["Variable reality", "Entertainment reality", "Virtual reality", "Alternate reality"],
    correct: 2,
    explanation: "Virtual reality replaces perceived reality with a different digital world."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 13,
    question: "Unwanted or junk e-mail is called ________.",
    answers: ["spyware", "adware", "spam", "malware"],
    correct: 2,
    explanation: "Spam is unwanted or junk e-mail."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 14,
    question: "________ tools gather information from sources such as e-mails, text messages, and tweets and make the information instantly and publicly available for use in emergencies.",
    answers: ["Affective computing", "Crisis-mapping", "Social networking", "Crowdsourcing"],
    correct: 1,
    explanation: "Crisis-mapping tools gather and share emergency information publicly."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 15,
    question: "________ results when leisure time and available tools allow us to engage in creative acts.",
    answers: ["Cognitive surplus", "Affective computing", "Distributed computing", "Spam"],
    correct: 0,
    explanation: "Cognitive surplus happens when free time and tools are used for creative work."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 16,
    question: "Analyzing computer systems to gather potential legal evidence is known as digital ________.",
    answers: ["analysis", "forensics", "enforcement", "ethics"],
    correct: 1,
    explanation: "Digital forensics means analyzing computer systems for possible legal evidence."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 17,
    question: "Bill Gates developed the floppy disk.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "Bill Gates did not develop the floppy disk."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 18,
    question: "The Turing test consists of a person asking written questions of a person and a computer. If the questioner can't tell which one of the respondents is a computer, then the computer has attained ________.",
    answers: ["independence", "intelligence", "Turing", "mastery"],
    correct: 1,
    explanation: "The Turing test is used to judge whether a computer shows intelligence."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 19,
    question: "________ analyzes patterns in data, then uses the patterns to draw conclusions and adjust the actions of the AI system accordingly.",
    answers: ["Machine learning", "Big data", "Neural learning", "Cloud Computing"],
    correct: 0,
    explanation: "Machine learning uses patterns in data to improve system actions."
  },
  {
    chapter: "Chapter 1 Quiz",
    id: 20,
    question: "________ reality is the addition of digital information directly into our reality, either to add more detail or to remove unwanted visual effects.",
    answers: ["Altruistic", "Augmented", "Visual", "Assisted"],
    correct: 1,
    explanation: "Augmented reality adds digital information to the real world."
  },
    {
    chapter: "Chapter 2 Quiz",
    id: 1,
    question: "IT skills are generally not transferable if the company you are working for becomes obsolete.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "IT skills are transferable across companies and industries."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 2,
    question: "________ is concerned with the design and arrangement of machines and furniture to avoid uncomfortable or unsafe experiences.",
    answers: ["Occupational safety", "Repetitive strain prevention", "Ergonomics", "Positioning"],
    correct: 2,
    explanation: "Ergonomics focuses on designing workspaces and equipment to reduce discomfort and injury."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 3,
    question: "Which IT professional generates systems documentation for end users and programmers?",
    answers: ["Technical writer", "Network administrator", "Helpdesk analyst", "Programmer"],
    correct: 0,
    explanation: "Technical writers create documentation for users and programmers."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 4,
    question: "Jobs leaving the US for workers in other countries is known as ________.",
    answers: ["outsourcing", "offshoring", "outbounding", "offsourcing"],
    correct: 1,
    explanation: "Offshoring means moving jobs to workers in other countries."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 5,
    question: "A(n) ________ is an input device that looks like a pen.",
    answers: ["stylus", "joystick", "pointer", "e-rod"],
    correct: 0,
    explanation: "A stylus is a pen-like input device."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 6,
    question: "The computer stores currently used programs and data in ________.",
    answers: ["RAM", "USB", "ROM", "CPU"],
    correct: 0,
    explanation: "RAM stores currently used programs and data."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 7,
    question: "To connect a peripheral device to a computer to exchange data, find the appropriate ________ for the device.",
    answers: ["port", "SSD bay", "drive", "expansion bus"],
    correct: 0,
    explanation: "A port connects peripheral devices to a computer."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 8,
    question: "Professional certifications for IT skills replace a college degree in the eyes of most employers in IT.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "Certifications help prove skills, but they usually do not fully replace a college degree."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 9,
    question: "Which computer port transmits audio and video without the need for compression?",
    answers: ["VGA", "USB", "HDMI", "RGA"],
    correct: 2,
    explanation: "HDMI transmits digital audio and video."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 10,
    question: "The two main categories of home and office printers are ________ and laser printers.",
    answers: ["inkjet", "cloud-based", "thermal", "large format"],
    correct: 0,
    explanation: "Inkjet and laser printers are the two main home and office printer categories."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 11,
    question: "Which of the following is the smallest unit of measure?",
    answers: ["Terabyte", "Gigabyte", "Petabyte", "Megabyte"],
    correct: 3,
    explanation: "Megabyte is smaller than gigabyte, terabyte, and petabyte."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 12,
    question: "IT Jobs are among the slowest growing jobs in the near future.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "IT jobs are generally among the faster growing career areas."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 13,
    question: "In binary language, each letter of the alphabet, each number, and each special symbol is made up of a unique combination of eight ________.",
    answers: ["kilobytes", "bytes", "characters", "bits"],
    correct: 3,
    explanation: "Eight bits make up one byte used to represent characters."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 14,
    question: "Computers use a ________ language consisting of 0s and 1s.",
    answers: ["binary", "symbol", "byte", "system"],
    correct: 0,
    explanation: "Binary language uses 0s and 1s."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 15,
    question: "An Apple iPad and an Amazon Fire are examples of ________ computers.",
    answers: ["desktop", "laptop", "tablet", "netbook"],
    correct: 2,
    explanation: "An iPad and Amazon Fire are tablet computers."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 16,
    question: "Flash drives plug into a(n) ________.",
    answers: ["drive bay", "serial port", "USB port", "expansion slot"],
    correct: 2,
    explanation: "Flash drives commonly plug into a USB port."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 17,
    question: "Dropbox is an example of ________.",
    answers: ["Bluetooth technology", "SSD technology", "optical storage", "cloud storage"],
    correct: 3,
    explanation: "Dropbox stores files online using cloud storage."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 18,
    question: "Apple's macOS and Microsoft Windows are examples of ________ software.",
    answers: ["operating system", "application", "utility", "communication"],
    correct: 0,
    explanation: "macOS and Windows are operating systems."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 19,
    question: "Developing relationships with your instructors may help you land a career, because many still work in the industry.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "Instructors can be useful career connections because many have industry experience."
  },
  {
    chapter: "Chapter 2 Quiz",
    id: 20,
    question: "What is the difference between data and information?",
    answers: [
      "Data is numbers. Information is words.",
      "They are essentially the same thing.",
      "Data represents a process. Information is the stored data.",
      "Data represents a fact. Information is data that has been organized."
    ],
    correct: 3,
    explanation: "Data is raw facts. Information is data that has been organized to be useful."
  },
  
];
