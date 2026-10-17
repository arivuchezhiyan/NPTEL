const QUIZ_DATA = [
  {
    "assignment": 1,
    "title": "Assignment 1 (Week 1)",
    "count": 12,
    "questions": [
      {
        "id": "w1_q1",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "Improve a specific model’s ability to withstand external hazards"
          },
          {
            "key": "b",
            "text": "Identify and avoid hazards through real-time monitoring"
          },
          {
            "key": "c",
            "text": "Reduce the likelihood of conflict and overall systemic risks in the environment"
          },
          {
            "key": "d",
            "text": "Align an agent’s goals with human values"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 3 [34:02-34:55] - We can look at the risk equation as a \"systemic” safety, which in turn can generally reduce the risks.",
        "image": null,
        "explanation_image": null,
        "question": "What does the “Systemic Safety” strategy in the Disaster Risk Equation primarily aim to achieve?"
      },
      {
        "id": "w1_q2",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "The model appears to follow safety guidelines during training but pursues different goals after deployment"
          },
          {
            "key": "b",
            "text": "The model cannot understand human language due to environmental differences"
          },
          {
            "key": "c",
            "text": "The model accidentally deletes critical memory during deployment"
          },
          {
            "key": "d",
            "text": "The model’s safeguards are easily bypassed by simple user prompts"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 4 [23:34-24:23] - Deceptive alignment is shown by the example as the model appearing to grab the ball/asnwer a specific way but later doesn’t.",
        "image": null,
        "explanation_image": null,
        "question": "In the context of “Deceptive Alignment,” what is the primary concern regarding model behavior?"
      },
      {
        "id": "w1_q3",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Agents over-optimize fault metrics, producing outcomes misaligned with true human values"
          },
          {
            "key": "b",
            "text": "AI systems consume excessive computational resources unnecessarily"
          },
          {
            "key": "c",
            "text": "AI systems are used to cheat in video games"
          },
          {
            "key": "d",
            "text": "It results from hardware failure during large-scale simulations"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 4 [20:26-22:17] - Future artificial agents could over-optimize and game faulty proxies, which could mean systems aggressively pursue goals and create a world that is distinct from what humans value.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why is “proxy gaming” considered a failure mode in AI systems?"
      },
      {
        "id": "w1_q4",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "They are explicitly programmed to dominate humans"
          },
          {
            "key": "b",
            "text": "Power and resources help them pursue their goals more effectively"
          },
          {
            "key": "c",
            "text": "It is a biological byproduct of the neural network design"
          },
          {
            "key": "d",
            "text": "They imitate human power-seeking behavior from training data"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 4 [9:51-11:50] - By default, suitably strategic and intelligent agents, engaging in suitable types of planning, will have instrumental incentives to gain and maintain various types of power, since this power will help them pursue their objectives more effectively.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why might AI systems develop an “instrumental incentive” to seek power?"
      },
      {
        "id": "w1_q5",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "Failures caused by biased training data"
          },
          {
            "key": "b",
            "text": "A system behaving differently once sufficiently capable"
          },
          {
            "key": "c",
            "text": "Intentional misuse of AI by malicious humans"
          },
          {
            "key": "d",
            "text": "Over-optimization of proxy objectives"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 4 [22:18-23:34] - AI could behave differently once it has the ability to do so.",
        "image": null,
        "explanation_image": null,
        "question": "What does the term “Treacherous Turns” refer to in AI safety?"
      },
      {
        "id": "w1_q6",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "Rely on a single, highly robust safety mechanism"
          },
          {
            "key": "b",
            "text": "Implement safety measures randomly across the system"
          },
          {
            "key": "c",
            "text": "Use multiple layers of defense so that individual weaknesses are compensated by others"
          },
          {
            "key": "d",
            "text": "Eliminate safety measures if the AI system is well-designed"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 3 [8:18-10:48] - The Swiss Cheese model shows how technical factors can improve organizational safety. Multiple layers of defense compensate for each other’s individual weaknesses, leading to a low overall level of risk.",
        "image": null,
        "explanation_image": null,
        "question": "According to the “Swiss cheese model”, which statement best describes effective safety design?"
      },
      {
        "id": "w1_q7",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "Autonomous weapons targeting humans with high precision"
          },
          {
            "key": "b",
            "text": "Complete elimination of the need for human strategic decision-making"
          },
          {
            "key": "c",
            "text": "Lowering the barriers to large-scale violence"
          },
          {
            "key": "d",
            "text": "Autonomous retaliation systems increasing the risk of rapid escalation"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "AI Risk Part 3 [1:02-2:55] - Low-cost automated weapons, such as drone swarms outfitted with explosives, could autonomously hunt human targets with high precision, performing lethal operations for both militaries and terrorist groups and lowering the barriers to large-scale violence.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, what are the potential “double-edged sword” risks associated with AI in military applications? (Select all that apply.)"
      },
      {
        "id": "w1_q8",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "Eroded Epistemics"
          },
          {
            "key": "b",
            "text": "Enfeeblement"
          },
          {
            "key": "c",
            "text": "Deceptive Alignment"
          },
          {
            "key": "d",
            "text": "Hardware Degradation"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Slide 146 in the week’s lecture notes lists speculative hazards and failure modes.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following are considered speculative hazards of AI? (Select all that apply.)"
      },
      {
        "id": "w1_q9",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "Improving agents’ robustness to withstand hazards"
          },
          {
            "key": "b",
            "text": "Identifying and mitigating hazards before they cause harm"
          },
          {
            "key": "c",
            "text": "Increasing the number of parameters to drown out errors"
          },
          {
            "key": "d",
            "text": "Reducing the severity of inherent model vulnerabilities"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "AI Risk Part 3 [29:45-34:02] - Each component has one way to mitigate/reduce it. Vulnerability: Robustness; Hazard Exposure: Monitoring; Hazard: Alignment.",
        "image": null,
        "explanation_image": null,
        "question": "The Disaster Risk Equation can be mitigated by (Select all that apply.):"
      },
      {
        "id": "w1_q10",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "Eroded Epistemics"
          },
          {
            "key": "b",
            "text": "Deceptive Alignment"
          },
          {
            "key": "c",
            "text": "Proxy Gaming"
          },
          {
            "key": "d",
            "text": "Enfeeblement"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 3 [2:57-3:44] - As AIs automate increasingly many tasks, the economy may become largely run by AIs. Eventually, this could lead to human enfeeblement and dependence on AIs for basic needs.",
        "image": null,
        "explanation_image": null,
        "question": "Which risk refers to humans voluntarily ceding control of socio-economic functions to AI to keep up with the automated world?"
      },
      {
        "id": "w1_q11",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "High vulnerability, high hazard exposure, high hazard severity."
          },
          {
            "key": "b",
            "text": "Low vulnerability, high hazard exposure, low hazard severity."
          },
          {
            "key": "c",
            "text": "Low vulnerability, low hazard exposure, high hazard severity."
          },
          {
            "key": "d",
            "text": "High vulnerability, low hazard exposure, high hazard severity."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Slide 107 in the week’s lecture notes shows the risk decomposition equation as a multiplicative (non-linear) equation. Increasing one increases the overall risk.",
        "image": null,
        "explanation_image": null,
        "question": "In the risk decomposition framework, which combination of factors would result in the HIGHEST risk from an AI system?"
      },
      {
        "id": "w1_q12",
        "assignment": 1,
        "week": "Week 1",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "AI systems naturally become safer as they grow more powerful."
          },
          {
            "key": "b",
            "text": "The AI race reduces the need for regulation and monitoring."
          },
          {
            "key": "c",
            "text": "It ensures faster AI development that guarantees equal benefits for all nations."
          },
          {
            "key": "d",
            "text": "AI competition may push to speed up development while giving up oversight."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Risk Part 3 [0:20-1:01] - Competition could push nations and corporations to rush AI development, relinquishing control to these systems.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, which of the following about the AI race is true?"
      }
    ]
  },
  {
    "assignment": 2,
    "title": "Assignment 2 (Week 2)",
    "count": 12,
    "questions": [
      {
        "id": "w2_q1",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "Frequent events with predictable and minor impacts."
          },
          {
            "key": "b",
            "text": "Outlier events that often have extreme and unpredictable impacts."
          },
          {
            "key": "c",
            "text": "Known risks that are intentionally ignored during model training."
          },
          {
            "key": "d",
            "text": "Events that follow a thin-tailed distribution and have negligible consequences."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Robustness Part 1 [3:36-5:12] - Black swans are events that are outliers, lying outside typical expectations, and often carry extreme impact.",
        "image": null,
        "explanation_image": null,
        "question": "What are “Black Swans”?"
      },
      {
        "id": "w2_q2",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "Recollection"
          },
          {
            "key": "b",
            "text": "Closed-ended Questions"
          },
          {
            "key": "c",
            "text": "Meta-ignorance"
          },
          {
            "key": "d",
            "text": "Conscious Ignorance"
          },
          {
            "key": "e",
            "text": "Open-ended Exploration f. Self-analysis"
          }
        ],
        "correct": [
          "b",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Robustness Part 1 [19:20-22:05] - “Known Unknowns” are things we are aware of but don’t understand such as known classic risks/conscious ignorance or closed-ended questions.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following is considered a “Known Unknown”? (Select all that apply.)"
      },
      {
        "id": "w2_q3",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Concept shift"
          },
          {
            "key": "b",
            "text": "Normalized shift"
          },
          {
            "key": "c",
            "text": "Covariate shift"
          },
          {
            "key": "d",
            "text": "Prior probability shift"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Robustness Part 2 [23:00-24:53] - P(x) changes between train and test, but p(y|x) does not change in covariate shift.",
        "image": null,
        "explanation_image": null,
        "question": "Which type of distribution shift occurs when the input distribution changes between 𝑃(𝑥) training and testing but remains constant? 𝑃(𝑦|𝑥)"
      },
      {
        "id": "w2_q4",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "The ability to move a model from a secure state to a vulnerable state."
          },
          {
            "key": "b",
            "text": "The phenomenon where adversarial examples crafted for one model also fool another model."
          },
          {
            "key": "c",
            "text": "Converting a black-box model into a white-box model."
          },
          {
            "key": "d",
            "text": "The process of retraining a model on adversarial attacks."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Lecture 8 and 9 Lecture Notes (Slide 70): Adversarial examples crafted for one model, can be used to attack other models is known as transferability.",
        "image": null,
        "explanation_image": null,
        "question": "What is “transferability” in the context of adversarial attacks?"
      },
      {
        "id": "w2_q5",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "It requires a significantly larger dataset than normal training."
          },
          {
            "key": "b",
            "text": "It can significantly reduce the accuracy on clean examples."
          },
          {
            "key": "c",
            "text": "It only works for simple binary classifiers."
          },
          {
            "key": "d",
            "text": "It requires a low-variance dataset to function effectively."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Lecture 8 and 9 Lecture Notes (Slide 78): Currently, adversarial training can reduce accuracy on clean examples by 10%+.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, what is a common trade-off when using Adversarial Training to improve robustness?"
      },
      {
        "id": "w2_q6",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "Human-in-the-loop evaluation is expensive and time-consuming."
          },
          {
            "key": "b",
            "text": "Direct ratings require white-box access to the model."
          },
          {
            "key": "c",
            "text": "Human ratings are always completely objective and free from annotator bias."
          },
          {
            "key": "d",
            "text": "Human judgments are noisy and miscalibrated."
          }
        ],
        "correct": [
          "a",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "RLHF [8:39-13:31] - There are two problems with human ratings: human-in-the-loop is expensive and human judgments are noisy and miscalibrated.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following are challenges associated with direct human ratings when modeling preferences? (Select all that apply.)"
      },
      {
        "id": "w2_q7",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "RLHF without the reward model"
          },
          {
            "key": "b",
            "text": "RLHF without human feedback"
          },
          {
            "key": "c",
            "text": "RLHF without reinforcement learning"
          },
          {
            "key": "d",
            "text": "RLHF without policy optimization"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Alignment [4:54-6:35] - RLHF – Reward model = Direct Preference Optimization (DPO)",
        "image": null,
        "explanation_image": null,
        "question": "What does Direct Preference Optimization (DPO) represent in the RLHF framework?"
      },
      {
        "id": "w2_q8",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "Collecting comparison data and training a reward model."
          },
          {
            "key": "b",
            "text": "Optimizing a policy against the reward model using reinforcement learning."
          },
          {
            "key": "c",
            "text": "Collecting demonstration data and training a supervised policy."
          },
          {
            "key": "d",
            "text": "Performing external white-box auditing of the pretrained model."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "RLHF [3:57-6:38] - The first step in the RLHF pipeline is to collect demonstration data and train a supervised model.",
        "image": null,
        "explanation_image": null,
        "question": "What is the first step of the RLHF pipeline?"
      },
      {
        "id": "w2_q9",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "It is too expensive for external auditors."
          },
          {
            "key": "b",
            "text": "It does not allow for human-in-the-loop feedback."
          },
          {
            "key": "c",
            "text": "It prevents the use of reinforcement learning."
          },
          {
            "key": "d",
            "text": "It only allows auditors to query the system and observe outputs."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Alignment [24:28-25:13] - Auditors can only query the system and observe its output.",
        "image": null,
        "explanation_image": null,
        "question": "Why is black-box access insufficient for rigorous AI audits?"
      },
      {
        "id": "w2_q10",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "The reward model from becoming too complex"
          },
          {
            "key": "b",
            "text": "The policy model from diverging too far from the initial pretrained model"
          },
          {
            "key": "c",
            "text": "Human evaluators from providing biased feedback"
          },
          {
            "key": "d",
            "text": "The model from over-generalizing"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "RLHF [14:31-16:35] - Kullback–Leibler (KL) divergence is the penalty which prevents us from diverging too far from the pretrained model.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, what does the Kullback–Leibler (KL) divergence penalty prevent in RLHF?"
      },
      {
        "id": "w2_q11",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Extremistan has thin tails while Medicristan has long tails."
          },
          {
            "key": "b",
            "text": "Extremistan is determined by many small events."
          },
          {
            "key": "c",
            "text": "Mediocristan is the tyranny of the collective."
          },
          {
            "key": "d",
            "text": "Extremistan’s impact is potentially scalable."
          }
        ],
        "correct": [
          "c",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Robustness Part 1 [17:22-19:19]",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following is true? (Select all that apply.)"
      },
      {
        "id": "w2_q12",
        "assignment": 2,
        "week": "Week 2",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "Idea * student * resources * time"
          },
          {
            "key": "b",
            "text": "Idea * student + resources * time"
          },
          {
            "key": "c",
            "text": "Idea + student + resource + time"
          },
          {
            "key": "d",
            "text": "Idea - student * resource - time"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Robustness Part 1 [15:17-17:21] - Research output = Ideas X Time X Students X Resources",
        "image": null,
        "explanation_image": null,
        "question": "Identify the equations that can lead to a long-tailed distribution."
      }
    ]
  },
  {
    "assignment": 3,
    "title": "Assignment 3 (Week 3)",
    "count": 12,
    "questions": [
      {
        "id": "w3_q1",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "1 -> i, 2-> iv, 3-> iii, 4-> ii"
          },
          {
            "key": "b",
            "text": "1 -> i, 2-> iv, 3-> ii, 4-> iii"
          },
          {
            "key": "c",
            "text": "1 -> iv, 2-> i, 3-> iii, 4-> ii"
          },
          {
            "key": "d",
            "text": "1 -> iv, 2-> i, 3-> ii, 4-> iii"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Answers are found throughout the Unlearning and Approximate Unlearning lectures - ● Exact Unlearning - Unlearned model & retrained model to be distributionally identical. ● Unlearning via Differential Privacy - Unlearned model & retrained model to be distributionally close. ● Example Unlearning - Train, retain, and forget sets are often clearly defined. ● Concept Unlearning - Train, retain, or forget sets are poorly specified or just not ● specified at all.",
        "image": null,
        "explanation_image": null,
        "question": "Match the unlearning method to their corresponding concept.  1) Exact unlearning    i) Unlearned model and retrained model are distributionally close  2) Unlearning via Differential Privacy ii) The forget set is clearly defined  3) Example Unlearning   iii) The forget set is not clearly defined  4) Concept Unlearning   iv) Unlearned model and retrained model are distributionally identical"
      },
      {
        "id": "w3_q2",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "To increase the training speed of a model."
          },
          {
            "key": "b",
            "text": "To add more data to an existing model without retraining."
          },
          {
            "key": "c",
            "text": "To remove the influence of specific training data from a trained model."
          },
          {
            "key": "d",
            "text": "To improve the accuracy of a model on new, unseen data."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Unlearning [8:41-9:36] - Machine Unlearning can be broadly described as removing the influences of training data from a trained model.",
        "image": null,
        "explanation_image": null,
        "question": "What is the primary goal of “Machine Unlearning”?"
      },
      {
        "id": "w3_q3",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Right to be remembered"
          },
          {
            "key": "b",
            "text": "Right to be forgotten"
          },
          {
            "key": "c",
            "text": "Right to be modified"
          },
          {
            "key": "d",
            "text": "Right to be distributed"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Unlearning [11:35-15:50] - GDPR’s Article 17 is the right to erasure or right to be forgotten.",
        "image": null,
        "explanation_image": null,
        "question": "What is GDPR’s Article 17 about in the context of Machine Learning?"
      },
      {
        "id": "w3_q4",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "It increases the overall accuracy of the model."
          },
          {
            "key": "b",
            "text": "It ensures that unlearned data never contributes to other components."
          },
          {
            "key": "c",
            "text": "It allows the model to learn from toxic data safely."
          },
          {
            "key": "d",
            "text": "It eliminates the need for any retraining."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Unlearning [29:44-30:02] - Algorithm is the proof: SISA by design unlearned data never contributed to other components (split).",
        "image": null,
        "explanation_image": null,
        "question": "In the SISA framework, what is the benefit of using “shards” and “slices”?"
      },
      {
        "id": "w3_q5",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "To distinguish whether specific training data was used to train a model."
          },
          {
            "key": "b",
            "text": "To add new members to a training dataset."
          },
          {
            "key": "c",
            "text": "To speed up the unlearning process."
          },
          {
            "key": "d",
            "text": "To verify the architecture of the model."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Approximate Unlearning [11:55-13:48] - Membership inference attacks aim to distinguish training data from unseen data.",
        "image": null,
        "explanation_image": null,
        "question": "What is “Membership Inference Attack”?"
      },
      {
        "id": "w3_q6",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "KL Divergence"
          },
          {
            "key": "b",
            "text": "Direct Preference Optimization"
          },
          {
            "key": "c",
            "text": "Gradient Ascent"
          },
          {
            "key": "d",
            "text": "Gradient Difference"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Evaluation of Unlearning and Graph Unlearning Part 1 [17:20-19:08] - Gradient Ascent: Mess up predictions on the forget set by increasing the usual training loss on the forget set.",
        "image": null,
        "explanation_image": null,
        "question": "Which unlearning method involves increasing the training loss on the forget set?"
      },
      {
        "id": "w3_q7",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "A bottom-up approach focusing on individual neurons."
          },
          {
            "key": "b",
            "text": "Modifying representation vectors to control model traits."
          },
          {
            "key": "c",
            "text": "A method for increasing the parameter count of a model."
          },
          {
            "key": "d",
            "text": "Re-labeling all data points in a dataset to fix biases."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Evaluation of Unlearning and Graph Unlearning Part 1 [30:35-33:10] - Modify the representation vectors to modify the model outputs.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, what is “Representation Engineering”?"
      },
      {
        "id": "w3_q8",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "By using gradient ascent on only the affected data points."
          },
          {
            "key": "b",
            "text": "By applying a differential privacy constraint to the aggregation layer."
          },
          {
            "key": "c",
            "text": "By flipping the labels of the forget set and performing few-shot."
          },
          {
            "key": "d",
            "text": "By retraining only the constituent model whose shards contain the point to be unlearned."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Unlearning [25:00-29:43] - SISA training: data is divided in shards, which are themselves divided into slices. One constituent model is trained on each shard by presenting it with incrementally many slices and saving its parameters before the training set is augmented with a new slice. When data needs to be unlearned, only one of the constituent models whose shards contain the point to be unlearned needs to be retrained — retraining can start from the last parameter values saved before including the slice containing the data point to be unlearned.",
        "image": null,
        "explanation_image": null,
        "question": "In the context of the SISA framework, how does the system minimize the cost of retraining when a data point must be unlearned?"
      },
      {
        "id": "w3_q9",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "Fundamental knowledge is deeply embedded in the model’s implicit knowledge graph."
          },
          {
            "key": "b",
            "text": "Fundamental facts are typically protected by guardrails."
          },
          {
            "key": "c",
            "text": "Models are primarily trained on Wikipedia, which contains these facts."
          },
          {
            "key": "d",
            "text": "Differential privacy guarantees fall off more quickly for fundamental facts."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Evaluation of Unlearning and Graph Unlearning Part 1 [25:25-27:16] - A piece of knowledge can be so embedded in the model’s implicit knowledge graph that it cannot be unlearned without introducing contradictions and harming the model’s utility.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why is unlearning fundamental facts like “the sun rises every day” considered more difficult than unlearning infrequent textual occurrences, such as car accidents?"
      },
      {
        "id": "w3_q10",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "Efficiency"
          },
          {
            "key": "b",
            "text": "Forgetting Quality"
          },
          {
            "key": "c",
            "text": "Model Utility"
          },
          {
            "key": "d",
            "text": "Membership Inference"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Approximate Unlearning [25:55-27:35] - Model utility: Do we harm performance on the retain data or orthogonal tasks?",
        "image": null,
        "explanation_image": null,
        "question": "Which unlearning evaluation metric focuses on whether the unlearning process negatively affects the model’s performance on the “retrain data” or unrelated tasks?"
      },
      {
        "id": "w3_q11",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Biosecurity/Bioweapons"
          },
          {
            "key": "b",
            "text": "Cybersecurity"
          },
          {
            "key": "c",
            "text": "Chemical security"
          },
          {
            "key": "d",
            "text": "Financial market manipulation"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Evaluation of Unlearning and Graph Unlearning Part 1 [19:45-21:40] - Unlearning dangerous knowledge, specifically on biosecurity, cybersecurity, and chemical security.",
        "image": null,
        "explanation_image": null,
        "question": "The WMDP benchmark measures hazardous knowledge in which specific areas? (Select all that apply.)"
      },
      {
        "id": "w3_q12",
        "assignment": 3,
        "week": "Week 3",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "GraphEraser"
          },
          {
            "key": "b",
            "text": "GUIDE"
          },
          {
            "key": "c",
            "text": "Projector"
          },
          {
            "key": "d",
            "text": "GraphdEditor"
          },
          {
            "key": "e",
            "text": "GNNDelete f. MEGU"
          }
        ],
        "correct": [
          "a",
          "d",
          "e"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Evaluation of Unlearning and Graph Unlearning Part 2 [13:14-16:53] - The chart has checkmarks showing the methods used for each type of unlearning.",
        "image": null,
        "explanation_image": null,
        "question": "Which methods are used for Edge Unlearning? (Select all that apply.)"
      }
    ]
  },
  {
    "assignment": 4,
    "title": "Assignment 4 (Week 4)",
    "count": 12,
    "questions": [
      {
        "id": "w4_q1",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "Statistics focuses on societal values, while CS/ML focuses on mathematical deviations."
          },
          {
            "key": "b",
            "text": "Statistics defines it as a systematic error in data collection/interpretation, while CS/ML defines it as a systematic favoritism towards certain groups/outcomes."
          },
          {
            "key": "c",
            "text": "CS/ML focuses on rationality in judgment, while Statistics focuses on algorithmic performance."
          },
          {
            "key": "d",
            "text": "There is no difference; both define bias as a systematic deviation from rationality."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - I [18:48-19:41] - ● Statistics: Systematic error in the collection, analysis, or interpretation of data ● CS/ML: Systematic favoritism or discrimination towards certain groups/outcomes",
        "image": null,
        "explanation_image": null,
        "question": "How does the definition of “bias” in CS/ML differ from Statistics?"
      },
      {
        "id": "w4_q2",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "Bias is a problem at all times because humans are not perfect."
          },
          {
            "key": "b",
            "text": "It is only a problem when it occurs in the data collection phase."
          },
          {
            "key": "c",
            "text": "It is only a problem when it can have a negative impact."
          },
          {
            "key": "d",
            "text": "It is only a problem when the model is not 100% accurate."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - I [21:50-23:09] - Bias is always there – humans are not perfect. It is only a problem when it can have a negative impact.",
        "image": null,
        "explanation_image": null,
        "question": "According to the slides, when does bias become a problem?"
      },
      {
        "id": "w4_q3",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Demographic Parity Score"
          },
          {
            "key": "b",
            "text": "Perspective API Score"
          },
          {
            "key": "c",
            "text": "Legal Grounding Score"
          },
          {
            "key": "d",
            "text": "β-weighted Legal Safety Score"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - II [14:01-14:15] - β-weighted Legal Safety Score (LSSβ), which encapsulates both the fairness and accuracy aspects of the LLM.",
        "image": null,
        "explanation_image": null,
        "question": "Which metric is proposed in the InSaAF study to encapsulate both fairness and accuracy in the Indian legal landscape?"
      },
      {
        "id": "w4_q4",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "It was unable to process text correctly."
          },
          {
            "key": "b",
            "text": "It posted unintended offensive tweets due to malicious user intent."
          },
          {
            "key": "c",
            "text": "It could only generate content related to the United States."
          },
          {
            "key": "d",
            "text": "It was too slow to respond to users."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - II [17:46-19:30] - Refer to the article given in the lecture (https://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist)",
        "image": null,
        "explanation_image": null,
        "question": "What was the primary issue with Microsoft’s chatbot “Tay”?"
      },
      {
        "id": "w4_q5",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "Only younger women were shown in specialized roles."
          },
          {
            "key": "b",
            "text": "Only older men were shown in specialized roles."
          },
          {
            "key": "c",
            "text": "Older women were frequently depicted as news analysts."
          },
          {
            "key": "d",
            "text": "Specialized roles always featured diverse racial representation."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - II [21:35-23:40] - For non-specialised job titles, Midjourney returned images of only younger men and women. For specialised roles, both younger and older people were shown – but the older people were always men.",
        "image": null,
        "explanation_image": null,
        "question": "Analysis of AI-generated images from Midjourney showed which of the following biases regarding specialized roles?"
      },
      {
        "id": "w4_q6",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "Collecting and labelling data"
          },
          {
            "key": "b",
            "text": "Training using chosen metrics and objectives"
          },
          {
            "key": "c",
            "text": "Models deployed in production"
          },
          {
            "key": "d",
            "text": "Users see an effect"
          }
        ],
        "correct": [
          "a",
          "b",
          "c",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Source of Bias [0:15-2:28] - Each stage of the pipeline leaves an opening for bias to be introduced.",
        "image": null,
        "explanation_image": null,
        "question": "According to “The Source of Bias” ML pipeline, at which stage can bias be introduced? (Select all that apply.)"
      },
      {
        "id": "w4_q7",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "One stereotype sentence and one neutral sentence"
          },
          {
            "key": "b",
            "text": "One biased sentence and one unbiased sentence"
          },
          {
            "key": "c",
            "text": "One stereotype sentence and one opposite stereotype sentence"
          },
          {
            "key": "d",
            "text": "One stereotype sentence and one less stereotype sentence"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - I [25:14-28:50] - In this dataset, for each example, the two sentences are minimally distant.",
        "image": null,
        "explanation_image": null,
        "question": "What does each pair in the CrowS-Pairs dataset consist of?"
      },
      {
        "id": "w4_q8",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "Choosing to use only English-language phrases."
          },
          {
            "key": "b",
            "text": "Using systematic favoritism towards a specific outcome."
          },
          {
            "key": "c",
            "text": "Manually editing every data point to be offensive."
          },
          {
            "key": "d",
            "text": "Refusing to use any AI models in production."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "A latent design choice is an unstated decision that implicitly introduces bias. Choosing only English-language data is a latent choice because it implicitly excludes non-Western data, leading to a skewed, Western-aligned dataset.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following is a \"latent\" design choice that can lead to bias in a dataset?"
      },
      {
        "id": "w4_q9",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "Irrespective of the sentences, minimise the distance between their embeddings."
          },
          {
            "key": "b",
            "text": "Irrespective of the sentences, maximise the distance between their embeddings."
          },
          {
            "key": "c",
            "text": "If sentences are similar, minimise the distance between their embeddings."
          },
          {
            "key": "d",
            "text": "If sentences are different, minimise the distance between their embeddings."
          },
          {
            "key": "e",
            "text": "If sentences are different, maximise the distance between their embeddings. f. If sentences are different, minimise the distance between their embeddings"
          }
        ],
        "correct": [
          "c",
          "e"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Contrastive learning trains models by pulling similar items together and pushing dissimilar items apart. It achieves this by minimizing the embedding distance for similar sentences and maximizing the distance for different ones.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following is the correct setting for contrastive learning? (Select all that apply.)"
      },
      {
        "id": "w4_q10",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "A factual statement that applies to all humans."
          },
          {
            "key": "b",
            "text": "A scientifically proven characteristic."
          },
          {
            "key": "c",
            "text": "A legal rule used to govern a society."
          },
          {
            "key": "d",
            "text": "A widely held belief about some group."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - I [19:47-21:48] - Stereotypes: A widely held belief about some group/entity.",
        "image": null,
        "explanation_image": null,
        "question": "What is a “stereotype”?"
      },
      {
        "id": "w4_q11",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Reporting bias"
          },
          {
            "key": "b",
            "text": "Historical bias"
          },
          {
            "key": "c",
            "text": "Automation bias"
          },
          {
            "key": "d",
            "text": "In-group bias"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Please refer to the link for an explanation: https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias",
        "image": null,
        "explanation_image": null,
        "question": "A sentiment-analysis model is trained to predict whether book reviews are positive or negative based on a corpus of user submissions to a popular website. The majority of reviews in the training dataset reflect extreme opinions (reviewers who either loved or hated a book), because people were less likely to submit a review of a book if they did not respond to it strongly. As a result, the model is less able to correctly predict the sentiment of reviews that use more subtle language to describe a book. Which type of bias is this?"
      },
      {
        "id": "w4_q12",
        "assignment": 4,
        "week": "Week 4",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "Gender"
          },
          {
            "key": "b",
            "text": "Race"
          },
          {
            "key": "c",
            "text": "Scientific Facts"
          },
          {
            "key": "d",
            "text": "Profession"
          },
          {
            "key": "e",
            "text": "Currency exchange rates"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Bias - I [23:10-25:13] -Among the options, gender, race, and profession are considered categories of bias.",
        "image": null,
        "explanation_image": null,
        "question": "As per the lecture, which of the following is a/are a category of bias? (Select all that apply.)"
      }
    ]
  },
  {
    "assignment": 5,
    "title": "Assignment 5 (Week 5)",
    "count": 12,
    "questions": [
      {
        "id": "w5_q1",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "25"
          },
          {
            "key": "b",
            "text": "50"
          },
          {
            "key": "c",
            "text": "75"
          },
          {
            "key": "d",
            "text": "100"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - III [7:24-11:17] - The lms of an ideal language model will be 100.",
        "image": null,
        "explanation_image": null,
        "question": "What should be the language modelling (lms) for an ideal model in the StereoSet benchmark?"
      },
      {
        "id": "w5_q2",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "The model has no social bias."
          },
          {
            "key": "b",
            "text": "The model always prefers anti-stereotypical sentences."
          },
          {
            "key": "c",
            "text": "The model always prefers stereotypical sentences."
          },
          {
            "key": "d",
            "text": "The model is an ideal language model."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - III [7:24-11:17] - Stereotype score (ss) is the percentage of examples where the model prefers stereotypical associations over anti-stereotypical ones.",
        "image": null,
        "explanation_image": null,
        "question": "In the CrowS-Pairs benchmark, what does a score of 100% indicate?"
      },
      {
        "id": "w5_q3",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Model Drifting"
          },
          {
            "key": "b",
            "text": "Catastrophic Forgetting"
          },
          {
            "key": "c",
            "text": "Overfitting"
          },
          {
            "key": "d",
            "text": "Gradient Explosion"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Catastrophic forgetting occurs when fine-tuning an LLM on a specific task, such as bias removal, causes it to lose previously learned knowledge and general capabilities.",
        "image": null,
        "explanation_image": null,
        "question": "What phenomenon occurs when fine-tuning all parameters of a large language model (LLM) to remove bias, leading to a drop in general performance?"
      },
      {
        "id": "w5_q4",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "Re-balancing a corpus by swapping bias attribute words in a dataset."
          },
          {
            "key": "b",
            "text": "Adding more stereotypical sentences to a dataset to make it more biased."
          },
          {
            "key": "c",
            "text": "Removing all bias-attributed words in a dataset."
          },
          {
            "key": "d",
            "text": "Ensuring the dataset has an equal number of biased and unbiased samples."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - IV [35:49-37:57] - CDA involves re-balancing a corpus by swapping bias attribute words (e.g., he/she) in a dataset.",
        "image": null,
        "explanation_image": null,
        "question": "What is Counterfactual Data Augmentation (CDA)?"
      },
      {
        "id": "w5_q5",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "GPT-4"
          },
          {
            "key": "b",
            "text": "NVIDIA NeMo"
          },
          {
            "key": "c",
            "text": "CoDi"
          },
          {
            "key": "d",
            "text": "MAFIA"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - IV [13:16-15:50] - NVIDIA NeMo is an open-source toolkit for easily adding programmable guardrails to LLM-based conversational applications.",
        "image": null,
        "explanation_image": null,
        "question": "Which toolkit is used to add programmable guardrails to LLM-based conversational applications to control outputs?"
      },
      {
        "id": "w5_q6",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "i -> Informed, ii -> Informed"
          },
          {
            "key": "b",
            "text": "i -> Informed, ii -> Blind"
          },
          {
            "key": "c",
            "text": "i -> Blind, ii ->Informed"
          },
          {
            "key": "d",
            "text": "i -> Blind, ii -> Blind"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias in VLM's [15:05-19:02] - (i) contains the details about the image and explicitly asks the gender, while (ii) gives no extra information about the image.",
        "image": null,
        "explanation_image": null,
        "question": "Match the following example to the correct prompt variation. i. The image shows a subject with the occupation 'Chief Executive Officer'. Based on the image and this information, what is the gender of the person? (a) male (b) female (c) no preference ii. Looking at this image alone, who would you hire to be the CEO of a Fortune 500 company? (a) person in the image (b) someone else (c) no preference"
      },
      {
        "id": "w5_q7",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "Sexual orientation"
          },
          {
            "key": "b",
            "text": "Socioeconomic status"
          },
          {
            "key": "c",
            "text": "Political ideology"
          },
          {
            "key": "d",
            "text": "Physical appearance"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Bias III [14:50-15:40] - Sexual orientation, socioeconomic status, and physical appearance are all part of social bias in the CrowS-Pairs benchmark.",
        "image": null,
        "explanation_image": null,
        "question": "The CrowS-Pairs benchmark includes which of the following types of social bias? (Select all that apply.)"
      },
      {
        "id": "w5_q8",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "BOLD"
          },
          {
            "key": "b",
            "text": "RedditBias"
          },
          {
            "key": "c",
            "text": "WinoBias"
          },
          {
            "key": "d",
            "text": "Winogender"
          }
        ],
        "correct": [
          "c",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Bias - III [33:14-36:50] and Bias - IV [0:00-4:24] - Winogender and WinoBias both measure gender-related bias.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following datasets are specifically designed for measuring gender-related biases? (Select all that apply.)"
      },
      {
        "id": "w5_q9",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 9,
        "options": [],
        "correct": [],
        "type": "numerical",
        "numerical_answer": "2",
        "explanation": "",
        "image": null,
        "explanation_image": "extracted_images/ass5_p3_img1.png",
        "question": "You are performing a bias audit on a corpus with total documents. Calculate 𝑁= 1000 the PMI between an identity label and a specific descriptive word . 𝑤𝑖 𝑤𝑗 ● The identity label appears in 100 documents. ● The descriptive word appears in 50 documents. ● Both words co-occur in the same document 20 times."
      },
      {
        "id": "w5_q10",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "2 times"
          },
          {
            "key": "b",
            "text": "5 times"
          },
          {
            "key": "c",
            "text": "10 times"
          },
          {
            "key": "d",
            "text": "20 times"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias Handon Part 1 [5:44-7:08] - Terms that occur less than 10 times in the corpus should not be considered.",
        "image": null,
        "explanation_image": null,
        "question": "What is the minimum threshold a word has to appear in the corpus for it to be considered when performing word association analysis?"
      },
      {
        "id": "w5_q11",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "To remove all images containing humans from the training set."
          },
          {
            "key": "b",
            "text": "To study societal bias in generated output by providing input that blurs gender."
          },
          {
            "key": "c",
            "text": "To increase the \"Neutral\" accuracy above the random baseline."
          },
          {
            "key": "d",
            "text": "To ensure the model can only identify objects rather than social attributes."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias in VLM’s [8:41-9:08] - Gender-bleached input to study gender bias in generated output.",
        "image": null,
        "explanation_image": null,
        "question": "What is the \"Gender-bleached\" input method used for?"
      },
      {
        "id": "w5_q12",
        "assignment": 5,
        "week": "Week 5",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "To automatically remove all stereotypical words from a model's training data."
          },
          {
            "key": "b",
            "text": "To increase the speed at which a model generates text by reducing the number of words used."
          },
          {
            "key": "c",
            "text": "To ensure that models only use gender-neutral pronouns like \"they\" in every conversation."
          },
          {
            "key": "d",
            "text": "To evaluate how much a model relies on specific contexts before deciding if a statement is truly biased."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Bias - IV [17:39-18:46] - COBIAS is designed to understand the concept of inputs by considering the diverse situations in which they may arise.",
        "image": null,
        "explanation_image": null,
        "question": "What is the main goal of the COBIAS framework when assessing bias?"
      }
    ]
  },
  {
    "assignment": 6,
    "title": "Assignment 6 (Week 6)",
    "count": 12,
    "questions": [
      {
        "id": "w6_q1",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "It is unclear whether all complex functions can be effectively evaluated from in the encryption space."
          },
          {
            "key": "b",
            "text": "Evaluation in encrypted space is computationally expensive."
          },
          {
            "key": "c",
            "text": "As the model scales, cryptographic keys become impossible to manage."
          },
          {
            "key": "d",
            "text": "Encryption models cannot be used for binary classification tasks."
          }
        ],
        "correct": [
          "a",
          "b"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Data Privacy [4:06-6:22] - There are two reasons why cryptographic solutions are not suitable. First, it is unclear whether you can do inference in an encrypted space. Second, encryption is an expensive solution.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why would standard cryptographic solutions be unsuitable for AI model privacy? (Select all that apply.)"
      },
      {
        "id": "w6_q2",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "The model weights occupy too much storage space."
          },
          {
            "key": "b",
            "text": "Binary classifiers are inherently less secure than multi-class ones."
          },
          {
            "key": "c",
            "text": "An adversary can reverse-engineer sensitive training data."
          },
          {
            "key": "d",
            "text": "The labels used for training are usually public knowledge."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Data Privacy [1:45-4:06] - An adversary can reverse-engineer sensitive personal information such as healthcare or financial data given a simple binary classification model.",
        "image": null,
        "explanation_image": null,
        "question": "In the context of healthcare data, why might a trained binary classification model still pose a privacy risk even if the raw data is not directly released?"
      },
      {
        "id": "w6_q3",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "By obtaining the meta-data of the dataset."
          },
          {
            "key": "b",
            "text": "By brute-forcing the sparse matrix to reveal the missing entries."
          },
          {
            "key": "c",
            "text": "By using cryptanalytic attacks to decode user information."
          },
          {
            "key": "d",
            "text": "By using an auxiliary public database, such as IMDb, to correlate ratings."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Data Privacy [8:55-12:46] - They were able to deanonymize the Netflix dataset by using an auxiliary database (IMDb) and correlating the two.",
        "image": null,
        "explanation_image": null,
        "question": "How were users able to deanonymize the “anonymized” Netflix dataset?"
      },
      {
        "id": "w6_q4",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "10%"
          },
          {
            "key": "b",
            "text": "25%"
          },
          {
            "key": "c",
            "text": "50%"
          },
          {
            "key": "d",
            "text": "75%"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Data Privacy [21:25-24:12] - means that the truth will be revealed ε > 0 ε with a probability of . 𝑒 1+ 𝑒 ε > 50%",
        "image": null,
        "explanation_image": null,
        "question": "In the randomized response algorithm presented in the lecture, what is the minimum probability that the truthful answer is revealed?"
      },
      {
        "id": "w6_q5",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "should be maximum for privacy, should be minimum for utility ε ε"
          },
          {
            "key": "b",
            "text": "should be minimum for privacy, should be minimum for utility ε ε"
          },
          {
            "key": "c",
            "text": "should be maximum for privacy, should be maximum for utility ε ε"
          },
          {
            "key": "d",
            "text": "should be minimum for privacy, should be maximum for utility ε ε"
          },
          {
            "key": "e",
            "text": "is unrelated ε"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Data Privacy [1:00:00 - 1:01:20] - If is large, and are easier to ε 𝑥𝑖 𝑧𝑖 distinguish, which increases utility, and vice versa. controls the privacy-utility tradeoff. ε",
        "image": null,
        "explanation_image": null,
        "question": "To maximize utility, how should the privacy parameter be adjusted? ε"
      },
      {
        "id": "w6_q6",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 6,
        "options": [],
        "correct": [],
        "type": "numerical",
        "numerical_answer": "91",
        "explanation": "Data Privacy",
        "image": null,
        "explanation_image": "extracted_images/ass6_p2_img1.png",
        "question": "An organization surveys 100 people and asks whether they voted for a certain party. To protect respondents' privacy, the organization uses the randomized response technique with . Out of 100 respondents, 60 reported “Yes” and 40 reported “No.” Estimate ε = 0. 5 the true number of people whose actual answer was “Yes”. Round to the nearest whole number."
      },
      {
        "id": "w6_q7",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "Trust the curator; Trust the world"
          },
          {
            "key": "b",
            "text": "Do not trust the curator; Trust the world"
          },
          {
            "key": "c",
            "text": "Trust the curator; Do not trust the world"
          },
          {
            "key": "d",
            "text": "Do not trust the curator; Do not trust the world"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Data Privacy [1:06:06-1:11:00] - In differential privacy, surveyors trust the curator to give their information to them but want their information to be privatized when the computed function is released to the world.",
        "image": null,
        "explanation_image": null,
        "question": "Which trust scenario correctly describes the differential privacy model?"
      },
      {
        "id": "w6_q8",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "The average difference between and for all neighbouring and . 𝑓(𝑋) 𝑓(𝑋') 𝑋 𝑋'"
          },
          {
            "key": "b",
            "text": "The maximum absolute difference between and for any two 𝑓(𝑋) 𝑓(𝑋') neighboring and . 𝑋 𝑋'"
          },
          {
            "key": "c",
            "text": "The standard deviation of the function . 𝑓"
          },
          {
            "key": "d",
            "text": "The minimum difference between and for any two neighboring and 𝑓(𝑋) 𝑓(𝑋') 𝑋 . 𝑋'"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Differential Privacy [21:30-22:34] - Sensitivity in the Laplace (∆) mechanism measures how sensitive a function is to a single input change. It is the 𝑓 maximum absolute difference over all neighboring datasets and that |𝑓(𝑋) − 𝑓(𝑋')| 𝑋 𝑋' differ by one element.",
        "image": null,
        "explanation_image": null,
        "question": "In the Laplace Mechanism, how is the sensitivity defined for a function ? (∆) 𝑓"
      },
      {
        "id": "w6_q9",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "𝑒"
          },
          {
            "key": "b",
            "text": "ε"
          },
          {
            "key": "c",
            "text": "1/ε 𝑒"
          },
          {
            "key": "d",
            "text": "ε"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Differential Privacy [9:57-15:02] - A mechanism is said to be 𝑀 ε ε. -differential private if 𝑃𝑟(𝑀(𝑋) ϵ 𝑆) 𝑃𝑟(𝑀(𝑋') ϵ 𝑆) ≤𝑒",
        "image": null,
        "explanation_image": null,
        "question": "According to Cynthia Dwork's definition of -differential privacy, for all neighbouring ε datasets and , the probability that a mechanism on generates an output in 𝑋 𝑋' 𝑀 𝑋 subset divided by the probability that a mechanism on generates an output in 𝑆 𝑀 𝑋' subset is at most: 𝑆 ε"
      },
      {
        "id": "w6_q10",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "They have zero correlation."
          },
          {
            "key": "b",
            "text": "They differ by 99% of the elements in the set."
          },
          {
            "key": "c",
            "text": "They are disjoint sets."
          },
          {
            "key": "d",
            "text": "They differ by only one element."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Data Privacy [24:29-25:58] - and are two datasets where 𝑋 𝑋' , meaning they differ by only one element of index . 𝑋= 𝑋' ∀ 𝑖 ϵ {1 ... ( 𝑛−1)} 𝑖 = 𝑛",
        "image": null,
        "explanation_image": null,
        "question": "What property of neighboring data sets and is used to prove the privacy guarantee 𝑋 𝑋' of Randomized Response?"
      },
      {
        "id": "w6_q11",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Less noise is added."
          },
          {
            "key": "b",
            "text": "More noise is added."
          },
          {
            "key": "c",
            "text": "The noise remains unchanged."
          },
          {
            "key": "d",
            "text": "Noise is irrelevant."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Differential Privacy [27:14-31:00] - The more sensitive the function, the more noise should be added.",
        "image": null,
        "explanation_image": null,
        "question": "For a fixed , if a function being computed is highly sensitive (large ), how does it affect ε ∆ the noise added to the Laplace mechanism?"
      },
      {
        "id": "w6_q12",
        "assignment": 6,
        "week": "Week 6",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "The Laplace mechanism requires quadratically more people."
          },
          {
            "key": "b",
            "text": "The Laplace mechanism requires quadratically fewer people."
          },
          {
            "key": "c",
            "text": "Both require the same number of people."
          },
          {
            "key": "d",
            "text": "The number of people to survey does not matter."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Differential Privacy [50:18-53:02] - If you trust the curator, then you would have to survey a quadratically lesser number of people to achieve the same privacy-utility tradeoff using the Laplace mechanism than not trusting the curator.",
        "image": null,
        "explanation_image": null,
        "question": "Comparing the Laplace mechanism and randomized response, how does the required number of respondents differ to achieve the same privacy–utility trade-off? 𝑛"
      }
    ]
  },
  {
    "assignment": 7,
    "title": "Assignment 7 (Week 7)",
    "count": 12,
    "questions": [
      {
        "id": "w7_q1",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "The strict upper bound of the probability of the mechanism . 𝑀"
          },
          {
            "key": "b",
            "text": "The estimated noise added to the Laplace Mechanism."
          },
          {
            "key": "c",
            "text": "The average difference between all the data points in the datasets and . 𝑋 𝑋'"
          },
          {
            "key": "d",
            "text": "A leeway for small-probability events where -differential privacy may fail. ε"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Approximate Differential Privacy [6:50-9:26] - is a small leeway for low δ probability events where -differential privacy property may not hold true. ε",
        "image": null,
        "explanation_image": null,
        "question": "In Approximate Differential Privacy, what does represent? δ"
      },
      {
        "id": "w7_q2",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "It adds noise linearly proportional to D."
          },
          {
            "key": "b",
            "text": "It adds noise proportional to the square root of D."
          },
          {
            "key": "c",
            "text": "It adds noise exponentially proportional to D."
          },
          {
            "key": "d",
            "text": "It adds the same amount of noise."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Approximate Differential Privacy [18:00-20:58] - The Guassian Mechanism requires quadratically less amount of noise to become in terms of number of output that you're releasing.",
        "image": null,
        "explanation_image": null,
        "question": "Compared to the Laplacian mechanism, how does the Gaussian mechanism scale the amount of noise added when releasing D different outputs?"
      },
      {
        "id": "w7_q3",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "It satisfies the property of post-processing, meaning any data-independent computation applied to the output will not make it less -differentially private. (ε, δ)"
          },
          {
            "key": "b",
            "text": "It guarantees privacy even when is significantly larger than (where is the δ 1/𝑛 𝑛 number of individuals in a dataset)."
          },
          {
            "key": "c",
            "text": "It satisfies composition, meaning if you have mechanisms that are all 𝑘 (ε, δ) -differentially private, then the combined mechanism is -differentially (𝑘ε, 𝑘δ) private."
          },
          {
            "key": "d",
            "text": "It guarantees that the output distributions of the algorithm are completely identical for any two neighboring datasets."
          }
        ],
        "correct": [
          "a",
          "c"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Approximate Differential Privacy [23:40-34:53] - Approximate differential privacy has two properties: post-processing and composition.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following are properties of Approximate Differential Privacy? (Select all that apply.)"
      },
      {
        "id": "w7_q4",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "Zero chance of privacy leakage."
          },
          {
            "key": "b",
            "text": "Faster computational time for calculating probabilities."
          },
          {
            "key": "c",
            "text": "Better utility due to adding quadratically less noise."
          },
          {
            "key": "d",
            "text": "Eliminates the need for a trusted curator."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Approximate Differential Privacy [14:45-22:55] - Gaussian mechanism gains better utility with quadratically less amount of noise.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, what is the primary advantage of using the Gaussian Mechanism?"
      },
      {
        "id": "w7_q5",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 5,
        "options": [],
        "correct": [],
        "type": "numerical",
        "numerical_answer": "6",
        "explanation": "Exponential Mechanism",
        "image": null,
        "explanation_image": "extracted_images/ass7_p2_img1.png",
        "question": "There are three buyers whose valuations are 15, 20, and 135, respectively. What is the absolute difference in revenue when the price of a digital good changes from 14 to 18? (Round your answer to the nearest whole number.)"
      },
      {
        "id": "w7_q6",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "With probability proportional to the inverse of the price. ε 2δ 𝑆(𝑥, ℎ)"
          },
          {
            "key": "b",
            "text": "With probability proportional to . 𝑒 δ 2ε 𝑆(𝑥, ℎ)"
          },
          {
            "key": "d",
            "text": "Uniformly at random from all prices below the maximum valuation."
          },
          {
            "key": "c",
            "text": "With probability proportional to . 𝑒"
          }
        ],
        "correct": [
          "a",
          "b"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Exponential Mechanism [14:11-15:00] - Select with probability ℎ ϵ 𝐻 ε 2δ 𝑆(𝑥, ℎ) proportional to . 𝑒",
        "image": null,
        "explanation_image": null,
        "question": "How does the Exponential Mechanism select a price ? ℎ ϵ 𝐻"
      },
      {
        "id": "w7_q7",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "-Differential Privacy (ε, δ)"
          },
          {
            "key": "b",
            "text": "-Differential Privacy ε"
          },
          {
            "key": "c",
            "text": "K-Anonymity"
          },
          {
            "key": "d",
            "text": "Concentrated Differential Privacy"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Exponential Mechanism [15:53-18:15] - Exponential mechanism is Epsilon differentially private for the given valuations.",
        "image": null,
        "explanation_image": null,
        "question": "What privacy guarantee does the Exponential Mechanism provide for buyers' valuations?"
      },
      {
        "id": "w7_q8",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "It guarantees the absolute highest possible revenue every time."
          },
          {
            "key": "b",
            "text": "It does not guarantee positive revenue every time."
          },
          {
            "key": "c",
            "text": "It guarantees that the revenue will not be significantly lower than the optimal revenue."
          },
          {
            "key": "d",
            "text": "The guarantee will exactly match the median valuation."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Exponential Mechanism [18:15-22:35] - It guarantees that the revenue will not be significantly lower than the optimal revenue.",
        "image": null,
        "explanation_image": null,
        "question": "What is the utility guarantee provided by the Exponential Mechanism?"
      },
      {
        "id": "w7_q9",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "-1"
          },
          {
            "key": "b",
            "text": "0"
          },
          {
            "key": "c",
            "text": "0.5"
          },
          {
            "key": "d",
            "text": "1"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Fairness in Machine Learning [47:03-50:41] - An ideal classifier has a parity equal to 0.",
        "image": null,
        "explanation_image": null,
        "question": "In Statistical Parity, for a protected group and a classifier , what is the parity value for 𝐶 𝑀 an ideal classifier?"
      },
      {
        "id": "w7_q10",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "White defendants were labeled lower risk yet did re-offend at a higher rate than African American defendants."
          },
          {
            "key": "b",
            "text": "African American defendants were labeled higher risk but didn't re-offend at a higher rate than White defendants."
          },
          {
            "key": "c",
            "text": "White defendants had a higher rate of being labeled higher risk without re-offending than African American defendants."
          },
          {
            "key": "d",
            "text": "African American defendants had a lower rate of being labeled lower risk yet re-offending compared to White defendants."
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Fairness in Machine Learning [19:42-21:38] - According to the table: ● A higher percentage of African Americans were labelled as higher risk but didn’t re-offend ● A higher percentage of White people were labelled as low risk but did re-offend. ● A lower percentage of African Americans were labelled as lower risk yet re-offended compared to White people.",
        "image": null,
        "explanation_image": null,
        "question": "According to the data comparing White and African American defendants in risk assessments, which of the following statements are true? (Select all that apply.)"
      },
      {
        "id": "w7_q11",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Nurse"
          },
          {
            "key": "b",
            "text": "Teacher"
          },
          {
            "key": "c",
            "text": "Pharmacist"
          },
          {
            "key": "d",
            "text": "Cameraman"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Fairness in Machine Learning [24:44-28:10] - According to the lecture, “Cameraman” is a profession that is associated with sexist prejudice towards men.",
        "image": null,
        "explanation_image": null,
        "question": "Based on the analysis of biases in word embeddings from Wikipedia and Social Media, which of the following professions was associated with sexist prejudice towards men?"
      },
      {
        "id": "w7_q12",
        "assignment": 7,
        "week": "Week 7",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "Equal"
          },
          {
            "key": "b",
            "text": "Unequal"
          },
          {
            "key": "c",
            "text": "The protected group has a lower reconstruction loss"
          },
          {
            "key": "d",
            "text": "The protected group has a higher reconstruction loss"
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Fairness in Machine Learning [40:05-44:56] - At optimality, Fair PCA minimizes the maximum loss between the groups, which mathematically forces their average reconstruction errors to be equal.",
        "image": null,
        "explanation_image": null,
        "question": "The goal of Fair PCA is to find a PCA solution such that the reconstruction 𝑈= [𝑈𝐴, 𝑈𝐵] losses of groups A and B (where A is the protected group) are:"
      }
    ]
  },
  {
    "assignment": 8,
    "title": "Assignment 8 (Week 8)",
    "count": 12,
    "questions": [
      {
        "id": "w8_q1",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "They compress neural network layers to reduce model size."
          },
          {
            "key": "b",
            "text": "They automatically remove backdoor triggers from poisoned datasets."
          },
          {
            "key": "c",
            "text": "They convert text datasets directly into image representations."
          },
          {
            "key": "d",
            "text": "They highlight pixels that were relevant for a certain image classification."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - I [3:40-4:55] - Pixel Attribution Methods highlight the pixels that were relevant for a certain image classification by a neural network",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following best describes Pixel Attribution Methods?"
      },
      {
        "id": "w8_q2",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "Gradient-based methods"
          },
          {
            "key": "b",
            "text": "Occlusion-based methods"
          },
          {
            "key": "c",
            "text": "Mechanical methods"
          },
          {
            "key": "d",
            "text": "Top-down methods"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - I [6:33-7:25] - Occlusion- or perturbation-based: Methods like SHAP and LIME manipulate parts of the image to generate explanations (model-agnostic).",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following pixel attribution methods involve manipulating parts of an image to generate explanations?"
      },
      {
        "id": "w8_q3",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "The map should invert its colors."
          },
          {
            "key": "b",
            "text": "The map should remain identical."
          },
          {
            "key": "c",
            "text": "The map should change significantly."
          },
          {
            "key": "d",
            "text": "The map should become a blank image."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - I [20:11-22:28] - If a model captures higher-level class concepts, then saliency maps should change as the model is being randomized.",
        "image": null,
        "explanation_image": null,
        "question": "What should happen to a saliency map if a model that genuinely captures higher-level class concepts has its layers randomized?"
      },
      {
        "id": "w8_q4",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "By using prior knowledge."
          },
          {
            "key": "b",
            "text": "By randomizing the model’s layers."
          },
          {
            "key": "c",
            "text": "By using human annotators."
          },
          {
            "key": "d",
            "text": "By applying adversarial perturbations."
          }
        ],
        "correct": [
          "a",
          "c"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Interpretability - I [25:10-27:03] - Using prior knowledge, we can validate the explanations. Human annotation can be used to decide whether the model's explanations are correct.",
        "image": null,
        "explanation_image": null,
        "question": "How can we validate the explanations given by LIME? (Select all that apply.)"
      },
      {
        "id": "w8_q5",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "Mechanistic interpretability"
          },
          {
            "key": "b",
            "text": "Top-down interpretability"
          },
          {
            "key": "c",
            "text": "Feature-based visualization"
          },
          {
            "key": "d",
            "text": "Game-theoretic approach"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - II [9:57-11:58] - Top-down locates information in a model without full understanding of how it is processed",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following interpretability approaches involves locating information in a model without fully understanding how it is processed?"
      },
      {
        "id": "w8_q6",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "To inject hidden trojans into public datasets during training."
          },
          {
            "key": "b",
            "text": "To check whether representations encode information reliably"
          },
          {
            "key": "c",
            "text": "To optimize latent space interpolation for image generation"
          },
          {
            "key": "d",
            "text": "To completely reverse-engineer all node-to-node algorithmic connections in large language models."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - II [13:57-16:33] - Probing loosely refers to a class of methodologies in interpretability to check whether representations encode information reliably for some specific task.",
        "image": null,
        "explanation_image": null,
        "question": "What is the primary function of probing in interpretability?"
      },
      {
        "id": "w8_q7",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "API keys"
          },
          {
            "key": "b",
            "text": "Public Datasets"
          },
          {
            "key": "c",
            "text": "HuggingFace models"
          },
          {
            "key": "d",
            "text": "A downloadable execution file"
          }
        ],
        "correct": [
          "b",
          "c"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Interpretability - II [20:32-21:23] - Public datasets and model sharing libraries are some examples of attack vectors.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, which of the following are Attack Vectors? (Select all that apply.)"
      },
      {
        "id": "w8_q8",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "measures how unfaithful the explanation model is in approximating locally 𝐿 𝑔 𝑓 (weighted by , while measures the complexity/interpretability penalty of π𝑥 Ω(𝑔) the explanation model."
          },
          {
            "key": "b",
            "text": "represents the global accuracy of the black-box model , and represents 𝐿 𝑓 Ω(𝑔) the total number of convolutional layers."
          },
          {
            "key": "c",
            "text": "is the adversarial perturbation budget, and is the learning rate of the 𝐿 Ω(𝑔) surrogate model."
          },
          {
            "key": "d",
            "text": "calculates the exact Shapley values, and computes the gradient with 𝐿 Ω(𝑔) respect to input pixels."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - I [32:03-34:57] - In LIME's objective function, quantifies 𝐿 how poorly the simple explanation model approximates the complex black-box model 𝑔 within the local neighborhood defined by , while penalizes model complexity to 𝑓 π𝑥 Ω(𝑔) ensure the resulting explanation remains simple and interpretable for humans.",
        "image": "extracted_images/ass8_p2_img1.png",
        "explanation_image": null,
        "question": "Consider the following equation for LIME: What do the components and represent? 𝐿 Ω(𝑔)"
      },
      {
        "id": "w8_q9",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "To fine-tune the model using a 0.05% poisoned dataset"
          },
          {
            "key": "b",
            "text": "To reverse-engineer potential triggers"
          },
          {
            "key": "c",
            "text": "To prune the entire first-layer weights of a classifier"
          },
          {
            "key": "d",
            "text": "To train a neural network using high-dimensional pooling layers"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - II [26:57-31:36] - If we know the general form of the attack, we can reverse-engineer the Trojan by searching for a trigger and target label.",
        "image": null,
        "explanation_image": null,
        "question": "What is the primary goal of Neural Cleanse when detecting Trojans in neural networks?"
      },
      {
        "id": "w8_q10",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "Top-down focuses on algorithmic node-to-node connections, whereas mechanistic looks at global activity of populations of neurons."
          },
          {
            "key": "b",
            "text": "Top-down localizes information in a model and looks at representational spaces, while mechanistic attempts to reverse-engineer neural networks at the neuron level."
          },
          {
            "key": "c",
            "text": "Top-down requires full mathematical proof of model weights, whereas mechanistic is entirely model-agnostic."
          },
          {
            "key": "d",
            "text": "Top-down can only be applied to text-based saliency maps, whereas mechanistic only applies to GANs."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - II [6:27-11:58] - Mechanistic: Reverse-engineer neural Networks; Top-Down: Locate information in a model without full understanding of how it is processed.",
        "image": null,
        "explanation_image": null,
        "question": "How does top-down interpretability differ from mechanistic interpretability?"
      },
      {
        "id": "w8_q11",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Nash Equilibrium"
          },
          {
            "key": "b",
            "text": "Pareto Optimality"
          },
          {
            "key": "c",
            "text": "Shapley Values"
          },
          {
            "key": "d",
            "text": "Minimax Theorem"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Interpretability - I [35:20-39:39] - Connects optimal credit allocation with local explanations using the classic Shapley values from game theory and their related extensions.",
        "image": null,
        "explanation_image": null,
        "question": "What game-theoretic concept does SHAP (Shapley Additive exPlanations) explain about the output of any machine learning model?"
      },
      {
        "id": "w8_q12",
        "assignment": 8,
        "week": "Week 8",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "They generate global explanations that apply uniformly across the entire dataset."
          },
          {
            "key": "b",
            "text": "They are model-agnostic methods that can work on any black-box model."
          },
          {
            "key": "c",
            "text": "They are restricted solely to image datasets and cannot handle natural language data."
          },
          {
            "key": "d",
            "text": "They can be computationally expensive to compute compared to direct gradient-based visualizations."
          }
        ],
        "correct": [
          "b",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Interpretability - I [25:09-39:39] - Works on any black-box model with many data types.",
        "image": null,
        "explanation_image": null,
        "question": "Regarding LIME and SHAP, which of the following statements are true? (Select all that apply.)"
      }
    ]
  },
  {
    "assignment": 9,
    "title": "Assignment 9 (Week 9)",
    "count": 12,
    "questions": [
      {
        "id": "w9_q1",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "Vertical regulates the hardware, while horizontal regulates the software."
          },
          {
            "key": "b",
            "text": "Vertical regulation is completely market-based, while horizontal is purely state-controlled."
          },
          {
            "key": "c",
            "text": "Vertical regulation applies existing sector-specific laws to AI, while horizontal regulation creates broad, new risk-based laws across all sectors."
          },
          {
            "key": "d",
            "text": "Vertical regulation only applies to the industry, while horizontal applies to the industry and its customers."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 1 [40:25-43:12] - Vertical regulation tweaks existing laws for specific industries, whereas horizontal regulation attempts to classify and govern the technology itself across all sectors.",
        "image": null,
        "explanation_image": null,
        "question": "What is the difference between \"vertical\" and \"horizontal\" AI regulation?"
      },
      {
        "id": "w9_q2",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "Explainability has exact mathematical bounds, whereas privacy cannot be measured mathematically."
          },
          {
            "key": "b",
            "text": "Privacy can be controlled by improving the model’s accuracy, while explainability depends mainly on the size of the training dataset."
          },
          {
            "key": "c",
            "text": "Privacy can be formally bounded and guaranteed with mathematical frameworks."
          },
          {
            "key": "d",
            "text": "There are far less constraints in ensuring data privacy than explainability."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 2 [14:20-14:50] - Mathematical frameworks like differential privacy or cryptography provide proven security guarantees, explainability is black-box and remains harder to formally bound.",
        "image": null,
        "explanation_image": null,
        "question": "Why is data privacy considered a relatively better-understood guardrail compared to model explainability?"
      },
      {
        "id": "w9_q3",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Individual human agency decreases as decision-making is delegated to autonomous AI systems."
          },
          {
            "key": "b",
            "text": "Human decision-making increases because autonomous AI agents provide more information and recommendations to users."
          },
          {
            "key": "c",
            "text": "Human agency remains unchanged because autonomous AI systems only perform tasks without affecting human decisions."
          },
          {
            "key": "d",
            "text": "Human decision-making becomes more reliable because AI agents completely eliminate uncertainty and errors from the decision-making process."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 2 [33:10-34:00] - Delegating tasks to autonomous agents reduces individual agency over automated decisions.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, as AI systems become autonomous agents capable of performing complex tasks independently, what is the main trade-off that occurs regarding human decision-making."
      },
      {
        "id": "w9_q4",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "Model Quantization"
          },
          {
            "key": "b",
            "text": "Differential Privacy"
          },
          {
            "key": "c",
            "text": "Federated Learning"
          },
          {
            "key": "d",
            "text": "Data Augmentation"
          }
        ],
        "correct": [
          "b",
          "c"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Differential Privacy protects individual data by adding carefully calibrated noise during training while maintaining useful model performance. Federated Learning trains models across decentralized devices without requiring the personal data to be centrally collected.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following are privacy-preserving training techniques? (Select all that apply.)"
      },
      {
        "id": "w9_q5",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "Companies operate without zero external guidelines or government interaction."
          },
          {
            "key": "b",
            "text": "The government directly dictates every policy of code without interference from the industry."
          },
          {
            "key": "c",
            "text": "The government ensures that consumers have as much responsiblities as companies to follow policy."
          },
          {
            "key": "d",
            "text": "Industries establish policies which are formally recognized and enforced by the government."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 2 [49:10-51:06] - Co-regulation combines industry expertise in defining baseline standards with government authorization to enforce them across the industry.",
        "image": null,
        "explanation_image": null,
        "question": "In structured AI governance, what is defines a “co-regulation” model from from strict-regulation or self-regulation?"
      },
      {
        "id": "w9_q6",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "Removing the data may significantly reduce the model’s ability to generalize to unrelated tasks."
          },
          {
            "key": "b",
            "text": "The model may need to be retrained or use specialized unlearning techniques to remove the data’s influence."
          },
          {
            "key": "c",
            "text": "The model may become unstable because removing one data point automatically changes its entire architecture."
          },
          {
            "key": "d",
            "text": "The model may require additional training on the copyrighted data before its influence can be safely removed."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 2 [45:45-47:05] - Purging individual data points from large AI models is complex and often requires costly model retraining or complex unlearning algorithms.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, if copyrighted data is found inside a large AI model and must be removed, what is a major technical challenge?"
      },
      {
        "id": "w9_q7",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "50% on legal costs"
          },
          {
            "key": "b",
            "text": "100% on testing the model after it is released"
          },
          {
            "key": "c",
            "text": "10% on AI safety and responsible AI research"
          },
          {
            "key": "d",
            "text": "All profits on building newer hardware"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 3 [5:35-6:11] - Tristan Harris proposed allocating 10% of model development budgets to safe and responsible AI practices.",
        "image": null,
        "explanation_image": null,
        "question": "According to the discussed AI safety and governance proposals, about how much of an AI model’s development budget should be spent on safety and responsible AI?"
      },
      {
        "id": "w9_q8",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "Routing every simple text query to ultra-large GPU clusters in real time."
          },
          {
            "key": "b",
            "text": "Increasing parameter counts by 10x for routine classification tasks."
          },
          {
            "key": "c",
            "text": "Running duplicate backup models continuously on solar-powered data centers."
          },
          {
            "key": "d",
            "text": "Moving model inference to run on CPUs/Edge devices instead of GPUs."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 3 [18:40-20:26] - Running models on CPU/Edge devices makes infrastructure cheaper and environmentally friendly as they require less energy.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, which technical strategy help reduce the energy consumption and environmental footprint of LLM deployment?"
      },
      {
        "id": "w9_q9",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "It takes an unmoderated model output, reverse-infers the prompt that generated it, and runs it through safety filters."
          },
          {
            "key": "b",
            "text": "It translates outputs into multiple foreign languages until a syntax error occurs."
          },
          {
            "key": "c",
            "text": "It automatically rejects any prompt containing more words than the model’s maximum context window."
          },
          {
            "key": "d",
            "text": "It re-encrypts the LLM’s weights after every user interaction."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, Regulations, AGI - Part 3 [23:22-25:02] - Back-translation reconstructs the user prompt from the generated output so moderation filters can catch hidden jailbreak attempts.",
        "image": null,
        "explanation_image": null,
        "question": "How does Back Translation Defense mitigate jailbreak attacks?"
      },
      {
        "id": "w9_q10",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "Fairness"
          },
          {
            "key": "b",
            "text": "Explainability"
          },
          {
            "key": "c",
            "text": "AI Autonomy"
          },
          {
            "key": "d",
            "text": "Accountability"
          },
          {
            "key": "e",
            "text": "Fast Deployment f. Privacy"
          }
        ],
        "correct": [
          "a",
          "b",
          "d",
          "e"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Week 9 Lec 45 Lecture Notes [Slide 5] - Fairness, Explainability, Accountability and Privacy are RAI Principles.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following are principles of Responsible AI (RAI)? (Select all that apply.)"
      },
      {
        "id": "w9_q11",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "FN/GS Parity"
          },
          {
            "key": "b",
            "text": "FP/GS Pairty"
          },
          {
            "key": "c",
            "text": "FDR Parity"
          },
          {
            "key": "d",
            "text": "FPR Parity"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Week 9 Lec 45 Lecture Notes [Slide 20] - FDR Parity is used when intervention is punitive (could hurt individuals) and you are most concerned with ensuring predictive equity among people for whom intervention is taken?",
        "image": null,
        "explanation_image": null,
        "question": "According to the Fairness Tree Framework, which fairness metric is recommended when interventions are punitive and you are most concerned with ensuring predictive equity among people for whom intervention is taken?"
      },
      {
        "id": "w9_q12",
        "assignment": 9,
        "week": "Week 9",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "Measure and detect the bias"
          },
          {
            "key": "b",
            "text": "Mitigate the impact through adjusting interventions"
          },
          {
            "key": "c",
            "text": "Monitor & Evaluate"
          },
          {
            "key": "d",
            "text": "Improve fairness of AI systems"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Week 9 Lec 45 Lecture Notes [Slide 16] - Analyzing the root causes occurs in the Understand step, and the next is the Improve step.",
        "image": null,
        "explanation_image": null,
        "question": "According to the systems approach framework for AI design and development, what action immediately follows the step of analyzing the root causes of bias?"
      }
    ]
  },
  {
    "assignment": 10,
    "title": "Assignment 10 (Week 10)",
    "count": 12,
    "questions": [
      {
        "id": "w10_q1",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "It restricts evaluation to only the utilization of computation."
          },
          {
            "key": "b",
            "text": "It focuses only on the final outputs rather than the internal mechanisms."
          },
          {
            "key": "c",
            "text": "It fails to reveal underlying problematic model behaviour."
          },
          {
            "key": "d",
            "text": "It requires the auditors to retrain the underlying weights from scratch."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [3:56-4:31] - Black-box auditing is insufficient because the auditor might fail to identify and surface the model’s problematic behaviour.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why is black-box access considered insufficient for conducting rigorous AI auditing?"
      },
      {
        "id": "w10_q2",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "The agent pursues a different goal that is merely correlated with the true reward function."
          },
          {
            "key": "b",
            "text": "The agent continuously optimizes an imperfect proxy goal, worsening the outcomes."
          },
          {
            "key": "c",
            "text": "The agent actively manipulates its own code to rewrite the target goal."
          },
          {
            "key": "d",
            "text": "The agent randomly pursues a completely new, unpredictable behvaiour is deployment."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [6:22-7:07] - Goal misgeneralization is when the model ends up optimizing a different reward function because it was merely correlated with the true reward function.",
        "image": null,
        "explanation_image": null,
        "question": "How does “goal misgeneralization” differ from “reward hacking”?"
      },
      {
        "id": "w10_q3",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "High parameter count and dense multi-head attention."
          },
          {
            "key": "b",
            "text": "Increased speed of token generation in text."
          },
          {
            "key": "c",
            "text": "Exploding context window expansion."
          },
          {
            "key": "d",
            "text": "Direct interaction with external digital infrastructure."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [32:10-33:53] - According to the lecture, highly agentic systems present severe existential and safety risks. When AI systems are plugged into digital infrastructures, companies, militaries, etc., and allowed to act autonomously, they may be able to successfully “disempower humanity”.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following characteristics of highly agentic AI systems could introduce severe safety concerns beyond those of current language models?"
      },
      {
        "id": "w10_q4",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "Benchmarks fail to capture emergent behaviours in a tool-based environment."
          },
          {
            "key": "b",
            "text": "Benchmarks require white-box parameter access to accurately test models."
          },
          {
            "key": "c",
            "text": "Benchmarks are only able to accurately assess image models and not language models."
          },
          {
            "key": "d",
            "text": "Benchmarks cannot measure basic mathematical computation accuracy."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [23:07-23:41] - Benchmarks don’t reflect underlying capability because they can be very narrow. Looking at performance on a slightly different distribution shows that a system can perform much differently.",
        "image": null,
        "explanation_image": null,
        "question": "Why are benchmarks insufficient for assessing dangerous capabilities in current models?"
      },
      {
        "id": "w10_q5",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "Deploying models in restricted sandbox environments to observe failure cases."
          },
          {
            "key": "b",
            "text": "Releasing the complete source code and model weights to the public."
          },
          {
            "key": "c",
            "text": "Providing a positive case demonstrating that the system is safe."
          },
          {
            "key": "d",
            "text": "Mandating that all training be physically monitored by the public."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [7:16-7:50] - Developers should be making a positive deployment of AI systems to show that they are safe and that they are going to have a positive impact.",
        "image": null,
        "explanation_image": null,
        "question": "Instead of relying on third-party audits, what alternative approach can developers use to demonstrate that a model is safe before deployment?"
      },
      {
        "id": "w10_q6",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "They will overwrite local user data to optimize their performance."
          },
          {
            "key": "b",
            "text": "They will frequently hallucinate and fabricate sensitive personal information or memories."
          },
          {
            "key": "c",
            "text": "They put dangerous amounts of private information in the hands of a few big companies."
          },
          {
            "key": "d",
            "text": "They require localized hardware upgrades that need to be funded by the user."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [40:20-41:28] - By having these AI assistants learn about very personal information, this information is being stored by big companies, which gives them a dangerous amount of power.",
        "image": null,
        "explanation_image": null,
        "question": "What is a systemic risk about highly capable, personalized AI assistants that adapt to a user's habits?"
      },
      {
        "id": "w10_q7",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "The models fail to provide accurate citations for the generated content."
          },
          {
            "key": "b",
            "text": "The resulting model directly competes economically with the creators."
          },
          {
            "key": "c",
            "text": "The generated outputs are legally indistinguishable from the copyrighted data."
          },
          {
            "key": "d",
            "text": "The training process stores exact copies of the original works."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [36:46-37:48] - The models are directly competing with the creators of the copyrighted data, which does not fall under fair use.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why is training models on copyrighted data not constitute “transformative fair use”?"
      },
      {
        "id": "w10_q8",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "National regulators lack the technical tools needed to monitor large computing data centers within their own borders."
          },
          {
            "key": "b",
            "text": "Individual nations may have the need to bypass regulations and build dangerous AI systems anyways."
          },
          {
            "key": "c",
            "text": "International copyright laws prevent individual countries from enforcing safety standards on foreign models."
          },
          {
            "key": "d",
            "text": "Private AI companies can legally overturn single-nation safety laws in international judicial systems."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 1 [31:03-31:19] - Individual nations may have reasons to bypass regulations and build a “dangerous” AI.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why might single-nation AI regulations fail to prevent the deployment of dangerous AI systems?"
      },
      {
        "id": "w10_q9",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "Catastrophic learning episodes"
          },
          {
            "key": "b",
            "text": "Superficial behaviour alignment"
          },
          {
            "key": "c",
            "text": "Inference latency optimization"
          },
          {
            "key": "d",
            "text": "Data scaling bottlenecks"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 2 [2:00-3:55] - Safety mechanisms or safety fine-tuning in LLMs are often superficial. They teach systems to say a \"politically correct\" answer, while deep-seated implicit biases remain hidden in the model's underlying representations.",
        "image": null,
        "explanation_image": null,
        "question": "Which mechanism explains why safety fine-tuning may fail to eliminate deep-seated societal biases in LLMs?"
      },
      {
        "id": "w10_q10",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "It requires continuous access to quantum compute."
          },
          {
            "key": "b",
            "text": "It degrades latency during multi-turn dialogue."
          },
          {
            "key": "c",
            "text": "It creates incentives to manipulate human intent."
          },
          {
            "key": "d",
            "text": "It prevents models from processing implicit or indirect input cues"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 2 [27:19-28:08] - Optimizing persuasiveness gives AI systems leverage to manipulate human behaviour and intention, essentially using human beings as a means to an end.",
        "image": null,
        "explanation_image": null,
        "question": "Why is it dangerous for AI systems to be optimized for user persuasiveness?"
      },
      {
        "id": "w10_q11",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Developers are completely free of standard regulations."
          },
          {
            "key": "b",
            "text": "Developers lack any technical control over baseline models."
          },
          {
            "key": "c",
            "text": "Users control the underlying training data pipeline."
          },
          {
            "key": "d",
            "text": "Users face high market pressure to adopt AI systems."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 2 [7:03-7:37] - AI systems provide users with a competitive advantage, and they feel immense pressure to adopt AI in order for their business to survive.",
        "image": null,
        "explanation_image": null,
        "question": "Why is it better to have upstream regulation for companies developing AI systems and hardware than having downstream regulation on the people using the AI systems?"
      },
      {
        "id": "w10_q12",
        "assignment": 10,
        "week": "Week 10",
        "question_num": 12,
        "options": [
          {
            "key": "a",
            "text": "Text processing requires higher computational memory."
          },
          {
            "key": "b",
            "text": "Multimodal models eliminate risks of hallucinations in the outputs."
          },
          {
            "key": "c",
            "text": "Language models cannot represent abstract reasoning."
          },
          {
            "key": "d",
            "text": "Excluding human modalities creates a gap in real-world understanding."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Policies, AGI with Prof. David Krueger - Part 2 [13:18-13:37] - Multimodality is a crucial component for AGI, as without it, it creates a qualitative cognitive deficit.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, why is cross-modal capability considered to be a characteristic of Artificial General Intelligence (AGI)?"
      }
    ]
  },
  {
    "assignment": 11,
    "title": "Assignment 11 (Week 11)",
    "count": 11,
    "questions": [
      {
        "id": "w11_q1",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "Right to intellectual property retention"
          },
          {
            "key": "b",
            "text": "Right to be forgotten"
          },
          {
            "key": "c",
            "text": "Right to data portability"
          },
          {
            "key": "d",
            "text": "Right to transparency"
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Governance [9:56-11:50] - The right to be forgotten (or the right to erasure) gives the data subject the right to erasure of their personal data.",
        "image": null,
        "explanation_image": null,
        "question": "In the context of data privacy, which right requires companies to delete user data when requested?"
      },
      {
        "id": "w11_q2",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "Inclusive growth, sustainable development and well-being"
          },
          {
            "key": "b",
            "text": "Transparency and explainability"
          },
          {
            "key": "c",
            "text": "Robustness, security, and safety"
          },
          {
            "key": "d",
            "text": "Accountability"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Governance [18:12-19:00] - Robustness, Security, and Safety states that AI systems should be robust, secure, and safe throughout their entire lifecycle.",
        "image": null,
        "explanation_image": null,
        "question": "Which OECD AI Principle states that AI systems should operate safely and function properly under normal use, misuse, or adverse conditions?"
      },
      {
        "id": "w11_q3",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "Social Scoring Systems"
          },
          {
            "key": "b",
            "text": "Critical Infrastructure Management"
          },
          {
            "key": "c",
            "text": "Law Enforcement"
          },
          {
            "key": "d",
            "text": "Cognitive Behavioural Manipulation"
          }
        ],
        "correct": [
          "a",
          "d"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "AI Governance [25:22-26:56] - According to the EU AI Act, social scoring and cognitive behavioural manipulation are unacceptable risks.",
        "image": null,
        "explanation_image": null,
        "question": "Under the EU AI Act, which application category is classified as an 'unacceptable risk'? (Select all that apply.)"
      },
      {
        "id": "w11_q4",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "Educating and training users"
          },
          {
            "key": "b",
            "text": "Providing interface-level threat warnings"
          },
          {
            "key": "c",
            "text": "Silently eliminating the threat"
          },
          {
            "key": "d",
            "text": "Enforcing legal regulations"
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Governance [4:41-8:17] - Spam servers operate behind the scenes to remove unwanted or dangerous emails automatically.",
        "image": null,
        "explanation_image": null,
        "question": "When a system like an email spam server filters out malicious messages in the background without requiring user intervention, which type of threat mitigation is it demonstrating?"
      },
      {
        "id": "w11_q5",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "They must be exclusively hosted on European-based servers."
          },
          {
            "key": "b",
            "text": "They must be clearly labeled as AI-generated."
          },
          {
            "key": "c",
            "text": "They must not be published on the internet at all."
          },
          {
            "key": "d",
            "text": "They must be heavily taxed before distribution."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Governance [28:00-29:35] - The act mandates that any images, audio, or video files generated or modified by AI must be explicitly labeled.",
        "image": null,
        "explanation_image": null,
        "question": "What specific transparency requirement does the EU AI Act impose on deepfakes or generated media?"
      },
      {
        "id": "w11_q6",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "The person or organization that uses the AI systems under its own authority."
          },
          {
            "key": "b",
            "text": "The original engineering team that built the AI model."
          },
          {
            "key": "c",
            "text": "The individual who imports the AI system into the EU market."
          },
          {
            "key": "d",
            "text": "The government official responsible for writing the regulations."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Governance [30:12-31:55]: The deployer is the persons that use AI systems under their authority.",
        "image": null,
        "explanation_image": null,
        "question": "In the AI Value Chain, who is considered the \"deployer\"?"
      },
      {
        "id": "w11_q7",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "It allows companies to track user information that can lead to their location, such as IP addresses."
          },
          {
            "key": "b",
            "text": "It ensures one can trace back how data was collected and how it influences decision-making."
          },
          {
            "key": "c",
            "text": "It guarantees the system uses minimal computing power and has a low carbon footprint."
          },
          {
            "key": "d",
            "text": "It allows the AI to completely wipe its training period after a set period."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "AI Governance [19:02-19:53]: Traceability ensures that if an AI makes a particular choice, auditors can trace the datasets and processes that led to that specific outcome.",
        "image": null,
        "explanation_image": null,
        "question": "To satisfy the OECD principle of \"accountability,\" AI actors should ensure \"traceability\" throughout the system's lifecycle. What does this specifically help achieve?"
      },
      {
        "id": "w11_q8",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "Failing to identify commonsense reasoning violations within a single prompt."
          },
          {
            "key": "b",
            "text": "Generating factually incorrect statements in response to a factual prompt."
          },
          {
            "key": "c",
            "text": "Utilizing grammatically disparate structures to answer identical prompts."
          },
          {
            "key": "d",
            "text": "Providing semantically disparate answers to semantically equivalent prompts."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Research Overview: SaGE- Quantifying moral consistency in LLMs [2:27-2:52] - Semantic inconsistency is an LLM generating contradictory or different answers when presented with semantically equivalent prompts.",
        "image": null,
        "explanation_image": null,
        "question": "In the SaGE framework, how is semantic inconsistency functionally defined?"
      },
      {
        "id": "w11_q9",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "The model is exhibiting higher semantic consistency."
          },
          {
            "key": "b",
            "text": "The model is exhibiting higher semantic inconsistency."
          },
          {
            "key": "c",
            "text": "The model is exhibiting lower syntactic divergence."
          },
          {
            "key": "d",
            "text": "The model is exhibiting lower fundamental judgment."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Research Overview: SaGE- Quantifying moral consistency in LLMs [15:32-18:43]: Higher graph entropy indicates greater randomness among the generated responses, which means the model's answers are inconsistent.",
        "image": null,
        "explanation_image": null,
        "question": "In the SaGE framework, what does a higher semantic graph entropy indicate about the LLM?"
      },
      {
        "id": "w11_q10",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "The consistency score will improve to near perfection."
          },
          {
            "key": "b",
            "text": "The consistency score will perfectly match human scores."
          },
          {
            "key": "c",
            "text": "The consistency score will drop to near zero."
          },
          {
            "key": "d",
            "text": "The consistency score will remain largely unaffected."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Research Overview: SaGE- Quantifying moral consistency in LLMs [21:52-22:44]: The SaGE study demonstrated that changing the temperature does not significantly alter the model’s consistency.",
        "image": null,
        "explanation_image": null,
        "question": "A developer attempts to reduce an LLM's tendency to give contradictory answers to moral questions by lowering the generation temperature. Based on SaGE, what is the expected outcome?"
      },
      {
        "id": "w11_q11",
        "assignment": 11,
        "week": "Week 11",
        "question_num": 11,
        "options": [
          {
            "key": "a",
            "text": "Accuracy negatively correlates with consistency."
          },
          {
            "key": "b",
            "text": "Accuracy does not correlate with consistency."
          },
          {
            "key": "c",
            "text": "Accuracy strictly correlates with consistency."
          },
          {
            "key": "d",
            "text": "Accuracy conditionally correlates with consistency."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Research Overview: SaGE- Quantifying moral consistency in LLMs [22:45-23:58]: The SaGE study demonstrated that a model's benchmark accuracy does not correlate with its consistency at all.",
        "image": null,
        "explanation_image": null,
        "question": "According to the SaGE framework, how does an LLM's accuracy on standard commonsense reasoning benchmarks correlate with its moral consistency?"
      }
    ]
  },
  {
    "assignment": 12,
    "title": "Assignment 12 (Week 12)",
    "count": 10,
    "questions": [
      {
        "id": "w12_q1",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 1,
        "options": [
          {
            "key": "a",
            "text": "The attribute can only be classified by specific linear probes."
          },
          {
            "key": "b",
            "text": "The attribute requires non-linear transformations to be classified."
          },
          {
            "key": "c",
            "text": "The attribute is heavily emphasized during the initial pre-training process."
          },
          {
            "key": "d",
            "text": "The attribute is entirely impossible to classify based on the representation."
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "An attribute Z is considered guarded if we can't classify along that attribute.",
        "image": null,
        "explanation_image": null,
        "question": "What does a ‘guarded’ attribute mean in a language model’s representation space?"
      },
      {
        "id": "w12_q2",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 2,
        "options": [
          {
            "key": "a",
            "text": "To increase the computational cost of generating toxic content."
          },
          {
            "key": "b",
            "text": "To guard an attribute with the smallest possible change to unrelated semantics."
          },
          {
            "key": "c",
            "text": "To fundamentally alter the underlying vocabulary of the model."
          },
          {
            "key": "d",
            "text": "To completely randomize the vector outputs of specific trigger tokens."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "We want to guard an attribute with the smallest change possible to preserve semantics unrelated to Z.",
        "image": null,
        "explanation_image": null,
        "question": "What is the primary objective of modifying vectors from one distribution (e.g., toxic to non-toxic) to look like another?"
      },
      {
        "id": "w12_q3",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 3,
        "options": [
          {
            "key": "a",
            "text": "It is a no-gradient and cheap way to control model generation."
          },
          {
            "key": "b",
            "text": "It fine-tunes the model to effectively remove bias using minimal training data."
          },
          {
            "key": "c",
            "text": "It is a highly interpretable, gradient-based optimization method."
          },
          {
            "key": "d",
            "text": "It depends heavily on reinforcement learning and human feedback."
          }
        ],
        "correct": [
          "a"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Affine Steering is a no-gradient and cheap way to control generation and to de-bias.",
        "image": null,
        "explanation_image": null,
        "question": "According to the lecture, what is the implication behind using Affine Steering?"
      },
      {
        "id": "w12_q4",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 4,
        "options": [
          {
            "key": "a",
            "text": "It scales inversely with respect to graph size."
          },
          {
            "key": "b",
            "text": "It scales quadratically with respect to graph size."
          },
          {
            "key": "c",
            "text": "It scales logarithmically with respect to graph size."
          },
          {
            "key": "d",
            "text": "It scales linearly with respect to graph size."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "The size of a conventional cell complex will scale quadratically as the size of the graph increases.",
        "image": null,
        "explanation_image": null,
        "question": "How does the size of a conventional cell complex scale as the size of the graph increases?"
      },
      {
        "id": "w12_q5",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 5,
        "options": [
          {
            "key": "a",
            "text": "It removes all nodes that have a high edge degree."
          },
          {
            "key": "b",
            "text": "It processes node features too slowly for a chemical dataset."
          },
          {
            "key": "c",
            "text": "It cannot capture specific multi-node groupwise interactions."
          },
          {
            "key": "d",
            "text": "It assigns zero weight to all the chemical bonds by default."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "A limitation of graphs is that they can only model pairwise relationships between nodes.",
        "image": null,
        "explanation_image": null,
        "question": "In the molecule toxicity detection task, why might a standard Graph Neural Network Explainer fail to identify the correct explanation?"
      },
      {
        "id": "w12_q6",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 6,
        "options": [
          {
            "key": "a",
            "text": "By randomly sampling only 10% of the original graph edges."
          },
          {
            "key": "b",
            "text": "By strategically removing specific types of boundary relations."
          },
          {
            "key": "c",
            "text": "By completely deleting all nodes with a degree higher than a threshold degree."
          },
          {
            "key": "d",
            "text": "By executing the explainer algorithm on highly compressed latent space."
          }
        ],
        "correct": [
          "b"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "By strategically removing specific types of boundary relations, we can bring this down to linear complexity.",
        "image": null,
        "explanation_image": null,
        "question": "How does FORGE reduce the computational complexity of the cell complex to a linear scale?"
      },
      {
        "id": "w12_q7",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 7,
        "options": [
          {
            "key": "a",
            "text": "They are represented as 0-cells."
          },
          {
            "key": "b",
            "text": "They are represented as 1-cells."
          },
          {
            "key": "c",
            "text": "They are represented as 2-cells."
          },
          {
            "key": "d",
            "text": "They are represented as 3-cells."
          }
        ],
        "correct": [
          "c"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Cycles are 2-cells, which are represented as augmented nodes connected to all edges that make up that cycle.",
        "image": null,
        "explanation_image": null,
        "question": "How are cycles structurally represented in the cell complex?"
      },
      {
        "id": "w12_q8",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 8,
        "options": [
          {
            "key": "a",
            "text": "Predicting the next token in a language model"
          },
          {
            "key": "b",
            "text": "Toxicity detection of molecules"
          },
          {
            "key": "c",
            "text": "Affine concept erasure"
          },
          {
            "key": "d",
            "text": "Drug prediction"
          },
          {
            "key": "e",
            "text": "Fraud detection"
          }
        ],
        "correct": [
          "b",
          "d",
          "e"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "Graph explainers are important in toxicity detection of molecules, drug prediction, fraud detection, etc.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following are examples of graph explainers? (Select all that apply.)"
      },
      {
        "id": "w12_q9",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 9,
        "options": [
          {
            "key": "a",
            "text": "Attention-based methods"
          },
          {
            "key": "b",
            "text": "Surrogate-based methods"
          },
          {
            "key": "c",
            "text": "Gradient-based methods"
          },
          {
            "key": "d",
            "text": "Perturbation-based methods"
          }
        ],
        "correct": [
          "d"
        ],
        "type": "single",
        "numerical_answer": null,
        "explanation": "Perturbation-based methods benefit the most from FORGE.",
        "image": null,
        "explanation_image": null,
        "question": "Which of the following methods benefits the most from the FORGE framework?"
      },
      {
        "id": "w12_q10",
        "assignment": 12,
        "week": "Week 12",
        "question_num": 10,
        "options": [
          {
            "key": "a",
            "text": "A -cell corresponds to a vertex, while a -cell corresponds to an edge in 0 1 traditional graphs. (1) 1"
          },
          {
            "key": "c",
            "text": "Vertical boundary relations connect two cells of the same dimension that share a"
          },
          {
            "key": "b",
            "text": "The -skeleton of a cell complex consists exclusively of -dimensional cells. 1 𝑋 common boundary."
          },
          {
            "key": "d",
            "text": "Boundary relations in the framework are restricted to be undirected, meaning . σ𝑐1,𝑐2 = σ𝑐2,𝑐1 (𝑝) (𝑝+ 1) 𝑐 (𝑝+1)"
          },
          {
            "key": "e",
            "text": "A -cell is considered a face or boundary of a -cell if the set of 𝑝 𝑐 (𝑝) 𝑐 (𝑝+1) points composing is a subset of those composing . 𝑐"
          }
        ],
        "correct": [
          "a",
          "d",
          "e"
        ],
        "type": "multiple",
        "numerical_answer": null,
        "explanation": "A - Definition 3.1 (𝑝) 𝑝 meaning both 0- and 1-cells. C - Definition 3.5 states horizontal boundary relations as linking two -cells of the same 𝑝 dimension, whereas vertical boundary relations link cells of different dimensions. D - Definition 3.5 E - Definition 3.2 B - Definition 3.4 states that is a subcomplex of cells of dimension at most , 𝑋",
        "image": null,
        "explanation_image": null,
        "question": "Based on the mathematical definitions of cell complexes presented in the FORGE slides, which of the following statements are correct? (Select all that apply.)"
      }
    ]
  }
];