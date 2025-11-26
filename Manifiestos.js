// Base de datos de manifiestos
const manifiestos = {
    1: {
        titulo: "Bullying",
        subtitulo: "Encontrando mi valor más allá de las burlas",
        contenido: `
            <h2>Bullying</h2>
            <p>
                Cuando ingresé a un nuevo colegio fue como iniciar de cero sin conocer a nadie. Yo no era una persona muy sociable. Sin embargo, un familiar mío estudiaba allí y me presentó a uno de los pocos grupos de chicos que había en mi promoción, ya que era un colegio relativamente nuevo al volverse mixto, pues durante muchos años había sido femenino.
            </p>
            <p>
                Por ende, decidí quedarme con ese grupo de supuestos amigos, pero en realidad solo eran conocidos del colegio. Nunca aportaban nada a mi vida; al contrario, yo me convertí en el objeto de burla y el motivo de humillación para ellos. En el grupo me menospreciaban por mi físico, y eso me generó una gran inseguridad hacia mí mismo. Y, por no quedarme solo, decidí permanecer allí durante muchos años, soportando burlas y desprecios, reduciéndome como persona y generando en mí un constante rechazo y minimización en todo sentido, creyéndome el verdadero fracaso que ellos me habían hecho creer.
            </p>
            <p>
                Eso me generó ataques de histeria e incluso ansiedad, llegando a tener pensamientos suicidas, queriendo acabar con mi existencia por no ser "suficiente" para cumplir las supuestas expectativas que tenían hacia mí al querer convertirme en uno más de ellos: alguien degenerado y deplorable. También implantaron en mí una imagen negativa frente a las personas del salón, logrando que todos asimilaran que yo era igual que ellos.
            </p>
            <p>
                En ese momento me sentía muy solo… hasta que llegó un grupo de compañeras que me hizo sentir valorado y lo suficientemente capaz como para recuperar la confianza en mí mismo y abandonar a esas personas que solo me causaban infelicidad. Allí descubrí que uno no debe estar con alguien por obligación ni por miedo a sentirse solo, porque es mejor estar solo que mal acompañado.
            </p>
            <p>
                Buscar personas que lo acepten a uno tal y como es, sin obligarlo a cambiar, me permitió soltar muchas ataduras, superar inseguridades, ganar confianza en mí mismo y ampliar mis habilidades sociales, ya que yo era una persona muy cerrada a conocer nuevas personas. Empecé a socializar más con el salón y descubrí a mis verdaderos amigos, con quienes puedo ser yo mismo y sentirme libre, demostrándole a quienes tenían un pensamiento erróneo de mí que yo no era igual que las malas personas con las que andaba antes.
            </p>
            <p>
                <strong>Ahora soy alguien mucho más sociable, me siento cómodo conmigo mismo y he logrado formar carácter para no dejar que cualquier persona vuelva a minimizarme o menospreciarme.</strong>
            </p>
            <p style="text-align: right; opacity: 0.7;">-Anon.</p>
        `
    },
    2: {
        titulo: "Triste",
        subtitulo: "Una flor en el lugar equivocado",
        contenido: `
            <h2>Triste</h2>
            <p>
                Me siento como una flor en medio de la calle porque estoy en un lugar equivocado, un lugar que no me corresponde. Me siento así entre los carros aplastándome y yo marchitándome y muriendo poco a poco.
            </p>
        `
    },
    3: {
        titulo: "Memorias",
        subtitulo: "El miedo al tiempo y los recuerdos",
        contenido: `
            <h2>Memorias</h2>
            <p>
                Me asusta el concepto del tiempo y de las memorias, más que todo de cosas que nunca se podrán volver a vivir con exactitud. Me da miedo la forma en la que nuestro cerebro no guarda todo lo que vivimos como quisiera, si no lo "más importante" o crea recuerdos falsos. Me da miedo también preocuparme por futuros que ni siquiera van a pasar, y en realidad eso es lo que menos le deseo a alguien.
            </p>
            <p>
                <strong>Y a todos los que lean esto, les deseo que disfruten su presente y amen a los que tengan que amar ahora y nunca jamás piensen en remordimientos de algo que no hicieron.</strong>
            </p>
            <p style="text-align: right; opacity: 0.7;">-Ano</p>
        `
    },
    4: {
        titulo: "Esperanza",
        subtitulo: "Encontrando luz en la oscuridad",
        contenido: `
            <h2>Esperanza</h2>
            <p>
                Fui yo, todo este tiempo fui yo, la responsabilidad de estar enterrado en un vacío de agonía interminable fui yo mismo, mis ideas precipitadas, pesimistas e inmaduras me enterraron allí por un largo tiempo, pensando que me lo merecía me seguía torturando en este ciclo interminable de sufrimiento, llegando incluso a un extremo de la auto-lesión con la excusa de supuestamente merecerlo.
            </p>
            <p>
                Estuve vagando dentro de mis ideas hasta que encontré un viejo concepto que no tocaba desde hace tiempo "esperanza". Llegué a aborrecerla durante mucho tiempo, me negué a volver a tenerla con el discurso errado de "cada vez que tengo esperanza la vida me pisotea, me humilla y me da más razones para no tenerla". Tal vez debía de darme cuenta que tener esperanza me hacía ser humano, quizá las cosas no están bien ahora mismo pero ¿Qué pasaría si con una pizca mínima de esperanza hallo el refugio de la soledad a la que me someto y empiezo a cambiar?
            </p>
            <p>
                Porque a pesar de la depresión a la que yo mismo me induje aún había esperanza en mí, encerrado en la oscuridad esta pequeña pizca de esperanza me hizo tener entre una ola de pensamientos negativos y pesimistas una pizca de lo que era tener esperanza, una vida sin la sombra de lo que me pasaba, siendo mejor en todos los aspectos posibles. Así fue cuando hice la pregunta ¿Tengo la oportunidad de ser mejor persona? Quizás debía cambiar yo para que las cosas alrededor cambiarán, quizás yo no era el problema, tal vez yo era parte de él.
            </p>
            <p>
                Fui yo, todo este tiempo fui yo, la responsabilidad de estar enterrado en un vacío de agonía interminable fui yo mismo, pero también fui aquel que pudo reconocer a tiempo este error y pudo encontrar esperanza en la hora más oscura de su vida.
            </p>
            <p>
                <strong>Tengo esperanza gracias a mí, mis refugios, mis nuevos pensamientos, mis lugares seguros yo mismos los creé, yo puedo darme esperanza.</strong>
            </p>
            <p style="text-align: right; opacity: 0.7;">- Nicolas Aguiar</p>
        `
    }
};

// Función para abrir un manifiesto
function abrirManifiesto(id) {
    const panel = document.getElementById('panel-manifiesto');
    const contenido = document.getElementById('manifiesto-contenido');
    
    if (manifiestos[id]) {
        contenido.innerHTML = manifiestos[id].contenido;
        panel.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
}

// Función para cerrar el manifiesto
function cerrarManifiesto() {
    const panel = document.getElementById('panel-manifiesto');
    panel.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Cerrar con la tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarManifiesto();
    }
});

// Cerrar al hacer clic fuera del contenido
document.getElementById('panel-manifiesto').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarManifiesto();
    }
});
