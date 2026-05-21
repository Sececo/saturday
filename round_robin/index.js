class SJFSimulator {

  constructor(insertEverySeconds) {

    this.queue = [];

    this.processId = 1;

    // Inserción automática
    setInterval(() => {

      const burst =
        Math.floor(Math.random() * 10) + 1;

      this.addProcess(burst);

    }, insertEverySeconds * 1000);

    // Scheduler
    setInterval(() => {

      this.sortQueue();

      this.execute();

      this.render();

    }, 1000);
  }

  addProcess(burst) {

    if (burst <= 0) return;

    this.queue.push({
      id: this.processId++,
      burst
    });

    this.render();
  }

  sortQueue() {

    this.queue.sort(
      (a, b) => a.burst - b.burst
    );
  }

  execute() {

    if (this.queue.length === 0) return;

    this.queue[0].burst--;

    if (this.queue[0].burst <= 0) {

      this.queue.shift();
    }
  }

  render() {

    const container =
      document.getElementById("array");

    container.innerHTML = "";

    this.queue.forEach((process, index) => {

      const box =
        document.createElement("div");

      box.className = "box";

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

const simulator =
  new SJFSimulator(5);

const addBtn =
  document.getElementById("addBtn");

const input =
  document.getElementById("numberInput");

addBtn.addEventListener("click", addManualProcess);

input.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {

    addManualProcess();
  }
});

function addManualProcess() {

  const value =
    Number(input.value);

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