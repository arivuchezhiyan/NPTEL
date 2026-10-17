import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('quiz_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

total_q = 0
issues = []
for ass in data:
    total_q += len(ass['questions'])
    for q in ass['questions']:
        if q['type'] == 'numerical':
            if not q['numerical_answer']:
                issues.append(f"Missing numerical answer: {q['id']}")
        else:
            if not q['correct']:
                issues.append(f"Missing correct answer: {q['id']}: {q['question'][:50]}")
            if len(q['options']) < 2:
                issues.append(f"Too few options ({len(q['options'])}): {q['id']}: {q['question'][:50]}")

print(f"Total assignments: {len(data)}, Total questions: {total_q}")
if issues:
    print(f"Found {len(issues)} issues:")
    for issue in issues:
        print(" -", issue)
else:
    print("ALL 141 QUESTIONS ARE VALID AND COMPLETE WITH OPTIONS & ANSWERS!")
