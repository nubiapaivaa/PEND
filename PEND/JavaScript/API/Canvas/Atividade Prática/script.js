const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//Aumentar as linhas do boneco chato
contexto.lineWidth = 6;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';

//Cabeça do boneco chato
contexto.beginPath();
contexto.arc(250, 130, 20, 0, Math.PI * 2);
contexto.stroke();

//Corpo do boneco chato
contexto.beginPath();
contexto.moveTo(250, 150);
contexto.lineTo(250, 200);
contexto.stroke();

//Cintura ao joelho esquerda do boneco chato
contexto.beginPath();
contexto.moveTo(230, 230);
contexto.lineTo(250, 200);
contexto.moveTo(230, 230);
contexto.lineTo(230, 270);
contexto.stroke();

//Cintura ao joelho direita do boneco chato
contexto.beginPath();
contexto.moveTo(270, 230);
contexto.lineTo(270, 270);
contexto.moveTo(270, 230);
contexto.lineTo(250, 200);
contexto.stroke();

//Braço esquerdo do boneco chato
contexto.beginPath();
contexto.moveTo(250, 150);
contexto.lineTo(230, 180);
contexto.lineTo(260, 190);
contexto.stroke();

//Braço direito do boneco chato
contexto.beginPath();
contexto.moveTo(250, 150);
contexto.lineTo(270, 180);
contexto.lineTo(290, 150);
contexto.stroke();






