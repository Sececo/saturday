# Simulador de Planificación FCFS

## Descripción

Este proyecto implementa una simulación visual de un algoritmo de planificación de procesos inspirado en **FCFS (First Come, First Served)** utilizando **JavaScript, HTML y CSS**.

El sistema representa procesos mediante números dentro de un array. Cada número simboliza el tiempo restante de ejecución de un proceso.

Cada segundo:

- el array se ordena de menor a mayor
- el proceso en la posición `0` se ejecuta
- su valor disminuye en `1`
- si llega a `0`, el proceso finaliza y se elimina

La interfaz gráfica permite insertar nuevos procesos manualmente y observar en tiempo real cómo cambia la cola de ejecución.

---

# Características

- Simulación visual en tiempo real
- Inserción manual de procesos (`push`)
- Actualización automática cada segundo
- Eliminación automática de procesos terminados
- Resaltado visual del proceso en ejecución
- Ordenamiento dinámico del array

---

# Tecnologías

- JavaScript
- HTML5
- CSS3

---

# Funcionamiento

## Representación de procesos

```txt
[8, 3, 10]
```

Cada número representa:

- un proceso
- su tiempo restante de ejecución

---

## Ciclo de ejecución

### Estado inicial

```txt
[8, 3, 10]
```

### Ordenamiento

```txt
[3, 8, 10]
```

### Ejecución del proceso activo

```txt
[2, 8, 10]
```

### Finalización

Cuando un proceso llega a `0`:

```txt
[0, 8, 10]
```

el proceso se elimina automáticamente:

```txt
[8, 10]
```

---

# Relación con FCFS

El algoritmo implementado está basado en el modelo de planificación:

## FCFS — First Come, First Served

También conocido como:

- FIFO (First In, First Out)

### Tipo

- No apropiativo

### Características

- Un proceso mantiene la CPU hasta terminar
- No existen interrupciones
- Los procesos se ejecutan secuencialmente
- Fácil de implementar

---

# Estructura del Proyecto

```txt
/project
│
├── index.html
├── index.js
└── README.md
```

---

# Instalación

## 1. Clonar o descargar el proyecto

```bash
git clone <repositorio>
```

---

## 2. Ejecutar

Abrir:

```txt
index.html
```

o utilizar:

- Live Server de VSCode

---

# Interfaz

La interfaz permite:

- agregar procesos
- visualizar el array
- observar el proceso activo
- monitorear la ejecución en tiempo real

---

# Ejemplo Visual

```txt
Estado inicial:
[8, 3, 10]

↓

Ordenado:
[3, 8, 10]

↓

Ejecución:
[2, 8, 10]

↓

Nuevo ciclo:
[1, 8, 10]

↓

Finaliza:
[8, 10]
```

---

# Objetivo Académico

Este proyecto fue desarrollado con fines educativos para comprender:

- planificación de procesos
- algoritmos de CPU Scheduling
- simulación de colas
- actualización dinámica de estructuras de datos
- renderizado visual en tiempo real

---

# Autor

Desarrollado como simulación académica de algoritmos de planificación de procesos.
