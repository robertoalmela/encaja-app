// ==================== CALCULADORA DESPIECE DE CARPINTERÍA ====================
// Encaja.app — v2.0

// -------- Estado global --------
let state = {
    materials: [],      // { id, name, w, l, thickness, kerf }
    parts: [],          // { id, materialId, name, w, l, qty }
    activeMaterial: null,
};

// Helper: obtener productos disponibles o presets por defecto
function getProductOptions() {
    if (typeof PRODUCTOS_TABLEROS !== 'undefined' && PRODUCTOS_TABLEROS.length > 0) {
        return PRODUCTOS_TABLEROS.map(p => ({
            id: p.id,
            name: p.nombre,
            w: p.ancho,
            l: p.largo,
            thickness: p.espesor,
            kerf: 3,
            precio: p.precio,
            tienda: p.tienda
        }));
    }
    // Fallback si no hay productos cargados
    return [
        { name: 'Melamina Blanca 18mm',   w: 122, l: 244, thickness: 18, kerf: 3 },
        { name: 'DM 16mm',                w: 122, l: 244, thickness: 16, kerf: 3 },
        { name: 'Contrachapado 15mm',     w: 122, l: 244, thickness: 15, kerf: 3 },
        { name: 'OSB 18mm',               w: 125, l: 250, thickness: 18, kerf: 3 },
        { name: 'Tropical Roble 19mm',    w: 90,  l: 240, thickness: 19, kerf: 3 },
    ];
}

// -------- UI helpers --------
function switchTab(name) {
    document.querySelectorAll('.config-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    document.getElementById('tab-' + name).setAttribute('aria-selected', 'true');
    document.getElementById('panel-' + name).classList.add('active');
}

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

// -------- MATERIALES --------
function addMaterial() {
    const products = getProductOptions();
    const hasProducts = typeof PRODUCTOS_TABLEROS !== 'undefined' && PRODUCTOS_TABLEROS.length > 0;

    if (hasProducts) {
        // Mostrar selector de productos reales
        showProductSelector(products);
    } else {
        // Fallback: usar el primer preset disponible (comportamiento original)
        addMaterialFromProduct(products[0]);
    }
}

// Muestra un pequeño dropdown modal para seleccionar producto o custom
function showProductSelector(products) {
    // Crear overlay ligero
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.3); z-index:999; display:flex; align-items:center; justify-content:center;';
    
    const modal = document.createElement('div');
    modal.style.cssText = 'background:#fff; border-radius:12px; padding:20px; max-width:420px; width:90%; box-shadow:0 8px 30px rgba(0,0,0,0.2); font-family:Inter,sans-serif;';
    
    modal.innerHTML = `
        <h3 style="margin:0 0 12px; font-size:1rem; font-weight:700; color:#1a1a1a;">Seleccionar tablero</h3>
        <p style="margin:0 0 12px; font-size:.82rem; color:#666;">Elige un producto o rellena los datos manualmente.</p>
        <div style="margin-bottom:10px;">
            <label style="font-size:.78rem; font-weight:600; color:#444; display:block; margin-bottom:4px;">Productos disponibles</label>
            <select id="productSelector" style="width:100%; padding:8px 10px; border:1.5px solid #ddd; border-radius:8px; font-size:.85rem; background:#fff;">
                <option value="">— Personalizado —</option>
                ${products.map(p => `<option value="${p.id}">${p.name} — ${p.w}×${p.l}cm ×${p.thickness}mm · ${p.precio ? p.precio.toFixed(2)+'€' : ''} (${p.tienda || ''})</option>`).join('')}
            </select>
        </div>
        <div style="display:flex; gap:8px; justify-content:flex-end; margin-top:14px;">
            <button id="btnProductCancel" style="padding:8px 16px; border:1.5px solid #ddd; border-radius:8px; background:#fff; font-size:.85rem; cursor:pointer; font-weight:600;">Cancelar</button>
            <button id="btnProductSelect" style="padding:8px 16px; border:none; border-radius:8px; background:#065F46; color:#fff; font-size:.85rem; cursor:pointer; font-weight:600;">Añadir tablero</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Manejar selección
    const select = modal.querySelector('#productSelector');
    const btnSelect = modal.querySelector('#btnProductSelect');
    const btnCancel = modal.querySelector('#btnProductCancel');
    
    btnSelect.addEventListener('click', () => {
        const selectedId = select.value;
        if (selectedId) {
            // Producto real seleccionado
            const product = products.find(p => p.id === selectedId);
            if (product) addMaterialFromProduct(product);
        } else {
            // Custom: abrir el editor de tablero vacío
            addMaterialCustom();
        }
        document.body.removeChild(overlay);
    });
    
    btnCancel.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    });
}

// Añade un tablero a partir de datos de producto (o preset)
function addMaterialFromProduct(product) {
    const mat = {
        id:        uid(),
        name:      product.name,
        w:         product.w,
        l:         product.l,
        thickness: product.thickness,
        kerf:      product.kerf || 3,
    };
    state.materials.push(mat);
    setActiveMaterial(mat.id);
    renderMaterialList();
    renderMaterialSelects();
}

// Añade un tablero custom con valores por defecto vacíos
function addMaterialCustom() {
    const mat = {
        id:        uid(),
        name:      'Tablero personalizado',
        w:         122,
        l:         244,
        thickness: 18,
        kerf:      3,
    };
    state.materials.push(mat);
    setActiveMaterial(mat.id);
    renderMaterialList();
    renderMaterialSelects();
}

function setActiveMaterial(id) {
    state.activeMaterial = id;
    const mat = state.materials.find(m => m.id === id);
    if (!mat) {
        document.getElementById('boardEditor').style.display = 'none';
        return;
    }
    document.getElementById('boardEditor').style.display = '';
    document.getElementById('boardNameInp').value      = mat.name;
    document.getElementById('boardWidthInp').value     = mat.w;
    document.getElementById('boardLengthInp').value    = mat.l;
    document.getElementById('boardThicknessInp').value = mat.thickness;
    document.getElementById('bladeKerfInp').value      = mat.kerf;
    renderMaterialList();
}

function saveBoardConfig() {
    const mat = state.materials.find(m => m.id === state.activeMaterial);
    if (!mat) return;
    mat.name      = document.getElementById('boardNameInp').value.trim() || mat.name;
    mat.w         = parseFloat(document.getElementById('boardWidthInp').value)     || mat.w;
    mat.l         = parseFloat(document.getElementById('boardLengthInp').value)    || mat.l;
    mat.thickness = parseFloat(document.getElementById('boardThicknessInp').value) || mat.thickness;
    mat.kerf      = parseFloat(document.getElementById('bladeKerfInp').value)      || mat.kerf;
    renderMaterialList();
    renderMaterialSelects();
    renderPartsTable();
}

function deleteMaterial(id) {
    state.materials = state.materials.filter(m => m.id !== id);
    state.parts     = state.parts.filter(p => p.materialId !== id);
    if (state.activeMaterial === id) {
        state.activeMaterial = state.materials[0]?.id || null;
        if (state.activeMaterial) {
            setActiveMaterial(state.activeMaterial);
        } else {
            document.getElementById('boardEditor').style.display = 'none';
        }
    }
    renderMaterialList();
    renderMaterialSelects();
    renderPartsTable();
    updateStats();
}

function renderMaterialList() {
    const el = document.getElementById('materialList');
    if (state.materials.length === 0) {
        el.innerHTML = '<p style="font-size:.82rem; color:var(--dust); text-align:center; padding:12px 0;">Sin tableros — añade uno abajo</p>';
        return;
    }
    el.innerHTML = state.materials.map(mat => `
        <div class="material-chip ${mat.id === state.activeMaterial ? 'active' : ''}"
             onclick="setActiveMaterial('${mat.id}')">
            <div>
                <div>${mat.name}</div>
                <div class="material-chip-info">${mat.w}×${mat.l} cm — ${mat.thickness}mm</div>
            </div>
            <button class="chip-del" onclick="event.stopPropagation(); deleteMaterial('${mat.id}')" aria-label="Eliminar tablero">✕</button>
        </div>
    `).join('');
}

function renderMaterialSelects() {
    const opts = state.materials.length
        ? state.materials.map(m => `<option value="${m.id}">${m.name}</option>`).join('')
        : '<option value="">— Sin tableros —</option>';
    ['modMaterial', 'partMaterial'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = opts;
    });
}

// -------- MÓDULOS --------
function addModule() {
    const w     = parseFloat(document.getElementById('modWidth').value);
    const h     = parseFloat(document.getElementById('modHeight').value);
    const d     = parseFloat(document.getElementById('modDepth').value);
    const qty   = parseInt(document.getElementById('modQty').value)     || 1;
    const doors = parseInt(document.getElementById('modDoors').value)   || 0;
    const drawers = parseInt(document.getElementById('modDrawers').value) || 0;
    const matId = document.getElementById('modMaterial').value;

    if (!w || !h || !d) { alert('Introduce todas las dimensiones del módulo.'); return; }
    if (!matId) { alert('Añade al menos un tablero primero.'); return; }

    const mat = state.materials.find(m => m.id === matId);
    const esp = mat ? mat.thickness / 10 : 1.8; // en cm

    // Piezas estándar de un módulo (× qty)
    const piezas = [
        { name: 'Lateral',  w: d,       l: h,       q: 2     },
        { name: 'Base',     w: d - esp, l: w - 2*esp, q: 1   },
        { name: 'Techo',    w: d - esp, l: w - 2*esp, q: 1   },
        { name: 'Fondo',    w: w,       l: h,         q: 1   },
    ];

    if (doors > 0) {
        const doorW = (w / doors) + 2; // solapado 2cm
        piezas.push({ name: 'Puerta', w: d > 0 ? doorW : w / doors, l: h + 4, q: doors });
    }
    if (drawers > 0) {
        const drawerH = (h - 4) / drawers;
        piezas.push({ name: 'Frente cajón', w: w - 4, l: drawerH, q: drawers });
    }

    piezas.forEach(p => {
        state.parts.push({
            id: uid(), materialId: matId,
            name: p.name, w: Math.round(p.w * 10) / 10,
            l: Math.round(p.l * 10) / 10, qty: p.q * qty,
        });
    });

    renderPartsTable();
    updateStats();
}

// -------- PIEZA SUELTA --------
function addPart() {
    const name  = document.getElementById('partName').value.trim() || 'Pieza';
    const w     = parseFloat(document.getElementById('partWidth').value);
    const l     = parseFloat(document.getElementById('partLength').value);
    const qty   = parseInt(document.getElementById('partQty').value) || 1;
    const matId = document.getElementById('partMaterial').value;

    if (!w || !l) { alert('Introduce el ancho y el largo de la pieza.'); return; }
    if (!matId)   { alert('Añade al menos un tablero primero.'); return; }

    state.parts.push({ id: uid(), materialId: matId, name, w, l, qty });
    renderPartsTable();
    updateStats();

    ['partName','partWidth','partLength'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('partQty').value = '1';
}

function deletePart(id) {
    state.parts = state.parts.filter(p => p.id !== id);
    renderPartsTable();
    updateStats();
}

function renderPartsTable() {
    const tbody = document.getElementById('partsAutoList');
    const count = document.getElementById('partsCount');
    if (!state.parts.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="table-empty">Añade módulos o piezas → empezarán a aparecer aquí</td></tr>';
        count.textContent = 'Sin piezas';
        return;
    }
    count.textContent = `${state.parts.length} líneas · ${state.parts.reduce((s, p) => s + p.qty, 0)} piezas`;
    tbody.innerHTML = state.parts.map(p => {
        const mat = state.materials.find(m => m.id === p.materialId);
        return `<tr>
            <td><span class="part-badge">${mat ? mat.name.split(' ')[0] : '?'}</span></td>
            <td>${p.name}</td>
            <td>${p.w} cm</td>
            <td>${p.l} cm</td>
            <td>${p.qty}</td>
            <td><button class="btn-del-part" onclick="deletePart('${p.id}')" aria-label="Eliminar pieza">✕</button></td>
        </tr>`;
    }).join('');
}

function updateStats() {
    const totalPieces = state.parts.reduce((s, p) => s + p.qty, 0);
    document.getElementById('statParts').textContent = totalPieces;
    document.getElementById('statBoards').textContent = '—';
    document.getElementById('statYield').textContent = '—';
}

function clearAll() {
    if (!confirm('¿Eliminar todas las piezas y tableros?')) return;
    state.parts = [];
    state.materials = [];
    state.activeMaterial = null;
    renderMaterialList();
    renderMaterialSelects();
    renderPartsTable();
    updateStats();
    document.getElementById('boardEditor').style.display = 'none';
    document.getElementById('visualizerContainer').innerHTML = `
        <div class="visualizer-empty" id="visualizerEmpty">
            <span class="visualizer-empty-icon">🪚</span>
            <p>Pulsa «Calcular Despiece» para ver la distribución óptima de cortes.</p>
        </div>`;
}

// ==================== ALGORITMO BIN-PACKING (Guillotine) ====================
// Devuelve: { boardsUsed: [{placements, boardW, boardL, matName}], yield }

function runCalculation() {
    if (!state.parts.length) { alert('Añade piezas antes de calcular.'); return; }

    const container = document.getElementById('visualizerContainer');
    container.innerHTML = '';

    let totalBoardsUsed = 0;
    let totalArea = 0;
    let usedArea  = 0;

    // Agrupar piezas por material
    const byMat = {};
    state.parts.forEach(p => {
        if (!byMat[p.materialId]) byMat[p.materialId] = [];
        for (let i = 0; i < p.qty; i++) {
            byMat[p.materialId].push({ name: p.name, w: p.w, l: p.l });
        }
    });

    Object.entries(byMat).forEach(([matId, pieces]) => {
        const mat = state.materials.find(m => m.id === matId);
        if (!mat) return;

        const kerf = mat.kerf / 10; // cm
        const bW = mat.w;
        const bL = mat.l;

        // Ordenar piezas de mayor a menor área
        pieces.sort((a, b) => (b.w * b.l) - (a.w * a.l));

        const boards = [];
        pieces.forEach(piece => {
            let placed = false;
            for (const board of boards) {
                if (tryPlace(board, piece, kerf)) { placed = true; break; }
            }
            if (!placed) {
                const newBoard = { w: bW, l: bL, placements: [], spaces: [{ x: 0, y: 0, w: bW, l: bL }] };
                boards.push(newBoard);
                tryPlace(newBoard, piece, kerf);
            }
        });

        totalBoardsUsed += boards.length;
        totalArea += boards.length * bW * bL;
        boards.forEach(b => b.placements.forEach(p => usedArea += p.w * p.l));

        // Renderizar
        boards.forEach((board, idx) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'board-canvas-wrapper';
            wrapper.innerHTML = `<div class="board-title">
                ${mat.name} — Tablero ${idx + 1} de ${boards.length}
                <span class="board-title-badge">${bW}×${bL} cm</span>
            </div>`;

            const SCALE = Math.min(700 / bW, 400 / bL, 2.5);
            const canvas = document.createElement('canvas');
            canvas.width  = Math.round(bW * SCALE);
            canvas.height = Math.round(bL * SCALE);
            canvas.style.background = '#f9f7f3';
            canvas.setAttribute('role', 'img');
            canvas.setAttribute('aria-label', `Tablero ${idx + 1} de ${mat.name}`);

            const ctx = canvas.getContext('2d');

            // Fondo del tablero
            ctx.fillStyle = '#f2ede4';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Borde tablero
            ctx.strokeStyle = '#c4b99a';
            ctx.lineWidth = 2;
            ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);

            // Piezas
            const colors = ['#A7F3D0','#BAE6FD','#FDE68A','#FBCFE8','#C7D2FE','#FED7AA','#D1FAE5'];
            board.placements.forEach((pl, i) => {
                const color = colors[i % colors.length];
                const px = pl.x * SCALE, py = pl.y * SCALE;
                const pw = pl.w * SCALE, ph = pl.l * SCALE;
                const padding = 1;

                ctx.fillStyle = color;
                ctx.fillRect(px + padding, py + padding, pw - padding*2, ph - padding*2);

                ctx.strokeStyle = 'rgba(0,0,0,0.15)';
                ctx.lineWidth = 1;
                ctx.strokeRect(px + padding, py + padding, pw - padding*2, ph - padding*2);

                // Nombre pieza
                ctx.fillStyle = 'rgba(0,0,0,0.65)';
                ctx.font = `600 ${Math.min(pw / 6, 12)}px Inter, sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const label = `${pl.name}\n${pl.w}×${pl.l}`;
                const lines = label.split('\n');
                const lineH  = Math.min(pw / 6, 12) * 1.3;
                lines.forEach((line, li) => {
                    const yPos = py + ph / 2 + (li - (lines.length - 1) / 2) * lineH;
                    ctx.fillText(line, px + pw / 2, yPos);
                });
            });

            // Medidas tablero
            ctx.fillStyle = '#666';
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(`${bW} cm`, 6, 6);

            wrapper.appendChild(canvas);
            container.appendChild(wrapper);
        });
    });

    // Actualizar stats
    document.getElementById('statBoards').textContent = totalBoardsUsed;
    const yieldPct = totalArea > 0 ? Math.round((usedArea / totalArea) * 100) : 0;
    document.getElementById('statYield').textContent = yieldPct + '%';
}

// -------- Algoritmo guillotine simple --------
function tryPlace(board, piece, kerf) {
    for (let i = 0; i < board.spaces.length; i++) {
        const sp = board.spaces[i];
        // Orientación normal
        if (piece.w + kerf <= sp.w && piece.l + kerf <= sp.l) {
            placeInSpace(board, i, piece.w, piece.l, piece.name, kerf);
            return true;
        }
        // Girada 90°
        if (piece.l + kerf <= sp.w && piece.w + kerf <= sp.l) {
            placeInSpace(board, i, piece.l, piece.w, piece.name + '↻', kerf);
            return true;
        }
    }
    return false;
}

function placeInSpace(board, spaceIdx, pw, pl, name, kerf) {
    const sp = board.spaces.splice(spaceIdx, 1)[0];
    board.placements.push({ x: sp.x, y: sp.y, w: pw, l: pl, name });

    const rightW = sp.w - pw - kerf;
    const bottomL = sp.l - pl - kerf;

    if (rightW > 1)   board.spaces.push({ x: sp.x + pw + kerf, y: sp.y, w: rightW, l: pl });
    if (bottomL > 1)  board.spaces.push({ x: sp.x, y: sp.y + pl + kerf, w: sp.w, l: bottomL });

    board.spaces.sort((a, b) => (a.y - b.y) || (a.x - b.x));
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderMaterialList();
    renderMaterialSelects();
    renderPartsTable();
    updateStats();
});
