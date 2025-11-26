// Opciones
document.querySelectorAll(".opcion").forEach(btn => {
    btn.addEventListener("click", function () {
        const tipo = btn.dataset.opcion;
        const panel = document.getElementById("panel-info");

        // Alternar selección
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            panel.textContent = "Selecciona una opción para ver entrenos.";
            document.querySelectorAll(".opcion").forEach(b => b.classList.remove("selected"));
            return;
        }
        document.querySelectorAll(".opcion").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        if (tipo === "casa") {
            panel.innerHTML = `
                Buena opción para empezar, Vamos todo hombre empieza haciendo flexiones en la soledad de su cuarto
                <button class="btn-calendario" data-tipo="casa">Calendario de casa</button>
            `;
        } else if (tipo === "gimnasio") {
            panel.innerHTML = `
                La mejor de todas, ¿Quieres un fisico completo y estas dispuesto a ir a un Gym? ve al calendario.
                <button class="btn-calendario" data-tipo="gimnasio">Calendario gimnasio</button>
            `;
        } else if (tipo === "calistenia") {
            panel.innerHTML = `
                alo flacow? Es broma, desarrollar fuerza  y un fisico atletico es importante, te va a gustar esta rutina creeme.
                <button class="btn-calendario" data-tipo="calistenia">Calendario calistenia</button>
            `;
        }

        // Agregar evento al botón de calendario después de crearlo
        setTimeout(() => {
            const btnCalendario = panel.querySelector(".btn-calendario");
            if (btnCalendario) {
                btnCalendario.addEventListener("click", function() {
                    const tipoCalendario = this.dataset.tipo;
                    mostrarCalendario(tipoCalendario);
                });
            }
        }, 0);
    });
});

// Función para mostrar el calendario
function mostrarCalendario(tipo) {
    const panel = document.getElementById("panel-info");
    
    let contenidoCalendario = "";
    
    if (tipo === "casa") {
        contenidoCalendario = `
            <div class="calendario">
                <h2>Calendario de Entrenos en Casa</h2>
                <div class="semana">
                    <div class="dia">
                        <h3>🔥 Lunes</h3>
                        <p>PUSH (Pecho, Hombro, Tríceps)</p>
                        <ul>
                            <li>Flexiones (push-ups): 2-3x8-15</li>
                            <li>Flexiones declinadas (pies elevados): 2-3x6-12</li>
                            <li>Pike push-ups (flexiones estilo pike): 2-3x6-12</li>
                            <li>Fondos entre sillas (dips caseros): 2-3x6-10</li>
                            <li>Extensión de tríceps con banda/mochila: 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>💀 Martes</h3>
                        <p>PULL (Espalda, Bíceps)</p>
                        <ul>
                            <li>Remo con mochila o banda: 2-3x10-15</li>
                            <li>Remo inclinado a una mano (mochila pesada): 2-3x8-12 por lado</li>
                            <li>Pullovers con mochila/banda: 2-3x10-15</li>
                            <li>Curl con mochila/banda: 2-3x8-15</li>
                            <li>Hammer curl con mochila/banda: 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>💤 Miércoles</h3>
                        <p>Descanso Activo</p>
                        <ul>
                            <li>Caminata, estiramientos, movilidad</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>🔥 Jueves</h3>
                        <p>PUSH (repetición del lunes)</p>
                        <ul>
                            <li>Flexiones (push-ups): 2-3x8-15</li>
                            <li>Flexiones declinadas (pies elevados): 2-3x6-12</li>
                            <li>Pike push-ups (flexiones estilo pike): 2-3x6-12</li>
                            <li>Fondos entre sillas (dips caseros): 2-3x6-10</li>
                            <li>Extensión de tríceps con banda/mochila: 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>⚡ Viernes</h3>
                        <p>LEGS + CORE</p>
                        <ul>
                            <li>Sentadillas con mochila: 2-3x10-20</li>
                            <li>Zancadas (lunges): 2-3x8-12 por pierna</li>
                            <li>Sentadilla búlgara (pies en silla): 2-3x6-12 por pierna</li>
                            <li>Peso muerto rumano con mochila: 2-3x10-15</li>
                            <li>Elevación de pantorrilla en escalón: 2-3x15-25</li>
                            <li>Planchas/Hollow hold: 2-3x20-40seg</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>Fin de Semana</h3>
                        <p>Descanso y recuperación</p>
                    </div>
                </div>
                <button class="btn-volver" onclick="volverOpciones()">← Volver</button>
            </div>
        `;
    } else if (tipo === "gimnasio") {
        contenidoCalendario = `
            <div class="calendario">
                <h2>Calendario de Gimnasio</h2>
                <div class="semana">
                    <div class="dia">
                        <h3>🟥 Lunes</h3>
                        <p>PUSH A (Pecho, hombros, tríceps)</p>
                        <ul>
                            <li>Press de banca o banca inclinada: 3x6-10</li>
                            <li>Press militar o mancuernas: 2-3x6-10</li>
                            <li>Aperturas en máquina/mancuernas: 2x10-12</li>
                            <li>Fondos en paralelas: 2x6-12</li>
                            <li>Extensiones de tríceps en polea: 2-3x10-12</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>🟦 Martes</h3>
                        <p>PULL A (Espalda, bíceps, posterior del hombro)</p>
                        <ul>
                            <li>Dominadas o jalón al pecho: 3x6-10</li>
                            <li>Remo con barra/T-bar: 3x6-10</li>
                            <li>Face pulls/aperturas inversas: 2-3x12-15</li>
                            <li>Peso muerto rumano o remo a una mano: 2x8-10</li>
                            <li>Curl de bíceps: 2-3x8-12</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>🟩 Miércoles</h3>
                        <p>LEGS (Piernas completas)</p>
                        <ul>
                            <li>Sentadilla, hack o prensa: 3x8-12</li>
                            <li>Extensiones de cuádriceps: 2-3x10-15</li>
                            <li>Peso muerto rumano o curl femoral: 2-3x8-12</li>
                            <li>Gemelos: 3x12-20</li>
                            <li>Abs (crunch o rodillo): 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>🔥 Jueves</h3>
                        <p>PUSH B (Mayor trabajo de hombro/pecho superior)</p>
                        <ul>
                            <li>Press inclinado (mancuernas o barra): 3x6-10</li>
                            <li>Press militar estricto: 3x6-10</li>
                            <li>Fondos/dips enfocados en pecho: 2x8-12</li>
                            <li>Elevaciones laterales: 2-3x12-15</li>
                            <li>Extensión overhead (tríceps): 2-3x10-12</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>🔵 Viernes</h3>
                        <p>PULL B (Más tirón vertical y foco en densidad)</p>
                        <ul>
                            <li>Jalón al pecho agarre amplio: 3x8-12</li>
                            <li>Remo en máquina/sentado: 3x8-12</li>
                            <li>Face pulls o pájaros: 2-3x12-15</li>
                            <li>Curl martillo: 2-3x10-12</li>
                            <li>Encogimientos para trapecio: 2-3x8-12</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>Fin de Semana</h3>
                        <p>Descanso y recuperación</p>
                    </div>
                </div>
                <button class="btn-volver" onclick="volverOpciones()">← Volver</button>
            </div>
        `;
    } else if (tipo === "calistenia") {
        contenidoCalendario = `
            <div class="calendario">
                <h2>Calendario de Calistenia</h2>
                <div class="semana">
                    <div class="dia">
                        <h3>🔥 Lunes</h3>
                        <p>PUSH (Pecho, Hombro, Tríceps)</p>
                        <ul>
                            <li>Flexiones (push-ups): 2-3x8-15</li>
                            <li>Flexiones declinadas (pies elevados): 2-3x6-12</li>
                            <li>Pike push-ups (flexiones estilo pike): 2-3x6-12</li>
                            <li>Fondos entre sillas (dips caseros): 2-3x6-10</li>
                            <li>Extensión de tríceps con banda/mochila: 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>💀 Martes</h3>
                        <p>PULL (Espalda, Bíceps)</p>
                        <ul>
                            <li>Remo con mochila o banda: 2-3x10-15</li>
                            <li>Remo inclinado a una mano (mochila pesada): 2-3x8-12 por lado</li>
                            <li>Pullovers con mochila/banda: 2-3x10-15</li>
                            <li>Curl con mochila/banda: 2-3x8-15</li>
                            <li>Hammer curl con mochila/banda: 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>💤 Miércoles</h3>
                        <p>Descanso Activo</p>
                        <ul>
                            <li>Caminata, estiramientos, movilidad</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>🔥 Jueves</h3>
                        <p>PUSH (repetición del lunes)</p>
                        <ul>
                            <li>Flexiones (push-ups): 2-3x8-15</li>
                            <li>Flexiones declinadas (pies elevados): 2-3x6-12</li>
                            <li>Pike push-ups (flexiones estilo pike): 2-3x6-12</li>
                            <li>Fondos entre sillas (dips caseros): 2-3x6-10</li>
                            <li>Extensión de tríceps con banda/mochila: 2-3x10-15</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>⚡ Viernes</h3>
                        <p>LEGS + CORE</p>
                        <ul>
                            <li>Sentadillas con mochila (o sin peso): 2-3x10-20</li>
                            <li>Zancadas (lunges): 2-3x8-12 por pierna</li>
                            <li>Sentadilla búlgara (pies en silla): 2-3x6-12 por pierna</li>
                            <li>Peso muerto rumano con mochila: 2-3x10-15</li>
                            <li>Elevación de pantorrilla en escalón: 2-3x15-25</li>
                            <li>Planchas/Hollow hold: 2-3x20-40seg</li>
                        </ul>
                    </div>
                    <div class="dia">
                        <h3>Fin de Semana</h3>
                        <p>Descanso y recuperación</p>
                    </div>
                </div>
                <button class="btn-volver" onclick="volverOpciones()">← Volver</button>
            </div>
        `;
    }
    
    panel.innerHTML = contenidoCalendario;
}

// Función para volver a las opciones
function volverOpciones() {
    const panel = document.getElementById("panel-info");
    panel.textContent = "Selecciona una opción para ver entrenos.";
    document.querySelectorAll(".opcion").forEach(b => b.classList.remove("selected"));
}

