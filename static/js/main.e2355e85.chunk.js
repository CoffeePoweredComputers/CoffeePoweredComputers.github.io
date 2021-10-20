(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(30),r=a.n(o),s=(a(70),a(8)),l=a(9),c=a(11),u=a(10),d=a(12),m=(a(72),a(189)),h=a(190),g=a(187),p=a(186),f=a(179),v=(a(74),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(g.a,{bg:"dark",expand:"lg"},i.a.createElement(g.a.Brand,null,"David H Smith IV"),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,null,i.a.createElement(p.a,{className:"ml-auto"},i.a.createElement(p.a.Link,{eventKey:1,componentClass:f.a,href:"#/",to:"/"}," Home "),i.a.createElement(p.a.Link,{eventKey:2,componentClass:f.a,href:"#/publications",to:"/publications"}," Publications "),i.a.createElement(p.a.Link,{eventKey:3,componentClass:f.a,href:"#/blog",to:"/blog"}," Blog "),i.a.createElement(p.a.Link,{eventKey:4,componentClass:f.a,href:"#/cv",to:"/cv"}," Curriculum Vitae "))))}}]),t}(n.Component)),b=a(180),y=a(181),w=a(182),E=a(183),k=a(184),C=a(24),S=(a(85),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="David H Smith IV | Home"}},{key:"render",value:function(){return i.a.createElement(b.a,null,i.a.createElement(y.a,null,i.a.createElement(w.a,null,i.a.createElement(E.a,{className:"how-grid text-center",xs:14,sm:5},i.a.createElement(k.a,{src:"assets/prof.png",roundedCircle:!0}),i.a.createElement("h3",{className:"profile-photo-subtitle"}," "),i.a.createElement("div",null,i.a.createElement("div",{className:"sub"}," Computer Science Education Researcher"),i.a.createElement("div",{className:"sub"}," Linux & Coffee Enthusiast"),i.a.createElement(C.SocialIcon,{url:"https://www.linkedin.com/in/david-smith-1b9499102/",style:{height:25,width:25,margin:2},bgColor:"#000000",fgColor:"#c0c0c0"}),i.a.createElement(C.SocialIcon,{url:"https://github.com/CoffeePoweredComputers",style:{height:25,width:25,margin:2},bgColor:"#000000",fgColor:"#c0c0c0"}),i.a.createElement(C.SocialIcon,{url:"https://twitter.com/DavidHSmithIV",style:{height:25,width:25,margin:2},bgColor:"#000000",fgColor:"#c0c0c0"}),i.a.createElement(C.SocialIcon,{url:"https://medium.com/@davidhsmith4",style:{height:25,width:25,margin:2},bgColor:"#000000",fgColor:"#c0c0c0"}))),i.a.createElement(E.a,{className:"bio bio-alignment"},i.a.createElement("b",null,"I am a first year PhD student at the University of Illinois Urbana-Champaign in the Department of Computer Science. "),"My research focus lies at the intersection of data science and Human-Computer Interaction (HCI) specifically within the realm of Computing Education Research (CER). The core of my knowledge and interests in these subjects have been developed through my role as an undergraduate research assistant in which my time has been largely devoted to the analysis of student learning patterns, performance, and tool evaluation. Going forward, it is my goal to extend and refine my current skills as well as continue investigating the intersection between HCI and CER through the development and evaluation of tools aimed towards usage in educational environments."))))}}]),t}(n.Component)),T=a(191),I=a(188),x=(a(87),a(60)),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="David H Smith IV | Publications"}},{key:"render",value:function(){var e=x.map(function(e,t){var a=e.publications.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a.Header,null,i.a.createElement(I.a.Toggle,{as:T.a.Header,className:"title-header",variant:"link",eventKey:t},e.title)),i.a.createElement(I.a.Collapse,{eventKey:t},i.a.createElement(T.a.Body,null,i.a.createElement(w.a,null,i.a.createElement(E.a,{md:2},i.a.createElement("a",{href:e.link,target:"_blank"},i.a.createElement(k.a,{src:e.image_path,responsive:!0,thumbnail:!0,className:"profile-pic"}))),i.a.createElement(E.a,{className:"text-left abstract"},i.a.createElement("i",null," Abstract:  ")," ",e.abstract)))))});return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,null,i.a.createElement("div",{className:"year-header"}," ",e.year," ")),i.a.createElement(I.a,{defaultActivityKey:"0"},a))});return i.a.createElement(b.a,{fluid:!0},i.a.createElement(y.a,null,i.a.createElement(w.a,null,i.a.createElement("div",{className:"pub-header"},"Publications")),e))}}]),t}(n.Component),A=(a(89),a(21)),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="David H Smith IV | CV"}},{key:"render",value:function(){var e=A.education.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cv-position"},i.a.createElement("b",null,e.school)),i.a.createElement("div",{className:"cv-year"},e.years),e.degrees.map(function(e,t){return i.a.createElement(i.a.Fragment,null," ",i.a.createElement("i",null," ",e," ")," ",i.a.createElement("br",null)," ")}),""!==e.advisor?i.a.createElement("i",null," ",i.a.createElement("b",null," Advisor: ")," ",e.advisor):i.a.createElement("div",null))}),t=A.experience.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cv-position"},i.a.createElement("b",null,e.employer)),i.a.createElement("div",{className:"cv-year"},e.duration),i.a.createElement("i",null,e.position),i.a.createElement("ul",null,e.accomplishments.map(function(e,t){return i.a.createElement("li",null," ",e," ")})))}),a=A.projects.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cv-position"},i.a.createElement("b",null,e.title)),i.a.createElement("i",null,e.client),i.a.createElement(w.a,null,i.a.createElement(E.a,{sm:5},i.a.createElement(k.a,{src:e.image_path,thumbnail:!0,rounded:!0})),i.a.createElement(E.a,{sm:7},i.a.createElement("ul",null,e.work.map(function(e,t){return i.a.createElement("li",null," ",e," ")})))))}),n=A.publications.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,e.authors,",\xa0",i.a.createElement("a",{href:e.link},i.a.createElement("b",null,e.title)),",\xa0",e.venue))}),o=A.merits.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("i",null,i.a.createElement("b",null,e.title))," - ",e.description))});return i.a.createElement(b.a,null,i.a.createElement(y.a,null,i.a.createElement("div",{className:"cv"},i.a.createElement("div",{className:"cv-header"},i.a.createElement("b",null,"Education")),e,i.a.createElement("div",{className:"cv-header"},i.a.createElement("b",null,"Experience")),t,i.a.createElement("div",{className:"cv-header"},i.a.createElement("b",null,"Projects")),a,i.a.createElement("div",{className:"cv-header"},i.a.createElement("b",null,"Publications")),i.a.createElement("ul",null,n),i.a.createElement("div",{className:"cv-header"},i.a.createElement("b",null,"Academic Achievements")),i.a.createElement("ul",null,o))))}}]),t}(n.Component),M=a(63),N=a(22),D=a(185),H=(a(91),a(173),a(25)),P=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));for(var n=new Set,i=0;i<H.length;i++)for(var o=0;o<H[i].keywords.length;o++)n.add(H[i].keywords[o]);return a.state={currentTopic:"",topics:Object(M.a)(n).sort()},a.handleClick=a.handleClick.bind(Object(N.a)(Object(N.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="David H Smith IV | Blog"}},{key:"handleClick",value:function(e){this.setState({currentTopic:e.target.id})}},{key:"render",value:function(){var e=this,t=H.map(function(t,a){if(t.keywords.indexOf(e.state.currentTopic)>-1||""===e.state.currentTopic)return i.a.createElement(y.a,{className:"post"},i.a.createElement(E.a,null,i.a.createElement(w.a,null,i.a.createElement("div",{className:"post-header"},i.a.createElement("div",{className:"title"}," ",t.title," "),i.a.createElement("div",{className:"date"}," ",t.date," "))),i.a.createElement(w.a,null,i.a.createElement("div",{className:"topic"},i.a.createElement("b",null," Topics: "),t.keywords.join(", "))),i.a.createElement(w.a,{className:"post-body"},t.body),i.a.createElement(w.a,null,i.a.createElement("b",null,i.a.createElement("a",{href:t.link}," Continue reading on Medium... ")))))}),a=this.state.topics.map(function(t,a){return i.a.createElement(D.a,{key:a,onClick:e.handleClick,id:t,variant:"dark"}," ",t," ")});return i.a.createElement(b.a,{fluid:!0},i.a.createElement(y.a,null,i.a.createElement("div",{className:"topic-selection"}," Select a topic to view "),i.a.createElement(w.a,{className:"topic-list"},i.a.createElement(D.a,{key:this.state.topics.length,onClick:this.handleClick,id:"",variant:"dark"}," All "),a)),t)}}]),t}(n.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(h.a,{exact:!0,path:"/",component:S}),i.a.createElement(h.a,{path:"/cv",component:O}),i.a.createElement(h.a,{path:"/publications",component:j}),i.a.createElement(h.a,{path:"/blog",component:P})))}}]),t}(n.Component);r.a.render(i.a.createElement(F,null),document.getElementById("root"))},21:function(e){e.exports={education:[{school:"University of Illinois: Urbana-Champaign",years:"2020-",advisor:"Craig Zilles",degrees:["Doctorate of Computer Science"]},{school:"Western Washington University",years:"2017-2019",advisor:"Qiang Hao",degrees:["Bachelors of Science - Computer Science"]},{school:"Skagit Valley College",years:"2015-2017",advisor:"",degrees:["Associates of Science - Computer Science","Associates of Science - Physics/Engineering"]}],experience:[{employer:"University Laboratory High School",position:"Instructor - Intro to Computer Programming ",duration:"Fall 2021",accomplishments:[]},{employer:"University of Illinois at Urbana-Champaign",position:"Instructor - CS 105 Summer '21'",duration:"Summer 2021",accomplishments:[]},{employer:"University of Illinois at Urbana-Champaign",position:"Teaching Assistant - CS 105",duration:"Fall 2020 - ",accomplishments:['Listed among "Instructors Ranked as Excellent" for the Spring 2021 semester',"Developed a Discord bot and environment for facillitating lecture discussions and labs during the COVID-19 pandemic"]},{employer:"Western Washington University",position:"Undergraduate Research Assistant",duration:"2017-2019",accomplishments:["Worked in a team environment, both locally and remotely, to design and implement a web scraper and PDF processor for data collection purposes.","Performed Social Network Analysis (SNA) on student interactions within the Piazza Q&A site in an effort to quantify the impacts of instructor-student interactions.","Analyzed the effects of formative feedback systems, specifically one developed using Travis-CI, Git, GitHub, Gradle, and GitHub Classroom, and its effects on student performance and behavior.","Worked on a meta review project that sought to investigate the state of performance prediction research in STEM","Adapted data collection scripts for a system aimed at the early detection of academically at-risk students.","Analyzed the impact of factors such as prior experience, validated test results, and self-efficacy on students' abilities to succeed in introductory computer science courses."]},{employer:"Western Washington University",position:"ACM Peer Mentor",duration:"2018-2019",accomplishments:["Volunteered to tutor computer science pre-majors on the subject including discrete math, language theory, computer systems, data structures, algorithms, as well as fundamentals or programming."]}],projects:[{title:"High Performance Computing Time-Series Visualization Dashboard",client:"Dr. Tanzima Islam, Lawrence Livermore National Laboratory, Western Washington University",image_path:"assets/full_dash.png",work:["Project targeted the analysis of large quantities of multidimensional time series data","Involved in the development of a data visualization dashboard, implemented using the following:","Server - Implemented with the Bottle package for Python and SQLite3 ","Dashboard - Implemented with Vue.js","Visualizations - The helix visualization was implemented with ThreeJS and the bar/line graph was implemented with D3.js"]}],publications:[{authors:"Max Fowler, David H. Smith IV, Chinny Emeka, Matthew West, Craig Zilles",link:"https://www.tandfonline.com/doi/abs/10.1080/08993408.2020.1860408?journalCode=ncse20",title:"Are We Fair? Quantifying Score Impacts of Computer Science Exams with Randomized Question Pools",venue:"SIGCSE 2022 (Accepted)"},{authors:"Qiang Hao, David H. Smith IV, Lu Ding, Amy Ko, Camille Ottaway, Jack Wilson, Kai H. Arakawa, Alistair Turcan, Timothy Poehlman, and Tyler Greer",link:"https://www.tandfonline.com/doi/abs/10.1080/08993408.2020.1860408?journalCode=ncse20",title:"Towards Understanding the Effective Design of Automated Formative feedback for Programming Assignments",venue:"Computer Science Education"},{authors:"David H. Smith IV, Qiang Hao, Christopher D. Hundhausen, Filip Jagodzinski, Josh Myers-Dean, and Kira Jaeger",link:"",title:"Towards Modeling Student Engagement with Interactive Computing Textbooks: An Empirical Study",venue:"SIGCSE 2021"},{authors:"David Smith, Qiang Hao, Ph.D., Vanessa Dennen, Michail Tsikerdekis, Bradley Barnes, Lilu Martin, Nathan Tresham, ",link:"https://educationaltechnologyjournal.springeropen.com/articles/10.1186/s41239-020-00200-7",title:"Towards Understanding Student Online Question & Answer Interactions in Large-Scale Classes in STEM Education ",venue:"International Journal of Educational Technology in Higher Education"},{authors:"D. H. Smith IV, Q. Hao, F. Jagodzinski,  V. Gupta, Y. Liu, ",link:"http://qhao.info/downloads/comped-2019.pdf",title:"Quantifying the Effects of Prior Knowledge in Entry-Level Programming Courses. ",venue:"CompEd 2019"},{authors:"Hao, Q., Wilson, J., Ottaway, C., Iriumi, N., Arakawa, K., Smith, D. , ",link:"https://arxiv.org/abs/1906.08937",title:"Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments ",venue:"In Proceedings of 2019 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC). Memphis, TN. "},{authors:"Q. Hao, D. H. Smith IV, N. Iriumi, M. Tsikerdekis, Amy. J. Ko,  ",link:"https://dl.acm.org/citation.cfm?id=3345328",title:"A Systematic Investigation of Replications in Computing Education Research ",venue:"ACM Transactions on Computing Education (TOCE). "}],merits:[{title:"Ray Ozzie Computer Science Fellowship",description:"An $8000 scholarship avaliable to graduate students in the Department of Computer Science at UIUC."},{title:"Faithlife Corp. Scholarship",description:"One of eighteen students awarded a departmental scholarship for computer science at Western Washington University for $2000."},{title:"Western Washington University Departmental Scholarship",description:"One of a select number of students to be awarded a $1000 dollar scholarship for academic merit within the computer science major."}]}},25:function(e){e.exports=[{title:"Bolt Modding an IBM Model M122 \u201cBattlecruiser\u201d",link:"https://medium.com/@davidhsmith4/bolt-modding-a-ibm-model-m122-battle-cruiser-d8b026e456b7?source=rss-d4d6e1e0a7de------2",date:"Thu, 09 Apr 2020 04:26:43 GMT",keywords:["keyboard"],body:"The IBM Model M. The greatest keyboard in the history of computing. This version, the M122, is the larger cousin of the iconic M with 122 keys of buckling spring goodness. I bought the keyboard pictured above a few years back with the intention of using the 22 function keys as a macro garden for my VIM and i3 workflow but never got around to it. Now, with an upcoming move for grad school and the prospect of rebuilding my workstation, I thought I\u2019d give the M122 a much needed refurbishing in anticipation of its future\xa0use."},{title:"Installing Arch Linux\u200a\u2014\u200aA Beginners Guide (Part 2)",link:"https://medium.com/@davidhsmith4/installing-arch-linux-a-beginners-guide-part-2-e1300ff2c73b?source=rss-d4d6e1e0a7de------2",date:"Tue, 07 Apr 2020 01:00:54 GMT",keywords:["guides-and-tutorials","arch-linux"],body:"Now, given that you have successfully completed all the steps in part one of this guide, you should be ready to begin the installation of a window manager and some basic applications. This portion of the guide will\xa0cover:"},{title:"Installing Arch Linux\u200a\u2014\u200aA Beginners Guide (Part 1)",link:"https://medium.com/@davidhsmith4/installing-arch-linux-a-beginners-guide-part-1-b1c2f399d5ee?source=rss-d4d6e1e0a7de------2",date:"Fri, 27 Mar 2020 03:12:30 GMT",keywords:["guides-and-tutorials","arch-linux"],body:"When I first began venturing away from Ubuntu I was struck by the steepness of the learning curve present when attempting to install Arch for the first time. This was only worsened by the lack of \u201cbeginner-friendly\u201d material available. Most guides provided a purely procedural installation without explaining any of the intricacies of the actions being undertaken. Though this is effective in getting users from point A to point B, it does little to help them when things inevitably go off course. Though the Arch Linux wiki is a prolific source of wisdom, it is also potentially overwhelming to a user who barely knows where to begin in the first place. Furthermore, the archlinux.org\u2019s installation guide is adequate but lacks visual guides and omits many details necessary for a user to understand the whys and wherefores of their actions. This guide seeks to fill this gap by providing beginners to the distro with a visual installation guide that follows the same structure as the installation guide present on archlinux.org. This is done with the intention of being supplementary to the official wiki such that, in the event a user becomes stuck, they may smoothly transition between the two guides while attempting to solve their\xa0issue."}]},60:function(e){e.exports=[{year:"2021",publications:[{title:"Towards Modeling Student Engagement with Interactive Computing Textbooks: An Empirical Study",image_path:"assets/textbook.png",link:"",abstract:"Interactive textbooks have great potential to increase student engagement with the course content which is critical to effective learning in computing education. Prior research on digital textbooks and interactive visualizations contribute to our understanding of student interactions with visualizations and modeling textbook knowledge concepts. However, research investigating student usage of interactive computing textbooks is still lacking. This study seeks to fill this gap by modeling student engagement with a Jupyter-notebook-based interactive textbook. Our findings suggest that students' active interactions with the presented interactive textbook, including changing, adding, and executing code in addition to manipulating visualizations, are significantly stronger in predicting student performance than conventional reading metrics. Our findings contribute to a deeper understanding of student interactions with interactive textbooks and provide guidance on the effective usage of said textbooks in computing education."},{title:"Towards understanding the effective design of automated formative feedback for programming assignments",image_path:"assets/feedback2.png",link:"https://www.tandfonline.com/doi/abs/10.1080/08993408.2020.1860408?journalCode=ncse20",abstract:"Background and Context: automated feedback for programming assignments has great potential in promoting just-in-time learning, but there has been little work investigating the design of feedback in this context. Objective: to investigate the impacts of different designs of automated feedback on student learning at a fine-grained level, and how students interacted with and perceived the feedback. Method: a controlled quasi-experiment of 76 CS students, where students of each group received a different combination of three types of automated feedback for their programming assignments. Findings: feedback addressing the gap between expected and actual outputs is critical to effective learning; feedback lacking enough details may lead to system gaming behaviors. Implications: the design of feedback has substantial impacts on the efficacy of automated feedback for programming assignments; more research is needed to extend what is known about effective feedback design in this context."}]},{year:"2020",publications:[{title:"Towards Understanding Online Question & Answer Interactions and Their Effects on Student Performance in Large-Scale STEM Classes",image_path:"assets/qa-cloud.png",link:"https://educationaltechnologyjournal.springeropen.com/articles/10.1186/s41239-020-00200-7",abstract:"Online question & answer (Q & A) is a distinctive type of online interaction that is impactful on student learning. Prior studies on online interaction in large-scale classes mainly focused on online discussion and were conducted mainly in non-STEM fields. This research aims to quantify the effects of online Q & A interactions on student performance in the context of STEM education. 218 computer science students from a large university in the southeastern United States participated in this research. Data of four online Q & A activities was mined from the online Q & A forum for the course, including three student activities (asking questions, answering questions and viewing questions/answers) and one instructor activity (answering questions/providing clarifications). These activities were found to have different effects on student performance. Viewing questions/answers was found to have the greatest effect, while interaction with instructors showed minimum effects. This research fills the gap of lacking research in online Q & A, and the results of this research can inform the effective usage of online Q & A in large-scale STEM courses."}]},{year:"2019",publications:[{title:"Quantifying the Effects of Prior Knowledge in Entry-Level Programming Courses",image_path:"assets/comped.png",link:"https://dl.acm.org/citation.cfm?id=3309503&preflayout=tabs",abstract:"Computer literacy and programming are being taught increasingly at the K-12 level with more students than ever matriculating in college with prior programming experience. Accurately assessing student programming skills acquired in high school can inform college faculty about the range of competencies in introductory programming courses. The tool predominantly-used for assessing past CS knowledge and skills is a survey, which lacks quantitative rigor. This study aims to (1) quantify the effects of prior knowledge in entry-level programming courses and (2) compare the different measurement approaches of student prior knowledge in programming, including surveys and aptitude tests. The results of this study reveal that a discrepancy exists between the results of surveys and aptitude tests. Consistent with prior survey studies, our survey results showed that the effects of student prior programming knowledge faded gradually during the course period. In contrast, the aptitude test results indicated that the effects of student prior knowledge did not weaken over time. The accuracy of both measurements and implications for instructors were further discussed."},{title:"A Systematic Investigation of Replications in Computing Education Research",image_path:"assets/meta.png",link:"https://dl.acm.org/doi/10.1145/3345328",abstract:"As the societal demands for application and knowledge in computer science increase, computer science student enrollment keeps growing rapidly around the world. By continuously improving the efficacy of computing education and providing guidelines for learning and teaching practice, computing education research plays a vital role in addressing both educational and societal challenges that emerge from the growth of computer science students. Given the significant role of computing education research, it is important to ensure the reliability of studies in this field. The extent to which studies can be replicated in a field is one of the most important standards for reliability. Different fields have paid an increasing attention to the replication rates of their studies, but the replication rate of computing education was never systematically studied. To fill this gap, this study investigated the replication rate of computing education between 2009 and 2018. We examined 2,269 published studies from three major conferences and two major journals in computing education, and found that the overall replication rate of computing education was 2.38%. This study demonstrated the needs for more replication studies in computing education and discussed how to encourage replication studies through research initiatives and policy making."},{title:"Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments",image_path:"assets/feedback.png",link:"https://arxiv.org/abs/1906.08937",abstract:"This study investigated the essential of meaningful automated feedback for programming assignments. Three different types of feedback were tested, including (a) What's wrong - what test cases were testing and which failed, (b) Gap - comparisons between expected and actual outputs, and (c) Hint - hints on how to fix problems if test cases failed. 46 students taking a CS2 participated in this study. They were divided into three groups, and the feedback configurations for each group were different: (1) Group One - What's wrong, (2) Group Two - What's wrong + Gap, (3) Group Three - What's wrong + Gap + Hint. This study found that simply knowing what failed did not help students sufficiently, and might stimulate system gaming behavior. Hints were not found to be impactful on student performance or their usage of automated feedback. Based on the findings, this study provides practical guidance on the design of automated feedback."}]}]},64:function(e,t,a){e.exports=a(176)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[64,2,1]]]);
//# sourceMappingURL=main.e2355e85.chunk.js.map