

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

  
  qs('#yes-account').onclick = () => {
    app.address = 'Your address is: ' + participant;
  };
  
  
  qs('#address-correct').onclick = () => {
    window.location = 'studies.html';
  };
  
  // study.joinStudy(1, { from: participant, gas:500000 });
  
  
  // setTimeout(() => study.getStudyParticipants.call(1).then((res) => {
  //   console.log(res.length);
  // }), 500);
  
};