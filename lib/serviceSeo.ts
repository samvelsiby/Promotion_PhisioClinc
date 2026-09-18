export function getConditionName(title: string): string {
  const map: Record<string, string> = {
    'TMJ Dysfunction': 'TMJ Dysfunction',
    'Neck Pain Relief': 'Neck Pain',
    'Shoulder Pain Relief': 'Shoulder Pain',
    'Elbow, Wrist & Hand Pain Relief': 'Elbow, Wrist & Hand Pain',
    'Back Pain & Sciatica Relief': 'Back Pain & Sciatica',
    'Hip & Knee Pain Relief': 'Hip & Knee Pain',
    'Foot & Ankle Pain Relief': 'Foot & Ankle Pain',
    'Chronic Pain Relief': 'Chronic Pain',
    'Arthritis Pain Relief': 'Arthritis',
    'Sports Injuries': 'Sports Injury',
    'Work Injuries, WCB & Work Related Injury': 'WCB & Work Injury',
    'Motor Vehicle Accident Injuries (MPI)': 'MPI & Motor Vehicle Accident',
    'Pre & Post-Surgical Rehabilitation': 'Pre & Post-Surgical',
    'Home Accessibility Assessments': 'Home Accessibility',
    'Mobility & Adaptive Equipment': 'Mobility & Adaptive Equipment',
    'Wheelchair Seating & Positioning': 'Wheelchair Seating',
    'Pressure Management': 'Pressure Management',
    'Fall Prevention': 'Fall Prevention',
  }

  return map[title] ?? title.replace(/ Relief$/, '')
}

export function getServiceSeoTitle(title: string): string {
  return `${getConditionName(title)} Physiotherapy in Winnipeg | Pro Motion`
}

export function getServiceH1(title: string): string {
  return `${getConditionName(title)} Physiotherapy in Winnipeg`
}

/** Page-specific summaries describe the appointment rather than promising results. */
export function getServiceSeoDescription(slug: string, fallback: string): string {
  const descriptions: Record<string, string> = {
    'back-pain-sciatica-relief': 'Back pain and sciatica physiotherapy in St. Vital, Winnipeg. Discuss symptoms, movement and a care plan at Pro Motion on St. Anne’s Road. Book an assessment.',
    'motor-vehicle-accident-recovery': 'Physiotherapy after a motor vehicle accident in Winnipeg. Arrange an assessment at Pro Motion in St. Vital and ask about MPI claim and billing requirements.',
    'work-injuries': 'Work-injury physiotherapy in St. Vital, Winnipeg. Discuss your job demands, rehabilitation goals and WCB billing arrangements with Pro Motion. Book an assessment.',
  }
  return descriptions[slug] ?? fallback
}
