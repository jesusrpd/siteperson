    // ---------------- Data ----------------
    const projects = [
      { title: 'The EloteCo', desc: 'Web dashboard for precision agriculture using satellite data and telemetry.', tags:['Next.js','Node.js','ReactJs'], thumb: './img/theeloteco.png', year: '2025', href: "https://theeloteco.com", repositorie: "https://github.com/jesusrpd/theeloteco" },
      { title: 'Karggu', desc: 'Data acquisition and visualization for pico-satellite prototypes.', tags:['AngularJS','MongoDB','NodeJS'], thumb: './img/karggu.png', year: '2024', href: "https://karggu.com/", repositorie: "https://github.com/jesusrpd/BlueJaysLoanding" },
      { title: '', desc: 'Responsive online store with payment gateway and inventory dashboard.', tags:['React','Tailwind','MongoDB'], thumb: projectThumbSvg('E-commerce'), year: '2023', href: "", repositorie: "" },
    ];

    const projects2 = [
      { title: 'CanSat Competition 2024', desc: 'Web dashboard for precision agriculture using satellite data and telemetry.', tags:['CatiaV5', 'Hyperworks', 'Inspire'], thumb: './img/Nemesis.jpg', year: '2025', href: "https://cansatcompetition.com/mission.html", repositorie: "https://github.com/jesusrpd/theeloteco" },
      { title: 'Tren planetario', desc: 'Data acquisition and visualization for pico-satellite prototypes.', tags:['Python','Flask','WebSockets'], thumb: './img/planetario.jpg', year: '2024', href: "https://drive.google.com/drive/u/1/folders/1ijUotf1NrgWO4qkczu6chF2qELIJFGSn", repositorie: "https://drive.google.com/drive/u/1/folders/1ijUotf1NrgWO4qkczu6chF2qELIJFGSn" },
      { title: 'Altair Global Student', desc: 'Responsive online store with payment gateway and inventory dashboard.', tags:['React','Tailwind','MongoDB'], thumb: './img/altair.png', year: '2023', href: "https://web.altair.com/global-student-contest-winners-2023-24", repositorie: "" },
    ];

    const skills = [
      { name: 'Frontend with React JS', pct: 85 },
      { name: 'JavaScript / React', pct: 88 },
      { name: 'Python / Backend', pct: 80 },
      { name: 'FEA & Simulation', pct: 50 },
      { name: 'DevOps / Deployment', pct: 60 },
    ];

    const tools = ['Excel','JavaScript','Python','Nextjs','Nodejs','Graphql', 'FastAPI','MongoDB','SQL', 'Pandas', 'Reactjs'];

    const career = [
      { title: 'Becario ingeniería — GEMA MX', date: '2024 - Actualidad', desc: 'Desarrollo de proyectos para diversos clientes, abarcando desde el diseño en SolidWorks hasta la elaboración de planos de fabricación de equipos, principalmente construidos en chapa metálica y estructuras con distintos tipos de perfiles. Asimismo, realizo planos de homologación en AutoCAD para la aprobación del cliente.' },
      { title: 'Desarrollador web full stack — Karggu & PackandPack', date: '2022 - 2023', desc: 'Desarrollo de nuevas funcionalidades para la plataforma, mantenimiento e implantación de nuevos sistemas web en función de las necesidades de los clientes de la empresa. Además de gestionar tareas, planificar y asignar funciones al resto del equipo, así como formar a nuevos miembros del equipo si fuera necesario.' },
      { title: 'Freelance — Free', date: '2021 - Actualidad', desc: 'Diseño, planificación y codificación de páginas y aplicaciones web para negocios de Estados Unidos y México.' },
      { title: 'Mentor y atención al cliente — Dekids', date: '2019 - 2021', desc: 'Impartición de sesiones de programación, soft skills, emprendimiento y creación de videojuegos a niños de 8 a 13 años. También atención al cliente y seguimiento de clientes para saber cuál fue su experiencia con nosotros.' },
    ];

    // -------------- DOM helpers --------------
    const $ = (sel, scope=document) => scope.querySelector(sel);
    const $$ = (sel, scope=document) => scope.querySelectorAll(sel);
    const el = (tag, props={}) => Object.assign(document.createElement(tag), props);

    // -------------- Inject content --------------
    // function renderProfile() {
    //   $('#profile-pic').src = profilePicSvg();
    // }

    function renderCareer() {
      const wrap = $('#career-list');
      career.forEach(item => {
        const card = el('div', { className: 'card', innerHTML: `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:700; color: var(--c-dark)">${item.title}</div>
            <div style="font-size:14px; color:#5a7076e">${item.date}</div>
          </div>
          <p style="margin:6px 0 0 0; color:#5a7076; font-size:14px;">${item.desc}</p>
        `});
        wrap.appendChild(card);
      });
    }

    function renderProjects() {
      const wrap = $('#projects');
      projects.forEach(p => {
        const article = el('article', { className: 'card' });
        const thumb = el('div', { className: 'thumb' });
        const img = el('img', { alt: `${p.title} thumbnail`, src: p.thumb });
        thumb.appendChild(img);

        const h = el('div', { innerHTML: `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
            <h3 style="margin:0; font-weight:700; color: var(--c-dark)">${p.title}</h3>
            <div style="font-size:13px; color:#5a7076">${p.year}</div>
          </div>
          <p style="margin:8px 0 0 0; color:#5a7076; font-size:14px;">${p.desc}</p>
        `});

        const tags = el('div', { className: 'tags', style: 'margin-top:10px;' });
        p.tags.forEach(t => tags.appendChild(el('span', { className: 'tag', textContent: t })));

        const ctas = el('div', { style: 'margin-top:10px; display:flex; gap:8px;' });
        ctas.appendChild(el('a', { className: 'primary', href: p.href, textContent: 'Live' }));
        ctas.appendChild(el('a', { className: 'secondary', href: p.repositorie, textContent: 'Source', target: "_blank" }));

        article.appendChild(thumb);
        article.appendChild(h);
        article.appendChild(tags);
        article.appendChild(ctas);
        wrap.appendChild(article);
      });
    }

    function renderProjects2() {
      const wrap = $('#projects2');
      projects2.forEach(p => {
        const article = el('article', { className: 'card' });
        const thumb = el('div', { className: 'thumb' });
        const img = el('img', { alt: `${p.title} thumbnail`, src: p.thumb });
        thumb.appendChild(img);

        const h = el('div', { innerHTML: `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
            <h3 style="margin:0; font-weight:700; color: var(--c-dark)">${p.title}</h3>
            <div style="font-size:13px; color:#5a7076">${p.year}</div>
          </div>
          <p style="margin:8px 0 0 0; color:#5a7076; font-size:14px;">${p.desc}</p>
        `});

        const tags = el('div', { className: 'tags', style: 'margin-top:10px;' });
        p.tags.forEach(t => tags.appendChild(el('span', { className: 'tag', textContent: t })));

        const ctas = el('div', { style: 'margin-top:10px; display:flex; gap:8px;' });
        ctas.appendChild(el('a', { className: 'primary', href: p.href, textContent: 'Live' }));
        ctas.appendChild(el('a', { className: 'secondary', href: p.repositorie, textContent: 'Source', target: "_blank" }));

        article.appendChild(thumb);
        article.appendChild(h);
        article.appendChild(tags);
        article.appendChild(ctas);
        wrap.appendChild(article);
      });
    }

    function renderSkills() {
      const wrap = $('#skill-bars');
      skills.forEach(s => {
        const block = el('div', { style: 'margin-bottom:12px;' });
        const row = el('div', { style: 'display:flex; justify-content:space-between; font-size:14px; font-weight:600;' });
        row.appendChild(el('div', { textContent: s.name, style: 'color:#0f2f37' }));
        row.appendChild(el('div', { textContent: `${s.pct}%`, style: 'color:#5a7076' }));
        const bar = el('div', { className: 'prog-bg', style: 'margin-top:6px;' });
        const fill = el('div', { className: 'prog-fill' });
        fill.style.width = '0%';
        bar.appendChild(fill);
        block.appendChild(row);
        block.appendChild(bar);
        wrap.appendChild(block);

        // Animate width after a tiny delay for smoothness
        requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = s.pct + '%'; }));
      });

      const toolsWrap = $('#tools');
      tools.forEach(t => toolsWrap.appendChild(el('span', { className: 'tag', textContent: t })));
    }

    // -------------- Scroll reveal --------------
    function setupReveal() {
      const items = $$('.reveal');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      items.forEach(i => io.observe(i));
    }

    // -------------- SVG placeholders --------------
    function projectThumbSvg(title) {
      const svg = `<?xml version='1.0' encoding='UTF-8'?>
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'>
        <defs>
          <linearGradient id='g' x1='0' x2='1'>
            <stop offset='0' stop-color='%230B2E39' />
            <stop offset='1' stop-color='%234B7E8E' />
          </linearGradient>
          <filter id='grain'>
            <feTurbulence baseFrequency='0.8' numOctaves='1' stitchTiles='stitch' />
            <feColorMatrix type='saturate' values='0' />
            <feComponentTransfer><feFuncA type='table' tableValues='0 0.06' /></feComponentTransfer>
          </filter>
        </defs>
        <rect width='1200' height='600' fill='url(#g)' />
        <g opacity='0.06' stroke='white' stroke-width='1'>
          ${Array.from({ length: 12 }).map((_, i) => `<line x1='${i*100}' y1='0' x2='${i*100}' y2='600'/>`).join('')}
          ${Array.from({ length: 6 }).map((_, j) => `<line x1='0' y1='${j*100}' x2='1200' y2='${j*100}'/>`).join('')}
        </g>
        <g filter='url(#grain)'><rect width='1200' height='600' fill='white' opacity='0.015'/></g>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='36' fill='rgba(255,255,255,0.95)'>${escapeXml(title)}</text>
      </svg>`;
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }

    function profilePicSvg() {
      const svg = `<?xml version='1.0' encoding='UTF-8'?>
      <svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'>
        <defs>
          <linearGradient id='p' x1='0' x2='1'>
            <stop offset='0' stop-color='%234B7E8E' />
            <stop offset='1' stop-color='%230B2E39' />
          </linearGradient>
          <filter id='grain2'>
            <feTurbulence baseFrequency='0.6' numOctaves='1' stitchTiles='stitch' />
            <feColorMatrix type='saturate' values='0' />
            <feComponentTransfer><feFuncA type='table' tableValues='0 0.04' /></feComponentTransfer>
          </filter>
        </defs>
        <rect width='600' height='600' fill='url(#p)' />
        <g opacity='0.05' fill='white'>
          ${Array.from({ length: 8 }).map((_, i) => `<circle cx='${50 + i*60}' cy='${120 + (i%3)*80}' r='8'/>`).join('')}
        </g>
        <g filter='url(#grain2)'><rect width='600' height='600' fill='white' opacity='0.02'/></g>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='48' fill='rgba(255,255,255,0.95)'>JR</text>
      </svg>`;
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }

    function escapeXml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    }

    // -------------- Init --------------
    function init() {
    //   renderProfile();
      renderCareer();
      renderProjects();
      //renderProjects2();
      renderSkills();
      setupReveal();
      $('#year').textContent = new Date().getFullYear();
    }

    document.addEventListener('DOMContentLoaded', init);
