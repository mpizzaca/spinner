const spin = () => {
  const chars = ['|', '/', '-', '\\'];
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + chars[i]);
    }, i * 200);
  }
};

setInterval(spin, 800);