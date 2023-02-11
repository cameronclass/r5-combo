window.addEventListener("DOMContentLoaded", async () => {
  const req = await fetch('/config.json');
  const config = await req.json();
  const urlParams = new URLSearchParams(window.location.search);
  const utm_replace = urlParams.get('utm_replace');
  const utm_section = urlParams.get('utm_section');
  const utm_delete = urlParams.get('utm_delete');
  const hrefs = document.querySelectorAll('[href^="#section_"]');
  const hIndex = {};

  hrefs.forEach(el => { hIndex[el.getAttribute('href').slice(9)] = el; });

  if (utm_replace && Object.keys(config.utm_replace).includes(utm_replace)) {
    const cfg = config.utm_replace[utm_replace];
    
    document.getElementById('device').innerHTML = cfg.device;
    document.getElementById('title_1').innerHTML = cfg.title_1;
    document.getElementById('title_2').innerHTML = cfg.title_2;
  }

  if (utm_delete && Object.keys(config.utm_delete).includes(utm_delete)) {
    const cfg = config.utm_delete[utm_delete].split(',');

    cfg.forEach(id => {
      document.getElementById('section_' + id)?.remove();
      if (Object.keys(hIndex).includes(id)) {
        hIndex[id].remove();
      }
    });
  }
  
  if (utm_section && Object.keys(config.utm_section).includes(utm_section)) {
    const cfg = config.utm_section[utm_section].split(',');
    const sections = document.querySelectorAll('[id^="section_"]');
    const index = {};

    sections.forEach(el => { index[el.getAttribute('id').slice(8)] = el; });
    
    sections.forEach(el => el.remove());
    hrefs.forEach(el => el.remove());
    
    cfg.forEach(id => {
      index[id] && document.getElementById('main').append(index[id]);
      index[id] && hIndex[id] && document.getElementById('hrefs').append(hIndex[id]);
    });
  }
});