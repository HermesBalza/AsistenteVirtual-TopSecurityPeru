const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoSeis = addKeyword('6')
.addAnswer(
    [
        '📴 Has apagado el *Bot*. 👋🏼',
        '',
        '🕜 *Horario de Atención al Cliente*:',
            '',
            '*Lun. a Vie.*: 10:00am - 7:00pm',
            '*Sab.*: 10:00am - 3:00pm.',
            '*Dom.*: No Laborables.',
        '',
        'Si estás en Horario de Atención, en breve serás atendido por un *Representante de Ventas*. Mientras tanto por favor indícanos tu *Nombre* y tu *Correo Electrónico*.',
        '',
        'Si deseas *✅ volver a activar el Chatbot*, envía la palabra *"Chatbot"*.'],

        {delay:2000},
        
        )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoCinco = addKeyword('5')
.addAnswer(
    [
    '*CONTACTOS*',
    '',
    '*Dirección:*',
    '📍 Av. Inca Garcilaso de la Vega (Wilson), Tienda N°148, Nivel 2B, Lima - Perú (Centro Comercial Cyber Plaza).',
    '',
    '*Teléfonos:*',
    '☎️ (01) 399-6684',
    '📱 983428926 / 945035320 / 995228441',
    '',
    '*Email:*',
    '📧 ventas@topsecurityperu.com',
    '',
    '*Página Web:*',
    '🖱️ www.topsecurityperu.com',
    '',
    '*CUENTAS BANCARIAS*',
    '',
    '*Yape:* 945035320',
    '*Plin:* 945035320',
    '',
    '*Banco:* BCP',
    '*Titular:* OPTIMAX SRL',
    'Cuenta Corriente en Soles',
    '191-1748-449099',
    '*CCI:* 00219100174844909954',
    '',
    'Envía la palabra *"Menú"* para ⏪ *Volver al Menú Principal*.'], {delay:2000,capture:true},

    (ctx, {gotoFlow}) => {

        if(ctx.body.includes(['Menu','Menú'])) {
            return gotoFlow(TSPflujoBot)
        }

        if(!ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
            return gotoFlow(TSPIncorrecto1)
        }}) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoCuatro = addKeyword('4')
.addAnswer(
    [
    '*PROMOCIONES Y OFERTAS DE LA SEMANA*',
    '',
    'Estás son las 🥳 *Promociones y Ofertas de la Semana* 🎊',
    '_Accede al siguiente enlace_: 👇🏼',
    '',
    '🎁 https://bit.ly/RemateDeLaSemana',
    '',
    '',
    '*más opciones...*',
    '',
    'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y aprovechar nuestros Productos en Promoción. 👨🏻‍💻👩🏻‍💻',
    '',
    'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'], {media:'https://topsecurityperu.com/wp-content/uploads/2023/04/Promociones-de-la-semana.jpg',capture:true}, (ctx, {gotoFlow,fallBack}) => {
        
        if(ctx.body.includes('Comprar')) {
                
            return gotoFlow(TSPflujoComprar)
            
        }
    
        if(ctx.body.includes(['Menu','Menú'])) {
            
            return gotoFlow(TSPflujoBot)
            
        }
    
        if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
            
            return gotoFlow(TSPIncorrecto1)
        
        }
    
    }) 
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoTres = addKeyword('3')
.addAnswer(
    [
    '*RELOJES DE CONTROL DE ASISTENCIA y ACCESO*',
    '',
    'Para conocer el Catalogo de *Relojes Biométricos para el Control de Acceso y Asistencia*, accede al siguiente enlace: 👇🏼',
    '',
    '📟 https://bit.ly/AccesoyAsistencia',
    '',
    '',
    '*más opciones...*',
    '',
    'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir uno de nuestros Biométricos. 👨🏻‍💻👩🏻‍💻',
    '',
    'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'], {media:'https://topsecurityperu.com/wp-content/uploads/2023/04/Biometricos-MailRelay.png',capture:true}, (ctx, {gotoFlow,fallBack}) => {
        
        if(ctx.body.includes('Comprar')) {
            
            return gotoFlow(TSPflujoComprar)
            
        }
    
        if(ctx.body.includes(['Menu','Menú'])) {
            
            return gotoFlow(TSPflujoBot)
            
        }
    
        if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
            
            return gotoFlow(TSPIncorrecto1)
        
        }
    
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoDos = addKeyword('2')
.addAnswer(
    [
    '*CÁMARAS IP WIFI*',
    '',
    'Para conocer el Catalogo de nuestras *Cámaras IP WiFi*, accede al siguiente enlace: 👇🏼',
    '',
    '🛜 https://bit.ly/CamarasIPWifi',
    '',
    '',
    '*más opciones...*',
    '',
    'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir uno de nuestras Cámaras Inalámbricas. 👨🏻‍💻👩🏻‍💻',
    '',
    'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'], {media:'https://topsecurityperu.com/wp-content/uploads/2023/04/Camaras-IP-WiFiMailRelay-scaled.jpg',capture:true}, (ctx, {gotoFlow,fallBack}) => {
        
        if(ctx.body.includes('Comprar')) {
            
            return gotoFlow(TSPflujoComprar)
            
        }

        if(ctx.body.includes(['Menu','Menú'])) {
            
            return gotoFlow(TSPflujoBot)
            
        }

        if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
            
            return gotoFlow(TSPIncorrecto1)
        
        }
    
    }) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoUno = addKeyword('1')
.addAnswer(
    [
    '*KITS DE CÁMARAS DE SEGURIDAD*',
    '',
    'Para conocer el Catalogo de nuestros *Kits de Cámaras de Seguridad*, accede al siguiente enlace: 👇🏼',
    '',
    '🎦 https://bit.ly/KITSCamarasDeSeguridad',
    '',
    '',
    '*más opciones...*',
    '',
    'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir uno de nuestros Kits. 👨🏻‍💻👩🏻‍💻',
    '',
    'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'], {media:'https://topsecurityperu.com/wp-content/uploads/2023/04/Kits-de-Camaras-MailRelay-scaled.jpg',capture:true}, (ctx, {gotoFlow,fallBack}) => {
        
        if(ctx.body.includes('Comprar')) {
            
            return gotoFlow(TSPflujoComprar)
            
        }

        if(ctx.body.includes(['Menu','Menú'])) {
            
            return gotoFlow(TSPflujoBot)
            
        }

        if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
            
            return gotoFlow(TSPIncorrecto1)
        
        }
    
    }) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoBot = addKeyword(['Chatbot','Menú','Menu'])
.addAnswer(

        ['Coméntame, ¿Qué quieres hacer?...',
        '',
        '👇🏼 _(Sigue las Instrucciones)_ 👇🏼',
        '_Envía el número de la opción que deseas revisar._',
        '',
        '1️⃣ para información sobre nuestros *Kits de Cámaras de Seguridad*. 🎦',
        '',
        '2️⃣ para información sobre las *Cámaras IP WiFi.* 🛜',
        '',
        '3️⃣ para información sobre los *Relojes Biométricos para Control de Acceso y Asistencia*. 📟',
        '',
        '4️⃣ para conocer las *Promociones y Ofertas de la Semana*. 🎁',
        '',
        '5️⃣ para información de *Contacto y Cuentas Bancarias*. ☎️',
        '',
        '6️⃣ para apagar el Bot y *Conversar con un Representante*. 📴'], {delay:2000,capture:true}, (ctx,{gotoFlow}) => {{console.log('TSP ',ctx.pushName,':',ctx.from)}

            if(!ctx.body.includes('1') && !ctx.body.includes('2') && !ctx.body.includes('3') && !ctx.body.includes('4') && !ctx.body.includes('5') && !ctx.body.includes('6')) {
                    
                return gotoFlow(TSPIncorrecto0)
            }
        
            },     
                
            [TSPflujoUno,TSPflujoDos,TSPflujoTres,TSPflujoCuatro,TSPflujoCinco,TSPflujoSeis])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoComprar = addKeyword('Comprar')
        .addAnswer(
            [
            '📴 Has apagado el *Bot*.',
            '',
            '🕜 *Horario de Atención al Cliente*:',
                '',
                '*Lun. a Vie.*: 10:00am - 7:00pm',
                '*Sab.*: 10:00am - 3:00pm.',
                '*Dom.*: No Laborables.',
            '',
            'Si estás en Horario de Atención, en breve serás atendido por un *Representante de Ventas* para guiarte en tu compra. Mientras tanto por favor indícanos tu *Nombre* y tu *Correo Electrónico*.',
            '',
            'Si deseas *✅ volver a activar el Chatbot*, envía la palabra *"Chatbot"*.'],
        
            {delay:3000},
                    
            [TSPflujoBot]
                
            )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPIncorrecto0 = addKeyword('')
        .addAnswer(
                
        [
        '⚠️ _*ERROR en tu respuesta!*_ ',
        'Debes enviar una opción válida.',
        '',
        '👇🏼 _*(Sigue las Instrucciones)*_ 👇🏼',
        '_Envía el *número* de la opción que deseas tomar._',
        '',
        '1️⃣ para información sobre nuestros *Kits de Cámaras de Seguridad*. 🎦',
        '',
        '2️⃣ para información sobre las *Cámaras IP WiFi.* 🛜',
        '',
        '3️⃣ para información sobre los *Relojes Biométricos para Control de Acceso y Asistencia*. 📟',
        '',
        '4️⃣ para conocer las *Promociones y Ofertas de la Semana*. 🎁',
        '',
        '5️⃣ para información de *Contacto y Cuentas Bancarias*. ☎️',
        '',
        '6️⃣ para apagar el Bot y *Conversar con un Representante*. 📴'], {delay:2000,capture:true}, (ctx, {fallBack}) => {
                        
            if (!ctx.body.includes('1') && !ctx.body.includes('2') && !ctx.body.includes('3') && !ctx.body.includes('4') && !ctx.body.includes('5') && !ctx.body.includes('6')) {
                    
                return fallBack()
                
            }},
            
            [TSPflujoUno,TSPflujoDos,TSPflujoTres,TSPflujoCuatro,TSPflujoCinco,TSPflujoSeis])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPIncorrecto1 = addKeyword('')
        .addAnswer(
                
        [
        '⚠️ _*ERROR en tu respuesta!*_ ',
        'Debes enviar una opción válida.',
        '',
        '👇🏼 _*(Sigue las Instrucciones)*_ 👇🏼',
        '',
        'Envía *"Comprar"* para *Conversar con el equipo de Ventas* y adquirir uno de nuestros Kits. 👨🏻‍💻👩🏻‍💻',
        '',
        'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'], {delay:2000,capture:true}, (ctx, {gotoFlow,fallBack}) => {

        if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
            
            return fallBack()
        
        }
    
    },
        
        [TSPflujoComprar,TSPflujoBot])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoZKLX14 = addKeyword('Reloj Biometrico ZK-LX14')
.addAnswer(
    [
        '👆🏼 *HUELLERO PARA CONTROL DE ASISTENCIA ZK-LX14* 📟',
        '',
        '🪙 *PRECIO:* S/.238 (ENVÍO GRATIS A NIVEL NACIONAL 🚚)',
        '',
        '🕘 El *ZK-LX14* es un dispositivo biométrico para la gestión de tiempo y asistencia de empleados con función SSR integrada, lo que lo hace ideal para pequeñas empresas. La información de los empleados puede redactarse en formato de Excel. Interfaz de comunicación por medio de puerto USB. El ZK-LX14 posee un elegante diseño y una pantalla TFT de 2.8 pulgadas donde es posible visualizar la imagen de la huella y el resultado de la verificación, entre otros.',
        '',
        '*CARACTERÍSTICAS*',
        '✅ Marca: ZKTeco',
        '✅ Modelo: ZK-LX14',
        '✅ Tipo: Control de Asistencia del Personal',
        '✅ Capacidad de usuarios: 500',
        '✅ Capacidad de Huella Digital: 500',
        '✅ Capacidad de registros: 50,000',
        '✅ Pantalla TFT de 2.8 pulgadas',
        '✅ Comunicación : USB (host y cliente)',
        '✅ Funciones Standar: Timbre programado, grabadora SSR, entrada T9, 9 ID de usuario digital, comprobación de registros, idiomas múltiples.',
        '',
        '*INCLUYE*',
        '✅ Soporte para fijar en la pared.',
        '✅ Tarugos y Tornillos para montaje en la pared.',
        '✅ Fuente de Poder 5V/2Amp',
        '✅ Cable USB',
        '✅ Certificado de Marca',
        '✅ Software',
        '✅ Capacitación Online',
        '✅ Soporte Remoto por 1 Año',
        '✅ Garantía por 1 Año',
        '✅ ENVÍO GRATIS A NIVEL NACIONAL 🚚',
        '',
        '💳 Aceptamos Pagos por tarjetas, transferencias, efectivo, yape, etc.',
        '🚚 Envíos a todo el Perú, en la agencia de su preferencia.',
        '🛵 Delivery a todo Lima.',
        '',
        'Encuéntranos en nuestra tienda física 👇🏼',
        '📍 Av. Inca Garcilaso de la Vega (Wilson) Tienda N°148 Nivel 2B Lima – Perú (Centro Comercial Cyber Plaza).',
        '',
        '',
        '*más opciones...*',
        '',
        'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir el Control de Asistecia ZK-LX14. 👨🏻‍💻👩🏻‍💻',
        '',
        'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'],
        
        {media:'https://topsecurityperu.com/wp-content/uploads/2023/04/LX14.jpg',capture:true},
        (ctx, {gotoFlow}) => {
    
            if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
                return gotoFlow(TSPIncorrecto1)
            }},    
    
        [TSPflujoComprar,TSPflujoBot])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoKitVOXplus = addKeyword('KIT de Amplificador de Audio para DVR/NVR marca VOXplus')
.addAnswer(
    [
        '🗣 *KIT de Amplificador de Audio para DVR/NVR marca VOXplus* 🔊',
        '',
        '*PRECIO:* S/.155 (ENVÍO GRATIS A NIVEL NACIONAL 🚚)',
        '',
        '🔊 *VOXplus* es un complemento para tu sistema de cámaras de seguridad, este dispositivo permite amplificar las señales de audio y entregar una potencia necesaria para parlantes o megáfonos, por lo que una vez instalado puedes hablar desde tu celular y tu voz saldrá amplificada por la Bocina de 30Watts. Este dispositivo soporta una bocina de hasta 90Watts y lo puedes instalar en tu DVR, XVR o NVR de cualquier marca.',
        '',
        '*CARACTERÍSTICAS:*',
        '✅ Marca: VOXplus',
        '✅ Modelo: VOXplus–100',
        '✅ Tipo: Amplificador de audio profesional',
        '✅ Canales: 1, 1',
        '✅ Temperatura de funcionamiento: Temperatura ambiente',
        '✅ Voltaje de funcionamiento: 12-24 VDC',
        '',
        '*EL KIT INCLUYE:*',
        '✅ 1 Amplificador VOXplus',
        '✅ 1 Bocina de 30Watts de Potencia',
        '✅ 1 Fuente 12V/2Amp',
        '✅ 1 Cable de Audio RCA',
        '✅ Diagrama de Instalación',
        '✅ ENVÍO GRATIS A NIVEL NACIONAL 🚚',
        '',
        '💰 PREGUNTA POR EL PRECIO ESPECIAL PARA DISTRIBUIDORES🫰🏼',
        '',
        '💳 Aceptamos Pagos por tarjetas, transferencias, efectivo, yape, etc.',
        '🚚 Envíos a todo el Perú, en la agencia de su preferencia.',
        '🛵 Delivery a todo Lima.',
        '',
        'Encuéntranos en nuestra tienda física 👇🏼',
        '📍 Av. Inca Garcilaso de la Vega (Wilson) Tienda N°148 Nivel 2B Lima – Perú (Centro Comercial Cyber Plaza).',
        '',
        '',
        '*más opciones...*',
        '',
        'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir el Kit Amplificador VOXplus. 👨🏻‍💻👩🏻‍💻',
        '',
        'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'],
        
        {media:'https://topsecurityperu.com/wp-content/uploads/2023/04/Kit-VOXplus.jpg',capture:true},
        
        (ctx, {gotoFlow}) => {
    
            if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
                return gotoFlow(TSPIncorrecto1)
            }},    

        [TSPflujoComprar,TSPflujoBot])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoKitSafeMax100 = addKeyword('Kit de Alarma Vecinal *SafeMax-100*')
.addAnswer(
    [
        '🚨 *KIT de Alarma Vecinal SafeMax-100* 🔊',
        '',
        '*PRECIO:* S/.205',
        '',
        '🚨 El *Kit de Alarma Vecinal SafeMax-100*, es un sistema de alerta para hogares y comunidades. La alarma puede ser accionada presionando el botón de pánico, pero especialmente está diseñada para ser accionada a distancia con el celular desde cualquier lugar en el que te encuentres.',
        '',
        '*CARACTERÍSTICAS*',
        '✅ Marca: SafeMax',
        '✅ Modelo: SafeMax-100',
        '✅ Tipo: Alarma Vecinal/Residencial',
        '✅ Temperatura de funcionamiento: Temperatura ambiente',
        '✅ Voltaje de funcionamiento: 12v/2Amp.',
        '',
        '*EL KIT INCLUYE:*',
        '✅ 1 Alarma/Sirena 120dB Doble Sonido.',
        '✅ 1 Pulsador de Emergencia WiFi.',
        '✅ 1 Fuente 12V/2Amp',
        '✅ Manual de Instalación',
        '✅ Asesoramiento y Soporte Gratis.',
        '',
        '💰 *PREGUNTA POR EL PRECIO ESPECIAL PARA DISTRIBUIDORES* 🫰🏼',
        '',
        '💳 Aceptamos Pagos por tarjetas, transferencias, efectivo, yape, etc.',
        '🚚 Envíos a todo el Perú, en la agencia de su preferencia.',
        '🛵 Delivery a todo Lima.',
        '',
        'Encuéntranos en nuestra tienda física 👇🏼',
        '📍 Av. Inca Garcilaso de la Vega (Wilson) Tienda N°148 Nivel 2B Lima – Perú (Centro Comercial Cyber Plaza).',
        '',
        '',
        '*más opciones...*',
        '',
        'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir el kit de Alarma Vecinal SafeMax-100. 👨🏻‍💻👩🏻‍💻',
        '',
        'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'],
        
        {media:'https://topsecurityperu.com/wp-content/uploads/2023/05/SafeMax-100-2.jpg',capture:true},
        
        (ctx, {gotoFlow}) => {
    
            if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
                return gotoFlow(TSPIncorrecto1)
            }},    

        [TSPflujoComprar,TSPflujoBot])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TSPflujoKitSafeMax200 = addKeyword('Kit de Alarma Vecinal SafeMax-200')
.addAnswer(
    [
        '🚨 *KIT de Alarma Vecinal SafeMax-200* 🔊',
        '',
        '*PRECIO:* S/.350)',
        '',
        '🚨 El Kit de Alarma Vecinal *SafeMax-200*, es un sistema de alerta para hogares y comunidades. La alarma puede ser accionada presionando el botón de pánico, pero especialmente está diseñada para ser accionada a distancia a través de su control remoto de larga distancia o con el celular desde cualquier lugar en el que te encuentres.',
        '',
        '*CARACTERÍSTICAS*',
        '✅ Marca: SafeMax',
        '✅ Modelo: SafeMax-200',
        '✅ Tipo: Alarma Vecinal/Residencial',
        '✅ Temperatura de funcionamiento: Temperatura ambiente',
        '✅ Voltaje de funcionamiento: 12v/2Amp.',
        '',
        '*EL KIT INCLUYE:*',
        '✅ 1 Alarma/Sirena 120dB Doble Sonido.',
        '✅ 1 Pulsador de Emergencia WiFi.',
        '✅ 1 Fuente 12V/2Amp',
        '✅ 1 Luz Estrobo (Rojo, Ámbar o Azúl)',
        '✅ 1 Control RF',
        '',
        '💰 PREGUNTA POR EL PRECIO ESPECIAL PARA DISTRIBUIDORES 🫰🏼',
        '',
        '💳 Aceptamos Pagos por tarjetas, transferencias, efectivo, yape, etc.',
        '🚚 Envíos a todo el Perú, en la agencia de su preferencia.',
        '🛵 Delivery a todo Lima.',
        '',
        'Encuéntranos en nuestra tienda física 👇🏼',
        '📍 Av. Inca Garcilaso de la Vega (Wilson) Tienda N°148 Nivel 2B Lima – Perú (Centro Comercial Cyber Plaza).',
        '',
        '',
        '*más opciones...*',
        '',
        'Envía *"Comprar"* para *Conversar con un Asesor de Ventas* y adquirir el kit de Alarma Vecinal SafeMax-200. 👨🏻‍💻👩🏻‍💻',
        '',
        'Envía *"Menú"* para ⏪ *Volver al Menú Principal*.'],
        
        {media:'https://topsecurityperu.com/wp-content/uploads/2023/05/SafeMax-200-2.jpg',capture:true},
        
        (ctx, {gotoFlow}) => {
    
            if(!ctx.body.includes('Comprar') && !ctx.body.includes('Menú') && !ctx.body.includes('Menu') ) {
                return gotoFlow(TSPIncorrecto1)
            }},    

        [TSPflujoComprar,TSPflujoBot])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainTopSecurityPeru = async () => {
    
    const botName = 'TopSecurityPeru'
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([TSPflujoBot,TSPflujoKitSafeMax100,TSPflujoKitSafeMax200,TSPflujoKitVOXplus,TSPflujoZKLX14])
    const adapterProvider = createProvider(BaileysProvider, {name: botName})

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    }
    ,{
        blackList:['+51902700078','+51938473492','+51963601795','+51983237296','+51983237','+51902700078','+51981490775','+51965422465','+51954145889', '+51933018584', '+51981267395', '+51936774865', '+51933017656', '+51946085078', '+51994119158', '+51954145889', '+51932545698', '+51932270219', '+584122222963', '+51959364956', '+51989007493', '+51910428132', '+51998337165', '+51947112660', '+51923218297', '+51989007458', '+51922219802', '+51972245738']
    })

    QRPortalWeb({name:botName, port:8080})
}

mainTopSecurityPeru()