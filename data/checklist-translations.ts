type ChecklistItem = { text: string; detail: string };
type Phase = { name: string; subtitle: string; items: ChecklistItem[] };
type VisaChecklist = { title: string; subtitle: string; phases: Phase[] };

export const CHECKLIST_TRANSLATIONS: Record<string, Record<string, VisaChecklist>> = {
  es: {
    b1b2: {
      title: "Lista de Verificación para Visa de Turista B-1/B-2",
      subtitle: "Para visitantes de negocios y turistas que solicitan estadías cortas en EE.UU.",
      phases: [
        {
          name: "Preparación",
          subtitle: "Antes de comenzar la solicitud",
          items: [
            { text: "Determinar si necesita B-1 o B-2 (o combinada B-1/B-2)", detail: "B-1 es para visitas de negocios; B-2 es para turismo/médico/visita familiar. La mayoría de los solicitantes obtiene el sello combinado B-1/B-2." },
            { text: "Confirmar que su pasaporte tiene vigencia de 6+ meses más allá de la estadía prevista", detail: "Si vence antes, renuévelo antes de solicitar." },
            { text: "Verificar si su país participa en el Programa de Exención de Visa (ESTA)", detail: "Los países del VWP pueden no necesitar una visa B para estadías menores de 90 días." },
            { text: "Reunir pruebas de fuertes vínculos con su país de origen", detail: "Carta de empleo, documentos de propiedad, obligaciones familiares — necesarios en la entrevista." },
            { text: "Reunir documentación financiera", detail: "Extractos bancarios de 3-6 meses que muestren saldos estables, no solo un depósito grande reciente." },
            { text: "Planificar los detalles específicos de su viaje", detail: "Fechas, ciudades, alojamiento, vuelo de regreso. Los itinerarios vagos perjudican su caso." },
          ],
        },
        {
          name: "Solicitud DS-160",
          subtitle: "Complete la solicitud de visa en línea",
          items: [
            { text: "Tomar u obtener una foto estilo pasaporte que cumpla los requisitos de EE.UU.", detail: "Reglas específicas de tamaño, fondo y posición de cabeza en travel.state.gov." },
            { text: "Iniciar el DS-160 en ceac.state.gov/genniv", detail: "Guarde su ID de solicitud inmediatamente — lo necesitará para regresar." },
            { text: "Completar todas las preguntas del DS-160 con honestidad", detail: "Las inconsistencias con respuestas posteriores o su DS-2019 pueden causar denegaciones." },
            { text: "Cargar foto de pasaporte en el DS-160", detail: "Si es rechazada, las fotos se pueden retomar en la mayoría de las farmacias." },
            { text: "Enviar el DS-160 e imprimir la página de confirmación con código de barras", detail: "La llevará a la entrevista." },
          ],
        },
        {
          name: "Tarifas y Programación",
          subtitle: "Pague las tarifas y programe su entrevista",
          items: [
            { text: "Pagar la tarifa de solicitud de visa MRV ($185)", detail: "El método de pago varía según el país — consulte el sitio web de su embajada." },
            { text: "Programar su entrevista de visa en la embajada/consulado", detail: "En temporada alta (mayo-agosto), reserve con 30-60 días de anticipación." },
            { text: "Agregar $250 de Tarifa de Integridad de Visa a su presupuesto (solo si es aprobado)", detail: "Nueva desde octubre de 2025 — solo se cobra cuando se otorga la visa." },
          ],
        },
        {
          name: "Preparación para la Entrevista",
          subtitle: "Prepárese para la entrevista consular",
          items: [
            { text: "Practicar respuestas a preguntas frecuentes de entrevista", detail: "Las respuestas específicas, honestas y breves funcionan mejor. No memorice guiones." },
            { text: "Organizar todos los documentos en una carpeta", detail: "Traiga originales y copias; los oficiales pueden solicitar cualquiera de los dos." },
            { text: "Planificar su traslado a la embajada", detail: "Llegue 15-30 minutos antes. Las filas de seguridad pueden ser largas." },
            { text: "Revisar el código de vestimenta", detail: "Casual de negocios o formal. Evite ropa llamativa o descuidada." },
          ],
        },
        {
          name: "Día de la Entrevista",
          subtitle: "Asista a su entrevista consular",
          items: [
            { text: "Llevar todos los documentos requeridos", detail: "Pasaporte, confirmación DS-160, recibo MRV, foto, documentación de vínculos." },
            { text: "Presentar huellas dactilares (biometría)", detail: "Se realiza en la entrevista o en una cita separada, según el país." },
            { text: "Completar la entrevista consular", detail: "La mayoría dura 2-5 minutos. Responda la pregunta formulada y deje de hablar." },
            { text: "Recibir decisión", detail: "Aprobación, denegación bajo 214(b), o procesamiento administrativo 221(g)." },
          ],
        },
        {
          name: "Después de la Aprobación",
          subtitle: "Próximos pasos una vez aprobado",
          items: [
            { text: "Pagar la Tarifa de Integridad de Visa de $250", detail: "El proceso de pago varía según la embajada." },
            { text: "Esperar la devolución del pasaporte con la visa", detail: "Generalmente 1-2 semanas por mensajería o recogida." },
            { text: "Verificar que todos los detalles de la visa sean correctos", detail: "Verifique la ortografía del nombre, fechas de vigencia y tipo de entrada." },
            { text: "Planificar el viaje dentro del período de validez de la visa", detail: "Generalmente se permiten entradas múltiples dentro de la vigencia de la visa." },
          ],
        },
      ],
    },
    f1: {
      title: "Lista de Verificación para Visa de Estudiante F-1",
      subtitle: "Para estudiantes internacionales aceptados en una escuela estadounidense certificada por SEVP.",
      phases: [
        {
          name: "Antes de Solicitar",
          subtitle: "Inscripción y pasos previos a la solicitud",
          items: [
            { text: "Recibir aceptación de una escuela certificada por SEVP", detail: "La escuela debe estar aprobada por el Programa de Visitantes Estudiantes e Intercambistas." },
            { text: "Pagar la tarifa SEVIS I-901 ($350 para F-1)", detail: "Debe pagarse antes de programar su entrevista de visa. Pague en fmjfee.com." },
            { text: "Recibir el Formulario I-20 del DSO de su escuela", detail: "El Oficial Escolar Designado lo genera después de la inscripción." },
            { text: "Verificar que la información del I-20 sea correcta", detail: "Verifique nombre, fechas del programa y montos de apoyo financiero." },
          ],
        },
        {
          name: "DS-160 y Programación",
          subtitle: "Solicite en línea y programe su entrevista",
          items: [
            { text: "Completar la solicitud de visa en línea DS-160", detail: "Use la información de su I-20 al llenar el formulario." },
            { text: "Pagar la tarifa MRV ($185)", detail: "Consulte su embajada específica para métodos de pago." },
            { text: "Programar entrevista de visa", detail: "Las entrevistas F-1 se pueden programar hasta 120 días antes de la fecha de inicio del programa." },
          ],
        },
        {
          name: "Preparación de Documentos",
          subtitle: "Reúna todos los documentos requeridos",
          items: [
            { text: "Pasaporte válido (vigencia de 6+ meses)", detail: "Si el pasaporte está próximo a vencer, renuévelo antes de solicitar." },
            { text: "Formulario I-20 (original, firmado por el DSO)", detail: "Se requiere el documento original — una copia no es suficiente." },
            { text: "Recibo de tarifa SEVIS (confirmación I-901)", detail: "Imprímalo desde fmjfee.com después del pago." },
            { text: "Página de confirmación del DS-160", detail: "La página con código de barras de su solicitud DS-160 completada." },
            { text: "Documentación financiera que demuestre que puede financiar sus estudios", detail: "Extractos bancarios, cartas de beca, cartas del patrocinador que muestren 12+ meses de financiamiento." },
            { text: "Prueba de vínculos con su país de origen", detail: "Evidencia de que planea regresar después de los estudios — familia, activos, perspectivas laborales." },
            { text: "Carta de aceptación de la escuela", detail: "Muestra que fue formalmente admitido al programa." },
          ],
        },
        {
          name: "Entrevista",
          subtitle: "Asista a su entrevista consular",
          items: [
            { text: "Asistir a la entrevista con todos los documentos", detail: "Traiga originales y copias de todo." },
            { text: "Estar preparado para explicar sus planes de estudio", detail: "Qué estudiará, por qué en EE.UU. y sus planes después de graduarse." },
            { text: "Demostrar intención de regresar a su país después de los estudios", detail: "Esta es la pregunta crítica 214(b) para los solicitantes F-1." },
            { text: "Recibir decisión de visa", detail: "Si es aprobado, pague la Tarifa de Integridad de Visa de $250." },
          ],
        },
      ],
    },
    j1: {
      title: "Lista de Verificación para Visa de Visitante de Intercambio J-1",
      subtitle: "Para visitantes de intercambio, académicos, pasantes, au pairs y participantes en programas de trabajo de verano.",
      phases: [
        {
          name: "Inscripción en el Programa",
          subtitle: "Trabaje con su organización patrocinadora",
          items: [
            { text: "Ser aceptado por un programa patrocinador J-1 designado por el DOS", detail: "Ejemplos: universidades, EF, CIEE, Cultural Care Au Pair, etc." },
            { text: "Recibir el Formulario DS-2019 de su patrocinador", detail: "Este es el equivalente J-1 del I-20 de F-1." },
            { text: "Pagar la tarifa SEVIS I-901 ($220 para J-1 en la mayoría de categorías; $35 para au pairs)", detail: "Pague en fmjfee.com antes de su entrevista." },
          ],
        },
        {
          name: "Solicitud",
          subtitle: "Complete su solicitud de visa",
          items: [
            { text: "Completar la solicitud en línea DS-160", detail: "Consulte su DS-2019 para los detalles del programa." },
            { text: "Pagar la tarifa MRV ($185)", detail: "Consulte su embajada para métodos de pago." },
            { text: "Programar entrevista de visa", detail: "Programe lo antes posible — los programas de verano tienen alta demanda." },
          ],
        },
        {
          name: "Documentos",
          subtitle: "Reúna sus documentos para la entrevista",
          items: [
            { text: "Pasaporte válido", detail: "Debe tener vigencia de 6+ meses más allá de la fecha de finalización del programa." },
            { text: "DS-2019 (Certificado de Elegibilidad)", detail: "Original, firmado por el oficial responsable de su patrocinador." },
            { text: "Recibo de tarifa SEVIS", detail: "Confirmación de pago I-901 de fmjfee.com." },
            { text: "Página de confirmación del DS-160", detail: "Página con código de barras de su solicitud completada." },
            { text: "Documentos del programa patrocinador", detail: "Carta de aceptación del programa, documentos de familia anfitriona (para au pairs), etc." },
            { text: "Documentación de apoyo financiero", detail: "Prueba de que su programa de intercambio o patrocinador cubre sus costos." },
          ],
        },
        {
          name: "Entrevista",
          subtitle: "Asista a su entrevista consular",
          items: [
            { text: "Asistir a la entrevista con todos los documentos", detail: "Llegue temprano y traiga todo organizado." },
            { text: "Explicar su programa de intercambio claramente", detail: "Qué organización, qué programa, qué hará, cuándo regresa." },
            { text: "Comprender el requisito de residencia de dos años en el país de origen", detail: "Muchos titulares de visa J-1 deben regresar a su país de origen por 2 años antes de obtener visas H o L." },
            { text: "Recibir decisión", detail: "Si es aprobado, pague la Tarifa de Integridad de Visa de $250." },
          ],
        },
      ],
    },
    k1: {
      title: "Lista de Verificación para Visa de Prometido(a) K-1",
      subtitle: "Para ciudadanos estadounidenses que traen a su prometido(a) a EE.UU. para casarse dentro de 90 días.",
      phases: [
        {
          name: "Petición ante USCIS",
          subtitle: "Presentar la petición I-129F",
          items: [
            { text: "Confirmar que cumple los requisitos de elegibilidad K-1", detail: "Ambas partes deben estar libres para casarse y deben haberse conocido en persona dentro de los últimos 2 años." },
            { text: "Reunir evidencia de relación de buena fe", detail: "Fotos juntos, registros de llamadas, correspondencia, registros de viaje que demuestren que se han conocido en persona." },
            { text: "Completar el Formulario I-129F (Petición para Prometido(a) Extranjero(a))", detail: "Presente ante USCIS. Tarifa de presentación actual: $675." },
            { text: "Incluir documentos de apoyo con el I-129F", detail: "Evidencia de relación, actas de nacimiento, decretos de divorcio si aplica." },
            { text: "Esperar la aprobación del I-129F (generalmente 6-10 meses)", detail: "Rastree en my.uscis.gov usando su número de recibo." },
          ],
        },
        {
          name: "Procesamiento en NVC",
          subtitle: "Después de la aprobación del I-129F",
          items: [
            { text: "Recibir número de caso del NVC", detail: "El Centro Nacional de Visas le notificará a usted y a su prometido(a) después de la aprobación de USCIS." },
            { text: "El prometido(a) programa cita en la embajada estadounidense local", detail: "La programación se realiza a través del sistema de citas de la embajada, no del NVC." },
          ],
        },
        {
          name: "Documentos para el Prometido(a)",
          subtitle: "Documentos que su prometido(a) necesita para la entrevista",
          items: [
            { text: "Pasaporte válido", detail: "Debe tener vigencia de 6+ meses más allá del período de validez del K-1." },
            { text: "Solicitud DS-160", detail: "El prometido(a) completa esto, no el peticionario ciudadano estadounidense." },
            { text: "Acta de nacimiento", detail: "Con traducción certificada si no está en inglés." },
            { text: "Certificados de antecedentes policiales", detail: "De todos los países donde haya vivido 6+ meses desde los 16 años." },
            { text: "Examen médico por un médico aprobado por la embajada", detail: "Debe realizarse antes de la entrevista de visa." },
            { text: "Formulario I-134 Declaración Jurada de Patrocinio (del ciudadano estadounidense)", detail: "Muestra que el peticionario estadounidense cumple los requisitos de ingresos para patrocinar." },
            { text: "Evidencia de relación de buena fe", detail: "Fotos, registros de comunicación, prueba de viajes." },
            { text: "DS-5540 (Cuestionario de Carga Pública) si es requerido", detail: "Verifique los requisitos de la embajada." },
          ],
        },
        {
          name: "Entrevista",
          subtitle: "Entrevista consular K-1",
          items: [
            { text: "Asistir a la entrevista en la embajada estadounidense", detail: "La entrevista se centra en la relación y la intención de casarse en EE.UU. dentro de 90 días." },
            { text: "Pagar la Tarifa de Integridad de Visa de $250 si es aprobado", detail: "Nueva desde octubre de 2025." },
            { text: "Recibir la visa K-1 (generalmente válida por 6 meses)", detail: "Debe ingresar a EE.UU. antes de que expire la visa." },
          ],
        },
        {
          name: "Después de la Llegada a EE.UU.",
          subtitle: "Después de que su prometido(a) entre a EE.UU.",
          items: [
            { text: "Casarse dentro de los 90 días de entrada", detail: "No casarse requiere salir de EE.UU." },
            { text: "Presentar el Formulario I-485 (Ajuste de Estatus) después de la boda", detail: "Esta es la solicitud de tarjeta verde. Tarifa de presentación típica: $1,440." },
            { text: "Solicitar autorización de trabajo (Formulario I-765) con AOS", detail: "El EAD tarda aproximadamente 4-9 meses en emitirse." },
            { text: "Asistir a la cita de biometría", detail: "Requerida para el procesamiento de AOS." },
            { text: "Asistir a la entrevista de AOS (si es programada)", detail: "No todos los casos de AOS requieren entrevista." },
            { text: "Recibir tarjeta verde (residencia permanente condicional)", detail: "Generalmente condicional (2 años) para matrimonios de menos de 2 años." },
          ],
        },
      ],
    },
    ircr: {
      title: "Lista de Verificación para Visa de Cónyuge IR/CR",
      subtitle: "Para ciudadanos estadounidenses o residentes permanentes legales que patrocinan a un cónyuge para una visa de inmigrante.",
      phases: [
        {
          name: "Petición ante USCIS",
          subtitle: "Presentar la petición I-130",
          items: [
            { text: "Presentar el Formulario I-130 (Petición para Familiar Extranjero)", detail: "Los cónyuges de ciudadanos estadounidenses usan la categoría de Familiar Inmediato — sin lista de espera. Los cónyuges de residentes permanentes enfrentan esperas de categoría de preferencia." },
            { text: "Incluir prueba de estatus de ciudadano estadounidense/residente permanente", detail: "Pasaporte estadounidense, certificado de naturalización o tarjeta verde." },
            { text: "Incluir prueba de matrimonio válido", detail: "Acta de matrimonio con traducción certificada." },
            { text: "Incluir evidencia de matrimonio de buena fe", detail: "Cuentas bancarias conjuntas, arrendamiento/hipoteca, fotos, registros de comunicación." },
            { text: "Esperar la aprobación del I-130", detail: "Familiar inmediato (cónyuge ciudadano estadounidense) generalmente 6-12 meses. Cónyuge de residente permanente: esperas más largas debido a las categorías de preferencia de visa." },
          ],
        },
        {
          name: "Procesamiento en NVC",
          subtitle: "Etapa del Centro Nacional de Visas",
          items: [
            { text: "Pagar las tarifas de visa de inmigrante del NVC ($325 tarifa de declaración jurada de patrocinio + $325 tarifa de visa de inmigrante)", detail: "Pague en línea a través de ceac.state.gov." },
            { text: "Completar el Formulario DS-261 (Elección de Agente y Dirección)", detail: "En línea a través de ceac.state.gov." },
            { text: "Cargar todos los documentos requeridos a través de CEAC", detail: "Documentos del patrocinador (I-864, declaraciones de impuestos, etc.) y documentos del beneficiario." },
            { text: "Completar el Formulario I-864 (Declaración Jurada de Patrocinio)", detail: "El patrocinador debe cumplir el 125% de las pautas de pobreza para el tamaño del hogar." },
            { text: "Esperar que el NVC envíe el caso a la embajada", detail: "Tarda 1-3 meses después de que todos los documentos sean enviados y aceptados." },
          ],
        },
        {
          name: "Médico y Documentos",
          subtitle: "Requisitos previos a la entrevista",
          items: [
            { text: "Completar examen médico con médico aprobado por la embajada", detail: "Debe usar un médico panel designado por la embajada. Los resultados se envían directamente a la embajada." },
            { text: "Reunir antecedentes policiales", detail: "De todos los países donde el cónyuge haya vivido 6+ meses desde los 16 años." },
            { text: "Obtener acta de nacimiento (con traducción)", detail: "Se requiere traducción certificada para documentos que no estén en inglés." },
            { text: "Completar DS-260 (solicitud de visa de inmigrante)", detail: "En línea a través de ceac.state.gov." },
            { text: "Prepararse para la entrevista", detail: "Traiga todos los originales de los documentos enviados al NVC." },
          ],
        },
        {
          name: "Entrevista Consular",
          subtitle: "Entrevista de visa de inmigrante",
          items: [
            { text: "Asistir a la entrevista en la embajada estadounidense", detail: "La entrevista se centra en la autenticidad del matrimonio y la elegibilidad." },
            { text: "Traer todos los documentos originales", detail: "Pasaporte, acta de matrimonio, antecedentes policiales, resultados médicos." },
            { text: "Recibir visa si es aprobado", detail: "El sello IR-1/CR-1 en el pasaporte es el documento de entrada." },
          ],
        },
        {
          name: "Después de la Entrada a EE.UU.",
          subtitle: "Después de que su cónyuge entre a EE.UU.",
          items: [
            { text: "El cónyuge entra como residente condicional o permanente", detail: "CR-1 si casados menos de 2 años (condicional); IR-1 si casados 2+ años (permanente)." },
            { text: "La tarjeta verde llega por correo en 6 semanas", detail: "USCIS envía la tarjeta física a su dirección en EE.UU." },
            { text: "Presentar I-751 para eliminar condiciones (solo CR-1)", detail: "Se presenta 90 días antes del segundo aniversario de la tarjeta verde." },
          ],
        },
      ],
    },
    h1b: {
      title: "Lista de Verificación para Visa de Trabajador H-1B",
      subtitle: "Para trabajadores en ocupaciones especializadas que requieren un patrocinador empleador en EE.UU.",
      phases: [
        {
          name: "Registro y Sorteo",
          subtitle: "Período de registro de marzo",
          items: [
            { text: "Encontrar un empleador en EE.UU. dispuesto a patrocinar su H-1B", detail: "El empleador debe presentar todo — el H-1B es completamente dirigido por el empleador." },
            { text: "El empleador lo registra en la lotería H-1B (marzo)", detail: "USCIS generalmente abre el registro a principios de marzo. Solo los solicitantes registrados pueden ser seleccionados." },
            { text: "Esperar la notificación de selección de la lotería", detail: "USCIS anuncia las selecciones a finales de marzo. No ser seleccionado significa esperar hasta el próximo año." },
          ],
        },
        {
          name: "Presentación de Petición",
          subtitle: "Después de la selección en la lotería (de abril en adelante)",
          items: [
            { text: "El empleador presenta la petición Formulario I-129", detail: "Debe presentarse antes del 30 de junio. El empleador paga las tarifas de presentación ($730-$4,000+ según el tamaño del empleador y procesamiento premium)." },
            { text: "Obtener la Solicitud de Condición Laboral (LCA) del DOL", detail: "El empleador la presenta ante el Departamento de Trabajo antes del I-129. Confirma que se está pagando el salario prevaleciente." },
            { text: "Reunir documentos de apoyo para el I-129", detail: "Evaluación de credenciales de grado (si es título extranjero), carta de empleo, cartas del cliente (si es consultoría), prueba de ocupación especializada." },
            { text: "Esperar la aprobación o recibo del I-129", detail: "Estándar: 3-6 meses. Procesamiento Premium ($2,805): 15 días hábiles." },
          ],
        },
        {
          name: "Procesamiento Consular",
          subtitle: "Para solicitantes fuera de EE.UU.",
          items: [
            { text: "Completar la solicitud DS-160 después de la aprobación del I-129", detail: "Use los detalles de su aviso de aprobación I-129." },
            { text: "Pagar la tarifa MRV ($185)", detail: "Tarifa estándar de solicitud de visa." },
            { text: "Programar entrevista en la embajada/consulado de EE.UU.", detail: "Traiga todos los documentos de empleo, aviso de aprobación I-129 y credenciales académicas." },
            { text: "Asistir a la entrevista consular H-1B", detail: "Se centra en la ocupación especializada, la relación con el empleador y las funciones del trabajo." },
            { text: "Recibir sello de visa H-1B si es aprobado", detail: "Pague la Tarifa de Integridad de Visa de $250. La visa es válida por hasta 3 años inicialmente." },
          ],
        },
        {
          name: "Después de la Aprobación",
          subtitle: "Mantenimiento de su estatus H-1B",
          items: [
            { text: "Comenzar a trabajar solo después de la fecha de inicio del H-1B (1 de octubre)", detail: "Los casos del tope H-1B entran en vigencia el 1 de octubre del año fiscal." },
            { text: "Solicitar extensión antes de que expire el período inicial de 3 años", detail: "El H-1B es extensible en incrementos de 3 años, hasta 6 años en total." },
            { text: "Considerar iniciar el proceso de tarjeta verde", detail: "Los titulares de H-1B son elegibles para tarjetas verdes basadas en empleo. Comenzar temprano es crítico debido a los tiempos de espera para algunas nacionalidades." },
          ],
        },
      ],
    },
  },
  pt: {
    b1b2: {
      title: "Lista de Verificação para Visto de Turista B-1/B-2",
      subtitle: "Para visitantes de negócios e turistas que solicitam estadias curtas nos EUA.",
      phases: [
        {
          name: "Preparação",
          subtitle: "Antes de iniciar a solicitação",
          items: [
            { text: "Determinar se você precisa de B-1 ou B-2 (ou combinado B-1/B-2)", detail: "B-1 é para visitas de negócios; B-2 é para turismo/médico/visita familiar. A maioria dos solicitantes obtém o carimbo combinado B-1/B-2." },
            { text: "Confirmar que seu passaporte tem validade de 6+ meses além da estadia pretendida", detail: "Se vencer antes, renove antes de solicitar." },
            { text: "Verificar se seu país participa no Programa de Isenção de Visto (ESTA)", detail: "Países do VWP podem não precisar de visto B para estadias menores de 90 dias." },
            { text: "Reunir provas de vínculos sólidos com o país de origem", detail: "Carta de emprego, documentos de propriedade, obrigações familiares — necessários na entrevista." },
            { text: "Reunir documentação financeira", detail: "Extratos bancários de 3-6 meses mostrando saldos estáveis, não apenas um grande depósito recente." },
            { text: "Planejar os detalhes específicos da sua viagem", detail: "Datas, cidades, hospedagem, voo de retorno. Itinerários vagos prejudicam seu caso." },
          ],
        },
        {
          name: "Solicitação DS-160",
          subtitle: "Complete a solicitação de visto online",
          items: [
            { text: "Tirar ou obter uma foto estilo passaporte que atenda os requisitos dos EUA", detail: "Regras específicas de tamanho, fundo e posição da cabeça em travel.state.gov." },
            { text: "Iniciar o DS-160 em ceac.state.gov/genniv", detail: "Salve seu ID de solicitação imediatamente — você precisará dele para retornar." },
            { text: "Responder todas as perguntas do DS-160 com honestidade", detail: "Inconsistências com respostas posteriores ou seu DS-2019 podem causar negações." },
            { text: "Enviar foto do passaporte para o DS-160", detail: "Se recusada, as fotos podem ser retiradas na maioria das farmácias." },
            { text: "Enviar o DS-160 e imprimir a página de confirmação com código de barras", detail: "Você levará isso para a entrevista." },
          ],
        },
        {
          name: "Taxas e Agendamento",
          subtitle: "Pague as taxas e agende sua entrevista",
          items: [
            { text: "Pagar a taxa de solicitação de visto MRV ($185)", detail: "O método de pagamento varia por país — verifique o site da sua embaixada." },
            { text: "Agendar sua entrevista de visto na embaixada/consulado", detail: "Durante a alta temporada (maio-agosto), agende com 30-60 dias de antecedência." },
            { text: "Adicionar $250 de Taxa de Integridade de Visto ao seu orçamento (apenas se aprovado)", detail: "Nova desde outubro de 2025 — cobrada apenas quando o visto é concedido." },
          ],
        },
        {
          name: "Preparação para a Entrevista",
          subtitle: "Prepare-se para a entrevista consular",
          items: [
            { text: "Praticar respostas a perguntas frequentes da entrevista", detail: "Respostas específicas, honestas e breves funcionam melhor. Não memorize roteiros." },
            { text: "Organizar todos os documentos em uma pasta", detail: "Leve originais e cópias; os oficiais podem solicitar qualquer um deles." },
            { text: "Planejar seu deslocamento até a embaixada", detail: "Chegue 15-30 minutos antes. As filas de segurança podem ser longas." },
            { text: "Revisar o código de vestimenta", detail: "Casual de negócios ou formal. Evite roupas chamativas ou desleixadas." },
          ],
        },
        {
          name: "Dia da Entrevista",
          subtitle: "Compareça à sua entrevista consular",
          items: [
            { text: "Levar todos os documentos necessários", detail: "Passaporte, confirmação DS-160, recibo MRV, foto, documentação de vínculos." },
            { text: "Apresentar impressões digitais (biometria)", detail: "Feito na entrevista ou em agendamento separado, dependendo do país." },
            { text: "Completar a entrevista consular", detail: "A maioria dura 2-5 minutos. Responda a pergunta feita e pare de falar." },
            { text: "Receber decisão", detail: "Aprovação, negação sob 214(b), ou processamento administrativo 221(g)." },
          ],
        },
        {
          name: "Após a Aprovação",
          subtitle: "Próximos passos após a aprovação",
          items: [
            { text: "Pagar a Taxa de Integridade de Visto de $250", detail: "O processo de pagamento varia por embaixada." },
            { text: "Aguardar a devolução do passaporte com o visto", detail: "Tipicamente 1-2 semanas por correio ou retirada." },
            { text: "Verificar que todos os detalhes do visto estão corretos", detail: "Verifique a ortografia do nome, datas de validade e tipo de entrada." },
            { text: "Planejar a viagem dentro do período de validade do visto", detail: "Múltiplas entradas geralmente permitidas dentro da validade do visto." },
          ],
        },
      ],
    },
    f1: {
      title: "Lista de Verificação para Visto de Estudante F-1",
      subtitle: "Para estudantes internacionais aceitos em uma escola americana certificada pelo SEVP.",
      phases: [
        {
          name: "Antes de Solicitar",
          subtitle: "Matrícula e etapas pré-solicitação",
          items: [
            { text: "Receber aceitação de uma escola certificada pelo SEVP", detail: "A escola deve ser aprovada pelo Programa de Visitantes Estudantes e Intercambistas." },
            { text: "Pagar a taxa SEVIS I-901 ($350 para F-1)", detail: "Deve ser paga antes de agendar sua entrevista de visto. Pague em fmjfee.com." },
            { text: "Receber o Formulário I-20 do DSO da sua escola", detail: "O Funcionário Escolar Designado gera isso após a matrícula." },
            { text: "Verificar se as informações do I-20 estão corretas", detail: "Verifique nome, datas do programa e valores de apoio financeiro." },
          ],
        },
        {
          name: "DS-160 e Agendamento",
          subtitle: "Solicite online e agende sua entrevista",
          items: [
            { text: "Completar a solicitação de visto online DS-160", detail: "Use as informações do seu I-20 ao preencher o formulário." },
            { text: "Pagar a taxa MRV ($185)", detail: "Verifique sua embaixada específica para métodos de pagamento." },
            { text: "Agendar entrevista de visto", detail: "As entrevistas F-1 podem ser agendadas até 120 dias antes da data de início do programa." },
          ],
        },
        {
          name: "Preparação de Documentos",
          subtitle: "Reúna todos os documentos necessários",
          items: [
            { text: "Passaporte válido (validade de 6+ meses)", detail: "Se o passaporte estiver próximo do vencimento, renove antes de solicitar." },
            { text: "Formulário I-20 (original, assinado pelo DSO)", detail: "O documento original é necessário — uma cópia não é suficiente." },
            { text: "Recibo da taxa SEVIS (confirmação I-901)", detail: "Imprima isso em fmjfee.com após o pagamento." },
            { text: "Página de confirmação do DS-160", detail: "A página com código de barras da sua solicitação DS-160 concluída." },
            { text: "Documentação financeira comprovando que você pode financiar seus estudos", detail: "Extratos bancários, cartas de bolsa, cartas do patrocinador mostrando 12+ meses de financiamento." },
            { text: "Prova de vínculos com o país de origem", detail: "Evidência de que você planeja retornar após os estudos — família, bens, perspectivas de emprego." },
            { text: "Carta de aceitação da escola", detail: "Mostra que você foi formalmente admitido ao programa." },
          ],
        },
        {
          name: "Entrevista",
          subtitle: "Compareça à sua entrevista consular",
          items: [
            { text: "Comparecer à entrevista com todos os documentos", detail: "Leve originais e cópias de tudo." },
            { text: "Estar preparado para explicar seus planos de estudo", detail: "O que você vai estudar, por que nos EUA e seus planos após a graduação." },
            { text: "Demonstrar intenção de retornar ao país após os estudos", detail: "Esta é a pergunta crítica 214(b) para solicitantes F-1." },
            { text: "Receber decisão de visto", detail: "Se aprovado, pague a Taxa de Integridade de Visto de $250." },
          ],
        },
      ],
    },
    j1: {
      title: "Lista de Verificação para Visto de Visitante de Intercâmbio J-1",
      subtitle: "Para visitantes de intercâmbio, acadêmicos, estagiários, au pairs e participantes em programas de trabalho de verão.",
      phases: [
        {
          name: "Inscrição no Programa",
          subtitle: "Trabalhe com sua organização patrocinadora",
          items: [
            { text: "Ser aceito por um programa patrocinador J-1 designado pelo DOS", detail: "Exemplos: universidades, EF, CIEE, Cultural Care Au Pair, etc." },
            { text: "Receber o Formulário DS-2019 do seu patrocinador", detail: "Este é o equivalente J-1 do I-20 do F-1." },
            { text: "Pagar a taxa SEVIS I-901 ($220 para J-1 na maioria das categorias; $35 para au pairs)", detail: "Pague em fmjfee.com antes da sua entrevista." },
          ],
        },
        {
          name: "Solicitação",
          subtitle: "Complete sua solicitação de visto",
          items: [
            { text: "Completar a solicitação online DS-160", detail: "Consulte seu DS-2019 para os detalhes do programa." },
            { text: "Pagar a taxa MRV ($185)", detail: "Verifique sua embaixada para métodos de pagamento." },
            { text: "Agendar entrevista de visto", detail: "Agende o mais cedo possível — os programas de verão têm alta demanda." },
          ],
        },
        {
          name: "Documentos",
          subtitle: "Reúna seus documentos para a entrevista",
          items: [
            { text: "Passaporte válido", detail: "Deve ter validade de 6+ meses além da data de término do programa." },
            { text: "DS-2019 (Certificado de Elegibilidade)", detail: "Original, assinado pelo funcionário responsável do seu patrocinador." },
            { text: "Recibo da taxa SEVIS", detail: "Confirmação de pagamento I-901 de fmjfee.com." },
            { text: "Página de confirmação do DS-160", detail: "Página com código de barras da sua solicitação concluída." },
            { text: "Documentos do programa patrocinador", detail: "Carta de aceitação do programa, documentos da família anfitriã (para au pairs), etc." },
            { text: "Documentação de apoio financeiro", detail: "Prova de que seu programa de intercâmbio ou patrocinador cobre seus custos." },
          ],
        },
        {
          name: "Entrevista",
          subtitle: "Compareça à sua entrevista consular",
          items: [
            { text: "Comparecer à entrevista com todos os documentos", detail: "Chegue cedo e leve tudo organizado." },
            { text: "Explicar seu programa de intercâmbio claramente", detail: "Qual organização, qual programa, o que você fará, quando você retorna." },
            { text: "Entender o requisito de residência de dois anos no país de origem", detail: "Muitos titulares de visto J-1 devem retornar ao seu país de origem por 2 anos antes de obter vistos H ou L." },
            { text: "Receber decisão", detail: "Se aprovado, pague a Taxa de Integridade de Visto de $250." },
          ],
        },
      ],
    },
    k1: {
      title: "Lista de Verificação para Visto de Noivo(a) K-1",
      subtitle: "Para cidadãos americanos que trazem seu noivo(a) aos EUA para se casar dentro de 90 dias.",
      phases: [
        {
          name: "Petição no USCIS",
          subtitle: "Apresentar a petição I-129F",
          items: [
            { text: "Confirmar que você atende aos requisitos de elegibilidade K-1", detail: "Ambas as partes devem ser livres para casar e devem ter se encontrado pessoalmente nos últimos 2 anos." },
            { text: "Reunir evidências de relacionamento genuíno", detail: "Fotos juntos, registros de chamadas, correspondência, registros de viagem mostrando que se conheceram pessoalmente." },
            { text: "Completar o Formulário I-129F (Petição para Noivo(a) Estrangeiro(a))", detail: "Protocolar no USCIS. Taxa de protocolo atual: $675." },
            { text: "Incluir documentos de apoio com o I-129F", detail: "Evidência de relacionamento, certidões de nascimento, decretos de divórcio se aplicável." },
            { text: "Aguardar a aprovação do I-129F (tipicamente 6-10 meses)", detail: "Acompanhe em my.uscis.gov usando seu número de recibo." },
          ],
        },
        {
          name: "Processamento no NVC",
          subtitle: "Após a aprovação do I-129F",
          items: [
            { text: "Receber número de caso do NVC", detail: "O Centro Nacional de Vistos irá notificá-lo e ao seu noivo(a) após a aprovação do USCIS." },
            { text: "Noivo(a) agenda consulta na embaixada americana local", detail: "O agendamento é feito pelo sistema de consultas da embaixada, não pelo NVC." },
          ],
        },
        {
          name: "Documentos para o Noivo(a)",
          subtitle: "Documentos que seu noivo(a) precisa para a entrevista",
          items: [
            { text: "Passaporte válido", detail: "Deve ter validade de 6+ meses além do período de validade do K-1." },
            { text: "Solicitação DS-160", detail: "O noivo(a) preenche isso, não o peticionário cidadão americano." },
            { text: "Certidão de nascimento", detail: "Com tradução certificada se não estiver em inglês." },
            { text: "Certidões de antecedentes criminais", detail: "De todos os países onde viveu por 6+ meses desde os 16 anos." },
            { text: "Exame médico por médico aprovado pela embaixada", detail: "Deve ser feito antes da entrevista de visto." },
            { text: "Formulário I-134 Declaração de Patrocínio (do cidadão americano)", detail: "Mostra que o peticionário americano atende aos requisitos de renda para patrocinar." },
            { text: "Evidência de relacionamento genuíno", detail: "Fotos, registros de comunicação, prova de viagens." },
            { text: "DS-5540 (Questionário de Encargo Público) se exigido", detail: "Verifique os requisitos da embaixada." },
          ],
        },
        {
          name: "Entrevista",
          subtitle: "Entrevista consular K-1",
          items: [
            { text: "Comparecer à entrevista na embaixada americana", detail: "A entrevista se concentra no relacionamento e na intenção de casar nos EUA dentro de 90 dias." },
            { text: "Pagar a Taxa de Integridade de Visto de $250 se aprovado", detail: "Nova desde outubro de 2025." },
            { text: "Receber o visto K-1 (tipicamente válido por 6 meses)", detail: "Deve entrar nos EUA antes do visto expirar." },
          ],
        },
        {
          name: "Após a Chegada nos EUA",
          subtitle: "Após seu noivo(a) entrar nos EUA",
          items: [
            { text: "Casar dentro de 90 dias da entrada", detail: "Não se casar requer saída dos EUA." },
            { text: "Protocolar o Formulário I-485 (Ajuste de Status) após o casamento", detail: "Esta é a solicitação de green card. Taxa de protocolo típica: $1,440." },
            { text: "Solicitar autorização de trabalho (Formulário I-765) com AOS", detail: "O EAD leva aproximadamente 4-9 meses para ser emitido." },
            { text: "Comparecer à consulta de biometria", detail: "Necessária para o processamento de AOS." },
            { text: "Comparecer à entrevista de AOS (se agendada)", detail: "Nem todos os casos de AOS requerem entrevista." },
            { text: "Receber green card (residência permanente condicional)", detail: "Tipicamente condicional (2 anos) para casamentos com menos de 2 anos." },
          ],
        },
      ],
    },
    ircr: {
      title: "Lista de Verificação para Visto de Cônjuge IR/CR",
      subtitle: "Para cidadãos americanos ou residentes permanentes legais que patrocinam um cônjuge para um visto de imigrante.",
      phases: [
        {
          name: "Petição no USCIS",
          subtitle: "Apresentar a petição I-130",
          items: [
            { text: "Protocolar o Formulário I-130 (Petição para Familiar Estrangeiro)", detail: "Cônjuges de cidadãos americanos usam a categoria de Familiar Imediato — sem lista de espera. Cônjuges de residentes permanentes enfrentam esperas de categoria de preferência." },
            { text: "Incluir prova de status de cidadão americano/residente permanente", detail: "Passaporte americano, certificado de naturalização ou green card." },
            { text: "Incluir prova de casamento válido", detail: "Certidão de casamento com tradução certificada." },
            { text: "Incluir evidência de casamento genuíno", detail: "Contas bancárias conjuntas, contrato de arrendamento/hipoteca, fotos, registros de comunicação." },
            { text: "Aguardar a aprovação do I-130", detail: "Familiar imediato (cônjuge cidadão americano) tipicamente 6-12 meses. Cônjuge de residente permanente: esperas mais longas devido às categorias de preferência de visto." },
          ],
        },
        {
          name: "Processamento no NVC",
          subtitle: "Etapa do Centro Nacional de Vistos",
          items: [
            { text: "Pagar as taxas de visto de imigrante do NVC ($325 taxa de declaração de patrocínio + $325 taxa de visto de imigrante)", detail: "Pague online através de ceac.state.gov." },
            { text: "Completar o Formulário DS-261 (Escolha de Agente e Endereço)", detail: "Online através de ceac.state.gov." },
            { text: "Carregar todos os documentos necessários pelo CEAC", detail: "Documentos do patrocinador (I-864, declarações de imposto de renda, etc.) e documentos do beneficiário." },
            { text: "Completar o Formulário I-864 (Declaração de Patrocínio)", detail: "O patrocinador deve atender a 125% das diretrizes de pobreza para o tamanho da família." },
            { text: "Aguardar o NVC enviar o caso para a embaixada", detail: "Leva 1-3 meses após todos os documentos serem enviados e aceitos." },
          ],
        },
        {
          name: "Médico e Documentos",
          subtitle: "Requisitos pré-entrevista",
          items: [
            { text: "Completar exame médico com médico aprovado pela embaixada", detail: "Deve usar um médico painel designado pela embaixada. Resultados enviados diretamente para a embaixada." },
            { text: "Reunir certidões de antecedentes criminais", detail: "De todos os países onde o cônjuge viveu por 6+ meses desde os 16 anos." },
            { text: "Obter certidão de nascimento (com tradução)", detail: "Tradução certificada necessária para documentos que não estejam em inglês." },
            { text: "Completar DS-260 (solicitação de visto de imigrante)", detail: "Online através de ceac.state.gov." },
            { text: "Preparar-se para a entrevista", detail: "Leve todos os originais dos documentos enviados ao NVC." },
          ],
        },
        {
          name: "Entrevista Consular",
          subtitle: "Entrevista de visto de imigrante",
          items: [
            { text: "Comparecer à entrevista na embaixada americana", detail: "A entrevista se concentra na autenticidade do casamento e na elegibilidade." },
            { text: "Trazer todos os documentos originais", detail: "Passaporte, certidão de casamento, antecedentes criminais, resultados médicos." },
            { text: "Receber visto se aprovado", detail: "O carimbo IR-1/CR-1 no passaporte é o documento de entrada." },
          ],
        },
        {
          name: "Após a Entrada nos EUA",
          subtitle: "Após seu cônjuge entrar nos EUA",
          items: [
            { text: "Cônjuge entra como residente condicional ou permanente", detail: "CR-1 se casados há menos de 2 anos (condicional); IR-1 se casados há 2+ anos (permanente)." },
            { text: "Green card chega pelo correio em 6 semanas", detail: "O USCIS envia o cartão físico para seu endereço nos EUA." },
            { text: "Protocolar I-751 para remover condições (somente CR-1)", detail: "Protocolado 90 dias antes do aniversário de 2 anos do green card." },
          ],
        },
      ],
    },
    h1b: {
      title: "Lista de Verificação para Visto de Trabalhador H-1B",
      subtitle: "Para trabalhadores em ocupações especializadas que exigem um empregador patrocinador nos EUA.",
      phases: [
        {
          name: "Registro e Loteria",
          subtitle: "Período de registro de março",
          items: [
            { text: "Encontrar um empregador nos EUA disposto a patrocinar seu H-1B", detail: "O empregador deve protocolar tudo — o H-1B é totalmente conduzido pelo empregador." },
            { text: "Empregador registra você na loteria H-1B (março)", detail: "O USCIS geralmente abre o registro no início de março. Apenas solicitantes registrados podem ser selecionados." },
            { text: "Aguardar a notificação de seleção da loteria", detail: "O USCIS anuncia as seleções no final de março. Não ser selecionado significa esperar até o próximo ano." },
          ],
        },
        {
          name: "Protocolo de Petição",
          subtitle: "Após a seleção na loteria (de abril em diante)",
          items: [
            { text: "Empregador protocolola a petição Formulário I-129", detail: "Deve ser protocolada até 30 de junho. O empregador paga as taxas de protocolo ($730-$4.000+ dependendo do tamanho do empregador e processamento premium)." },
            { text: "Obter a Solicitação de Condição de Trabalho (LCA) do DOL", detail: "O empregador protocolola isso no Departamento do Trabalho antes do I-129. Confirma que o salário prevalecente está sendo pago." },
            { text: "Reunir documentos de apoio para o I-129", detail: "Avaliação de credencial de diploma (se diploma estrangeiro), carta de emprego, cartas do cliente (se consultoria), prova de ocupação especializada." },
            { text: "Aguardar a aprovação ou recibo do I-129", detail: "Padrão: 3-6 meses. Processamento Premium ($2.805): 15 dias úteis." },
          ],
        },
        {
          name: "Processamento Consular",
          subtitle: "Para solicitantes fora dos EUA",
          items: [
            { text: "Completar a solicitação DS-160 após a aprovação do I-129", detail: "Use os detalhes do seu aviso de aprovação I-129." },
            { text: "Pagar a taxa MRV ($185)", detail: "Taxa padrão de solicitação de visto." },
            { text: "Agendar entrevista na embaixada/consulado dos EUA", detail: "Leve todos os documentos de emprego, aviso de aprovação I-129 e credenciais acadêmicas." },
            { text: "Comparecer à entrevista consular H-1B", detail: "Foco em ocupação especializada, relação com empregador e funções do trabalho." },
            { text: "Receber carimbo de visto H-1B se aprovado", detail: "Pague a Taxa de Integridade de Visto de $250. O visto é válido por até 3 anos inicialmente." },
          ],
        },
        {
          name: "Após a Aprovação",
          subtitle: "Manutenção do seu status H-1B",
          items: [
            { text: "Começar a trabalhar apenas após a data de início do H-1B (1º de outubro)", detail: "Os casos do teto H-1B entram em vigor em 1º de outubro do ano fiscal." },
            { text: "Solicitar extensão antes do período inicial de 3 anos expirar", detail: "O H-1B é extensível em incrementos de 3 anos, até 6 anos no total." },
            { text: "Considerar iniciar o processo de green card", detail: "Titulares de H-1B são elegíveis para green cards baseados em emprego. Começar cedo é crítico devido aos tempos de espera para algumas nacionalidades." },
          ],
        },
      ],
    },
  },
  fr: {
    b1b2: {
      title: "Liste de Contrôle pour le Visa Touristique B-1/B-2",
      subtitle: "Pour les visiteurs d'affaires et les touristes demandant un séjour de courte durée aux États-Unis.",
      phases: [
        {
          name: "Préparation",
          subtitle: "Avant de commencer la demande",
          items: [
            { text: "Déterminer si vous avez besoin d'un B-1 ou B-2 (ou combiné B-1/B-2)", detail: "B-1 est pour les visites d'affaires ; B-2 est pour le tourisme/médical/visite familiale. La plupart des demandeurs obtiennent le tampon combiné B-1/B-2." },
            { text: "Confirmer que votre passeport est valide 6+ mois au-delà du séjour prévu", detail: "S'il expire avant, renouvelez-le avant de faire la demande." },
            { text: "Vérifier si votre pays participe au Programme d'exemption de visa (ESTA)", detail: "Les pays du VWP peuvent ne pas avoir besoin d'un visa B pour les séjours de moins de 90 jours." },
            { text: "Rassembler des preuves de liens solides avec votre pays d'origine", detail: "Lettre d'emploi, documents de propriété, obligations familiales — nécessaires lors de l'entretien." },
            { text: "Rassembler la documentation financière", detail: "Relevés bancaires de 3-6 mois montrant des soldes stables, pas seulement un grand dépôt récent." },
            { text: "Planifier les détails spécifiques de votre voyage", detail: "Dates, villes, hébergement, vol de retour. Les itinéraires vagues nuisent à votre dossier." },
          ],
        },
        {
          name: "Demande DS-160",
          subtitle: "Remplir la demande de visa en ligne",
          items: [
            { text: "Prendre ou obtenir une photo de type passeport répondant aux exigences américaines", detail: "Règles spécifiques de taille, de fond et de position de la tête sur travel.state.gov." },
            { text: "Commencer le DS-160 sur ceac.state.gov/genniv", detail: "Enregistrez votre identifiant de demande immédiatement — vous en aurez besoin pour revenir." },
            { text: "Répondre à toutes les questions du DS-160 honnêtement", detail: "Les incohérences avec des réponses ultérieures ou votre DS-2019 peuvent entraîner des refus." },
            { text: "Télécharger la photo de passeport sur le DS-160", detail: "Si elle est refusée, les photos peuvent être reprises dans la plupart des pharmacies." },
            { text: "Soumettre le DS-160 et imprimer la page de confirmation avec code-barres", detail: "Vous l'apporterez à l'entretien." },
          ],
        },
        {
          name: "Frais et Planification",
          subtitle: "Payez les frais et prenez rendez-vous pour votre entretien",
          items: [
            { text: "Payer les frais de demande de visa MRV ($185)", detail: "La méthode de paiement varie selon le pays — consultez le site Web de votre ambassade." },
            { text: "Planifier votre entretien de visa à l'ambassade/consulat", detail: "En haute saison (mai-août), réservez 30-60 jours à l'avance." },
            { text: "Ajouter $250 de Frais d'intégrité de visa à votre budget (uniquement si approuvé)", detail: "Nouveaux depuis octobre 2025 — facturés uniquement lorsque le visa est accordé." },
          ],
        },
        {
          name: "Préparation à l'Entretien",
          subtitle: "Se préparer pour l'entretien consulaire",
          items: [
            { text: "S'exercer à répondre aux questions d'entretien courantes", detail: "Des réponses spécifiques, honnêtes et brèves fonctionnent mieux. Ne mémorisez pas de scripts." },
            { text: "Organiser tous les documents dans un dossier", detail: "Apportez les originaux et les copies ; les agents peuvent demander l'un ou l'autre." },
            { text: "Planifier votre trajet jusqu'à l'ambassade", detail: "Arrivez 15-30 minutes en avance. Les files d'attente de sécurité peuvent être longues." },
            { text: "Vérifier le code vestimentaire", detail: "Tenue décontractée d'affaires ou formelle. Évitez les tenues tape-à-l'œil ou négligées." },
          ],
        },
        {
          name: "Jour de l'Entretien",
          subtitle: "Assistez à votre entretien consulaire",
          items: [
            { text: "Apporter tous les documents requis", detail: "Passeport, confirmation DS-160, reçu MRV, photo, documentation des liens." },
            { text: "Soumettre les empreintes digitales (biométrie)", detail: "Effectué lors de l'entretien ou lors d'un rendez-vous séparé, selon le pays." },
            { text: "Compléter l'entretien consulaire", detail: "La plupart durent 2-5 minutes. Répondez à la question posée, puis arrêtez de parler." },
            { text: "Recevoir la décision", detail: "Approbation, refus en vertu du 214(b), ou traitement administratif 221(g)." },
          ],
        },
        {
          name: "Après Approbation",
          subtitle: "Prochaines étapes une fois approuvé",
          items: [
            { text: "Payer les Frais d'intégrité de visa de $250", detail: "Le processus de paiement varie selon l'ambassade." },
            { text: "Attendre le retour du passeport avec le visa", detail: "Généralement 1-2 semaines par courrier ou retrait." },
            { text: "Vérifier que tous les détails du visa sont corrects", detail: "Vérifiez l'orthographe du nom, les dates de validité et le type d'entrée." },
            { text: "Planifier le voyage dans la période de validité du visa", detail: "Entrées multiples généralement autorisées dans la validité du visa." },
          ],
        },
      ],
    },
    f1: {
      title: "Liste de Contrôle pour le Visa Étudiant F-1",
      subtitle: "Pour les étudiants internationaux acceptés dans une école américaine certifiée SEVP.",
      phases: [
        {
          name: "Avant de Postuler",
          subtitle: "Inscription et étapes préalables à la demande",
          items: [
            { text: "Recevoir l'acceptation d'une école certifiée SEVP", detail: "L'école doit être approuvée par le Programme pour étudiants et visiteurs en échange." },
            { text: "Payer les frais SEVIS I-901 ($350 pour F-1)", detail: "Doit être payé avant de planifier votre entretien de visa. Payez sur fmjfee.com." },
            { text: "Recevoir le Formulaire I-20 du DSO de votre école", detail: "L'Agent scolaire désigné le génère après l'inscription." },
            { text: "Vérifier que les informations du I-20 sont correctes", detail: "Vérifiez le nom, les dates du programme et les montants de soutien financier." },
          ],
        },
        {
          name: "DS-160 et Planification",
          subtitle: "Postulez en ligne et planifiez votre entretien",
          items: [
            { text: "Remplir la demande de visa en ligne DS-160", detail: "Utilisez les informations de votre I-20 lors du remplissage du formulaire." },
            { text: "Payer les frais MRV ($185)", detail: "Vérifiez votre ambassade spécifique pour les méthodes de paiement." },
            { text: "Planifier l'entretien de visa", detail: "Les entretiens F-1 peuvent être planifiés jusqu'à 120 jours avant la date de début du programme." },
          ],
        },
        {
          name: "Préparation des Documents",
          subtitle: "Rassemblez tous les documents requis",
          items: [
            { text: "Passeport valide (validité de 6+ mois)", detail: "Si le passeport est proche de l'expiration, renouvelez-le avant de postuler." },
            { text: "Formulaire I-20 (original, signé par le DSO)", detail: "Le document original est requis — une copie n'est pas suffisante." },
            { text: "Reçu des frais SEVIS (confirmation I-901)", detail: "Imprimez-le depuis fmjfee.com après le paiement." },
            { text: "Page de confirmation du DS-160", detail: "La page avec code-barres de votre demande DS-160 complétée." },
            { text: "Documentation financière prouvant que vous pouvez financer vos études", detail: "Relevés bancaires, lettres de bourse, lettres du parrain montrant 12+ mois de financement." },
            { text: "Preuve de liens avec le pays d'origine", detail: "Preuve que vous prévoyez de retourner après les études — famille, biens, perspectives d'emploi." },
            { text: "Lettre d'acceptation de l'école", detail: "Montre que vous avez été formellement admis au programme." },
          ],
        },
        {
          name: "Entretien",
          subtitle: "Assistez à votre entretien consulaire",
          items: [
            { text: "Assister à l'entretien avec tous les documents", detail: "Apportez les originaux et les copies de tout." },
            { text: "Être prêt à expliquer vos plans d'études", detail: "Ce que vous étudierez, pourquoi aux États-Unis et vos plans après l'obtention du diplôme." },
            { text: "Démontrer l'intention de retourner dans votre pays après les études", detail: "C'est la question critique 214(b) pour les demandeurs F-1." },
            { text: "Recevoir la décision de visa", detail: "Si approuvé, payez les Frais d'intégrité de visa de $250." },
          ],
        },
      ],
    },
    j1: {
      title: "Liste de Contrôle pour le Visa de Visiteur en Échange J-1",
      subtitle: "Pour les visiteurs en échange, les chercheurs, les stagiaires, les jeunes filles au pair et les participants aux programmes de travail estival.",
      phases: [
        {
          name: "Inscription au Programme",
          subtitle: "Travaillez avec votre organisation parrainante",
          items: [
            { text: "Être accepté par un programme de parrainage J-1 désigné par le DOS", detail: "Exemples : universités, EF, CIEE, Cultural Care Au Pair, etc." },
            { text: "Recevoir le Formulaire DS-2019 de votre parrain", detail: "C'est l'équivalent J-1 du I-20 du F-1." },
            { text: "Payer les frais SEVIS I-901 ($220 pour J-1 dans la plupart des catégories ; $35 pour les au pairs)", detail: "Payez sur fmjfee.com avant votre entretien." },
          ],
        },
        {
          name: "Demande",
          subtitle: "Complétez votre demande de visa",
          items: [
            { text: "Remplir la demande en ligne DS-160", detail: "Référencez votre DS-2019 pour les détails du programme." },
            { text: "Payer les frais MRV ($185)", detail: "Vérifiez votre ambassade pour les méthodes de paiement." },
            { text: "Planifier l'entretien de visa", detail: "Planifiez le plus tôt possible — les programmes estivaux ont une forte demande." },
          ],
        },
        {
          name: "Documents",
          subtitle: "Rassemblez vos documents pour l'entretien",
          items: [
            { text: "Passeport valide", detail: "Doit être valide 6+ mois au-delà de la date de fin du programme." },
            { text: "DS-2019 (Certificat d'éligibilité)", detail: "Original, signé par le responsable de votre parrain." },
            { text: "Reçu des frais SEVIS", detail: "Confirmation de paiement I-901 de fmjfee.com." },
            { text: "Page de confirmation du DS-160", detail: "Page avec code-barres de votre demande complétée." },
            { text: "Documents du programme parrain", detail: "Lettre d'acceptation du programme, documents de la famille d'accueil (pour les au pairs), etc." },
            { text: "Documentation de soutien financier", detail: "Preuve que votre programme d'échange ou parrain couvre vos frais." },
          ],
        },
        {
          name: "Entretien",
          subtitle: "Assistez à votre entretien consulaire",
          items: [
            { text: "Assister à l'entretien avec tous les documents", detail: "Arrivez en avance et apportez tout organisé." },
            { text: "Expliquer clairement votre programme d'échange", detail: "Quelle organisation, quel programme, ce que vous ferez, quand vous retournez." },
            { text: "Comprendre l'exigence de résidence de deux ans dans le pays d'origine", detail: "De nombreux titulaires de visa J-1 doivent retourner dans leur pays d'origine pendant 2 ans avant d'obtenir des visas H ou L." },
            { text: "Recevoir la décision", detail: "Si approuvé, payez les Frais d'intégrité de visa de $250." },
          ],
        },
      ],
    },
    k1: {
      title: "Liste de Contrôle pour le Visa de Fiancé(e) K-1",
      subtitle: "Pour les citoyens américains amenant leur fiancé(e) aux États-Unis pour se marier dans les 90 jours.",
      phases: [
        {
          name: "Pétition auprès de l'USCIS",
          subtitle: "Déposer la pétition I-129F",
          items: [
            { text: "Confirmer que vous répondez aux critères d'éligibilité K-1", detail: "Les deux parties doivent être libres de se marier et doivent s'être rencontrées en personne dans les 2 dernières années." },
            { text: "Rassembler des preuves de relation authentique", detail: "Photos ensemble, journaux d'appels, correspondance, dossiers de voyage montrant que vous vous êtes rencontrés en personne." },
            { text: "Remplir le Formulaire I-129F (Pétition pour fiancé(e) étranger(e))", detail: "Déposer auprès de l'USCIS. Frais de dépôt actuels : $675." },
            { text: "Inclure les documents justificatifs avec le I-129F", detail: "Preuve de relation, actes de naissance, décrets de divorce si applicable." },
            { text: "Attendre l'approbation du I-129F (généralement 6-10 mois)", detail: "Suivez sur my.uscis.gov en utilisant votre numéro de reçu." },
          ],
        },
        {
          name: "Traitement au NVC",
          subtitle: "Après l'approbation du I-129F",
          items: [
            { text: "Recevoir le numéro de dossier du NVC", detail: "Le Centre national des visas vous informera, vous et votre fiancé(e), après l'approbation de l'USCIS." },
            { text: "Le(la) fiancé(e) prend rendez-vous à l'ambassade américaine locale", detail: "La planification se fait via le système de rendez-vous de l'ambassade, pas du NVC." },
          ],
        },
        {
          name: "Documents pour le(la) Fiancé(e)",
          subtitle: "Documents dont votre fiancé(e) a besoin pour l'entretien",
          items: [
            { text: "Passeport valide", detail: "Doit être valide 6+ mois au-delà de la période de validité du K-1." },
            { text: "Demande DS-160", detail: "Le(la) fiancé(e) remplit ceci, pas le pétitionnaire citoyen américain." },
            { text: "Acte de naissance", detail: "Avec traduction certifiée si ce n'est pas en anglais." },
            { text: "Casiers judiciaires", detail: "De tous les pays où la personne a vécu 6+ mois depuis l'âge de 16 ans." },
            { text: "Examen médical par un médecin agréé par l'ambassade", detail: "Doit être effectué avant l'entretien de visa." },
            { text: "Formulaire I-134 Déclaration de parrainage (du citoyen américain)", detail: "Montre que le pétitionnaire américain répond aux exigences de revenus pour parrainer." },
            { text: "Preuve de relation authentique", detail: "Photos, relevés de communication, preuve de voyages." },
            { text: "DS-5540 (Questionnaire sur la charge publique) si requis", detail: "Vérifiez les exigences de l'ambassade." },
          ],
        },
        {
          name: "Entretien",
          subtitle: "Entretien consulaire K-1",
          items: [
            { text: "Assister à l'entretien à l'ambassade américaine", detail: "L'entretien porte sur la relation et l'intention de se marier aux États-Unis dans les 90 jours." },
            { text: "Payer les Frais d'intégrité de visa de $250 si approuvé", detail: "Nouveaux depuis octobre 2025." },
            { text: "Recevoir le visa K-1 (généralement valide 6 mois)", detail: "Doit entrer aux États-Unis avant l'expiration du visa." },
          ],
        },
        {
          name: "Après l'Arrivée aux États-Unis",
          subtitle: "Après que votre fiancé(e) entre aux États-Unis",
          items: [
            { text: "Se marier dans les 90 jours suivant l'entrée", detail: "Ne pas se marier exige de quitter les États-Unis." },
            { text: "Déposer le Formulaire I-485 (Ajustement de statut) après le mariage", detail: "C'est la demande de carte verte. Frais de dépôt typiques : $1,440." },
            { text: "Demander l'autorisation de travail (Formulaire I-765) avec AOS", detail: "L'EAD prend environ 4-9 mois pour être émis." },
            { text: "Assister au rendez-vous biométrique", detail: "Requis pour le traitement AOS." },
            { text: "Assister à l'entretien AOS (si planifié)", detail: "Tous les cas AOS ne nécessitent pas d'entretien." },
            { text: "Recevoir la carte verte (résidence permanente conditionnelle)", detail: "Généralement conditionnelle (2 ans) pour les mariages de moins de 2 ans." },
          ],
        },
      ],
    },
    ircr: {
      title: "Liste de Contrôle pour le Visa de Conjoint IR/CR",
      subtitle: "Pour les citoyens américains ou les résidents permanents légaux qui parrainent un conjoint pour un visa d'immigrant.",
      phases: [
        {
          name: "Pétition auprès de l'USCIS",
          subtitle: "Déposer la pétition I-130",
          items: [
            { text: "Déposer le Formulaire I-130 (Pétition pour parent étranger)", detail: "Les conjoints de citoyens américains utilisent la catégorie de parent immédiat — pas de liste d'attente. Les conjoints de résidents permanents font face à des attentes de catégorie de préférence." },
            { text: "Inclure la preuve du statut de citoyen américain/résident permanent", detail: "Passeport américain, certificat de naturalisation ou carte verte." },
            { text: "Inclure la preuve de mariage valide", detail: "Acte de mariage avec traduction certifiée." },
            { text: "Inclure la preuve de mariage authentique", detail: "Comptes bancaires joints, bail/hypothèque, photos, relevés de communication." },
            { text: "Attendre l'approbation du I-130", detail: "Parent immédiat (conjoint citoyen américain) généralement 6-12 mois. Conjoint de résident permanent : attentes plus longues en raison des catégories de préférence de visa." },
          ],
        },
        {
          name: "Traitement au NVC",
          subtitle: "Étape du Centre national des visas",
          items: [
            { text: "Payer les frais de visa d'immigrant du NVC ($325 frais de déclaration de parrainage + $325 frais de visa d'immigrant)", detail: "Payez en ligne via ceac.state.gov." },
            { text: "Remplir le Formulaire DS-261 (Choix d'agent et adresse)", detail: "En ligne via ceac.state.gov." },
            { text: "Télécharger tous les documents requis via CEAC", detail: "Documents du parrain (I-864, déclarations fiscales, etc.) et documents du bénéficiaire." },
            { text: "Remplir le Formulaire I-864 (Déclaration de parrainage)", detail: "Le parrain doit répondre à 125% des directives de pauvreté pour la taille du ménage." },
            { text: "Attendre que le NVC envoie le dossier à l'ambassade", detail: "Prend 1-3 mois après que tous les documents sont soumis et acceptés." },
          ],
        },
        {
          name: "Médical et Documents",
          subtitle: "Exigences préalables à l'entretien",
          items: [
            { text: "Compléter l'examen médical avec un médecin agréé par l'ambassade", detail: "Doit utiliser un médecin panel désigné par l'ambassade. Les résultats sont envoyés directement à l'ambassade." },
            { text: "Rassembler les casiers judiciaires", detail: "De tous les pays où le conjoint a vécu 6+ mois depuis l'âge de 16 ans." },
            { text: "Obtenir l'acte de naissance (avec traduction)", detail: "Traduction certifiée requise pour les documents non-anglophones." },
            { text: "Remplir le DS-260 (demande de visa d'immigrant)", detail: "En ligne via ceac.state.gov." },
            { text: "Se préparer pour l'entretien", detail: "Apportez tous les originaux des documents soumis au NVC." },
          ],
        },
        {
          name: "Entretien Consulaire",
          subtitle: "Entretien pour visa d'immigrant",
          items: [
            { text: "Assister à l'entretien à l'ambassade américaine", detail: "L'entretien porte sur l'authenticité du mariage et l'éligibilité." },
            { text: "Apporter tous les documents originaux", detail: "Passeport, acte de mariage, casiers judiciaires, résultats médicaux." },
            { text: "Recevoir le visa si approuvé", detail: "Le tampon IR-1/CR-1 dans le passeport est le document d'entrée." },
          ],
        },
        {
          name: "Après l'Entrée aux États-Unis",
          subtitle: "Après que votre conjoint entre aux États-Unis",
          items: [
            { text: "Le conjoint entre en tant que résident conditionnel ou permanent", detail: "CR-1 si mariés depuis moins de 2 ans (conditionnel) ; IR-1 si mariés depuis 2+ ans (permanent)." },
            { text: "La carte verte arrive par courrier dans les 6 semaines", detail: "L'USCIS envoie la carte physique à votre adresse américaine." },
            { text: "Déposer le I-751 pour lever les conditions (CR-1 seulement)", detail: "Déposé 90 jours avant le 2e anniversaire de la carte verte." },
          ],
        },
      ],
    },
    h1b: {
      title: "Liste de Contrôle pour le Visa de Travailleur H-1B",
      subtitle: "Pour les travailleurs en occupations spécialisées nécessitant un employeur parrain aux États-Unis.",
      phases: [
        {
          name: "Inscription et Loterie",
          subtitle: "Période d'inscription de mars",
          items: [
            { text: "Trouver un employeur américain prêt à parrainer votre H-1B", detail: "L'employeur doit tout déposer — le H-1B est entièrement géré par l'employeur." },
            { text: "L'employeur vous inscrit à la loterie H-1B (mars)", detail: "L'USCIS ouvre généralement l'inscription début mars. Seuls les candidats inscrits peuvent être sélectionnés." },
            { text: "Attendre la notification de sélection à la loterie", detail: "L'USCIS annonce les sélections fin mars. La non-sélection signifie attendre l'année suivante." },
          ],
        },
        {
          name: "Dépôt de la Pétition",
          subtitle: "Après la sélection à la loterie (d'avril en avant)",
          items: [
            { text: "L'employeur dépose la pétition Formulaire I-129", detail: "Doit être déposée avant le 30 juin. L'employeur paie les frais de dépôt ($730-$4 000+ selon la taille de l'employeur et le traitement premium)." },
            { text: "Obtenir la Demande de condition de travail (LCA) du DOL", detail: "L'employeur la dépose auprès du Département du Travail avant le I-129. Confirme que le salaire en vigueur est payé." },
            { text: "Rassembler les documents justificatifs pour le I-129", detail: "Évaluation des diplômes (si diplôme étranger), lettre d'emploi, lettres client (si conseil), preuve d'occupation spécialisée." },
            { text: "Attendre l'approbation ou le reçu du I-129", detail: "Standard : 3-6 mois. Traitement Premium ($2 805) : 15 jours ouvrables." },
          ],
        },
        {
          name: "Traitement Consulaire",
          subtitle: "Pour les demandeurs hors des États-Unis",
          items: [
            { text: "Remplir la demande DS-160 après l'approbation du I-129", detail: "Utilisez les détails de votre avis d'approbation I-129." },
            { text: "Payer les frais MRV ($185)", detail: "Frais standard de demande de visa." },
            { text: "Planifier l'entretien à l'ambassade/consulat américain", detail: "Apportez tous les documents d'emploi, l'avis d'approbation I-129 et les diplômes." },
            { text: "Assister à l'entretien consulaire H-1B", detail: "Axé sur l'occupation spécialisée, la relation employeur et les fonctions du poste." },
            { text: "Recevoir le tampon de visa H-1B si approuvé", detail: "Payez les Frais d'intégrité de visa de $250. Le visa est valide jusqu'à 3 ans initialement." },
          ],
        },
        {
          name: "Après Approbation",
          subtitle: "Maintien de votre statut H-1B",
          items: [
            { text: "Commencer à travailler uniquement après la date de début H-1B (1er octobre)", detail: "Les cas du plafond H-1B deviennent effectifs le 1er octobre de l'année fiscale." },
            { text: "Demander une extension avant l'expiration de la période initiale de 3 ans", detail: "Le H-1B est extensible par tranches de 3 ans, jusqu'à 6 ans au total." },
            { text: "Envisager de lancer le processus de carte verte", detail: "Les titulaires de H-1B sont éligibles aux cartes vertes basées sur l'emploi. Commencer tôt est crucial en raison des délais d'attente pour certaines nationalités." },
          ],
        },
      ],
    },
  },
  de: {
    b1b2: {
      title: "Checkliste für das Touristenvisum B-1/B-2",
      subtitle: "Für Geschäftsreisende und Touristen, die einen kurzfristigen Aufenthalt in den USA beantragen.",
      phases: [
        {
          name: "Vorbereitung",
          subtitle: "Bevor Sie die Beantragung beginnen",
          items: [
            { text: "Bestimmen, ob Sie ein B-1, B-2 oder kombiniertes B-1/B-2 benötigen", detail: "B-1 ist für Geschäftsreisen; B-2 ist für Tourismus/medizinische Behandlung/Familienbesuche. Die meisten Antragsteller erhalten den kombinierten B-1/B-2-Stempel." },
            { text: "Bestätigen, dass Ihr Reisepass noch mindestens 6 Monate über den geplanten Aufenthalt hinaus gültig ist", detail: "Wenn er früher abläuft, erneuern Sie ihn vor der Antragstellung." },
            { text: "Prüfen, ob Ihr Land am Visa-Waiver-Programm (ESTA) teilnimmt", detail: "Länder des VWP benötigen möglicherweise kein B-Visum für Aufenthalte unter 90 Tagen." },
            { text: "Nachweise über enge Bindungen an das Heimatland sammeln", detail: "Arbeitsnachweis, Eigentumsdokumente, familiäre Verpflichtungen — erforderlich beim Vorstellungsgespräch." },
            { text: "Finanzielle Dokumentation sammeln", detail: "Kontoauszüge der letzten 3-6 Monate mit stabilen Salden, nicht nur eine kürzliche große Einzahlung." },
            { text: "Die spezifischen Reisedetails planen", detail: "Daten, Städte, Unterkunft, Rückflug. Vage Reisepläne schaden Ihrem Antrag." },
          ],
        },
        {
          name: "DS-160 Antrag",
          subtitle: "Füllen Sie den Online-Visumantrag aus",
          items: [
            { text: "Ein Passfoto machen oder beschaffen, das den US-Anforderungen entspricht", detail: "Spezifische Größen-, Hintergrund- und Kopfpositionsregeln auf travel.state.gov." },
            { text: "DS-160 auf ceac.state.gov/genniv beginnen", detail: "Speichern Sie Ihre Antrags-ID sofort — Sie benötigen sie, um zurückzukehren." },
            { text: "Alle Fragen im DS-160 ehrlich beantworten", detail: "Widersprüche mit späteren Antworten oder Ihrem DS-2019 können zu Ablehnungen führen." },
            { text: "Passfoto im DS-160 hochladen", detail: "Wenn es abgelehnt wird, können Fotos in den meisten Apotheken neu aufgenommen werden." },
            { text: "DS-160 absenden und die Bestätigungsseite mit Barcode ausdrucken", detail: "Sie bringen diese zum Vorstellungsgespräch mit." },
          ],
        },
        {
          name: "Gebühren und Terminplanung",
          subtitle: "Zahlen Sie die Gebühren und vereinbaren Sie Ihr Vorstellungsgespräch",
          items: [
            { text: "MRV-Visumgebühr bezahlen ($185)", detail: "Die Zahlungsmethode variiert je nach Land — prüfen Sie die Website Ihrer Botschaft." },
            { text: "Visumgespräch bei der Botschaft/dem Konsulat vereinbaren", detail: "In der Hochsaison (Mai-August) 30-60 Tage im Voraus buchen." },
            { text: "Visa Integrity Fee von $250 in Ihr Budget einplanen (nur bei Genehmigung)", detail: "Neu ab Oktober 2025 — wird nur erhoben, wenn das Visum erteilt wird." },
          ],
        },
        {
          name: "Vorbereitung auf das Vorstellungsgespräch",
          subtitle: "Bereiten Sie sich auf das Konsulargespräch vor",
          items: [
            { text: "Antworten auf häufige Interviewfragen üben", detail: "Spezifische, ehrliche, kurze Antworten funktionieren am besten. Kein auswendig gelerntes Skript." },
            { text: "Alle Dokumente in einer Mappe organisieren", detail: "Originale und Kopien mitbringen; Beamte können nach beidem fragen." },
            { text: "Die Anreise zur Botschaft planen", detail: "15-30 Minuten früher ankommen. Sicherheitsschlangen können lang sein." },
            { text: "Die Kleiderordnung prüfen", detail: "Business-casual oder formell. Auffällige oder schlampige Kleidung vermeiden." },
          ],
        },
        {
          name: "Tag des Vorstellungsgesprächs",
          subtitle: "Nehmen Sie an Ihrem Konsulargespräch teil",
          items: [
            { text: "Alle erforderlichen Dokumente mitbringen", detail: "Reisepass, DS-160-Bestätigung, MRV-Quittung, Foto, Bindungsnachweise." },
            { text: "Fingerabdrücke abgeben (Biometrie)", detail: "Entweder beim Gespräch oder bei einem separaten Termin, je nach Land." },
            { text: "Das Konsulargespräch absolvieren", detail: "Die meisten dauern 2-5 Minuten. Beantworten Sie die gestellte Frage, dann schweigen Sie." },
            { text: "Entscheidung erhalten", detail: "Genehmigung, Ablehnung unter 214(b) oder administratives Verarbeitungsverfahren 221(g)." },
          ],
        },
        {
          name: "Nach der Genehmigung",
          subtitle: "Nächste Schritte nach der Genehmigung",
          items: [
            { text: "Visa Integrity Fee von $250 bezahlen", detail: "Der Zahlungsvorgang variiert je nach Botschaft." },
            { text: "Auf die Rücksendung des Reisepasses mit Visum warten", detail: "In der Regel 1-2 Wochen per Kurier oder Abholung." },
            { text: "Alle Visumdetails auf Richtigkeit prüfen", detail: "Namensschreibweise, Gültigkeitsdaten und Einreiseart überprüfen." },
            { text: "Reise innerhalb des Gültigkeitszeitraums des Visums planen", detail: "Mehrfache Einreisen sind in der Regel innerhalb der Visumgültigkeit erlaubt." },
          ],
        },
      ],
    },
    f1: {
      title: "Checkliste für das Studentenvisum F-1",
      subtitle: "Für internationale Studierende, die an einer SEVP-zertifizierten US-Schule angenommen wurden.",
      phases: [
        {
          name: "Vor der Antragstellung",
          subtitle: "Immatrikulation und vorbereitende Schritte",
          items: [
            { text: "Zulassung von einer SEVP-zertifizierten Schule erhalten", detail: "Die Schule muss vom Student and Exchange Visitor Program genehmigt sein." },
            { text: "SEVIS I-901-Gebühr bezahlen ($350 für F-1)", detail: "Muss vor der Terminvereinbarung für das Visumgespräch bezahlt werden. Zahlung auf fmjfee.com." },
            { text: "Formular I-20 vom DSO Ihrer Schule erhalten", detail: "Der Designated School Official erstellt dieses nach der Immatrikulation." },
            { text: "Informationen im I-20 auf Richtigkeit prüfen", detail: "Name, Programmdaten und Finanzierungsbeträge überprüfen." },
          ],
        },
        {
          name: "DS-160 und Terminplanung",
          subtitle: "Online beantragen und Gespräch vereinbaren",
          items: [
            { text: "Online-Visumantrag DS-160 ausfüllen", detail: "Verwenden Sie Ihre I-20-Informationen beim Ausfüllen des Formulars." },
            { text: "MRV-Gebühr bezahlen ($185)", detail: "Zahlungsmethoden bei Ihrer jeweiligen Botschaft prüfen." },
            { text: "Visumgespräch vereinbaren", detail: "F-1-Gespräche können bis zu 120 Tage vor dem Programmbeginn geplant werden." },
          ],
        },
        {
          name: "Dokumentenvorbereitung",
          subtitle: "Alle erforderlichen Dokumente sammeln",
          items: [
            { text: "Gültiger Reisepass (Gültigkeit mindestens 6 Monate)", detail: "Wenn der Reisepass bald abläuft, vor der Antragstellung erneuern." },
            { text: "Formular I-20 (Original, vom DSO unterzeichnet)", detail: "Das Originaldokument ist erforderlich — eine Kopie reicht nicht aus." },
            { text: "SEVIS-Gebührenquittung (I-901-Bestätigung)", detail: "Nach der Zahlung von fmjfee.com ausdrucken." },
            { text: "DS-160-Bestätigungsseite", detail: "Die Barcodeseite Ihres abgeschlossenen DS-160-Antrags." },
            { text: "Finanzielle Nachweise, dass Sie Ihr Studium finanzieren können", detail: "Kontoauszüge, Stipendienbriefe, Sponsorenbriefe mit Finanzierungsnachweis für 12+ Monate." },
            { text: "Nachweis der Bindungen an das Heimatland", detail: "Belege, dass Sie nach dem Studium zurückzukehren beabsichtigen — Familie, Vermögen, Jobaussichten." },
            { text: "Zulassungsschreiben der Schule", detail: "Zeigt, dass Sie formal in das Programm aufgenommen wurden." },
          ],
        },
        {
          name: "Vorstellungsgespräch",
          subtitle: "Nehmen Sie an Ihrem Konsulargespräch teil",
          items: [
            { text: "Zum Gespräch mit allen Dokumenten erscheinen", detail: "Originale und Kopien von allem mitbringen." },
            { text: "Bereit sein, Ihre Studienpläne zu erläutern", detail: "Was Sie studieren werden, warum in den USA und Ihre Pläne nach dem Abschluss." },
            { text: "Absicht zur Rückkehr nach dem Studium nachweisen", detail: "Dies ist die kritische 214(b)-Frage für F-1-Antragsteller." },
            { text: "Visumentscheidung erhalten", detail: "Bei Genehmigung Visa Integrity Fee von $250 zahlen." },
          ],
        },
      ],
    },
    j1: {
      title: "Checkliste für das Austauschbesucher-Visum J-1",
      subtitle: "Für Austauschbesucher, Wissenschaftler, Praktikanten, Au-pairs und Teilnehmer an Sommerprogrammen.",
      phases: [
        {
          name: "Programmregistrierung",
          subtitle: "Zusammenarbeit mit Ihrer Trägerorganisation",
          items: [
            { text: "Von einem vom DOS designierten J-1-Trägerprogramm angenommen werden", detail: "Beispiele: Universitäten, EF, CIEE, Cultural Care Au Pair usw." },
            { text: "Formular DS-2019 von Ihrem Träger erhalten", detail: "Dies ist das J-1-Äquivalent des F-1-I-20." },
            { text: "SEVIS I-901-Gebühr bezahlen ($220 für J-1 in den meisten Kategorien; $35 für Au-pairs)", detail: "Auf fmjfee.com vor Ihrem Gespräch bezahlen." },
          ],
        },
        {
          name: "Antragstellung",
          subtitle: "Vervollständigen Sie Ihren Visumantrag",
          items: [
            { text: "Online-Antrag DS-160 ausfüllen", detail: "Beziehen Sie sich auf Ihr DS-2019 für Programmdetails." },
            { text: "MRV-Gebühr bezahlen ($185)", detail: "Zahlungsmethoden bei Ihrer Botschaft prüfen." },
            { text: "Visumgespräch vereinbaren", detail: "So früh wie möglich buchen — Sommerprogramme haben hohe Nachfrage." },
          ],
        },
        {
          name: "Dokumente",
          subtitle: "Sammeln Sie Ihre Interviewdokumente",
          items: [
            { text: "Gültiger Reisepass", detail: "Muss mindestens 6 Monate über das Programmende hinaus gültig sein." },
            { text: "DS-2019 (Eignungsbescheinigung)", detail: "Original, unterzeichnet vom verantwortlichen Beamten Ihres Trägers." },
            { text: "SEVIS-Gebührenquittung", detail: "I-901-Zahlungsbestätigung von fmjfee.com." },
            { text: "DS-160-Bestätigungsseite", detail: "Barcodeseite Ihres abgeschlossenen Antrags." },
            { text: "Trägerprogramm-Dokumente", detail: "Programmzulassungsschreiben, Gastfamiliendokumente (für Au-pairs) usw." },
            { text: "Finanzierungsnachweise", detail: "Nachweis, dass Ihr Austauschprogramm oder Träger Ihre Kosten übernimmt." },
          ],
        },
        {
          name: "Vorstellungsgespräch",
          subtitle: "Nehmen Sie an Ihrem Konsulargespräch teil",
          items: [
            { text: "Zum Gespräch mit allen Dokumenten erscheinen", detail: "Früh ankommen und alles organisiert mitbringen." },
            { text: "Ihr Austauschprogramm klar erläutern", detail: "Welche Organisation, welches Programm, was Sie tun werden, wann Sie zurückkehren." },
            { text: "Die zweijährige Heimaufenthaltsanforderung verstehen", detail: "Viele J-1-Visuminhaber müssen vor dem Erhalt von H- oder L-Visa 2 Jahre in ihr Heimatland zurückkehren." },
            { text: "Entscheidung erhalten", detail: "Bei Genehmigung Visa Integrity Fee von $250 zahlen." },
          ],
        },
      ],
    },
    k1: {
      title: "Checkliste für das Verlobten-Visum K-1",
      subtitle: "Für US-Bürger, die ihren Verlobten in die USA bringen, um innerhalb von 90 Tagen zu heiraten.",
      phases: [
        {
          name: "USCIS-Petition",
          subtitle: "Den I-129F-Antrag einreichen",
          items: [
            { text: "Bestätigen, dass Sie die K-1-Voraussetzungen erfüllen", detail: "Beide Parteien müssen heiratsfähig sein und sich innerhalb der letzten 2 Jahre persönlich getroffen haben." },
            { text: "Nachweise für eine echte Beziehung sammeln", detail: "Gemeinsame Fotos, Anrufprotokolle, Korrespondenz, Reisebelege, die persönliche Treffen nachweisen." },
            { text: "Formular I-129F (Petition für ausländischen Verlobten) ausfüllen", detail: "Bei USCIS einreichen. Aktuelle Antragsgebühr: $675." },
            { text: "Unterstützende Dokumente zum I-129F beifügen", detail: "Beziehungsnachweise, Geburtsurkunden, Scheidungsurteile falls zutreffend." },
            { text: "Auf I-129F-Genehmigung warten (in der Regel 6-10 Monate)", detail: "Auf my.uscis.gov mit Ihrer Quittungsnummer verfolgen." },
          ],
        },
        {
          name: "NVC-Bearbeitung",
          subtitle: "Nach der I-129F-Genehmigung",
          items: [
            { text: "Fallnummer vom NVC erhalten", detail: "Das National Visa Center benachrichtigt Sie und Ihren Verlobten nach der USCIS-Genehmigung." },
            { text: "Verlobter vereinbart Termin bei der lokalen US-Botschaft", detail: "Terminvereinbarung über das Botschaftssystem, nicht über das NVC." },
          ],
        },
        {
          name: "Dokumente für den Verlobten",
          subtitle: "Dokumente, die Ihr Verlobter für das Gespräch benötigt",
          items: [
            { text: "Gültiger Reisepass", detail: "Muss mindestens 6 Monate über die K-1-Gültigkeitsdauer hinaus gültig sein." },
            { text: "DS-160-Antrag", detail: "Der Verlobte füllt dies aus, nicht der US-Bürger-Petent." },
            { text: "Geburtsurkunde", detail: "Mit beglaubigter Übersetzung, wenn nicht auf Englisch." },
            { text: "Polizeiliche Führungszeugnisse", detail: "Aus allen Ländern, in denen die Person seit dem 16. Lebensjahr 6+ Monate gelebt hat." },
            { text: "Ärztliche Untersuchung durch einen von der Botschaft zugelassenen Arzt", detail: "Muss vor dem Visumgespräch durchgeführt werden." },
            { text: "Formular I-134 Verpflichtungserklärung (vom US-Bürger)", detail: "Zeigt, dass der US-Petent die Einkommensanforderungen für die Bürgschaft erfüllt." },
            { text: "Nachweis einer echten Beziehung", detail: "Fotos, Kommunikationsnachweise, Reisebelege." },
            { text: "DS-5540 (Fragebogen zur öffentlichen Last) falls erforderlich", detail: "Botschaftsanforderungen prüfen." },
          ],
        },
        {
          name: "Vorstellungsgespräch",
          subtitle: "K-1 Konsulargespräch",
          items: [
            { text: "Zum Gespräch bei der US-Botschaft erscheinen", detail: "Das Gespräch konzentriert sich auf die Beziehung und die Absicht, innerhalb von 90 Tagen in den USA zu heiraten." },
            { text: "Visa Integrity Fee von $250 zahlen, falls genehmigt", detail: "Neu ab Oktober 2025." },
            { text: "K-1-Visum erhalten (in der Regel 6 Monate gültig)", detail: "Muss vor Ablauf des Visums in die USA einreisen." },
          ],
        },
        {
          name: "Nach der Einreise in die USA",
          subtitle: "Nachdem Ihr Verlobter in die USA eingereist ist",
          items: [
            { text: "Innerhalb von 90 Tagen nach der Einreise heiraten", detail: "Wenn keine Heirat erfolgt, muss die Person die USA verlassen." },
            { text: "Formular I-485 (Anpassung des Status) nach der Hochzeit einreichen", detail: "Dies ist der Green-Card-Antrag. Typische Antragsgebühr: $1.440." },
            { text: "Arbeitserlaubnis (Formular I-765) mit AOS beantragen", detail: "Die EAD dauert etwa 4-9 Monate bis zur Ausstellung." },
            { text: "Biometrie-Termin wahrnehmen", detail: "Für die AOS-Bearbeitung erforderlich." },
            { text: "AOS-Gespräch wahrnehmen (falls geplant)", detail: "Nicht alle AOS-Fälle erfordern ein Gespräch." },
            { text: "Green Card erhalten (bedingte Daueraufenthaltsgenehmigung)", detail: "In der Regel bedingt (2 Jahre) für Ehen unter 2 Jahren." },
          ],
        },
      ],
    },
    ircr: {
      title: "Checkliste für das Ehegatten-Visum IR/CR",
      subtitle: "Für US-Bürger oder rechtmäßige Daueraufenthalter, die einen Ehegatten für ein Einwanderervisum sponsern.",
      phases: [
        {
          name: "USCIS-Petition",
          subtitle: "Den I-130-Antrag einreichen",
          items: [
            { text: "Formular I-130 (Petition für ausländischen Verwandten) einreichen", detail: "Ehegatten von US-Bürgern verwenden die Kategorie der unmittelbaren Verwandten — keine Warteliste. Ehegatten von Daueraufenthaltern unterliegen Wartezeiten der Präferenzkategorie." },
            { text: "Nachweis des US-Bürger-/Daueraufenthalter-Status beifügen", detail: "US-Reisepass, Einbürgerungsurkunde oder Green Card." },
            { text: "Nachweis der gültigen Ehe beifügen", detail: "Heiratsurkunde mit beglaubigter Übersetzung." },
            { text: "Nachweis einer echten Ehe beifügen", detail: "Gemeinsame Bankkonten, Miet-/Hypothekenvertrag, Fotos, Kommunikationsnachweise." },
            { text: "Auf I-130-Genehmigung warten", detail: "Unmittelbarer Verwandter (US-Bürger-Ehegatte) in der Regel 6-12 Monate. Ehegatte eines Daueraufenthalters: längere Wartezeiten durch Präferenzkategorien." },
          ],
        },
        {
          name: "NVC-Bearbeitung",
          subtitle: "Phase des National Visa Center",
          items: [
            { text: "NVC-Einwanderervisumgebühren bezahlen ($325 Verpflichtungserklärungsgebühr + $325 Einwanderervisumgebühr)", detail: "Online über ceac.state.gov bezahlen." },
            { text: "Formular DS-261 ausfüllen (Bevollmächtigten- und Adresswahl)", detail: "Online über ceac.state.gov." },
            { text: "Alle erforderlichen Dokumente über CEAC hochladen", detail: "Sponsoren-Dokumente (I-864, Steuererklärungen usw.) und Begünstigten-Dokumente." },
            { text: "Formular I-864 (Verpflichtungserklärung) ausfüllen", detail: "Der Sponsor muss 125% der Armutsrichtlinien für die Haushaltsgröße erfüllen." },
            { text: "Warten, bis NVC den Fall an die Botschaft schickt", detail: "Dauert 1-3 Monate nach Einreichung und Annahme aller Dokumente." },
          ],
        },
        {
          name: "Medizin und Dokumente",
          subtitle: "Voraussetzungen vor dem Gespräch",
          items: [
            { text: "Ärztliche Untersuchung bei einem von der Botschaft zugelassenen Arzt durchführen lassen", detail: "Muss einen von der Botschaft benannten Panelärzt verwenden. Ergebnisse werden direkt an die Botschaft geschickt." },
            { text: "Polizeiliche Führungszeugnisse sammeln", detail: "Aus allen Ländern, in denen der Ehegatte seit dem 16. Lebensjahr 6+ Monate gelebt hat." },
            { text: "Geburtsurkunde beschaffen (mit Übersetzung)", detail: "Beglaubigte Übersetzung für nicht englischsprachige Dokumente erforderlich." },
            { text: "DS-260 (Einwanderervisumantrag) ausfüllen", detail: "Online über ceac.state.gov." },
            { text: "Auf das Gespräch vorbereiten", detail: "Alle Originale der beim NVC eingereichten Dokumente mitbringen." },
          ],
        },
        {
          name: "Konsulargespräch",
          subtitle: "Einwanderervisum-Gespräch",
          items: [
            { text: "Zum Gespräch bei der US-Botschaft erscheinen", detail: "Das Gespräch konzentriert sich auf die Echtheit der Ehe und die Anspruchsvoraussetzungen." },
            { text: "Alle Originaldokumente mitbringen", detail: "Reisepass, Heiratsurkunde, Führungszeugnisse, medizinische Ergebnisse." },
            { text: "Visum erhalten, falls genehmigt", detail: "Der IR-1/CR-1-Stempel im Reisepass ist das Einreisedokument." },
          ],
        },
        {
          name: "Nach der Einreise in die USA",
          subtitle: "Nachdem Ihr Ehegatte in die USA eingereist ist",
          items: [
            { text: "Ehegatte reist als bedingter oder dauerhafter Aufenthalter ein", detail: "CR-1 bei weniger als 2-jähriger Ehe (bedingt); IR-1 bei 2+ Jahren Ehe (dauerhaft)." },
            { text: "Green Card trifft innerhalb von 6 Wochen per Post ein", detail: "USCIS schickt die physische Karte an Ihre US-Adresse." },
            { text: "I-751 einreichen, um Bedingungen aufzuheben (nur CR-1)", detail: "Wird 90 Tage vor dem 2-Jahres-Jubiläum der Green Card eingereicht." },
          ],
        },
      ],
    },
    h1b: {
      title: "Checkliste für das Arbeitsvisum H-1B",
      subtitle: "Für Fachkräfte in spezialisierten Berufen, die einen US-Arbeitgeber als Sponsor benötigen.",
      phases: [
        {
          name: "Registrierung und Lotterie",
          subtitle: "Registrierungszeitraum im März",
          items: [
            { text: "Einen US-Arbeitgeber finden, der bereit ist, Ihr H-1B zu sponsern", detail: "Der Arbeitgeber muss alles einreichen — das H-1B wird vollständig vom Arbeitgeber gesteuert." },
            { text: "Arbeitgeber meldet Sie für die H-1B-Lotterie an (März)", detail: "USCIS öffnet die Registrierung in der Regel Anfang März. Nur registrierte Bewerber können ausgewählt werden." },
            { text: "Auf Lotterieauswahl-Benachrichtigung warten", detail: "USCIS kündigt Auswahlen Ende März an. Nicht ausgewählt zu werden bedeutet, bis zum nächsten Jahr zu warten." },
          ],
        },
        {
          name: "Petitionseinreichung",
          subtitle: "Nach der Lotterieauswahl (ab April)",
          items: [
            { text: "Arbeitgeber reicht Petitionsformular I-129 ein", detail: "Muss bis 30. Juni eingereicht werden. Arbeitgeber zahlt Antragsgebühren ($730-$4.000+ je nach Arbeitgebergröße und Premium-Bearbeitung)." },
            { text: "Labor Condition Application (LCA) vom DOL einholen", detail: "Arbeitgeber reicht dies beim Arbeitsministerium vor dem I-129 ein. Bestätigt, dass der vorherrschende Lohn gezahlt wird." },
            { text: "Unterstützende Dokumente für den I-129 sammeln", detail: "Bewertung des Studienabschlusses (bei ausländischem Abschluss), Arbeitsnachweis, Kundenbriefe (bei Beratung), Nachweis der Fachkräftigkeit." },
            { text: "Auf I-129-Genehmigung oder Quittung warten", detail: "Standard: 3-6 Monate. Premium-Bearbeitung ($2.805): 15 Werktage." },
          ],
        },
        {
          name: "Konsularische Bearbeitung",
          subtitle: "Für Antragsteller außerhalb der USA",
          items: [
            { text: "DS-160-Antrag nach I-129-Genehmigung ausfüllen", detail: "Angaben aus Ihrem I-129-Genehmigungsbescheid verwenden." },
            { text: "MRV-Gebühr bezahlen ($185)", detail: "Standardgebühr für Visumanträge." },
            { text: "Gespräch bei US-Botschaft/Konsulat vereinbaren", detail: "Alle Beschäftigungsdokumente, I-129-Genehmigungsbescheid und Abschlussnachweise mitbringen." },
            { text: "H-1B-Konsulargespräch wahrnehmen", detail: "Fokus auf Fachkräftigkeit, Arbeitgeberbeziehung und Stellenaufgaben." },
            { text: "H-1B-Visumstempel erhalten, falls genehmigt", detail: "Visa Integrity Fee von $250 zahlen. Visum ist zunächst bis zu 3 Jahre gültig." },
          ],
        },
        {
          name: "Nach der Genehmigung",
          subtitle: "Aufrechterhaltung Ihres H-1B-Status",
          items: [
            { text: "Arbeit erst nach dem H-1B-Startdatum aufnehmen (1. Oktober)", detail: "H-1B-Fälle mit Cap werden am 1. Oktober des Haushaltsjahres wirksam." },
            { text: "Verlängerung beantragen, bevor die anfängliche 3-Jahres-Periode abläuft", detail: "H-1B ist in 3-Jahres-Schritten verlängerbar, insgesamt bis zu 6 Jahre." },
            { text: "Green-Card-Prozess in Betracht ziehen", detail: "H-1B-Inhaber sind für beschäftigungsbasierte Green Cards berechtigt. Ein früher Start ist aufgrund der Wartezeiten für einige Staatsangehörigkeiten entscheidend." },
          ],
        },
      ],
    },
  },
  zh: {
    b1b2: {
      title: "B-1/B-2旅游签证申请清单",
      subtitle: "适用于申请赴美短期商务或旅游签证的申请人。",
      phases: [
        {
          name: "准备阶段",
          subtitle: "开始申请前的准备工作",
          items: [
            { text: "确定您需要B-1、B-2还是B-1/B-2联合签证", detail: "B-1适用于商务访问；B-2适用于旅游/就医/探亲。大多数申请人获得B-1/B-2联合签证印章。" },
            { text: "确认护照在预计停留期结束后仍有至少6个月的有效期", detail: "如护照即将到期，请在申请前先续签。" },
            { text: "检查您的国家是否参与免签证计划（ESTA）", detail: "VWP成员国公民若停留不超过90天，可能无需B类签证。" },
            { text: "收集与本国强关联的证明材料", detail: "工作证明信、房产文件、家庭义务证明——面签时需要出示。" },
            { text: "收集财务证明文件", detail: "3-6个月银行流水账单，显示稳定余额，而非仅一笔近期大额存款。" },
            { text: "规划具体行程细节", detail: "日期、城市、住宿、回程机票。模糊的行程计划会影响您的申请。" },
          ],
        },
        {
          name: "DS-160申请",
          subtitle: "填写在线签证申请表",
          items: [
            { text: "拍摄或获取符合美国要求的护照照片", detail: "具体尺寸、背景和头部位置要求请参阅travel.state.gov。" },
            { text: "在ceac.state.gov/genniv上开始填写DS-160", detail: "立即保存您的申请ID——您需要凭此返回继续填写。" },
            { text: "如实回答DS-160中的所有问题", detail: "与后续回答或DS-2019不一致可能导致拒签。" },
            { text: "将护照照片上传至DS-160", detail: "若照片被拒，大多数药店可重新拍摄。" },
            { text: "提交DS-160并打印带条形码的确认页", detail: "面签时需携带此确认页。" },
          ],
        },
        {
          name: "缴费与预约",
          subtitle: "缴纳费用并预约面签",
          items: [
            { text: "缴纳MRV签证申请费（$185）", detail: "支付方式因国家而异——请查阅您所在大使馆的网站。" },
            { text: "在大使馆/领事馆预约签证面签", detail: "旺季（5月至8月）请提前30-60天预约。" },
            { text: "将$250签证诚信费纳入预算（仅在获批后收取）", detail: "2025年10月起新增——仅在签证获批后才收取。" },
          ],
        },
        {
          name: "面签准备",
          subtitle: "为领事面签做好准备",
          items: [
            { text: "练习回答常见面签问题", detail: "回答具体、诚实、简洁最为有效。不要背诵固定台词。" },
            { text: "将所有文件整理归档", detail: "携带原件及复印件；签证官可能要求其中任一。" },
            { text: "规划前往大使馆的交通", detail: "提前15-30分钟到达。安检队伍可能较长。" },
            { text: "了解着装要求", detail: "商务休闲或正式着装。避免花哨或邋遢的服装。" },
          ],
        },
        {
          name: "面签当天",
          subtitle: "参加领事面签",
          items: [
            { text: "携带所有必要文件", detail: "护照、DS-160确认页、MRV收据、照片、关联证明材料。" },
            { text: "提交指纹（生物特征）", detail: "根据国家不同，可能在面签时或单独预约时采集。" },
            { text: "完成领事面签", detail: "大多数面签持续2-5分钟。回答所提问题后停止作答。" },
            { text: "获得面签决定", detail: "批准、根据214(b)条款拒绝，或221(g)行政审理。" },
          ],
        },
        {
          name: "获批后",
          subtitle: "获批后的后续步骤",
          items: [
            { text: "缴纳$250签证诚信费", detail: "具体支付流程因大使馆而异。" },
            { text: "等待护照归还（内附签证）", detail: "通常通过快递或自取，需1-2周。" },
            { text: "核实签证所有信息是否正确", detail: "核查姓名拼写、有效期及入境类型。" },
            { text: "在签证有效期内安排出行", detail: "通常在签证有效期内允许多次入境。" },
          ],
        },
      ],
    },
    f1: {
      title: "F-1学生签证申请清单",
      subtitle: "适用于已被SEVP认证的美国学校录取的国际学生。",
      phases: [
        {
          name: "申请前准备",
          subtitle: "入学及申请前步骤",
          items: [
            { text: "获得SEVP认证学校的录取通知", detail: "该学校必须获得学生与交流访问者计划的批准。" },
            { text: "缴纳SEVIS I-901费用（F-1为$350）", detail: "必须在预约签证面签前缴纳。请在fmjfee.com上付款。" },
            { text: "从学校的DSO处获取I-20表格", detail: "指定学校官员（DSO）在您入学后生成此表格。" },
            { text: "核实I-20上的信息是否正确", detail: "核查姓名、项目日期及财务支持金额。" },
          ],
        },
        {
          name: "DS-160与预约",
          subtitle: "在线申请并预约面签",
          items: [
            { text: "填写DS-160在线签证申请表", detail: "填写时请参照您的I-20信息。" },
            { text: "缴纳MRV费用（$185）", detail: "具体支付方式请咨询您所在的大使馆。" },
            { text: "预约签证面签", detail: "F-1面签可在项目开始日期前120天内预约。" },
          ],
        },
        {
          name: "文件准备",
          subtitle: "收集所有必要文件",
          items: [
            { text: "有效护照（有效期6个月以上）", detail: "如护照即将过期，请在申请前先续签。" },
            { text: "I-20表格（原件，由DSO签署）", detail: "必须提供原件——复印件不被接受。" },
            { text: "SEVIS费用收据（I-901确认书）", detail: "付款后从fmjfee.com打印。" },
            { text: "DS-160确认页", detail: "已完成的DS-160申请的条形码页。" },
            { text: "证明能够负担学习费用的财务文件", detail: "银行流水、奖学金证明信、担保人信件，需显示12个月以上的资金支持。" },
            { text: "与本国的关联证明", detail: "证明学成后打算回国的证据——家庭、资产、就业前景。" },
            { text: "学校录取通知书", detail: "证明您已被正式录取到该项目。" },
          ],
        },
        {
          name: "面签",
          subtitle: "参加领事面签",
          items: [
            { text: "携带所有文件参加面签", detail: "携带所有材料的原件和复印件。" },
            { text: "做好解释学习计划的准备", detail: "将学习什么、为何选择美国，以及毕业后的计划。" },
            { text: "证明学成后有意愿回国", detail: "这是针对F-1申请人的关键214(b)问题。" },
            { text: "获得签证决定", detail: "若获批，缴纳$250签证诚信费。" },
          ],
        },
      ],
    },
    j1: {
      title: "J-1交流访问者签证申请清单",
      subtitle: "适用于交流访问者、学者、实习生、互惠生及暑期工作旅行项目参与者。",
      phases: [
        {
          name: "项目注册",
          subtitle: "与您的担保机构合作",
          items: [
            { text: "获得DOS指定的J-1担保项目录取资格", detail: "例如：大学、EF、CIEE、Cultural Care Au Pair等。" },
            { text: "从担保方获取DS-2019表格", detail: "这是J-1签证中相当于F-1签证I-20的文件。" },
            { text: "缴纳SEVIS I-901费用（大多数J-1类别为$220；互惠生为$35）", detail: "面签前请在fmjfee.com上付款。" },
          ],
        },
        {
          name: "申请",
          subtitle: "完成签证申请",
          items: [
            { text: "填写DS-160在线申请表", detail: "项目详情请参照您的DS-2019。" },
            { text: "缴纳MRV费用（$185）", detail: "支付方式请咨询您所在大使馆。" },
            { text: "预约签证面签", detail: "尽早预约——暑期项目需求旺盛。" },
          ],
        },
        {
          name: "文件",
          subtitle: "收集面签所需文件",
          items: [
            { text: "有效护照", detail: "有效期须超过项目结束日期至少6个月。" },
            { text: "DS-2019（资格证书）", detail: "原件，由担保方负责官员签署。" },
            { text: "SEVIS费用收据", detail: "来自fmjfee.com的I-901付款确认。" },
            { text: "DS-160确认页", detail: "已完成申请的条形码页。" },
            { text: "担保项目文件", detail: "项目录取通知书、寄宿家庭文件（适用于互惠生）等。" },
            { text: "财务支持证明", detail: "证明交流项目或担保方负责您的费用。" },
          ],
        },
        {
          name: "面签",
          subtitle: "参加领事面签",
          items: [
            { text: "携带所有文件参加面签", detail: "提前到达，携带整理有序的所有材料。" },
            { text: "清楚说明您的交流项目", detail: "哪个机构、什么项目、将做什么、何时返回。" },
            { text: "了解两年回国居住要求", detail: "许多J-1签证持有者在获得H或L签证前须在本国居住2年。" },
            { text: "获得决定", detail: "若获批，缴纳$250签证诚信费。" },
          ],
        },
      ],
    },
    k1: {
      title: "K-1未婚夫（妻）签证申请清单",
      subtitle: "适用于美国公民将未婚夫（妻）接来美国、在90天内完婚的情形。",
      phases: [
        {
          name: "向USCIS提交申请",
          subtitle: "提交I-129F申请",
          items: [
            { text: "确认您符合K-1签证资格要求", detail: "双方均须具有结婚资格，且须在过去2年内亲自见面。" },
            { text: "收集真实关系证明", detail: "合照、通话记录、往来信件、旅行记录等，证明双方曾亲自见面。" },
            { text: "填写I-129F表格（外籍未婚夫/妻申请书）", detail: "向USCIS提交。目前申请费用：$675。" },
            { text: "随I-129F附上支持文件", detail: "关系证明、出生证明、离婚判决书（如适用）。" },
            { text: "等待I-129F批准（通常需6-10个月）", detail: "请在my.uscis.gov上使用收据号查询进度。" },
          ],
        },
        {
          name: "NVC处理阶段",
          subtitle: "I-129F获批后",
          items: [
            { text: "收到NVC案件编号", detail: "USCIS批准后，国家签证中心（NVC）将通知您和您的未婚夫（妻）。" },
            { text: "未婚夫（妻）在当地美国大使馆预约面签", detail: "通过大使馆预约系统预约，而非通过NVC。" },
          ],
        },
        {
          name: "未婚夫（妻）所需文件",
          subtitle: "面签所需文件",
          items: [
            { text: "有效护照", detail: "有效期须超过K-1签证有效期至少6个月。" },
            { text: "DS-160申请表", detail: "由未婚夫（妻）本人填写，而非美国公民申请人。" },
            { text: "出生证明", detail: "如非英文，须附上经认证的翻译件。" },
            { text: "无犯罪记录证明", detail: "需提供自16岁以来曾居住6个月以上的所有国家的证明。" },
            { text: "通过大使馆指定医生进行体检", detail: "须在签证面签前完成体检。" },
            { text: "I-134经济担保书（由美国公民提供）", detail: "证明美国申请人满足担保人的收入要求。" },
            { text: "真实关系证明", detail: "照片、通讯记录、旅行证明。" },
            { text: "DS-5540（公共负担问卷），如有要求", detail: "请查询大使馆具体要求。" },
          ],
        },
        {
          name: "面签",
          subtitle: "K-1领事面签",
          items: [
            { text: "在美国大使馆参加面签", detail: "面签重点在于双方关系及在美国90天内完婚的意愿。" },
            { text: "若获批，缴纳$250签证诚信费", detail: "2025年10月起新增。" },
            { text: "获得K-1签证（通常有效期6个月）", detail: "须在签证到期前入境美国。" },
          ],
        },
        {
          name: "抵达美国后",
          subtitle: "未婚夫（妻）入境美国后",
          items: [
            { text: "入境后90天内完婚", detail: "若未完婚，须离开美国。" },
            { text: "婚后提交I-485表格（调整身份申请）", detail: "即绿卡申请。典型申请费：$1,440。" },
            { text: "随AOS申请工作授权（I-765表格）", detail: "EAD发放约需4-9个月。" },
            { text: "参加生物特征采集预约", detail: "AOS处理必须完成。" },
            { text: "参加AOS面谈（如安排）", detail: "并非所有AOS案件均需面谈。" },
            { text: "获得绿卡（有条件永久居留权）", detail: "婚龄不足2年的通常获得有条件（2年期）绿卡。" },
          ],
        },
      ],
    },
    ircr: {
      title: "IR/CR配偶移民签证申请清单",
      subtitle: "适用于美国公民或合法永久居民为配偶申办移民签证。",
      phases: [
        {
          name: "向USCIS提交申请",
          subtitle: "提交I-130申请",
          items: [
            { text: "提交I-130表格（外籍亲属申请书）", detail: "美国公民的配偶适用直系亲属类别——无需等待。合法永久居民的配偶须按优先类别排队等候。" },
            { text: "附上美国公民/合法永久居民身份证明", detail: "美国护照、入籍证书或绿卡。" },
            { text: "附上有效婚姻证明", detail: "结婚证及经认证的翻译件。" },
            { text: "附上婚姻真实性证明", detail: "联名银行账户、租约/房贷文件、照片、通讯记录。" },
            { text: "等待I-130批准", detail: "直系亲属（美国公民配偶）通常需6-12个月。合法永久居民配偶因签证优先类别不同，等待时间更长。" },
          ],
        },
        {
          name: "NVC处理阶段",
          subtitle: "国家签证中心处理阶段",
          items: [
            { text: "缴纳NVC移民签证费用（$325经济担保审核费 + $325移民签证费）", detail: "通过ceac.state.gov在线支付。" },
            { text: "填写DS-261表格（代理人和地址选择）", detail: "通过ceac.state.gov在线填写。" },
            { text: "通过CEAC上传所有必要文件", detail: "担保人文件（I-864、纳税申报表等）和受益人文件。" },
            { text: "填写I-864表格（经济担保书）", detail: "担保人的收入须达到其家庭规模贫困线标准的125%。" },
            { text: "等待NVC将案件转交大使馆", detail: "所有文件提交并被接受后，通常需1-3个月。" },
          ],
        },
        {
          name: "体检及文件",
          subtitle: "面签前的准备工作",
          items: [
            { text: "在大使馆指定医生处完成体检", detail: "须使用大使馆指定的医疗小组医生。体检结果直接发送至大使馆。" },
            { text: "收集无犯罪记录证明", detail: "需提供自16岁以来曾居住6个月以上的所有国家的证明。" },
            { text: "获取出生证明（及翻译件）", detail: "非英文文件须提供经认证的翻译件。" },
            { text: "填写DS-260表格（移民签证申请）", detail: "通过ceac.state.gov在线填写。" },
            { text: "为面签做准备", detail: "携带所有提交给NVC文件的原件。" },
          ],
        },
        {
          name: "领事面签",
          subtitle: "移民签证面签",
          items: [
            { text: "在美国大使馆参加面签", detail: "面签重点在于婚姻真实性及申请资格。" },
            { text: "携带所有原始文件", detail: "护照、结婚证、无犯罪记录证明、体检结果。" },
            { text: "若获批则领取签证", detail: "护照上的IR-1/CR-1印章即为入境文件。" },
          ],
        },
        {
          name: "入境美国后",
          subtitle: "配偶入境美国后",
          items: [
            { text: "配偶以有条件或永久居民身份入境", detail: "婚龄不足2年为CR-1（有条件）；婚龄2年以上为IR-1（永久）。" },
            { text: "绿卡将在6周内邮寄到达", detail: "USCIS将实体卡片邮寄至您在美国的地址。" },
            { text: "提交I-751以取消条件限制（仅限CR-1）", detail: "在绿卡有效期届满前90天提交。" },
          ],
        },
      ],
    },
    h1b: {
      title: "H-1B工作签证申请清单",
      subtitle: "适用于需要美国雇主担保的专业技术人员。",
      phases: [
        {
          name: "注册与抽签",
          subtitle: "三月注册期",
          items: [
            { text: "找到愿意为您担保H-1B的美国雇主", detail: "雇主须负责所有申请——H-1B完全由雇主主导。" },
            { text: "雇主为您参加H-1B抽签注册（三月）", detail: "USCIS通常在三月初开放注册。只有已注册的申请人才有资格被选中。" },
            { text: "等待抽签结果通知", detail: "USCIS于三月底公布结果。未中签则需等待下一年度。" },
          ],
        },
        {
          name: "申请提交",
          subtitle: "抽签中签后（四月起）",
          items: [
            { text: "雇主提交I-129申请表", detail: "须在6月30日前提交。雇主支付申请费用（$730至$4,000以上，取决于雇主规模及是否选择加急处理）。" },
            { text: "从DOL获取劳工条件申请（LCA）", detail: "雇主须在提交I-129前向劳工部提交LCA，确认支付现行工资。" },
            { text: "收集I-129的支持文件", detail: "学历认证（如为海外学历）、工作邀请函、客户信函（如为咨询顾问）、专业岗位证明。" },
            { text: "等待I-129批准或收据", detail: "标准处理：3-6个月。加急处理（$2,805）：15个工作日。" },
          ],
        },
        {
          name: "领事处理",
          subtitle: "适用于在美国境外的申请人",
          items: [
            { text: "I-129获批后填写DS-160申请表", detail: "使用您的I-129批准通知书上的详细信息。" },
            { text: "缴纳MRV费用（$185）", detail: "标准签证申请费。" },
            { text: "在美国大使馆/领事馆预约面签", detail: "携带所有就业文件、I-129批准通知书及学历证书。" },
            { text: "参加H-1B领事面签", detail: "重点考察专业技术岗位、雇主关系及工作职责。" },
            { text: "若获批则获得H-1B签证印章", detail: "缴纳$250签证诚信费。签证初始有效期最长3年。" },
          ],
        },
        {
          name: "获批后",
          subtitle: "维持H-1B身份",
          items: [
            { text: "须在H-1B生效日期（10月1日）后方可开始工作", detail: "受配额限制的H-1B案件自财政年度10月1日起生效。" },
            { text: "在最初3年期届满前申请延期", detail: "H-1B可以3年为单位续签，总计最长6年。" },
            { text: "考虑启动绿卡申请流程", detail: "H-1B持有者可申请基于就业的绿卡。对某些国籍而言，尽早启动至关重要。" },
          ],
        },
      ],
    },
  },
  vi: {
    b1b2: {
      title: "Danh Sách Kiểm Tra Visa Du Lịch B-1/B-2",
      subtitle: "Dành cho khách du lịch và thương nhân xin visa lưu trú ngắn hạn tại Mỹ.",
      phases: [
        {
          name: "Chuẩn Bị",
          subtitle: "Trước khi bắt đầu nộp đơn",
          items: [
            { text: "Xác định xem bạn cần visa B-1, B-2 hay B-1/B-2 kết hợp", detail: "B-1 dành cho thăm viếng kinh doanh; B-2 dành cho du lịch/y tế/thăm gia đình. Hầu hết người nộp đơn nhận tem B-1/B-2 kết hợp." },
            { text: "Xác nhận hộ chiếu còn hiệu lực ít nhất 6 tháng sau ngày dự kiến rời Mỹ", detail: "Nếu hộ chiếu hết hạn sớm hơn, hãy gia hạn trước khi nộp đơn." },
            { text: "Kiểm tra xem quốc gia của bạn có tham gia Chương trình Miễn Thị Thực (ESTA) không", detail: "Các nước thuộc VWP có thể không cần visa B cho các chuyến thăm dưới 90 ngày." },
            { text: "Thu thập bằng chứng về mối quan hệ gắn kết với quê hương", detail: "Thư xác nhận việc làm, giấy tờ tài sản, nghĩa vụ gia đình — cần thiết khi phỏng vấn." },
            { text: "Thu thập tài liệu tài chính", detail: "Sao kê ngân hàng 3-6 tháng cho thấy số dư ổn định, không chỉ một khoản tiền gửi lớn gần đây." },
            { text: "Lên kế hoạch chi tiết cho chuyến đi", detail: "Ngày tháng, thành phố, chỗ ở, vé máy bay về. Lịch trình mơ hồ sẽ gây bất lợi cho hồ sơ của bạn." },
          ],
        },
        {
          name: "Đơn DS-160",
          subtitle: "Hoàn thành đơn xin visa trực tuyến",
          items: [
            { text: "Chụp hoặc lấy ảnh thẻ theo yêu cầu của Mỹ", detail: "Quy định cụ thể về kích thước, nền ảnh và vị trí đầu tại travel.state.gov." },
            { text: "Bắt đầu DS-160 tại ceac.state.gov/genniv", detail: "Lưu ID đơn ngay lập tức — bạn sẽ cần nó để quay lại." },
            { text: "Trả lời trung thực tất cả câu hỏi trong DS-160", detail: "Mâu thuẫn với câu trả lời sau này hoặc DS-2019 của bạn có thể dẫn đến từ chối." },
            { text: "Tải ảnh hộ chiếu lên DS-160", detail: "Nếu bị từ chối, ảnh có thể chụp lại tại hầu hết các hiệu thuốc." },
            { text: "Nộp DS-160 và in trang xác nhận có mã vạch", detail: "Bạn sẽ mang trang này đến phỏng vấn." },
          ],
        },
        {
          name: "Lệ Phí và Đặt Lịch",
          subtitle: "Nộp phí và đặt lịch phỏng vấn",
          items: [
            { text: "Nộp lệ phí xin visa MRV ($185)", detail: "Phương thức thanh toán khác nhau tùy quốc gia — kiểm tra trang web đại sứ quán của bạn." },
            { text: "Đặt lịch phỏng vấn visa tại đại sứ quán/lãnh sự quán", detail: "Trong mùa cao điểm (tháng 5-8), đặt trước 30-60 ngày." },
            { text: "Ngân sách thêm $250 Phí Toàn Vẹn Visa (chỉ khi được chấp thuận)", detail: "Mới từ tháng 10 năm 2025 — chỉ thu khi visa được cấp." },
          ],
        },
        {
          name: "Chuẩn Bị Phỏng Vấn",
          subtitle: "Chuẩn bị cho buổi phỏng vấn lãnh sự",
          items: [
            { text: "Luyện tập trả lời các câu hỏi phỏng vấn thường gặp", detail: "Câu trả lời cụ thể, trung thực, ngắn gọn là tốt nhất. Không học thuộc lòng kịch bản." },
            { text: "Sắp xếp tất cả tài liệu vào một bìa hồ sơ", detail: "Mang theo bản gốc và bản sao; nhân viên có thể yêu cầu bất kỳ loại nào." },
            { text: "Lên kế hoạch di chuyển đến đại sứ quán", detail: "Đến sớm 15-30 phút. Hàng chờ kiểm tra an ninh có thể dài." },
            { text: "Xem lại quy định về trang phục", detail: "Trang phục công sở hoặc lịch sự. Tránh trang phục lòe loẹt hoặc luộm thuộm." },
          ],
        },
        {
          name: "Ngày Phỏng Vấn",
          subtitle: "Tham dự buổi phỏng vấn lãnh sự",
          items: [
            { text: "Mang theo tất cả tài liệu cần thiết", detail: "Hộ chiếu, xác nhận DS-160, biên lai MRV, ảnh, tài liệu chứng minh mối quan hệ gắn kết." },
            { text: "Lấy dấu vân tay (sinh trắc học)", detail: "Thực hiện trong buổi phỏng vấn hoặc cuộc hẹn riêng, tùy theo quốc gia." },
            { text: "Hoàn thành buổi phỏng vấn lãnh sự", detail: "Hầu hết kéo dài 2-5 phút. Trả lời câu hỏi được hỏi, sau đó dừng lại." },
            { text: "Nhận quyết định", detail: "Chấp thuận, từ chối theo 214(b), hoặc xử lý hành chính 221(g)." },
          ],
        },
        {
          name: "Sau Khi Được Chấp Thuận",
          subtitle: "Các bước tiếp theo sau khi được chấp thuận",
          items: [
            { text: "Nộp Phí Toàn Vẹn Visa $250", detail: "Quy trình thanh toán khác nhau tùy đại sứ quán." },
            { text: "Chờ nhận lại hộ chiếu có visa", detail: "Thông thường 1-2 tuần qua chuyển phát hoặc nhận trực tiếp." },
            { text: "Kiểm tra tất cả thông tin visa có chính xác không", detail: "Kiểm tra chính tả tên, ngày hiệu lực và loại nhập cảnh." },
            { text: "Lên kế hoạch du lịch trong thời gian hiệu lực của visa", detail: "Thông thường được nhập cảnh nhiều lần trong thời gian hiệu lực của visa." },
          ],
        },
      ],
    },
    f1: {
      title: "Danh Sách Kiểm Tra Visa Sinh Viên F-1",
      subtitle: "Dành cho sinh viên quốc tế được nhận vào trường học ở Mỹ được chứng nhận SEVP.",
      phases: [
        {
          name: "Trước Khi Nộp Đơn",
          subtitle: "Đăng ký nhập học và các bước trước khi nộp đơn",
          items: [
            { text: "Nhận thư chấp nhận từ trường được chứng nhận SEVP", detail: "Trường phải được chấp thuận bởi Chương trình Sinh Viên và Người Trao Đổi Thăm Viếng." },
            { text: "Nộp lệ phí SEVIS I-901 ($350 cho F-1)", detail: "Phải nộp trước khi đặt lịch phỏng vấn visa. Thanh toán tại fmjfee.com." },
            { text: "Nhận Mẫu I-20 từ DSO của trường bạn", detail: "Cán bộ Trường Được Chỉ Định tạo ra mẫu này sau khi đăng ký nhập học." },
            { text: "Xác minh thông tin trên I-20 là chính xác", detail: "Kiểm tra tên, ngày của chương trình và số tiền hỗ trợ tài chính." },
          ],
        },
        {
          name: "DS-160 và Đặt Lịch",
          subtitle: "Nộp đơn trực tuyến và đặt lịch phỏng vấn",
          items: [
            { text: "Hoàn thành đơn xin visa trực tuyến DS-160", detail: "Sử dụng thông tin I-20 của bạn khi điền đơn." },
            { text: "Nộp lệ phí MRV ($185)", detail: "Kiểm tra đại sứ quán cụ thể của bạn về phương thức thanh toán." },
            { text: "Đặt lịch phỏng vấn visa", detail: "Phỏng vấn F-1 có thể được đặt trước tới 120 ngày trước ngày bắt đầu chương trình." },
          ],
        },
        {
          name: "Chuẩn Bị Tài Liệu",
          subtitle: "Thu thập tất cả tài liệu cần thiết",
          items: [
            { text: "Hộ chiếu còn hiệu lực (còn hiệu lực hơn 6 tháng)", detail: "Nếu hộ chiếu sắp hết hạn, hãy gia hạn trước khi nộp đơn." },
            { text: "Mẫu I-20 (bản gốc, có chữ ký của DSO)", detail: "Cần bản gốc — bản sao không đủ điều kiện." },
            { text: "Biên lai lệ phí SEVIS (xác nhận I-901)", detail: "In từ fmjfee.com sau khi thanh toán." },
            { text: "Trang xác nhận DS-160", detail: "Trang mã vạch từ đơn DS-160 đã hoàn thành của bạn." },
            { text: "Tài liệu tài chính chứng minh bạn có thể tài trợ cho việc học", detail: "Sao kê ngân hàng, thư học bổng, thư bảo lãnh cho thấy nguồn tài trợ 12+ tháng." },
            { text: "Bằng chứng về mối quan hệ gắn kết với quê hương", detail: "Bằng chứng rằng bạn có kế hoạch trở về sau khi học xong — gia đình, tài sản, triển vọng việc làm." },
            { text: "Thư chấp nhận từ trường học", detail: "Chứng minh bạn đã được chính thức nhận vào chương trình." },
          ],
        },
        {
          name: "Phỏng Vấn",
          subtitle: "Tham dự buổi phỏng vấn lãnh sự",
          items: [
            { text: "Tham dự phỏng vấn với tất cả tài liệu", detail: "Mang theo bản gốc và bản sao của mọi thứ." },
            { text: "Sẵn sàng giải thích kế hoạch học tập của bạn", detail: "Bạn sẽ học gì, tại sao ở Mỹ và kế hoạch sau khi tốt nghiệp." },
            { text: "Chứng minh ý định trở về quê hương sau khi học xong", detail: "Đây là câu hỏi quan trọng 214(b) cho người nộp đơn F-1." },
            { text: "Nhận quyết định visa", detail: "Nếu được chấp thuận, nộp Phí Toàn Vẹn Visa $250." },
          ],
        },
      ],
    },
    j1: {
      title: "Danh Sách Kiểm Tra Visa Khách Trao Đổi J-1",
      subtitle: "Dành cho khách trao đổi, học giả, thực tập sinh, au pair và người tham gia chương trình làm việc mùa hè.",
      phases: [
        {
          name: "Đăng Ký Chương Trình",
          subtitle: "Làm việc với tổ chức bảo lãnh của bạn",
          items: [
            { text: "Được chấp nhận bởi chương trình bảo lãnh J-1 được DOS chỉ định", detail: "Ví dụ: các trường đại học, EF, CIEE, Cultural Care Au Pair, v.v." },
            { text: "Nhận Mẫu DS-2019 từ người bảo lãnh của bạn", detail: "Đây là tương đương J-1 của I-20 của F-1." },
            { text: "Nộp lệ phí SEVIS I-901 ($220 cho J-1 hầu hết các danh mục; $35 cho au pair)", detail: "Thanh toán tại fmjfee.com trước buổi phỏng vấn của bạn." },
          ],
        },
        {
          name: "Nộp Đơn",
          subtitle: "Hoàn thành đơn xin visa của bạn",
          items: [
            { text: "Hoàn thành đơn trực tuyến DS-160", detail: "Tham khảo DS-2019 của bạn để biết chi tiết chương trình." },
            { text: "Nộp lệ phí MRV ($185)", detail: "Kiểm tra đại sứ quán của bạn về phương thức thanh toán." },
            { text: "Đặt lịch phỏng vấn visa", detail: "Đặt lịch càng sớm càng tốt — các chương trình mùa hè có nhu cầu cao." },
          ],
        },
        {
          name: "Tài Liệu",
          subtitle: "Thu thập tài liệu phỏng vấn của bạn",
          items: [
            { text: "Hộ chiếu còn hiệu lực", detail: "Phải còn hiệu lực 6+ tháng sau ngày kết thúc chương trình." },
            { text: "DS-2019 (Chứng Chỉ Đủ Điều Kiện)", detail: "Bản gốc, có chữ ký của cán bộ phụ trách của người bảo lãnh." },
            { text: "Biên lai lệ phí SEVIS", detail: "Xác nhận thanh toán I-901 từ fmjfee.com." },
            { text: "Trang xác nhận DS-160", detail: "Trang mã vạch từ đơn đã hoàn thành của bạn." },
            { text: "Tài liệu chương trình bảo lãnh", detail: "Thư chấp nhận chương trình, tài liệu gia đình chủ nhà (cho au pair), v.v." },
            { text: "Tài liệu hỗ trợ tài chính", detail: "Bằng chứng rằng chương trình trao đổi hoặc người bảo lãnh của bạn chi trả chi phí của bạn." },
          ],
        },
        {
          name: "Phỏng Vấn",
          subtitle: "Tham dự buổi phỏng vấn lãnh sự",
          items: [
            { text: "Tham dự phỏng vấn với tất cả tài liệu", detail: "Đến sớm và mang theo mọi thứ có tổ chức." },
            { text: "Giải thích rõ ràng chương trình trao đổi của bạn", detail: "Tổ chức nào, chương trình gì, bạn sẽ làm gì, khi nào bạn trở về." },
            { text: "Hiểu yêu cầu cư trú tại quê hương hai năm", detail: "Nhiều người giữ visa J-1 phải trở về quê hương 2 năm trước khi nhận visa H hoặc L." },
            { text: "Nhận quyết định", detail: "Nếu được chấp thuận, nộp Phí Toàn Vẹn Visa $250." },
          ],
        },
      ],
    },
    k1: {
      title: "Danh Sách Kiểm Tra Visa Hôn Thê/Hôn Phu K-1",
      subtitle: "Dành cho công dân Mỹ đưa hôn thê/hôn phu đến Mỹ để kết hôn trong vòng 90 ngày.",
      phases: [
        {
          name: "Đơn Kiến Nghị USCIS",
          subtitle: "Nộp đơn kiến nghị I-129F",
          items: [
            { text: "Xác nhận bạn đáp ứng các yêu cầu đủ điều kiện K-1", detail: "Cả hai bên phải được tự do kết hôn và phải đã gặp mặt trực tiếp trong vòng 2 năm qua." },
            { text: "Thu thập bằng chứng về mối quan hệ thực sự", detail: "Ảnh chụp cùng nhau, nhật ký cuộc gọi, thư từ, hồ sơ du lịch cho thấy các bạn đã gặp nhau trực tiếp." },
            { text: "Hoàn thành Mẫu I-129F (Đơn Kiến Nghị cho Hôn Thê/Hôn Phu Nước Ngoài)", detail: "Nộp với USCIS. Lệ phí nộp đơn hiện tại: $675." },
            { text: "Bao gồm tài liệu hỗ trợ với I-129F", detail: "Bằng chứng về mối quan hệ, giấy khai sinh, bản án ly hôn nếu có." },
            { text: "Chờ phê duyệt I-129F (thường 6-10 tháng)", detail: "Theo dõi tại my.uscis.gov bằng số biên lai của bạn." },
          ],
        },
        {
          name: "Xử Lý Tại NVC",
          subtitle: "Sau khi I-129F được chấp thuận",
          items: [
            { text: "Nhận số hồ sơ từ NVC", detail: "Trung Tâm Visa Quốc Gia sẽ thông báo cho bạn và hôn thê/hôn phu sau khi USCIS phê duyệt." },
            { text: "Hôn thê/hôn phu đặt lịch hẹn tại đại sứ quán Mỹ địa phương", detail: "Đặt lịch qua hệ thống hẹn của đại sứ quán, không phải qua NVC." },
          ],
        },
        {
          name: "Tài Liệu Cho Hôn Thê/Hôn Phu",
          subtitle: "Tài liệu hôn thê/hôn phu cần cho buổi phỏng vấn",
          items: [
            { text: "Hộ chiếu còn hiệu lực", detail: "Phải còn hiệu lực 6+ tháng sau thời hạn hiệu lực của K-1." },
            { text: "Đơn DS-160", detail: "Hôn thê/hôn phu điền đơn này, không phải người kiến nghị là công dân Mỹ." },
            { text: "Giấy khai sinh", detail: "Kèm bản dịch được chứng nhận nếu không phải tiếng Anh." },
            { text: "Giấy xác nhận lý lịch tư pháp", detail: "Từ tất cả các quốc gia đã sinh sống 6+ tháng kể từ 16 tuổi." },
            { text: "Khám sức khỏe bởi bác sĩ được đại sứ quán phê duyệt", detail: "Phải thực hiện trước buổi phỏng vấn visa." },
            { text: "Mẫu I-134 Cam Kết Bảo Lãnh (từ công dân Mỹ)", detail: "Cho thấy người kiến nghị Mỹ đáp ứng yêu cầu thu nhập để bảo lãnh." },
            { text: "Bằng chứng về mối quan hệ thực sự", detail: "Ảnh, hồ sơ liên lạc, bằng chứng du lịch." },
            { text: "DS-5540 (Bảng Câu Hỏi Gánh Nặng Công Cộng) nếu cần", detail: "Kiểm tra yêu cầu của đại sứ quán." },
          ],
        },
        {
          name: "Phỏng Vấn",
          subtitle: "Phỏng vấn lãnh sự K-1",
          items: [
            { text: "Tham dự phỏng vấn tại đại sứ quán Mỹ", detail: "Phỏng vấn tập trung vào mối quan hệ và ý định kết hôn tại Mỹ trong vòng 90 ngày." },
            { text: "Nộp Phí Toàn Vẹn Visa $250 nếu được chấp thuận", detail: "Mới từ tháng 10 năm 2025." },
            { text: "Nhận visa K-1 (thường có hiệu lực 6 tháng)", detail: "Phải nhập cảnh Mỹ trước khi visa hết hạn." },
          ],
        },
        {
          name: "Sau Khi Đến Mỹ",
          subtitle: "Sau khi hôn thê/hôn phu nhập cảnh Mỹ",
          items: [
            { text: "Kết hôn trong vòng 90 ngày kể từ ngày nhập cảnh", detail: "Không kết hôn sẽ phải rời Mỹ." },
            { text: "Nộp Mẫu I-485 (Điều Chỉnh Tình Trạng) sau đám cưới", detail: "Đây là đơn xin thẻ xanh. Lệ phí nộp đơn thông thường: $1,440." },
            { text: "Xin giấy phép làm việc (Mẫu I-765) cùng với AOS", detail: "EAD mất khoảng 4-9 tháng để được cấp." },
            { text: "Tham dự cuộc hẹn sinh trắc học", detail: "Bắt buộc để xử lý AOS." },
            { text: "Tham dự phỏng vấn AOS (nếu được lên lịch)", detail: "Không phải tất cả các trường hợp AOS đều yêu cầu phỏng vấn." },
            { text: "Nhận thẻ xanh (thường trú nhân có điều kiện)", detail: "Thông thường có điều kiện (2 năm) cho các cuộc hôn nhân dưới 2 năm tuổi." },
          ],
        },
      ],
    },
    ircr: {
      title: "Danh Sách Kiểm Tra Visa Vợ/Chồng IR/CR",
      subtitle: "Dành cho công dân Mỹ hoặc thường trú nhân hợp pháp bảo lãnh vợ/chồng xin visa nhập cư.",
      phases: [
        {
          name: "Đơn Kiến Nghị USCIS",
          subtitle: "Nộp đơn kiến nghị I-130",
          items: [
            { text: "Nộp Mẫu I-130 (Đơn Kiến Nghị cho Thân Nhân Nước Ngoài)", detail: "Vợ/chồng của công dân Mỹ sử dụng danh mục Thân Nhân Ngay Lập Tức — không có danh sách chờ. Vợ/chồng của thường trú nhân phải đợi theo danh mục ưu tiên." },
            { text: "Bao gồm bằng chứng về tình trạng công dân Mỹ/thường trú nhân", detail: "Hộ chiếu Mỹ, giấy chứng nhận nhập tịch hoặc thẻ xanh." },
            { text: "Bao gồm bằng chứng về hôn nhân hợp lệ", detail: "Giấy đăng ký kết hôn có bản dịch được chứng nhận." },
            { text: "Bao gồm bằng chứng về hôn nhân thực sự", detail: "Tài khoản ngân hàng chung, hợp đồng thuê/thế chấp, ảnh, hồ sơ liên lạc." },
            { text: "Chờ phê duyệt I-130", detail: "Thân nhân ngay lập tức (vợ/chồng công dân Mỹ) thường 6-12 tháng. Vợ/chồng thường trú nhân: thời gian chờ dài hơn do danh mục ưu tiên visa." },
          ],
        },
        {
          name: "Xử Lý Tại NVC",
          subtitle: "Giai đoạn Trung Tâm Visa Quốc Gia",
          items: [
            { text: "Nộp lệ phí visa nhập cư NVC ($325 lệ phí cam kết bảo lãnh + $325 lệ phí visa nhập cư)", detail: "Thanh toán trực tuyến qua ceac.state.gov." },
            { text: "Hoàn thành Mẫu DS-261 (Lựa Chọn Đại Lý và Địa Chỉ)", detail: "Trực tuyến qua ceac.state.gov." },
            { text: "Tải lên tất cả tài liệu cần thiết qua CEAC", detail: "Tài liệu của người bảo lãnh (I-864, khai thuế, v.v.) và tài liệu của người được hưởng." },
            { text: "Hoàn thành Mẫu I-864 (Cam Kết Bảo Lãnh)", detail: "Người bảo lãnh phải đáp ứng 125% hướng dẫn nghèo đói cho quy mô hộ gia đình." },
            { text: "Chờ NVC gửi hồ sơ đến đại sứ quán", detail: "Mất 1-3 tháng sau khi tất cả tài liệu được nộp và chấp nhận." },
          ],
        },
        {
          name: "Y Tế và Tài Liệu",
          subtitle: "Yêu cầu trước phỏng vấn",
          items: [
            { text: "Hoàn thành khám sức khỏe với bác sĩ được đại sứ quán phê duyệt", detail: "Phải sử dụng bác sĩ trong danh sách được đại sứ quán chỉ định. Kết quả được gửi trực tiếp đến đại sứ quán." },
            { text: "Thu thập giấy xác nhận lý lịch tư pháp", detail: "Từ tất cả các quốc gia vợ/chồng đã sinh sống 6+ tháng kể từ 16 tuổi." },
            { text: "Lấy giấy khai sinh (có bản dịch)", detail: "Cần bản dịch được chứng nhận cho các tài liệu không phải tiếng Anh." },
            { text: "Hoàn thành DS-260 (đơn xin visa nhập cư)", detail: "Trực tuyến qua ceac.state.gov." },
            { text: "Chuẩn bị cho buổi phỏng vấn", detail: "Mang theo tất cả bản gốc của các tài liệu đã nộp cho NVC." },
          ],
        },
        {
          name: "Phỏng Vấn Lãnh Sự",
          subtitle: "Phỏng vấn visa nhập cư",
          items: [
            { text: "Tham dự phỏng vấn tại đại sứ quán Mỹ", detail: "Phỏng vấn tập trung vào tính chân thực của hôn nhân và điều kiện đủ điều kiện." },
            { text: "Mang theo tất cả tài liệu gốc", detail: "Hộ chiếu, giấy đăng ký kết hôn, lý lịch tư pháp, kết quả y tế." },
            { text: "Nhận visa nếu được chấp thuận", detail: "Tem IR-1/CR-1 trong hộ chiếu là tài liệu nhập cảnh." },
          ],
        },
        {
          name: "Sau Khi Nhập Cảnh Mỹ",
          subtitle: "Sau khi vợ/chồng nhập cảnh Mỹ",
          items: [
            { text: "Vợ/chồng nhập cảnh với tư cách thường trú nhân có điều kiện hoặc vĩnh viễn", detail: "CR-1 nếu kết hôn dưới 2 năm (có điều kiện); IR-1 nếu kết hôn 2+ năm (vĩnh viễn)." },
            { text: "Thẻ xanh đến qua đường bưu điện trong vòng 6 tuần", detail: "USCIS gửi thẻ vật lý đến địa chỉ Mỹ của bạn." },
            { text: "Nộp I-751 để xóa điều kiện (chỉ CR-1)", detail: "Nộp 90 ngày trước kỷ niệm 2 năm của thẻ xanh." },
          ],
        },
      ],
    },
    h1b: {
      title: "Danh Sách Kiểm Tra Visa Lao Động H-1B",
      subtitle: "Dành cho người lao động trong nghề nghiệp chuyên môn cần nhà tuyển dụng Mỹ bảo lãnh.",
      phases: [
        {
          name: "Đăng Ký và Xổ Số",
          subtitle: "Thời gian đăng ký tháng 3",
          items: [
            { text: "Tìm nhà tuyển dụng Mỹ sẵn sàng bảo lãnh H-1B của bạn", detail: "Nhà tuyển dụng phải nộp mọi thứ — H-1B hoàn toàn do nhà tuyển dụng điều hành." },
            { text: "Nhà tuyển dụng đăng ký bạn vào xổ số H-1B (tháng 3)", detail: "USCIS thường mở đăng ký vào đầu tháng 3. Chỉ những người nộp đơn đã đăng ký mới có thể được chọn." },
            { text: "Chờ thông báo kết quả xổ số", detail: "USCIS thông báo kết quả vào cuối tháng 3. Không được chọn có nghĩa là phải đợi đến năm sau." },
          ],
        },
        {
          name: "Nộp Đơn Kiến Nghị",
          subtitle: "Sau khi được chọn trong xổ số (từ tháng 4 trở đi)",
          items: [
            { text: "Nhà tuyển dụng nộp đơn kiến nghị Mẫu I-129", detail: "Phải nộp trước ngày 30 tháng 6. Nhà tuyển dụng trả lệ phí nộp đơn ($730-$4,000+ tùy quy mô nhà tuyển dụng và xử lý ưu tiên)." },
            { text: "Lấy Đơn Xin Điều Kiện Lao Động (LCA) từ DOL", detail: "Nhà tuyển dụng nộp đơn này với Bộ Lao Động trước I-129. Xác nhận rằng mức lương thịnh hành đang được trả." },
            { text: "Thu thập tài liệu hỗ trợ cho I-129", detail: "Đánh giá bằng cấp (nếu bằng nước ngoài), thư việc làm, thư khách hàng (nếu tư vấn), bằng chứng về nghề nghiệp chuyên môn." },
            { text: "Chờ phê duyệt hoặc biên lai I-129", detail: "Tiêu chuẩn: 3-6 tháng. Xử Lý Ưu Tiên ($2,805): 15 ngày làm việc." },
          ],
        },
        {
          name: "Xử Lý Lãnh Sự",
          subtitle: "Dành cho người nộp đơn bên ngoài Mỹ",
          items: [
            { text: "Hoàn thành đơn DS-160 sau khi I-129 được phê duyệt", detail: "Sử dụng chi tiết từ thông báo phê duyệt I-129 của bạn." },
            { text: "Nộp lệ phí MRV ($185)", detail: "Lệ phí xin visa tiêu chuẩn." },
            { text: "Đặt lịch phỏng vấn tại đại sứ quán/lãnh sự quán Mỹ", detail: "Mang theo tất cả tài liệu việc làm, thông báo phê duyệt I-129 và bằng cấp." },
            { text: "Tham dự phỏng vấn lãnh sự H-1B", detail: "Tập trung vào nghề nghiệp chuyên môn, mối quan hệ với nhà tuyển dụng và nhiệm vụ công việc." },
            { text: "Nhận tem visa H-1B nếu được chấp thuận", detail: "Nộp Phí Toàn Vẹn Visa $250. Visa có hiệu lực lên đến 3 năm ban đầu." },
          ],
        },
        {
          name: "Sau Khi Được Chấp Thuận",
          subtitle: "Duy trì tình trạng H-1B của bạn",
          items: [
            { text: "Bắt đầu làm việc chỉ sau ngày bắt đầu H-1B (1 tháng 10)", detail: "Các trường hợp H-1B giới hạn có hiệu lực vào ngày 1 tháng 10 của năm tài chính." },
            { text: "Xin gia hạn trước khi giai đoạn ban đầu 3 năm hết hạn", detail: "H-1B có thể gia hạn theo từng đợt 3 năm, tổng cộng tối đa 6 năm." },
            { text: "Cân nhắc bắt đầu quá trình thẻ xanh", detail: "Người giữ H-1B đủ điều kiện xin thẻ xanh dựa trên việc làm. Bắt đầu sớm là điều quan trọng do thời gian chờ đối với một số quốc tịch." },
          ],
        },
      ],
    },
  },
};
