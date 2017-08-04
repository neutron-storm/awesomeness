

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
    
    
    study.joinStudy(0, { from: participant, gas: 500000 });
    
      
      
    setTimeout(() => study.getStudyParticipants.call(0).then((res) => {
      console.log(res.length);
    }), 500);
    
    
  };
  
  
  
  
  
};