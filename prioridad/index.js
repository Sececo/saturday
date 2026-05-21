class PrioritySimulator {

  constructor(insertEverySeconds) {

    this.queue = [];

    this.processId = 1;

    // ---------------------------------
    // Inserción automática
    // ---------------------------------

    setInterval(() => {

      const burst =
        Math.floor(Math.random() * 10) + 1;

      const priority =
        Math.floor(Math.random() * 5) + 1;

      this.addProcess(
        burst,
        priority
      );

    }, insertEverySeconds * 1000);

    // ---------------------------------
    // Scheduler
    // ---------------------------------

    setInterval(() => {

      this.sortQueue();

      this.execute();

      this.render();

    }, 1000);
  }

  // ---------------------------------
  // Agregar proceso
  // ---------------------------------

  addProcess(burst, priority) {

    // validar
    if (
      burst <= 0 ||
      priority <= 0
    ) return;

    this.queue.push({
      id: this.processId++,
      burst,
      priority
    });

    this.render();
  }

  // ---------------------------------
  // Ordenar por prioridad
  // menor número = mayor prioridad
  // ---------------------------------

  sortQueue() {

    this.queue.sort(
      (a, b) => a.priority - b.priority
    );
  }

  // ---------------------------------
  // Ejecutar proceso actual
  // ---------------------------------

  execute() {

    if (this.queue.length === 0) return;

    this.queue[0].burst--;

    // Finaliza
    if (this.queue[0].burst <= 0) {

      this.queue.shift();
    }
  }

  // ---------------------------------
  // Render
  // ---------------------------------

  render() {

    const container =
      document.getElementById("array");

    container.innerHTML = "";

    this.queue.forEach((process, index) => {

      const box =
        document.createElement("div");

      box.className = "box";

      // proceso activo
      if (index === 0) {

        box.style.background = "#00c853";
      }

      box.innerHTML = `
        <div class="pid">
          P${process.id} (${process.burst})
        </div>

        <div class="priority">
          Pr:${process.priority}
        </div>
      `;

      container.appendChild(box);
    });
  }
}

// ---------------------------------
// Inicialización
// ---------------------------------

const simulator =
  new PrioritySimulator(5);

// ---------------------------------
// Inputs
// ---------------------------------

const addBtn =
  document.getElementById("addBtn");

const burstInput =
  document.getElementById("burstInput");

const priorityInput =
  document.getElementById("priorityInput");

// Click botón
addBtn.addEventListener(
  "click",
  addManualProcess
);

// ENTER en burst
burstInput.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "Enter") {

      addManualProcess();
    }
  }
);

// ENTER en priority
priorityInput.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "Enter") {

      addManualProcess();
    }
  }
);

// ---------------------------------
// Push manual
// ---------------------------------

function addManualProcess() {

  const burst =
    Number(burstInput.value);

  const priority =
    Number(priorityInput.value);

  // validar
  if (
    isNaN(burst) ||
    isNaN(priority) ||
    burst <= 0 ||
    priority <= 0
  ) {

    burstInput.value = "";
    priorityInput.value = "";

    return;
  }

  simulator.addProcess(
    burst,
    priority
  );

  burstInput.value = "";
  priorityInput.value = "";
}