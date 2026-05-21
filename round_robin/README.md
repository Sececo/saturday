# Round Robin

## Descripción

Este proyecto implementa el algoritmo:

- Round Robin

Cada proceso recibe un tiempo limitado de CPU llamado:

- Quantum

Cuando el quantum termina:

- el proceso vuelve al final de la cola
- el siguiente proceso toma la CPU

---

# Tipo de Scheduler

## Apropiativo

- Los procesos pueden ser interrumpidos
- Existe cambio de contexto
- Mejora la equidad entre procesos

---

# Funcionamiento

Quantum utilizado:

```txt
2 segundos
```

Ejemplo:

```txt
P1 -> 5
P2 -> 3
P3 -> 4
```

Ejecución:

```txt
P1 → P2 → P3 → P1 ...
```

---

# Características

- Inserción automática
- Inserción manual
- Quantum configurable
- Simulación visual
- Scheduler apropiativo

---

# Tecnologías

- JavaScript
- HTML5
- CSS3
