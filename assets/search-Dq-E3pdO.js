const a=e=>e.normalize("NFKC").trim().replace(/\s+/g," ").toLocaleLowerCase("hu-HU"),r=e=>a(e).normalize("NFD").replace(/\p{Diacritic}/gu,"");export{a as n,r as s};
