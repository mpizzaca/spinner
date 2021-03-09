const spin = () => {
  setTimeout(() => {
    process.stdout.write('\r|');
  }, 0);
  
  setTimeout(() => {
    process.stdout.write('\r/');
  }, 200);
  
  setTimeout(() => {
    process.stdout.write('\r-');
  }, 400);
  
  setTimeout(() => {
    process.stdout.write('\r\\');
  }, 600);
};


setInterval(spin, 800);