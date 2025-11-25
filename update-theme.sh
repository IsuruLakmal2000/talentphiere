#!/bin/bash
# Script to update CSS files to use theme variables

echo "🎨 Converting CSS files to use centralized theme variables..."

# Update HireProcess.css
sed -i '' 's/background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);/background: var(--gradient-card);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/background: linear-gradient(90deg, #10b981 0%, #14b8a6 100%);/background: var(--gradient-top-accent);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/background: linear-gradient(135deg, #10b981 0%, #059669 100%);/background: var(--gradient-primary);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);/box-shadow: var(--shadow-md);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/color: #1e293b;/color: var(--text-primary);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/color: #475569;/color: var(--text-secondary);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/color: #334155;/color: var(--text-secondary);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/background: rgba(59, 130, 246, 0.04);/background: var(--overlay-primary-light);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/background: rgba(59, 130, 246, 0.08);/background: var(--overlay-primary-medium);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/border: 1px solid rgba(59, 130, 246, 0.08);/border: 1px solid var(--border-primary);/g' src/screens/HowWeHire/Process/HireProcess.css
sed -i '' 's/border-color: rgba(59, 130, 246, 0.15);/border-color: var(--border-primary);/g' src/screens/HowWeHire/Process/HireProcess.css

# Update TalentCategory.css
sed -i '' 's/background: linear-gradient(135deg, #f5f7fa 0%, #e8f0f9 100%);/background: var(--gradient-bg-light);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);/background: var(--gradient-card);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);/background: var(--gradient-primary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/background: linear-gradient(135deg, #10b981 0%, #059669 100%);/background: var(--gradient-primary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);/background: var(--gradient-top-accent);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/background: linear-gradient(90deg, #10b981 0%, #14b8a6 100%);/background: var(--gradient-top-accent);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/color: #1a2332;/color: var(--text-primary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/color: #5a6c7d;/color: var(--text-secondary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/color: #1e293b;/color: var(--text-primary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/color: #475569;/color: var(--text-secondary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/color: #334155;/color: var(--text-secondary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/color: #64748b;/color: var(--text-tertiary);/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/#3b82f6/var(--primary)/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/rgba(59, 130, 246, 0.04)/var(--overlay-primary-light)/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/rgba(59, 130, 246, 0.08)/var(--overlay-primary-medium)/g' src/screens/Pricing/TalentCategory/TalentCategory.css
sed -i '' 's/rgba(226, 232, 240, 0.8)/var(--border-light)/g' src/screens/Pricing/TalentCategory/TalentCategory.css

echo "✅ CSS files updated successfully!"
echo "📝 All color values now reference theme variables from src/styles/theme.css"
echo "💡 To change themes, simply edit src/styles/theme.css"
