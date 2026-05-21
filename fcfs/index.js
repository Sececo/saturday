class FCFSSimulator {

  constructor(insertEverySeconds) {

    this.queue = [];

    this.processId = 1;

    // ---------------------------------
    // Inserción automática
    // ---------------------------------

    setInterval(() => {

      const burst =
        Math.floor(Math.random() * 10) + 1;

      this.addProcess(burst);

    }, insertEverySeconds * 1000);

    // ---------------------------------
    // Scheduler
    // ---------------------------------

    setInterval(() => {

      this.execute();

      this.render();

    }, 1000);
  }

  // ---------------------------------
  // Agregar proceso
  // ---------------------------------

  addProcess(burst) {

    // evitar negativos o cero
    if (burst <= 0) return;

    this.queue.push({
      id: this.processId++,
      burst
    });

    this.render();
  }

  // ---------------------------------
  // FCFS
  // ---------------------------------

  execute() {

    if (this.queue.length === 0) return;

    this.queue[0].burst--;

    // Finaliza proceso
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
    `;

      container.appendChild(box);
    });
  }
}

// ---------------------------------
// Inicialización
// ---------------------------------

const simulator =
  new FCFSSimulator(5);

// ---------------------------------
// Input y botón
// ---------------------------------

const addBtn =
  document.getElementById("addBtn");

const input =
  document.getElementById("numberInput");

// Click botón
addBtn.addEventListener("click", addManualProcess);

// ENTER
input.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {

    addManualProcess();
  }
});

// ---------------------------------
// Agregar manualmente
// ---------------------------------

function addManualProcess() {

  const value =
    Number(input.value);

  // validar
  if (
    isNaN(value) ||
    value <= 0
  ) {

    input.value = "";

    return;
  }

  simulator.addProcess(value);

  input.value = "";
}