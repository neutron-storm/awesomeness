

const runPage = () => {
  
  var app = new Vue({
    el: '#app',
    data: {
      address: '',
    	firstName: '',
    	lastName: '',
    	consent: true
    }
  });

  
  qs('#consented').onclick = () => {
    
    
    
    study.joinStudy(0, { from: participant, gas: 500000 }).then((res) => {
      window.location = 'upload.html';
    });
    
      
    
    
  };
  
  
  
  
  
};
