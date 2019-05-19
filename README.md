#**Los comandos disponibles son:**

  ‘inscribir’ i = <id> -n = <nombre> -c = <cédula> : Comando usado para indicar cual curso desea inscribir junto con los datos del participantes.

  En este sentido puede usar el siguiente comando para inscribir un curso:
  node ./main.js inscribir -i = <id> -n = <nombre> -c = <cédula>

Se INVITA al examinador a probar diferentes variantes y observar el comportamiento del programa. Ej.: node ./main.js inscribir

#**Casos de prueba:**

  Entrada

    node .\main.js inscribir -i=1001 -n="Nombre genérico" -c=10000000

  Salida

    Comprobante de inscripción:

      Información del Curso:

        Nombre: Java Nivel 1
        Duración: 20 horas
        Costo: gratuito

      Información del Estudiante:

        Nombre: Nombre genérico.
        Cédula: 10000000.
        N° de Pago: -No aplicable-.

Se INVITA al examinador a establecer nuevos casos de prueba para analizar elcomportamiento del programa.
Ej.: node ./main.js unscribur
Salida impresa en consola al introducir el comando: “node ./main.js unscribur”.
