const LuckyWheel = () => {

  const options = [
    "3",
    "0",
    "1",
    "2",
    "4",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];
  
  let startAngle = 0;
  let arc = Math.PI / (options.length / 2);
  let spinTimeout:any = null;
  let red, green, blue, spinAngleStart:any;
  // let spinArcStart = 10;
  let spinTime = 0;
  let spinTimeTotal = 0;
  let ctx:any;
  
  // document.getElementById("spin").addEventListener("click", spin);
  
  function byte2Hex(n:number) {
    let nybHexString = "0123456789ABCDEF";
    return (
      String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
      nybHexString.substr(n & 0x0f, 1)
    );
  }
  
  function RGB2Color(r:number, g:number, b:number):string {
    return "#" + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }
  
  function getColor(item:number, maxitem:number):string {
    let phase = 0;
    let center = 128;
    let width = 127;
    let frequency = (Math.PI * 2) / maxitem;
  
    red = Math.sin(frequency * item + 2 + phase) * width + center;
    green = Math.sin(frequency * item + 0 + phase) * width + center;
    blue = Math.sin(frequency * item + 4 + phase) * width + center;
  
    return RGB2Color(red, green, blue);
  }
  
  function drawRouletteWheel() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
    if (canvas?.getContext) {
      let outsideRadius = 200;
      let textRadius = 160;
      let insideRadius = 125;
  
      ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500);
  
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
  
      ctx.font = "bold 12px Helvetica, Arial";
  
      for (let i = 0; i < options.length; i++) {
        let angle = startAngle + i * arc;
        //ctx.fillStyle = colors[i];
        ctx.fillStyle = getColor(i, options.length);
  
        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();
  
        ctx.save();
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(
          250 + Math.cos(angle + arc / 2) * textRadius,
          250 + Math.sin(angle + arc / 2) * textRadius
        );
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        let text = options[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }
  
      //Arrow
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.fill();
    }
  }
  
  function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
  }
  
  function rotateWheel() {
    spinTime += 15;
    if (spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    let spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI) / 180;
    drawRouletteWheel();
    spinTimeout = setTimeout("rotateWheel()", 30);
  }
  
  function stopRotateWheel() {
    clearTimeout(spinTimeout);
    let degrees = (startAngle * 180) / Math.PI + 90;
    let arcd = (arc * 180) / Math.PI;
    let index = Math.floor((360 - (degrees % 360)) / arcd);
    ctx.save();
    ctx.font = "bold 30px Helvetica, Arial";
    let text = options[index];
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
    ctx.restore();
  }
  
  function easeOut(t:number, b:number, c:any, d:number) {
    let ts = (t /= d) * t;
    let tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }
  
  drawRouletteWheel();  
  
  return (
    <div>
      <input type="button" value="spin" id="spin" onClick={spin}/>
      <canvas id="canvas" width="550" height="550"></canvas>
      <script src="./main.js"></script>
    </div>
  );
};

export default LuckyWheel;
