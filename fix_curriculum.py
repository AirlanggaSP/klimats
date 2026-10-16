import re
import json

with open('data/curriculum.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find all calcFn blocks and replace them with calcId.
# This is tricky with regex because of nested braces.
# However, since the patterns are consistent: calcFn: (inputs) => { ... },
# we can try to capture them.

# Since I know the logic from the grep, I can create a mapping of logic to IDs.
# Actually, I'll just search for 'calcFn: (inputs) => {' and match until the closing '},'
# and replace it with 'calcId: "calc_id_N",'.

# But it's better to preserve the logic for the registry.
# I'll use a simpler approach: I'll find all occurrences of 'calcFn' 
# and replace the function definition with a unique ID.
# I will then manually (via the agent) create the registry based on the grep results.

count = 0
def replace_calc(match):
    global count
    count += 1
    return f'calcId: "calc_{count}",'

# This regex is a bit naive but works if the functions are on one line or simple.
# Let's try a more robust one that handles the block.
# We search for calcFn: (inputs) => { ... }
# We match everything from 'calcFn:' until the first '},' that is followed by a newline or closing brace.
pattern = r'calcFn:\s*\(\s*inputs\s*\)\s*=>\s*\{.*?\},\s*(?=\s*inputs:|\s*})'
# Wait, the curriculum.ts has it as:
# calcFn: (inputs) => { ... },
# inputs: [ ... ]

# Let's try to match the function and the trailing comma.
# Since the functions can span multiple lines, we use re.DOTALL.
pattern = r'calcFn:\s*\(\s*inputs\s*\)\s*=>\s*\{.*?\},\s*(?=\s*inputs:|\s*})'
# Actually, looking at the grep:
# calcFn: (inputs) => {
#   const diff = ...
#   return { ... };
# },

# Correct regex for the function block
pattern = r'calcFn:\s*\(\s*inputs\s*\)\s*=>\s*\{[\s\S]*?\},\s*(?=\s*inputs:|\s*})'

new_content = re.sub(pattern, replace_calc, content)

with open('data/curriculum.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Replaced {count} calcFn with calcId.")
