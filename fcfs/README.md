# FCFS — First Come First Served

## Descripción

Este proyecto implementa una simulación visual del algoritmo de planificación de procesos:

- FCFS (First Come First Served)

También conocido como:

- FIFO (First In First Out)

El sistema simula cómo un sistema operativo atiende procesos en el orden exacto en que llegan a la cola de ejecución.

---

# Tipo de Scheduler

## No Apropiativo

FCFS es un algoritmo no apropiativo, lo que significa que:

- un proceso mantiene la CPU hasta terminar
- no puede ser interrumpido
- los demás procesos deben esperar

---

# Funcionamiento

Cada proceso posee:

- un ID
- un Burst Time (tiempo de ejecución)

Ejemplo:

```txt
P1 -> 5
P2 -> 3
P3 -> 8
```

El scheduler ejecuta:

```txt
P1 → P2 → P3
```

sin interrupciones.

---

# Características

- Inserción manual de procesos
- Inserción automática aleatoria
- Simulación en tiempo real
- Cola FCFS visual
- Ejecución segundo a segundo
- Eliminación automática al finalizar

---

# Tecnologías

- JavaScript
- HTML5
- CSS3

---

# Estructura

```txt
/project
│
├── index.html
├── index.js
└── README.md
```

---

# Ejecución

Abrir:

```txt
index.html
```

o usar:

- Live Server de VSCode

---

# Ejemplo de Ejecución

## Cola inicial

```txt
[P1:5] [P2:3] [P3:8]
```

## CPU ejecuta P1

```txt
[P1:4] [P2:3] [P3:8]
```

## Finaliza P1

```txt
[P2:3] [P3:8]
```

---

# Objetivo Académico

Este proyecto permite comprender:

- planificación de CPU
- colas de procesos
- scheduling no apropiativo
- simulación visual de sistemas operativos

---

# Autor

Proyecto académico de simulación de algoritmos de planificación.
