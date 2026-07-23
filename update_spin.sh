sed -i 's/animate={{ rotateY: \[180, 0\] }}/animate={{ rotateY: [0, 360] }}/g' src/components/Hero.tsx
sed -i 's/transition={{ duration: 1.5, ease: "easeOut" }}/transition={{ duration: 8, ease: "linear", repeat: Infinity }}/g' src/components/Hero.tsx
