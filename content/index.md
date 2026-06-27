---
title: المركز الرئيسي
---

# 🌐 المركز الرئيسي | Command Center

هذه المساحة هي توثيق مستمر (Digital Garden) لمسارات التعلم، البحث، وهندسة الأنظمة. تعتمد المنهجية هنا على التفكيك إلى المبادئ الأولى (First Principles) والبناء المعماري الرصين.

---

<div class="dashboard-grid">

  <!-- بطاقة العلوم الإسلامية -->
  <div class="dash-card">
    <h3>🕌 العلوم الإسلامية</h3>
    <p>تأصيل منهجي، دراسة العقيدة، الفقه، والعلوم الشرعية بناءً على الفهم الصحيح.</p>
    <a href="./01_العلوم-الإسلامية/" class="card-link">استكشف القسم ➔</a>
  </div>

  <!-- بطاقة الأمن السيبراني والأنظمة -->
  <div class="dash-card">
    <h3>🛡️ Cyber-valley</h3>
    <p>أبحاث في الأمن السيبراني الهجومي (Offensive Security)، هندسة أنظمة لينكس، والمعمارية.</p>
    <a href="./02_Cyper-valley/" class="card-link">استكشف القسم ➔</a>
  </div>

</div>

<!-- التنسيق الهندسي للوحة التحكم (CSS) -->
<style>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.dash-card {
  border: 1px solid var(--lightgray);
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--light);
  transition: transform 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
}

.dash-card:hover {
  transform: translateY(-5px);
  border-color: var(--tertiary);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.dash-card h3 {
  margin-top: 0;
  color: var(--secondary);
  font-size: 1.3rem;
  border-bottom: none;
}

.dash-card p {
  flex-grow: 1;
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.6;
}

.card-link {
  margin-top: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: var(--tertiary);
  align-self: flex-start;
}

.card-link:hover {
  text-decoration: underline;
}
</style>
