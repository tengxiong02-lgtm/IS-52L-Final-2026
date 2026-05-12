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
  {
    chapter: "Chapter 5 Quiz",
    id: 1,
    question: "Each device attached to your computer has a special program called a(n) ________ that enables the device and operating system to communicate with each other.",
    answers: ["interpreter", "device driver", "device configurator", "translator"],
    correct: 1,
    explanation: "A device driver lets the device and operating system communicate."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 2,
    question: "Windows 10 allows easy automatic updates to your computer by Microsoft.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "Windows 10 supports automatic updates from Microsoft."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 3,
    question: "All of the following are examples of network operating systems except ________.",
    answers: ["macOS", "Windows", "MS-DOS", "Linux"],
    correct: 2,
    explanation: "MS-DOS is not a network operating system."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 4,
    question: "You can use System Restore to return your system's settings back to a specific date when everything was working properly.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "System Restore can return system settings to an earlier restore point."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 5,
    question: "Use the Windows ________ to check on a nonresponsive program.",
    answers: ["Error-checking", "Task Manager", "System Restore", "Backup utility"],
    correct: 1,
    explanation: "Task Manager lets you check and close nonresponsive programs."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 6,
    question: "Most desktop and laptop computers run some version of Windows, Linux or macOS.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "Most desktop and laptop computers use Windows, Linux, or macOS."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 7,
    question: "The basic input/output system (BIOS) is stored on a ________ chip.",
    answers: ["CPU", "RAM", "CMOS", "ROM"],
    correct: 3,
    explanation: "The BIOS is stored on a ROM chip."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 8,
    question: "The process of determining which applications and tiles are on the Start Menu is called ________.",
    answers: ["pinning", "sticking", "attaching", "adhering"],
    correct: 0,
    explanation: "Pinning adds apps or tiles to the Start Menu."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 9,
    question: "When using Windows File Explorer, which view provides the most specific information?",
    answers: ["Content", "List", "Details", "Tiles"],
    correct: 2,
    explanation: "Details view shows the most specific file information."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 10,
    question: "The authentication process involves the verification of a user's login name and password.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "Authentication verifies a user's login name and password."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 11,
    question: "Which of the following is the first step in the boot process?",
    answers: [
      "The OS is loaded into RAM.",
      "The BIOS checks that all devices are operational.",
      "The BIOS is activated.",
      "Configuration and customization settings are checked."
    ],
    correct: 2,
    explanation: "The boot process begins when the BIOS is activated."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 12,
    question: "Using hard disk space to temporarily store data or instructions from RAM is referred to as the ________.",
    answers: ["compressor", "interrupt sequencer", "spool", "virtual memory"],
    correct: 3,
    explanation: "Virtual memory uses hard disk space as temporary memory."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 13,
    question: "C:\\Windows\\System32\\drivers\\etc\\protocol is an example of a file ________.",
    answers: ["type", "path", "extension", "list"],
    correct: 1,
    explanation: "This is a file path because it shows the file location."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 14,
    question: "The two major types of system software programs are utility programs and the ________.",
    answers: ["application software", "user interface", "operating system", "supervisor programs"],
    correct: 2,
    explanation: "System software includes operating systems and utility programs."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 15,
    question: "A network operating system is also known as a(n) ________.",
    answers: [
      "multicore operating system",
      "multitasking operating system",
      "real-time operating system",
      "multiuser operating system"
    ],
    correct: 3,
    explanation: "A network operating system is also called a multiuser operating system."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 16,
    question: "The location of a file is specified by its ________.",
    answers: ["file extension", "file type", "domain", "file path"],
    correct: 3,
    explanation: "A file path tells where a file is located."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 17,
    question: "Deleted files on a Mac computer are moved to the ________.",
    answers: ["Recycle Bin", "Garbage Can", "Wastepaper Basket", "Trash"],
    correct: 3,
    explanation: "Deleted files on a Mac go to the Trash."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 18,
    question: "Which of the following two operating systems are used most frequently on tablets?",
    answers: ["BlackBerry and Windows", "Android and iOS", "Windows and Android", "Windows and iOS"],
    correct: 1,
    explanation: "Android and iOS are the most common tablet operating systems."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 19,
    question: "Installing a device driver can sometimes cause system instability.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "A device driver can sometimes cause system instability if it has problems."
  },
  {
    chapter: "Chapter 5 Quiz",
    id: 20,
    question: "File Explorer is Windows's main program to find, manage and view files.",
    answers: ["True", "False"],
    correct: 0,
    explanation: "File Explorer is used to find, manage, and view files in Windows."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 1,
    question: "Software designed specifically for managing real estate is an example of ________ software.",
    answers: [
      "e-commerce",
      "general business",
      "project management",
      "vertical market"
    ],
    correct: 3,
    explanation: "Vertical market software is designed for a specific industry such as real estate."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 2,
    question: "A number system is an organized plan for representing a number.",
    answers: [
      "True",
      "False"
    ],
    correct: 0,
    explanation: "A number system is a structured way to represent numbers."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 3,
    question: "________ software helps run the computer and coordinates instructions between other software and the hardware devices.",
    answers: [
      "Productivity",
      "Application",
      "Recovery",
      "System"
    ],
    correct: 3,
    explanation: "System software manages hardware and supports application software."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 4,
    question: "The box formed by the intersection of a row and column in a spreadsheet program is known as a ________.",
    answers: [
      "cell",
      "formula",
      "label",
      "function"
    ],
    correct: 0,
    explanation: "A cell is where a row and column intersect in a spreadsheet."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 5,
    question: "A(n) ________ software installation copies all the most commonly used files to your computer's hard drive.",
    answers: [
      "full",
      "upgrade",
      "beta",
      "custom"
    ],
    correct: 0,
    explanation: "A full installation copies the standard commonly used files."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 6,
    question: "All of the following are examples of database software except ________.",
    answers: [
      "Oracle",
      "Microsoft Access",
      "MySQL",
      "Microsoft Excel"
    ],
    correct: 3,
    explanation: "Microsoft Excel is spreadsheet software not database software."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 7,
    question: "Software as a Service (SaaS) is hosted online applications.",
    answers: [
      "True",
      "False"
    ],
    correct: 0,
    explanation: "SaaS applications are hosted online and accessed through the Internet."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 8,
    question: "Unwanted or unneeded software included by manufacturers on new computers is called ________.",
    answers: [
      "shareware",
      "malware",
      "adware",
      "bloatware"
    ],
    correct: 3,
    explanation: "Bloatware refers to unnecessary preinstalled software."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 9,
    question: "In databases, a data category is called a ________.",
    answers: [
      "worksheet",
      "field",
      "record",
      "table"
    ],
    correct: 1,
    explanation: "A field stores one category of information in a database."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 10,
    question: "Multimedia software includes all of the following except ________.",
    answers: [
      "animation software",
      "audio-editing software",
      "image-editing software",
      "utility software"
    ],
    correct: 3,
    explanation: "Utility software is used for system maintenance not multimedia creation."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 11,
    question: "QuickBooks is an example of ________ software.",
    answers: [
      "gaming",
      "accounting",
      "course management",
      "educational"
    ],
    correct: 1,
    explanation: "QuickBooks is accounting software used for financial management."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 12,
    question: "A(n) ________ software installation enables you to decide which features you want to install on the hard drive.",
    answers: [
      "full",
      "partial",
      "upgrade",
      "custom"
    ],
    correct: 3,
    explanation: "A custom installation lets users choose which features to install."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 13,
    question: "________ software helps you manage e-mail, contacts, calendars, and tasks in the same application.",
    answers: [
      "Presentation",
      "Note-taking",
      "Personal information manager",
      "Spreadsheet"
    ],
    correct: 2,
    explanation: "Personal information manager software combines calendars contacts and tasks."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 14,
    question: "Which of the following is not true about locally installed software?",
    answers: [
      "It is installed on your device.",
      "You pay a one-time fee.",
      "You need the Internet to run the program.",
      "You normally get it through a disk or an online download."
    ],
    correct: 2,
    explanation: "Locally installed software does not always require Internet access to run."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 15,
    question: "________ software lets you perform calculations and numerical analyses.",
    answers: [
      "Spreadsheet",
      "Personal information manager",
      "Word processing",
      "Presentation"
    ],
    correct: 0,
    explanation: "Spreadsheet software performs calculations and data analysis."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 16,
    question: "The appropriate software to use for writing and editing research papers is ________ software.",
    answers: [
      "database",
      "word processing",
      "presentation",
      "spreadsheet"
    ],
    correct: 1,
    explanation: "Word processing software is used for creating and editing documents."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 17,
    question: "LibreOffice is an example of open source software.",
    answers: [
      "True",
      "False"
    ],
    correct: 0,
    explanation: "LibreOffice is free open source software."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 18,
    question: "Which of the following is the most common audio compression format?",
    answers: [
      "WAV",
      "AU",
      "MP3",
      "WMA"
    ],
    correct: 2,
    explanation: "MP3 is the most commonly used compressed audio format."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 19,
    question: "________ applications are software in which the vendor hosts the software online over the Internet and you do not to install the software on your computer.",
    answers: [
      "Infrastructure as a Service",
      "Platform as a Service",
      "Software as a Service",
      "Open Source as a Service"
    ],
    correct: 2,
    explanation: "Software as a Service applications are hosted online and accessed through the Internet."
  },
  {
    chapter: "Chapter 4 Quiz",
    id: 20,
    question: "When using a spreadsheet, the expression =D8-D17 is called a ________.",
    answers: [
      "function",
      "range",
      "cell",
      "formula"
    ],
    correct: 3,
    explanation: "A formula performs calculations using spreadsheet values."
  },
  
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 1,
    question: "The concept of the Internet was developed by the U.S. Department of Defense as a network that ________ in event of an attack.",
    answers: [
      "allows commerce to continue",
      "provides point to point connections",
      "would not be disrupted easily",
      "would not be easily hacked"
    ],
    correct: 2,
    explanation: "The Internet was designed as a network that would not be disrupted easily."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 2,
    question: "When shopping on the web, it is better to pay for your purchase with a debit card rather than a credit card.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "Credit cards usually offer better fraud protection than debit cards."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 3,
    question: "The Internet is ________.",
    answers: [
      "a large network of networks",
      "a communication system for the U.S. navy",
      "an internal communication system for businesses",
      "the same as the World Wide Web"
    ],
    correct: 0,
    explanation: "The Internet is a large network of networks."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 4,
    question: "A(n) ________ is usually a live broadcast of audio or video content.",
    answers: ["wiki", "podcast", "instant message", "webcast"],
    correct: 3,
    explanation: "A webcast is usually a live broadcast of audio or video content."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 5,
    question: "A subset of e-commerce that uses social networks to assist in marketing and purchasing products is known as ________ commerce.",
    answers: ["crowd", "social", "friend", "source"],
    correct: 1,
    explanation: "Social commerce uses social networks for marketing and purchasing."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 6,
    question: "Which of the following is not a type of e-commerce business?",
    answers: ["B2C", "B2B", "C2C", "C2B"],
    correct: 3,
    explanation: "C2B is not listed here as the standard type in this quiz."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 7,
    question: "Which of the following is not a precaution to take when shopping online?",
    answers: [
      "Shop at well-known, reputable sites.",
      "Pay with a debit card, not a credit card.",
      "When placing an order, make sure you receive a confirmation number.",
      "Avoid making online transactions on a public computer."
    ],
    correct: 1,
    explanation: "You should generally use a credit card, not a debit card, for better protection."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 8,
    question: "Catfishing is ________.",
    answers: [
      "posting inflammatory remarks to solicit angry and negative responses",
      "creating fake profiles on a dating site and developing a fabricated online and phone relationship",
      "posting embarrassing pictures, rumors, or videos via social media",
      "bombarding someone with harassing messages"
    ],
    correct: 1,
    explanation: "Catfishing means creating a fake online identity to deceive someone."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 9,
    question: "The World Wide Web was based on a protocol developed by ________.",
    answers: ["Vinton Cerf", "Tim Berners-Lee", "Ray Tomlinson", "Bill Gates"],
    correct: 1,
    explanation: "Tim Berners-Lee developed the World Wide Web protocol."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 10,
    question: "The \"s\" in \"https\" stands for ________ socket layer.",
    answers: ["social", "secure", "semantic", "server"],
    correct: 1,
    explanation: "The “s” stands for secure."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 11,
    question: "File Transfer Protocol (FTP) is used to transmit e-mail messages across the Internet.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "FTP is used for file transfers, not sending email messages."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 12,
    question: "Which protocol is used when sending files as attachments by e-mail?",
    answers: [
      "Multipurpose Internet Mail Extensions (MIME)",
      "JavaScript Object Notation (JSON)",
      "Post Office Protocol (POP)",
      "User Datagram Protocol (UDP)"
    ],
    correct: 0,
    explanation: "MIME is used for sending attachments through email."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 13,
    question: "The United States government is the sole country in charge of the Internet.",
    answers: ["True", "False"],
    correct: 1,
    explanation: "No single country is solely in charge of the Internet."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 14,
    question: "An IP address that does not change and is usually assigned manually by a network administrator or an ISP is called a ________ address.",
    answers: ["static", "fixed", "stationary", "dynamic"],
    correct: 0,
    explanation: "A static IP address does not change."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 15,
    question: "A(n) ________ address is a temporary IP address that is assigned from an available pool of IP addresses.",
    answers: ["static", "assigned", "transition", "dynamic"],
    correct: 3,
    explanation: "A dynamic IP address is temporary and assigned from a pool."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 16,
    question: "High-speed ________ communication lines on the Internet backbone use fiber optics.",
    answers: ["cable", "DSL", "OC", "IP"],
    correct: 2,
    explanation: "OC communication lines use fiber optics."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 17,
    question: "A(n) ________ address is a unique number that identifies a computer, server, or device connected to the Internet.",
    answers: ["TCP", "IP", "NetBIOS", "SMTP"],
    correct: 1,
    explanation: "An IP address identifies a device connected to the Internet."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 18,
    question: "A(n) ________ is a small program that resides on a server and is designed to be downloaded and run on a client computer.",
    answers: ["JavaScript", "applet", "CGI script", "SSL"],
    correct: 1,
    explanation: "An applet is downloaded and run on a client computer."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 19,
    question: "________ describes the website content in terms of the data that is being described rather than how it is to be displayed.",
    answers: ["JavaScript", "XML", "CGI", "HTML"],
    correct: 1,
    explanation: "XML describes data content rather than display format."
  },
  {
    chapter: "Chapter 3 & 13 Quiz",
    id: 20,
    question: "The ________ is responsible for the Internet's domain name system and the allocation of IP addresses.",
    answers: ["ICANN", "W3C", "IAB", "ISOC"],
    correct: 0,
    explanation: "ICANN manages domain names and IP address allocation."
  },
  
  {
    chapter: "Chapter 6 Quiz",
    id: 1,
    question: "Cache memory levels are defined by their proximity to ________.",
    answers: ["RAM", "the hard drive", "the video card", "the processor"],
    correct: 3,
    explanation: "Cache levels are based on how close they are to the processor."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 2,
    question: "________ provides high-speed information processing by enabling a new set of instructions to start before the previous set is finished.",
    answers: ["Cache memory", "Hyperthreading", "Overclocking", "Multitasking"],
    correct: 1,
    explanation: "Hyperthreading helps the CPU process instructions more efficiently."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 3,
    question: "Which of the following storage devices has the largest potential capacity?",
    answers: ["Compact disc", "SD card", "Mechanical hard drive", "Bluray disc"],
    correct: 2,
    explanation: "Mechanical hard drives can offer very large storage capacities."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 4,
    question: "The Windows ________ utility returns your computer to the state it was in when it came from the factory.",
    answers: ["Reset", "Erase", "Refresh", "Backup"],
    correct: 0,
    explanation: "Reset returns Windows to its factory-like state."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 5,
    question: "To speed up the display of graphics, a(n) ________ is integrated into most video cards.",
    answers: ["SSD", "VGA", "ALU", "GPU"],
    correct: 3,
    explanation: "A GPU processes graphics faster."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 6,
    question: "Running the CPU at a faster speed than the manufacturer recommends is called ________.",
    answers: ["overclocking", "fetching", "hyperthreading", "latency"],
    correct: 0,
    explanation: "Overclocking means running the CPU faster than recommended."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 7,
    question: "A ________ uses electronic memory and has no motors or moving parts.",
    answers: ["Blu-ray disc", "mechanical hard drive", "digital video disc", "solid-state drive"],
    correct: 3,
    explanation: "A solid-state drive has no moving parts."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 8,
    question: "________ is a technique that allows the CPU to work on more than one instruction at the same time.",
    answers: ["Pipelining", "Parallel processing", "Overclocking", "Hyperthreading"],
    correct: 1,
    explanation: "Parallel processing allows multiple instructions to be processed at the same time."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 9,
    question: "To securely erase data, the U.S. Department of Defense suggests that data be ________.",
    answers: ["refactored", "overwritten seven times", "deleted", "encoded"],
    correct: 1,
    explanation: "Secure erasing requires overwriting data multiple times."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 10,
    question: "The processor market for desktop and laptop computers is dominated by ________.",
    answers: ["Microsoft", "IBM", "Intel", "Apple"],
    correct: 2,
    explanation: "Intel has dominated the desktop and laptop processor market."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 11,
    question: "CPU ________ are measurements used to compare performance between processors.",
    answers: ["benchmarks", "records", "scores", "stats"],
    correct: 0,
    explanation: "Benchmarks compare processor performance."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 12,
    question: "Which statement pertaining to system reliability is not true?",
    answers: [
      "When you defrag your hard drive, it works more efficiently.",
      "An accumulation of temporary Internet files has no effect on your computer's overall performance.",
      "Removing unnecessary programs from your Startup folder can improve system reliability.",
      "Having the latest version of software products can make your system more reliable."
    ],
    correct: 1,
    explanation: "Temporary Internet files can affect performance."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 13,
    question: "What is the fastest most expensive memory on your computer?",
    answers: ["L1 cache", "Registers", "Graphics memory", "RAM"],
    correct: 1,
    explanation: "Registers are the fastest and most expensive memory."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 14,
    question: "The amount of RAM storage on modern computing devices is usually measured in ________.",
    answers: ["machine cycles", "gigabits", "gigahertz", "gigabytes"],
    correct: 3,
    explanation: "RAM capacity is usually measured in gigabytes."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 15,
    question: "The rule of thumb that predicts that the number of transistors on a CPU will double every two years is called ________ Law.",
    answers: ["Moore's", "Intel's", "Boyle's", "Charles'"],
    correct: 0,
    explanation: "Moore's Law predicts transistor growth over time."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 16,
    question: "Which of the following activities is carried out by the ALU?",
    answers: ["Renders video images", "Moves read/write heads", "Creates virtual memory", "Performs arithmetic calculations"],
    correct: 3,
    explanation: "The ALU performs arithmetic and logic operations."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 17,
    question: "RAM is an example of ________ storage.",
    answers: ["volatile", "nonvolatile", "permanent", "mobile"],
    correct: 0,
    explanation: "RAM is volatile because it loses data when power is off."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 18,
    question: "The control unit is one component of the ________.",
    answers: ["clock", "CPU", "front side bus", "cache"],
    correct: 1,
    explanation: "The control unit is part of the CPU."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 19,
    question: "Which of the following ports is not considered to be a video port?",
    answers: ["DVI", "HDMI", "DisplayPort", "USB"],
    correct: 3,
    explanation: "USB is not mainly considered a video port."
  },
  {
    chapter: "Chapter 6 Quiz",
    id: 20,
    question: "All of the following are part of the machine cycle except ________.",
    answers: ["store", "execute", "encode", "fetch"],
    correct: 2,
    explanation: "The machine cycle includes fetch, decode, execute, and store."
  },
  
  {
    chapter: "Chapter 7 Quiz",
    id: 1,
    question: "A computer ________ is two or more computers connected using software and hardware so that they can communicate with each other.",
    answers: [
      "node",
      "broadband",
      "network",
      "switch"
    ],
    correct: 2,
    explanation: "A network is two or more computers connected together to communicate."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 2,
    question: "The network architecture that spans the largest physical distance is called a ________.",
    answers: [
      "HAN",
      "WAN",
      "PAN",
      "LAN"
    ],
    correct: 1,
    explanation: "A WAN (Wide Area Network) covers the largest geographic area."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 3,
    question: "A large network designed to provide access to a specific geographic area, such as a large city, is a ________.",
    answers: [
      "PAN",
      "LAN",
      "MAN",
      "HAN"
    ],
    correct: 2,
    explanation: "A MAN (Metropolitan Area Network) covers a city or large geographic area."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 4,
    question: "Client/server networks are controlled by a central server that runs specialized software called a(n) ________.",
    answers: [
      "central operating system (COS)",
      "network operating system (NOS)",
      "multipersonnel operating system (MPOS)",
      "central server operating system (CCOS)"
    ],
    correct: 1,
    explanation: "A Network Operating System (NOS) manages network resources and communication."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 5,
    question: "Data are sent through a network in bundles called ________.",
    answers: [
      "packets",
      "packages",
      "nodes",
      "pouches"
    ],
    correct: 0,
    explanation: "Data transmitted across networks are divided into packets."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 6,
    question: "Which generation of wireless data is being rolled out as the latest mobile data service and also as a home Internet service?",
    answers: [
      "3rd",
      "6th",
      "5th",
      "4th"
    ],
    correct: 2,
    explanation: "5G is the newest wireless data generation currently being deployed."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 7,
    question: "Which transmission medium transmits data the fastest?",
    answers: [
      "Twisted-pair cable",
      "Coaxial cable",
      "Wireless",
      "Fiber-optic cable"
    ],
    correct: 3,
    explanation: "Fiber-optic cable transmits data the fastest using light signals."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 8,
    question: "Which of the following is not a broadband Internet connection option?",
    answers: [
      "Dial-up",
      "Fiber-optic",
      "DSL",
      "Cable"
    ],
    correct: 0,
    explanation: "Dial-up is not considered broadband because it is much slower."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 9,
    question: "Wireless network devices use ________ to communicate with each other.",
    answers: [
      "radio waves",
      "microwaves",
      "fiber optics",
      "DSL"
    ],
    correct: 0,
    explanation: "Wireless devices communicate using radio waves."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 10,
    question: "Which of the following is not a standard for wireless Ethernet networks?",
    answers: [
      "802.11g",
      "802.11n",
      "802.11ac",
      "802.11zx"
    ],
    correct: 3,
    explanation: "802.11zx is not a real wireless Ethernet standard."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 11,
    question: "A ________ is any device connected to a network such as a computer, printer, or game console.",
    answers: [
      "packet",
      "NOS",
      "NIC",
      "node"
    ],
    correct: 3,
    explanation: "Any connected device on a network is called a node."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 12,
    question: "What transmission media is used for normal telephone service?",
    answers: [
      "Fiber-optic cable",
      "Ethernet cable",
      "Coaxial cable",
      "Twisted-pair cable"
    ],
    correct: 3,
    explanation: "Traditional telephone lines use twisted-pair cable."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 13,
    question: "________ is the actual speed of data transfer that is achieved between two nodes on a network.",
    answers: [
      "Benchmark",
      "Throughput",
      "Broadband",
      "LAN speed"
    ],
    correct: 1,
    explanation: "Throughput measures the real data transfer speed achieved."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 14,
    question: "Which of the following is not true about 5G wireless technology?",
    answers: [
      "It should allow online games to be played in real time.",
      "It will use more energy than current standards.",
      "It will transmit data up to 1Gbps.",
      "It will allow the connection of more devices to the network than 4G."
    ],
    correct: 1,
    explanation: "5G is designed to be more energy efficient than previous standards."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 15,
    question: "You can find out which network adapters are installed in your system by using the Windows ________ Manager utility.",
    answers: [
      "Hardware",
      "Setup",
      "Device",
      "Network"
    ],
    correct: 2,
    explanation: "Device Manager shows installed hardware including network adapters."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 16,
    question: "To transfer data packets between two networks, a ________ is used.",
    answers: [
      "switch",
      "firewall",
      "router",
      "hub"
    ],
    correct: 2,
    explanation: "A router directs packets between different networks."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 17,
    question: "When setting up a home network, make sure each node ________.",
    answers: [
      "has the same IP address as all other nodes",
      "has a MAN installed in it",
      "meets the latest VPN throughput requirements",
      "has a network adapter"
    ],
    correct: 3,
    explanation: "Each device needs a network adapter to connect to the network."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 18,
    question: "If you want to access your home network from your distant garage, a ________ might help boost the signal.",
    answers: [
      "router",
      "switch",
      "wireless range extender",
      "wireless access point"
    ],
    correct: 2,
    explanation: "A wireless range extender increases Wi-Fi signal coverage."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 19,
    question: "On a network, a(n) ________ helps prevent data packets from colliding with each other.",
    answers: [
      "adapter",
      "switch",
      "access point",
      "router"
    ],
    correct: 1,
    explanation: "A switch helps manage traffic and prevents packet collisions."
  },
  {
    chapter: "Chapter 7 Quiz",
    id: 20,
    question: "For the nodes on a network to communicate with each other and access the network, each node needs a ________.",
    answers: [
      "network adapter",
      "router",
      "DSL modem",
      "hub"
    ],
    correct: 0,
    explanation: "A network adapter allows devices to connect and communicate on a network."
  },
 
  {
    chapter: "Chapter 12 Quiz",
    id: 1,
    question: "Which of the following is not a common network topology?",
    answers: [
      "Ring",
      "Cluster",
      "Linear bus",
      "Star"
    ],
    correct: 1,
    explanation: "Cluster is not considered a standard network topology."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 2,
    question: "The ends of the cable in a bus network use a(n) ________ to absorb signals so they are not reflected back through the network.",
    answers: [
      "block",
      "terminator",
      "endcap",
      "stopper"
    ],
    correct: 1,
    explanation: "A terminator absorbs signals at the ends of a bus cable."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 3,
    question: "In a ________ network, data collisions can occur fairly easily because the network uses a single cable.",
    answers: [
      "hierarchical",
      "star",
      "bus",
      "cluster"
    ],
    correct: 2,
    explanation: "Bus networks share one cable making collisions more common."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 4,
    question: "The computers in a lab on a floor of a building would most likely be connected using a ________.",
    answers: [
      "WAN",
      "MAN",
      "PAN",
      "LAN"
    ],
    correct: 3,
    explanation: "A LAN connects computers within a small local area."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 5,
    question: "________ is the amount of data that can be transmitted across a medium measured in bits per second.",
    answers: [
      "Data capacity",
      "Infusion",
      "Bandwidth",
      "Scalability"
    ],
    correct: 2,
    explanation: "Bandwidth measures data transmission speed."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 6,
    question: "A ________ is a group of two or more computers configured to share information and resources.",
    answers: [
      "router",
      "network",
      "bridge",
      "bus"
    ],
    correct: 1,
    explanation: "A network connects computers for sharing data and resources."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 7,
    question: "________ cable is not affected by electromagnetic or radio frequency interference.",
    answers: [
      "Fiber-optic",
      "Polycarbonate",
      "Twisted-pair",
      "Coaxial"
    ],
    correct: 0,
    explanation: "Fiber-optic cable is immune to electromagnetic interference."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 8,
    question: "Which of the following would not be considered a possessed object?",
    answers: [
      "key cards",
      "password",
      "driver's license",
      "smart keys"
    ],
    correct: 1,
    explanation: "A password is something you know not something you possess."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 9,
    question: "________ is the standard communications protocol used on most client/server networks.",
    answers: [
      "VPN",
      "NOS",
      "Ethernet",
      "Mac"
    ],
    correct: 2,
    explanation: "Ethernet is the most common networking protocol."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 10,
    question: "A(n) ________ server tracks user logins and controls access to network services.",
    answers: [
      "application",
      "authentication",
      "file",
      "dedicated"
    ],
    correct: 1,
    explanation: "Authentication servers verify users and manage permissions."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 11,
    question: "A(n) ________ server stores and manages files for network users.",
    answers: [
      "file",
      "e-mail",
      "print",
      "authentication"
    ],
    correct: 0,
    explanation: "A file server stores and shares files across a network."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 12,
    question: "Packet ________ is a form of protection that examines packets entering a network.",
    answers: [
      "examination",
      "viewing",
      "screening",
      "scanning"
    ],
    correct: 2,
    explanation: "Packet screening checks incoming packets for security threats."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 13,
    question: "Most wired home networks use ________ cable which is highly susceptible to interference.",
    answers: [
      "unshielded twisted-pair",
      "coaxial",
      "fiber-optic",
      "Wi-Fi"
    ],
    correct: 0,
    explanation: "Unshielded twisted-pair cable is vulnerable to interference."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 14,
    question: "In a ________ network each node communicates directly with every other node.",
    answers: [
      "router",
      "client/server",
      "peer-to-peer",
      "bridge"
    ],
    correct: 2,
    explanation: "Peer-to-peer networks allow direct communication between devices."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 15,
    question: "A network ________ is a set of rules for exchanging information and communications.",
    answers: [
      "token",
      "packet",
      "protocol",
      "frame"
    ],
    correct: 2,
    explanation: "A protocol defines communication rules between devices."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 16,
    question: "A ________ uses the Internet to create a secure and private network connection.",
    answers: [
      "PAN",
      "WAN",
      "HAN",
      "VPN"
    ],
    correct: 3,
    explanation: "A VPN creates a private secure connection over the Internet."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 17,
    question: "A(n) ________ address is used by external devices when communicating with your network.",
    answers: [
      "IP",
      "MAC",
      "WAP",
      "ALU"
    ],
    correct: 0,
    explanation: "An IP address identifies a device on a network."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 18,
    question: "A ________ network can contain both servers and individual computers.",
    answers: [
      "peer-to-peer",
      "bridge",
      "client/server",
      "switch"
    ],
    correct: 2,
    explanation: "Client/server networks use centralized servers and client machines."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 19,
    question: "Availability Integrity Authentication Confidentiality and Nonrepudiation are key attributes of ________.",
    answers: [
      "referential integrity",
      "data integrity",
      "multi-factor authentication",
      "information assurance"
    ],
    correct: 3,
    explanation: "These are the core principles of information assurance."
  },
  {
    chapter: "Chapter 12 Quiz",
    id: 20,
    question: "Ring networks use the ________ method to avoid data collisions.",
    answers: [
      "active-check",
      "token",
      "packet screening",
      "passive-check"
    ],
    correct: 1,
    explanation: "Ring networks use token passing to control communication."
  },
  
  {
    chapter: "Chapter 9 Quiz",
    id: 1,
    question: "________ hackers break into systems legally for non-malicious reasons such as to test system security vulnerabilities.",
    answers: ["Black-hat", "White-hat", "Green-hat", "Gray-hat"],
    correct: 1,
    explanation: "White-hat hackers legally test systems to find security weaknesses."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 2,
    question: "A(n) ________ takes advantage of file transport methods, such as e-mail, to spread on its own.",
    answers: ["macro virus", "script virus", "worm", "encryption virus"],
    correct: 2,
    explanation: "A worm spreads itself through networks or file transport methods."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 3,
    question: "A(n) ________ virus replicates itself onto a hard drive's master boot record.",
    answers: ["macro", "boot-sector", "multi-partite", "encryption"],
    correct: 1,
    explanation: "A boot-sector virus infects the master boot record."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 4,
    question: "A ________ is a virus that is triggered on a certain date.",
    answers: ["logic bomb", "time bomb", "macro", "worm"],
    correct: 1,
    explanation: "A time bomb activates on a specific date or time."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 5,
    question: "________ floods a computer with requests until it shuts down and refuses to answer any requests for information.",
    answers: ["Pretexting", "A DDoS attack", "A Trojan horse", "A polymorphic virus"],
    correct: 1,
    explanation: "A DDoS attack overloads a computer or server with too many requests."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 6,
    question: "Computer ________ involves identifying, extracting, preserving, and documenting computer evidence.",
    answers: ["inoculation", "hacking", "forensics", "multi-factor authentication"],
    correct: 2,
    explanation: "Computer forensics handles digital evidence."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 7,
    question: "Regarding computer protection, quarantining is defined as ________.",
    answers: [
      "placing a found virus in a secure area on the hard drive",
      "updating your antivirus software",
      "deleting an infected file",
      "repairing an infected file"
    ],
    correct: 0,
    explanation: "Quarantining isolates a virus in a secure location."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 8,
    question: "Which is not one of the four key pieces of personal information you should protect from identity thieves?",
    answers: ["Date of birth", "Street address", "Anniversary", "Social Security number"],
    correct: 2,
    explanation: "An anniversary is not one of the main personal identity items thieves usually target."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 9,
    question: "Social ________ is any technique that uses social skills to generate human interaction that entices individuals to reveal sensitive information.",
    answers: ["engineering", "theft", "pretexting", "pharming"],
    correct: 0,
    explanation: "Social engineering tricks people into revealing sensitive information."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 10,
    question: "Which type of hackers break into systems for the thrill or to show off their skills?",
    answers: ["Black-hat", "White-hat", "Gray-hat", "Blue-hat"],
    correct: 2,
    explanation: "Gray-hat hackers may break into systems without permission, often for thrill or recognition."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 11,
    question: "A(n) ________ backup makes a copy of all changes since the last backup.",
    answers: ["data", "full", "incremental", "image"],
    correct: 2,
    explanation: "An incremental backup saves changes made since the last backup."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 12,
    question: "________ is a program that gathers information about your surfing habits without your knowledge.",
    answers: ["Ghostware", "Adware", "Shareware", "Spyware"],
    correct: 3,
    explanation: "Spyware secretly collects information about your activity."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 13,
    question: "When malicious code is planted on your computer and alters your browser's ability to find web addresses, it is known as ________.",
    answers: ["pretexting", "phishing", "polymorphing", "pharming"],
    correct: 3,
    explanation: "Pharming redirects web addresses to fake or malicious websites."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 14,
    question: "In computing, a ________ is named after a housing construction feature that slows the spread of fires from house to house.",
    answers: ["firehouse", "firewall", "firebreak", "fire extinguisher"],
    correct: 1,
    explanation: "A firewall blocks or filters unsafe network traffic."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 15,
    question: "A packet analyzer is a program that can enable a hacker to do all of the following except ________.",
    answers: [
      "gather information to assume your identity",
      "launch a denial of service (DoS) attack on your computer",
      "use your debit card information to purchase items illegally",
      "steal your logons and passwords for various accounts"
    ],
    correct: 1,
    explanation: "A packet analyzer captures data, but it does not directly launch a DoS attack."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 16,
    question: "Which of the following is formally defined as any criminal action perpetrated primarily using a computer?",
    answers: ["Hacking", "Phishing", "Social networking", "Cybercrime"],
    correct: 3,
    explanation: "Cybercrime is crime committed primarily using a computer."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 17,
    question: "Government impersonation scams involve ________.",
    answers: [
      "convincing people to send money as a \"good faith\" gesture",
      "running auctions that do not exist",
      "people pretending to represent official organizations such as the Dept. of Homeland Security or IRS",
      "collecting funds and not delivering the goods"
    ],
    correct: 2,
    explanation: "Government impersonation scams pretend to be official agencies."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 18,
    question: "Which type of backup ensures you capture a complete snapshot of everything that makes your computer run?",
    answers: ["Complete", "Full", "Incremental", "Image"],
    correct: 3,
    explanation: "An image backup captures a full snapshot of the system."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 19,
    question: "Which of the following classifications of viruses can change its own code to avoid detection?",
    answers: ["Worm", "Multipartite", "Polymorphic", "Stealth"],
    correct: 2,
    explanation: "A polymorphic virus changes its code to avoid detection."
  },
  {
    chapter: "Chapter 9 Quiz",
    id: 20,
    question: "A ________ allows a hacker to gain access to your computer and take almost complete control of it without your knowledge.",
    answers: ["denial of service (DoS)", "zombie", "logic bomb", "rootkit"],
    correct: 3,
    explanation: "A rootkit gives hidden control over a computer."
  },
 
  {
    chapter: "Chapter 8 Quiz",
    id: 1,
    question: "What is a good rule to follow to avoid plagiarism?",
    answers: [
      "When in doubt, cite your source.",
      "Cite every fact you use.",
      "Never cite from another source.",
      "Cite every comment."
    ],
    correct: 0,
    explanation: "When in doubt, cite your source is the best rule to avoid plagiarism."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 2,
    question: "Works without copyright protection are in the ________.",
    answers: [
      "copyleft domain",
      "trademark zone",
      "public domain",
      "free use domain"
    ],
    correct: 2,
    explanation: "Works without copyright protection are considered part of the public domain."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 3,
    question: "What is a website that allows an instructor to upload a paper to check for plagiarism?",
    answers: [
      "checkthatpaper.com",
      "turnitin.com",
      "plagiarism.com",
      "checkit.com"
    ],
    correct: 1,
    explanation: "Turnitin.com is commonly used by schools to detect plagiarism."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 4,
    question: "________ allows only limited use of media that has been legally purchased.",
    answers: [
      "Copyleft",
      "Copyright",
      "Synchronizing",
      "Digital rights management"
    ],
    correct: 3,
    explanation: "Digital rights management (DRM) restricts how purchased media can be used."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 5,
    question: "To protect a movie, what category of intellectual property would be used?",
    answers: [
      "Patent",
      "Copyright",
      "Service mark",
      "Trademark"
    ],
    correct: 1,
    explanation: "Movies are protected under copyright law."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 6,
    question: "________ is digital textual information that can be stored, manipulated, and transmitted by electronic devices.",
    answers: [
      "E-text",
      "Digital rights management",
      "Short message service",
      "SMTP"
    ],
    correct: 0,
    explanation: "E-text refers to digital textual information."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 7,
    question: "A violation of the holder's rights is known as copyright ________.",
    answers: [
      "defrauding",
      "abuse",
      "violation",
      "infringement"
    ],
    correct: 3,
    explanation: "Copyright infringement is the unauthorized use of protected material."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 8,
    question: "What is the name of the massive public online ledger which records the time and amount of every finalized cryptocurrency transaction?",
    answers: [
      "blockchain",
      "cryptochain",
      "bitcoin ledger",
      "crypto ledger"
    ],
    correct: 0,
    explanation: "Blockchain is the public ledger technology used by cryptocurrencies."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 9,
    question: "A(n) ________ chip converts sound waves from a voice into a digital signal.",
    answers: [
      "digital signal processor",
      "digital convergence",
      "analog-to-digital converter",
      "telephony"
    ],
    correct: 2,
    explanation: "An analog-to-digital converter changes sound waves into digital data."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 10,
    question: "Instead of writing a term paper, some people cheat and purchase one from a(n) ________.",
    answers: [
      "academic wholesale house",
      "term paper resource",
      "paper mill",
      "academic paper resource"
    ],
    correct: 2,
    explanation: "A paper mill sells prewritten or custom academic papers."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 11,
    question: "Which of the following is not true about fake news?",
    answers: [
      "It is a type of hoax.",
      "Fake news is not used for financial gain.",
      "It is most often spread through social media.",
      "It is intended to spread misinformation."
    ],
    correct: 1,
    explanation: "Fake news is often used for financial gain through clicks and ads."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 12,
    question: "________ property is a product of a person's mind and is usually considered an expression of human creativity.",
    answers: [
      "Intellectual",
      "Personal",
      "Abstract",
      "Tangible"
    ],
    correct: 0,
    explanation: "Intellectual property includes creations of the human mind."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 13,
    question: "Which of the following is not a video file extension?",
    answers: [
      ".mov",
      ".jpg",
      ".mpg",
      ".avi"
    ],
    correct: 1,
    explanation: ".jpg is an image file extension, not a video format."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 14,
    question: "Which is not a reason someone might risk violating a copyright?",
    answers: [
      "The risk of being caught is very low.",
      "It is hard to prove the copyright in court.",
      "I am just one person.",
      "Everyone else is doing it."
    ],
    correct: 1,
    explanation: "Copyright is generally enforceable in court, so this is not a common excuse."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 15,
    question: "How long do current U.S. laws grant copyright protection?",
    answers: [
      "101 years",
      "The life of the author (creator) plus 70 years",
      "The life of the author (creator) plus 50 years",
      "99 years"
    ],
    correct: 1,
    explanation: "Current U.S. copyright law lasts for the creator's life plus 70 years."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 16,
    question: "One app used to access the Dark Web is the ________ Browser.",
    answers: [
      "Sor",
      "Lor",
      "Tor",
      "Zor"
    ],
    correct: 2,
    explanation: "The Tor Browser is commonly used to access the Dark Web."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 17,
    question: "What is the act of copying text or ideas from someone else and claiming them as your own?",
    answers: [
      "Copyright abuse",
      "Trademark infringement",
      "Plagiarism",
      "Copyleft"
    ],
    correct: 2,
    explanation: "Plagiarism is taking another person's work or ideas and claiming ownership."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 18,
    question: "The Apple logo would be considered a(n) ________.",
    answers: [
      "patent",
      "trademark",
      "copyright",
      "service mark"
    ],
    correct: 1,
    explanation: "A logo is protected as a trademark."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 19,
    question: "Which of the following describes the number of times an analog wave is measured each second during an analog-to-digital conversion?",
    answers: [
      "Converting rate",
      "Conversion rate",
      "Sampling rate",
      "Simplifying rate"
    ],
    correct: 2,
    explanation: "Sampling rate measures how many times per second an analog signal is captured."
  },
  {
    chapter: "Chapter 8 Quiz",
    id: 20,
    question: "Which of the following digital formats compress an image file?",
    answers: [
      "RAW",
      "MPEG",
      "AAC",
      "JPEG"
    ],
    correct: 3,
    explanation: "JPEG is a compressed image file format."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 1,
    question: "A ________ relationship indicates that for each record in a table, there is only a single corresponding record in a related table.",
    answers: [
      "one-to-one",
      "many-to-one",
      "one-to-many",
      "many-to-many"
    ],
    correct: 0,
    explanation: "A one-to-one relationship means one record matches only one related record."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 2,
    question: "________ databases are the most commonly used electronic databases.",
    answers: [
      "Object-oriented",
      "Flat-file",
      "Multidimensional",
      "Relational"
    ],
    correct: 3,
    explanation: "Relational databases are the most commonly used database type."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 3,
    question: "Management information systems (MIS) provide ________ reports, which show conditions that are unusual or need attention from users of the system.",
    answers: [
      "expert",
      "exception",
      "summary",
      "detail"
    ],
    correct: 1,
    explanation: "Exception reports highlight unusual conditions needing attention."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 4,
    question: "Data ________ means that the data contained in a database is accurate and reliable.",
    answers: [
      "efficiency",
      "consistency",
      "redundancy",
      "integrity"
    ],
    correct: 3,
    explanation: "Data integrity means data is accurate and reliable."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 5,
    question: "A ________ displays a subset of data from a table (or tables) based on the specified criteria.",
    answers: [
      "table query",
      "criteria query",
      "select query",
      "join query"
    ],
    correct: 2,
    explanation: "A select query displays selected records based on specified criteria."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 6,
    question: "SQL uses ________ to extract records from a database by using English-like expressions that have variables and operations.",
    answers: [
      "relational algebra",
      "foreign keys",
      "primary keys",
      "Boolean algebra"
    ],
    correct: 0,
    explanation: "SQL uses relational algebra to retrieve and manipulate database records."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 7,
    question: "________ is the branch of computer science that attempts to create computers that think like humans.",
    answers: [
      "Artificial intelligence",
      "Natural language processing",
      "Data warehousing",
      "Enterprise resource planning"
    ],
    correct: 0,
    explanation: "Artificial intelligence focuses on creating human-like computer thinking."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 8,
    question: "A(n) ________ check determines whether a required field such as LastName was filled in.",
    answers: [
      "alphabetic",
      "range",
      "completeness",
      "consistency"
    ],
    correct: 2,
    explanation: "A completeness check ensures required fields are filled in."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 9,
    question: "A ________ check compares the values of data in two or more fields to see whether those values are reasonable.",
    answers: [
      "correctness",
      "consistency",
      "range",
      "numeric"
    ],
    correct: 1,
    explanation: "A consistency check compares values across fields for reasonableness."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 10,
    question: "Nontraditional data in object-oriented databases such as audio clips, video clips, pictures, and very large documents are called ________ data.",
    answers: [
      "structured",
      "multidimensional",
      "enterprise",
      "unstructured"
    ],
    correct: 3,
    explanation: "Unstructured data includes videos, audio, images, and large documents."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 11,
    question: "Siri, the personal assistant application on Apple's iPhone, is an example of a ________.",
    answers: [
      "database management system (DBMS)",
      "decision support system (DSS)",
      "natural language processing (NLP) system",
      "management information system (MIS)"
    ],
    correct: 2,
    explanation: "Siri uses natural language processing to understand speech."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 12,
    question: "________ means that for each value in the foreign key of one table, there is a corresponding value in the primary key of another table.",
    answers: [
      "Referential integrity",
      "Record integrity",
      "Database consistency",
      "Normalization"
    ],
    correct: 0,
    explanation: "Referential integrity ensures matching relationships between tables."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 13,
    question: "Big data analytics is usually associated with ________ services.",
    answers: [
      "data warehouse",
      "management information",
      "decision support",
      "office support"
    ],
    correct: 2,
    explanation: "Big data analytics is commonly tied to decision support services."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 14,
    question: "Which of the following fields is a likely primary key in a student information record?",
    answers: [
      "Last name",
      "Student ID number",
      "Date of birth",
      "First name"
    ],
    correct: 1,
    explanation: "Student ID numbers uniquely identify each student."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 15,
    question: "Data in a multidimensional database is organized in a ________ format.",
    answers: [
      "cube",
      "cellular",
      "modular",
      "linear"
    ],
    correct: 0,
    explanation: "Multidimensional databases organize data in cube format."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 16,
    question: "You would use a ________ in an Access database to temporarily display records of residents for the city of Boston.",
    answers: [
      "validation rule",
      "field constraint",
      "sieve",
      "filter"
    ],
    correct: 3,
    explanation: "A filter temporarily displays only records matching criteria."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 17,
    question: "You can set a ________, which is automatically displayed in a field unless the user enters something different.",
    answers: [
      "field type",
      "numeric check",
      "relation",
      "default value"
    ],
    correct: 3,
    explanation: "A default value automatically appears unless changed by the user."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 18,
    question: "If a school keeps two lists, one for student registration and one for student financial information, both containing name and address information, this is an example of data ________.",
    answers: [
      "completeness",
      "integrity",
      "normalization",
      "redundancy"
    ],
    correct: 3,
    explanation: "Duplicate data stored in multiple places is called redundancy."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 19,
    question: "________ involves taking data from your database and putting it into an electronic file in a format that another external application or database can recognize.",
    answers: [
      "Extracting",
      "Enhancing",
      "Exporting",
      "Importing"
    ],
    correct: 2,
    explanation: "Exporting transfers data into a usable external format."
  },
  {
    chapter: "Chapter 11 Quiz",
    id: 20,
    question: "A ________ check would be used in a field to restrict the fines for speeding violations so that they fall between $50 and $250.",
    answers: [
      "completeness",
      "numeric",
      "consistency",
      "range"
    ],
    correct: 3,
    explanation: "A range check limits values between a minimum and maximum amount."
  },

  {
    chapter: "Extra Credit 2",
    id: 1,
    question: "A(n) ________ chip converts sound waves from a voice into a digital signal.",
    answers: [
      "telephony",
      "digital signal processor",
      "analog-to-digital converter",
      "digital convergence"
    ],
    correct: 2,
    explanation: "An analog-to-digital converter changes sound waves into digital signals. Telephony means phone communication. A digital signal processor processes digital signals. Digital convergence means combining technologies."
  },
  {
    chapter: "Extra Credit 2",
    id: 2,
    question: "What is a popular copyleft license used for software?",
    answers: [
      "General Public License (GNU)",
      "Creative Commons (CC)",
      "Software Copy License (SCL)",
      "NonCommercial (NC)"
    ],
    correct: 0,
    explanation: "The GNU General Public License is a common copyleft software license. Creative Commons is usually for creative works. SCL is not the standard answer. NonCommercial is a license restriction."
  },
  {
    chapter: "Extra Credit 2",
    id: 3,
    question: "What happens to e-books rented through VitalSource when your subscription ends?",
    answers: [
      "Only the first chapter can be read.",
      "They disappear from your device.",
      "They show up in your library, but cannot be read.",
      "They are encrypted until you purchase them."
    ],
    correct: 2,
    explanation: "Rented e-books may still appear in the library, but access is removed. The other choices incorrectly describe partial reading, deletion, or encryption."
  },
  {
    chapter: "Extra Credit 2",
    id: 4,
    question: "Works without copyright protection are in the ________.",
    answers: [
      "trademark zone",
      "free use domain",
      "copyleft domain",
      "public domain"
    ],
    correct: 3,
    explanation: "Public domain means the work has no copyright protection. The other choices are not the correct legal category."
  },
  {
    chapter: "Extra Credit 2",
    id: 5,
    question: "Which of the following is not true about fake news?",
    answers: [
      "It is most often spread through social media.",
      "It is intended to spread misinformation.",
      "It is a type of hoax.",
      "Fake news is not used for financial gain."
    ],
    correct: 3,
    explanation: "Fake news can be used for financial gain through clicks and ads. The other choices are true about fake news."
  },
  {
    chapter: "Extra Credit 2",
    id: 6,
    question: "A ________ allows a hacker to gain access to your computer and take almost complete control of it without your knowledge.",
    answers: [
      "rootkit",
      "zombie",
      "denial of service (DoS)",
      "logic bomb"
    ],
    correct: 0,
    explanation: "A rootkit hides in a system and gives control to a hacker. A zombie is an infected computer. DoS is an attack. A logic bomb activates under certain conditions."
  },
  {
    chapter: "Extra Credit 2",
    id: 7,
    question: "A packet analyzer is a program that can enable a hacker to do all of the following except ________.",
    answers: [
      "use your debit card information to purchase items illegally",
      "steal your logons and passwords for various accounts",
      "launch a denial of service (DoS) attack on your computer",
      "gather information to assume your identity"
    ],
    correct: 2,
    explanation: "A packet analyzer captures network traffic. It can expose sensitive information, but it does not directly launch a DoS attack."
  },
  {
    chapter: "Extra Credit 2",
    id: 8,
    question: "A ________ is a virus that is attached to documents.",
    answers: [
      "Trojan horse",
      "polymorphic virus",
      "script virus",
      "macro virus"
    ],
    correct: 3,
    explanation: "A macro virus attaches to documents. A Trojan horse disguises itself. A polymorphic virus changes form. A script virus uses scripts."
  },
  {
    chapter: "Extra Credit 2",
    id: 9,
    question: "Social ________ is any technique that uses social skills to generate human interaction that entices individuals to reveal sensitive information.",
    answers: [
      "engineering",
      "pharming",
      "theft",
      "pretexting"
    ],
    correct: 0,
    explanation: "Social engineering tricks people into revealing information. Pharming redirects users. Theft is too broad. Pretexting is one type of social engineering."
  },
  {
    chapter: "Extra Credit 2",
    id: 10,
    question: "Which type of backup ensures you capture a complete snapshot of everything that makes your computer run?",
    answers: [
      "Image",
      "Complete",
      "Full",
      "Incremental"
    ],
    correct: 0,
    explanation: "An image backup captures the whole system. Full backup copies files. Incremental backup copies changes. Complete is not the standard term here."
  },
  {
    chapter: "Extra Credit 2",
    id: 11,
    question: "A ________ relationship indicates that for each record in a table, there is only a single corresponding record in a related table.",
    answers: [
      "many-to-one",
      "one-to-one",
      "many-to-many",
      "one-to-many"
    ],
    correct: 1,
    explanation: "One-to-one means one record matches one related record. The other relationships involve multiple records."
  },
  {
    chapter: "Extra Credit 2",
    id: 12,
    question: "You can set a ________, which is automatically displayed in a field unless the user enters something different.",
    answers: [
      "default value",
      "relation",
      "field type",
      "numeric check"
    ],
    correct: 0,
    explanation: "A default value appears automatically. Relation, field type, and numeric check do not automatically fill a field."
  },
  {
    chapter: "Extra Credit 2",
    id: 13,
    question: "________ is the branch of computer science that attempts to create computers that think like humans.",
    answers: [
      "Natural language processing",
      "Enterprise resource planning",
      "Artificial intelligence",
      "Data warehousing"
    ],
    correct: 2,
    explanation: "Artificial intelligence tries to make computers think like humans. NLP is only language processing. ERP manages business systems. Data warehousing stores data."
  },
  {
    chapter: "Extra Credit 2",
    id: 14,
    question: "A ________ check would be used in a field to restrict the fines for speeding violations so that they fall between $50 and $250.",
    answers: [
      "completeness",
      "consistency",
      "range",
      "numeric"
    ],
    correct: 2,
    explanation: "A range check limits values between minimum and maximum amounts. Completeness checks required fields. Consistency checks agreement. Numeric checks only confirm numbers."
  },
  {
    chapter: "Extra Credit 2",
    id: 15,
    question: "Big data analytics is usually associated with ________ services.",
    answers: [
      "decision support",
      "office support",
      "data warehouse",
      "management information"
    ],
    correct: 0,
    explanation: "Big data analytics supports decision-making. Office support is basic productivity. Data warehouse stores data. MIS provides routine business reports."
  },
  {
    chapter: "Extra Credit 2",
    id: 16,
    question: "The computers in a lab on a floor of a building would be connected using a ________.",
    answers: [
      "MAN",
      "WAN",
      "PAN",
      "LAN"
    ],
    correct: 3,
    explanation: "A LAN connects computers in a local area. MAN covers a city. WAN covers large distances. PAN is for personal devices."
  },
  {
    chapter: "Extra Credit 2",
    id: 17,
    question: "A ________ uses the Internet communications infrastructure to build a secure and private network.",
    answers: [
      "WAN",
      "HAN",
      "PAN",
      "VPN"
    ],
    correct: 3,
    explanation: "A VPN creates a secure private connection over the Internet. WAN, HAN, and PAN are network types, not secure tunnels."
  },
  {
    chapter: "Extra Credit 2",
    id: 18,
    question: "Which of the following would not be considered a possessed object?",
    answers: [
      "password",
      "driver's license",
      "smart keys",
      "key cards"
    ],
    correct: 0,
    explanation: "A password is something you know, not something you possess. The other choices are physical objects."
  },
  {
    chapter: "Extra Credit 2",
    id: 19,
    question: "Ring networks use the ________ method to avoid data collisions.",
    answers: [
      "active-check",
      "token",
      "packet screening",
      "passive-check"
    ],
    correct: 1,
    explanation: "Ring networks use token passing. The other choices are not the standard collision-avoidance method."
  },
  {
    chapter: "Extra Credit 2",
    id: 20,
    question: "________ cable is not subject to electromagnetic interference or radio frequency interference.",
    answers: [
      "Fiber-optic",
      "Twisted-pair",
      "Polycarbonate",
      "Coaxial"
    ],
    correct: 0,
    explanation: "Fiber-optic cable uses light, so it avoids EMI and RFI. Twisted-pair and coaxial use electrical signals. Polycarbonate is not the network cable type."
  },
  {
    chapter: "Extra Credit 2",
    id: 21,
    question: "What is the act of copying text or ideas from someone else and claiming them as your own?",
    answers: [
      "Copyright abuse",
      "Trademark infringement",
      "Plagiarism",
      "Copyleft"
    ],
    correct: 2,
    explanation: "Plagiarism is using someone else's words or ideas as your own. Copyright abuse and trademark infringement are legal issues. Copyleft is a licensing approach."
  },
  {
    chapter: "Extra Credit 2",
    id: 22,
    question: "A violation of the holder's rights is known as copyright ________.",
    answers: [
      "violation",
      "abuse",
      "defrauding",
      "infringement"
    ],
    correct: 3,
    explanation: "Copyright infringement is the legal term. The other answers are not the precise term."
  },
  {
    chapter: "Extra Credit 2",
    id: 23,
    question: "When does copyright protection begin?",
    answers: [
      "When the application for the copyright has been submitted",
      "When a work is begun",
      "When the application for the copyright has been approved",
      "When a work is created and fixed into a digital or physical form"
    ],
    correct: 3,
    explanation: "Copyright begins when a work is fixed in a tangible or digital form. It does not require an application or approval first."
  },
  {
    chapter: "Extra Credit 2",
    id: 24,
    question: "One app used to access the Dark Web is the ________ Browser.",
    answers: [
      "Lor",
      "Sor",
      "Zor",
      "Tor"
    ],
    correct: 3,
    explanation: "Tor Browser is used to access parts of the Dark Web. Lor, Sor, and Zor are not correct browsers."
  },
  {
    chapter: "Extra Credit 2",
    id: 25,
    question: "Which of the following digital formats compress an image file?",
    answers: [
      "RAW",
      "AAC",
      "JPEG",
      "MPEG"
    ],
    correct: 2,
    explanation: "JPEG compresses image files. RAW is usually uncompressed image data. AAC is audio. MPEG is video."
  },
  {
    chapter: "Extra Credit 2",
    id: 26,
    question: "Management information systems (MIS) provide ________ reports, which show conditions that are unusual or need attention from users of the system.",
    answers: [
      "expert",
      "detail",
      "summary",
      "exception"
    ],
    correct: 3,
    explanation: "Exception reports show unusual conditions. Detail and summary reports are general reports. Expert is not the correct MIS report type."
  },
  {
    chapter: "Extra Credit 2",
    id: 27,
    question: "SQL uses ________ to extract records from a database by using English-like expressions that have variables and operations.",
    answers: [
      "Boolean algebra",
      "relational algebra",
      "primary keys",
      "foreign keys"
    ],
    correct: 1,
    explanation: "SQL is based on relational algebra. Boolean algebra handles logic. Primary and foreign keys connect records."
  },
  {
    chapter: "Extra Credit 2",
    id: 28,
    question: "________ is used to ensure that data is organized most efficiently in a database.",
    answers: [
      "Normalization",
      "Consistency checking",
      "Range checking",
      "Validation"
    ],
    correct: 0,
    explanation: "Normalization organizes data efficiently and reduces redundancy. The others are validation or checking methods."
  },
  {
    chapter: "Extra Credit 2",
    id: 29,
    question: "Data staging consists of all of the following steps, except ________.",
    answers: [
      "transforming the data",
      "storing the data in a warehouse",
      "extracting the data",
      "mining the data"
    ],
    correct: 3,
    explanation: "Data staging includes extracting, transforming, and storing data. Mining happens later during analysis."
  },
  {
    chapter: "Extra Credit 2",
    id: 30,
    question: "You would use a ________ in an Access database to temporarily display records of residents for the city of Boston.",
    answers: [
      "filter",
      "sieve",
      "field constraint",
      "validation rule"
    ],
    correct: 0,
    explanation: "A filter temporarily displays matching records. A sieve is not an Access tool. Constraints and validation rules control data entry."
  },
  
  {
    chapter: "Extra Credit 1",
    id: 1,
    question: "The web is based on the ________ Protocol.",
    answers: [
      "Hypertext Translate",
      "Hypertext Transfer",
      "Hypertext Trade",
      "Hypertext Transmit"
    ],
    correct: 1,
    explanation: "HTTP stands for Hypertext Transfer Protocol.",
    wrongExplanations: {
      0: "Translate is not the correct web protocol term.",
      2: "Trade is not related to how web pages are transferred.",
      3: "Transmit sounds close, but the official term is Transfer."
    },
  {
    chapter: "Extra Credit 1",
    id: 2,
    question: "Which of the following is not a type of e-commerce business?",
    answers: [
      "C2B",
      "B2B",
      "B2C",
      "C2C"
    ],
    correct: 0,
    explanation: "C2B is not usually listed as one of the main basic e-commerce business types in this quiz set.",
    wrongExplanations: {
      1: "B2B means business to business, which is a type of e-commerce.",
      2: "B2C means business to consumer, which is a type of e-commerce.",
      3: "C2C means consumer to consumer, which is a type of e-commerce."
    },
  {
    chapter: "Extra Credit 1",
    id: 3,
    question: "AND, OR, and NOT are examples of ________ operators.",
    answers: [
      "Boolean",
      "relational",
      "Jacobean",
      "keyword"
    ],
    correct: 0,
    explanation: "AND, OR, and NOT are Boolean operators used to combine or limit search terms.",
    wrongExplanations: {
      1: "Relational operators compare values, such as greater than or equal to.",
      2: "Jacobean is not related to search operators.",
      3: "Keyword refers to a search word, not the operator connecting terms."
    },
  {
    chapter: "Extra Credit 1",
    id: 4,
    question: "Which of the following are personal video journal entries posted on the web?",
    answers: [
      "Newsgroups",
      "Vlogs",
      "Podcasts",
      "Blogs"
    ],
    correct: 1,
    explanation: "Vlogs are video blogs, or personal video journal entries posted online.",
    wrongExplanations: {
      0: "Newsgroups are online discussion groups, not video journals.",
      2: "Podcasts are audio or video files delivered online, usually through subscriptions or RSS.",
      3: "Blogs are written journal entries, not specifically video entries."
    },
  {
    chapter: "Extra Credit 1",
    id: 5,
    question: "A metasearch engine searches other search engines instead of individual websites.",
    answers: [
      "True",
      "False"
    ],
    correct: 0,
    explanation: "A metasearch engine gathers results from other search engines.",
    wrongExplanations: {
      1: "False is wrong because metasearch engines do search other search engines."
    },
  {
    chapter: "Extra Credit 1",
    id: 6,
    question: "Which of the following information is not contained in a packet sent over the Internet?",
    answers: [
      "The data that are transmitted",
      "The address from where the packet originates",
      "The address to which the packet is sent",
      "The size (in bytes) of the packet"
    ],
    correct: 3,
    explanation: "Packets contain data plus source and destination information. The packet size is not usually listed as one of the main pieces of packet information in this quiz.",
    wrongExplanations: {
      0: "Packets do contain the data being transmitted.",
      1: "Packets do contain the source address.",
      2: "Packets do contain the destination address."
    },
  {
    chapter: "Extra Credit 1",
    id: 7,
    question: "________ permits two or more people to communicate over the Internet in real time.",
    answers: [
      "Snapfish",
      "Flickr",
      "E-mail",
      "Instant messaging"
    ],
    correct: 3,
    explanation: "Instant messaging allows people to communicate online in real time.",
    wrongExplanations: {
      0: "Snapfish is a photo service, not real-time communication.",
      1: "Flickr is a photo-sharing site, not real-time messaging.",
      2: "E-mail is not usually real time."
    },
  {
    chapter: "Extra Credit 1",
    id: 8,
    question: "________ describes website content in terms of the data being described rather than how it is displayed.",
    answers: [
      "JavaScript",
      "HTML",
      "CGI",
      "XML"
    ],
    correct: 3,
    explanation: "XML describes data by meaning and structure rather than presentation.",
    wrongExplanations: {
      0: "JavaScript is mainly used to add interactivity.",
      1: "HTML is mainly used to structure and display web pages.",
      2: "CGI is used for server-side processing."
    },
  {
    chapter: "Extra Credit 1",
    id: 9,
    question: "The main path of the Internet along which data travels the fastest is known as the Internet ________.",
    answers: [
      "cache",
      "backbone",
      "protocol",
      "highway"
    ],
    correct: 1,
    explanation: "The Internet backbone is the main high-speed path where major data traffic travels.",
    wrongExplanations: {
      0: "Cache is temporary storage, not the main Internet path.",
      2: "Protocol means communication rules, not the main path.",
      3: "Highway sounds close, but the correct term is backbone."
    },
  {
    chapter: "Extra Credit 1",
    id: 10,
    question: "________ uses a dedicated connection between two points with the connection remaining active for the duration of the transmission.",
    answers: [
      "A closed circuit",
      "Circuit switching",
      "Packet switching",
      "An open circuit"
    ],
    correct: 1,
    explanation: "Circuit switching keeps a dedicated connection open for the entire transmission.",
    wrongExplanations: {
      0: "A closed circuit is not the networking method described here.",
      2: "Packet switching breaks data into packets instead of keeping one dedicated path.",
      3: "An open circuit is not the correct networking term."
    },
  {
    chapter: "Extra Credit 1",
    id: 11,
    question: "Some of the cache memory of a CPU is ________.",
    answers: [
      "on a nearby SSD",
      "in cloud storage",
      "on the CPU itself",
      "on the hard disk drive"
    ],
    correct: 2,
    explanation: "Some CPU cache is built directly into the CPU for fast access.",
    wrongExplanations: {
      0: "An SSD is storage, not CPU cache.",
      1: "Cloud storage is remote storage, not CPU cache.",
      3: "Hard drives are much slower storage devices."
    },
  {
    chapter: "Extra Credit 1",
    id: 12,
    question: "Which of the following is not a permanent storage option?",
    answers: [
      "Internal hard drive",
      "Random access memory",
      "External hard drive",
      "SSD"
    ],
    correct: 1,
    explanation: "RAM is temporary volatile memory, not permanent storage.",
    wrongExplanations: {
      0: "An internal hard drive is permanent storage.",
      2: "An external hard drive is permanent storage.",
      3: "An SSD is permanent storage."
    },
  {
    chapter: "Extra Credit 1",
    id: 13,
    question: "________ provides high-speed information processing by enabling a new set of instructions to start before the previous set is finished.",
    answers: [
      "Multitasking",
      "Cache memory",
      "Hyperthreading",
      "Overclocking"
    ],
    correct: 2,
    explanation: "Hyperthreading allows the CPU to work on multiple instruction threads more efficiently.",
    wrongExplanations: {
      0: "Multitasking means running multiple programs or tasks, not this CPU technique.",
      1: "Cache memory stores frequently used data for faster access.",
      3: "Overclocking means running the CPU faster than recommended."
    },
  {
    chapter: "Extra Credit 1",
    id: 14,
    question: "Which of the following storage devices has the largest potential capacity?",
    answers: [
      "SD card",
      "Blu-ray disc",
      "Compact disc",
      "Mechanical hard drive"
    ],
    correct: 3,
    explanation: "Mechanical hard drives generally have the largest potential capacity among these options.",
    wrongExplanations: {
      0: "SD cards can store a lot, but usually not as much as hard drives.",
      1: "Blu-ray discs have limited fixed capacity.",
      2: "Compact discs have much smaller capacity."
    },
  {
    chapter: "Extra Credit 1",
    id: 15,
    question: "Running the CPU at a faster speed than the manufacturer recommends is called ________.",
    answers: [
      "hyperthreading",
      "overclocking",
      "latency",
      "fetching"
    ],
    correct: 1,
    explanation: "Overclocking means increasing CPU speed beyond the manufacturer’s recommended setting.",
    wrongExplanations: {
      0: "Hyperthreading helps a CPU handle multiple instruction threads.",
      2: "Latency means delay.",
      3: "Fetching is part of the machine cycle."
    },
  {
    chapter: "Extra Credit 1",
    id: 16,
    question: "Which of the following is not true about 5G wireless technology?",
    answers: [
      "It should allow online games to be played in real time.",
      "It will use more energy than current standards.",
      "It will transmit data up to 1Gbps.",
      "It will allow the connection of more devices to the network than 4G."
    ],
    correct: 1,
    explanation: "The quiz marks 'It will use more energy than current standards' as the statement that is not true.",
    wrongExplanations: {
      0: "5G is expected to support lower latency for real-time uses.",
      2: "5G can support high-speed data transmission.",
      3: "5G supports more connected devices than 4G."
    },
  {
    chapter: "Extra Credit 1",
    id: 17,
    question: "If you want to access your home network from your distant garage, a ________ might help boost the signal.",
    answers: [
      "router",
      "switch",
      "wireless range extender",
      "wireless access point"
    ],
    correct: 2,
    explanation: "A wireless range extender boosts Wi-Fi coverage farther from the router.",
    wrongExplanations: {
      0: "A router manages network traffic, but it may not extend the signal far enough by itself.",
      1: "A switch connects wired devices, not wireless range.",
      3: "A wireless access point creates access, but the quiz answer is range extender."
    },
  {
    chapter: "Extra Credit 1",
    id: 18,
    question: "Which hardware device connects your network to the Internet?",
    answers: [
      "Hub",
      "Firewall",
      "Modem",
      "Switch"
    ],
    correct: 2,
    explanation: "A modem connects your home network to your Internet service provider.",
    wrongExplanations: {
      0: "A hub connects devices on a network.",
      1: "A firewall protects a network but does not provide the Internet connection.",
      3: "A switch connects devices inside a network."
    },
  {
    chapter: "Extra Credit 1",
    id: 19,
    question: "A computer ________ is two or more computers connected using software and hardware so that they can communicate with each other.",
    answers: [
      "network",
      "node",
      "switch",
      "broadband"
    ],
    correct: 0,
    explanation: "A network is two or more connected computers that communicate with each other.",
    wrongExplanations: {
      1: "A node is one device on a network.",
      2: "A switch connects devices within a network.",
      3: "Broadband is a high-speed Internet connection."
    },
  {
    chapter: "Extra Credit 1",
    id: 20,
    question: "A large network designed to provide access to a specific geographic area, such as a large city, is a ________.",
    answers: [
      "PAN",
      "MAN",
      "HAN",
      "LAN"
    ],
    correct: 1,
    explanation: "A MAN is a metropolitan area network, usually covering a city or large area.",
    wrongExplanations: {
      0: "A PAN is a personal area network.",
      2: "A HAN is a home area network.",
      3: "A LAN is a local area network."
  },
];
