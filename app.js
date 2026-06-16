const SURL='https://ogwcbmllpenelhkqetnx.supabase.co';
const SKEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nd2NibWxscGVuZWxoa3FldG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NTIzNDQsImV4cCI6MjA5NjMyODM0NH0.sBci0IyhhvwWAxW_1TU5IKann5PWwEC5cO3ahpNEZns';
const LOGO='data:image/png;base64,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rIXRMnop6stI2PWyPBcD5hnVBTr0M6WGHTevqm7GWe5P4z3gNYwAf0n2rf8AVfT21ahY42117nU08DuspamNoLoXbbdne0949SifDNL9Y8DbW0OLZDYnUVU7id1wcdnbbcYaWnZ223eewK+uC2HN34jeNmtk4nh4lw2cFrxTJ3t+fSecz1+7WOmbf4q7MbVYYJQ/4NpnSTAfeySkcj58LWn2qOcgttRZNMLFHUsdFLequWvDD2mJjRHE4jz4pCPIqecQ6PUk2QOyHUG9i8VUkvWyU8IPBI/xe87EjyAHr7l6dc9G8jzvKaWvtVdbKOgpKNlNDFKXAt2JJ2AbsBz+pYsmny372SY5z5N7RcX0Wm8HSVv8tOdreUz6R95eXoV2ww4le7s5m3vmtbC0kdoYwH6N3n6FXbUt1RJqLkDqzi643Ofj4u39cP8Acrq6L4fU4PgFHYKyWGarjklkmkh34HFzyRtuAfi8I9i0zWbQmgzW6SX6z1zbXdZR93a9nFDORyBO3Nrtu0jfflyWTLpr2wVrHWGpoOOafFxXNlyz8t+UT/rp7sxZtGdL6m0UdR9jVPN1sDH9Z18vp7tB3+N3r1HRTS4ED7Fafc9g6+Xn/wCpaNimF6+Yza47PbclsT6GJvDCKgmTqm9waSzfbyW26faf5lQ5bHlWZ5m+7VjIXxMpIo9oYw7bfbsHd3NCz0itto8P9oReovmx960azePLa1pmfwk2ip4aSjhpaaMRwwsEcbB2NaBsB9C/VB2ItxzszvzkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFgs8yNuJ4vVXx1pul2MHCG0dug62eVznBoDW7jvI3PcOazqEboIZwzEcrzrMqPUDU+iZbYLcS+wY22TrBSOP/PnI5Om222H3vkVMw5BEQEREBERAREQFDmQ9HzEr5fq681tzvBqa2ofPLwyM24nHcgej2KY0Vl8dcnK0btnTazPpZm2G01mfR+NBTR0dDBSRAiOGNsbN/ADYL9kRXteZ3neRERFBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=';
const sb=supabase.createClient(SURL,SKEY);
function esc(s){if(s==null)return '';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
let CU=null,PRODUCTS=[],CATEGORIES=[],CP='';
let editItems=[{id:Date.now(),prodId:null,name:'',qty:1,sn:''}];
let _ckItems=[];
const $=s=>document.getElementById(s);
const ini=n=>n.split(' ').map(x=>x[0]||'').join('').slice(0,2).toUpperCase();
const fmtD=d=>d?d.split('-').reverse().join('/'):'—';
const today=()=>new Date().toLocaleDateString('pt-BR');
function toast(m,t=''){const el=$('toast');el.textContent=m;el.className='toast show'+(t?' t'+t:'');setTimeout(()=>el.classList.remove('show'),2800);}
function closeModal(){$('mc').innerHTML='';}

function renderSdbAva(){
  const wrap=$('sdb-ava-wrap');if(!wrap)return;
  const bg=CU.role==='admin'?'var(--red)':'#4a3a3e';
  if(CU.avatar_url){
    wrap.innerHTML=`<img src="${CU.avatar_url}" class="sdb-ava-img" title="Meu perfil">`;
  }else{
    wrap.innerHTML=`<div class="sdb-ava" style="background:${bg};margin-top:0">${ini(CU.full_name)}</div>`;
  }
}
function openProfile(){
  const bg=CU.role==='admin'?'var(--red)':'#4a3a3e';
  const avaHtml=CU.avatar_url
    ?`<img src="${CU.avatar_url}" class="profile-ava" id="pava-preview" onclick="$('pava-inp').click()">`
    :`<div class="profile-ava-initials" id="pava-preview" style="background:${bg}" onclick="$('pava-inp').click()">${ini(CU.full_name)}</div>`;
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox mbox-sm"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-user-circle"></i>Meu Perfil</h2>
  <div class="profile-ava-wrap">
    ${avaHtml}
    <span class="profile-ava-hint"><i class="ti ti-camera"></i> Clique na foto para alterar</span>
    <input type="file" id="pava-inp" accept="image/*" style="display:none" onchange="prevAvatar(this)">
    <input type="hidden" id="pava-data" value="${CU.avatar_url||''}">
  </div>
  <div class="fg"><label>Nome Completo</label><input id="p-name" value="${CU.full_name}"></div>
  <div class="fg"><label>Departamento</label><input id="p-dept" value="${CU.department||''}"></div>
  <div class="fg-sec" style="margin-top:4px">Alterar Senha</div>
  <div class="fg"><label>Nova Senha</label><input type="password" id="p-pass" placeholder="Deixe em branco para não alterar"></div>
  <div class="fg"><label>Confirmar Senha</label><input type="password" id="p-pass2" placeholder="Repita a nova senha"></div>
  <div class="mfooter">
    <button class="btn-out" onclick="doLogout()"><i class="ti ti-logout"></i> Sair</button>
    <button class="btn-red" onclick="saveProfile()"><i class="ti ti-device-floppy"></i> Salvar</button>
  </div></div></div>`;
}
function prevAvatar(inp){
  const f=inp.files[0];if(!f)return;
  const reader=new FileReader();
  reader.onload=e=>{
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      const SIZE=300;
      const side=Math.min(img.width,img.height);
      canvas.width=SIZE;canvas.height=SIZE;
      const ctx=canvas.getContext('2d');
      ctx.drawImage(img,(img.width-side)/2,(img.height-side)/2,side,side,0,0,SIZE,SIZE);
      const compressed=canvas.toDataURL('image/jpeg',0.8);
      const prev=$('pava-preview');
      if(prev.tagName==='IMG'){prev.src=compressed;}
      else{prev.style.backgroundImage=`url(${compressed})`;prev.innerHTML='';}
      $('pava-data').value=compressed;
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(f);
}
async function saveProfile(){
  const name=$('p-name').value.trim();
  const dept=$('p-dept').value.trim();
  const pass=$('p-pass').value;
  const pass2=$('p-pass2').value;
  const avatar=$('pava-data').value||null;
  if(!name){toast('Nome obrigatório.','err');return;}
  if(pass&&pass!==pass2){toast('Senhas não coincidem.','err');return;}
  try{
    const updates={full_name:name,department:dept,avatar_url:avatar};
    const {error}=await sb.from('users').update(updates).eq('id',CU.id);
    if(error)throw error;
    if(pass){
      const {error:pe}=await sb.rpc('update_password',{uid:CU.id,new_pwd:pass});
      if(pe)throw pe;
    }
    CU={...CU,...updates};
    renderSdbAva();
    closeModal();
    toast('Perfil atualizado!','ok');
  }catch(e){toast('Erro: '+e.message,'err');}
}
function openForgot(){
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox mbox-sm"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-key"></i>Redefinir Senha</h2>
  <p style="font-size:12px;color:var(--muted);margin-bottom:16px">Digite seu usuário. Um administrador irá redefinir sua senha e te informar a senha temporária.</p>
  <div class="fg"><label>Usuário</label><input id="fg-user" placeholder="seu.usuario"></div>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="submitForgot()"><i class="ti ti-send"></i> Solicitar</button></div></div></div>`;
}
async function submitForgot(){
  const u=$('fg-user').value.trim();
  if(!u){toast('Informe seu usuário.','err');return;}
  try{
    const {data:user}=await sb.from('users').select('id,full_name').eq('username',u).maybeSingle();
    // Não revela se o usuário existe (segurança). Sempre mostra sucesso.
    if(user){
      await sb.from('password_resets').insert({username:u,user_id:user.id,status:'pending'});
    }
    closeModal();
    toast('Solicitação enviada. Procure um administrador para receber sua nova senha.','ok');
  }catch(e){toast('Erro: '+e.message,'err');}
}
function togglePwd(){
  const inp=$('lp'),btn=$('pwd-eye');
  const show=inp.type==='password';
  inp.type=show?'text':'password';
  btn.innerHTML=show?'<i class="ti ti-eye-off" style="font-size:16px"></i>':'<i class="ti ti-eye" style="font-size:16px"></i>';
}
async function doLogin(){
  const u=$('lu').value.trim(),p=$('lp').value;
  if(!u||!p){$('lerr').style.display='block';return;}
  $('lerr').style.display='none';$('lbtn').disabled=true;$('lbtn').textContent='Entrando...';
  try{
    const {data,error}=await sb.from('users').select('*').eq('username',u).eq('active',true).single();
    if(error||!data)throw new Error('nf');
    const {data:ok}=await sb.rpc('check_password',{uname:u,pwd:p});
    if(!ok)throw new Error('wp');
    CU=data;
    try{await bootApp();}catch(be){console.error('bootApp error:',be);}
  }catch(e){
    $('lerr').style.display='block';
    $('lbtn').disabled=false;$('lbtn').textContent='Entrar';
  }
}
async function doLogout(){closeModal();CU=null;PRODUCTS=[];CATEGORIES=[];$('app').style.display='none';$('login-screen').style.display='flex';$('lu').value='';$('lp').value='';}
async function bootApp(){
  $('login-screen').style.display='none';$('app').style.display='flex';
  renderSdbAva();
  await loadProds();
  buildNav();
  goTo(CU.role==='admin'?'aprovacao':'nova-req');
  // garante que o botão seja resetado independente do fluxo
  const btn=$('lbtn');if(btn){btn.disabled=false;btn.textContent='Entrar';}
}
async function loadProds(){
  const {data:cats}=await sb.from('categories').select('*').order('name');
  CATEGORIES=cats||[];
  const {data:prods}=await sb.from('products').select('*,categories(name)').eq('active',true).order('name');
  PRODUCTS=(prods||[]).map(p=>({...p,category:p.categories?.name||'Geral'}));
}
const NAV_A=[{id:'aprovacao',icon:'ti-clipboard-check',tip:'Aprovação'},{id:'checklists',icon:'ti-list-check',tip:'Checklists'},{id:'todos',icon:'ti-list',tip:'Todos os Pedidos'},{id:'itens-outros',icon:'ti-users-group',tip:'Itens com Colaboradores'},{id:'movimentacoes',icon:'ti-arrows-exchange',tip:'Movimentações'},{id:'cadastro-itens',icon:'ti-package',tip:'Cadastro de Itens'},{id:'usuarios',icon:'ti-users',tip:'Usuários'},{id:'resets',icon:'ti-key',tip:'Redefinições de Senha'},{id:'metricas',icon:'ti-chart-bar',tip:'Métricas'}];
const NAV_U=[{id:'nova-req',icon:'ti-clipboard-plus',tip:'Nova Requisição'},{id:'itens-comigo',icon:'ti-package-import',tip:'Itens Comigo'},{id:'meus-pedidos',icon:'ti-list-check',tip:'Meus Pedidos'},{id:'movimentacoes',icon:'ti-arrows-exchange',tip:'Movimentações'},{id:'historico',icon:'ti-clock-history',tip:'Histórico'}];
const PTITLES={'nova-req':'Nova Requisição','itens-comigo':'Itens Comigo','itens-outros':'Itens com Outros Colaboradores','meus-pedidos':'Meus Pedidos','movimentacoes':'Movimentações','historico':'Histórico','aprovacao':'Aprovação de Pedidos','checklists':'Histórico de Checklists','todos':'Todos os Pedidos','cadastro-itens':'Cadastro de Itens','usuarios':'Usuários','resets':'Redefinições de Senha','metricas':'Métricas'};
function buildNav(){
  const items=CU.role==='admin'?NAV_A:NAV_U;
  $('nav-btns').innerHTML=items.map((n,i)=>`${i>0?'<div class="sdb-div"></div>':''}<button class="sdb-btn" id="nav-${n.id}" onclick="goTo('${n.id}')"><i class="ti ${n.icon}"></i><span class="sdb-tip">${n.tip}</span></button>`).join('');
}
function goTo(page){
  CP=page;
  document.querySelectorAll('.sdb-btn').forEach(b=>b.classList.remove('active'));
  const btn=$('nav-'+page);if(btn)btn.classList.add('active');
  $('page-ttl').textContent=PTITLES[page]||page;
  const tb=$('topbar-actions');tb.innerHTML='';
  if(page==='todos')tb.innerHTML='<button class="btn-red" onclick="openNRModal()"><i class="ti ti-plus"></i> Nova Requisição</button>';
  if(page==='cadastro-itens')tb.innerHTML='<button class="btn-red" onclick="openCadModal(null)"><i class="ti ti-plus"></i> Novo Item</button>';
  if(page==='usuarios')tb.innerHTML='<button class="btn-red" onclick="openAddUser()"><i class="ti ti-user-plus"></i> Novo Usuário</button>';
  const c=$('content');
  const pages={
    'nova-req':renderNR,'meus-pedidos':renderMP,'historico':renderHist,
    'itens-comigo':renderItensComigo,'itens-outros':renderItensOutros,'movimentacoes':renderMovs,
    'aprovacao':renderAprov,'checklists':renderCKs,'todos':renderTodos,
    'cadastro-itens':renderItens,'usuarios':renderUsers,'resets':renderResets,'metricas':renderMetrics
  };
  if(pages[page])pages[page](c);
}
function sBadge(s){const m={pending:'b-pend',approved:'b-appr',returning:'b-appr',done:'b-done',partial:'b-part'};const l={pending:'Aguardando',approved:'Em Uso',returning:'Em Retorno',done:'Concluído',partial:'Ret. Parcial'};return `<span class="badge ${m[s]||'b-pend'}">${l[s]||s}</span>`;}
function cBadge(c){const m={ok:'b-ok',broken:'b-broken',missing:'b-missing',partial:'b-partial'};const l={ok:'OK',broken:'Quebrado',missing:'Faltante',partial:'Parcial'};return `<span class="badge ${m[c]||'b-ok'}">${l[c]||c}</span>`;}
/* ─── NOVA REQ inline ─── */
function renderNR(c){
  editItems=[{id:Date.now(),prodId:null,name:'',qty:1,sn:''}];
  c.innerHTML=`<div class="form-card">
  <div class="fg-sec">Dados do Evento</div>
  <div class="frow frow-2" style="margin-bottom:14px;">
    <div class="fg"><label>Responsável</label><input id="nr-resp" value="${CU.full_name}"></div>
    <div class="fg"><label>Evento</label><input id="nr-ev" placeholder="Nome do evento"></div>
  </div>
  <div class="frow frow-3" style="margin-bottom:14px;">
    <div class="fg"><label>Local / CR / Almox.</label><input id="nr-loc" placeholder="Ex: CR-01"></div>
    <div class="fg"><label>Data de Saída</label><input type="date" id="nr-dt"></div>
    <div class="fg" style="grid-column:1/-1"><label>Observação</label><textarea id="nr-obs" placeholder="Opcional" rows="2" style="resize:none;font-family:inherit;font-size:13px;width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;outline:none;color:var(--text);background:var(--white)"></textarea></div>
  </div>
  <div class="fg-sec">Itens</div>
  <table class="it"><thead><tr><th style="width:50%">Produto</th><th style="width:12%;text-align:center">Qtd.</th><th style="width:30%">N° Série</th><th style="width:8%"></th></tr></thead><tbody id="it-body"></tbody></table>
  <button class="add-row-btn" onclick="addRow()"><i class="ti ti-plus"></i> Adicionar item</button>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:18px;padding-top:14px;border-top:1.5px solid var(--border);">
    <button class="btn-out" onclick="renderNR($('content'))">Limpar</button>
    <button class="btn-red" onclick="submitNR()"><i class="ti ti-send"></i> Enviar Requisição</button>
  </div></div>`;
  renderRows();
}
function ag(el){el.style.height='auto';el.style.height=el.scrollHeight+'px';}
function renderRows(){
  const tb=$('it-body');if(!tb)return;
  tb.innerHTML='';
  editItems.forEach((item,idx)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td class="ac-wrap" style="position:relative;"><textarea rows="1" id="pr-${item.id}" placeholder="Buscar por nome ou N° série..." oninput="fProd(${item.id},this.value);ag(this)" onkeydown="if(event.key==='Escape')document.getElementById('ac-${item.id}').style.display='none'"></textarea><div class="ac-list" id="ac-${item.id}" style="display:none"></div></td>
    <td style="text-align:center"><input type="number" min="1" value="${item.qty}" id="qt-${item.id}" onchange="editItems[${idx}].qty=parseInt(this.value)||1"></td>
    <td><input type="text" id="sn-${item.id}" value="${item.sn||''}" placeholder="SN" onchange="editItems[${idx}].sn=this.value"></td>
    <td style="text-align:center"><button onclick="removeRow(${item.id})" style="background:none;border:none;color:var(--err);cursor:pointer;font-size:16px;"><i class="ti ti-trash"></i></button></td>`;
    tb.appendChild(tr);
    const ta=$('pr-'+item.id);if(ta){ta.value=item.name;ag(ta);}
  });
}
function fProd(id,val){
  const ac=$('ac-'+id);
  const idx=editItems.findIndex(x=>x.id===id);if(idx>=0)editItems[idx].name=val;
  if(!val.trim()){ac.style.display='none';return;}
  const v=val.toLowerCase();
  const hits=PRODUCTS.filter(p=>p.name.toLowerCase().includes(v)||(p.serial_code&&p.serial_code.toLowerCase().includes(v))).slice(0,10);
  if(!hits.length){ac.style.display='none';return;}
  ac.innerHTML=hits.map(p=>{const out=p.quantity<=0;return `<div class="ac-item" ${out?'style="opacity:.45;cursor:not-allowed"':`onmousedown="pickP(${id},'${p.id}')"`}>${p.name}${p.serial_code?` <span style="font-size:10px;color:var(--red);font-family:'DM Mono',monospace">[${p.serial_code}]</span>`:''} <span style="font-size:10px;color:${out?'var(--err)':'var(--muted)'};font-weight:${out?'700':'400'}">— ${out?'INDISPONÍVEL':p.quantity+' disp.'}</span></div>`;}).join('');
  ac.style.display='block';
}
function pickP(itemId,prodId){
  const p=PRODUCTS.find(x=>x.id===prodId);
  if(p&&p.quantity<=0){toast('"'+p.name+'" está sem estoque disponível.','err');$('ac-'+itemId).style.display='none';return;}
  // ITEM 3: impede adicionar o mesmo produto que já está em outra linha
  const dup=editItems.find(x=>x.id!==itemId&&x.prodId===prodId);
  if(dup){toast('"'+p.name+'" já foi adicionado à requisição.','err');$('ac-'+itemId).style.display='none';return;}
  const idx=editItems.findIndex(x=>x.id===itemId);
  if(p&&idx>=0){editItems[idx].prodId=p.id;editItems[idx].name=p.name;editItems[idx].sn=p.serial_code||'';editItems[idx].maxQty=p.quantity;
    // ITEM 4: item com série trava a quantidade em 1
    if(p.has_serial)editItems[idx].qty=1;
  }
  const ta=$('pr-'+itemId);if(ta){ta.value=p.name;ag(ta);}
  const snf=$('sn-'+itemId);if(snf)snf.value=p.serial_code||'';
  const qf=$('qt-'+itemId);if(qf){qf.max=p.has_serial?1:p.quantity;if(p.has_serial){qf.value=1;qf.disabled=true;qf.title='Item com N° de série: máx. 1 unidade';}else{qf.disabled=false;qf.title='';}}
  $('ac-'+itemId).style.display='none';
}
function addRow(){editItems.push({id:Date.now(),prodId:null,name:'',qty:1,sn:''});renderRows();}
function removeRow(id){if(editItems.length<=1){toast('Mínimo 1 item.','err');return;}editItems=editItems.filter(x=>x.id!==id);renderRows();}
function validateStock(filled){
  // Soma quantidades por produto para detectar item repetido em várias linhas
  const byProd={};
  for(const i of filled){
    if(!i.prodId)continue;
    byProd[i.prodId]=(byProd[i.prodId]||0)+(i.qty||0);
  }
  for(const i of filled){
    if(!i.prodId)continue; // item livre (sem produto vinculado) não valida estoque
    const p=PRODUCTS.find(x=>x.id===i.prodId);
    if(!p)continue;
    // ITEM 4: item com número de série só pode 1 unidade
    if(p.has_serial&&(i.qty>1)){
      return 'Item com N° de série, verificar a disponibilidade de outros no Depósito!';
    }
    if(p.quantity<=0)return '"'+i.name+'" está sem estoque.';
    // ITEM 3: soma total do produto (todas as linhas) não pode exceder estoque
    const total=byProd[i.prodId];
    if(total>p.quantity){
      if(p.has_serial)return 'Item com N° de série, verificar a disponibilidade de outros no Depósito!';
      return '"'+i.name+'": total pedido ('+total+') excede o estoque disponível ('+p.quantity+').';
    }
  }
  return null;
}
async function submitNR(){
  const ev=$('nr-ev').value.trim(),loc=$('nr-loc').value.trim(),dt=$('nr-dt').value;
  if(!ev||!loc||!dt){toast('Preencha Evento, Local e Data.','err');return;}
  const filled=editItems.filter(x=>x.name.trim());
  if(!filled.length){toast('Adicione ao menos 1 item.','err');return;}
  // Validação de estoque
  const stockErr=validateStock(filled);
  if(stockErr){toast(stockErr,'err');return;}
  try{
    const {data:req,error}=await sb.from('requests').insert({user_id:CU.id,responsible:$('nr-resp').value||CU.full_name,event_name:ev,location:loc,date_out:dt,notes:$('nr-obs').value.trim(),status:'pending'}).select().single();
    if(error)throw error;
    await sb.from('request_items').insert(filled.map(i=>({request_id:req.id,product_id:i.prodId||null,name:i.name,quantity:i.qty,serial_no:i.sn||null})));
    for(const i of filled){if(i.prodId){const p=PRODUCTS.find(x=>x.id===i.prodId);if(p){await sb.from('products').update({quantity:Math.max(0,p.quantity-i.qty)}).eq('id',i.prodId);p.quantity=Math.max(0,p.quantity-i.qty);}}}
    toast(req.seq+' enviada!','ok');setTimeout(()=>openPDF(req.id),400);renderNR($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
function openNRModal(){
  editItems=[{id:Date.now(),prodId:null,name:'',qty:1,sn:''}];
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button><h2><i class="ti ti-clipboard-plus"></i>Nova Requisição</h2>
  <div class="frow frow-2" style="margin-bottom:14px;"><div class="fg"><label>Responsável</label><input id="mnr-resp" value="${CU.full_name}"></div><div class="fg"><label>Evento</label><input id="mnr-ev" placeholder="Nome do evento"></div></div>
  <div class="frow frow-3" style="margin-bottom:14px;"><div class="fg"><label>Local / CR / Almox.</label><input id="mnr-loc" placeholder="Ex: CR-01"></div><div class="fg"><label>Data de Saída</label><input type="date" id="mnr-dt"></div><div class="fg"><label>Observação</label><textarea id="mnr-obs" placeholder="Opcional" rows="2" style="resize:none;font-family:inherit;font-size:13px;width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;outline:none;color:var(--text);background:var(--white)"></textarea></div></div>
  <div class="fg-sec">Itens</div><table class="it"><thead><tr><th style="width:50%">Produto</th><th style="width:12%;text-align:center">Qtd.</th><th style="width:30%">N° Série</th><th style="width:8%"></th></tr></thead><tbody id="it-body"></tbody></table>
  <button class="add-row-btn" onclick="addRow()"><i class="ti ti-plus"></i> Adicionar item</button>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="submitNRModal()"><i class="ti ti-send"></i> Enviar</button></div></div></div>`;
  renderRows();
}
async function submitNRModal(){
  const ev=$('mnr-ev').value.trim(),loc=$('mnr-loc').value.trim(),dt=$('mnr-dt').value;
  if(!ev||!loc||!dt){toast('Preencha Evento, Local e Data.','err');return;}
  const filled=editItems.filter(x=>x.name.trim());if(!filled.length){toast('Adicione ao menos 1 item.','err');return;}
  const stockErr=validateStock(filled);
  if(stockErr){toast(stockErr,'err');return;}
  try{
    const {data:req,error}=await sb.from('requests').insert({user_id:CU.id,responsible:$('mnr-resp').value||CU.full_name,event_name:ev,location:loc,date_out:dt,notes:$('mnr-obs').value.trim(),status:'pending'}).select().single();
    if(error)throw error;
    await sb.from('request_items').insert(filled.map(i=>({request_id:req.id,product_id:i.prodId||null,name:i.name,quantity:i.qty,serial_no:i.sn||null})));
    for(const i of filled){if(i.prodId){const p=PRODUCTS.find(x=>x.id===i.prodId);if(p){await sb.from('products').update({quantity:Math.max(0,p.quantity-i.qty)}).eq('id',i.prodId);p.quantity=Math.max(0,p.quantity-i.qty);}}}
    closeModal();toast(req.seq+' criada!','ok');setTimeout(()=>openPDF(req.id),400);goTo(CP);
  }catch(e){toast('Erro: '+e.message,'err');}
}
/* ─── MEUS PEDIDOS ─── */
async function renderMP(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:reqs}=await sb.from('requests').select('*').eq('user_id',CU.id).order('created_at',{ascending:false});
  c.innerHTML=`<div class="tcard"><div class="tcard-hd"><h3>Meus Pedidos</h3></div><table><thead><tr><th>Seq.</th><th>Evento</th><th>Local</th><th>Data</th><th>Status</th><th>Ações</th></tr></thead><tbody>
  ${(reqs||[]).length?(reqs||[]).map(r=>`<tr><td class="seq">${r.seq}</td><td>${r.event_name}</td><td>${r.location}</td><td>${fmtD(r.date_out)}</td><td>${sBadge(r.status)}</td><td><button class="ab ab-v" onclick="openView('${r.id}')"><i class="ti ti-eye"></i></button> <button class="ab ab-b" onclick="openPDF('${r.id}')"><i class="ti ti-file"></i> PDF</button></td></tr>`).join(''):'<tr><td colspan="6" style="text-align:center;padding:28px;color:var(--muted)">Nenhuma requisição ainda.</td></tr>'}
  </tbody></table></div>`;
}
/* ─── HISTÓRICO ─── */
async function renderHist(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:reqs}=await sb.from('requests').select('*,request_items(*)').eq('user_id',CU.id).order('created_at',{ascending:false});
  c.innerHTML=`<div class="tcard"><div class="tcard-hd"><h3>Histórico</h3></div><table><thead><tr><th>Seq.</th><th>Evento</th><th>Data</th><th>Itens</th><th>Status</th></tr></thead><tbody>
  ${(reqs||[]).map(r=>`<tr><td class="seq">${r.seq}</td><td>${r.event_name}</td><td>${fmtD(r.date_out)}</td><td style="font-size:11px;color:var(--muted)">${(r.request_items||[]).map(i=>i.name+(i.serial_no?` [${i.serial_no}]`:'')).join(', ')}</td><td>${sBadge(r.status)}</td></tr>`).join('')}
  </tbody></table></div>`;
}
/* ─── APROVAÇÃO ─── */
async function renderAprov(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:all}=await sb.from('requests').select('*,request_items(*),users(full_name)').order('created_at',{ascending:false});
  const pend=(all||[]).filter(r=>r.status==='pending');
  const appr=(all||[]).filter(r=>r.status==='approved');
  const ret=(all||[]).filter(r=>r.status==='returning');
  const done=(all||[]).filter(r=>r.status==='done'||r.status==='partial');
  c.innerHTML=`<div class="metrics m4"><div class="mc"><div class="mc-lbl">Aguardando</div><div class="mc-val warn">${pend.length}</div></div><div class="mc"><div class="mc-lbl">Em Uso</div><div class="mc-val red">${appr.length}</div></div><div class="mc"><div class="mc-lbl">Em Retorno</div><div class="mc-val warn">${ret.length}</div></div><div class="mc"><div class="mc-lbl">Concluídos</div><div class="mc-val ok">${done.length}</div></div></div>
  <div class="fg-sec" style="margin-bottom:10px">Pendentes de Aprovação</div>
  ${pend.length?pend.map(r=>aCard(r,'pend')).join(''):'<div style="text-align:center;padding:18px;color:var(--muted);font-size:12px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border);margin-bottom:12px">Nenhum pedido aguardando.</div>'}
  <div class="fg-sec" style="margin:12px 0 10px">Em Uso — Itens com os Colaboradores</div>
  ${appr.length?appr.map(r=>aCard(r,'appr')).join(''):'<div style="text-align:center;padding:18px;color:var(--muted);font-size:12px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border);margin-bottom:12px">Nenhum.</div>'}
  <div class="fg-sec" style="margin:12px 0 10px">Em Retorno — Aguardando Checklist</div>
  ${ret.length?ret.map(r=>aCard(r,'ret')).join(''):'<div style="text-align:center;padding:18px;color:var(--muted);font-size:12px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)">Nenhum.</div>'}`;
}
function aCard(r,tipo){
  const usr=r.users?.full_name||r.responsible||'—';
  const itHtml=(r.request_items||[]).map(i=>`<div class="aprov-item-row"><span style="font-size:13px">📦</span><span style="flex:1">${i.name}${i.serial_no?` <span style="font-size:10px;color:var(--red);font-family:'DM Mono',monospace">[${i.serial_no}]</span>`:''}</span><span style="font-size:11px;color:var(--muted)">${i.quantity} un.</span></div>`).join('');
  const acts=tipo==='pend'
    ?`<button class="ab ab-ok" onclick="openApprove('${r.id}')"><i class="ti ti-checks"></i> Aprovar</button> <button class="ab ab-v" onclick="openEditReq('${r.id}')"><i class="ti ti-edit"></i> Editar</button> <button class="ab ab-v" onclick="openView('${r.id}')"><i class="ti ti-eye"></i></button> <button class="ab ab-b" onclick="openPDF('${r.id}')"><i class="ti ti-printer"></i> PDF</button>`
    :tipo==='appr'
    ?`<button class="ab ab-w" onclick="startReturn('${r.id}','${r.seq}')"><i class="ti ti-arrow-back-up"></i> Iniciar Retorno</button> <button class="ab ab-v" onclick="openView('${r.id}')"><i class="ti ti-eye"></i></button> <button class="ab ab-b" onclick="openPDF('${r.id}')"><i class="ti ti-printer"></i> PDF</button>`
    :`<button class="ab ab-ok" onclick="openCK('${r.id}')"><i class="ti ti-list-check"></i> Checklist Retorno</button> <button class="ab ab-b" onclick="openPDF('${r.id}')"><i class="ti ti-printer"></i> PDF</button>`;
  return `<div class="aprov-card"><div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px"><div><div style="font-size:13px;font-weight:800">${r.seq} ${sBadge(r.status)}</div><div style="font-size:11px;color:var(--muted)">${usr} · ${fmtD(r.date_out)}</div></div></div>
  <div class="aprov-info"><div class="aprov-info-item"><label>Evento</label><span>${r.event_name}</span></div><div class="aprov-info-item"><label>Local</label><span>${r.location}</span></div><div class="aprov-info-item"><label>Data Saída</label><span>${fmtD(r.date_out)}</span></div>${r.notes?`<div class="aprov-info-item" style="grid-column:1/-1"><label>Obs.</label><span>${r.notes}</span></div>`:''}</div>
  <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Itens (${(r.request_items||[]).length})</div>${itHtml}
  <div class="aprov-actions">${acts}</div></div>`;
}
async function openApprove(id){
  const {data:r}=await sb.from('requests').select('*,request_items(*)').eq('id',id).single();
  const items=r.request_items||[];
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-checks"></i>Aprovar ${r.seq}</h2>
  <div style="background:var(--offwhite);border-radius:8px;padding:10px 14px;font-size:12px;margin-bottom:14px;border:1.5px solid var(--border)"><strong>${esc(r.event_name)}</strong> · ${esc(r.location)} · ${fmtD(r.date_out)}</div>
  <div style="font-size:11px;color:var(--muted);margin-bottom:10px">Marque os itens que serão <b>liberados</b>. Os desmarcados serão cancelados desta requisição.</div>
  ${items.map((i,n)=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)"><input type="checkbox" id="apv-${n}" checked style="width:18px;height:18px;cursor:pointer;accent-color:var(--red)"><label for="apv-${n}" style="flex:1;cursor:pointer;font-size:13px">${esc(i.name)}${i.serial_no?` <span style="font-size:10px;color:var(--red);font-family:'DM Mono',monospace">[${esc(i.serial_no)}]</span>`:''}</label><span style="font-size:11px;color:var(--muted)">${i.quantity} un.</span></div>`).join('')}
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="confirmApprove('${id}',${items.length})"><i class="ti ti-check"></i> Confirmar Aprovação</button></div></div></div>`;
  window._apvItems=items;
}
async function confirmApprove(id,n){
  const items=window._apvItems||[];
  const keep=[],cancel=[];
  for(let i=0;i<n;i++){(($('apv-'+i)&&$('apv-'+i).checked)?keep:cancel).push(items[i]);}
  if(!keep.length){toast('Selecione ao menos 1 item para aprovar.','err');return;}
  try{
    // Cancela (remove) os itens não aprovados e devolve estoque deles
    for(const it of cancel){
      if(it.product_id){
        const {data:prod}=await sb.from('products').select('quantity').eq('id',it.product_id).single();
        if(prod)await sb.from('products').update({quantity:prod.quantity+it.quantity}).eq('id',it.product_id);
      }
      await sb.from('request_items').delete().eq('id',it.id);
    }
    // Aprova a requisição e define custódia dos itens mantidos
    const {data:req,error}=await sb.from('requests').update({status:'approved'}).eq('id',id).select('user_id').single();
    if(error)throw error;
    await sb.from('request_items').update({holder_id:req.user_id}).eq('request_id',id).is('holder_id',null);
    closeModal();
    toast(cancel.length?`Aprovado! ${cancel.length} item(ns) cancelado(s).`:'Aprovado!','ok');
    renderAprov($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
/* ─── EDITAR REQUISIÇÃO (admin, pending) ─── */
let _editReqId=null;
async function openEditReq(id){
  const {data:r}=await sb.from('requests').select('*,request_items(*)').eq('id',id).single();
  if(r.status!=='pending'){toast('Só é possível editar requisições aguardando aprovação.','err');return;}
  _editReqId=id;
  editItems=(r.request_items||[]).map(i=>({id:i.dbId||Date.now()+Math.random(),dbId:i.id,prodId:i.product_id,name:i.name,qty:i.quantity,sn:i.serial_no||''}));
  if(!editItems.length)editItems=[{id:Date.now(),prodId:null,name:'',qty:1,sn:''}];
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-edit"></i>Editar ${r.seq}</h2>
  <div class="frow frow-2" style="margin-bottom:12px"><div class="fg"><label>Responsável</label><input id="er-resp" value="${esc(r.responsible||'')}"></div><div class="fg"><label>Evento</label><input id="er-ev" value="${esc(r.event_name||'')}"></div></div>
  <div class="frow frow-2" style="margin-bottom:14px"><div class="fg"><label>Local / CR / Almox.</label><input id="er-loc" value="${esc(r.location||'')}"></div><div class="fg"><label>Data de Saída</label><input type="date" id="er-dt" value="${r.date_out||''}"></div></div>
  <div class="fg-sec">Itens</div>
  <table class="it"><thead><tr><th style="width:50%">Produto</th><th style="width:14%;text-align:center">Qtd.</th><th style="width:28%">N° Série</th><th style="width:8%"></th></tr></thead><tbody id="it-body"></tbody></table>
  <button class="add-row-btn" onclick="addRow()"><i class="ti ti-plus"></i> Adicionar item</button>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="saveEditReq()"><i class="ti ti-device-floppy"></i> Salvar Alterações</button></div></div></div>`;
  renderRows();
}
async function saveEditReq(){
  const ev=$('er-ev').value.trim(),loc=$('er-loc').value.trim(),dt=$('er-dt').value;
  if(!ev||!loc||!dt){toast('Preencha Evento, Local e Data.','err');return;}
  const filled=editItems.filter(x=>x.name.trim());
  if(!filled.length){toast('A requisição precisa de ao menos 1 item.','err');return;}
  const stockErr=validateStock(filled);
  if(stockErr){toast(stockErr,'err');return;}
  try{
    await sb.from('requests').update({responsible:$('er-resp').value.trim()||null,event_name:ev,location:loc,date_out:dt}).eq('id',_editReqId);
    // Estratégia simples: apaga todos os itens atuais e reinsere (pending não mexeu em estoque definitivo)
    await sb.from('request_items').delete().eq('request_id',_editReqId);
    await sb.from('request_items').insert(filled.map(i=>({request_id:_editReqId,product_id:i.prodId||null,name:i.name,quantity:i.qty,serial_no:i.sn||null})));
    closeModal();
    toast('Requisição atualizada!','ok');
    renderAprov($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
/* ─── CHECKLIST ─── */
async function openCK(id){
  const {data:r}=await sb.from('requests').select('*,request_items(*)').eq('id',id).single();
  _ckItems=r.request_items||[];
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-list-check"></i>Checklist Retorno — ${r.seq}</h2>
  <div style="background:var(--offwhite);border-radius:8px;padding:10px 14px;font-size:12px;margin-bottom:16px;border:1.5px solid var(--border)"><strong>${r.event_name}</strong> · ${r.location} · ${fmtD(r.date_out)}</div>
  ${_ckItems.map((item,i)=>`<div class="ck-row"><label>${item.name}${item.serial_no?` <span style="font-size:10px;color:var(--red);font-family:'DM Mono',monospace">[${item.serial_no}]</span>`:''} <span style="color:var(--muted)">(${item.quantity} un.)</span></label><select id="cst-${i}" class="ck-sel"><option value="ok">Completo</option><option value="broken">Quebrado</option><option value="missing">Faltante</option><option value="partial">Parcial</option></select><input type="number" id="cqt-${i}" min="0" value="${item.quantity}" class="ck-qty"><input type="text" id="cknote-${i}" placeholder="Obs..." class="ck-note"></div>`).join('')}
  <div class="fg" style="margin-top:12px"><label>Observação Geral</label><textarea id="ck-notes" rows="2" placeholder="Notas gerais..." style="resize:none"></textarea></div>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="saveCK('${id}',${_ckItems.length})"><i class="ti ti-check"></i> Confirmar Retorno</button></div></div></div>`;
}
async function saveCK(reqId,n){
  let brk=0,mis=0,complete=true;const ckData=[];
  for(let i=0;i<n;i++){
    const st=$('cst-'+i).value,rq=parseInt($('cqt-'+i).value)||0;
    const note=$('cknote-'+i)?$('cknote-'+i).value:'';
    if(st==='broken')brk++;
    if(st==='missing'||rq<(_ckItems[i]?.quantity||1)){mis++;complete=false;}
    if(st==='partial')complete=false;
    if(rq>0&&_ckItems[i]?.product_id){const p=PRODUCTS.find(x=>x.id===_ckItems[i].product_id);if(p){await sb.from('products').update({quantity:p.quantity+rq}).eq('id',p.id);p.quantity+=rq;}}
    ckData.push({request_item_id:_ckItems[i]?.id,item_name:_ckItems[i]?.name||'',original_qty:_ckItems[i]?.quantity||1,returned_qty:rq,condition:st,notes:note});
  }
  const {data:ck}=await sb.from('return_checklists').insert({request_id:reqId,checked_by:CU.id,overall_status:complete?'complete':'partial',notes:$('ck-notes').value,checked_at:new Date().toISOString()}).select().single();
  if(ck)await sb.from('return_checklist_items').insert(ckData.map(x=>({...x,checklist_id:ck.id})));
  await sb.from('requests').update({status:complete?'done':'partial'}).eq('id',reqId);
  closeModal();toast('Retorno registrado! Estoque atualizado.','ok');
  if(CP==='aprovacao')renderAprov($('content'));
  else if(CP==='checklists')renderCKs($('content'));
  else renderTodos($('content'));
}
/* ─── HIST CHECKLISTS ─── */
async function renderCKs(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:cks,error:ckErr}=await sb.from('return_checklists').select('*,requests(*),return_checklist_items(*)').order('checked_at',{ascending:false});
  if(ckErr){c.innerHTML='<div style="text-align:center;padding:48px;color:var(--err);background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)">Erro ao carregar: '+ckErr.message+'</div>';return;}
  if(!(cks||[]).length){c.innerHTML='<div style="text-align:center;padding:48px;color:var(--muted);background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)"><i class="ti ti-list-check" style="font-size:38px;display:block;margin-bottom:12px;opacity:.3;color:var(--red)"></i>Nenhum checklist registrado ainda.</div>';return;}
  const total=cks.length,comp=cks.filter(x=>x.overall_status==='complete').length;
  const brk=cks.reduce((a,x)=>a+(x.return_checklist_items||[]).filter(i=>i.condition==='broken').length,0);
  const mis=cks.reduce((a,x)=>a+(x.return_checklist_items||[]).filter(i=>i.condition==='missing').length,0);
  c.innerHTML=`<div class="metrics m4"><div class="mc"><div class="mc-lbl">Checklists</div><div class="mc-val">${total}</div></div><div class="mc"><div class="mc-lbl">Completos</div><div class="mc-val ok">${comp}</div></div><div class="mc"><div class="mc-lbl">Quebrados</div><div class="mc-val red">${brk}</div></div><div class="mc"><div class="mc-lbl">Faltantes</div><div class="mc-val warn">${mis}</div></div></div>
  ${cks.map(ck=>{
    const r=ck.requests||{};const items=ck.return_checklist_items||[];const cmp=ck.overall_status==='complete';
    return `<div class="ck-hist-card"><div class="ck-hist-hd" onclick="toggleCK('${ck.id}')">
    <span class="ck-hist-seq">${r.seq||'—'}</span><span class="ck-hist-meta">${r.event_name||'—'} · ${fmtD(r.date_out)}</span>
    <span style="font-size:11px;font-weight:700;color:${cmp?'var(--ok)':'var(--warn)'}">${cmp?'Completo':'Parcial'}</span>
    ${items.filter(i=>i.condition==='broken').length?`<span class="badge b-broken">Quebrados: ${items.filter(i=>i.condition==='broken').length}</span>`:''}
    ${items.filter(i=>i.condition==='missing').length?`<span class="badge b-missing">Faltantes: ${items.filter(i=>i.condition==='missing').length}</span>`:''}
    <i class="ti ti-chevron-down" id="ck-arrow-${ck.id}" style="font-size:14px;color:var(--muted);margin-left:auto;transition:transform .2s"></i></div>
    <div class="ck-hist-body" id="ck-body-${ck.id}">
    ${items.map(i=>`<div class="ck-item-line"><span style="flex:1">${i.item_name||'—'}</span><span style="font-size:11px;color:var(--muted);font-family:'DM Mono',monospace">${i.returned_qty}/${i.original_qty} un.</span>${cBadge(i.condition)}${i.notes?`<span style="font-size:10px;color:var(--muted)">${i.notes}</span>`:''}</div>`).join('')}
    ${ck.notes?`<div style="margin-top:10px;background:var(--offwhite);border-radius:7px;padding:8px 12px;font-size:12px;color:var(--muted)"><b>Obs. geral:</b> ${ck.notes}</div>`:''}
    </div></div>`;
  }).join('')}`;
}
function movStatusBadge(s){const m={pending:['b-pend','Pendente'],accepted:['b-appr','Aceita'],rejected:['b-broken','Recusada']};const x=m[s]||m['accepted'];return `<span class="badge ${x[0]}">${x[1]}</span>`;}
function toggleCK(id){const b=$('ck-body-'+id),a=$('ck-arrow-'+id);if(b){b.classList.toggle('open');if(a)a.style.transform=b.classList.contains('open')?'rotate(180deg)':'';};}
/* ─── TODOS ─── */
let _allReqs=[];
async function renderTodos(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:all}=await sb.from('requests').select('*,users(full_name)').order('created_at',{ascending:false});
  _allReqs=all||[];
  c.innerHTML=`<div class="metrics m4"><div class="mc"><div class="mc-lbl">Total</div><div class="mc-val">${_allReqs.length}</div></div><div class="mc"><div class="mc-lbl">Aguardando</div><div class="mc-val warn">${_allReqs.filter(r=>r.status==='pending').length}</div></div><div class="mc"><div class="mc-lbl">Aprovados</div><div class="mc-val red">${_allReqs.filter(r=>r.status==='approved').length}</div></div><div class="mc"><div class="mc-lbl">Concluídos</div><div class="mc-val ok">${_allReqs.filter(r=>r.status==='done'||r.status==='partial').length}</div></div></div>
  <div class="tcard"><div class="tcard-hd"><h3>Todas as Requisições</h3><input type="text" class="srch" style="width:200px" placeholder="Buscar..." oninput="filterTodos(this.value)"></div>
  <div style="overflow-x:auto"><table><thead><tr><th>Seq.</th><th>Solicitante</th><th>Evento</th><th>Local</th><th>Data</th><th>Status</th><th>Ações</th></tr></thead><tbody id="todos-body"></tbody></table></div></div>`;
  renderTodosRows('');
}
function filterTodos(v){renderTodosRows(v);}
function renderTodosRows(f){
  const tb=$('todos-body');if(!tb)return;
  const fl=f.toLowerCase();
  const list=fl?_allReqs.filter(r=>r.seq?.toLowerCase().includes(fl)||r.event_name?.toLowerCase().includes(fl)||(r.users?.full_name||'').toLowerCase().includes(fl)):_allReqs;
  tb.innerHTML=list.map(r=>`<tr><td class="seq">${r.seq}</td><td>${r.users?.full_name||r.responsible}</td><td>${r.event_name}</td><td>${r.location}</td><td>${fmtD(r.date_out)}</td><td>${sBadge(r.status)}</td>
  <td style="white-space:nowrap"><button class="ab ab-v" onclick="openView('${r.id}')"><i class="ti ti-eye"></i></button> <button class="ab ab-b" onclick="openPDF('${r.id}')"><i class="ti ti-file"></i></button>
  ${r.status==='pending'?`<button class="ab ab-ok" onclick="appReqT('${r.id}')"><i class="ti ti-check"></i></button>`:''}
  ${r.status==='approved'?`<button class="ab ab-w" onclick="startReturn('${r.id}','${r.seq}')" title="Iniciar Retorno"><i class="ti ti-arrow-back-up"></i></button>`:''}
  ${r.status==='returning'?`<button class="ab ab-ok" onclick="openCK('${r.id}')" title="Checklist de Retorno"><i class="ti ti-list-check"></i></button>`:''}
  ${r.status==='done'||r.status==='partial'?`<button class="ab ab-w" onclick="reopenR('${r.id}')"><i class="ti ti-arrow-back-up"></i></button>`:''}
  <button class="ab ab-r" onclick="delReq('${r.id}','${r.seq}')"><i class="ti ti-trash"></i></button>
  </td></tr>`).join('');
}
async function appReqT(id){
  const {data:req}=await sb.from('requests').update({status:'approved'}).eq('id',id).select('user_id').single();
  if(req)await sb.from('request_items').update({holder_id:req.user_id}).eq('request_id',id).is('holder_id',null);
  toast('Aprovado!','ok');renderTodos($('content'));
}
async function reopenR(id){await sb.from('requests').update({status:'returning'}).eq('id',id);toast('Reaberto para retorno.','ok');renderTodos($('content'));}
async function startReturn(id,seq){
  if(!confirm('Iniciar o retorno de '+seq+'? O pedido sairá de "Em Uso" e ficará disponível para o checklist de retorno.'))return;
  const {error}=await sb.from('requests').update({status:'returning'}).eq('id',id);
  if(error){toast('Erro: '+error.message,'err');return;}
  toast(seq+' marcado como Em Retorno.','ok');
  if(CP==='aprovacao')renderAprov($('content'));else renderTodos($('content'));
}
async function delReq(id,seq){
  if(!confirm('Excluir requisição '+seq+'? Esta ação não pode ser desfeita.'))return;
  try{
    // 1. Buscar itens para devolver ao estoque
    const {data:items}=await sb.from('request_items').select('product_id,quantity').eq('request_id',id);
    // 2. Devolver quantidade ao estoque para cada item com product_id
    for(const item of (items||[])){
      if(item.product_id){
        const {data:prod}=await sb.from('products').select('quantity').eq('id',item.product_id).single();
        if(prod){
          await sb.from('products').update({quantity:prod.quantity+item.quantity}).eq('id',item.product_id);
        }
      }
    }
    // 3. Deletar em cascata
    const cks=await sb.from('return_checklists').select('id').eq('request_id',id);
    const ckIds=(cks.data||[]).map(x=>x.id);
    if(ckIds.length)await sb.from('return_checklist_items').delete().in('checklist_id',ckIds);
    await sb.from('return_checklists').delete().eq('request_id',id);
    await sb.from('request_items').delete().eq('request_id',id);
    const {error}=await sb.from('requests').delete().eq('id',id);
    if(error)throw error;
    await loadProds();
    toast(seq+' excluída e estoque devolvido.','ok');
    renderTodos($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
/* ─── ITENS COMIGO ─── */
async function renderItensOutros(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  // Todos os itens em custódia de requisições aprovadas, agrupados por colaborador
  const {data:items,error}=await sb.from('request_items')
    .select('*,products(photo_url,emoji),holder:holder_id(full_name,department),requests!inner(seq,status,event_name)')
    .in('requests.status',['approved','returning']).gt('quantity',0).not('holder_id','is',null);
  if(error){c.innerHTML='<div style="text-align:center;padding:48px;color:var(--err);background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)">Erro: '+esc(error.message)+'</div>';return;}
  const list=items||[];
  if(!list.length){
    c.innerHTML='<div style="text-align:center;padding:48px;color:var(--muted);font-size:13px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)"><i class="ti ti-users-group" style="font-size:32px;display:block;margin-bottom:8px;opacity:.4"></i>Nenhum item sob responsabilidade de colaboradores no momento.</div>';
    return;
  }
  // Agrupa por holder
  const groups={};
  for(const i of list){
    const key=i.holder_id;
    if(!groups[key])groups[key]={name:i.holder?.full_name||'—',dept:i.holder?.department||'',items:[]};
    groups[key].items.push(i);
  }
  const totalUn=list.reduce((a,x)=>a+x.quantity,0);
  let html=`<div class="metrics m3"><div class="mc"><div class="mc-lbl">Colaboradores com Itens</div><div class="mc-val">${Object.keys(groups).length}</div></div><div class="mc"><div class="mc-lbl">Total de Itens</div><div class="mc-val red">${list.length}</div></div><div class="mc"><div class="mc-lbl">Total Unidades</div><div class="mc-val mut">${totalUn}</div></div></div>`;
  for(const key in groups){
    const g=groups[key];
    html+=`<div class="tcard" style="margin-bottom:14px"><div class="tcard-hd"><h3><i class="ti ti-user"></i> ${esc(g.name)}${g.dept?` <span style="font-size:11px;color:var(--muted);font-weight:400">— ${esc(g.dept)}</span>`:''}</h3><span style="font-size:12px;color:var(--muted)">${g.items.length} item(ns) · ${g.items.reduce((a,x)=>a+x.quantity,0)} un.</span></div>
    <div style="overflow-x:auto"><table><thead><tr><th>Item</th><th>Origem</th><th style="text-align:center">Qtd.</th><th>N° Série</th></tr></thead><tbody>
    ${g.items.map(i=>{const photo=i.products?.photo_url;const emoji=i.products?.emoji||'📦';return `<tr>
      <td>${photo?`<img src="${photo}" style="width:30px;height:30px;border-radius:5px;object-fit:cover;vertical-align:middle;margin-right:8px">`:`<span style="font-size:17px;margin-right:8px;vertical-align:middle">${emoji}</span>`}<span style="vertical-align:middle">${esc(i.name)}</span></td>
      <td><span class="seq">${i.requests?.seq||'—'}</span><div style="font-size:10px;color:var(--muted)">${esc(i.requests?.event_name||'')}</div></td>
      <td style="text-align:center;font-weight:700">${i.quantity}</td>
      <td style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted)">${esc(i.serial_no||'—')}</td>
    </tr>`;}).join('')}
    </tbody></table></div></div>`;
  }
  c.innerHTML=html;
}
async function renderItensComigo(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const [itemsRes,pendRes,sentRes]=await Promise.all([
    sb.from('request_items').select('*,products(photo_url,emoji),requests!inner(seq,status,event_name)').eq('holder_id',CU.id).in('requests.status',['approved','returning']).gt('quantity',0),
    sb.from('transfers').select('*,from_user:from_user_id(full_name)').eq('to_user_id',CU.id).eq('status','pending').order('created_at',{ascending:false}),
    sb.from('transfers').select('*,to_user:to_user_id(full_name)').eq('from_user_id',CU.id).eq('status','pending').order('created_at',{ascending:false})
  ]);
  const list=itemsRes.data||[];
  const pend=pendRes.data||[];
  const sent=sentRes.data||[];
  // Seção: transferências recebidas aguardando minha decisão
  const pendHtml=pend.length?`<div class="tcard" style="margin-bottom:14px;border:1.5px solid var(--red)"><div class="tcard-hd"><h3><i class="ti ti-bell" style="color:var(--red)"></i> Transferências recebidas (${pend.length})</h3></div>
  <div style="overflow-x:auto"><table><thead><tr><th>Item</th><th>De</th><th style="text-align:center">Qtd.</th><th>Obs.</th><th>Ação</th></tr></thead><tbody>
  ${pend.map(t=>`<tr><td>${esc(t.item_name)}${t.serial_no?` <span style="font-size:10px;color:var(--red);font-family:'DM Mono',monospace">[${esc(t.serial_no)}]</span>`:''}</td><td style="font-size:12px">${esc(t.from_user?.full_name||'—')}</td><td style="text-align:center;font-weight:700">${t.quantity}</td><td style="font-size:11px;color:var(--muted)">${esc(t.note||'—')}</td><td style="white-space:nowrap"><button class="ab ab-ok" onclick="acceptTransfer('${t.id}')"><i class="ti ti-check"></i> Aceitar</button> <button class="ab ab-r" onclick="rejectTransfer('${t.id}')"><i class="ti ti-x"></i> Recusar</button></td></tr>`).join('')}
  </tbody></table></div></div>`:'';
  // Seção: transferências que enviei aguardando o outro aceitar
  const sentHtml=sent.length?`<div class="tcard" style="margin-bottom:14px"><div class="tcard-hd"><h3 style="font-size:13px"><i class="ti ti-clock"></i> Enviadas aguardando aceite (${sent.length})</h3></div>
  <div style="overflow-x:auto"><table><thead><tr><th>Item</th><th>Para</th><th style="text-align:center">Qtd.</th><th>Status</th></tr></thead><tbody>
  ${sent.map(t=>`<tr><td>${esc(t.item_name)}</td><td style="font-size:12px">${esc(t.to_user?.full_name||'—')}</td><td style="text-align:center;font-weight:700">${t.quantity}</td><td><span class="badge b-pend">Aguardando</span></td></tr>`).join('')}
  </tbody></table></div></div>`:'';
  if(!list.length&&!pend.length&&!sent.length){
    c.innerHTML='<div style="text-align:center;padding:48px;color:var(--muted);font-size:13px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)"><i class="ti ti-package-off" style="font-size:32px;display:block;margin-bottom:8px;opacity:.4"></i>Você não tem nenhum item no momento.</div>';
    return;
  }
  const itemsHtml=list.length?`<div class="metrics m3"><div class="mc"><div class="mc-lbl">Itens Comigo</div><div class="mc-val">${list.length}</div></div><div class="mc"><div class="mc-lbl">Total Unidades</div><div class="mc-val red">${list.reduce((a,x)=>a+x.quantity,0)}</div></div><div class="mc"><div class="mc-lbl">Eventos</div><div class="mc-val mut">${new Set(list.map(x=>x.requests?.seq)).size}</div></div></div>
  <div class="tcard"><div class="tcard-hd"><h3>Itens sob minha responsabilidade</h3></div>
  <div style="overflow-x:auto"><table><thead><tr><th>Item</th><th>Origem</th><th style="text-align:center">Qtd.</th><th>N° Série</th><th>Ações</th></tr></thead><tbody>
  ${list.map(i=>{const photo=i.products?.photo_url;const emoji=i.products?.emoji||'📦';return `<tr>
    <td>${photo?`<img src="${photo}" style="width:32px;height:32px;border-radius:5px;object-fit:cover;vertical-align:middle;margin-right:8px">`:`<span style="font-size:18px;margin-right:8px;vertical-align:middle">${emoji}</span>`}<span style="vertical-align:middle">${esc(i.name)}</span></td>
    <td><span class="seq">${i.requests?.seq||'—'}</span><div style="font-size:10px;color:var(--muted)">${esc(i.requests?.event_name||'')}</div></td>
    <td style="text-align:center;font-weight:700">${i.quantity}</td>
    <td style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted)">${esc(i.serial_no||'—')}</td>
    <td><button class="ab ab-v" onclick="openTransfer('${i.id}')"><i class="ti ti-send"></i> Transferir</button></td>
  </tr>`;}).join('')}
  </tbody></table></div></div>`:'<div style="text-align:center;padding:32px;color:var(--muted);font-size:13px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)">Nenhum item sob sua responsabilidade no momento.</div>';
  c.innerHTML=pendHtml+sentHtml+itemsHtml;
}
let _xferItem=null;
async function openTransfer(itemId){
  const {data:item}=await sb.from('request_items').select('*').eq('id',itemId).single();
  if(!item){toast('Item não encontrado.','err');return;}
  _xferItem=item;
  const {data:users}=await sb.from('users').select('id,full_name,department').eq('active',true).neq('id',CU.id).order('full_name');
  const opts=(users||[]).map(u=>`<option value="${u.id}">${u.full_name}${u.department?' — '+u.department:''}</option>`).join('');
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox mbox-sm"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-send"></i>Transferir Item</h2>
  <div style="background:var(--offwhite);border-radius:8px;padding:12px 14px;margin-bottom:16px;border:1.5px solid var(--border)"><div style="font-weight:700;font-size:13px">${item.name}</div>${item.serial_no?`<div style="font-size:11px;color:var(--red);font-family:'DM Mono',monospace;margin-top:2px">${item.serial_no}</div>`:''}<div style="font-size:11px;color:var(--muted);margin-top:4px">Você possui <b>${item.quantity}</b> unidade(s)</div></div>
  <div class="fg"><label>Transferir para</label><select id="xfer-to">${opts||'<option value="">Nenhum outro usuário cadastrado</option>'}</select></div>
  <div class="fg"><label>Quantidade</label><input type="number" id="xfer-qty" min="1" max="${item.quantity}" value="${item.quantity}"></div>
  <div class="fg"><label>Observação (opcional)</label><input id="xfer-note" placeholder="Motivo da transferência..."></div>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="doTransfer()"><i class="ti ti-send"></i> Confirmar</button></div></div></div>`;
}
async function doTransfer(){
  const toId=$('xfer-to').value;
  const qty=parseInt($('xfer-qty').value)||0;
  const note=$('xfer-note').value.trim()||null;
  const it=_xferItem;
  if(!toId){toast('Selecione um destinatário.','err');return;}
  if(qty<1||qty>it.quantity){toast('Quantidade inválida.','err');return;}
  try{
    // Cria a transferência como PENDENTE. O item só muda de dono quando o destinatário aceitar.
    const {error}=await sb.from('transfers').insert({item_id:it.id,product_id:it.product_id,item_name:it.name,serial_no:it.serial_no,from_user_id:CU.id,to_user_id:toId,quantity:qty,note,status:'pending'});
    if(error)throw error;
    closeModal();
    toast('Transferência enviada! Aguardando o destinatário aceitar.','ok');
    renderItensComigo($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
async function acceptTransfer(tid){
  try{
    const {data:t,error}=await sb.from('transfers').select('*').eq('id',tid).single();
    if(error)throw error;
    if(t.status!=='pending'){toast('Esta transferência já foi processada.','err');renderItensComigo($('content'));return;}
    // Busca o item de origem
    const {data:it}=await sb.from('request_items').select('*').eq('id',t.item_id).single();
    if(!it){toast('Item de origem não existe mais.','err');return;}
    if(t.quantity>=it.quantity){
      // transfere a linha inteira
      await sb.from('request_items').update({holder_id:t.to_user_id}).eq('id',it.id);
    }else{
      // divide
      await sb.from('request_items').update({quantity:it.quantity-t.quantity}).eq('id',it.id);
      await sb.from('request_items').insert({request_id:it.request_id,product_id:it.product_id,name:it.name,quantity:t.quantity,serial_no:it.serial_no,holder_id:t.to_user_id});
    }
    await sb.from('transfers').update({status:'accepted'}).eq('id',tid);
    toast('Transferência aceita! Item agora é seu.','ok');
    renderItensComigo($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
async function rejectTransfer(tid){
  if(!confirm('Recusar esta transferência? O item permanece com quem enviou.'))return;
  try{
    await sb.from('transfers').update({status:'rejected'}).eq('id',tid);
    toast('Transferência recusada.','ok');
    renderItensComigo($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
/* ─── MOVIMENTAÇÕES ─── */
async function renderMovs(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  let q=sb.from('transfers').select('*,from_user:from_user_id(full_name),to_user:to_user_id(full_name)').order('created_at',{ascending:false});
  if(CU.role!=='admin')q=q.or(`from_user_id.eq.${CU.id},to_user_id.eq.${CU.id}`);
  const {data:movs}=await q;
  const list=movs||[];
  if(!list.length){
    c.innerHTML='<div style="text-align:center;padding:48px;color:var(--muted);font-size:13px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)"><i class="ti ti-arrows-exchange" style="font-size:32px;display:block;margin-bottom:8px;opacity:.4"></i>Nenhuma movimentação registrada.</div>';
    return;
  }
  c.innerHTML=`<div class="tcard"><div class="tcard-hd"><h3>${CU.role==='admin'?'Todas as Movimentações':'Minhas Movimentações'}</h3><span style="font-size:12px;color:var(--muted)">${list.length} registro(s)</span></div>
  <div style="overflow-x:auto"><table><thead><tr><th>Data</th><th>Item</th><th style="text-align:center">Qtd.</th><th>De</th><th></th><th>Para</th><th>Status</th><th>Obs.</th></tr></thead><tbody>
  ${list.map(m=>{const dt=new Date(m.created_at).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});const mine=m.from_user_id===CU.id;return `<tr>
    <td style="font-size:11px;color:var(--muted);white-space:nowrap">${dt}</td>
    <td>${esc(m.item_name)}${m.serial_no?` <span style="font-size:10px;color:var(--red);font-family:'DM Mono',monospace">[${m.serial_no}]</span>`:''}</td>
    <td style="text-align:center;font-weight:700">${m.quantity}</td>
    <td style="font-size:12px${mine?';color:var(--red);font-weight:700':''}">${esc(m.from_user?.full_name||'—')}</td>
    <td style="text-align:center;color:var(--muted)"><i class="ti ti-arrow-right"></i></td>
    <td style="font-size:12px${m.to_user_id===CU.id?';color:var(--ok);font-weight:700':''}">${esc(m.to_user?.full_name||'—')}</td>
    <td>${movStatusBadge(m.status)}</td>
    <td style="font-size:11px;color:var(--muted)">${esc(m.note||'—')}</td>
  </tr>`;}).join('')}
  </tbody></table></div></div>`;
}
/* ─── CADASTRO ITENS ─── */
let _catF='Todos';
async function renderItens(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  await loadProds();
  const cats=['Todos',...new Set(PRODUCTS.map(p=>p.category).filter(Boolean).sort())];
  c.innerHTML=`<div style="display:flex;gap:10px;margin-bottom:12px;align-items:center;flex-wrap:wrap"><input type="text" class="srch" style="width:220px" id="isrch" placeholder="Buscar por nome ou N° série..." oninput="renderIG()"><span style="font-size:12px;color:var(--muted)">${PRODUCTS.length} itens cadastrados</span></div>
  <div class="cat-filter">${cats.map(cat=>`<button class="cat-btn ${cat==='Todos'?'active':''}" onclick="setCF('${cat}',this)">${cat}</button>`).join('')}</div>
  <div class="items-grid" id="ig"></div>`;
  _catF='Todos';renderIG();
}
function setCF(cat,btn){_catF=cat;document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderIG();}
function renderIG(){
  const g=$('ig');if(!g)return;
  const f=($('isrch')?.value||'').toLowerCase();
  const list=PRODUCTS.filter(p=>(_catF==='Todos'||p.category===_catF)&&(p.name.toLowerCase().includes(f)||(p.serial_code&&p.serial_code.toLowerCase().includes(f))));
  g.innerHTML=list.map(p=>`<div class="item-card"><div class="item-card-img">${p.photo_url?`<img src="${p.photo_url}">`:`<i class="ti ti-package" style="font-size:26px;color:var(--muted);opacity:.5"></i>`}</div>
  <div class="item-card-body"><div class="item-card-name">${p.name}</div><div class="item-card-cat">${p.category}</div>
  ${p.serial_code?`<div class="sn-tag">📋 ${p.serial_code}</div>`:''}
  <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px">${p.quantity>0?`<span class="stk-ok">${p.quantity} un.</span>`:`<span class="stk-no">Indisponível</span>`}
  <div style="display:flex;gap:4px"><button class="ab ab-v" onclick="openCadModal('${p.id}')" style="font-size:10px;padding:2px 7px"><i class="ti ti-edit"></i></button><button class="ab ab-r" onclick="delProd('${p.id}','${p.name.replace(/'/g,"\\\'")}',event)" style="font-size:10px;padding:2px 7px"><i class="ti ti-trash"></i></button></div></div></div></div>`).join('');
}
function openCadModal(prodId){
  const isEdit=prodId!==null&&prodId!=='null';const p=isEdit?PRODUCTS.find(x=>x.id===prodId):null;
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox mbox-sm"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-${isEdit?'edit':'package'}"></i>${isEdit?'Editar Item':'Novo Item'}</h2>
  <div class="upload-area" onclick="$('fotoInp').click()"><div id="fprev">${p&&p.photo_url?`<img src="${p.photo_url}" class="upload-preview">`:`<i class="ti ti-camera" style="font-size:28px;color:var(--muted);opacity:.4;margin-bottom:4px;display:block"></i>`}</div><div style="font-size:11px;color:var(--muted)">Clique para enviar foto</div><input type="file" id="fotoInp" accept="image/*" onchange="prevFoto(this)"></div>
  <input type="hidden" id="fi-img" value="${p&&p.photo_url?p.photo_url:''}">
  <div class="fg"><label>Nome / Nomenclatura</label><input id="fi-name" value="${p?p.name:''}" placeholder="Nome completo do item"></div>
  <div class="frow frow-2" style="margin-bottom:14px"><div class="fg"><label>Quantidade</label><input type="number" id="fi-qty" min="0" value="${p?p.quantity:0}"></div><div class="fg"><label>Categoria</label><input id="fi-cat" value="${p?p.category:''}" placeholder="Ex: Geladeiras"></div></div>
  <div class="serial-toggle ${p&&p.has_serial?'checked':''}" id="stoggle" onclick="toggleSer()"><input type="checkbox" id="fi-serial" ${p&&p.has_serial?'checked':''} onclick="event.stopPropagation();toggleSer()"><span>Requer Número de Série</span></div>
  <div class="serial-code-field ${p&&p.has_serial?'visible':''}" id="scwrap"><div class="fg"><label>Código / N° de Série</label><input id="fi-scode" value="${p&&p.serial_code?p.serial_code:''}" placeholder="Ex: GESP674367" style="font-family:'DM Mono',monospace"></div></div>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="saveItm('${isEdit?prodId:null}')">${isEdit?'Salvar':'Cadastrar'}</button></div></div></div>`;
}
function toggleSer(){const cb=$('fi-serial'),t=$('stoggle'),w=$('scwrap');cb.checked=!cb.checked;if(cb.checked){t.classList.add('checked');w.classList.add('visible');setTimeout(()=>$('fi-scode')?.focus(),260);}else{t.classList.remove('checked');w.classList.remove('visible');if($('fi-scode'))$('fi-scode').value='';}}
function prevFoto(inp){
  const f=inp.files[0];if(!f)return;
  const reader=new FileReader();
  reader.onload=e=>{
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      const MAX=600;
      let w=img.width,h=img.height;
      if(w>h&&w>MAX){h=Math.round(h*MAX/w);w=MAX;}
      else if(h>MAX){w=Math.round(w*MAX/h);h=MAX;}
      canvas.width=w;canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      const compressed=canvas.toDataURL('image/jpeg',0.75);
      $('fprev').innerHTML=`<img src="${compressed}" class="upload-preview">`;
      $('fi-img').value=compressed;
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(f);
}
async function saveItm(prodId){
  const name=$('fi-name').value.trim(),qty=parseInt($('fi-qty').value)||0,cat=$('fi-cat').value.trim();
  const serial=$('fi-serial').checked;
  const emoji='📦'; // emoji removido da UI; mantido no banco por compatibilidade
  const scode=serial?($('fi-scode').value.trim()||null):null;
  const img=$('fi-img').value||null;
  if(!name){toast('Nome obrigatório.','err');return;}
  // ITEM 4: produto com número de série é sempre 1 unidade
  const finalQty=serial?Math.min(qty,1):qty;
  if(serial&&qty>1){toast('Item com N° de série: quantidade ajustada para 1. Cadastre os demais como itens separados no Depósito.','ok');}
  try{
    let catId=null;
    const ex=CATEGORIES.find(c=>c.name===cat);
    if(ex){catId=ex.id;}
    else if(cat){
      const {data:nc,error:catErr}=await sb.from('categories').insert({name:cat}).select().single();
      if(catErr)throw new Error('Categoria: '+catErr.message);
      if(nc){CATEGORIES.push(nc);catId=nc.id;}
    }
    const payload={name,category_id:catId,emoji,quantity:finalQty,has_serial:serial,serial_code:scode,photo_url:img};
    if(prodId&&prodId!=='null'){
      const {error}=await sb.from('products').update(payload).eq('id',prodId);
      if(error)throw new Error(error.message);
      toast('Atualizado!','ok');
    }else{
      const {error}=await sb.from('products').insert(payload);
      if(error)throw new Error(error.message);
      toast('Cadastrado!','ok');
    }
    closeModal();await loadProds();renderItens($('content'));
  }catch(e){toast('Erro: '+e.message,'err');console.error('saveItm error:',e);}
}
async function delProd(id,name,ev){
  ev.stopPropagation();
  if(!confirm('Excluir "'+name+'"? Esta ação não pode ser desfeita.'))return;
  const {error}=await sb.from('products').delete().eq('id',id);
  if(error){toast('Erro: '+error.message,'err');return;}
  toast('"'+name+'" excluído.','ok');await loadProds();renderItens($('content'));
}
/* ─── USUÁRIOS ─── */
async function renderResets(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:resets,error}=await sb.from('password_resets').select('*,users:user_id(full_name,username)').order('requested_at',{ascending:false});
  if(error){c.innerHTML='<div style="text-align:center;padding:48px;color:var(--err);background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)">Erro: '+esc(error.message)+'</div>';return;}
  const list=resets||[];
  const pend=list.filter(r=>r.status==='pending');
  if(!list.length){
    c.innerHTML='<div style="text-align:center;padding:48px;color:var(--muted);font-size:13px;background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)"><i class="ti ti-key" style="font-size:32px;display:block;margin-bottom:8px;opacity:.4"></i>Nenhuma solicitação de redefinição.</div>';
    return;
  }
  c.innerHTML=`<div class="metrics m2"><div class="mc"><div class="mc-lbl">Pendentes</div><div class="mc-val warn">${pend.length}</div></div><div class="mc"><div class="mc-lbl">Total</div><div class="mc-val">${list.length}</div></div></div>
  <div class="tcard"><div class="tcard-hd"><h3>Solicitações de Redefinição de Senha</h3></div>
  <div style="overflow-x:auto"><table><thead><tr><th>Usuário</th><th>Solicitado em</th><th>Status</th><th>Ação</th></tr></thead><tbody>
  ${list.map(r=>{const dt=new Date(r.requested_at).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});const done=r.status!=='pending';return `<tr>
    <td>${esc(r.users?.full_name||r.username)}<div style="font-size:10px;color:var(--muted)">@${esc(r.users?.username||r.username)}</div></td>
    <td style="font-size:11px;color:var(--muted)">${dt}</td>
    <td>${done?'<span class="badge b-done">Resolvido</span>':'<span class="badge b-pend">Pendente</span>'}</td>
    <td>${done?'—':`<button class="ab ab-ok" onclick="doReset('${r.id}','${r.user_id}','${esc(r.users?.full_name||r.username)}')"><i class="ti ti-key"></i> Redefinir</button>`}</td>
  </tr>`;}).join('')}
  </tbody></table></div></div>`;
}
async function doReset(resetId,userId,name){
  const newPwd=prompt('Defina a nova senha temporária para '+name+':');
  if(!newPwd)return;
  if(newPwd.length<4){toast('Senha muito curta (mín. 4 caracteres).','err');return;}
  try{
    const {error}=await sb.rpc('admin_reset_password',{target_id:userId,new_pwd:newPwd});
    if(error)throw error;
    await sb.from('password_resets').update({status:'done',resolved_at:new Date().toISOString()}).eq('id',resetId);
    toast('Senha redefinida! Informe "'+newPwd+'" ao usuário.','ok');
    renderResets($('content'));
  }catch(e){toast('Erro: '+e.message,'err');}
}
async function renderUsers(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const {data:users}=await sb.from('users').select('*').order('full_name');
  const cols=['#C8102E','#0ea5e9','#16a34a','#d97706','#7c3aed','#0891b2'];
  c.innerHTML=`<div class="u-grid">${(users||[]).map((u,i)=>`<div class="u-card"><div class="ava" style="background:${cols[i%cols.length]}">${ini(u.full_name)}</div><div class="u-info"><div class="u-name">${u.full_name}${u.role==='admin'?'<span class="tag-adm">Admin</span>':''}</div><div class="u-sub">@${u.username} · ${u.department||'—'}</div></div><button class="ab ab-r" onclick="rmUser('${u.id}',${u.role==='admin'})" ${u.role==='admin'?'disabled style="opacity:.3"':''}><i class="ti ti-trash"></i></button></div>`).join('')}</div>`;
}
function openAddUser(){
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox mbox-sm"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-user-plus"></i>Novo Usuário</h2>
  <div class="frow frow-2" style="margin-bottom:14px"><div class="fg"><label>Nome Completo</label><input id="nu-name"></div><div class="fg"><label>Departamento</label><input id="nu-dept"></div></div>
  <div class="frow frow-2" style="margin-bottom:14px"><div class="fg"><label>Login</label><input id="nu-user"></div><div class="fg"><label>Senha</label><input type="password" id="nu-pass"></div></div>
  <div class="fg"><label>Perfil</label><select id="nu-role"><option value="user">Colaborador</option><option value="admin">Administrador</option></select></div>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Cancelar</button><button class="btn-red" onclick="saveUser()">Cadastrar</button></div></div></div>`;
}
async function saveUser(){
  const name=$('nu-name').value.trim(),dept=$('nu-dept').value.trim(),user=$('nu-user').value.trim(),pass=$('nu-pass').value,role=$('nu-role').value;
  if(!name||!user||!pass){toast('Preencha todos os campos.','err');return;}
  const {error}=await sb.rpc('create_user',{uname:user,pwd:pass,fname:name,dept,urole:role});
  if(error){toast('Erro: '+error.message,'err');return;}
  closeModal();toast(name+' cadastrado!','ok');renderUsers($('content'));
}
async function rmUser(id,isAdm){
  if(isAdm){toast('Não é possível remover o admin.','err');return;}
  await sb.from('users').update({active:false}).eq('id',id);
  toast('Removido.','ok');renderUsers($('content'));
}
/* ─── MÉTRICAS ─── */
async function renderMetrics(c){
  c.innerHTML='<div class="loading"><i class="ti ti-loader-2"></i>Carregando...</div>';
  const [reqRes,ckRes,userRes]=await Promise.all([
    sb.from('requests').select('*,users(full_name)'),
    sb.from('return_checklists').select('*,return_checklist_items(*)'),
    sb.from('users').select('*').eq('role','user').eq('active',true)
  ]);
  const firstErr=reqRes.error||ckRes.error||userRes.error;
  if(firstErr){c.innerHTML='<div style="text-align:center;padding:48px;color:var(--err);background:var(--card);border-radius:var(--radius);border:1.5px solid var(--border)">Erro ao carregar métricas: '+firstErr.message+'</div>';return;}
  const r=reqRes.data||[],ck=ckRes.data||[],users=userRes.data||[];
  const brk=ck.reduce((a,x)=>a+(x.return_checklist_items||[]).filter(i=>i.condition==='broken').length,0);
  const mis=ck.reduce((a,x)=>a+(x.return_checklist_items||[]).filter(i=>i.condition==='missing').length,0);
  c.innerHTML=`<div class="metrics m4"><div class="mc"><div class="mc-lbl">Total Req.</div><div class="mc-val">${r.length}</div></div><div class="mc"><div class="mc-lbl">Retornos OK</div><div class="mc-val ok">${ck.filter(x=>x.overall_status==='complete').length}</div></div><div class="mc"><div class="mc-lbl">Quebrados</div><div class="mc-val red">${brk}</div></div><div class="mc"><div class="mc-lbl">Faltantes</div><div class="mc-val warn">${mis}</div></div></div>
  <div class="tcard"><div class="tcard-hd"><h3>Por Colaborador</h3></div><table><thead><tr><th>Colaborador</th><th>Pedidos</th><th>Concluídos</th><th>Pendentes</th><th>Aprovados</th></tr></thead><tbody>
  ${users.map(u=>{const ur=r.filter(x=>x.user_id===u.id);return `<tr><td>${u.full_name}</td><td>${ur.length}</td><td>${ur.filter(x=>x.status==='done').length}</td><td>${ur.filter(x=>x.status==='pending').length}</td><td>${ur.filter(x=>x.status==='approved').length}</td></tr>`;}).join('')}
  </tbody></table></div>`;
}
/* ─── VIEW MODAL ─── */
async function openView(id){
  const {data:r}=await sb.from('requests').select('*,request_items(*),users(full_name)').eq('id',id).single();
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-clipboard"></i>${r.seq} — ${r.event_name}</h2>
  <div class="aprov-info" style="margin-bottom:16px"><div class="aprov-info-item"><label>Responsável</label><span>${r.users?.full_name||r.responsible}</span></div><div class="aprov-info-item"><label>Local</label><span>${r.location}</span></div><div class="aprov-info-item"><label>Data</label><span>${fmtD(r.date_out)}</span></div>${r.notes?`<div class="aprov-info-item" style="grid-column:1/-1"><label>Obs.</label><span>${r.notes}</span></div>`:''}</div>
  <table class="it" style="table-layout:fixed;margin-bottom:0"><thead><tr><th style="width:55%">Produto</th><th style="width:15%;text-align:center">Qtd.</th><th style="width:30%">N° Série</th></tr></thead>
  <tbody>${(r.request_items||[]).map(i=>`<tr><td>${i.name}</td><td style="text-align:center">${i.quantity}</td><td style="font-size:11px;color:var(--muted);font-family:'DM Mono',monospace">${i.serial_no||'—'}</td></tr>`).join('')}</tbody></table>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Fechar</button><button class="btn-red" onclick="closeModal();openPDF('${r.id}')"><i class="ti ti-printer"></i> PDF</button></div></div></div>`;
}
/* ─── PDF ─── */
async function openPDF(id){
  const {data:r}=await sb.from('requests').select('*,request_items(*,products(photo_url,emoji)),users(full_name)').eq('id',id).single();
  $('mc').innerHTML=`<div class="moverlay" onclick="if(event.target===this)closeModal()"><div class="mbox" style="width:640px"><button class="mclose" onclick="closeModal()"><i class="ti ti-x"></i></button>
  <h2><i class="ti ti-file-invoice"></i>${r.seq}</h2>
  <div id="pdfcnt" class="pdf-wrap">
    <div class="pdf-hd"><img src="${LOGO}" alt="El Dourado"><div class="pdf-hd-txt"><h1>Requisição de Materiais</h1><p>${r.seq} · Emitido em ${today()}</p></div></div>
    <div class="pdf-grid"><div class="pdf-fi"><label>Responsável</label><p>${r.users?.full_name||r.responsible}</p></div><div class="pdf-fi"><label>Evento</label><p>${r.event_name}</p></div><div class="pdf-fi"><label>Local / CR / Almox.</label><p>${r.location}</p></div><div class="pdf-fi"><label>Data de Saída</label><p>${fmtD(r.date_out)}</p></div>${r.notes?`<div class="pdf-fi" style="grid-column:1/-1"><label>Observação</label><p>${r.notes}</p></div>`:''}</div>
    <table class="pdf-tbl"><thead><tr><th style="width:8%">#</th><th>Produto</th><th style="width:10%">Qtd.</th><th style="width:26%">N° Série</th></tr></thead>
    <tbody>${(r.request_items||[]).map((i,n)=>`<tr><td style="text-align:center">${n+1}</td><td>${i.name}</td><td style="text-align:center">${i.quantity}</td><td style="font-family:'DM Mono',monospace;font-size:10px">${i.serial_no||'—'}</td></tr>`).join('')}</tbody></table>
    <div class="pdf-sign"><div class="pdf-sign-box">Solicitante: ${r.users?.full_name||r.responsible}<br><br>___________________________</div><div class="pdf-sign-box">Almoxarifado / Responsável<br><br>___________________________</div></div>
  </div>
  <div class="mfooter"><button class="btn-out" onclick="closeModal()">Fechar</button><button class="btn-red" onclick="printPDF()"><i class="ti ti-printer"></i> Imprimir / Salvar PDF</button></div></div></div>`;
}
function printPDF(){
  const cnt=$('pdfcnt').innerHTML;
  const html=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Requisição</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&family=DM+Mono&display=swap" rel="stylesheet"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'DM Sans',sans-serif;color:#000;font-size:11px;padding:0}
  .pdf-wrap{padding:0}
  .pdf-hd{display:flex;align-items:center;gap:14px;padding-bottom:10px;margin-bottom:12px;border-bottom:2.5px solid #C8102E}
  .pdf-hd img{height:38px;width:auto;object-fit:contain;flex-shrink:0}
  .pdf-hd-txt h1{font-size:15px;font-weight:700;text-transform:uppercase;color:#C8102E;line-height:1.1}
  .pdf-hd-txt p{font-size:10px;color:#666;margin-top:2px}
  .pdf-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;background:#fafafa;border:1px solid #eee;padding:10px 12px;border-radius:6px;margin-bottom:12px}
  .pdf-fi label{font-size:8px;font-weight:700;text-transform:uppercase;color:#999;display:block;margin-bottom:1px}
  .pdf-fi p{font-size:11px;font-weight:600;border-bottom:1px solid #eee;padding-bottom:2px}
  table.pdf-tbl{width:100%;border-collapse:collapse;margin-bottom:10px}
  .pdf-tbl th,.pdf-tbl td{border:1px solid #ccc;padding:5px 7px;font-size:10px}
  .pdf-tbl th{background:#C8102E;color:#fff;font-weight:700;text-align:center}
  .pdf-tbl thead{display:table-header-group}
  .pdf-tbl tr{page-break-inside:avoid}
  .pdf-tbl td img{width:26px;height:26px;border-radius:3px;object-fit:cover;vertical-align:middle;margin-right:6px}
  .pdf-tbl td{vertical-align:middle}
  .pdf-sign{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:18px;page-break-inside:avoid}
  .pdf-sign-box{border-top:1.5px solid #C8102E;padding-top:6px;font-size:9px;text-align:center;color:#666}
  @page{size:A4;margin:14mm 12mm}
  @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style></head><body><div class="pdf-wrap">${cnt}</div></body></html>`;
  $('mc').innerHTML='<div class="moverlay"><div class="mbox" style="max-width:820px;max-height:92vh;overflow:hidden;padding:0;display:flex;flex-direction:column"><div style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #eee;flex-shrink:0"><span style="font-weight:700;font-size:13px;color:var(--text)">Pré-visualização da Requisição</span><div style="display:flex;gap:8px;align-items:center"><button class="btn-red" id="pdf-print-btn" style="font-size:12px;padding:6px 14px"><i class="ti ti-printer"></i> Imprimir / Salvar PDF</button><button class="mclose" style="position:static;transform:none;margin:0" onclick="closeModal()"><i class="ti ti-x"></i></button></div></div><iframe id="pdf-frame" name="pdf-frame" style="flex:1;border:none;min-height:70vh;background:#fff"></iframe></div></div>';
  const frame=$('pdf-frame');
  frame.contentDocument.open();
  frame.contentDocument.write(html);
  frame.contentDocument.close();
  $('pdf-print-btn').onclick=function(){frame.contentWindow.focus();frame.contentWindow.print();};
}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&$('login-screen').style.display!=='none')doLogin();});
