import json

doc = """
\\\documentclass[10pt]{resume}

\\usepackage[left=0.75in,top=0.6in,right=0.75in,bottom=0.6in]{geometry}
\\newcommand{\\tab}[1]{\hspace{.2667\\textwidth}\\rlap{#1}}
\\newcommand{\\itab}[1]{\hspace{0em}\\rlap{#1}}
\\name{David H Smith IV}
\\address{360-969-3836 dhsmith2@illinois.edu} % Your phone number and email
\\begin{document}
"""

with open("./cv.json") as infile:
    cv = json.load(infile)


def underline_me(text):
    # split a csv, grab my name from somewhere inthe list, replace it with and underlined version
    text = text.replace("David H Smith IV", "\\underline{David H Smith IV}")
    text = text.replace("David Smith", "\\underline{David H Smith IV}")
    text = text.replace("D. H. Smith IV", "\\underline{David H Smith IV}")
    text = text.replace("David H. Smith IV", "\\underline{David H Smith IV}")




# build out education section

# build out publications section
pubs = cv["publications"]
doc += """
\\begin{rSection}{Publications}
""" 
for item in pubs:
    doc += f"\\item \\textit{{{item['authors']}}} - {item['title']} - \\textbf{{{item['venue']}}}\n"
doc += """
\\end{rSection}
"""

# build out work experience

# buid out workshops
workshops = cv["workshops"]
doc += """
\\begin{rSection}{Publications}
""" 
for item in workshops:
    print(item)
    doc += f"\\item \\textit{{{item['authors']}}} - {item['title']} - \\textbf{{{item['venue']}}}\n"
doc += """
\\end{rSection}
"""


# build out projects

# build out experties

# tech skills
doc += """
\\begin{rSection}{Technical and Research Skills}{}{}{}
\\textbf{Ranked in order of ability:} Python, R, Java, C, JS, C++
\\textbf{Quantitative:} Inferential statistics, Classical Test Theory, Iterm Response Theory, Regression modeling
\\textbf{Qualitative:} Grounded Theory, Think-Aloud Interview, Survey Design}
\\end{rSection}
"""

# Academic Achievements
doc += """
\\begin{rSection}{Academic Achievements}
\\begin{itemize}
"""
for item in cv["merits"]:
    doc += f"\\item {item['title']} - {item['description']}\n"
doc += """
\\end{itemize}
\\end{rSection}
"""


# end the doc
doc += """
\\end{document}
"""

print(doc)
