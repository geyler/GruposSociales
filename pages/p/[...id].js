import Head from "next/head";
import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import { getSession } from "next-auth/react";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function Homex(props) {
  const laUrl = props.context.id[0];
  if(laUrl === "politica-de-privacidad"){
    var politicas = 'Politica de Privacidad';
  }
  if(laUrl === "terminos-y-condiciones"){
    var politicas = 'Terminos y Condiciones';
  }

  return (
    <div className="contenedor">
      <Head>
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>{politicas}</title>
      <meta property="og:title" content={politicas} />
      <meta name="twitter:title" content={politicas} />
      <meta name="description" content={politicas} />
      <meta property="og:description" content={politicas} />
      <meta name="twitter:description" content={politicas}/>
      <meta name="keywords" content={politicas} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="max-image-preview:large" />
      <meta property="image" content={`/grupos.jpg`} />
      <meta property="og:image" content={`/grupos.jpg`} />
      <meta name="twitter:image" content={`/grupos.jpg`} />
      <link href={`/grupos.jpg`} rel="image_src"/>
      <meta property="image:width" content="1280" />
      <meta property="image:height" content="720" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="robots" content="index,follow"/>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="WebPage" />
      <meta property="og:site_name" content="Grupos Para Unirse" />
      <meta property="url" content={`/admin`} />
      <meta property="og:url" content={`/admin`} />
      <link rel="canonical" href={`/admin`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`/favicon.png`}/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965450045901943"
     crossOrigin="anonymous"></script>
      </Head>
      <ArticleJsonLd
      url={`/login`}
      title={politicas}
      images={[
        `/grupos.jpg`,
        `/favicon.png`,
      ]}
      authorName={[
        {
          name: "Grupos Para Unirse",
          url:`/`
        }
      ]}
      publisherName="Grupos Para Unirse"
      publisherLogo={`/favicon.ico`}
      description={politicas}    
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Telegram',
          item: `${process.env.PAGE_URL}/?r=Telegram`,
        },
        {
          position: 2,
          name: 'Whatsapp',
          item: `${process.env.PAGE_URL}/?r=Whatsapp`,
        },
        {
          position: 3,
          name: 'Facebook',
          item: `${process.env.PAGE_URL}/?r=Facebook`,
        },
        {
          position: 4,
          name: 'Reddit',
          item: `${process.env.PAGE_URL}/?r=Reddit`,
        },
        {
          position: 5,
          name: 'Discord',
          item: `${process.env.PAGE_URL}/?r=Discord`,
        },
        {
          position: 6,
          name: 'Signal',
          item: `${process.env.PAGE_URL}/?r=Signal`,
        },
        {
          position: 7,
          name: 'Viber',
          item: `${process.env.PAGE_URL}/?r=Viber`,
        },
      ]}
    />

      <div className="app">
        <Header perfil={props.session ? props.session.user : ""} />
        <main className="main">
          <div className="contenedor-paginas-p">
            {laUrl === "politica-de-privacidad" ? (
              <div className='politicas'>
                <h1>Politica de Privacidad</h1>
                <div>
                  <h1>gruposparaunirse.net</h1>
                  <br />
                  <span>
                    <b>
                      Si eres menor de 18 años y has accedido a este Sitio Web
                      sin avisar a tus padres NO DEBES publicar ningún anuncio
                      NI solicitar UNIRTE a ningún grupo sin su consentimiento.
                      <br />
                      <br />
                      Si la temática del grupo <b>ES PARA ADULTOS</b> y
                      <b>eres MENOR</b>, NO DEBES ENTRAR BAJO NINGÚN CONCEPTO NI
                      EXCUSA. <br />
                      <br />
                    </b>
                  </span>
                  Si deseas <b>denunciar un grupo</b> publicado envia un correo
                  electrónico a 
                  <a href='mailto:info@gruposparaunirse.net'>
                    info@gruposparaunirse.net
                  </a> 
                  con la máxima información posible y lo revisaremos lo más
                  rapidamente posible.
                  <br />
                  <br />
                  <h2>¿Sobre este sitio?</h2>
                  - gruposparaunirse.net a partir de ahora  ESTE SITIO   es un
                  buscador de grupos y canales de diferentes redes sociales. 
                  <br />
                  - Los usuarios publican anuncios clasificados de grupos de
                  chat  grupos en la app de redes sociales  en ESTE SITIO para
                  que otros usuarios puedan unirse. <br />
                  - ESTE SITIO no tiene relación con las empresas que son
                  propietarias de las diferentes aplicaciones moviles de redes
                  sociales .
                  <br />
                  - ESTE SITIO no se hace responsable de las conversaciones o
                  contenidos que se comparten en los grupos publicados, aunque
                  de tener conocimiento de actividades ilegales o no apropiadas,
                  se bloqueará los anuncios de los grupos implicados.
                  <br />
                  - ESTE SITIO siempre colaborará con las autoridades para
                  identificar a los autores en caso de denuncias, facilitando
                  toda la información necesaria para facilitar la labor de
                  investigación.
                  <br />
                  <br />
                  <br />
                  <h2>Preámbulo</h2>
                  <br />
                  Condiciones legales del servicio de GrupoSociales.com a partir
                  de ahora  ESTE SITIO .
                  <br />
                  <br />
                  GrupoSociales.com son propiedad de gruposparaunirse.net.
                  <br />
                  <br />
                  Con carácter general, para hacer uso de los Servicios de ESTE
                  SITIO los menores de edad deben haber obtenido previamente la
                  autorización de sus padres, tutores o representantes legales,
                  quienes serán responsables de todos los actos realizados a
                  través ESTE SITIO por los menores a su cargo. <br />
                  <br />
                  ESTE SITIO no se responsabiliza de la veracidad y seriedad de
                  los grupos publicados, ni que su temática final sea igual a la
                  anunciada, ya que los grupos finales se editan en la
                  aplicación móviles de redes sociales y esta web no tiene
                  acceso a ellas. No obstante, eliminará los anuncios
                  fraudulentos, falsos o ilegales en cuanto ESTE SITIO tenga
                  conocimiento que existen y tan pronto como le sea posible. Los
                  usuarios o personas afectadas pueden enviar su alerta al buzón
                   info@GrupoSociales.com  para informarnos de cualquier grupo
                  publicado que infringe las normas, realiza actividades
                  ilegales, no legítimas o el anuncio publicado no es cierto.
                  <br />
                  <br />
                  ESTE SITIO no puede garantizar que los enlaces de unión que
                  los usuarios publican funcionen siempre, ya que el propio
                  usuario puede eliminarlos en su aplicación de redes sociales
                  en cualquier momento y no avisarnos de ello. No obstante hemos
                  implementado un sistema automático para intentar realizar
                  verificaciones automáticas y manuales sobre los grupos
                  publicados.
                  <br />
                  <br />
                  ESTE SITIO no se responsabiliza de daños o perjuicios que
                  puedan producirse por el uso de ESTE SITIO, ni por publicar
                  anuncios de grupos ni por unirse a grupos publicados, ya que
                  todos los procesos  publicación y unión  son automáticos.
                  <br />
                  <br />
                  ESTE SITIO guarda un registro con: fecha, hora e IP de
                  conexión de los anuncios publicados que serán entregados a las
                  autoridades en caso de requerimiento judicial.
                  <br />
                  <br />
                  ESTE SITIO no acepta anuncios con contenido ilegal,
                  actividades ilegales, no legítimas o engañosos. En cuanto ESTE
                  SITIO tenga conocimiento que se ha publicado un anuncio que
                  incumple las normas será eliminado inmediatamente, guardando
                  los datos de conexión del autor para colaborar con las
                  autoridades en caso de ser requerido.
                  <br />
                  <br />
                  ESTE SITIO guarda el correo electrónico de quien responde a un
                  anuncio por email para: gestionar su petición, enviarle el
                  enlace de entrada al grupo. El usuario podrá eliminarlo en
                  cualquier momento siguiendo las instrucciones que enviamos por
                  email regularmente o bien enviando  BAJA  a nuestro buzón
                   info@GrupoSociales.com . <br />
                  <br />
                  ESTE SITIO NO venderá ni cederá el correo electrónico a
                  terceras empresas. <br />
                  <br />
                  ESTE SITIO puede enviar a los usuarios información de otras
                  webs propias si considera que pueden ser de interés para el
                  usuario.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Finalidad de ESTE SITIO</h2>
                  <br />
                  ESTE SITIO es una web de anuncios clasificados gratuitos de
                  los grupos de chat en la App Telegram, y por lo tanto todas
                  las conversaciones se desarrollan fuera de nuestro ámbito,
                  siendo nuestra única labor el mantenimiento y gestión del
                  sistema informático. Los usuarios publican los anuncios
                  directamente y son responsables de ellos. También, los propios
                  usuarios pueden incorporarse a los grupos o pedir ser
                  incluidos, directamente desde ESTE SITIO, sin intervención por
                  parte de ESTE SITIO. Por este motivo, ESTE SITIO declina
                  cualquier responsabilidad en la gestión de ni el uso que hagan
                  los usuarios.
                  <br /> <br />
                  El usuario acepta voluntariamente enviar sus datos de contacto
                  a terceras personas a través de los formularios ofrecidos en
                  ESTE SITIO, quedando ESTE SITIO totalmente exento de cualquier
                  mal uso que los receptores puedan hacer los datos recibidos.
                  <br />
                  <br />
                  El usuario acepta exponer su numero de teléfono a terceros al
                  entrar en cualquier grupo de Telegram, quedando ESTE SITIO
                  totalmente exento de cualquier responsabilidad por el mal uso
                  que terceros hagan de esa información.
                  <br />
                  <br />
                  La función de ESTE SITIO es publicar anuncios de usuarios que
                  quieren promocionar grupos de chat  grupos en la app Telegram 
                  y ofrecer al resto de usuarios la posibilidad de unirse
                  directamente. <br /> <br />
                  ESTE SITIO no controla, ni verifica, ni vigila, ni asegura que
                  los grupos sean auténticos y las intenciones sean las
                  promocionadas por los autores/administradores de cada uno. No
                  obstante, eliminaremos los anuncios tan pronto como tengamos
                  conocimiento de:
                  <br />
                  - Que se realiza una actividad ilegal
                  <br />
                  - El grupo no pertenece a la temática promocionada
                  <br />
                  - Recibamos quejas o denuncias sobre un grupo
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Obligaciones de los Usuarios en el Portal</h2>
                  <br />
                  <br />
                  El USUARIO se compromete a hacer un uso diligente del mismo y
                  de los servicios accesibles desde ESTE SITIO Web, con total
                  sujeción a la Ley, a las buenas costumbres y a las presentes
                  Condiciones Generales de Uso y, en su caso, condiciones
                  particulares, así como manteniendo el debido respeto a los
                  demás usuarios.
                  <br />
                  <br />
                  Con carácter general la prestación de los servicios no exige
                  la previa suscripción o registro de los usuarios.
                  <br />
                  <br />
                  Toda la información que facilite el Usuario a través de los
                  servicios deberá ser veraz y exacta. A estos efectos, el
                  Usuario garantiza la autenticidad de todos aquellos datos que
                  comunique como consecuencia de la cumplimentación de los
                  formularios necesarios para la utilización de los Servicios.
                  <br />
                  <br />
                  De igual forma, será responsabilidad del Usuario mantener toda
                  la información facilitada a ESTE SITIO permanentemente
                  actualizada de forma que responda, en cada momento a la
                  situación real del Usuario. En todo caso el Usuario será el
                  único responsable de las manifestaciones falsas o inexactas
                  que realice y de los perjuicios que cause a ESTE SITIO o a
                  terceros por la información que facilite.
                  <br />
                  <br />
                  El Usuario se obliga a respetar las leyes aplicables y los
                  derechos de terceros al utilizar los contenidos y servicios
                  del Sitio Web. Asimismo queda prohibida la reproducción,
                  distribución, transmisión, adaptación o modificación, por
                  cualquier medio y en cualquier forma, de los contenidos del
                  Sitio Web  textos, diseños, gráficos, informaciones, bases de
                  datos, archivos de sonido y/o imagen, logos, etc.  y demás
                  elementos de este Sitio Web, salvo autorización previa de sus
                  legítimos titulares o cuando así resulte permitido por la ley.
                  <br />
                  <br />
                  En especial al usuario le estará prohibido: utilizar
                  contenidos injuriosos o calumniosos, con independencia de que
                  esos contenidos afecten a otros usuarios o a otras personas o
                  empresas, molestar a otros usuarios especialmente mediante
                  spam ,utilizar contenidos protegidos legalmente  p. ej. por la
                  legislación relativa a la propiedad intelectual, a marcas, a
                  patentes, a modelos de utilidad o a modelos estéticos  sin
                  tener derecho a ello, o hacer publicidad, ofrecer o distribuir
                  bienes o servicios protegidos legalmente, así como realizar o
                  fomentar acciones contrarias a la libre competencia, incluidas
                  las encaminadas a la captación de clientes progresiva  como
                  sistemas en cadena, de bola de nieve o piramidales .
                  <br />
                  <br />
                  <h2>Se prohíbe al usuario las siguientes acciones:</h2>
                  <br />
                  Utilizar mecanismos, software o scripts en relación con la
                  utilización del Sitio Web.
                  <br />
                  Bloquear, sobrescribir, modificar o copiar, a no ser que ello
                  sea necesario para la correcta utilización de los servicios de
                  los sitios web. Por ejemplo, el copiado mediante tecnologías
                  de buscador tipo Robot/Crawler no es necesario para la
                  correcta utilización de los servicios del Sitio Web, por lo
                  que está prohibido expresamente.
                  <br />
                  Difundir y reproducir públicamente contenidos de ESTE SITIO o
                  de otros usuarios, sin la autorización previa.
                  <br />
                  Toda acción apta para perjudicar la funcionalidad de la
                  infraestructura de ESTE SITIO, especialmente para
                  sobrecargarla.
                  <br />A utilizar cualquiera de los materiales e informaciones
                  contenidos en ESTE SITIO con fines ilícitos y expresamente
                  prohibidos en las presentes Condiciones Generales de Uso, así
                  como a las condiciones particulares que, en su caso, se
                  habiliten que resulten contrarios a los derechos e intereses
                  de ESTE SITIO, sus miembros y/o terceros, y deberá responder
                  frente a los mismos en caso de contravenir o incumplir dichas
                  obligaciones y/o que, de cualquier modo  incluida la
                  introducción o difusión de  virus informáticos  , dañe,
                  inutilice, sobrecargue, deteriore o impida la normal
                  utilización de los materiales e informaciones contenidos en el
                  Sitio Web, los sistemas de información o los documentos,
                  archivos y toda clase de contenidos almacenados en cualquier
                  equipo informático  hacking  de ESTE SITIO, de sus miembros o
                  de cualquier usuario. <br />
                  <br />
                  El usuario es consciente de, y acepta voluntariamente, que el
                  uso del servicio tiene lugar, en todo caso, bajo su única y
                  exclusiva responsabilidad.
                  <br />
                  <br />
                  El Usuario responderá de los daños y perjuicios de toda
                  naturaleza que ESTE SITIO o cualquier tercero pueda sufrir
                  como consecuencia del incumplimiento de cualesquiera de las
                  obligaciones a las que queda sometido por virtud de estas
                   Condiciones Generales de Uso o de la ley en relación con la
                  Utilización del Servicio. <br />
                  <br />
                  <br />
                  <h2>Acceso al Servicio de ESTE SITIO</h2>
                  <br />
                  Para poder publicar anuncios se solicita un enlace de
                  invitación público para entrar un grupo, que sea válido y
                  activo en la APP Telegram y un correo electrónico para poder
                  gestionar sus propios anuncios y las posibles respuestas que
                  reciba.
                  <br />
                  <br />
                  <br />
                  <h2>Exención de responsabilidad en veracidad de los datos</h2>
                  <br />
                  Los anuncios publicados por los Usuarios en ESTE SITIO es
                  única y exclusivamente responsabilidad de los mismos. ESTE
                  SITIO no se hace, en ningún caso, responsable de los mensajes
                  enviados por sus Usuarios y asimismo excluye cualquier
                  responsabilidad por los daños y perjuicios de toda naturaleza
                  que puedan derivar del conocimiento que puedan tener terceros
                  de las condiciones, características y circunstancias del uso
                  del servicio que hacen los Usuarios o que pudieran deberse al
                  acceso y, en su caso, a la interceptación, eliminación,
                  modificación o manipulación por parte de terceros autorizados,
                  o no, de los mensajes que los Usuarios difundan o pongan a
                  disposición de terceros a través del servicio.
                  <br />
                  <br />
                  El USUARIO asume y se compromete a publicar anuncios con datos
                  e información real y exacta. ESTE SITIO no asume ninguna
                  responsabilidad por la publicación de anuncios falsos con la
                  intención de engañar a otros usuarios. ESTE SITIO no puede
                  comprobar por la limitaciones naturales del servicio que los
                  anuncios de grupos sean exactos y no se pretenda engañar, no
                  obstante, de tener conocimiento bloqueará el acceso a ESTE
                  SITIO al usuario, eliminará el anuncio y guardará los datos
                  del autor para colaborar con las autoridades. <br />
                  <br />
                  El Usuario que contacta con un anuncio asume toda la
                  responsabilidad y debe saber que existe el riesgo que el
                  anuncio no sea exacto. Cualquier daño causado por anuncios
                  falsos, anuncios publicados de mala fe recae en el Usuario.
                  ESTE SITIO actúa como medio de comunicación entre ambos
                  usuarios. No obstante colaborará con las autoridades ante
                  cualquier delito o por requerimiento judicial.
                  <br />
                  <br />
                  <br />
                  <h2>Derechos de propiedad intelectual e industrial</h2>
                  <br />
                  Está prohibido copiar cualquier parte de esta web sin el
                  permiso por escrito de ESTE SITIO <br />
                  <br />
                  El logo y aplicación Telegram es propiedad de
                  www.telegram.org.
                  <br />
                  <br />
                  Los logos y diseños de ESTE SITIO son propiedad de ESTE SITIO 
                  <br />
                  <br />
                  El logo y aplicación Telegram es propiedad de
                  www.telegram.org..
                  <br />
                  <br />
                  Reactiva Internet y ESTE SITIO no tienen ninguna relación con
                  www.telegram.org ni con la aplicación oficial.
                  <br />
                  <br />
                  ESTE SITIO solo es una guia de anuncios clasificados de los
                  grupos de chat en las diferentes Apps de redes sociales.
                  <br />
                  <br />
                  <br />
                  <h2>Responsabilidades</h2>
                  <br />
                  ESTE SITIO tan sólo ofrece publicidad de los grupos de forma
                  gratuita.
                  <br />
                  <br />
                  ESTE SITIO no administra ni organiza ningún grupo incluido en
                  esta guía.
                  <br />
                  <br />
                  ESTE SITIO tan solo facilita el contacto entre el
                  administrador del grupo y los usuarios interesados en unirse.
                  El contacto, la inclusión y la conversión se realiza fuera del
                  ámbito de ESTE SITIO
                  <br />
                  <br />
                  Reactiva Internet a través de sus webs GruposTelegram.net
                  declina cualquier responsabilidad por accidentes, daños o
                  reclamaciones o perjuicios que puedan producirse en cualquiera
                  de los grupos publicados. Ni por virus informáticos o piratas
                  informáticos <br /> <br />
                  Cada administrador de grupo es responsable de la actividad que
                  se desarrolla en su sala de chat y por lo tanto a donde debe
                  dirigirse cualquier reclamación o denuncia. <br />
                  <br />
                  La responsabilidad de ESTE SITIO se limita a retirar y
                  bloquear los anuncios publicados por el usuario denunciado.
                  <br />
                  <br />
                  <br />
                  <h2>
                    Disponibilidad y Continuidad del Portal y los Servicios
                  </h2>
                  <br />
                  ESTE SITIO no garantiza la disponibilidad, el acceso y/o la
                  continuidad del funcionamiento del Portal y de sus Servicios.
                  Asimismo, no será responsable, con los límites establecidos
                  por la Ley, de los daños y perjuicios causados al Usuario como
                  consecuencia de la indisponibilidad, fallos de acceso y falta
                  de continuidad del Portal y de sus Servicios. <br />
                  <br />
                  <br />
                  <h2>Contenidos y Servicios propios</h2>
                  <br />
                  ESTE SITIO responderá única y exclusivamente de los contenidos
                  directamente originados por sus propios medios e identificados
                  con su copyright. Dicha responsabilidad quedará excluida en
                  los casos en que concurran causas de fuerza mayor o en los
                  supuestos en que la configuración de los equipos del Usuario
                  no sea la adecuada para permitir el correcto uso de los
                  servicios de Internet prestados por ESTE SITIO.
                  <br />
                  <br />
                  ESTE SITIO no se hace responsable de la posible aparición de
                  anuncios indexados en buscadores ajenos al portal, una vez se
                  hayan dado de baja de nuestras bases de datos.
                  <br />
                  <br />
                  <br />
                  <h2>Contenidos y Servicios de Terceros</h2>
                  <br />
                  ESTE SITIO no revisa o controla previamente, aprueba ni hace
                  propios los contenidos, productos, servicios, opiniones,
                  comunicaciones, datos y cualquier clase de información de
                  terceros recogidos en el Portal. Asimismo, no garantiza la
                  licitud, fiabilidad, utilidad, veracidad, exactitud,
                  exhaustividad y actualidad de los contenidos, informaciones y
                  servicios de terceros en el Portal. ESTE SITIO tampoco
                  garantiza de ninguna forma que los Usuarios del Portal
                  utilicen los contenidos y/o servicios del mismo conforme con
                  la ley, las normativas aplicables, el orden publico ni las
                  presentes Condiciones de Uso.
                  <br />
                  <br />
                  ESTE SITIO no controla con carácter previo y no garantiza la
                  ausencia de virus y otros elementos en los contenidos y
                  servicios prestados por terceros a través del Portal que
                  puedan introducir alteraciones en los equipos de acceso,
                  documentos o ficheros guardados en ellos.
                  <br />
                  <br />
                  ESTE SITIO no se responsabiliza de los contenidos volcados o
                  los actos cometidos por otros usuarios. Tampoco se
                  responsabiliza de cualquier daño o perjuicio como consecuencia
                  de la presencia de virus u otros elementos en los contenidos y
                  servicios prestados por terceros. Asimismo ESTE SITIO no
                  responderá de los daños y perjuicios de cualquier naturaleza
                  derivados del uso negligente o malintencionado de las cuentas
                  de correo electrónico utilizadas para insertar un anuncio o
                  responder a un anuncio.
                  <br />
                  <br />
                  En cualquier caso ESTE SITIO no será responsable, ni
                  indirectamente ni subsidiariamente, de la perdida económica o
                  reputación, ni de ninguna clase de daños especiales,
                  indirectos o emergentes, resultantes de la utilización del
                  sitio web por parte del usuario.
                  <br />
                  <br />
                  La exoneración de responsabilidad señalada en el párrafo
                  anterior será de aplicación en el caso de que ESTE SITIO no
                  tenga conocimiento efectivo de que la actividad o la
                  información almacenada es ilícita o de que lesiona bienes o
                  derechos de un tercero susceptibles de indemnización, o si la
                  tuviesen actúe con diligencia para retirar los datos y
                  contenidos o hacer imposible el acceso a ellos.
                  <br />
                  <br />
                  <br />
                  <h2>Indemnización</h2>
                  <br />
                  Los Usuarios mantendrán por tanto indemne a ESTE SITIO, sus
                  directivos, administradores, representantes y empleados, por
                  cualquier reclamo o demanda de terceros relacionados con los
                  grupos o contactos que se puedan anunciar dentro del Portal
                  Web o por el incumplimiento de los Términos Generales de uso y
                  demás políticas que se entienden incorporadas al presente o
                  por la violación de cualesquiera leyes o derechos de terceros.
                  <br />
                  <br />
                  <br />
                  <h2>Modificaciones en el Servicio y Condiciones de Uso</h2>
                  <br />
                  ESTE SITIO se reserva el derecho a realizar cambios en el
                  Portal, pudiendo modificar, suprimir e incluir,
                  unilateralmente y sin previo aviso, nuevos contenidos así como
                  la forma en que estos aparezcan presentados y localizados.
                  <br />
                  <br />
                  Asimismo, ESTE SITIO se reserva el derecho a realizar cambios
                  las presentes Condiciones de Uso en cualquier momento. El
                  usuario quedará sujeto a las nuevas Condiciones de Uso que
                  hayan sido publicadas en el momento en que acceda o utilice
                  los servicios del Portal.
                  <br />
                  <br />
                  Si alguna de las presentes condiciones resulta invalidada,
                  nula o inaplicable por cualquier motivo, dicha condición
                  quedará excluida y no afectará a la validez ni la
                  aplicabilidad del resto de condiciones.
                  <br />
                  <br />
                  <br />
                  <h2>Menores de Edad</h2>
                  <br />
                  Con carácter general, para hacer uso de los Servicios del
                  Portal los menores de edad deben haber obtenido previamente la
                  autorización de sus padres, tutores o representantes legales,
                  quienes serán responsables de todos los actos realizados a
                  través del Portal por los menores a su cargo. En aquellos
                  Servicios en los que expresamente se señale, el acceso quedará
                  restringido única y exclusivamente a mayores de 18 años.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Datos legales de esta web</h2>
                  <br />
                  gruposparaunirse.net
                  <br />
                  Dir. postal: Calle 149a, 3001 Berazategui  Argentina .
                  <br />
                  info@gruposociales.com
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            ) : (
              ""
            )}

            {laUrl === "terminos-y-condiciones" ? (
              <div className="col-md-12">
                <h1 className="section-title">
                  Política de privacidad de gruposparaunirse.net
                </h1>
                <h1>Resumen</h1>
                <h2>Que información recogemos</h2>
                <b>EMAIL  correo electrónico </b>
                <ul>
                  Lo recogemos cuando:
                  <br />
                  - Publicas un anuncio
                  <br />
                  - Contactas con un anunciante  formulario de contacto  <br />
                  Para que lo usamos:
                  <br />
                  - Si publicas un anuncio, para que puedas editar o eliminar
                  tus anuncios
                  <br />
                  - Si contactas con un anunciante, para gestionar las entregas
                  automáticas de tus mensajes
                  <br />
                  - Para questiones legales, de seguridad y para colaborar con
                  las autoridades si nos lo solicitan.
                  <br />
                  Cuanto tiempo lo guardamos:
                  <br />
                  - Si publicas un anuncio, mientras dure su publicación.
                  <br />
                  - Si contactas con un anunciante, hasta finalizar el tramite.
                  <br />- y por razones legales y de seguridad, hasta 12 meses
                  desde el registro de cada acción.
                </ul>
                <h2>Más sobre tu privacidad</h2>
                - No recogemos más información personal
                <br />
                - Toda la información se guarda encriptada
                <br />
                - No compartimos ni vendemos la información introducida a través
                de los formularios
                <br />
                - No hacemos perfiles de usuario con la información que
                introduces en los formularios
                <br />
                - No leemos, ni de forma automática, los mensajes que envías a
                través de los formularios de contacto. <br />
                <br />
                <div>
                  <h2>Información adicional sobre Protección de Datos</h2>
                  <h2>1. Responsable</h2>
                  <p>
                    <strong>
                      ¿Quién es el responsable del tratamiento de tus datos?
                    </strong>
                  </p>
                  <ul>
                    <li>Identidad: Geyler   gruposparaunirse.net  </li>
                    <li>
                      Dir. postal: Calle 149a, 3001 Berazategui  Argentina .
                    </li>
                  </ul>

                  <h2>2. Finalidades</h2>
                  <p>
                    <strong>
                      ¿Con qué finalidad tratamos tus datos personales?
                    </strong>
                  </p>
                  <p>
                    En cumplimiento de lo dispuesto en el Reglamento Europeo
                    2016/679 General de Protección de Datos, te informamos de
                    que, tanto si eres anunciante como usuario, en Reactiva
                    Internet tratamos los datos que nos facilitas para las
                    siguientes finalidades:
                  </p>
                  <ol>
                    <li>
                      Realizar una correcta gestión de la publicación de tu
                      anuncio. Este servicio incluye que tratemos tus datos
                      para:
                      <ul>
                        <li>
                          Crearte una cuenta de usuario en el momento de la
                          publicación del primer anuncio, la cual es necesaria
                          para que puedas gestionar los anuncios que publiques y
                          los contactos que recibas. Así, si en el momento de
                          publicar tu primer anuncio no eres un usuario
                          registrado, automáticamente te crearemos una cuenta.
                          Siempre que lo desees podrás solicitar un email
                          automático con las instrucciones para que puedas
                          acceder a tu cuenta. Desde allí podrás gestionar y
                          configurar tus anuncios y eliminar totalmente tu
                          cuenta de usuario.
                        </li>
                        <li>
                          Facilitar los enlaces necesarios para que los usuarios
                          puedan unirse a los grupos publicados
                        </li>
                        <li>
                          Proporcionar el servicio de mensajería entre usuarios
                          para facilitar la transacción y comunicación entre
                          estos; al usar el formulario de contacto, estarás
                          utilizando nuestro servicio de mensajería. Los
                          anuncios son revisados por un proceso automático. Lo
                          hacemos para prevenir el fraude o un uso abusivo o
                          inadecuado de nuestros servicios, incluyendo
                          actividades o comportamientos sospechosos o ilegales.
                          Nuestro equipo de seguridad podrá revisar los anuncios
                          de forma manual. 
                        </li>
                      </ul>
                    </li>
                    <li>
                      Posibilitar el contacto con los anunciantes. Cuando
                      contactes con los anunciantes, les enviaremos los datos
                      personales y la información que incluyas en el formulario
                      de contacto. Asimismo, cuando uses el formulario de
                      contacto, estarás utilizando nuestro servicio de
                      mensajería. Los anuncios son revisados por un proceso
                      automático. Lo hacemos para prevenir el fraude o un uso
                      abusivo o inadecuado de nuestros servicios. Si detectamos
                      una actividad o comportamiento sospechoso o ilegal,
                      nuestro equipo de seguridad podrá revisar todos tus
                      anuncios.
                    </li>
                    <li>No elaboramos perfiles comerciales propios.</li>
                    <li>
                      Enviarte notificaciones para informarte de nuestros
                      productos y servicios y para enviarte publicidad de otros
                      sites de Reactiva Internet. Puedes oponerte en cualquier
                      momento a recibir este tipo de comunicaciones a través de
                      los enlaces que encontrarás en cada correo electrónico.
                    </li>
                    <li>
                      Prevenir abusos y fraudes en el uso de nuestros servicios
                       por ejemplo, actividades fraudulentas, ataques de
                      denegación de servicios, envío de spam, entre otros .
                    </li>
                    <li>
                      Ceder datos a organismos y autoridades públicas, siempre y
                      cuando sean requeridos de conformidad con las
                      disposiciones legales y reglamentarias.
                    </li>
                  </ol>

                  <h2>3. Plazo de conservación de los datos</h2>
                  <p>
                    <strong>¿Por cuánto tiempo conservaremos tus datos?</strong>
                  </p>

                  <p>
                    Si eres un anunciante, tus datos serán conservados mientras
                    dure la relación contractual con nosotros, solicites su
                    supresión, así como el tiempo necesario para cumplir las
                    obligaciones legales.
                  </p>
                  <p>
                    Si has contactado con algún anunciante, tus datos se
                    conservarán durante el tiempo necesario para posibilitar el
                    contacto con cada uno de los anunciantes con los que
                    contactes. En todo caso, conservaremos tus datos durante el
                    tiempo necesario para cumplir las obligaciones legales.
                  </p>
                  <p>
                    Independientemente de si eres un anunciante o un usuario,
                    conservaremos tus datos de navegación durante un plazo
                    máximo de 12 meses.
                  </p>

                  <h2>4. Legitimación</h2>
                  <p>
                    <strong>
                      ¿Cuál es la legitimación para el tratamiento de tus datos?
                    </strong>
                  </p>
                  <p>
                    La base legal para el tratamiento de tus datos radica en:
                  </p>
                  <ul>
                    <li>
                      La <span >
                        ejecución de un contrato
                      </span> con Reactiva Internet en relación con la finalidad
                      indicada en el apartado 1 y 2 anteriores.
                    </li>
                    <li>
                      El <span >
                        consentimiento del usuario </span> en relación con las finalidades indicadas en los apartados
                      3 y 4 anteriores.
                    </li>
                    <li>
                      El <span  >
                        interés legítimo del responsable del tratamiento
                      </span> para la finalidad indicada en el apartado 5 anterior. El
                      interés legítimo consiste en proteger a los usuarios de
                      los sites de Reactiva Internet de abusos y fraudes en el
                      uso de nuestros servicios.
                    </li>
                    <li>
                      El <span >
                        cumplimiento de obligaciones
                      </span> legales aplicables a Reactiva Internet para la finalidad
                      indicada en el apartado 6.
                    </li>
                  </ul>

                  <h2>5. Destinatarios</h2>
                  <p>
                    <strong>
                      ¿A qué destinatarios se comunicarán tus datos?
                    </strong>
                  </p>
                  <p>
                    Tus datos personales serán comunicados a terceros en los
                    siguientes supuestos:
                  </p>
                  <ul>
                    <li>
                      Tus datos personales se comunicarán al anunciante con el
                      que decidas contactar a través del formulario adjunto a
                      cada anuncio.
                    </li>
                    <li>
                      Tus datos personales podrán ser accedidos por aquellos
                      proveedores que prestan servicios a Reactiva Internet,
                      tales como servicios de alojamiento de contenido, de
                      mensajería instantánea, de envío de notificaciones,
                      servicios publicitarios, etc. Reactiva Internet ha
                      suscrito los correspondientes contratos de encargo de
                      tratamiento con cada uno de los proveedores que prestan
                      servicios a Reactiva Internet.
                    </li>
                    <li>
                      Tus datos personales también podrán ser cedidos a las
                      autoridades competentes en los casos que exista una
                      obligación legal.
                    </li>
                  </ul>

                  <h2>6. Derechos</h2>
                  <p>
                    <strong>
                      ¿Cuáles son tus derechos cuando nos facilitas tus datos y
                      cómo puedes ejercerlos?
                    </strong>
                  </p>
                  <p>
                    Tienes derecho a obtener confirmación sobre si en Reactiva
                    Internet estamos tratando datos personales que te
                    conciernan, o no.
                  </p>
                  <p>
                    Asimismo, tienes derecho a acceder a tus datos personales,
                    así como a solicitar la rectificación de los datos inexactos
                    o, en su caso, solicitar su supresión cuando, entre otros
                    motivos, los datos ya no sean necesarios para los fines que
                    fueron recogidos.
                  </p>
                  <p>
                    En determinadas circunstancias, podrás solicitar la
                    limitación del tratamiento de tus datos, en cuyo caso
                    únicamente los conservaremos para el ejercicio o la defensa
                    de reclamaciones.
                  </p>
                  <p>
                    Adicionalmente, en determinadas circunstancias y por motivos
                    relacionados con tu situación particular, podrás oponerte al
                    tratamiento de tus datos. Reactiva Internet dejará de tratar
                    los datos, salvo por motivos legítimos imperiosos, o el
                    ejercicio o la defensa de posibles reclamaciones.
                  </p>
                  <p>
                    Asimismo, puedes ejercer el derecho a la portabilidad de los
                    datos, así como retirar los consentimientos facilitados en
                    cualquier momento, sin que ello afecte a la licitud del
                    tratamiento basado en el consentimiento previo a su
                    retirada.
                  </p>
                  <p>
                    Si deseas hacer uso de cualquiera de tus derechos puedes
                    dirigirte a nosotros mediante los correos electrónicos
                    indicados en el apartado 1, a través de los enlaces
                    habilitados que encontrarás en los correos electrónicos y
                    comunicaciones de Reactiva Internet o en tu cuenta de
                    usuario. Alternativamente, también puedes dirigirte a
                    nosotros mediante correo postal en la siguiente dirección:
                    Reactiva Internet, Apartado 176, 08505-Muntanyola
                     Barcelona , España. Dirigido a Atención al Usuario e
                    indicando en el sobre  Protección de Datos . Recuerda
                    facilitar la mayor información posible sobre tu solicitud:
                    Nombre y apellidos, dirección de correo electrónico que
                    utilizas para la cuenta o portal objeto de tu solicitud.
                  </p>
                  <p>
                    Por último, te informamos que puedes dirigirte ante la
                    Agencia Española de Protección de Datos y demás organismos
                    públicos competentes para cualquier reclamación derivada del
                    tratamiento de tus datos personales.
                  </p>
                  <p>
                    En relación a los datos facilitados a los anunciantes con
                    los que hayas contactado, puedes ejercer tus derechos frente
                    al anunciante como usuario, dirigiéndote a la dirección del
                    anunciante que figura consignada en la parte inferior del
                    anuncio. Se entiende, en este caso, por anunciante toda
                    aquella persona física o jurídica que oferte todo tipo de
                    productos o servicios en nuestros Portales.
                  </p>

                  <h2>7. Transferencias internacionales</h2>

                  <p>
                    Tu decides, a través de los formularios de contacto, enviar
                    tus datos de contacto al usuario anunciante de cada grupo de
                    WhatsApp. Algunos anunciantes pueden estar domiciliados
                    fuera de la Unión Europea
                  </p>

                  <h2>8. Política de cookies</h2>
                  <p>
                    <strong>¿Qué cookies utilizamos?</strong>
                  </p>

                  <h2>9. Política de privacidad de Google</h2>
                  <p>
                    Esta página web utiliza Google DoubleClick  DFP/DART , un
                    servicio de publicidad de web prestado por Google, Inc., una
                    compañía de Delaware cuya oficina principal está en 1600
                    Amphitheatre Parkway, Mountain View  California , CA 94043,
                    Estados Unidos  Google .
                  </p>

                  <p>
                    Google, es un servicio de terceros que utiliza cookies para
                    mostrar anuncios en la web.
                    <br />
                    Google utiliza Cookies del sistema DART para poder mostrar
                    anuncios relacionados y basados en visitas a esta y otras
                    webs de Internet que comparten el mismo sistema de
                    publicidad.
                    <br />
                    En caso de querer inhabilitar la Cookie DART, se puede
                    realizar en cualquier momento siguiendo las instrucciones en
                    la página de privacidad de red de contenido y publicidad de
                    Google: Centro de privacidad de Google.
                    <br />
                    <br />
                    <a href="https://policies.google.com/technologies/ads">
                      Política de privacidad de Google
                    </a>
                  </p>

                  <h2>10. Eliminación de cookies</h2>
                  <p>
                    Puedes revocar el consentimiento de las cookies en cualquier
                    momento utilizando el siguiente enlace:
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (
    context.query.id[0] != "politica-de-privacidad" &&
    context.query.id[0] != "terminos-y-condiciones"
  ) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      context: context.query,
    },
  };
};
