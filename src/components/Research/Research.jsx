import React, { Component } from 'react'
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import "./Research.css";

export default class Research extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Research";
  }

  render() {

    return (

      <Container fluid className="p-4 mb-4 bg-light rounded">
        <div className="research-container">

          <div class="section"> Research </div>
          <p>
            <b>I develop interactive and engaging tools that support novice
            programmers.</b> My goal as a researcher working at the
            intersection of Computing Education Research (CER) and
            Human-Computer Interaction (HCI) to draw on theories of
            learning to create effective and scaleable approaches for
            educating the next generation of computing professionals.
          </p>
          <p>
            A significant part of my work in this space has involved Parsons
            problems, a programming activity in which learners must correctly
            arrange code fragments to solve a problem. My most recent work aims
            to support novices in engaging with human-GenAI collaborative
            programming. The long-term vision for this research is to create
            tools and approaches that enable individuals from non-computing
            backgrounds to seamlessly integrate computing into their workflows
            through code generation by prompting — what could be characterized
            as natural language programming. My published and current work on
            these topics are detailed further in the following sections.
          </p>


          <div class="subsection"> Parsons Problems </div>
          <p>
            A key challenge in computer science education is developing pedagogical
            approaches that are both engaging to students and aid in the efficient
            acquisition of programming skills. A promising approach that has been the focus
            of my research is Parsons problems, an activity where students
            arrange blocks of code to form a program that satisfies a given
            specification. This problem type has shown benefits both in formative contexts,
            where they improve learning efficiency while reducing cognitive load, and
            summative assessments, where they have been shown to test skills similar to code
            writing.
          </p>

          <div class="subsubsection"> Distractors in Parsons Problems </div>
          <div style={{display: "flex"}}>
            <div style={{flex: "1"}}>
              <Image className="img-container" src="assets/parsons_distractors.png" width="300px" />
              <div>
                <b>Figure 1:</b> Example of a Parsons problem with distractors.
              </div>
            </div>
            <div style={{flex: "4"}}>
              <p>
                The focus of my work in this area has been on the use of
                distractors in Parsons problems. Distractors are incorrect
                blocks of code that are included in the set of possible blocks
                presented to the student when solving a Parsons problem. I
                developed a <a href=""><u>novel approach</u></a> to create and
                then automatically generate distractors for Parsons problems.
                My work has evaluted the effectiveness of these distractors in
                both summative and formative contexts, finding that, though
                they are somewhat ineffective at improving the quality of exam
                questions, <i>they are essential</i> for improving learning
                outcomes for learners in formative contexts. This work has been
                published in the following papers:
              </p>
              <ul>
                <li> <b><a href="http://zilles.cs.illinois.edu/papers/smith_parsons_sigcse23.pdf">Discovering, Autogenerating, and Evaluating Distractors for Python Parsons Problems in CS1 -- </a></b> This paper presents a process for selecting distractors in Parsons problems from student submissions, introduces a tool for automatically generating them, and analyzes their impact on summative assessments, concluding that distractors increase completion time without improving problem discrimination.</li>
                <li> <b><a href="https://drive.google.com/file/d/1ZrqD_eS2A4_5QMDdl1GgC34wlu2qdw_1/view">Investigating the Role and Impact of Distractors on Parsons Problems in CS1 Assessments -- </a></b> This study examines the impact of distractors in Parsons problems from CS1 Python exams, finding that while distractors significantly increase the time students spend on problems, they have little effect on scores or item discrimination, suggesting their inclusion may reduce exam efficiency without improving problem quality.</li>
                <li> <b><a href="https://zilles.cs.illinois.edu/papers/smith_parsons_grouped_COMPED_2023.pdf">Comparing the Impacts of Visually Grouped and Jumbled Distractors on Parsons Problems in CS1 Assessments -- </a></b> This study investigates the effect of jumbled and visually grouped distractors in Parsons problems on student performance, time spent, and item quality in a CS1 Python course, finding that while visually grouped distractors slightly reduce time compared to jumbled ones, both forms increase problem-solving time and reduce performance without significantly improving item quality.</li>
                <li> <b><a href="https://dl.acm.org/doi/pdf/10.1145/3632620.3671114">Distractors Make You Pay Attention: Investigating the Learning Outcomes of Including Distractor Blocks in Parsons Problems -- </a></b> This study investigates the impact of distractor blocks in Parsons problems on student learning, finding that students who practiced with distractors performed better on both immediate and retention tests, with qualitative data suggesting that distractors help students focus more on code details, making them essential for formative learning contexts.</li>
              </ul>
            </div>
          </div>



          <div class="subsection"> Transforming Explain in Plain English Questions into Explain in Plain Language Questions </div>
          <div width="90%">
            <Image className="img-container"  src="assets/schematic.png" height="175px" />
            <div>
              <b>Figure 2:</b> Schematic of the Code Generation Based Grading (CGBG) approach.
            </div>
          </div>
          <br/>
          <p>
            <b>I developed a novel auto-grader for EiPE activities</b>, 
            <a href="https://dl.acm.org/doi/abs/10.1145/3649217.3653582"><u>“Code
            Generation Based Grading”</u></a> (CGBG) which addresses many of
            the difficulties inherent in grading EiPE activities. In this
            approach, the individual’s response to an EiPE question is used to
            generate code which is then evaluated against a set of test cases to
            determine if the response was capable of generating code that is
            functionally equivalent to the code being described (Figure 2).
            Additionally, given the multilingual capabilities of modern LLMs, 
            this approach <b>transforms what were formerly EiPE activities into
            Explain in Plain Language (EiPL) activities</b>, enabling the use of
            non-English prompts. This approach has undergone a variety of
            evaluations which have been published in the following papers:
          </p>
          <ul>
            <li> <b><a href="https://dl.acm.org/doi/abs/10.1145/3649217.3653582">Code Generation Based Grading: Evaluating an Auto-grading Mechanism for "Explain-in-Plain-English" Questions -- </a></b> This paper introduced the approach, finding it to be capable of grading EiPE questions but also finding that it suffers from a lack of ability to disinguish between high and low level descriptions of code. </li>
            <li> <b><a href="https://dl.acm.org/doi/pdf/10.1145/3657604.3662039">Prompting for Comprehension: Exploring the Intersection of Explain in Plain English Questions and Prompt Writing: </a></b> This paper evaluates a scalable approach for grading "Explain in Plain English" (EiPE) questions by using large language models (LLMs) to generate code from students' descriptions and testing its correctness, enabling automated feedback to help students develop code comprehension and natural language prompt skills, while also examining student success and perceptions of this method in an introductory programming course.</li>
            <li> <b><a href="https://dl.acm.org/doi/pdf/10.1145/3649217.3653587">Explaining code with a purpose: An integrated approach for developing code comprehension and prompting skills --</a></b> This paper explores how integrating "Explain in Plain English" (EiPE) questions with code-generating large language models (LLMs) can facilitate automatic grading and foster both traditional code comprehension skills and the new ability to craft prompts for generating code, reporting positive outcomes in an introductory programming course along with insights into students' perceptions of using LLMs for learning and assessment. </li>
            <li> <b><a href="https://arxiv.org/pdf/2409.20297">Explain in Plain Language Questions with Indic Languages:
            Drawbacks, Affordances, and Opportunities -- </a></b> This study evaluates the Code Generation Based Grading (CGBG) approach for enabling language-agnostic "Explain in Plain Language" (EiPL) activities in a linguistically diverse context, finding promising results for generating correct code from responses in various Indian languages, though students often preferred English due to familiarity and concerns about grader accuracy with non-English prompts.</li>
            <li> <b><a href="https://arxiv.org/abs/2410.03063">Integrating Natural Language Prompting Tasks in Introductory Programming Courses --</a></b> This experience report explores the integration of natural language prompt-focused activities in an introductory programming course, highlighting their potential to shift the focus from syntax mastery to problem-solving, making computing more accessible and engaging for students who find traditional programming tasks challenging.</li>
          </ul>
          <p>
            To support the continued adoption and evaluation of this approach,
            <b>this autograder has been released as an open-source Python
            package</b> <a
            href="https://github.com/CoffeePoweredComputers/eiplgrader"
            target="_blank"><u>eiplgrader</u></a> which I am continuing to
            actively develop and maintain. <b>This system has been
            deployed at multiple institutions,</b> including University of
            Illinois Urbana-Champaign, University of California - San Diego, the
            University of Auckland, and an online course by the Indian Institute of
            Science.
          </p>


        </div>
      </Container >
      );
  }
}
