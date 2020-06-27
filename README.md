<h1 align="center">
  <br>
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo-up.jpg" width="200">
  <br><br>
  IOT - Sistema de seguridad
  <br>
</h1>



## Problemática a resolver
La siguiente problemática puede surgir en estas situaciones: 
¿Qué pasará en mi casa mientras estoy trabajando?
¿Puedo estar tranquilo mientras me voy de vacaciones?
¿Entraron a mi habitación sin mi consentimiento?
¿Cómo me puedo enterar rápidamente si entraron a mi departamento?
¿Violaron mi privacidad?
Podemos contestar a la siguiente problemática con un sistema de seguridad el cual te avisará en tiempo real de lo ocurrido y te va a brindar esa seguridad a la hora de no estar en casa. A su vez sirve para monitorear comportamientos no deseados en la vida cotidiana u otros contextos.
## Resolución del problema
Se podrá resolver este problema con la implementación de un control de seguridad el cual te avisará instantáneamente vía mensaje de texto lo sucedido. Está funcionalidad contará con una disponibilidad del 99% del tiempo. Para que pueda funcionar se requerirá conexión de Internet. El estado actual de la seguridad va a estar seguro ya que se va a guardar en una base de datos privada.
En caso de que el sistema detecte movimiento el servidor se encargará de enviar un mensaje de texto con lo ocurrido vía Telegram al usuario.
Además para poder estar tranquilo contará con un sistema de Monitoreo, el cual se va a poder consultar con el servicio Grafana.
Todo lo que es el funcionamiento del servidor va a estar en contenedores de Docker para poder facilitar la instalación en cualquier lado y facilitando el funcionamiento en los sistemas operativos.



