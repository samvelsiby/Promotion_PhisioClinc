import type { BlogPost } from './sanity'
export interface ClinicArticle extends BlogPost {
  sections: { heading: string; paragraphs: string[] }[]
  sources: { title: string; url: string }[]
  relatedLinks: { label: string; href: string }[]
}
// Organizational editorial content; no clinician authorship or medical review is asserted.
export const clinicArticles: ClinicArticle[] = [
{
  "_id": "clinic-back-pain-sciatica-assessment-winnipeg",
  "slug": "back-pain-sciatica-assessment-winnipeg",
  "title": "Back pain or sciatica? Preparing for a physiotherapy assessment in Winnipeg",
  "excerpt": "What to tell your physiotherapist about back and leg symptoms, what to bring, and which questions to ask about your care and costs.",
  "tag": "Back pain",
  "publishedAt": "2026-09-18",
  "readTime": "4 min read",
  "sections": [
    {
      "heading": "Back pain and sciatica are different descriptions",
      "paragraphs": [
        "Sciatica involves irritation or compression of the sciatic nerve. Symptoms often extend through the buttock and down one leg, sometimes reaching the foot, and may include tingling or numbness. Pain limited to your back is not the same pattern. These descriptions cannot identify the cause of your own symptoms; an assessment is needed.",
        "When arranging an appointment, describe what you feel instead of choosing a diagnosis from a search result. For example, “my lower back hurts after sitting” and “I have pain travelling into my right leg” give reception and your clinician different information."
      ]
    },
    {
      "heading": "Know when a routine appointment is not the next step",
      "paragraphs": [
        "Seek emergency medical care if back or leg symptoms occur with new bladder or bowel control problems, difficulty urinating, numbness around the genitals or bottom, or severe or worsening weakness or numbness in both legs. Do not wait for a physiotherapy booking. This is not an exhaustive checklist; seek medical advice if you are concerned about new or worsening symptoms."
      ]
    },
    {
      "heading": "Make a short note before you arrive",
      "paragraphs": [
        "Write down when the symptoms started, where you feel them and what has changed since they began. Include previous episodes, any injury or surgery, and medical advice you have already received. Bring relevant reports or instructions you already have; ask reception if you are unsure what documents are needed.",
        "Choose two or three everyday examples you want to discuss. Perhaps standing to prepare a meal is difficult, driving is uncomfortable or you have stopped an activity you enjoy. Note roughly how long you can do the task and what makes it harder. You do not need technical language or a perfect symptom diary."
      ]
    },
    {
      "heading": "Questions that make the assessment useful",
      "paragraphs": [
        "Ask what the assessment suggests and whether another type of medical assessment is needed. Ask which options are appropriate for you, what each involves and how your preferences can be included. You can ask for any explanation to be repeated in plain language.",
        "Before leaving, clarify the agreed next step: what to do between visits, how to raise a question, and how progress will be checked. If an exercise is recommended, ask how to do it and what changes should prompt you to contact the clinician. A general article cannot choose an exercise programme for your individual circumstances.",
        "A practical goal gives follow-up visits a purpose. Instead of asking only how many sessions you need, ask what you are working towards and when the plan will be reviewed. Your assessment and response guide those decisions; this article does not promise a treatment count or recovery date."
      ]
    },
    {
      "heading": "Confirm fees and insurance before the visit",
      "paragraphs": [
        "Ask reception for the current assessment fee and follow-up fee. Check your benefit plan for referral requirements, annual limits and per-visit reimbursement. Direct billing is a way to submit an eligible claim, not a guarantee that your insurer pays the whole fee.",
        "If your symptoms followed a workplace injury or motor vehicle collision, mention this when booking and have any WCB or MPI claim details available. Confirm the payment arrangements before attending, particularly if approval is still pending."
      ]
    },
    {
      "heading": "Book a back-pain assessment in St. Vital",
      "paragraphs": [
        "Pro Motion Physiotherapy is at Unit 4, 567 St. Anne’s Road, in the Meadowood neighbourhood of St. Vital, Winnipeg. Our back pain and sciatica service page explains the care available, and our first-visit guide covers appointment preparation.",
        "Call (204) 560-2999 if you need help selecting an appointment or want to ask about fees or access. You can also use the clinic’s online booking portal to view available appointments. Tell reception about any assistance or communication arrangements you need before your visit."
      ]
    }
  ],
  "sources": [
    {
      "title": "NHS: sciatica symptoms and when to seek urgent help",
      "url": "https://www.nhs.uk/conditions/sciatica/"
    }
  ],
  "relatedLinks": [
    {
      "label": "Back pain and sciatica physiotherapy in Winnipeg",
      "href": "/services/back-pain-sciatica-relief"
    },
    {
      "label": "Prepare for your first appointment",
      "href": "/first-visit"
    },
    {
      "label": "Insurance and direct billing",
      "href": "/insurance"
    }
  ]
},
  {
    "_id": "clinic-physiotherapy-referral-winnipeg",
    "slug": "physiotherapy-referral-winnipeg",
    "title": "Do you need a referral for physiotherapy in Winnipeg?",
    "excerpt": "Understand the difference between booking a physiotherapy assessment and meeting your insurer’s reimbursement requirements.",
    "tag": "Getting started",
    "publishedAt": "2026-09-12",
    "readTime": "3 min read",
    "sections": [
      {
        "heading": "Booking and insurance are different questions",
        "paragraphs": [
          "You can contact Pro Motion Physiotherapy to book an assessment without a doctor’s referral. If you are using extended health benefits, check whether your particular plan requires a referral before it will reimburse treatment. Being able to book and being eligible for payment are separate questions.",
          "This distinction is useful when you are arranging an appointment around work, school or family commitments. Ask about the appointment first, then confirm your payment arrangements before the visit. You do not need to guess which treatment to select: describe what you want help with when you call."
        ]
      },
      {
        "heading": "What to ask your insurer",
        "paragraphs": [
          "Ask whether physiotherapy is included, whether a referral is needed, and whether there is a limit per visit or per benefit year. Confirm whether the plan allows payment directly to the clinic. If you have already attended another clinic this year, ask about your remaining balance.",
          "A useful question is: “Does my physiotherapy benefit require a physician referral, and what information does the referral need to include?” Keep the answer and any reference number with your benefit documents. An insurer’s website may describe several plans, so confirm the terms of your own plan."
        ]
      },
      {
        "heading": "If the appointment involves MPI, WCB or surgery",
        "paragraphs": [
          "Tell reception if your concern follows a motor vehicle collision or a workplace injury. These visits may involve a claim number, insurer authorization and different billing arrangements. An appointment booking does not confirm that an insurer has accepted your claim.",
          "If you have recently had surgery, bring your discharge instructions and any rehabilitation guidance from your surgical team. A referral is useful clinical information even when it is not required simply to contact the clinic."
        ]
      },
      {
        "heading": "Book a first assessment in St. Vital",
        "paragraphs": [
          "Pro Motion is at Unit 4, 567 St. Anne’s Road, Winnipeg. Bring your insurance information, any referral you already have, and relevant claim details. Our first-visit page explains what to prepare.",
          "If you are unsure whether the clinic provides the care you need, call (204) 560-2999 before booking. Explain the service you are looking for and any accessibility or communication needs. This helps reception arrange a suitable next step."
        ]
      }
    ],
    "sources": [
      {
        "title": "Pro Motion: appointment and referral information",
        "url": "https://www.promotionphysiotherapy.ca/#faq"
      }
    ],
    "relatedLinks": [
      {
        "label": "Prepare for your first visit",
        "href": "/first-visit"
      },
      {
        "label": "Insurance and direct billing",
        "href": "/insurance"
      }
    ]
  },
  {
    "_id": "clinic-direct-billing-physiotherapy-winnipeg",
    "slug": "direct-billing-physiotherapy-winnipeg",
    "title": "Direct billing physiotherapy in Winnipeg: questions to ask before you book",
    "excerpt": "What direct billing means, what to bring, and how to check your plan without assuming every visit is fully covered.",
    "tag": "Insurance",
    "publishedAt": "2026-09-12",
    "readTime": "3 min read",
    "sections": [
      {
        "heading": "What direct billing means",
        "paragraphs": [
          "Direct billing lets a clinic submit an eligible claim to your insurer. It does not establish that you have coverage, that the insurer will approve the claim, or that the full appointment fee will be paid. Ask about the clinic fee and the amount you may need to pay yourself.",
          "Pro Motion lists the providers it works with on its insurance page. If your insurer is listed, your specific plan still determines eligibility. If your insurer is not listed, reception can discuss the available payment arrangements."
        ]
      },
      {
        "heading": "A checklist for your benefits call",
        "paragraphs": [
          "Check your annual physiotherapy allowance, any per-visit maximum, referral requirements and whether direct payment is allowed. Ask when the benefit year resets; it may not match the calendar year.",
          "If you are covered under more than one plan, ask each insurer how claims should be coordinated. Do not assume that a second plan will automatically pay every amount left by the first. Confirm the process before relying on combined benefits."
        ]
      },
      {
        "heading": "Bring the information needed for the claim",
        "paragraphs": [
          "Bring your benefit card or the plan information requested by reception, including the policy and member identifiers. Tell the clinic if the policy is held by a spouse or another family member. Avoid sending benefit identifiers through social media or public comments.",
          "Ask how payment will work if the insurer cannot process the claim at the time of your appointment. Keep receipts and benefit statements so you can check what was paid and what remains available."
        ]
      },
      {
        "heading": "Manitoba funding is a separate issue",
        "paragraphs": [
          "Routine private-clinic physiotherapy is generally paid through private benefits or directly by the patient. Manitoba also publishes a program for eligible elective hip and knee replacement rehabilitation. Ask about current eligibility and the clinic’s participation; do not assume every private appointment is publicly funded or that no exceptions exist."
        ]
      },
      {
        "heading": "Decide based on your care needs",
        "paragraphs": [
          "A benefit balance is information for planning, not a reason to book treatment you do not need. Ask your physiotherapist how progress will be assessed and when the plan should be reviewed.",
          "For an appointment at our St. Vital clinic, review the provider list and call (204) 560-2999 with billing questions. For MPI or WCB, identify the claim type when you book because those arrangements are separate from ordinary extended health benefits."
        ]
      }
    ],
    "sources": [
      {
        "title": "Pro Motion: insurance providers",
        "url": "https://www.promotionphysiotherapy.ca/insurance"
      },
      {
        "title": "Manitoba: post-operative physiotherapy program FAQ",
        "url": "https://www.gov.mb.ca/health/dsrecovery/docs/post-op-surgery-faq.pdf"
      }
    ],
    "relatedLinks": [
      {
        "label": "View insurance providers",
        "href": "/insurance"
      },
      {
        "label": "First-visit checklist",
        "href": "/first-visit"
      },
      {
        "label": "Post-surgical rehabilitation",
        "href": "/services/pre-post-surgical-conditions"
      }
    ]
  },
  {
    "_id": "clinic-mpi-physiotherapy-claims-winnipeg",
    "slug": "mpi-physiotherapy-claims-winnipeg",
    "title": "MPI physiotherapy in Winnipeg: preparing for your first appointment",
    "excerpt": "A practical checklist for claim details, appointment preparation and questions about MPI billing after a collision.",
    "tag": "MPI",
    "publishedAt": "2026-09-12",
    "readTime": "3 min read",
    "sections": [
      {
        "heading": "Start with your claim information",
        "paragraphs": [
          "If you are arranging physiotherapy after a collision, tell reception that the appointment may involve Manitoba Public Insurance. Keep your claim number, collision date and case manager’s contact information available. If a claim is still being opened, explain that rather than assuming treatment has already been approved.",
          "MPI’s physiotherapy information describes a process for providers to confirm PIPP coverage. Booking an appointment is not the same as receiving confirmation of payment. Ask the clinic which details it needs to check your file."
        ]
      },
      {
        "heading": "Prepare a short account of what has changed",
        "paragraphs": [
          "Before the visit, make a note of the activities you are finding difficult and the questions you want answered. Useful examples include turning your head while driving, sitting through a work shift or getting dressed. You do not need to diagnose the injury yourself.",
          "Bring relevant discharge instructions or existing medical notes if you have them. Tell your physiotherapist about other treatment you are receiving so that care can be discussed in context. A blog cannot determine whether your symptoms are safe to manage in a routine appointment; if you need urgent medical help, seek it instead of waiting for a booking."
        ]
      },
      {
        "heading": "Clarify billing before treatment begins",
        "paragraphs": [
          "Ask whether coverage has been confirmed, whether anything needs authorization and whether you could owe any amount yourself. Keep your own record of appointment dates and any correspondence about payment.",
          "If your circumstances change, tell reception and your case manager. Do not rely on another person’s approved visits as a guide to your own entitlement. The relevant information is the decision for your file."
        ]
      },
      {
        "heading": "Questions for your physiotherapist",
        "paragraphs": [
          "Ask what the assessment found, which activities to discuss further, and how your plan will be reviewed. If you need documentation for work, describe your actual duties and ask what information can appropriately be shared.",
          "A useful follow-up question is: “What would make you change the plan or recommend another assessment?” This keeps the conversation focused on your recovery rather than on an assumed number of visits."
        ]
      },
      {
        "heading": "Arranging a visit at Pro Motion",
        "paragraphs": [
          "Our clinic is at Unit 4, 567 St. Anne’s Road in Winnipeg. Tell reception that the visit concerns a collision and bring the claim details you have. Call (204) 560-2999 if you are unsure which appointment to select.",
          "Read our motor vehicle accident recovery page for the service information and our first-visit page for a practical preparation checklist. MPI’s own resources remain the source for coverage decisions and claim requirements."
        ]
      }
    ],
    "sources": [
      {
        "title": "MPI: physiotherapy provider information",
        "url": "https://apps.mpi.mb.ca/HealthCare/Physiotherapy.html"
      },
      {
        "title": "MPI: injury rehabilitation",
        "url": "https://www.mpi.mb.ca/injury-rehabilitation/"
      }
    ],
    "relatedLinks": [
      {
        "label": "Motor vehicle accident recovery",
        "href": "/services/motor-vehicle-accident-recovery"
      },
      {
        "label": "Prepare for your visit",
        "href": "/first-visit"
      }
    ]
  },
  {
    "_id": "clinic-wcb-physiotherapy-winnipeg",
    "slug": "wcb-physiotherapy-winnipeg",
    "title": "WCB physiotherapy in Winnipeg: preparing for a work-injury assessment",
    "excerpt": "What to bring, how to describe your work demands, and which questions to ask about claim approval and return to work.",
    "tag": "WCB",
    "publishedAt": "2026-09-12",
    "readTime": "3 min read",
    "sections": [
      {
        "heading": "Tell the clinic this is a work-related concern",
        "paragraphs": [
          "When arranging an appointment, explain that your concern is connected to work and whether you already have a Workers Compensation Board of Manitoba claim. Bring the claim number if available, the date of injury and the contact details you have been given.",
          "If your claim is pending, ask how the appointment and payment would be handled. The clinic cannot promise that a claim will be accepted simply because you have booked a physiotherapy visit."
        ]
      },
      {
        "heading": "Describe the job in practical terms",
        "paragraphs": [
          "A job title alone may not explain what your day requires. Write down tasks such as lifting, carrying, working overhead, driving, using tools or staying at a desk. Include the frequency and approximate duration of tasks when you know them.",
          "Bring any existing work restrictions or modified-duty information. Note the tasks that concern you and questions you would like to discuss. You can describe a task as difficult without deciding what diagnosis explains it."
        ]
      },
      {
        "heading": "Ask about a suitable return-to-work plan",
        "paragraphs": [
          "WCB describes return to work as a plan that takes account of a worker’s abilities after injury. Its case manager or adjudicator monitors the plan and authorizes ongoing treatment as needed. Ask who is coordinating your file and how changes should be communicated.",
          "Discuss what information the clinic needs from you and what information may be shared with WCB or other parties. If you are uncertain about a form or consent request, ask for an explanation before signing."
        ]
      },
      {
        "heading": "Keep the administrative questions together",
        "paragraphs": [
          "Useful questions include: Has treatment been authorized? What do I need to bring next time? Who should I contact if duties change? How will I be told if the payment arrangements change?",
          "Keep copies of the documents you are given. If you have a disagreement about a claim decision, ask WCB about the appropriate review process. This article explains appointment preparation; it does not determine claim entitlement or employment rights."
        ]
      },
      {
        "heading": "Book in St. Vital",
        "paragraphs": [
          "Pro Motion Physiotherapy is on St. Anne’s Road in Winnipeg. Reception can help you identify the appointment type and the claim information to prepare. Call (204) 560-2999 with questions before booking.",
          "Our work-injury page explains the service, and our first-visit checklist covers clothing and general preparation. Bring existing clinical instructions and explain your goals so your assessment can focus on the demands that matter to you."
        ]
      }
    ],
    "sources": [
      {
        "title": "WCB Manitoba: return to work for workers",
        "url": "https://www.wcb.mb.ca/workers/return-to-work/"
      }
    ],
    "relatedLinks": [
      {
        "label": "Work-injury physiotherapy",
        "href": "/services/work-injuries"
      },
      {
        "label": "First-visit checklist",
        "href": "/first-visit"
      }
    ]
  },
  {
    "_id": "clinic-choosing-physiotherapy-st-vital",
    "slug": "choosing-physiotherapy-st-vital",
    "title": "Choosing a physiotherapy clinic in St. Vital: a practical checklist",
    "excerpt": "Compare services, registration, appointment arrangements and access when choosing a Winnipeg physiotherapy clinic.",
    "tag": "St. Vital",
    "publishedAt": "2026-09-12",
    "readTime": "3 min read",
    "sections": [
      {
        "heading": "Start with the care you are looking for",
        "paragraphs": [
          "Write down the main reason you are seeking an appointment and the activities you want help with. Then ask whether the clinic offers the appropriate service and which provider would be suitable. A long list of treatments on a website is less useful than a clear answer about your needs.",
          "If you are looking for a specific type of care, such as rehabilitation after surgery, ask what information the clinician needs before your appointment. Do not assume every physiotherapist offers every service listed elsewhere online."
        ]
      },
      {
        "heading": "Check registration and provider information",
        "paragraphs": [
          "The College of Physiotherapists of Manitoba provides public resources for finding physiotherapists and clinics. Use those resources alongside a clinic’s own team information. A directory entry is a way to check details; it is not a guarantee of an individual result.",
          "Read the clinician’s profile for relevant training and experience, then ask about anything that is unclear. Look for specific information rather than relying on words such as “best” or on a promised recovery time."
        ]
      },
      {
        "heading": "Consider how the appointment fits your day",
        "paragraphs": [
          "Check the actual clinic address, appointment hours and the travel arrangements that work for you. For a clinic in St. Vital, consider where you will be coming from rather than assuming that every south Winnipeg neighbourhood has the same journey.",
          "If you need step-free access, assistance with entry, a particular communication arrangement or space for a support person, call before the visit. A parking statement alone does not answer every accessibility question."
        ]
      },
      {
        "heading": "Compare the payment arrangements",
        "paragraphs": [
          "Ask about the initial assessment fee, the expected appointment length, follow-up fees and cancellation terms. If using benefits, confirm referral requirements and reimbursement limits with your insurer.",
          "Direct billing can be convenient, but it should not be interpreted as full coverage. For a workplace injury or collision, ask what claim details and authorization are needed before deciding how to proceed."
        ]
      },
      {
        "heading": "Questions to bring to your first assessment",
        "paragraphs": [
          "Ask what the assessment is intended to clarify, how treatment decisions will be discussed and how progress will be reviewed. You should be able to ask about the options and explain your preferences.",
          "Pro Motion Physiotherapy is at Unit 4, 567 St. Anne’s Road, Winnipeg. Our team, service and first-visit pages provide a starting point. Call (204) 560-2999 if you would like to check whether we offer the care you are looking for."
        ]
      }
    ],
    "sources": [
      {
        "title": "College of Physiotherapists of Manitoba: public resources",
        "url": "https://manitobaphysio.com/for-the-public/"
      },
      {
        "title": "College: find a clinic",
        "url": "https://manitobaphysio.com/for-the-public/find-a-clinic/"
      }
    ],
    "relatedLinks": [
      {
        "label": "Meet the team",
        "href": "/team"
      },
      {
        "label": "Explore treatment services",
        "href": "/what-we-treat"
      },
      {
        "label": "Plan your first visit",
        "href": "/first-visit"
      }
    ]
  },
  {
    "_id": "clinic-questions-first-physiotherapy-assessment",
    "slug": "questions-first-physiotherapy-assessment",
    "title": "Seven questions to ask at your first physiotherapy assessment",
    "excerpt": "Use these questions to discuss your goals, treatment options, follow-up plan and costs at your first physiotherapy visit.",
    "tag": "Getting started",
    "publishedAt": "2026-09-12",
    "readTime": "3 min read",
    "sections": [
      {
        "heading": "1. What are we trying to understand today?",
        "paragraphs": [
          "Explain what brought you in and ask what the assessment will explore. Describe the tasks or activities you want to return to. Bring any existing clinical instructions so the physiotherapist can consider them."
        ]
      },
      {
        "heading": "2. What are my options?",
        "paragraphs": [
          "Ask which options are appropriate, what each involves and what alternatives you can discuss. Tell the physiotherapist about preferences, concerns and practical limits. You can ask for an explanation in plain language."
        ]
      },
      {
        "heading": "3. What should I do between visits?",
        "paragraphs": [
          "Ask for instructions you can follow and clarify anything that is uncertain before you leave. If an activity or exercise is discussed, ask how it should be adapted to your circumstances and how to raise questions later. A general online exercise list cannot replace that conversation."
        ]
      },
      {
        "heading": "4. How will we check progress?",
        "paragraphs": [
          "Talk about a goal that matters in daily life. Ask how it will be reviewed and when you should discuss a change to the plan. This gives follow-up appointments a purpose beyond simply repeating the last visit."
        ]
      },
      {
        "heading": "5. When should I contact you or another provider?",
        "paragraphs": [
          "Ask what changes should prompt contact with the clinic and what would require another type of assessment. If you are unsure about advice you have received elsewhere, mention it so the information can be considered together."
        ]
      },
      {
        "heading": "6. What are the costs and billing arrangements?",
        "paragraphs": [
          "Ask about assessment and follow-up fees, direct billing and any amount you may need to pay yourself. If your appointment involves insurance, MPI or WCB, bring the relevant details and confirm how payment will be handled."
        ]
      },
      {
        "heading": "7. What is the next step?",
        "paragraphs": [
          "Before leaving, check that you understand the agreed plan and how to get clarification. Ask whether another visit is recommended and what that visit would review. The number and timing of appointments should reflect your individual situation.",
          "At Pro Motion, you can prepare by reading our first-visit checklist and bringing your questions to the assessment. Our clinic is at Unit 4, 567 St. Anne’s Road in Winnipeg; call (204) 560-2999 for appointment arrangements."
        ]
      }
    ],
    "sources": [
      {
        "title": "Pro Motion: first-appointment information",
        "url": "https://www.promotionphysiotherapy.ca/#faq"
      }
    ],
    "relatedLinks": [
      {
        "label": "First-visit checklist",
        "href": "/first-visit"
      },
      {
        "label": "How we treat",
        "href": "/how-we-treat"
      },
      {
        "label": "Insurance questions",
        "href": "/insurance"
      }
    ]
  }
]
