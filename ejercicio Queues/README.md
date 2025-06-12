
# Ejercicio Práctico: Sistema de Turnos para una Clínica

## Objetivo

Practicar el uso de la estructura de datos cola (queue) implementando un sistema de turnos para una clínica, con una pequeña interfaz web que permita interactuar con la cola como lo haría una empresa real en su monitor de turnos.

## Parte 1: Lógica en JavaScript

Crea una clase Queue que contenga:
enqueue(paciente)
dequeue()
peek() → para ver al siguiente en turno
isEmpty()
printQueue() (puede retornar un array o string de los pacientes en espera)
Cada paciente debe tener:
Nombre
Edad
Síntoma principal

## Parte 2: Interfaz con HTML + JavaScript

Crea una pequeña página que permita:
Registrar paciente
Formulario con campos: nombre, edad y síntoma.
Botón para agregarlo a la cola.
Atender paciente
Botón que atienda (elimine de la cola) al paciente con más tiempo esperando.
Muestra en pantalla quién fue atendido.
Ver cola actual
Lista visual de los pacientes en espera, en orden.
Ver siguiente turno
Mostrar en grande (como en un televisor) el nombre del paciente que será atendido a continuación.
:bombilla: Recomendaciones para el diseño
Usa HTML simple, sin frameworks ni librerías externas.
Puedes usar Bootstrap 5 si quieres que lo practiquen.
Muestra el "turno actual" como si fuera una pantalla de televisor
