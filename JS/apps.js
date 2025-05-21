let s = 0;
let m = 0;
let h = 0;
let intervalo;

const actualizarTiempo = () => {
  s++;
  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }
  tiempo.textContent = `${agregarCero(h)}:${agregarCero(m)}:${agregarCero(s)}`;
};

const iniciar = () => {
  if (!intervalo) {
    intervalo = setInterval(actualizarTiempo, 1000);
  }
};

const pausar = () => {
  clearInterval(intervalo);
  intervalo = null;
};

const reiniciar = () => {
  clearInterval(intervalo);
  intervalo = null;
  h=0, m= 0, s=0
  tiempo.textContent= `${agregarCero(h)}:${agregarCero(m)}:${agregarCero(s)}`;
};

const agregarCero = (num) => {
  return num < 10 ? "0" + num : num;
};

const tiempo = document.getElementById("tiempo");
const start = document.getElementById("btnIniciar");
const pause = document.getElementById("btnPausar");
const reset = document.getElementById("btnReset");

start.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("click", reiniciar);
