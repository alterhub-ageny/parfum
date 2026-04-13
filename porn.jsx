/* Base Styles & Dark Theme */
:root {
  --bg-color: #0f0f0f;
  --surface-color: #1a1a1a;
  --primary-color: #ff9000; /* Standard industry accent color */
  --text-main: #ffffff;
  --text-muted: #aaaaaa;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  overflow-x: hidden;
}

* {
  box-sizing: inherit;
}

/* Age Verification Overlay */
.age-gate-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background-color: var(--surface-color);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  border-top: 4px solid var(--primary-color);
}

.modal h1 {
  margin: 0 0 15px 0;
  font-size: 28px;
}

.modal p {
  color: var(--text-muted);
  margin-bottom: 25px;
  line-height: 1.5;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
  transition: background 0.2s;
}

.btn-enter {
  background-color: var(--primary-color);
  color: #000;
}

.btn-enter:hover {
  background-color: #e07d00;
}

.btn-exit {
  background-color: #333;
  color: var(--text-main);
}

.btn-exit:hover {
  background-color: #444;
}

/* Header / Navbar */
.site-header {
  background-color: var(--surface-color);
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}

.logo {
  font-size: 24px;
  font-weight: 900;
  color: var(--text-main);
}

.logo span {
  color: var(--primary-color);
}

.site-nav a {
  color: var(--text-main);
  text-decoration: none;
  margin-left: 20px;
  font-weight: 500;
  transition: color 0.2s;
}

.site-nav a:hover {
  color: var(--primary-color);
}

/* Main Content Grid */
.main-content {
  padding: 30px 5%;
}

.main-content h2 {
  margin: 0 0 20px 0;
  font-size: 22px;
  border-left: 4px solid var(--primary-color);
  padding-left: 10px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: var(--surface-color);
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.thumbnail {
  width: 100%;
  height: 150px;
  background-color: #2a2a2a;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 8px;
}

.duration {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3px 6px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

.info {
  padding: 12px;
}

.info h3 {
  font-size: 14px;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info p {
  margin: 0;
  font-size: 12px;
  color: var(--text-muted);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .site-header {
      flex-direction: column;
      gap: 15px;
  }
  .site-nav a {
      margin: 0 10px;
  }
}
