const sleep = (sleepDuration) => {
    const now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration);
  }
  
  const function1 = () => {
    console.log('Função 1');
    sleep(3000);
  }
  
  const function2 = () => {
    console.log('Função 2');
  }
  
  console.log('Antes de chamar as funções');
  
  function1();
  function2();
  
  console.log('Depois de chamar as funções');